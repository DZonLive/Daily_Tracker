# Productivity Starter (beta)

A time-tracking and daily planning web app. Log how much time goes to study, work, workouts, rest or your own categories, plan tasks for any day, and see your week on a calendar-style grid. Works on phone and computer, offline too, and syncs between devices.

**Open the app:** https://dzonlive.github.io/Daily_Tracker/

## Features
- Quick time logging with duration chips, start time, notes and a live timer
- Custom categories with colors and weekly or daily goals
- Month calendar, 24-hour day timeline, week chart, week grid and table
- Tasks with checkboxes and notes for any day
- Productive-day streak
- English / Russian interface, light and dark theme
- Sign in with Google or email to sync between devices
- Works offline and installs to the home screen (PWA)

## Project structure
| File | What it does |
|---|---|
| `index.html` | Page layout |
| `styles.css` | Look and feel (light and dark theme) |
| `app.js` | App logic: state, rendering, time math, local storage |
| `cloud.js` | Firebase sign-in and Firestore sync (loaded on demand) |
| `sw.js` | Service worker: offline cache and update delivery |
| `manifest.webmanifest` | Name, icons and colors for installing the app |
| `firestore.rules` | Database security rules: each user can access only their own data |
| `CHANGELOG.md` | What changed in each version |

No frameworks or build step: plain HTML, CSS and JavaScript.

## How data is stored
- **Signed out:** in the browser's `localStorage` on this device only.
- **Signed in:** in Cloud Firestore under `users/{uid}/days/{date}` and `users/{uid}/meta/settings`. Firestore keeps an offline copy in the browser and syncs changes when online.
- The Firebase config in `cloud.js` is public by design; access is controlled by `firestore.rules`.

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
Google sign-in works locally only if `localhost` is in Firebase → Authentication → Settings → Authorized domains (it is there by default).

## Releasing a new version
1. Make the changes.
2. Bump `APP_VERSION` in `app.js` and `VERSION` in `sw.js` to the same number.
3. Add a section to `CHANGELOG.md`.
4. Push to `main`. GitHub Pages redeploys in about a minute, and open apps show an "Update" bar.
