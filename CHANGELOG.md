# Changelog

Version numbers follow `MAJOR.MINOR.PATCH`. Versions below 1.0 are **beta**.
When releasing: update `APP_VERSION` in `app.js`, `VERSION` in `sw.js`, and add a section here.

## 0.16.1 (beta) — 2026-11-08
- Floating ☰ button: stays in the top-left corner when you scroll down, so the menu is always one tap away

## 0.16.0 (beta) — 2026-11-08
- Shorter main page: ☰ menu (top left) with Categories & goals, Income, Week in detail and Settings as separate pages
- Week panel has a "Details" button that opens the hour grid and table
- Settings page: language, look, time format (24 h / 12 h), streak threshold
- Install, Share and Account moved into the menu
- Phone Back gesture closes the menu or page instead of leaving the app
- No changes to how data is stored. Previous version: branch backup/v0.15.2

## 0.15.2 (beta) — 2026-11-06
- Timer: for paid categories the earnings question appears after Stop ("Save" / "No earnings" / "Back to timer"), not while it runs; time spent answering doesn't count
- Fix: timer sessions under a minute are no longer saved (30–59 s used to round up to 1 min)
- Week table: edit and delete buttons on every row
- "income" checkbox renamed to "paid work"; short explanation of "productive" and "paid work" under Categories

## 0.15.1 (beta) — 2026-11-06
- Categories can be deleted (red × at the right end of the row, then "Delete?"). Past entries stay in history.
- Day log: ✎ edits an entry in the "Log time" form (pick another day while editing to move it); × is red and at the far right
- Fix: goal hour fields no longer have browser arrows covering the number; category rows no longer wrap

## 0.15.0 (beta) — 2026-11-06
- New "Luxe" look (porcelain, ink and brass; graphite and champagne in dark mode). The previous look stays available: footer → Look → Classic
- Update banner now appears while the app is open (checks every 5 minutes and when you return to the app) and no longer shows after a reload that already has the new version
- Time wheel: switch between 24 h and 12 h (AM/PM) right in the picker; times everywhere follow the choice
- Timer: Pause / Resume. Breaks are kept with the entry and shown as hatched gaps in the week grid and as "break …" in the log and table
- Category colors: palette with main colors, extra colors and any custom color
- Backup of the previous version: branch backup/v0.14.0-classic

## 0.14.0 (beta) — 2026-11-06
- "From – to" is now the first and default way to log time
- × button to remove a goal (category goals and the monthly income goal)
- Removed the "How the day went" timeline and the backup panel (moving pre-sign-in data to your account still appears when needed)
- Smooth animations: button presses, pop-ups, wheel sheet, day switching (respects "reduce motion")
- Phone: fast taps on the wheel arrows no longer zoom the page; inputs no longer zoom on iPhone

## 0.13.0 (beta) — 2026-11-06
- Time is now picked with scroll wheels (like a phone alarm clock) in a pop-up: hours and minutes columns, arrows ▲ ▼, mouse wheel and keyboard. 24-hour format, no AM/PM.
- Big tiles show the chosen duration / start / end; after picking the start, the end picker opens by itself; "Now" button in the picker

## 0.12.1 (beta) — 2026-11-06
- Fix: updates show up right after they are published (the app no longer reuses files the browser cached for up to 10 minutes)

## 0.12.0 (beta) — 2026-11-06
- New time entry: choose "How long" (− / + for hours and minutes, quick buttons up to 8 h, optional start time) or "From – to" (start and end; the length is calculated, overnight shifts supported, "Now" button for the end)
- Live preview shows exactly what will be saved: category, time range, length, earnings, day
- Goals per day and the streak threshold are now set in hours instead of minutes

## 0.11.0 (beta) — 2026-11-05
- Income is now entered together with work time: pick Work, the duration, and fill in "Earned" (a total or a per-hour rate, which is remembered). The separate income form is gone.
- Earnings show in the day log, the week table (new "Earned" column and day totals) and the week grid tooltips.
- Timer: a running paid category has an "Earned" field that is saved when you stop.
- Categories can be marked as "income" (Work is by default), e.g. for a second job.
- Income added with the separate form in 0.10.0 is kept and still counted.

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
