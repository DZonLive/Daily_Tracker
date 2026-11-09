"use strict";
// Productivity Starter — keep in sync with VERSION in sw.js and CHANGELOG.md
const APP_VERSION="0.17.1";
(function(){
// ---------- i18n ----------
const I18N={
en:{sub:"Time journal: where your hours actually go",today:"Today",prevDay:"Previous day",nextDay:"Next day",prevMonth:"Previous month",nextMonth:"Next month",calendar:"Calendar",
 daySummary:"Day summary",totalLogged:"Total logged",ratio:"Productive {a}% · Other {b}%",noEntriesDay:"Nothing logged for this day",
 noGoal:"no goal",goalDone:"goal done ✓",goalWeekDone:"weekly goal done ✓",left:"{t} left",weekLeft:"week: {t} left",ofWeek:"· {a} of {b} this week",
 plan:"Plan",planHint:"pick any date in the calendar to plan ahead",tasks:"Tasks",taskPh:"Add a task…",noTasks:"No tasks for this day yet.",toTomorrow:"→ tomorrow",notes:"Notes",notesPh:"Notes for this day: plans, reminders, ideas…",saved:"saved",saving:"saving…",
 timeline:"How the day went",scale:"0–24 h scale",unplaced:"{n} without a start time ({t}): counted in totals, not shown on the scale.",tlEmpty:"Entries with a start time show up here as blocks.",
 logTime:"Log time",forToday:"for today",forDay:"for {d}",howLong:"How long",custom:"Custom",start:"Start",note:"Note",notePh:"What you did (optional)",add:"Add",
 startHint:"Start time is optional. For today, the entry is placed as if you just finished.",
 needDur:"Pick a duration or type one, e.g. 45 or 1:30",badDur:"Couldn't read the duration. Examples: 40, 1:15, 1.5h",notSaved:"Not saved: {e}",delFail:"Couldn't delete",settingsFail:"Settings weren't saved",timerShort:"Under a minute: nothing logged",added:"+{t} · {c}",addedAt:" · from {s}",timerAdded:"Timer: +{t} · {c}",
 timer:"Timer",running:"Timer running",since:"since {s}",stopLog:"Stop & log",reset:"Reset",timerIdle:"Track time live: start and end are logged automatically. Category:",go:"Start",
 journal:"Day log",emptyLog:"No entries. Pick a category and duration above, or start the timer.",noTime:"no time",
 week:"Week",total:"Total",productive:"Productive",activeDays:"Active days",ofSeven:"{n} of 7",avgActive:"Avg per active day",
 catsGoals:"Categories & goals",perWeek:"Per week",perDay:"Per day",hintWeek:"Hours per week. Best for an irregular schedule: what counts is the weekly total, not which day.",hintDay:"Hours per day, tracked separately for each day. Set 0 for no goal.",
 hPerWeek:"h / week",mPerDay:"h / day",prodLabel:"productive",hide:"Hide",show:"Show",hidden:"hidden",newCat:"New category",namePh:"Name, e.g. Trading, Reading, Side project",catExists:"That category already exists",catNeedName:"Type a name for the category",catAdded:"Category added: {c}",colorBtn:"Change color",
 deleted:"Deleted category",hasPlan:"tasks or notes",addCat:"+ Category",
 status_connecting:"Loading…",status_local:"Saved on this device",status_synced:"Synced",status_slow:"Storage isn't responding yet — data may be incomplete",status_err:"Storage error: {e}",
 h:"h",m:"m",dow:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
 entries:n=>n===1?"entry":"entries",
 cat_study:"Study",cat_work:"Work",cat_train:"Workout",cat_rest:"Rest",
 streakNow:"day streak",streakNow1:"day streak",streakBest:"Best: {n}",streakToday:"Today counts after {t} productive",streakTodayDone:"Today counts ✓",
 streakRule:"Streak: a day counts if productive time is at least",streakRule2:"hours",
 weekDetail:"Week in detail",prevWeek:"Previous week",nextWeek:"Next week",rangeAuto:"Auto",showTable:"Show as table",
 wdNoTime:"{n} without a start time this week ({t}) are only in the table.",wdEmpty:"Nothing logged this week yet.",
 status_offline:"Offline — changes are saved on this device",status_offline_pending:"Offline — changes will sync when you're back online",status_saving:"Syncing…",
 account:"Account",signIn:"Sign in",signInLead:"Sign in to sync your data between your phone and computer. Each account sees only its own data.",
 google:"Continue with Google",orEmail:"or with email",email:"Email",password:"Password (6+ characters)",signInBtn:"Sign in",signUpBtn:"Create account",forgot:"Forgot password?",
 resetSent:"Check your email for a password reset link.",signOut:"Sign out",signedInAs:"Signed in as",close:"Close",
 syncOn:"Synced across your devices",syncOff:"Stored on this device only · sign in to sync",
 acctUnavailable:"Sign-in isn't available right now (no connection to the server). You can keep using the app on this device.",
 migrateText:"This device has data for {n} day(s) recorded before you signed in. Move it into your account?",migrateBtn:"Move to account",
 migrated:"Moved {n} day(s) to your account.",migrateFail:"Couldn't move the data: {e}",
 errCreds:"Wrong email or password.",errExists:"An account with this email already exists. Try signing in.",errWeak:"Password must be at least 6 characters.",errEmail:"Enter a valid email.",
 errDomain:"This site isn't allowed in Firebase yet (Authorized domains).",errProvider:"This sign-in method isn't enabled in Firebase yet.",errNetwork:"No internet connection.",
 errPopup:"The Google window couldn't open here. Try signing in with email instead.",errTooMany:"Too many attempts. Wait a bit and try again.",errGeneric:"Sign-in failed: {e}",
 updateText:"A new version is available",updateBtn:"Update",
 share:"Share",shareTitle:"Share the app",shareLead:"Send this link to a friend. They get their own empty tracker; your data stays private.",shareText:"Productivity Starter — a simple tracker for study, work, workouts and rest.",copyLink:"Copy",linkCopied:"Link copied ✓",copyManual:"Select the link and copy it.",
 income:"Income",incMonthTotal:"Earned this month",statWeek:"This week",statPerHour:"Per hour of work",perHourHint:"month income ÷ hours in “{c}”",statBest:"Best day",earnDays:"paid days: {n}",
 addIncome:"Add income for {d}",amountPh:"Amount",srcPh:"Source (optional): job, client, gig…",noIncome:"No income on this day.",grossNote:"before taxes",
 incGoal:"Monthly income goal",goalHint:"empty or 0 = no goal",incGoalLeft:"{a} left to {b}",incGoalDone:"Goal reached ✓ {b}",badAmount:"Enter an amount, e.g. 85 or 120.50",incAdded:"Added {a}",dayIncome:"earned {a}",
 payLabel:"Earned",pmSum:"Total",pmRate:"Per hour",sumPh:"e.g. 60",ratePh:"$ per hour",payOptional:"optional — leave empty if unpaid",pickDur:"pick how long you worked",perHourIs:"≈ {r} per hour",
 thPay:"Earned",paidLabel:"paid work",perHourHint2:"month income ÷ hours in paid categories",legacyTitle:"Income added separately (older version)",
 incHow:"Income is added when you log time in {c}: pick the category, the duration and fill in “Earned”.",
 tmDur:"How long",tmRange:"From – to",hoursU:"h",minsU:"min",startedAt:"Started at",rStartL:"Start",rEndL:"End",nowBtn:"Now",
 pvDur:"Choose how long: tap Duration or a quick button",pvRange:"Set when you started and finished",pvNeedStart:"Set the start time",pvNeedEnd:"Set the end time",sameTimes:"Start and end are the same",
 pvJustNow:"ends now — set “Started at” if it was earlier",pvOvernight:"goes past midnight",pvNoTime:"no start time — counts in totals, not shown in the week grid",
 durL:"Duration",tapToPick:"Tap to choose",optional:"optional",startedAtT:"Started at",clearTime:"No start time",cancel:"Cancel",done:"Done",
 removeGoal:"Remove goal",goalRemoved:"Goal removed",
 use12:"12 h (AM/PM)",use24:"24 h",timeFmt:"Time format",pause:"Pause",resume:"Resume",onPause:"Paused",pausesN:"breaks: {n} ({t})",pausedFor:"break {t}",
 pickColor:"Choose color",colorsTitle:"Color",colorsMain:"Main",colorsMore:"More colors",colorsCustom:"Your own color",useColor:"Use",
 lookLabel:"Look",lookLuxe:"Luxe",lookClassic:"Classic",
 deleteCat:"Delete category",deleteQ:"Delete?",catDeleted:"Deleted “{c}”. Its past entries stay in your history.",lastCat:"You need at least one category.",
 editEntry:"Edit",deleteEntry:"Delete",saveChanges:"Save changes",editing:"Editing an entry",editMove:"Will move the entry to {d}",entrySaved:"Changes saved",
 catHelp:"Productive: counts toward the streak and the “Productive” share. Paid work: when you log time in it, you can add what you earned.",
 askPay:"How much did you earn for this?",askPayHint:"Leave empty or tap “No earnings” if this time wasn't paid.",savePay:"Save",noPay:"No earnings",backToTimer:"Back to timer",stopped:"Stopped",entryDeleted:"Entry deleted",
 menu:"Menu",back:"Back",detailsBtn:"Details",menuCats:"Categories & goals",menuCatsSub:"View and add categories, set goals",menuIncomeSub:"Month total, goal, earnings per hour",
 menuWeekSub:"Hour grid and table, edit entries",menuSettings:"Settings",menuSettingsSub:"Language, look, time format, streak",setLang:"Language",
 smWeek:"Weekly",smDay:"Daily",smOff:"Off",srHours:"By hours",srDays:"By active days",srHoursL:"Productive time per week, at least",srDaysL:"Active days per week, at least",srDaysOf7:"of 7",srDayMin:"A day is active with productive time of at least",
 smWeekHint:"Counts weeks in a row where you met your plan. Rest days don't break it, and the current week never resets it.",smDayHint:"Counts days in a row with productive time. Any day off breaks it.",smOffHint:"The streak is hidden.",
 swWeek1:"week in a row",swWeeks:"weeks in a row",swThis:"this week {a} / {b}",swThisDone:"this week done ✓",srDaysGoal:"{n} days",
 thisWeek:"This week",
 install:"Get the app",installShort:"Get app",instTitle:"Install the app",instLead:"Installed, it opens from your home screen or desktop like a normal app, full screen and offline.",instOther:"Other devices",
 inst_ios:"iPhone / iPad (Safari)",inst_ios_steps:["Tap the <b>Share</b> button (square with an arrow) at the bottom of Safari.","Scroll down and tap <b>Add to Home Screen</b>.","Tap <b>Add</b>. The app icon appears on your home screen."],
 inst_iosOther:"iPhone / iPad",inst_iosOther_steps:["Open this page in <b>Safari</b> (copy the link and paste it there).","Tap <b>Share</b>, then <b>Add to Home Screen</b>, then <b>Add</b>."],inst_iosOther_note:"Some other iPhone browsers also have Add to Home Screen in their Share menu, but Safari is the most reliable.",
 inst_android:"Android (Chrome)",inst_android_steps:["Tap the <b>⋮</b> menu in the top-right corner.","Tap <b>Install app</b> (or <b>Add to Home screen</b> → <b>Install</b>).","Confirm. The app appears with your other apps."],
 inst_samsung:"Android (Samsung Internet)",inst_samsung_steps:["Tap the <b>☰</b> menu at the bottom.","Tap <b>Add page to</b> → <b>Home screen</b>."],
 inst_desktop:"Computer (Chrome / Edge)",inst_desktop_steps:["Look for the <b>install icon</b> (a monitor with an arrow) at the right end of the address bar and click it.","No icon? Open the browser menu <b>⋮</b> / <b>…</b> and find <b>Install Productivity Starter</b> (in Chrome it may be under <b>Cast, save and share</b>; in Edge under <b>Apps</b>).","Click <b>Install</b>. The app opens in its own window and gets a shortcut."],
 inst_macSafari:"Mac (Safari)",inst_macSafari_steps:["In the menu bar choose <b>File</b> → <b>Add to Dock</b>.","Click <b>Add</b>. The app appears in your Dock."],inst_macSafari_note:"Needs macOS Sonoma or newer. On older versions use Chrome or Edge.",
 inst_firefox:"Firefox",inst_firefox_steps:["Firefox on computers can't install web apps.","Open this page in <b>Chrome</b> or <b>Edge</b> and install it from there. Your data syncs once you sign in."],
dataTitle:"Data & backup",dataWhere:"stored on this device",exportBtn:"Export backup",importBtn:"Import backup",
 dataHint:"A backup is a file you keep just in case. Signed out, Import replaces the data on this device; signed in, it adds the backup to your account.",
 iosHint:"iPhone: open this page in Safari, tap Share, then “Add to Home Screen” to install it as an app.",
 exported:"Backup saved: {f}",imported:"Imported: {n} days",importBad:"That file isn't a Productivity Starter backup.",storageFull:"Couldn't save: device storage is full or blocked.",
 thDay:"Day",thTime:"Time",thCat:"Category",thDur:"Duration",thNote:"Note",dayTotal:"total {t}"},
ru:{sub:"Дневник времени: на что на самом деле уходят часы",today:"Сегодня",prevDay:"Предыдущий день",nextDay:"Следующий день",prevMonth:"Предыдущий месяц",nextMonth:"Следующий месяц",calendar:"Календарь",
 daySummary:"Итог дня",totalLogged:"Всего записано",ratio:"Продуктивно {a}% · прочее {b}%",noEntriesDay:"За этот день записей нет",
 noGoal:"без цели",goalDone:"цель выполнена ✓",goalWeekDone:"цель недели выполнена ✓",left:"осталось {t}",weekLeft:"неделя: осталось {t}",ofWeek:"· {a} из {b} за неделю",
 plan:"План",planHint:"выбери любую дату в календаре, чтобы планировать наперёд",tasks:"Задачи",taskPh:"Добавить задачу…",noTasks:"На этот день задач пока нет.",toTomorrow:"→ на завтра",notes:"Заметки",notesPh:"Заметки на этот день: планы, напоминания, идеи…",saved:"сохранено",saving:"сохраняю…",
 timeline:"Как прошёл день",scale:"шкала 0–24 ч",unplaced:"{n} без времени начала ({t}): учтены в итогах, но не на шкале.",tlEmpty:"Записи с временем начала появятся здесь блоками.",
 logTime:"Записать время",forToday:"на сегодня",forDay:"на {d}",howLong:"Сколько",custom:"Своё",start:"Начало",note:"Заметка",notePh:"Что делал (необязательно)",add:"Добавить",
 startHint:"Начало можно не указывать: для сегодня запись встанет так, будто ты только что закончил.",
 needDur:"Выбери длительность или впиши её, например 45 или 1:30",badDur:"Не понял длительность. Примеры: 40, 1:15, 1.5ч",notSaved:"Не сохранилось: {e}",delFail:"Не удалось удалить",settingsFail:"Настройки не сохранились",timerShort:"Меньше минуты — запись не создана",added:"+{t} · {c}",addedAt:" · с {s}",timerAdded:"Таймер: +{t} · {c}",
 timer:"Таймер",running:"Таймер идёт",since:"с {s}",stopLog:"Стоп и записать",reset:"Сбросить",timerIdle:"Засекай время прямо во время занятия: начало и конец запишутся сами. Категория:",go:"Старт",
 journal:"Журнал дня",emptyLog:"Записей нет. Выбери категорию и длительность выше или запусти таймер.",noTime:"без времени",
 week:"Неделя",total:"Всего",productive:"Продуктивно",activeDays:"Активных дней",ofSeven:"{n} из 7",avgActive:"В среднем за активный день",
 catsGoals:"Категории и цели",perWeek:"На неделю",perDay:"На день",hintWeek:"Часы в неделю. Подходит для плавающего графика: важно, сколько набрал за неделю, а не в какой день.",hintDay:"Часы в день, считаются отдельно для каждого дня. Поставь 0, если цель не нужна.",
 hPerWeek:"ч / нед",mPerDay:"ч / день",prodLabel:"продуктивное",hide:"Скрыть",show:"Вернуть",hidden:"скрыта",newCat:"Новая категория",namePh:"Название, например Трейдинг, Чтение, Проект",catExists:"Такая категория уже есть",catNeedName:"Впиши название категории",catAdded:"Категория добавлена: {c}",colorBtn:"Сменить цвет",
 deleted:"Удалённая категория",hasPlan:"задачи или заметки",addCat:"+ Категория",
 status_connecting:"Загрузка…",status_local:"Сохранено на этом устройстве",status_synced:"Синхронизировано",status_slow:"Хранилище пока не отвечает — данные могут быть неполными",status_err:"Ошибка хранилища: {e}",
 h:"ч",m:"м",dow:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
 entries:n=>{const a=n%10,b=n%100;return (a===1&&b!==11)?"запись":(a>=2&&a<=4&&(b<10||b>=20))?"записи":"записей"},
 cat_study:"Учёба",cat_work:"Работа",cat_train:"Тренировка",cat_rest:"Отдых",
 streakNow:"дней подряд",streakNow1:"день подряд",streakBest:"Рекорд: {n}",streakToday:"Сегодня засчитается после {t} продуктивного",streakTodayDone:"Сегодня засчитано ✓",
 streakRule:"Streak: день засчитывается, если продуктивного времени не меньше",streakRule2:"ч",
 weekDetail:"Неделя подробно",prevWeek:"Предыдущая неделя",nextWeek:"Следующая неделя",rangeAuto:"Авто",showTable:"Показать таблицей",
 wdNoTime:"{n} без времени начала на этой неделе ({t}) есть только в таблице.",wdEmpty:"На этой неделе пока ничего не записано.",
 status_offline:"Офлайн — изменения сохранены на устройстве",status_offline_pending:"Офлайн — изменения отправятся, когда появится интернет",status_saving:"Синхронизация…",
 account:"Аккаунт",signIn:"Войти",signInLead:"Войди, чтобы данные синхронизировались между телефоном и компьютером. Каждый аккаунт видит только свои данные.",
 google:"Войти через Google",orEmail:"или по почте",email:"Почта",password:"Пароль (от 6 символов)",signInBtn:"Войти",signUpBtn:"Создать аккаунт",forgot:"Забыли пароль?",
 resetSent:"Проверь почту: мы отправили ссылку для сброса пароля.",signOut:"Выйти",signedInAs:"Вы вошли как",close:"Закрыть",
 syncOn:"Синхронизируется между твоими устройствами",syncOff:"Хранится только на этом устройстве · войди, чтобы синхронизировать",
 acctUnavailable:"Вход сейчас недоступен (нет связи с сервером). Приложением можно пользоваться на этом устройстве.",
 migrateText:"На этом устройстве есть {n} дн. с записями, сделанными до входа. Перенести их в аккаунт?",migrateBtn:"Перенести в аккаунт",
 migrated:"Перенесено в аккаунт дней: {n}.",migrateFail:"Не удалось перенести данные: {e}",
 errCreds:"Неверная почта или пароль.",errExists:"Аккаунт с этой почтой уже есть. Попробуй войти.",errWeak:"Пароль должен быть не короче 6 символов.",errEmail:"Введи правильную почту.",
 errDomain:"Этот сайт ещё не разрешён в Firebase (Authorized domains).",errProvider:"Этот способ входа ещё не включён в Firebase.",errNetwork:"Нет подключения к интернету.",
 errPopup:"Окно Google здесь не открывается. Попробуй войти по почте.",errTooMany:"Слишком много попыток. Подожди немного и попробуй снова.",errGeneric:"Не удалось войти: {e}",
 updateText:"Доступна новая версия",updateBtn:"Обновить",
 share:"Поделиться",shareTitle:"Поделиться приложением",shareLead:"Отправь эту ссылку другу. У него будет свой пустой трекер, твои данные останутся личными.",shareText:"Productivity Starter — простой трекер учёбы, работы, тренировок и отдыха.",copyLink:"Копировать",linkCopied:"Ссылка скопирована ✓",copyManual:"Выдели ссылку и скопируй её.",
 income:"Доход",incMonthTotal:"Заработано за месяц",statWeek:"За неделю",statPerHour:"За час работы",perHourHint:"доход за месяц ÷ часы в «{c}»",statBest:"Лучший день",earnDays:"дней с доходом: {n}",
 addIncome:"Добавить доход за {d}",amountPh:"Сумма",srcPh:"Откуда (необязательно): работа, клиент, подработка…",noIncome:"За этот день дохода нет.",grossNote:"до налогов",
 incGoal:"Цель по доходу на месяц",goalHint:"пусто или 0 — без цели",incGoalLeft:"до {b} осталось {a}",incGoalDone:"Цель достигнута ✓ {b}",badAmount:"Введи сумму, например 85 или 120.50",incAdded:"Добавлено {a}",dayIncome:"заработано {a}",
 payLabel:"Заработок",pmSum:"Сумма",pmRate:"В час",sumPh:"напр. 60",ratePh:"$ в час",payOptional:"необязательно — оставь пустым, если не платили",pickDur:"выбери, сколько работал",perHourIs:"≈ {r} в час",
 thPay:"Заработок",paidLabel:"оплачиваемая",perHourHint2:"доход за месяц ÷ часы в оплачиваемых категориях",legacyTitle:"Доход, добавленный отдельно (старая версия)",
 incHow:"Доход добавляется при записи времени в {c}: выбери категорию, длительность и заполни «Заработок».",
 tmDur:"Сколько времени",tmRange:"С … до …",hoursU:"ч",minsU:"мин",startedAt:"Начал в",rStartL:"Начало",rEndL:"Конец",nowBtn:"Сейчас",
 pvDur:"Выбери, сколько: нажми «Длительность» или быструю кнопку",pvRange:"Укажи, во сколько начал и закончил",pvNeedStart:"Укажи время начала",pvNeedEnd:"Укажи время конца",sameTimes:"Начало и конец совпадают",
 pvJustNow:"закончил только что — укажи «Начал в», если было раньше",pvOvernight:"через полночь",pvNoTime:"без времени начала — попадёт в итоги, но не в недельную сетку",
 durL:"Длительность",tapToPick:"Нажми, чтобы выбрать",optional:"необязательно",startedAtT:"Начал в",clearTime:"Без времени",cancel:"Отмена",done:"Готово",
 removeGoal:"Убрать цель",goalRemoved:"Цель убрана",
 use12:"12 ч (AM/PM)",use24:"24 ч",timeFmt:"Формат времени",pause:"Пауза",resume:"Продолжить",onPause:"На паузе",pausesN:"пауз: {n} ({t})",pausedFor:"пауза {t}",
 pickColor:"Выбрать цвет",colorsTitle:"Цвет",colorsMain:"Основные",colorsMore:"Ещё цвета",colorsCustom:"Свой цвет",useColor:"Выбрать",
 lookLabel:"Оформление",lookLuxe:"Люкс",lookClassic:"Классика",
 deleteCat:"Удалить категорию",deleteQ:"Удалить?",catDeleted:"Категория «{c}» удалена. Её прошлые записи останутся в истории.",lastCat:"Нужна хотя бы одна категория.",
 editEntry:"Изменить",deleteEntry:"Удалить",saveChanges:"Сохранить изменения",editing:"Редактирование записи",editMove:"Запись переместится на {d}",entrySaved:"Изменения сохранены",
 catHelp:"Продуктивное — время идёт в streak и в долю «Продуктивно». Оплачиваемая — при записи времени можно указать, сколько заработал.",
 askPay:"Сколько заработал за это время?",askPayHint:"Оставь пустым или нажми «Без заработка», если за это время не платили.",savePay:"Сохранить",noPay:"Без заработка",backToTimer:"Вернуться к таймеру",stopped:"Остановлен",entryDeleted:"Запись удалена",
 menu:"Меню",back:"Назад",detailsBtn:"Подробно",menuCats:"Категории и цели",menuCatsSub:"Просмотр и добавление категорий, цели",menuIncomeSub:"Итог за месяц, цель, заработок в час",
 menuWeekSub:"Сетка по часам и таблица, правка записей",menuSettings:"Настройки",menuSettingsSub:"Язык, оформление, формат времени, streak",setLang:"Язык",
 smWeek:"По неделям",smDay:"По дням",smOff:"Выключен",srHours:"По часам",srDays:"По активным дням",srHoursL:"Продуктивного времени в неделю, не меньше",srDaysL:"Активных дней в неделю, не меньше",srDaysOf7:"из 7",srDayMin:"День активный, если продуктивного времени не меньше",
 smWeekHint:"Считает недели подряд, в которых ты выполнил план. Дни отдыха его не сбивают, а текущая неделя никогда не обнуляет серию.",smDayHint:"Считает дни подряд с продуктивным временем. Любой выходной обнуляет серию.",smOffHint:"Streak скрыт.",
 swWeek1:"неделя подряд",swWeeks:"недель подряд",swThis:"эта неделя {a} / {b}",swThisDone:"эта неделя выполнена ✓",srDaysGoal:"{n} дн.",
 thisWeek:"Эта неделя",
 install:"Скачать приложение",installShort:"Скачать",instTitle:"Установить приложение",instLead:"После установки оно открывается с главного экрана или рабочего стола как обычное приложение: на весь экран и без интернета.",instOther:"Другие устройства",
 inst_ios:"iPhone / iPad (Safari)",inst_ios_steps:["Нажми кнопку <b>«Поделиться»</b> (квадрат со стрелкой) внизу Safari.","Пролистай вниз и выбери <b>«На экран „Домой“»</b>.","Нажми <b>«Добавить»</b>. Иконка появится на главном экране."],
 inst_iosOther:"iPhone / iPad",inst_iosOther_steps:["Открой эту страницу в <b>Safari</b> (скопируй ссылку и вставь её туда).","Нажми <b>«Поделиться»</b> → <b>«На экран „Домой“»</b> → <b>«Добавить»</b>."],inst_iosOther_note:"В некоторых других браузерах на iPhone тоже есть «На экран „Домой“» в меню «Поделиться», но надёжнее всего Safari.",
 inst_android:"Android (Chrome)",inst_android_steps:["Нажми меню <b>⋮</b> в правом верхнем углу.","Выбери <b>«Установить приложение»</b> (или <b>«Добавить на главный экран»</b> → <b>«Установить»</b>).","Подтверди. Приложение появится среди остальных."],
 inst_samsung:"Android (Samsung Internet)",inst_samsung_steps:["Нажми меню <b>☰</b> внизу.","Выбери <b>«Добавить страницу на»</b> → <b>«Главный экран»</b>."],
 inst_desktop:"Компьютер (Chrome / Edge)",inst_desktop_steps:["Найди <b>значок установки</b> (монитор со стрелкой) справа в адресной строке и нажми на него.","Нет значка? Открой меню браузера <b>⋮</b> / <b>…</b> и найди <b>«Установить Productivity Starter»</b> (в Chrome может быть в разделе <b>«Трансляция, сохранение и отправка»</b>, в Edge в разделе <b>«Приложения»</b>).","Нажми <b>«Установить»</b>. Приложение откроется в отдельном окне и получит ярлык."],
 inst_macSafari:"Mac (Safari)",inst_macSafari_steps:["В строке меню выбери <b>«Файл»</b> → <b>«Добавить в Dock»</b>.","Нажми <b>«Добавить»</b>. Приложение появится в Dock."],inst_macSafari_note:"Нужна macOS Sonoma или новее. На более старых версиях используй Chrome или Edge.",
 inst_firefox:"Firefox",inst_firefox_steps:["Firefox на компьютере не умеет устанавливать веб-приложения.","Открой эту страницу в <b>Chrome</b> или <b>Edge</b> и установи оттуда. После входа данные синхронизируются."],
dataTitle:"Данные и резервная копия",dataWhere:"хранятся на этом устройстве",exportBtn:"Скачать копию",importBtn:"Загрузить копию",
 dataHint:"Копия — это файл на всякий случай. Без входа «Загрузить копию» заменяет данные на устройстве, а со входом добавляет их в аккаунт.",
 iosHint:"iPhone: открой эту страницу в Safari, нажми «Поделиться», затем «На экран „Домой“», чтобы установить как приложение.",
 exported:"Копия сохранена: {f}",imported:"Загружено дней: {n}",importBad:"Это не файл резервной копии Productivity Starter.",storageFull:"Не удалось сохранить: память устройства заполнена или недоступна.",
 thDay:"День",thTime:"Время",thCat:"Категория",thDur:"Длительность",thNote:"Заметка",dayTotal:"всего {t}"}
};
let LANG="en";
try{const l=localStorage.getItem("ps-lang");if(l==="ru"||l==="en")LANG=l}catch(e){}
function T(k,vars){let s=I18N[LANG][k];if(s==null)s=I18N.en[k]??k;if(typeof s==="string"&&vars)for(const v in vars)s=s.split("{"+v+"}").join(vars[v]);return s}
function loc(){return LANG==="ru"?"ru-RU":"en-US"}

// ---------- categories ----------
const COLORS=["study","work","train","rest","sky","teal","red","olive","plum","slate"];
const DEFAULT_CATS=[
  {k:"study",color:"study",prod:true},
  {k:"work",color:"work",prod:true},
  {k:"train",color:"train",prod:true},
  {k:"rest",color:"rest",prod:false},
];
const DEF_DAY={study:120,work:240,train:60,rest:90};
const DEF_WEEK={study:600,work:1200,train:240,rest:600};
const DURS=[15,30,45,60,90,120,180,240,360,480];
const $=id=>document.getElementById(id);

const S={
  days:{},          // date -> {entries:[], tasks:[], note:""}
  cats:DEFAULT_CATS.map(c=>({...c})),
  goals:{...DEF_DAY}, wgoals:{...DEF_WEEK}, goalMode:"week",
  timer:null, sel:todayStr(), month:null, cat:"study", dh:0, dm:0, tmode:"range", clock12:false, newColor:"sky", streakMin:60, streakMode:"week", streakRule:"hours", streakWeekH:900, streakWeekDays:5, wdRange:"auto", incomeGoal:0, payMode:"sum", payRates:{},
};
S.month=monthOf(S.sel);
S.wk=weekStart(S.sel); // week shown in the Week panel, streak and week detail (arrows move only this)
try{const tm=localStorage.getItem("ps-tmode2");if(tm==="dur"||tm==="range")S.tmode=tm}catch(e){}

// Category colors: a theme token ("study", "sky"…) or any custom "#rrggbb" picked from the palette.
// Custom colors become CSS variables --cc-<key> so every place that uses var(--…) keeps working.
const EXTRA_COLORS=["#c0392b","#e0603a","#e8a33d","#d4b44a","#9aae3b","#4f9d69","#2f8f83","#2a7fa8","#3f63c7","#6a4fc4","#9b4fb8","#c2508f",
  "#8c5a3c","#b08a5a","#5b6b7a","#2e3440","#a3a8b3","#e6c79c"];
const isHex=c=>/^#[0-9a-f]{6}$/i.test(c||"");
function catVar(c){if(COLORS.includes(c.color))return "--"+c.color;if(isHex(c.color))return "--cc-"+c.k;return "--slate"}
const colorCss=col=>isHex(col)?col:`var(--${COLORS.includes(col)?col:"slate"})`;
function syncCatColors(){
  let el=$("catColors");if(!el){el=document.createElement("style");el.id="catColors";document.head.appendChild(el)}
  const css=S.cats.filter(c=>isHex(c.color)).map(c=>`--cc-${c.k}:${c.color};`).join("");
  el.textContent=css?`:root{${css}}`:"";
}
let colorCb=null;
function openColors(current,cb){
  colorCb=cb;
  const sw=(col,label)=>`<button type="button" class="sw big" style="--c:${colorCss(col)}" data-pick="${col}" aria-pressed="${current===col}" aria-label="${esc(label||col)}"></button>`;
  $("colPresets").innerHTML=COLORS.map(c=>sw(c)).join("");
  $("colExtra").innerHTML=EXTRA_COLORS.map(c=>sw(c)).join("");
  $("colCustom").value=isHex(current)?current:"#7a6cf0";
  try{$("colorDlg").showModal()}catch(e){$("colorDlg").setAttribute("open","")}
}
function pickColor(col){const cb=colorCb;colorCb=null;$("colorDlg").close();if(cb)cb(col)}

function catInfo(k){
  const c=S.cats.find(x=>x.k===k);
  if(!c)return {k,name:T("deleted"),v:"--slate",prod:false,off:true,missing:true,paid:false};
  return {k,name:c.name||T("cat_"+k),v:catVar(c),prod:!!c.prod,off:!!c.off,paid:c.paid!=null?!!c.paid:k==="work"};
}
const activeCats=()=>S.cats.filter(c=>!c.off).map(c=>catInfo(c.k));

// ---------- dates & formatting ----------
function pad(n){return String(n).padStart(2,"0")}
function toStr(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
function todayStr(){return toStr(new Date())}
function parse(s){const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)}
function addDays(s,n){const d=parse(s);d.setDate(d.getDate()+n);return toStr(d)}
function monthOf(s){return s.slice(0,8)+"01"}
function addMonths(s,n){const d=parse(s);d.setDate(1);d.setMonth(d.getMonth()+n);return toStr(d)}
function weekStart(s){const d=parse(s);const wd=(d.getDay()+6)%7;d.setDate(d.getDate()-wd);return toStr(d)}
function fmt(min){min=Math.round(min);const h=Math.floor(min/60),m=min%60,H=T("h"),M=T("m");if(!h)return m+" "+M;if(!m)return h+" "+H;return h+" "+H+" "+m+" "+M}
function fmtShort(min){min=Math.round(min);return Math.floor(min/60)+":"+pad(min%60)}
function toMin(hhmm){if(!hhmm)return null;const [h,m]=hhmm.split(":").map(Number);return isFinite(h)&&isFinite(m)?h*60+m:null}
function fromMin(x){x=((Math.round(x)%1440)+1440)%1440;return pad(Math.floor(x/60))+":"+pad(x%60)} // storage format, always 24 h
// Display format follows the user's choice: 24 h ("13:05") or 12 h ("1:05 PM")
function clock(x){x=((Math.round(x)%1440)+1440)%1440;const h=Math.floor(x/60),m=x%60;if(!S.clock12)return pad(h)+":"+pad(m);return ((h%12)||12)+":"+pad(m)+" "+(h<12?"AM":"PM")}
const clockStr=hhmm=>{const m=toMin(hhmm);return m==null?"":clock(m)};
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const fDay=()=>new Intl.DateTimeFormat(loc(),{weekday:"short",day:"numeric",month:"long"});
const fD=()=>new Intl.DateTimeFormat(loc(),{day:"numeric",month:"short"});
const fMonth=()=>new Intl.DateTimeFormat(loc(),{month:"long",year:"numeric"});
function esc(s){return String(s||"").replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]))}
function parseDur(raw){
  let s=(raw||"").trim().toLowerCase().replace(",",".");
  if(!s)return null;
  let m=s.match(/^(\d{1,2}):(\d{1,2})$/); if(m)return +m[1]*60+ +m[2];
  m=s.match(/^(\d+(?:\.\d+)?)\s*(ч|h)\s*(?:(\d+)\s*(м|m|мин|min)?)?$/); if(m)return Math.round(+m[1]*60+(m[3]?+m[3]:0));
  m=s.match(/^(\d+)\s*(м|m|мин|min)?$/); if(m)return +m[1];
  return NaN;
}

// ---------- day data ----------
function day(date){const d=S.days[date];return d?(d.income?d:{...d,income:[]}):{entries:[],tasks:[],note:"",income:[]}}
function setDay(date,patch){S.days={...S.days,[date]:{...day(date),...patch}}}
function normDay(v){
  if(Array.isArray(v))return {entries:v,tasks:[],note:"",income:[]};
  const arr=k=>Array.isArray(v&&v[k])?v[k].slice():[];
  return {entries:arr("entries"),tasks:arr("tasks"),note:typeof(v&&v.note)==="string"?v.note:"",income:arr("income").filter(x=>x&&isFinite(+x.amount))};
}

// ---------- storage ----------
// Two modes:
//  - "local": not signed in, data in localStorage on this device
//  - "cloud": signed in, data in Firestore (synced between devices, works offline)
const LOCAL_KEY="ps-planner-v1";
let store=null;const queues={};
let cloud=null;          // the cloud.js module once loaded
let cloudFailed=false;   // couldn't load it (offline / blocked)
let user=null;           // {uid,email,name} when signed in
let unsub=null;          // stops cloud listeners
let lastSettingsJSON=""; // avoid re-writing settings that came from the server
function queued(key,fn){const p=(queues[key]||Promise.resolve()).then(fn,fn);queues[key]=p.catch(()=>{});return p}
function settingsBody(){return {type:"settings",cats:S.cats,goals:S.goals,wgoals:S.wgoals,goalMode:S.goalMode,timer:S.timer,lang:LANG,streakMin:S.streakMin,streakMode:S.streakMode,streakRule:S.streakRule,streakWeekH:S.streakWeekH,streakWeekDays:S.streakWeekDays,incomeGoal:S.incomeGoal,payMode:S.payMode,payRates:S.payRates,clock12:S.clock12}}
function applySettings(v){
  if(!v)return;
  if(Array.isArray(v.cats)&&v.cats.length)S.cats=v.cats.map(c=>({...c}));
  S.goals={...S.goals,...(v.goals||{})};
  S.wgoals={...S.wgoals,...(v.wgoals||{})};
  if(v.goalMode==="day"||v.goalMode==="week")S.goalMode=v.goalMode;
  S.timer=v.timer||null;
  if(+v.streakMin>0)S.streakMin=+v.streakMin;
  if(["week","day","off"].includes(v.streakMode))S.streakMode=v.streakMode;
  if(["hours","days"].includes(v.streakRule))S.streakRule=v.streakRule;
  if(+v.streakWeekH>0)S.streakWeekH=+v.streakWeekH;
  if(+v.streakWeekDays>=1&&+v.streakWeekDays<=7)S.streakWeekDays=Math.round(+v.streakWeekDays);
  if(v.incomeGoal!=null&&isFinite(+v.incomeGoal))S.incomeGoal=Math.max(0,+v.incomeGoal);
  if(v.payMode==="sum"||v.payMode==="rate")S.payMode=v.payMode;
  if(v.payRates&&typeof v.payRates==="object")S.payRates={...v.payRates};
  if(typeof v.clock12==="boolean")S.clock12=v.clock12;
  // language is a per-device choice; take it from the data only if this device hasn't picked one
  let chosen=null;try{chosen=localStorage.getItem("ps-lang")}catch(e){}
  if(!chosen&&(v.lang==="ru"||v.lang==="en")&&v.lang!==LANG){LANG=v.lang;try{localStorage.setItem("ps-lang",LANG)}catch(e){}}
}
function readLocal(){try{const raw=localStorage.getItem(LOCAL_KEY);return raw?JSON.parse(raw):null}catch(e){return null}}
function localDaysCount(){const d=readLocal();return d&&d.days?Object.keys(d.days).filter(k=>{const v=normDay(d.days[k]);return v.entries.length||v.tasks.length||v.income.length||v.note.trim()}).length:0}
function localStore(){
  const d=readLocal();
  S.days={};if(d){for(const k in (d.days||{}))S.days[k]=normDay(d.days[k]);applySettings(d)}
  const save=()=>{try{localStorage.setItem(LOCAL_KEY,JSON.stringify({app:"productivity-starter",v:1,days:S.days,...settingsBody()}))}catch(e){showMsg(T("storageFull"),true)}};
  return {mode:"local",saveDay:async()=>save(),saveSettings:async()=>save()};
}
function cloudStore(u){
  const report=e=>{console.error(e);setStatus("status_err",{e:(e&&(e.code||e.message))||"error"})};
  return {mode:"cloud",
    // Firestore applies the write locally at once; the promise only settles when the server confirms (maybe much later offline).
    saveDay:async(date)=>{cloud.saveDay(u.uid,date,day(date)).catch(report)},
    saveSettings:async()=>{const b=settingsBody();lastSettingsJSON=JSON.stringify(b);cloud.saveSettings(u.uid,b).catch(report)}};
}
let statusKey="status_connecting",statusVar=null;
function setStatus(k,v){statusKey=k;statusVar=v;$("status").textContent=T(k,v)}

function startLocal(){
  if(unsub){unsub();unsub=null}
  store=localStore();setStatus("status_local");render();
}
function startCloud(u){
  if(unsub){unsub();unsub=null}
  flushNote();
  S.days={};store=cloudStore(u);setStatus("status_connecting");render();
  let gotDays=false,gotSettings=false;
  const status=(m)=>{
    if(!gotDays)return;
    if(!navigator.onLine)setStatus(m.pending?"status_offline_pending":"status_offline");
    else if(m.pending)setStatus("status_saving");
    else if(!m.fromCache)setStatus("status_synced");
  };
  unsub=cloud.subscribe(u.uid,(days,m)=>{
    const next={};for(const k in days)next[k]=normDay(days[k]);
    if(noteDirty){next[noteDirty.date]={...(next[noteDirty.date]||{entries:[],tasks:[],note:"",income:[]}),note:day(noteDirty.date).note}}
    S.days=next;gotDays=true;status(m);render();
  },(v,m)=>{
    if(v){const j=JSON.stringify({...v,updatedAt:undefined});if(j!==lastSettingsJSON){applySettings(v);render()}}
    else if(!m.fromCache&&!gotSettings){store.saveSettings()} // first sign-in: keep the settings already on screen
    gotSettings=true;
  },e=>{console.error(e);setStatus("status_err",{e:(e&&(e.code||e.message))||"error"})});
}
window.addEventListener("online",()=>{if(store&&store.mode==="cloud"&&statusKey.startsWith("status_offline"))setStatus("status_saving")});
window.addEventListener("offline",()=>{if(store&&store.mode==="cloud")setStatus("status_offline")});

async function boot(){
  startLocal();
  try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
  // another tab changed local data
  window.addEventListener("storage",e=>{if(e.key===LOCAL_KEY&&store&&store.mode==="local"&&!noteDirty){store=localStore();render()}});
  try{
    cloud=await import("./cloud.js");
    cloud.onUser(u=>{
      const was=user&&user.uid;user=u;
      if(u&&u.uid!==was)startCloud(u);else if(!u&&was)startLocal();
      renderAccount();
    });
  }catch(e){console.warn("Sign-in unavailable:",e);cloudFailed=true;renderAccount()}
}

// ---------- account ----------
function authError(e){
  const c=(e&&e.code)||"";
  const map={"auth/invalid-credential":"errCreds","auth/wrong-password":"errCreds","auth/user-not-found":"errCreds","auth/invalid-login-credentials":"errCreds",
    "auth/email-already-in-use":"errExists","auth/weak-password":"errWeak","auth/invalid-email":"errEmail","auth/missing-password":"errWeak",
    "auth/unauthorized-domain":"errDomain","auth/operation-not-allowed":"errProvider","auth/network-request-failed":"errNetwork",
    "auth/popup-blocked":"errPopup","auth/operation-not-supported-in-this-environment":"errPopup","auth/web-storage-unsupported":"errPopup","auth/too-many-requests":"errTooMany"};
  return map[c]?T(map[c]):T("errGeneric",{e:c||(e&&e.message)||"?"});
}
function acctMsg(t,kind){const m=$("acctMsg");m.textContent=t||"";m.className="datamsg"+(kind?" "+kind:"")}
function renderAccount(){
  const b=$("acctBtn");
  if(user){b.textContent=(user.name||user.email||"?").trim().charAt(0).toUpperCase();b.classList.add("avatar");b.setAttribute("aria-label",T("account"))}
  else{b.textContent=T("signIn");b.classList.remove("avatar");b.setAttribute("aria-label",T("signIn"))}
  $("acctOut").hidden=!!user;$("acctIn").hidden=!user;
  $("acctUnavailable").hidden=!cloudFailed;$("acctForm").hidden=cloudFailed;
  if(user){$("acctWho").textContent=user.name?user.name+" · "+user.email:user.email}
  const n=user?localDaysCount():0;
  $("migrateBox").hidden=!n;
  if(n)$("migrateText").textContent=T("migrateText",{n});
}
async function doAuth(kind){
  if(!cloud)return;
  const email=$("acctEmail").value.trim(),pass=$("acctPass").value;
  acctMsg("");
  try{
    if(kind==="google")await cloud.signInGoogle();
    else if(kind==="in")await cloud.signInEmail(email,pass);
    else if(kind==="up")await cloud.signUpEmail(email,pass);
    else if(kind==="reset"){if(!email){acctMsg(T("errEmail"),"err");return}await cloud.resetPassword(email);acctMsg(T("resetSent"),"ok");return}
    $("acctPass").value="";$("acct").close();
  }catch(e){if(e&&e.code==="auth/popup-closed-by-user"||e&&e.code==="auth/cancelled-popup-request")return;acctMsg(authError(e),"err")}
}
async function migrateLocal(){
  if(!cloud||!user)return;
  const d=readLocal();if(!d||!d.days)return;
  const days={};for(const k in d.days){const v=normDay(d.days[k]);if(v.entries.length||v.tasks.length||v.income.length||v.note.trim())days[k]=v}
  $("migrateBtn").disabled=true;
  try{
    const n=await cloud.mergeDays(user.uid,days);
    try{localStorage.setItem(LOCAL_KEY,JSON.stringify({...d,days:{}}))}catch(e){}
    dataMsg(T("migrated",{n}),"ok");
  }catch(e){dataMsg(T("migrateFail",{e:(e&&(e.code||e.message))||"?"}),"err")}
  $("migrateBtn").disabled=false;renderAccount();
}

// ---------- backup ----------
function exportBackup(){
  flushNote();
  const data={app:"productivity-starter",v:1,exportedAt:new Date().toISOString(),days:S.days,...settingsBody()};
  const blob=new Blob([JSON.stringify(data,null,1)],{type:"application/json"});
  const name="productivity-backup-"+todayStr()+".json";
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);
  dataMsg(T("exported",{f:name}),"ok");
}
function importBackup(file){
  const r=new FileReader();
  r.onload=()=>{
    let d;try{d=JSON.parse(r.result)}catch(e){d=null}
    if(!d||typeof d!=="object"||!d.days||typeof d.days!=="object"){dataMsg(T("importBad"),"err");return}
    const days={};for(const k in d.days)if(/^\d{4}-\d{2}-\d{2}$/.test(k))days[k]=normDay(d.days[k]);
    applySettings(d);
    if(store.mode==="cloud"){
      cloud.mergeDays(user.uid,days).then(n=>{store.saveSettings();dataMsg(T("imported",{n}),"ok")}).catch(e=>dataMsg(T("migrateFail",{e:(e&&(e.code||e.message))||"?"}),"err"));
      render();return;
    }
    S.days=days;store.saveSettings();render();
    dataMsg(T("imported",{n:Object.keys(days).length}),"ok");
  };
  r.readAsText(file);
}
function dataMsg(t,kind){const m=$("dataMsg");m.textContent=t;m.className="datamsg"+(kind?" "+kind:"")}

// ---------- install / offline ----------
// The "Get the app" button is always visible (except inside the installed app).
// Chrome/Edge: it opens the browser's own install prompt. Other browsers can't be triggered
// from a page, so it shows short steps for the device instead.
let deferredInstall=null;
const UA=navigator.userAgent;
const PLATFORM=(()=>{
  const ios=/iphone|ipad|ipod/i.test(UA)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
  if(ios)return /CriOS|FxiOS|EdgiOS|OPiOS|YaBrowser/i.test(UA)?"iosOther":"ios";
  if(/android/i.test(UA))return /SamsungBrowser/i.test(UA)?"samsung":"android";
  if(/Firefox\//.test(UA))return "firefox";
  if(/Macintosh/.test(UA)&&/Safari\//.test(UA)&&!/Chrome|Chromium|Edg\//.test(UA))return "macSafari";
  return "desktop";
})();
const isStandalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
function syncInstallBtn(){$("installBtn").hidden=isStandalone()}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e});
window.addEventListener("appinstalled",()=>{deferredInstall=null;try{$("installDlg").close()}catch(e){}syncInstallBtn()});
syncInstallBtn();
const INST_ORDER=["ios","iosOther","android","samsung","desktop","macSafari","firefox"];
function instBlock(k){const st=T("inst_"+k+"_steps");return `<div class="inst"><h4>${T("inst_"+k)}</h4><ol>${st.map(x=>`<li>${x}</li>`).join("")}</ol>${T("inst_"+k+"_note")!=="inst_"+k+"_note"?`<p class="note">${T("inst_"+k+"_note")}</p>`:""}</div>`}
// ---------- share ----------
const APP_URL=new URL("./",location.href).href;
async function shareApp(){
  const data={title:"Productivity Starter",text:T("shareText"),url:APP_URL};
  if(navigator.share){
    try{await navigator.share(data);return}catch(e){if(e&&e.name==="AbortError")return}
  }
  let ok=false;
  try{await navigator.clipboard.writeText(APP_URL);ok=true}catch(e){}
  $("shareUrl").value=APP_URL;$("shareCopied").textContent=ok?T("linkCopied"):"";
  try{$("shareDlg").showModal()}catch(e){$("shareDlg").setAttribute("open","")}
  if(!ok){$("shareUrl").focus();$("shareUrl").select()}
}

async function openInstall(){
  if(deferredInstall){
    const ev=deferredInstall;deferredInstall=null;
    try{ev.prompt();const r=await ev.userChoice;if(r&&r.outcome==="accepted")return}catch(e){}
  }
  $("instMain").innerHTML=instBlock(PLATFORM);
  $("instAll").innerHTML=INST_ORDER.filter(k=>k!==PLATFORM&&k!=="iosOther").map(instBlock).join("");
  try{$("installDlg").showModal()}catch(e){$("installDlg").setAttribute("open","")}
}

// Service worker: offline support + "new version" banner.
// While the app is open it checks the server for a newer version (on start, every 5 minutes, when the app
// comes back to the screen and when the internet returns). The banner shows only if the published version
// differs from the one running, so it never appears right after a reload that already loaded the new code.
async function serverVersion(){
  try{const r=await fetch("sw.js?v="+Date.now(),{cache:"no-store"});const t=await r.text();const m=t.match(/VERSION\s*=\s*"([^"]+)"/);return m?m[1]:null}catch(e){return null}
}
function newer(a,b){const x=a.split(".").map(Number),y=b.split(".").map(Number);for(let i=0;i<3;i++){if((x[i]||0)!==(y[i]||0))return (x[i]||0)>(y[i]||0)}return false}
let swReg=null,lastCheck=0;
async function checkForUpdate(force){
  if(!force&&Date.now()-lastCheck<60e3)return;lastCheck=Date.now();
  if(swReg)swReg.update().catch(()=>{});
  const v=await serverVersion();
  if(v&&newer(v,APP_VERSION))$("updateBar").hidden=false;
}
if("serviceWorker" in navigator&&location.protocol!=="file:"){
  navigator.serviceWorker.addEventListener("controllerchange",()=>{checkForUpdate(true)});
  $("updateBtn").addEventListener("click",()=>{flushNote();$("updateBtn").disabled=true;location.reload()});
  window.addEventListener("load",async()=>{
    try{
      swReg=await navigator.serviceWorker.register("sw.js",{updateViaCache:"none"});
      if(swReg.waiting)swReg.waiting.postMessage("skipWaiting");
    }catch(e){}
    setTimeout(()=>checkForUpdate(true),8000);
    setInterval(()=>{if(document.visibilityState==="visible")checkForUpdate(true)},5*60e3);
    document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")checkForUpdate()});
    window.addEventListener("online",()=>checkForUpdate(true));
  });
}



// ---------- actions ----------
async function saveDay(date){try{await (store&&store.saveDay(date))}catch(err){showMsg(T("notSaved",{e:err.message||err.code||"error"}),true)}}
function saveSettings(){return store?store.saveSettings().catch(()=>showMsg(T("settingsFail"),true)):Promise.resolve()}
async function addEntry(cat,min,note,date,start,pay,extra){
  const e={id:uid(),cat,min:Math.round(min),note:note||"",at:Date.now()};if(start)e.start=start;if(pay>0)e.pay=pay;if(extra)Object.assign(e,extra);
  setDay(date,{entries:[...day(date).entries,e]});render();await saveDay(date);
}
async function delEntry(date,id){setDay(date,{entries:day(date).entries.filter(e=>e.id!==id)});render();await saveDay(date)}
function showMsg(t,err){const m=$("msg");m.textContent=t;m.className="msg"+(err?" err":"");clearTimeout(showMsg.t);showMsg.t=setTimeout(()=>{m.textContent=""},3500)}
function selectDay(d){
  flushNote();const changed=d!==S.sel;S.sel=d;if(monthOf(d)!==S.month)S.month=monthOf(d);S.wk=weekStart(d);render();
  // soft fade of the day's content when switching days
  if(changed)["cats","log","tasks","incStats","dayLabel"].forEach(id=>{const el=$(id);if(!el)return;el.classList.remove("swap");void el.offsetWidth;el.classList.add("swap")});
}

let noteDirty=null,noteTimer=null;
function flushNote(){if(!noteDirty)return;clearTimeout(noteTimer);const d=noteDirty.date;noteDirty=null;saveDay(d).then(()=>{$("noteSaved").textContent=T("saved")})}

// ---------- render ----------
function dayTotals(date){const t={};day(date).entries.forEach(e=>{t[e.cat]=(t[e.cat]||0)+e.min});return t}
const sumT=t=>Object.values(t).reduce((a,b)=>a+b,0);
function weekTotals(anyDay){const ws=weekStart(anyDay);const t={};for(let i=0;i<7;i++){const d=dayTotals(addDays(ws,i));for(const k in d)t[k]=(t[k]||0)+d[k]}return t}
function catsWithTime(t){
  // ordered: settings order, then unknown keys
  const keys=S.cats.map(c=>c.k).filter(k=>t[k]);for(const k in t)if(!keys.includes(k)&&t[k])keys.push(k);
  return keys.map(catInfo);
}
function prodShare(t){let p=0;for(const k in t)if(catInfo(k).prod)p+=t[k];return p}

function applyStatic(){
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-t]").forEach(el=>el.textContent=T(el.dataset.t));
  document.querySelectorAll("[data-tp]").forEach(el=>el.placeholder=T(el.dataset.tp));
  document.querySelectorAll("[data-ta]").forEach(el=>el.setAttribute("aria-label",T(el.dataset.ta)));
  const sk=document.documentElement.dataset.skin||"luxe";$("skin-luxe").setAttribute("aria-pressed",sk==="luxe");$("skin-classic").setAttribute("aria-pressed",sk==="classic");
  $("lang-en").setAttribute("aria-pressed",LANG==="en");$("lang-ru").setAttribute("aria-pressed",LANG==="ru");
  $("status").textContent=T(statusKey,statusVar);
  $("clk-24").setAttribute("aria-pressed",!S.clock12);$("clk-12").setAttribute("aria-pressed",!!S.clock12);
  $("drawerVer").textContent="v"+APP_VERSION+" beta";
  $("verBadge").textContent="Beta · v"+APP_VERSION;$("footVer").textContent="Productivity Starter v"+APP_VERSION+" beta";
  if(typeof renderAccount==="function"&&$("acctBtn"))renderAccount();
}

function render(){
  syncCatColors();
  applyStatic();
  const sel=S.sel,isToday=sel===todayStr();
  $("dayLabel").textContent=cap(fDay().format(parse(sel)));
  $("today").disabled=isToday;
  $("addFor").textContent=isToday?T("forToday"):T("forDay",{d:fD().format(parse(sel))});
  if(!S.cats.find(c=>c.k===S.cat&&!c.off)){const a=S.cats.find(c=>!c.off);S.cat=a?a.k:null}

  renderCalendar();

  // summary
  const t=dayTotals(sel),total=sumT(t);
  $("totalBig").innerHTML=Math.floor(total/60)+"<small>"+T("h")+"</small> "+pad(total%60)+"<small>"+T("m")+"</small>";
  $("strip").innerHTML=total?catsWithTime(t).map(c=>`<span style="width:${t[c.k]/total*100}%;background:var(${c.v})" title="${esc(c.name)}: ${fmt(t[c.k])}"></span>`).join(""):"";
  const p=total?Math.round(prodShare(t)/total*100):0;
  $("ratio").textContent=total?T("ratio",{a:p,b:100-p}):T("noEntriesDay");

  const weekly=S.goalMode==="week";const wt=weekly?weekTotals(sel):null;
  const shown=[...activeCats()];catsWithTime(t).forEach(c=>{if(!shown.find(x=>x.k===c.k))shown.push(c)});
  $("cats").innerHTML=shown.map(c=>{
    const g=+(weekly?S.wgoals[c.k]:S.goals[c.k])||0;const v=t[c.k]||0,prog=weekly?(wt[c.k]||0):v;
    const pct=g?Math.min(100,prog/g*100):0,done=g&&prog>=g;
    let gl;
    if(!g)gl=`<span>${T("noGoal")}</span>`;
    else if(done)gl=`<span class="done">${T(weekly?"goalWeekDone":"goalDone")}</span><span class="mono">${Math.round(prog/g*100)}%</span>`;
    else gl=`<span>${T(weekly?"weekLeft":"left",{t:"<b>"+fmt(g-prog)+"</b>"})}</span><span class="mono">${Math.round(prog/g*100)}%</span>`;
    return `<div class="cat" style="--c:var(${c.v})">
      <div class="name"><span class="dot"></span><span>${esc(c.name)}</span></div>
      <div class="val">${fmtShort(v)}${weekly&&g?`<small>${T("ofWeek",{a:fmtShort(prog),b:fmtShort(g)})}</small>`:""}</div>
      <div class="bar"><i style="width:${g?pct:(v?100:0)}%"></i></div>
      <div class="goal">${gl}</div></div>`}).join("");

  renderPlan();

  // logger
  $("seg").setAttribute("aria-label",T("logTime"));
  $("seg").innerHTML=activeCats().map(c=>`<button type="button" style="--c:var(${c.v})" data-cat="${c.k}" aria-pressed="${S.cat===c.k}"><span class="dot"></span>${esc(c.name)}</button>`).join("")
    +`<button type="button" class="addcat" id="goNewCat">${T("addCat")}</button>`;
  renderTimeEntry();
  renderTimer();
  renderPay();
  renderEditBar();

  // journal
  const list=sortedEntries(sel);
  $("logCount").textContent=list.length?list.length+" "+I18N[LANG].entries(list.length):"";
  $("log").innerHTML=list.length?list.map(e=>{const c=catInfo(e.cat);const s=toMin(e.start);
    const when=s!=null?whenTxt(e):T("noTime");
    return `<li style="--c:var(${c.v})"><span class="when">${when}</span><span class="dot"></span><span class="k">${esc(c.name)}</span><span class="t">${fmt(e.min)}</span><span class="n">${breakTxt(e)?`<span class="brk">${breakTxt(e)}</span> `:""}${e.pay?`<span class="pay">${fmtMoney(+e.pay,true)}</span> `:""}${esc(e.note)}</span><span class="acts"><button class="editbtn" data-edit="${e.id}" aria-label="${T("editEntry")}" title="${T("editEntry")}">✎</button><button class="del red" data-del="${e.id}" aria-label="${T("deleteEntry")}" title="${T("deleteEntry")}">×</button></span></li>`}).join("")
    :`<li class="empty">${T("emptyLog")}</li>`;

  renderWeek();
  renderStreak();
  renderWeekDetail();
  renderIncome();
  renderCatManager();
}
const spanOf=e=>+e.span>e.min?+e.span:e.min;
function whenTxt(e){const s=toMin(e.start);return s==null?null:clock(s)+"–"+clock(s+spanOf(e))}
function breakTxt(e){const b=Math.max(0,spanOf(e)-e.min);return b?T("pausedFor",{t:fmt(b)}):""}
function sortedEntries(date){
  return day(date).entries.slice().sort((a,b)=>{const sa=toMin(a.start),sb=toMin(b.start);
    if(sa!=null&&sb!=null)return sa-sb;if(sa!=null)return -1;if(sb!=null)return 1;return a.at-b.at});
}

function renderCalendar(){
  $("mLabel").textContent=cap(fMonth().format(parse(S.month)).replace(" г.",""));
  const gridStart=weekStart(S.month);const m=parse(S.month).getMonth();const today=todayStr();
  let html=I18N[LANG].dow.map(d=>`<div class="dow">${d}</div>`).join("");
  for(let i=0;i<42;i++){
    const d=addDays(gridStart,i),dd=parse(d);
    if(i===35&&dd.getMonth()!==m)break;
    const t=dayTotals(d),tot=sumT(t),dy=day(d);
    const mark=dy.tasks.some(x=>!x.done)||dy.note.trim();
    const cls=["cday"];if(dd.getMonth()!==m)cls.push("out");if(d===today)cls.push("today");if(d===S.sel)cls.push("sel");
    const mb=tot?catsWithTime(t).map(c=>`<span style="width:${t[c.k]/tot*100}%;background:var(${c.v})"></span>`).join(""):"";
    html+=`<button type="button" class="${cls.join(" ")}" data-day="${d}" aria-label="${dd.getDate()} — ${tot?fmt(tot):"0"}">${mark?'<span class="mk"></span>':""}<span class="n">${dd.getDate()}</span><span class="h">${tot?fmtShort(tot):""}</span><span class="mb">${mb}</span></button>`;
  }
  $("cal").innerHTML=html;
  $("legend").innerHTML=activeCats().map(c=>`<span style="--c:var(${c.v})"><span class="dot"></span>${esc(c.name)}</span>`).join("")+`<span><span class="mkl"></span>${T("hasPlan")}</span>`;
}

function renderPlan(){
  const d=day(S.sel);
  const done=d.tasks.filter(x=>x.done).length;
  $("taskProg").textContent=d.tasks.length?done+"/"+d.tasks.length:"";
  $("tasks").innerHTML=d.tasks.length?d.tasks.map(x=>`<li class="${x.done?"ok":""}"><input type="checkbox" id="tk-${x.id}" data-tk="${x.id}" ${x.done?"checked":""}><label class="tx" for="tk-${x.id}">${esc(x.text)}</label>${x.done?"<span></span>":`<button class="mv" data-mv="${x.id}">${T("toTomorrow")}</button>`}<button class="del red" data-tdel="${x.id}" aria-label="×">×</button></li>`).join("")
    :`<li class="empty">${T("noTasks")}</li>`;
  const ta=$("noteArea");if(document.activeElement!==ta&&ta.value!==d.note)ta.value=d.note;
  if(!noteDirty)$("noteSaved").textContent="";
}

function renderTimeline(){
  if(!$("tl"))return; // day timeline section was removed in 0.14.0
  const list=day(S.sel).entries;let html="",un=0,unMin=0;
  list.forEach(e=>{const s=toMin(e.start);const c=catInfo(e.cat);
    if(s==null){un++;unMin+=e.min;return}
    const end=Math.min(1440,s+e.min);
    html+=`<div class="blk" style="--c:var(${c.v});left:${s/1440*100}%;width:${(end-s)/1440*100}%" title="${esc(c.name)} ${fromMin(s)}–${fromMin(s+e.min)}${e.note?" · "+esc(e.note):""}"></div>`});
  if(S.timer&&toStr(new Date(S.timer.start))===S.sel){
    const st=new Date(S.timer.start);const s=st.getHours()*60+st.getMinutes();
    const nowM=Math.max(s+1,Math.min(1440,(Date.now()-S.timer.start)/60000+s));
    html+=`<div class="blk" style="--c:var(${catInfo(S.timer.cat).v});opacity:.5;left:${s/1440*100}%;width:${(nowM-s)/1440*100}%"></div>`;
  }
  if(S.sel===todayStr()){const n=new Date();html+=`<div class="now" style="left:${(n.getHours()*60+n.getMinutes())/1440*100}%"></div>`}
  $("tl").innerHTML=html;
  $("tlaxis").innerHTML=[0,3,6,9,12,15,18,21,24].map(h=>`<span style="left:${h/24*100}%">${pad(h)}</span>`).join("");
  $("tlnote").textContent=un?T("unplaced",{n:un+" "+I18N[LANG].entries(un),t:fmt(unMin)}):(list.length?"":T("tlEmpty"));
}

let timerPayDraft="";
function renderTimer(){
  if(document.activeElement&&document.activeElement.id==="tPay"&&S.timer&&S.timer.stopping)return; // don't wipe what is being typed
  const el=$("timer"),tm=S.timer;
  if(tm){
    const c=catInfo(tm.cat);
    const paused=!!tm.pausedAt&&!tm.stopping,st=new Date(tm.start),np=(tm.pauses||[]).length+(paused||(tm.stopping&&tm.wasPaused)?1:0);
    el.className="timer on"+(paused?" paused":"");el.style.setProperty("--c",`var(${c.v})`);
    el.innerHTML=`<span class="label">${T(tm.stopping?"stopped":paused?"onPause":"running")}</span><div class="clock" id="clock">0:00:00</div>
      <div class="what">${paused?"":`<span class="pulse"></span>`}<b>${esc(c.name)}</b> · ${T("since",{s:clock(st.getHours()*60+st.getMinutes())})}${np?` · ${T("pausesN",{n:np,t:fmt(Math.round(pausedMs(tm,Date.now())/60000))})}`:""}</div>
      ${tm.stopping?`<div class="stopask">
          <div class="stopsum"><b>${esc(c.name)}</b> · ${fmt(Math.round(activeMs(tm)/60000))}</div>
          <div class="label">${T("askPay")}</div>
          <div class="row"><div class="mode" role="group"><button type="button" data-tpm="sum" aria-pressed="${S.payMode==="sum"}">${T("pmSum")}</button><button type="button" data-tpm="rate" aria-pressed="${S.payMode==="rate"}">${T("pmRate")}</button></div>
          <label class="money"><span>$</span><input type="text" id="tPay" inputmode="decimal" class="mono" placeholder="${S.payMode==="rate"?T("ratePh"):T("sumPh")}"></label></div>
          <p class="hint">${T("askPayHint")}</p>
          <div class="row"><button class="primary" id="tSave">${T("savePay")}</button><button class="ghost" id="tNoPay">${T("noPay")}</button><button class="linkbtn" id="tBack">${T("backToTimer")}</button></div>
        </div>`:`<div class="row"><button class="ghost pausebtn" id="tPause">${paused?"▶ "+T("resume"):"❚❚ "+T("pause")}</button><button class="primary" id="tStop">${T("stopLog")}</button><button class="ghost" id="tCancel">${T("reset")}</button></div>`}`;
    const tp=$("tPay");if(tp){tp.value=timerPayDraft||(S.payMode==="rate"&&S.payRates[tm.cat]?S.payRates[tm.cat]:"");tp.addEventListener("input",()=>{timerPayDraft=tp.value});tp.addEventListener("keydown",e=>{if(e.key==="Enter")$("tSave").click()});setTimeout(()=>tp.focus(),50)}
    tick();
  }else{
    const c=S.cat?catInfo(S.cat):{name:"—",v:"--slate"};
    el.className="timer";el.style.setProperty("--c",`var(${c.v})`);
    el.innerHTML=`<span class="label">${T("timer")}</span><div class="clock" style="color:var(--muted)">0:00:00</div>
      <div class="what">${T("timerIdle")} <b>${esc(c.name)}</b></div>
      <div class="row"><button class="primary" id="tStart" ${S.cat?"":"disabled"}>${T("go")}</button></div>`;
  }
}
// Timer with pauses: S.timer = {cat, start, pauses:[{s,e}], pausedAt}
function pausedMs(tm,now){let p=(tm.pauses||[]).reduce((a,x)=>a+(x.e-x.s),0);
  if(tm.stopping){if(tm.wasPaused&&tm.pauseStart)p+=tm.pausedAt-tm.pauseStart;return p+(now-tm.pausedAt)}
  if(tm.pausedAt)p+=now-tm.pausedAt;return p}
function activeMs(tm,now=Date.now()){return Math.max(0,now-tm.start-pausedMs(tm,now))}
function tick(){const c=$("clock");if(!c||!S.timer)return;const s=Math.floor(activeMs(S.timer)/1000);c.textContent=Math.floor(s/3600)+":"+pad(Math.floor(s/60)%60)+":"+pad(s%60)}
setInterval(tick,1000);

function setWeek(ws){
  if(ws===S.wk)return;const dir=ws>S.wk?1:-1;S.wk=ws;
  renderWeek();renderStreak();renderWeekDetail();
  ["chart","wkTot","wd"].forEach(id=>{const el=$(id);if(!el)return;el.classList.remove("swapL","swapR");void el.offsetWidth;el.classList.add(dir>0?"swapR":"swapL")});
}
function renderWeek(){
  const ws=S.wk;$("thisWeek").hidden=ws===weekStart(todayStr());const days=[...Array(7)].map((_,i)=>addDays(ws,i));
  const tots=days.map(dayTotals),sums=tots.map(sumT);
  const maxMin=Math.max(240,...sums);const stepH=maxMin<=360?1:maxMin<=720?2:4;
  const top=Math.ceil(maxMin/60/stepH)*stepH*60;const dow=I18N[LANG].dow;
  $("wkRange").textContent=fD().format(parse(days[0]))+" – "+fD().format(parse(days[6]));
  let grid="";for(let hh=0;hh<=top/60;hh+=stepH)grid+=`<div style="bottom:${hh*60/top*100}%"><span>${hh}${T("h")}</span></div>`;
  const cols=days.map((d,i)=>{const t=tots[i],s=sums[i];
    const segs=catsWithTime(t).map(c=>`<span style="height:${t[c.k]/top*200}px;background:var(${c.v})"></span>`).join("");
    return `<button class="col${d===S.sel?" sel":""}" data-day="${d}" aria-label="${dow[i]} ${fmt(s)}">${s?`<span class="tot">${fmtShort(s)}</span>`:""}<div class="stack">${segs}</div><span class="lab">${dow[i]} ${parse(d).getDate()}</span></button>`}).join("");
  $("chart").innerHTML=`<div class="grid">${grid}</div><div class="cols">${cols}</div>`;
  const wk=weekTotals(S.wk);const all=sums.reduce((a,b)=>a+b,0),active=sums.filter(Boolean).length;
  const list=[...activeCats()];catsWithTime(wk).forEach(c=>{if(!list.find(x=>x.k===c.k))list.push(c)});
  $("wkTot").innerHTML=list.map(c=>{const g=+S.wgoals[c.k]||0;return `<div class="line" style="--c:var(${c.v})"><span class="dot"></span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(c.name)}</span><span class="mono">${fmt(wk[c.k]||0)}${S.goalMode==="week"&&g?` <span style="color:var(--muted)">/ ${fmt(g)}</span>`:""}</span></div>`}).join("")
    +`<hr><div class="line"><b>${T("total")}</b><span class="mono"><b>${fmt(all)}</b></span></div>
      <div class="line">${T("productive")}<span class="mono">${fmt(prodShare(wk))}</span></div>
      <div class="line">${T("activeDays")}<span class="mono">${T("ofSeven",{n:active})}</span></div>
      <div class="line">${T("avgActive")}<span class="mono">${active?fmt(all/active):"—"}</span></div>`;
}

// ---------- streak ----------
function prodMin(date){const t=dayTotals(date);return prodShare(t)}
function streakInfo(){
  const thr=S.streakMin,today=todayStr();
  let d=prodMin(today)>=thr?today:addDays(today,-1),cur=0;
  while(prodMin(d)>=thr){cur++;d=addDays(d,-1)}
  const dates=Object.keys(S.days).filter(k=>day(k).entries.length).sort();
  let best=0,run=0,prev=null;
  dates.forEach(k=>{if(prodMin(k)>=thr){run=(prev&&addDays(prev,1)===k)?run+1:1;prev=k;if(run>best)best=run}else{prev=null;run=0}});
  return {cur,best:Math.max(best,cur),todayDone:prodMin(today)>=thr,todayMin:prodMin(today)};
}
// Weekly streak: weeks in a row (Mon–Sun) where the plan was met — enough productive hours,
// or enough active days (a day is active with at least the daily threshold of productive time).
// The current week never breaks the streak while it is still going; it only adds to it once met.
function weekProgress(ws){
  let mins=0,days=0;
  for(let i=0;i<7;i++){const m=prodMin(addDays(ws,i));mins+=m;if(m>=S.streakMin)days++}
  const byHours=S.streakRule==="hours";
  const val=byHours?mins:days,goal=byHours?S.streakWeekH:S.streakWeekDays;
  return {mins,days,val,goal,met:val>=goal};
}
function weekStreakInfo(){
  const cur0=weekStart(todayStr());
  const thisWeek=weekProgress(cur0);
  let n=0,w=addDays(cur0,-7);
  const first=Object.keys(S.days).filter(k=>day(k).entries.length).sort()[0];
  const firstW=first?weekStart(first):cur0;
  while(w>=firstW&&weekProgress(w).met){n++;w=addDays(w,-7)}
  const cur=n+(thisWeek.met?1:0);
  // best run
  let best=0,run=0;
  for(let x=firstW;x<=cur0;x=addDays(x,7)){if(weekProgress(x).met){run++;if(run>best)best=run}else if(x!==cur0)run=0}
  return {cur,best:Math.max(best,cur),thisWeek,cur0};
}
function plWeeks(n){if(LANG==="en")return n===1?T("swWeek1"):T("swWeeks");const a=n%10,b=n%100;return (a===1&&b!==11)?"неделя подряд":(a>=2&&a<=4&&(b<10||b>=20))?"недели подряд":"недель подряд"}
function renderStreak(){
  const box=$("streak");
  if(S.streakMode==="off"){box.hidden=true;return}
  box.hidden=false;
  if(S.streakMode==="day")return renderDayStreak();
  const s=weekStreakInfo(),byHours=S.streakRule==="hours";
  const curW=s.cur0,viewW=S.wk>curW?curW:S.wk,isNow=viewW===curW,tw=weekProgress(viewW);
  const fmtVal=v=>byHours?fmt(v):String(v);
  const goalTxt=byHours?fmt(tw.goal):T("srDaysGoal",{n:tw.goal});
  let dots="";
  // 8 bars ending at the current week, or at the viewed week if it is older
  const endW=viewW<addDays(curW,-49)?addDays(viewW,21):curW;
  for(let i=7;i>=0;i--){const ws=addDays(endW,-7*i);if(ws>curW)continue;const p=weekProgress(ws);
    const pct=Math.min(1,p.val/p.goal);
    dots+=`<button type="button" class="wbar${p.met?" ok":""}${ws===viewW?" td":""}" data-swk="${ws}" style="--p:${pct}" aria-label="${fD().format(parse(ws))} – ${fD().format(parse(addDays(ws,6)))}: ${fmtVal(p.val)} / ${goalTxt}" title="${fD().format(parse(ws))} – ${fD().format(parse(addDays(ws,6)))}: ${fmtVal(p.val)} / ${goalTxt}"></button>`}
  const wlabel=isNow?(tw.met?T("swThisDone"):T("swThis",{a:fmtVal(tw.val),b:goalTxt})):`${fD().format(parse(viewW))} – ${fD().format(parse(addDays(viewW,6)))}: ${fmtVal(tw.val)} / ${goalTxt}${tw.met?" ✓":""}`;
  const pct=Math.min(100,Math.round(tw.val/tw.goal*100));
  box.innerHTML=`<div class="sw-main"><div class="num${s.cur>=3?" hot":""}"><b>${s.cur}</b><span>${plWeeks(s.cur)}</span></div>
    <div class="best">${T("streakBest",{n:"<b>"+s.best+"</b>"})}</div>
    <div class="swnav"><button type="button" class="iconbtn wkarrow" data-wk="-1" aria-label="${T("prevWeek")}">‹</button><span class="swlabel">${wlabel}</span><button type="button" class="iconbtn wkarrow" data-wk="1" aria-label="${T("nextWeek")}" ${isNow?"disabled":""}>›</button></div>
    <div class="swbar"><i style="width:${pct}%"></i></div></div>
    <div class="sdots weeks" aria-hidden="true">${dots}</div>`;
}
function renderDayStreak(){
  const s=streakInfo(),thr=S.streakMin,today=todayStr();
  let dots="";for(let i=13;i>=0;i--){const d=addDays(today,-i);const ok=prodMin(d)>=thr;dots+=`<i class="${ok?"ok":""}${i===0?" td":""}" title="${fD().format(parse(d))}: ${fmt(prodMin(d))}"></i>`}
  const word=LANG==="en"?(s.cur===1?T("streakNow1"):T("streakNow")):(()=>{const a=s.cur%10,b=s.cur%100;return (a===1&&b!==11)?T("streakNow1"):(a>=2&&a<=4&&(b<10||b>=20))?"дня подряд":T("streakNow")})();
  $("streak").innerHTML=`<div><div class="num${s.cur>=3?" hot":""}"><b>${s.cur}</b><span>${word}</span></div>
    <div class="best">${T("streakBest",{n:"<b>"+s.best+"</b>"})} · ${s.todayDone?T("streakTodayDone"):T("streakToday",{t:fmt(thr-s.todayMin)})}</div></div>
    <div class="sdots" aria-hidden="true">${dots}</div>`;
}

// ---------- time entry ----------
// Two ways to say how long: "Duration" (hours/minutes steppers + quick buttons, optional start time)
// or "From – to" (start and end time; the length is calculated). A preview shows exactly what will be saved.
const durMin=()=>S.dh*60+S.dm;
function chipLabel(d){const H=T("h"),M=T("m");return d<60?d+" "+M:(d%60?(d/60).toString().replace(".",LANG==="ru"?",":".")+" "+H:d/60+" "+H)}
function renderTimeEntry(){
  const isDur=S.tmode==="dur";
  $("tm-dur").setAttribute("aria-pressed",isDur);$("tm-range").setAttribute("aria-pressed",!isDur);
  $("durBox").hidden=!isDur;$("rangeBox").hidden=isDur;
  const cur=durMin();
  $("durs").innerHTML=DURS.map(d=>`<button type="button" data-dur="${d}" aria-pressed="${cur===d}">${chipLabel(d)}</button>`).join("");
  const tileVal=(id,v,empty)=>{const el=$(id);el.textContent=v||T(empty);el.classList.toggle("empty",!v);el.parentElement.classList.toggle("set",!!v)};
  tileVal("durVal",cur?fmt(cur):"","tapToPick");
  tileVal("startVal",clockStr($("startIn").value),"optional");
  tileVal("rStartVal",clockStr($("rStart").value),"tapToPick");
  tileVal("rEndVal",clockStr($("rEnd").value),"tapToPick");
  const r=S.tmode==="range"?readTime():null;
  $("rangeSum").innerHTML=r&&r.min?`= <b>${fmt(r.min)}</b>${r.overnight?" · "+T("pvOvernight"):""}`:"";
  updatePreview();
}
function setDur(min){min=Math.max(0,Math.min(23*60+59,Math.round(min)));S.dh=Math.floor(min/60);S.dm=min%60;renderTimeEntry();updatePayCalc()}
// What the form will save right now: {min,start,auto} or {err,hint}
function readTime(){
  if(S.tmode==="range"){
    const a=toMin($("rStart").value),b=toMin($("rEnd").value);
    if(a==null||b==null)return {hint:T(a==null&&b==null?"pvRange":a==null?"pvNeedStart":"pvNeedEnd")};
    const min=(b-a+1440)%1440;
    if(!min)return {hint:T("sameTimes"),err:true};
    return {min,start:fromMin(a),overnight:b<a};
  }
  const min=durMin();
  if(!min)return {hint:T("pvDur")};
  let start=$("startIn").value||null,auto=false;
  if(!start&&S.sel===todayStr()){const n=new Date();const st=n.getHours()*60+n.getMinutes()-min;if(st>=0){start=fromMin(st);auto=true}}
  return {min,start,auto};
}
function updatePreview(){
  const el=$("preview");if(!el)return;
  if(!S.cat){el.className="preview";el.textContent="";return}
  const c=catInfo(S.cat),r=readTime();
  if(!r.min){el.className="preview";el.style.removeProperty("--c");el.innerHTML=(r.err?"⚠ ":"")+esc(r.hint);return}
  let pay=0;if(c.paid){const p=payFromInput(r.min,S.cat);if(isFinite(p))pay=p}
  const when=r.start?`<span class="pvt">${clockStr(r.start)}–${clock(toMin(r.start)+r.min)}</span>`:"";
  const notes=[];
  if(r.auto)notes.push(T("pvJustNow"));
  if(r.overnight)notes.push(T("pvOvernight"));
  if(!r.start)notes.push(T("pvNoTime"));
  const dayTxt=S.sel===todayStr()?T("today").toLowerCase():fD().format(parse(S.sel));
  el.className="preview ok";el.style.setProperty("--c",`var(${c.v})`);
  el.innerHTML=`<span class="dot"></span><b>${esc(c.name)}</b>${when?" · "+when:""} · <span class="pvt">${fmt(r.min)}</span>${pay?` · <span class="pay">${fmtMoney(pay,true)}</span>`:""} · ${esc(dayTxt)}${notes.length?`<span class="pvs">${notes.join(" · ")}</span>`:""}`;
}

// ---------- menu and pages ----------
// ☰ opens a side menu; its items open full pages (categories, income, week in detail, settings).
// Each open window adds a browser history step, so the phone's Back gesture closes it instead of leaving the app.
const PAGES=["drawer","pg-cats","pg-income","pg-week","pg-settings"];
let popping=false;
function openPage(id){
  const d=$(id);if(!d||d.open)return;
  let replace=false;
  if(id!=="drawer"&&$("drawer").open){$("drawer").dataset.silent="1";$("drawer").close();replace=true}
  try{d.showModal()}catch(e){d.setAttribute("open","")}
  d.scrollTop=0;const body=d.querySelector(".pagebody");if(body)body.scrollTop=0;
  try{replace?history.replaceState({ps:id},""):history.pushState({ps:id},"")}catch(e){}
}
function closePage(id){const d=$(id);if(d&&d.open)d.close()}
PAGES.forEach(id=>{
  const d=$(id);if(!d)return;
  d.addEventListener("close",()=>{
    if(d.dataset.silent){delete d.dataset.silent;return}
    if(!popping&&history.state&&history.state.ps===id){try{history.back()}catch(e){}}
  });
  d.addEventListener("click",e=>{if(e.target===d)d.close()}); // tap outside
});
window.addEventListener("popstate",()=>{
  popping=true;
  const open=PAGES.filter(id=>$(id)&&$(id).open);
  open.forEach(id=>$(id).close());
  popping=false;
});

// Floating ☰: appears once the header's menu button scrolls out of view, so the menu is always reachable.
(function(){
  const fab=$("fabMenu"),btn=$("menuBtn");if(!fab||!btn)return;
  const show=v=>{fab.classList.toggle("show",v);fab.tabIndex=v?0:-1;fab.setAttribute("aria-hidden",v?"false":"true")};
  if("IntersectionObserver" in window){new IntersectionObserver(es=>es.forEach(e=>show(!e.isIntersecting)),{threshold:0}).observe(btn)}
  else{const f=()=>show(btn.getBoundingClientRect().bottom<0);addEventListener("scroll",f,{passive:true});f()}
})();

// Swipe left/right on the week chart or the week grid to change the week (phones)
function swipeWeeks(el){
  if(!el)return;let x0=null,y0=null;
  el.addEventListener("touchstart",e=>{const t=e.touches[0];x0=t.clientX;y0=t.clientY},{passive:true});
  el.addEventListener("touchend",e=>{if(x0==null)return;const t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;x0=null;
    if(Math.abs(dx)>60&&Math.abs(dy)<45)setWeek(addDays(S.wk,dx<0?7:-7))},{passive:true});
}
swipeWeeks($("chart"));swipeWeeks($("wd"));

// ---------- edit an existing entry ----------
// ✎ in the day log loads the entry into the "Log time" form; "Save changes" replaces it.
// Picking another day in the calendar while editing moves the entry to that day.
function startEdit(id){
  const e=day(S.sel).entries.find(x=>x.id===id);if(!e)return;
  S.edit={id,date:S.sel,breaks:e.breaks||null,span:e.span||null,start0:e.start||null,min0:e.min};
  if(S.cats.some(c=>c.k===e.cat))S.cat=e.cat;
  if(e.start){S.tmode="range";$("rStart").value=e.start;$("rEnd").value=fromMin(toMin(e.start)+spanOf(e));$("startIn").value=""}
  else{S.tmode="dur";S.dh=Math.floor(e.min/60);S.dm=e.min%60;$("startIn").value="";$("rStart").value="";$("rEnd").value=""}
  S.payMode="sum";$("payIn").value=e.pay?String(e.pay):"";
  $("noteIn").value=e.note||"";
  render();
  $("addH").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
}
function cancelEdit(){
  S.edit=null;$("noteIn").value="";$("startIn").value="";$("rStart").value="";$("rEnd").value="";$("payIn").value="";S.dh=0;S.dm=0;render();
}
function renderEditBar(){
  const on=!!S.edit;$("editBar").hidden=!on;
  $("addBtn").textContent=on?T("saveChanges"):T("add");
  if(on){const moved=S.edit.date!==S.sel;$("editTxt").textContent=moved?T("editMove",{d:fD().format(parse(S.sel))}):T("editing")}
  $("addH").closest("section").classList.toggle("editing",on);
}

// ---------- finish the timer ----------
// The end of the work is the moment Stop was pressed (time spent answering the pay question doesn't count).
async function finishTimer(pay){
  const tm0=S.timer;if(!tm0)return;
  const end=tm0.stopping?tm0.pausedAt:Date.now();
  // close any pause that was running before Stop
  const pauses=[...(tm0.pauses||[])];
  if(tm0.stopping){if(tm0.wasPaused&&tm0.pauseStart)pauses.push({s:tm0.pauseStart,e:end})}
  else if(tm0.pausedAt)pauses.push({s:tm0.pausedAt,e:end});
  const tm={...tm0,pauses,pausedAt:null,stopping:false};
  const min=Math.floor(activeMs(tm,end)/60000);
  S.timer=null;timerPayDraft="";
  if(min<1){showMsg(T("timerShort"));render();saveSettings();return}
  const st=new Date(tm.start),dayStart=new Date(st.getFullYear(),st.getMonth(),st.getDate()).getTime();
  const breaks=pauses.filter(x=>x.e-x.s>=30e3).map(x=>({s:Math.round((x.s-dayStart)/60000),m:Math.max(1,Math.round((x.e-x.s)/60000))}));
  const span=Math.round((end-tm.start)/60000);
  await addEntry(tm.cat,min,"",toStr(st),pad(st.getHours())+":"+pad(st.getMinutes()),pay,breaks.length&&span>min?{span,breaks}:null);
  showMsg(T("timerAdded",{t:fmt(min),c:catInfo(tm.cat).name})+(pay?" · "+fmtMoney(pay,true):""));
  render();saveSettings();
}

// ---------- wheel picker ----------
// A bottom sheet (centered on computers) with scroll wheels like a phone alarm clock.
// Scroll with a finger or mouse wheel, use the arrow buttons, or the keyboard (↑ ↓).
const W_ITEM=44;
let wheel=null; // {cols:[{values,el,view}], format, onDone}
function openWheel(o){
  const box=$("wheelCols");box.innerHTML="";
  wheel={cols:[],format:o.format,onDone:o.onDone};
  o.cols.forEach((c,ci)=>{
    if(ci&&o.sep&&ci===(o.sepAt||1)){const sp=document.createElement("div");sp.className="wsep";sp.textContent=o.sep;box.appendChild(sp)}
    const col=document.createElement("div");col.className="wcol";
    col.innerHTML=`<button type="button" class="warr" data-wa="-1" aria-label="up">▲</button>
      <div class="wwrap"><div class="wband"></div><div class="wview" tabindex="0" role="listbox" aria-label="${esc(c.unit||"")}"><div class="wpad"></div>${c.labels.map((l,i)=>`<div class="witem" data-wi="${i}" role="option">${l}</div>`).join("")}<div class="wpad"></div></div></div>
      <button type="button" class="warr" data-wa="1" aria-label="down">▼</button>${c.unit?`<div class="wunit">${esc(c.unit)}</div>`:""}`;
    box.appendChild(col);
    const view=col.querySelector(".wview");
    const entry={values:c.values,view,idx:0};wheel.cols.push(entry);
    let t=null;
    view.addEventListener("scroll",()=>{const i=Math.max(0,Math.min(c.values.length-1,Math.round(view.scrollTop/W_ITEM)));if(i!==entry.idx){entry.idx=i;markWheel()}clearTimeout(t);t=setTimeout(()=>{view.scrollTo({top:entry.idx*W_ITEM,behavior:"smooth"})},140)},{passive:true});
    view.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();moveWheel(entry,e.key==="ArrowDown"?1:-1)}else if(e.key==="Enter"){e.preventDefault();$("wDone").click()}});
    col.addEventListener("click",e=>{const a=e.target.closest("[data-wa]");if(a){moveWheel(entry,+a.dataset.wa);return}const it=e.target.closest("[data-wi]");if(it){entry.idx=+it.dataset.wi;view.scrollTo({top:entry.idx*W_ITEM,behavior:"smooth"});markWheel()}});
    entry.start=nearestIndex(c.values,c.value);
  });
  $("wheelTitle").textContent=o.title;
  $("wheelExtra").innerHTML=(o.extra||[]).map((x,i)=>`<button type="button" class="ghost ${x.cls||""}" data-wx="${i}">${esc(x.label)}</button>`).join("");
  $("wheelCols").classList.toggle("three",o.cols.length===3);
  wheel.extra=o.extra||[];
  const d=$("wheelDlg");try{d.showModal()}catch(e){d.setAttribute("open","")}
  requestAnimationFrame(()=>{wheel.cols.forEach(c=>{c.idx=c.start;c.view.scrollTop=c.idx*W_ITEM});markWheel();wheel.cols[0].view.focus({preventScroll:true})});
}
function nearestIndex(values,v){let best=0,bd=Infinity;values.forEach((x,i)=>{const d=Math.abs(x-v);if(d<bd){bd=d;best=i}});return best}
function moveWheel(c,dir){c.idx=Math.max(0,Math.min(c.values.length-1,c.idx+dir));c.view.scrollTo({top:c.idx*W_ITEM,behavior:"smooth"});markWheel()}
function setWheel(vals){wheel.cols.forEach((c,i)=>{c.idx=nearestIndex(c.values,vals[i]);c.view.scrollTo({top:c.idx*W_ITEM,behavior:"smooth"})});markWheel()}
function wheelValues(){return wheel.cols.map(c=>c.values[c.idx])}
function markWheel(){
  wheel.cols.forEach(c=>c.view.querySelectorAll(".witem").forEach((el,i)=>el.classList.toggle("on",i===c.idx)));
  $("wheelValue").textContent=wheel.format(wheelValues());
}
$("wDone").addEventListener("click",()=>{if(!wheel)return;const v=wheelValues(),cb=wheel.onDone;$("wheelDlg").close();cb(v)});
$("wCancel").addEventListener("click",()=>$("wheelDlg").close());
$("wheelDlg").addEventListener("click",e=>{if(e.target===$("wheelDlg"))$("wheelDlg").close();const x=e.target.closest("[data-wx]");if(x&&wheel)wheel.extra[+x.dataset.wx].fn()});
$("wheelDlg").addEventListener("close",()=>{wheel&&wheel.after&&wheel.after();});

const HOURS=[...Array(24)].map((_,i)=>i);
const MINS5=[...Array(12)].map((_,i)=>i*5);
function nowMin(round){const n=new Date();const m=n.getHours()*60+n.getMinutes();return round==="down"?Math.floor(m/5)*5:Math.round(m/5)*5%1440}
function pickDuration(){
  const cur=durMin()||60;
  openWheel({title:T("durL"),cols:[
      {values:HOURS,labels:HOURS.map(String),value:Math.floor(cur/60),unit:T("hoursU")},
      {values:MINS5,labels:MINS5.map(pad),value:cur%60,unit:T("minsU")}],
    format:v=>fmt(v[0]*60+v[1])||"0",
    onDone:v=>{const m=v[0]*60+v[1];setDur(m)}});
}
// id = hidden input that holds "HH:MM" (always 24 h inside); the wheel shows 24 h or 12 h + AM/PM
function pickTime(id,titleKey,opt={}){
  const el=$(id);let cur=toMin(el.value);
  if(cur==null){
    if(id==="rEnd"&&toMin($("rStart").value)!=null)cur=(toMin($("rStart").value)+60)%1440;
    else cur=S.sel===todayStr()?nowMin("down"):(id==="rEnd"?17*60:9*60);
  }
  const H12=[12,1,2,3,4,5,6,7,8,9,10,11];
  const toVals=m=>S.clock12?[((Math.floor(m/60)%12)||12),m%60,Math.floor(m/60)<12?0:1]:[Math.floor(m/60),m%60];
  const fromVals=v=>S.clock12?((v[0]%12)+(v[2]?12:0))*60+v[1]:v[0]*60+v[1];
  const extra=[];
  if(S.sel===todayStr())extra.push({label:T("nowBtn"),fn:()=>setWheel(toVals(nowMin()))});
  if(opt.clear&&el.value)extra.push({label:T("clearTime"),fn:()=>{el.value="";$("wheelDlg").close();renderTimeEntry();updatePayCalc()}});
  extra.push({label:S.clock12?T("use24"):T("use12"),cls:"fmtbtn",fn:()=>{const m=fromVals(wheelValues());S.clock12=!S.clock12;saveSettings();render();$("wheelDlg").close();setTimeout(()=>{pickTime(id,titleKey,{...opt,cur:m})},60)}});
  if(opt.cur!=null)cur=opt.cur;
  const cols=S.clock12?[
      {values:H12,labels:H12.map(String),value:toVals(cur)[0]},
      {values:MINS5,labels:MINS5.map(pad),value:cur%60},
      {values:[0,1],labels:["AM","PM"],value:toVals(cur)[2]}]
    :[{values:HOURS,labels:HOURS.map(pad),value:Math.floor(cur/60)},
      {values:MINS5,labels:MINS5.map(pad),value:cur%60}];
  openWheel({title:T(titleKey),sep:":",sepAt:1,cols,extra,
    format:v=>clock(fromVals(v)),
    onDone:v=>{el.value=fromMin(fromVals(v));renderTimeEntry();updatePayCalc();if(opt.then)setTimeout(opt.then,250)}});
}

// ---------- income ----------
const fmtMoney=(x,cents)=>{x=Math.round((x||0)*100)/100;const f=cents||Math.round(x)!==x?2:0;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:f,maximumFractionDigits:f}).format(x)};
const dayIncome=date=>{const d=day(date);return d.entries.reduce((a,e)=>a+(+e.pay||0),0)+(d.income||[]).reduce((a,x)=>a+(+x.amount||0),0)};
// What the pay field turns into for a given duration: a sum, or rate x hours
function payFromInput(min,cat){
  const raw=$("payIn").value;if(!raw.trim())return 0;
  const v=parseAmount(raw);if(!isFinite(v))return NaN;
  return S.payMode==="rate"?Math.round(v*min/60*100)/100:v;
}
function currentDur(){const r=readTime();return r.min||null}
function renderPay(){
  const row=$("payRow");const c=S.cat?catInfo(S.cat):null;
  row.hidden=!(c&&c.paid);if(row.hidden)return;
  $("pm-sum").setAttribute("aria-pressed",S.payMode==="sum");$("pm-rate").setAttribute("aria-pressed",S.payMode==="rate");
  const inp=$("payIn");inp.placeholder=S.payMode==="rate"?T("ratePh"):T("sumPh");
  if(S.payMode==="rate"&&!inp.value&&S.payRates[S.cat]&&document.activeElement!==inp)inp.value=S.payRates[S.cat];
  updatePayCalc();
}
function updatePayCalc(){
  updatePreview();
  const el=$("payCalc");const min=currentDur();const raw=$("payIn").value.trim();
  if(!raw){el.textContent=T("payOptional");return}
  const v=parseAmount(raw);if(!isFinite(v)){el.textContent="";return}
  if(!min){el.innerHTML=S.payMode==="rate"?T("pickDur"):"";return}
  if(S.payMode==="rate")el.innerHTML=`${fmt(min)} × ${fmtMoney(v,true)} = <b>${fmtMoney(v*min/60,true)}</b>`;
  else el.innerHTML=T("perHourIs",{r:"<b>"+fmtMoney(v/(min/60),true)+"</b>"});
}
const monthDays=m=>{const d=parse(m),n=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();return [...Array(n)].map((_,i)=>m.slice(0,8)+pad(i+1))};
function parseAmount(raw){const s=String(raw||"").replace(/[$\s]/g,"").replace(",",".");if(!/^\d+(\.\d{1,2})?$/.test(s))return NaN;const v=+s;return v>0&&v<1e6?Math.round(v*100)/100:NaN}
function renderIncome(){
  const m=S.month,days=monthDays(m),today=todayStr(),sel=S.sel;
  $("incMonth").textContent=cap(fMonth().format(parse(m)).replace(" г.",""));
  const vals=days.map(dayIncome),total=vals.reduce((a,b)=>a+b,0);
  $("incMonthTotal").textContent=fmtMoney(total);
  // goal
  const g=+S.incomeGoal||0;
  $("incGoalBox").innerHTML=g?`<div class="incgoal"><div class="bar"><i style="width:${Math.min(100,total/g*100)}%"></i></div><span>${total>=g?T("incGoalDone",{b:"<b>"+fmtMoney(g)+"</b>"}):T("incGoalLeft",{a:"<b>"+fmtMoney(g-total)+"</b>",b:fmtMoney(g)})}</span></div>`:"";
  // stats
  const ws=weekStart(sel);let wk=0;for(let i=0;i<7;i++)wk+=dayIncome(addDays(ws,i));
  let workMin=0;days.forEach(d=>{const t=dayTotals(d);for(const k in t)if(catInfo(k).paid)workMin+=t[k]});
  const perH=workMin>=30?total/(workMin/60):null;
  let best=-1,bestD=null;vals.forEach((v,i)=>{if(v>best&&v>0){best=v;bestD=days[i]}});
  const earnDays=vals.filter(v=>v>0).length;
  const st=(k,v,sub)=>`<div class="istat"><span class="k">${k}</span><span class="v">${v}</span>${sub?`<span class="s">${sub}</span>`:""}</div>`;
  $("incStats").innerHTML=
     st(sel===today?T("today"):cap(fDay().format(parse(sel))),fmtMoney(dayIncome(sel)))
    +st(T("statWeek"),fmtMoney(wk),fD().format(parse(ws))+" – "+fD().format(parse(addDays(ws,6))))
    +st(T("statPerHour"),perH!=null?fmtMoney(perH,true):"—",T("perHourHint2"))
    +st(T("statBest"),bestD?fmtMoney(best):"—",bestD?fD().format(parse(bestD))+" · "+T("earnDays",{n:earnDays}):"");
  // chart
  const max=Math.max(...vals,0);
  const step=(()=>{if(!max)return 50;const raw=max/3,p=Math.pow(10,Math.floor(Math.log10(raw)));return [1,2,2.5,5,10].map(x=>x*p).find(x=>x>=raw)})();
  const top=Math.max(step,Math.ceil(max/step)*step);
  let grid="";for(let v=0;v<=top+1e-9;v+=step)grid+=`<div style="bottom:${v/top*100}%"><span>${fmtMoney(v)}</span></div>`;
  const lbl=new Set([1,5,10,15,20,25,days.length]);
  const cols=days.map((d,i)=>{const v=vals[i],n=i+1;const cls=["mcol"];if(!v)cls.push("zero");if(d===today)cls.push("today");if(d===sel)cls.push("sel");if(lbl.has(n))cls.push("lbl");
    return `<button type="button" class="${cls.join(" ")}" data-day="${d}" title="${fD().format(parse(d))}: ${fmtMoney(v,true)}"><span class="b" style="height:${v/top*150}px"></span><span class="mlab">${n}</span></button>`}).join("");
  $("mchart").innerHTML=`<div class="grid">${grid}</div><div class="mcols" style="grid-template-columns:repeat(${days.length},minmax(0,1fr))">${cols}</div>`;
  // how to add + older stand-alone income records (from v0.10.0) for the selected day
  const q=LANG==="ru"?["«","»"]:["“","”"];const paidNames=activeCats().filter(c=>c.paid).map(c=>q[0]+esc(c.name)+q[1]).join(", ")||"—";
  $("incHow").innerHTML=T("incHow",{c:paidNames});
  const legacy=day(sel).income||[];
  $("incLegacy").hidden=!legacy.length;
  $("incList").innerHTML=legacy.map(x=>`<li><span class="amt">${fmtMoney(+x.amount,true)}</span><span class="tx">${esc(x.src)}</span><button class="del red" data-idel="${x.id}" aria-label="×">×</button></li>`).join("");
  const gi=$("incGoal");if(document.activeElement!==gi)gi.value=g||"";
  $("incGoalClr").hidden=!g;
  // day summary line
  const di=dayIncome(sel);$("dayIncome").textContent=di?"· "+T("dayIncome",{a:fmtMoney(di)}):"";
}
// ---------- week detail ----------
function renderWeekDetail(){
  const ws=S.wk,days=[...Array(7)].map((_,i)=>addDays(ws,i)),today=todayStr(),dow=I18N[LANG].dow;
  $("wdRange").textContent=fD().format(parse(days[0]))+" – "+fD().format(parse(days[6]));
  $("wdr-auto").setAttribute("aria-pressed",S.wdRange==="auto");$("wdr-full").setAttribute("aria-pressed",S.wdRange==="full");
  const all=[];days.forEach((d,i)=>day(d).entries.forEach(e=>all.push({...e,date:d,di:i,s:toMin(e.start)})));
  const placed=all.filter(e=>e.s!=null);
  let h0=0,h1=24;
  if(S.wdRange==="auto"){
    if(placed.length){h0=Math.floor(Math.min(...placed.map(e=>e.s))/60);h1=Math.ceil(Math.min(1440,Math.max(...placed.map(e=>e.s+spanOf(e))))/60);
      if(h1-h0<6){const mid=(h0+h1)/2;h0=Math.max(0,Math.floor(mid-3));h1=Math.min(24,h0+6)}}
    else{h0=8;h1=22}
    if(days.includes(today)){const nh=new Date().getHours();h0=Math.min(h0,nh);h1=Math.max(h1,nh+1)}
  }
  const HH=S.wdRange==="full"?26:40,H=(h1-h0)*HH;
  let html=`<div></div>`+days.map((d,i)=>`<button type="button" class="hd${d===S.sel?" sel":""}" data-day="${d}">${dow[i]}<b>${parse(d).getDate()}</b></button>`).join("");
  let hrs="";for(let h=h0;h<=h1;h++)hrs+=`<span style="top:${(h-h0)*HH}px">${pad(h)}:00</span>`;
  html+=`<div class="hours" style="height:${H}px">${hrs}</div>`;
  days.forEach((d,i)=>{
    let evs="";
    placed.filter(e=>e.di===i).forEach(e=>{
      const a=Math.max(e.s,h0*60),b=Math.min(e.s+spanOf(e),h1*60,1440);if(b<=a)return;
      const top=(a-h0*60)/60*HH,ht=Math.max(4,(b-a)/60*HH-1),c=catInfo(e.cat);
      const time=whenTxt(e);
      const brks=(e.breaks||[]).map(x=>{const bs=Math.max(x.s,a),be=Math.min(x.s+x.m,b);return be>bs?`<i class="evbrk" style="top:${(bs-a)/60*HH}px;height:${Math.max(2,(be-bs)/60*HH)}px"></i>`:""}).join("");
      evs+=`<button type="button" class="ev" data-day="${d}" style="--c:var(${c.v});top:${top}px;height:${ht}px" title="${esc(c.name)} · ${time} · ${fmt(e.min)}${breakTxt(e)?" · "+breakTxt(e):""}${e.pay?" · "+fmtMoney(+e.pay,true):""}${e.note?" · "+esc(e.note):""}">${ht>=16?`<b>${esc(c.name)}</b>`:""}${ht>=30?`<span>${time}</span>`:""}${brks}</button>`;
    });
    if(d===today){const n=new Date(),m=n.getHours()*60+n.getMinutes();if(m>=h0*60&&m<=h1*60)evs+=`<div class="nowl" style="top:${(m-h0*60)/60*HH}px"></div>`}
    html+=`<div class="dcol${d===today?" today":""}" style="height:${H}px;--hh:${HH}px">${evs}</div>`;
  });
  $("wd").innerHTML=html;
  const un=all.filter(e=>e.s==null);
  $("wdnote").textContent=!all.length?T("wdEmpty"):un.length?T("wdNoTime",{n:un.length+" "+I18N[LANG].entries(un.length),t:fmt(un.reduce((a,e)=>a+e.min,0))}):"";
  // table
  let rows=`<thead><tr><th>${T("thTime")}</th><th>${T("thCat")}</th><th>${T("thDur")}</th><th>${T("thPay")}</th><th>${T("thNote")}</th><th></th></tr></thead><tbody>`;
  days.forEach((d,i)=>{
    const list=sortedEntries(d);if(!list.length)return;
    const tot=list.reduce((a,e)=>a+e.min,0);
    const inc=dayIncome(d);
    rows+=`<tr class="dsep"><td colspan="6">${cap(fDay().format(parse(d)))} · ${T("dayTotal",{t:fmt(tot)})}${inc?` · <span class="pay">${fmtMoney(inc,true)}</span>`:""}</td></tr>`;
    (day(d).income||[]).forEach(x=>{rows+=`<tr><td class="mono">—</td><td>${T("income")}</td><td></td><td class="pay">${fmtMoney(+x.amount,true)}</td><td class="nt">${esc(x.src)}</td><td class="acts"><button class="del red" data-wdeli="${d}|${x.id}" aria-label="×">×</button></td></tr>`});
    list.forEach(e=>{const c=catInfo(e.cat),s=toMin(e.start);
      rows+=`<tr><td class="mono">${s!=null?whenTxt(e):"—"}</td><td><span class="cc" style="--c:var(${c.v})"><span class="dot"></span>${esc(c.name)}</span></td><td class="mono">${fmt(e.min)}</td><td class="pay">${e.pay?fmtMoney(+e.pay,true):""}</td><td class="nt">${breakTxt(e)?`<span class="brk">${breakTxt(e)}</span> `:""}${esc(e.note)}</td><td class="acts"><button class="editbtn" data-wedit="${d}|${e.id}" aria-label="${T("editEntry")}" title="${T("editEntry")}">✎</button><button class="del red" data-wdel="${d}|${e.id}" aria-label="${T("deleteEntry")}" title="${T("deleteEntry")}">×</button></td></tr>`});
  });
  rows+="</tbody>";
  $("wt").innerHTML=all.length?rows:`<tbody><tr><td class="nt">${T("wdEmpty")}</td></tr></tbody>`;
}

let catDelAsk=null; // key of the category waiting for "Delete?" confirmation
function renderCatManager(){
  const smi=$("streakMin");if(document.activeElement!==smi)smi.value=+(S.streakMin/60).toFixed(2);
  ["week","day","off"].forEach(m=>$("sm-"+m).setAttribute("aria-pressed",S.streakMode===m));
  ["hours","days"].forEach(r=>$("sr-"+r).setAttribute("aria-pressed",S.streakRule===r));
  $("smWeekBox").hidden=S.streakMode!=="week";
  $("srHoursBox").hidden=S.streakRule!=="hours";$("srDaysBox").hidden=S.streakRule!=="days";
  $("smDayBox").hidden=S.streakMode==="off"||(S.streakMode==="week"&&S.streakRule==="hours");
  $("smHint").textContent=T(S.streakMode==="week"?"smWeekHint":S.streakMode==="day"?"smDayHint":"smOffHint");
  const wh=$("streakWeekH");if(document.activeElement!==wh)wh.value=+(S.streakWeekH/60).toFixed(1);
  const wd=$("streakWeekDays");if(document.activeElement!==wd)wd.value=S.streakWeekDays;
  const weekly=S.goalMode==="week";
  $("mode-week").setAttribute("aria-pressed",weekly);$("mode-day").setAttribute("aria-pressed",!weekly);
  $("goalHint").textContent=T(weekly?"hintWeek":"hintDay");
  const list=$("catlist");
  if(!list.contains(document.activeElement)||document.activeElement.type==="checkbox"||document.activeElement.tagName==="BUTTON"){
    list.innerHTML=S.cats.map(c=>{const ci=catInfo(c.k);const src=weekly?S.wgoals:S.goals;const v=+src[c.k]||0;
      return `<div class="catrow${c.off?" off":""}" style="--c:var(${ci.v})">
        <button class="sw" data-cyc="${c.k}" aria-label="${T("colorBtn")}"></button>
        <input type="text" id="cn-${c.k}" data-cname="${c.k}" value="${esc(ci.name)}" maxlength="24" aria-label="${esc(ci.name)}">
        <div class="catopts"><label class="gl"><input type="number" min="0" step="${weekly?0.5:0.25}" id="cg-${c.k}" data-goal="${c.k}" value="${v?+(v/60).toFixed(2):""}" placeholder="—" class="mono nospin" inputmode="decimal"><span>${T(weekly?"hPerWeek":"mPerDay")}</span></label>
        <label class="chk"><input type="checkbox" id="cp-${c.k}" data-cprod="${c.k}" ${c.prod?"checked":""}><span>${T("prodLabel")}</span></label>
        <label class="chk"><input type="checkbox" id="cpay-${c.k}" data-cpaid="${c.k}" ${ci.paid?"checked":""}><span>${T("paidLabel")}</span></label>
        <button class="small" data-coff="${c.k}">${c.off?T("show"):T("hide")}</button></div>
        ${catDelAsk===c.k?`<button class="delask" data-cdel="${c.k}">${T("deleteQ")}</button>`:`<button class="del red" data-cdelask="${c.k}" aria-label="${T("deleteCat")}" title="${T("deleteCat")}">×</button>`}</div>`}).join("");
  }
  $("ncSw").innerHTML=`<button type="button" class="colorbtn" id="ncColor"><span class="sw" style="--c:${colorCss(S.newColor)}"></span>${T("pickColor")}</button>`;
}

// ---------- events ----------
document.addEventListener("click",async ev=>{
  const b=ev.target.closest("button");if(!b)return;
  const ds=b.dataset;
  if(ds.open){openPage(ds.open);return}
  if(b.hasAttribute("data-close")){const d=b.closest("dialog");if(d)d.close();return}
  if(ds.act==="acct"){closePage("drawer");setTimeout(()=>$("acctBtn").click(),60);return}
  if(ds.clock){const v=ds.clock==="12";if(S.clock12!==v){S.clock12=v;render();saveSettings()}return}
  if((b.id==="installBtn"||b.id==="shareBtn")&&$("drawer").open)closePage("drawer");
  if(ds.lang){if(ds.lang!==LANG){LANG=ds.lang;try{localStorage.setItem("ps-lang",LANG)}catch(e){}render();saveSettings()}return}
  if(ds.cat){if(S.cat!==ds.cat){S.cat=ds.cat;$("payIn").value=S.payMode==="rate"&&S.payRates[ds.cat]?S.payRates[ds.cat]:""}render();return}
  if(ds.dur){setDur(+ds.dur);return}
  if(ds.tm){if(S.tmode!==ds.tm){S.tmode=ds.tm;try{localStorage.setItem("ps-tmode2",S.tmode)}catch(e){}renderTimeEntry();updatePayCalc()}return}
  if(ds.del){if(S.edit&&S.edit.id===ds.del)cancelEdit();delEntry(S.sel,ds.del);return}
  if(ds.edit){startEdit(ds.edit);return}
  if(ds.wedit){const [d,id]=ds.wedit.split("|");closePage("pg-week");selectDay(d);setTimeout(()=>startEdit(id),60);return}
  if(ds.wdel){const [d,id]=ds.wdel.split("|");if(S.edit&&S.edit.id===id)cancelEdit();setDay(d,{entries:day(d).entries.filter(x=>x.id!==id)});render();saveDay(d);showMsg(T("entryDeleted"));return}
  if(ds.wdeli){const [d,id]=ds.wdeli.split("|");setDay(d,{income:(day(d).income||[]).filter(x=>x.id!==id)});render();saveDay(d);return}
  if(ds.day){selectDay(ds.day);return}
  if(ds.skin){const v=ds.skin==="classic"?"classic":"luxe";document.documentElement.dataset.skin=v;try{localStorage.setItem("ps-skin",v)}catch(e){}applyStatic();return}
  if(ds.tpm){S.payMode=ds.tpm;timerPayDraft="";const tp=$("tPay");if(tp)tp.value="";renderTimer();renderPay();saveSettings();return}
  if(ds.wk){setWeek(addDays(S.wk,7*+ds.wk));return}
  if(ds.swk){setWeek(ds.swk);return}
  if(ds.smode){S.streakMode=ds.smode;render();saveSettings();return}
  if(ds.srule){S.streakRule=ds.srule;render();saveSettings();return}
  if(ds.pm){if(S.payMode!==ds.pm){S.payMode=ds.pm;$("payIn").value="";renderPay();renderTimer();saveSettings()}return}
  if(ds.wdr){S.wdRange=ds.wdr;renderWeekDetail();return}
  if(ds.mode){S.goalMode=ds.mode;render();saveSettings();return}
  if(ds.idel){setDay(S.sel,{income:(day(S.sel).income||[]).filter(x=>x.id!==ds.idel)});render();saveDay(S.sel);return}
  if(ds.tdel){setDay(S.sel,{tasks:day(S.sel).tasks.filter(x=>x.id!==ds.tdel)});render();saveDay(S.sel);return}
  if(ds.mv){
    const from=S.sel,to=addDays(from,1);const tk=day(from).tasks.find(x=>x.id===ds.mv);if(!tk)return;
    setDay(from,{tasks:day(from).tasks.filter(x=>x.id!==ds.mv)});setDay(to,{tasks:[...day(to).tasks,{...tk}]});
    render();await saveDay(from);await saveDay(to);return}
  if(ds.cdelask){catDelAsk=ds.cdelask;renderCatManager();setTimeout(()=>{if(catDelAsk===ds.cdelask){catDelAsk=null;renderCatManager()}},4000);return}
  if(ds.cdel){
    const k=ds.cdel;catDelAsk=null;
    if(S.cats.length<=1){showMsg(T("lastCat"),true);renderCatManager();return}
    const name=catInfo(k).name;
    S.cats=S.cats.filter(c=>c.k!==k);
    const g={...S.goals},w={...S.wgoals};delete g[k];delete w[k];S.goals=g;S.wgoals=w;
    if(S.cat===k)S.cat=(S.cats.find(c=>!c.off)||S.cats[0]).k;
    render();saveSettings();showCatMsg(T("catDeleted",{c:name}));return}
  if(ds.gclr){const k=ds.gclr;if(S.goalMode==="week")S.wgoals={...S.wgoals,[k]:0};else S.goals={...S.goals,[k]:0};render();saveSettings();showMsg(T("goalRemoved"));return}
  if(ds.cyc){const k=ds.cyc,cur=(S.cats.find(c=>c.k===k)||{}).color;openColors(cur,col=>{S.cats=S.cats.map(c=>c.k===k?{...c,color:col}:c);render();saveSettings()});return}
  if(ds.pick){pickColor(ds.pick);return}
  if(ds.coff){S.cats=S.cats.map(c=>c.k===ds.coff?{...c,off:!c.off}:c);render();saveSettings();return}
  if(b.id==="ncColor"){openColors(S.newColor,col=>{S.newColor=col;renderCatManager()});return}
  if(b.id==="colClose"){$("colorDlg").close();return}
  if(b.id==="colUse"){pickColor($("colCustom").value);return}
  switch(b.id){
    case "prev":selectDay(addDays(S.sel,-1));break;
    case "next":selectDay(addDays(S.sel,1));break;
    case "today":selectDay(todayStr());break;
    case "wPrev":setWeek(addDays(S.wk,-7));break;
    case "wNext":setWeek(addDays(S.wk,7));break;
    case "thisWeek":setWeek(weekStart(todayStr()));break;
    case "mPrev":S.month=addMonths(S.month,-1);renderCalendar();renderIncome();break;
    case "mNext":S.month=addMonths(S.month,1);renderCalendar();renderIncome();break;
    case "goNewCat":openPage("pg-cats");setTimeout(()=>$("ncName").focus(),320);break;
    case "ncAdd":{
      const name=$("ncName").value.trim();
      if(!name){showCatMsg(T("catNeedName"));return}
      if(S.cats.some(c=>catInfo(c.k).name.toLowerCase()===name.toLowerCase())){showCatMsg(T("catExists"));return}
      const k="c"+uid();S.cats=[...S.cats,{k,name,color:S.newColor,prod:$("ncProd").checked}];
      S.cat=k;$("ncName").value="";
      const nextCol=COLORS.find(col=>!S.cats.some(c=>c.color===col));if(nextCol)S.newColor=nextCol;
      render();saveSettings();showCatMsg(T("catAdded",{c:name}));break;}
    case "taskAdd":addTask();break;
    case "incGoalClr":S.incomeGoal=0;$("incGoal").value="";renderIncome();saveSettings();break;
    case "iPrev":S.month=addMonths(S.month,-1);renderCalendar();renderIncome();break;
    case "iNext":S.month=addMonths(S.month,1);renderCalendar();renderIncome();break;
    case "exportBtn":exportBackup();break;
    case "acctBtn":acctMsg("");renderAccount();try{$("acct").showModal()}catch(e){$("acct").setAttribute("open","")}break;
    case "acctClose":$("acct").close();break;
    case "gBtn":doAuth("google");break;
    case "emailIn":doAuth("in");break;
    case "emailUp":doAuth("up");break;
    case "resetBtn":doAuth("reset");break;
    case "signOutBtn":flushNote();if(cloud){$("signOutBtn").disabled=true;cloud.signOut().finally(()=>location.reload())}break;
    case "migrateBtn":migrateLocal();break;
    case "installBtn":openInstall();break;
    case "instClose":$("installDlg").close();break;
    case "shareBtn":shareApp();break;
    case "shareClose":$("shareDlg").close();break;
    case "shareCopy":{try{await navigator.clipboard.writeText(APP_URL);$("shareCopied").textContent=T("linkCopied")}catch(e){$("shareUrl").select();$("shareCopied").textContent=T("copyManual")}break}
    case "addBtn":{
      if(!S.cat)return;
      const tr=readTime();
      if(!tr.min){showMsg(tr.hint,true);return}
      const min=tr.min,start=tr.start;
      const ci=catInfo(S.cat),cn=ci.name;
      let pay=0;
      if(ci.paid){
        pay=payFromInput(min,S.cat);
        if(!isFinite(pay)){showMsg(T("badAmount"),true);$("payIn").focus();return}
        if(pay&&S.payMode==="rate"){const r=parseAmount($("payIn").value);if(S.payRates[S.cat]!==r){S.payRates={...S.payRates,[S.cat]:r};saveSettings()}}
      }
      if(S.edit){
        const ed=S.edit,old=day(ed.date).entries.find(x=>x.id===ed.id);
        const e={...(old||{}),id:ed.id,cat:S.cat,min:Math.round(min),note:$("noteIn").value.trim()};
        if(start)e.start=start;else delete e.start;
        if(pay>0)e.pay=pay;else delete e.pay;
        // keep timer breaks only if the times were not changed
        const same=ed.breaks&&start===ed.start0&&S.tmode==="range"&&min===(ed.span||min);
        if(same){e.min=ed.min0;e.span=ed.span;e.breaks=ed.breaks}else{delete e.span;delete e.breaks}
        setDay(ed.date,{entries:day(ed.date).entries.filter(x=>x.id!==ed.id)});
        setDay(S.sel,{entries:[...day(S.sel).entries,e]});
        const moved=ed.date!==S.sel;S.edit=null;render();
        await saveDay(S.sel);if(moved)await saveDay(ed.date);
        showMsg(T("entrySaved"));
      }else{
        await addEntry(S.cat,min,$("noteIn").value.trim(),S.sel,start,pay);
        showMsg(T("added",{t:fmt(min),c:cn})+(start?T("addedAt",{s:clockStr(start)}):"")+(pay?" · "+fmtMoney(pay,true):""));
      }
      $("noteIn").value="";$("startIn").value="";$("rStart").value="";$("rEnd").value="";S.dh=0;S.dm=0;renderTimeEntry();
      if(S.payMode!=="rate")$("payIn").value="";
      render();break;}
    case "editCancel":cancelEdit();break;
    case "durTile":pickDuration();break;
    case "startTile":pickTime("startIn","startedAtT",{clear:true});break;
    case "rStartTile":pickTime("rStart","rStartL",{then:()=>{if(!$("rEnd").value)pickTime("rEnd","rEndL")}});break;
    case "rEndTile":pickTime("rEnd","rEndL");break;
    case "tStart":if(!S.cat)return;S.timer={cat:S.cat,start:Date.now(),pauses:[]};render();saveSettings();break;
    case "tPause":{const tm=S.timer;if(!tm)return;const now=Date.now();
      if(tm.pausedAt){S.timer={...tm,pauses:[...(tm.pauses||[]),{s:tm.pausedAt,e:now}],pausedAt:null}}
      else S.timer={...tm,pausedAt:now};
      renderTimer();saveSettings();break;}
    case "tStop":{
      const tm=S.timer;if(!tm)return;
      if(activeMs(tm)<60e3){S.timer=null;timerPayDraft="";showMsg(T("timerShort"));render();saveSettings();break}
      // paid category: freeze the clock and ask about earnings first (nothing is saved yet)
      if(catInfo(tm.cat).paid){const now=Date.now();S.timer={...tm,stopping:true,wasPaused:!!tm.pausedAt,pauseStart:tm.pausedAt||null,pausedAt:now};timerPayDraft="";renderTimer();saveSettings();break}
      await finishTimer(0);break;}
    case "tSave":{
      const tp=$("tPay");let pay=0;
      if(tp&&tp.value.trim()){const v=parseAmount(tp.value);if(!isFinite(v)){showMsg(T("badAmount"),true);tp.focus();return}
        const min=Math.round(activeMs(S.timer)/60000);pay=S.payMode==="rate"?Math.round(v*min/60*100)/100:v;
        if(S.payMode==="rate"&&S.payRates[S.timer.cat]!==v)S.payRates={...S.payRates,[S.timer.cat]:v}}
      await finishTimer(pay);break;}
    case "tNoPay":await finishTimer(0);break;
    case "tBack":{const tm=S.timer;if(!tm)return;
      // back to the running timer: the seconds spent on this screen still count as work
      const t={...tm,stopping:false,pausedAt:tm.wasPaused?tm.pauseStart:null};delete t.wasPaused;delete t.pauseStart;S.timer=t;timerPayDraft="";renderTimer();saveSettings();break}
    case "tCancel":S.timer=null;timerPayDraft="";render();saveSettings();break;
  }
});
function showCatMsg(t){showMsg(t);const h=$("goalHint");const old=h.textContent;h.textContent=t;clearTimeout(showCatMsg.t);showCatMsg.t=setTimeout(()=>{h.textContent=T(S.goalMode==="week"?"hintWeek":"hintDay")},3000)}
function addTask(){
  const v=$("taskIn").value.trim();if(!v)return;
  setDay(S.sel,{tasks:[...day(S.sel).tasks,{id:uid(),text:v,done:false}]});$("taskIn").value="";render();saveDay(S.sel);$("taskIn").focus();
}
document.addEventListener("change",e=>{
  const ds=e.target.dataset;
  if(ds.tk){setDay(S.sel,{tasks:day(S.sel).tasks.map(x=>x.id===ds.tk?{...x,done:e.target.checked}:x)});render();saveDay(S.sel);return}
  if(ds.cpaid){S.cats=S.cats.map(c=>c.k===ds.cpaid?{...c,paid:e.target.checked}:c);render();saveSettings();return}
  if(ds.cprod){S.cats=S.cats.map(c=>c.k===ds.cprod?{...c,prod:e.target.checked}:c);render();saveSettings();return}
  if(ds.cname){const v=e.target.value.trim();S.cats=S.cats.map(c=>{if(c.k!==ds.cname)return c;const n={...c};if(v&&v!==T("cat_"+c.k))n.name=v;else delete n.name;return n});render();saveSettings();return}
});
$("taskIn").addEventListener("keydown",e=>{if(e.key==="Enter")addTask()});
let igT;$("incGoal").addEventListener("input",e=>{const v=Math.max(0,Math.round(+e.target.value||0));S.incomeGoal=v;renderIncome();clearTimeout(igT);igT=setTimeout(saveSettings,700)});
$("acctPass").addEventListener("keydown",e=>{if(e.key==="Enter")doAuth("in")});
$("acct").addEventListener("click",e=>{if(e.target===$("acct"))$("acct").close()});
$("installDlg").addEventListener("click",e=>{if(e.target===$("installDlg"))$("installDlg").close()});
$("shareDlg").addEventListener("click",e=>{if(e.target===$("shareDlg"))$("shareDlg").close()});
$("ncName").addEventListener("keydown",e=>{if(e.key==="Enter")$("ncAdd").click()});
$("noteArea").addEventListener("input",e=>{
  const date=S.sel;setDay(date,{note:e.target.value});noteDirty={date};$("noteSaved").textContent=T("saving");
  clearTimeout(noteTimer);noteTimer=setTimeout(flushNote,800);
});
$("noteArea").addEventListener("blur",()=>{flushNote();renderCalendar()});
$("payIn").addEventListener("input",updatePayCalc);
$("payIn").addEventListener("keydown",e=>{if(e.key==="Enter")$("addBtn").click()});
$("noteIn").addEventListener("keydown",e=>{if(e.key==="Enter")$("addBtn").click()});
let goalT;
$("catlist").addEventListener("input",e=>{
  const k=e.target.dataset.goal;if(!k)return;const n=Math.max(0,+e.target.value||0);
  if(S.goalMode==="week")S.wgoals={...S.wgoals,[k]:Math.round(n*60)};else S.goals={...S.goals,[k]:Math.round(n*60)};
  render();clearTimeout(goalT);goalT=setTimeout(saveSettings,700);
});
document.addEventListener("keydown",e=>{
  if(e.target.matches("input,textarea"))return;
  if(e.key==="ArrowLeft")selectDay(addDays(S.sel,-1));
  if(e.key==="ArrowRight")selectDay(addDays(S.sel,1));
});
window.addEventListener("pagehide",flushNote);
let smT;
$("streakWeekH").addEventListener("input",e=>{const n=Math.round((+e.target.value||0)*60);if(!(n>0))return;S.streakWeekH=n;renderStreak();clearTimeout(smT);smT=setTimeout(saveSettings,700)});
$("streakWeekDays").addEventListener("input",e=>{const n=Math.round(+e.target.value||0);if(!(n>=1&&n<=7))return;S.streakWeekDays=n;renderStreak();clearTimeout(smT);smT=setTimeout(saveSettings,700)});
$("streakMin").addEventListener("input",e=>{const n=Math.round((+e.target.value||0)*60);if(!(n>0))return;S.streakMin=n;renderStreak();clearTimeout(smT);smT=setTimeout(saveSettings,700)});

boot();
})();
