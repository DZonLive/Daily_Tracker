# Changelog

Version numbers follow `MAJOR.MINOR.PATCH`. Versions below 1.0 are **beta**.
When releasing: update `APP_VERSION` in `app.js`, `VERSION` in `sw.js`, and add a section here.

## 0.10.0 (beta) — 2026-11-05
- New: Income section. Add what you earned on any day (amount + optional source), see totals for the day, week and month, a month chart, best day, a monthly goal, and earnings per hour of logged work. Amounts are before taxes, in USD.

## 0.9.3 (beta) — 2026-11-05
- Fix: the "new version" bar no longer stays on screen after reloading; updates apply on the next reload
- New: Share button in the header (phone share sheet or copy link)
- Sign-in stays saved on the device across restarts and updates (documented)

## 0.9.2 (beta) — 2026-11-05
- "Get the app" button is now always visible: one-tap install in Chrome/Edge, step-by-step instructions on iPhone, Mac Safari, Android and other browsers

## 0.9.1 (beta) — 2026-11-05
- Security: signing out now also deletes the offline copy of your data from this browser

## 0.9.0 (beta) — 2026-11-05
First public beta.

- Time logging: categories, duration chips, custom duration, start time, notes, live timer
- Custom categories with colors, "productive" flag, weekly or daily goals
- Month calendar with daily totals, 24-hour day timeline, day log
- Week chart, calendar-style week grid and a detailed week table
- Tasks with checkboxes and notes for any day; move unfinished tasks to tomorrow
- Productive-day streak
- English / Russian interface, light and dark theme
- Sign in with Google or email; data syncs between devices through Firebase
- Works offline: changes sync when the connection comes back
- Installable as an app (PWA); "new version available" banner
- Backup export / import; move data recorded before sign-in into the account
