# Changelog

Version numbers follow `MAJOR.MINOR.PATCH`. Versions below 1.0 are **beta**.
When releasing: update `APP_VERSION` in `app.js`, `VERSION` in `sw.js`, and add a section here.

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
