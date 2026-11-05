// cloud.js — sign-in and sync through Firebase (Auth + Firestore).
// app.js loads this file with import("./cloud.js"). If it can't load
// (no internet on the very first visit), the app keeps working on this device only.
//
// Data layout in Firestore (protected by firestore.rules, each user sees only their own):
//   users/{uid}/days/{YYYY-MM-DD}  -> { date, entries[], tasks[], note, updatedAt }
//   users/{uid}/meta/settings      -> { cats[], goals{}, wgoals{}, goalMode, timer, lang, streakMin, updatedAt }

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import {
  getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut as fbSignOut,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager, memoryLocalCache,
  collection, doc, onSnapshot, setDoc, deleteDoc, writeBatch, getDocs, serverTimestamp,
  terminate, clearIndexedDbPersistence,
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

// These keys are public by design: Firebase protects data with security rules, not with this config.
const firebaseConfig = {
  apiKey: "AIzaSyCxz1Wx8m0LTufmYt8tQwW2NnUWx93EHww",
  authDomain: "productivity-starter.firebaseapp.com",
  projectId: "productivity-starter",
  storageBucket: "productivity-starter.firebasestorage.app",
  messagingSenderId: "519022965574",
  appId: "1:519022965574:web:bc3c01ce2308f7d656ab47",
};

const app = initializeApp(firebaseConfig);
// getAuth keeps the sign-in in IndexedDB on this device ("local" persistence), so you stay signed in
// after closing the app, restarting the phone or installing an update. Only "Sign out" removes it.
const auth = getAuth(app);

// Offline cache in IndexedDB, shared between open tabs. Falls back to memory if the browser refuses.
let db;
try {
  db = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) });
} catch (e) {
  db = initializeFirestore(app, { localCache: memoryLocalCache() });
}

const daysCol = (uid) => collection(db, "users", uid, "days");
const dayRef = (uid, date) => doc(db, "users", uid, "days", date);
const settingsRef = (uid) => doc(db, "users", uid, "meta", "settings");

// ---------- auth ----------
export function onUser(cb) {
  return onAuthStateChanged(auth, (u) => cb(u ? { uid: u.uid, email: u.email || "", name: u.displayName || "" } : null));
}
export function signInGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(auth, provider);
}
export const signInEmail = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const signUpEmail = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);
// Sign out and wipe the offline copy of the data from this browser,
// so the next person using this device can't see it. The page reloads afterwards.
export async function signOut() {
  await fbSignOut(auth);
  try { await terminate(db); await clearIndexedDbPersistence(db); } catch (e) { console.warn("Couldn't clear offline cache:", e); }
}

// ---------- live data ----------
// onDays(daysMap, meta)        meta = { fromCache, pending }
// onSettings(dataOrNull, meta) null when the user has no settings yet
// onError(err)
export function subscribe(uid, onDays, onSettings, onError) {
  const opts = { includeMetadataChanges: true };
  const u1 = onSnapshot(daysCol(uid), opts, (snap) => {
    const days = {};
    snap.forEach((d) => { const v = d.data(); if (v && v.date) days[v.date] = v; });
    onDays(days, { fromCache: snap.metadata.fromCache, pending: snap.metadata.hasPendingWrites });
  }, onError);
  const u2 = onSnapshot(settingsRef(uid), opts, (snap) => {
    onSettings(snap.exists() ? snap.data() : null, { fromCache: snap.metadata.fromCache, pending: snap.metadata.hasPendingWrites });
  }, onError);
  return () => { u1(); u2(); };
}

// Writes go to the local cache right away and reach the server when online.
// The promises resolve only after the server confirms, so callers should not wait on them to update the screen.
export function saveDay(uid, date, d) {
  const empty = !d.entries.length && !d.tasks.length && !(d.note || "").trim();
  if (empty) return deleteDoc(dayRef(uid, date));
  return setDoc(dayRef(uid, date), { date, entries: d.entries, tasks: d.tasks, note: d.note || "", updatedAt: serverTimestamp() });
}
export function saveSettings(uid, s) {
  return setDoc(settingsRef(uid), { ...s, updatedAt: serverTimestamp() });
}

// Move days recorded on this device (before signing in) into the account.
// Entries and tasks are merged by id; notes are joined if both sides have different text.
export async function mergeDays(uid, localDays) {
  const snap = await getDocs(daysCol(uid));
  const cloud = {};
  snap.forEach((d) => { const v = d.data(); if (v && v.date) cloud[v.date] = v; });
  const dates = Object.keys(localDays);
  for (let i = 0; i < dates.length; i += 400) {
    const batch = writeBatch(db);
    dates.slice(i, i + 400).forEach((date) => {
      const a = localDays[date], b = cloud[date] || { entries: [], tasks: [], note: "" };
      const byId = (x, y) => { const m = new Map(); [...(y || []), ...(x || [])].forEach((e) => m.set(e.id, e)); return [...m.values()]; };
      const na = (a.note || "").trim(), nb = (b.note || "").trim();
      const note = !nb ? na : !na || na === nb ? nb : nb + "\n\n" + na;
      batch.set(dayRef(uid, date), { date, entries: byId(a.entries, b.entries), tasks: byId(a.tasks, b.tasks), note, updatedAt: serverTimestamp() });
    });
    await batch.commit();
  }
  return dates.length;
}
