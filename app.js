"use strict";
// Productivity Starter — keep in sync with VERSION in sw.js and CHANGELOG.md
const APP_VERSION="0.10.0";
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
 catsGoals:"Categories & goals",perWeek:"Per week",perDay:"Per day",hintWeek:"Hours per week. Best for an irregular schedule: what counts is the weekly total, not which day.",hintDay:"Minutes per day, tracked separately for each day. Set 0 for no goal.",
 hPerWeek:"h / week",mPerDay:"min / day",prodLabel:"productive",hide:"Hide",show:"Show",hidden:"hidden",newCat:"New category",namePh:"Name, e.g. Trading, Reading, Side project",catExists:"That category already exists",catNeedName:"Type a name for the category",catAdded:"Category added: {c}",colorBtn:"Change color",
 deleted:"Deleted category",hasPlan:"tasks or notes",addCat:"+ Category",
 status_connecting:"Loading…",status_local:"Saved on this device",status_synced:"Synced",status_slow:"Storage isn't responding yet — data may be incomplete",status_err:"Storage error: {e}",
 h:"h",m:"m",dow:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
 entries:n=>n===1?"entry":"entries",
 cat_study:"Study",cat_work:"Work",cat_train:"Workout",cat_rest:"Rest",
 streakNow:"day streak",streakNow1:"day streak",streakBest:"Best: {n}",streakToday:"Today counts after {t} productive",streakTodayDone:"Today counts ✓",
 streakRule:"Streak: a day counts if productive time is at least",streakRule2:"minutes",
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
 income:"Income",incMonthTotal:"Earned this month",statWeek:"This week",statPerHour:"Per hour of work",perHourHint:"month income ÷ hours in “{c}”",statBest:"Best day",earnDays:"{n} paid days",
 addIncome:"Add income for {d}",amountPh:"Amount",srcPh:"Source (optional): job, client, gig…",noIncome:"No income on this day.",grossNote:"before taxes",
 incGoal:"Monthly income goal",goalHint:"empty or 0 = no goal",incGoalLeft:"{a} left to {b}",incGoalDone:"Goal reached ✓ {b}",badAmount:"Enter an amount, e.g. 85 or 120.50",incAdded:"Added {a}",dayIncome:"earned {a}",
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
 catsGoals:"Категории и цели",perWeek:"На неделю",perDay:"На день",hintWeek:"Часы в неделю. Подходит для плавающего графика: важно, сколько набрал за неделю, а не в какой день.",hintDay:"Минуты в день, считаются отдельно для каждого дня. Поставь 0, если цель не нужна.",
 hPerWeek:"ч / нед",mPerDay:"мин / день",prodLabel:"продуктивное",hide:"Скрыть",show:"Вернуть",hidden:"скрыта",newCat:"Новая категория",namePh:"Название, например Трейдинг, Чтение, Проект",catExists:"Такая категория уже есть",catNeedName:"Впиши название категории",catAdded:"Категория добавлена: {c}",colorBtn:"Сменить цвет",
 deleted:"Удалённая категория",hasPlan:"задачи или заметки",addCat:"+ Категория",
 status_connecting:"Загрузка…",status_local:"Сохранено на этом устройстве",status_synced:"Синхронизировано",status_slow:"Хранилище пока не отвечает — данные могут быть неполными",status_err:"Ошибка хранилища: {e}",
 h:"ч",m:"м",dow:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
 entries:n=>{const a=n%10,b=n%100;return (a===1&&b!==11)?"запись":(a>=2&&a<=4&&(b<10||b>=20))?"записи":"записей"},
 cat_study:"Учёба",cat_work:"Работа",cat_train:"Тренировка",cat_rest:"Отдых",
 streakNow:"дней подряд",streakNow1:"день подряд",streakBest:"Рекорд: {n}",streakToday:"Сегодня засчитается после {t} продуктивного",streakTodayDone:"Сегодня засчитано ✓",
 streakRule:"Streak: день засчитывается, если продуктивного времени не меньше",streakRule2:"минут",
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
const DURS=[15,30,45,60,90,120];
const $=id=>document.getElementById(id);

const S={
  days:{},          // date -> {entries:[], tasks:[], note:""}
  cats:DEFAULT_CATS.map(c=>({...c})),
  goals:{...DEF_DAY}, wgoals:{...DEF_WEEK}, goalMode:"week",
  timer:null, sel:todayStr(), month:null, cat:"study", dur:null, newColor:"sky", streakMin:60, wdRange:"auto", incomeGoal:0,
};
S.month=monthOf(S.sel);

function catInfo(k){
  const c=S.cats.find(x=>x.k===k);
  if(!c)return {k,name:T("deleted"),v:"--slate",prod:false,off:true,missing:true};
  return {k,name:c.name||T("cat_"+k),v:"--"+(COLORS.includes(c.color)?c.color:"slate"),prod:!!c.prod,off:!!c.off};
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
function fromMin(x){x=((Math.round(x)%1440)+1440)%1440;return pad(Math.floor(x/60))+":"+pad(x%60)}
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
function settingsBody(){return {type:"settings",cats:S.cats,goals:S.goals,wgoals:S.wgoals,goalMode:S.goalMode,timer:S.timer,lang:LANG,streakMin:S.streakMin,incomeGoal:S.incomeGoal}}
function applySettings(v){
  if(!v)return;
  if(Array.isArray(v.cats)&&v.cats.length)S.cats=v.cats.map(c=>({...c}));
  S.goals={...S.goals,...(v.goals||{})};
  S.wgoals={...S.wgoals,...(v.wgoals||{})};
  if(v.goalMode==="day"||v.goalMode==="week")S.goalMode=v.goalMode;
  S.timer=v.timer||null;
  if(+v.streakMin>0)S.streakMin=+v.streakMin;
  if(v.incomeGoal!=null&&isFinite(+v.incomeGoal))S.incomeGoal=Math.max(0,+v.incomeGoal);
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
  $("syncNote").textContent=T(user?"syncOn":"syncOff");
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
(function(){if(PLATFORM.startsWith("ios")&&!isStandalone())$("iosHint").hidden=false})();
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
// A new version activates by itself. The banner appears only when it arrives while this page is
// already open (the page still runs the old code); after any reload the page is current and no banner shows.
if("serviceWorker" in navigator&&location.protocol!=="file:"){
  const hadController=!!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange",()=>{if(hadController)$("updateBar").hidden=false});
  $("updateBtn").addEventListener("click",()=>{flushNote();location.reload()});
  window.addEventListener("load",async()=>{
    try{
      const reg=await navigator.serviceWorker.register("sw.js",{updateViaCache:"none"});
      // an older version may still be waiting from before this fix: let it take over
      if(reg.waiting)reg.waiting.postMessage("skipWaiting");
      // check for updates when the app comes back to the foreground, at most every 30 min
      let last=Date.now();
      document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&Date.now()-last>30*60e3){last=Date.now();reg.update().catch(()=>{})}});
    }catch(e){}
  });
}


// ---------- actions ----------
async function saveDay(date){try{await (store&&store.saveDay(date))}catch(err){showMsg(T("notSaved",{e:err.message||err.code||"error"}),true)}}
function saveSettings(){return store?store.saveSettings().catch(()=>showMsg(T("settingsFail"),true)):Promise.resolve()}
async function addEntry(cat,min,note,date,start){
  const e={id:uid(),cat,min:Math.round(min),note:note||"",at:Date.now()};if(start)e.start=start;
  setDay(date,{entries:[...day(date).entries,e]});render();await saveDay(date);
}
async function delEntry(date,id){setDay(date,{entries:day(date).entries.filter(e=>e.id!==id)});render();await saveDay(date)}
function showMsg(t,err){const m=$("msg");m.textContent=t;m.className="msg"+(err?" err":"");clearTimeout(showMsg.t);showMsg.t=setTimeout(()=>{m.textContent=""},3500)}
function selectDay(d){flushNote();S.sel=d;if(monthOf(d)!==S.month)S.month=monthOf(d);render()}

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
  $("lang-en").setAttribute("aria-pressed",LANG==="en");$("lang-ru").setAttribute("aria-pressed",LANG==="ru");
  $("status").textContent=T(statusKey,statusVar);
  $("verBadge").textContent="Beta · v"+APP_VERSION;$("footVer").textContent="Productivity Starter v"+APP_VERSION+" beta";
  if(typeof renderAccount==="function"&&$("acctBtn"))renderAccount();
}

function render(){
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
  renderTimeline();

  // logger
  $("seg").setAttribute("aria-label",T("logTime"));
  $("seg").innerHTML=activeCats().map(c=>`<button type="button" style="--c:var(${c.v})" data-cat="${c.k}" aria-pressed="${S.cat===c.k}"><span class="dot"></span>${esc(c.name)}</button>`).join("")
    +`<button type="button" class="addcat" id="goNewCat">${T("addCat")}</button>`;
  $("durs").innerHTML=DURS.map(d=>{const H=T("h"),M=T("m");return `<button type="button" data-dur="${d}" aria-pressed="${S.dur===d}">${d<60?d+M:(d%60?(d/60).toString().replace(".",LANG==="ru"?",":".")+H:d/60+H)}</button>`}).join("");
  renderTimer();

  // journal
  const list=sortedEntries(sel);
  $("logCount").textContent=list.length?list.length+" "+I18N[LANG].entries(list.length):"";
  $("log").innerHTML=list.length?list.map(e=>{const c=catInfo(e.cat);const s=toMin(e.start);
    const when=s!=null?fromMin(s)+"–"+fromMin(s+e.min):T("noTime");
    return `<li style="--c:var(${c.v})"><span class="when">${when}</span><span class="dot"></span><span class="k">${esc(c.name)}</span><span class="t">${fmt(e.min)}</span><span class="n">${esc(e.note)}</span><button class="del" data-del="${e.id}" aria-label="×">×</button></li>`}).join("")
    :`<li class="empty">${T("emptyLog")}</li>`;

  renderWeek();
  renderStreak();
  renderWeekDetail();
  renderIncome();
  renderCatManager();
}
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
  $("tasks").innerHTML=d.tasks.length?d.tasks.map(x=>`<li class="${x.done?"ok":""}"><input type="checkbox" id="tk-${x.id}" data-tk="${x.id}" ${x.done?"checked":""}><label class="tx" for="tk-${x.id}">${esc(x.text)}</label>${x.done?"<span></span>":`<button class="mv" data-mv="${x.id}">${T("toTomorrow")}</button>`}<button class="del" data-tdel="${x.id}" aria-label="×">×</button></li>`).join("")
    :`<li class="empty">${T("noTasks")}</li>`;
  const ta=$("noteArea");if(document.activeElement!==ta&&ta.value!==d.note)ta.value=d.note;
  if(!noteDirty)$("noteSaved").textContent="";
}

function renderTimeline(){
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

function renderTimer(){
  const el=$("timer"),tm=S.timer;
  if(tm){
    const c=catInfo(tm.cat);
    el.className="timer on";el.style.setProperty("--c",`var(${c.v})`);
    el.innerHTML=`<span class="label">${T("running")}</span><div class="clock" id="clock">0:00:00</div>
      <div class="what"><span class="pulse"></span><b>${esc(c.name)}</b> · ${T("since",{s:new Date(tm.start).toLocaleTimeString(loc(),{hour:"2-digit",minute:"2-digit"})})}</div>
      <div class="row"><button class="primary" id="tStop">${T("stopLog")}</button><button class="ghost" id="tCancel">${T("reset")}</button></div>`;
    tick();
  }else{
    const c=S.cat?catInfo(S.cat):{name:"—",v:"--slate"};
    el.className="timer";el.style.setProperty("--c",`var(${c.v})`);
    el.innerHTML=`<span class="label">${T("timer")}</span><div class="clock" style="color:var(--muted)">0:00:00</div>
      <div class="what">${T("timerIdle")} <b>${esc(c.name)}</b></div>
      <div class="row"><button class="primary" id="tStart" ${S.cat?"":"disabled"}>${T("go")}</button></div>`;
  }
}
function tick(){const c=$("clock");if(!c||!S.timer)return;const s=Math.max(0,Math.floor((Date.now()-S.timer.start)/1000));c.textContent=Math.floor(s/3600)+":"+pad(Math.floor(s/60)%60)+":"+pad(s%60)}
setInterval(tick,1000);
setInterval(renderTimeline,60000);

function renderWeek(){
  const ws=weekStart(S.sel);const days=[...Array(7)].map((_,i)=>addDays(ws,i));
  const tots=days.map(dayTotals),sums=tots.map(sumT);
  const maxMin=Math.max(240,...sums);const stepH=maxMin<=360?1:maxMin<=720?2:4;
  const top=Math.ceil(maxMin/60/stepH)*stepH*60;const dow=I18N[LANG].dow;
  $("wkRange").textContent=fD().format(parse(days[0]))+" – "+fD().format(parse(days[6]));
  let grid="";for(let hh=0;hh<=top/60;hh+=stepH)grid+=`<div style="bottom:${hh*60/top*100}%"><span>${hh}${T("h")}</span></div>`;
  const cols=days.map((d,i)=>{const t=tots[i],s=sums[i];
    const segs=catsWithTime(t).map(c=>`<span style="height:${t[c.k]/top*200}px;background:var(${c.v})"></span>`).join("");
    return `<button class="col${d===S.sel?" sel":""}" data-day="${d}" aria-label="${dow[i]} ${fmt(s)}">${s?`<span class="tot">${fmtShort(s)}</span>`:""}<div class="stack">${segs}</div><span class="lab">${dow[i]} ${parse(d).getDate()}</span></button>`}).join("");
  $("chart").innerHTML=`<div class="grid">${grid}</div><div class="cols">${cols}</div>`;
  const wk=weekTotals(S.sel);const all=sums.reduce((a,b)=>a+b,0),active=sums.filter(Boolean).length;
  const list=[...activeCats()];catsWithTime(wk).forEach(c=>{if(!list.find(x=>x.k===c.k))list.push(c)});
  $("wkTot").innerHTML=list.map(c=>{const g=+S.wgoals[c.k]||0;return `<div class="line" style="--c:var(${c.v})"><span class="dot"></span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(c.name)}</span><span class="mono">${fmt(wk[c.k]||0)}${S.goalMode==="week"&&g?` <span style="color:var(--muted)">/ ${fmtShort(g)}</span>`:""}</span></div>`}).join("")
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
function renderStreak(){
  const s=streakInfo(),thr=S.streakMin,today=todayStr();
  let dots="";for(let i=13;i>=0;i--){const d=addDays(today,-i);const ok=prodMin(d)>=thr;dots+=`<i class="${ok?"ok":""}${i===0?" td":""}" title="${fD().format(parse(d))}: ${fmt(prodMin(d))}"></i>`}
  const word=LANG==="en"?(s.cur===1?T("streakNow1"):T("streakNow")):(()=>{const a=s.cur%10,b=s.cur%100;return (a===1&&b!==11)?T("streakNow1"):(a>=2&&a<=4&&(b<10||b>=20))?"дня подряд":T("streakNow")})();
  $("streak").innerHTML=`<div><div class="num${s.cur>=3?" hot":""}"><b>${s.cur}</b><span>${word}</span></div>
    <div class="best">${T("streakBest",{n:"<b>"+s.best+"</b>"})} · ${s.todayDone?T("streakTodayDone"):T("streakToday",{t:fmt(thr-s.todayMin)})}</div></div>
    <div class="sdots" aria-hidden="true">${dots}</div>`;
}

// ---------- income ----------
const fmtMoney=(x,cents)=>{x=Math.round((x||0)*100)/100;const f=cents||Math.round(x)!==x?2:0;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:f,maximumFractionDigits:f}).format(x)};
const dayIncome=date=>(day(date).income||[]).reduce((a,x)=>a+(+x.amount||0),0);
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
  let workMin=0;days.forEach(d=>{workMin+=dayTotals(d).work||0});
  const perH=workMin>=30?total/(workMin/60):null;
  let best=-1,bestD=null;vals.forEach((v,i)=>{if(v>best&&v>0){best=v;bestD=days[i]}});
  const earnDays=vals.filter(v=>v>0).length;
  const st=(k,v,sub)=>`<div class="istat"><span class="k">${k}</span><span class="v">${v}</span>${sub?`<span class="s">${sub}</span>`:""}</div>`;
  $("incStats").innerHTML=
     st(sel===today?T("today"):cap(fDay().format(parse(sel))),fmtMoney(dayIncome(sel)))
    +st(T("statWeek"),fmtMoney(wk),fD().format(parse(ws))+" – "+fD().format(parse(addDays(ws,6))))
    +st(T("statPerHour"),perH!=null?fmtMoney(perH,true):"—",T("perHourHint",{c:esc(catInfo("work").name)}))
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
  // add + list for the selected day
  $("incAddTitle").textContent=T("addIncome",{d:sel===today?T("today").toLowerCase():fD().format(parse(sel))});
  const list=day(sel).income||[];
  $("incList").innerHTML=list.length?list.map(x=>`<li><span class="amt">${fmtMoney(+x.amount,true)}</span><span class="tx">${esc(x.src)}</span><button class="del" data-idel="${x.id}" aria-label="×">×</button></li>`).join(""):`<li class="empty">${T("noIncome")}</li>`;
  const srcs=[];Object.keys(S.days).sort().reverse().forEach(k=>(day(k).income||[]).forEach(x=>{if(x.src&&!srcs.includes(x.src))srcs.push(x.src)}));
  $("incSrcList").innerHTML=srcs.slice(0,20).map(x=>`<option value="${esc(x)}"></option>`).join("");
  const gi=$("incGoal");if(document.activeElement!==gi)gi.value=g||"";
  // day summary line
  const di=dayIncome(sel);$("dayIncome").textContent=di?"· "+T("dayIncome",{a:fmtMoney(di)}):"";
}
function addIncome(){
  const a=parseAmount($("incAmt").value);
  if(!isFinite(a)){incMsg(T("badAmount"),"err");$("incAmt").focus();return}
  const src=$("incSrc").value.trim().slice(0,40);
  const date=S.sel;
  setDay(date,{income:[...(day(date).income||[]),{id:uid(),amount:a,src,at:Date.now()}]});
  $("incAmt").value="";$("incSrc").value="";
  render();saveDay(date);incMsg(T("incAdded",{a:fmtMoney(a,true)}),"ok");
}
function incMsg(t,k){const m=$("incMsg");m.textContent=t;m.className="datamsg"+(k?" "+k:"");clearTimeout(incMsg.t);incMsg.t=setTimeout(()=>{m.textContent=""},3000)}

// ---------- week detail ----------
function renderWeekDetail(){
  const ws=weekStart(S.sel),days=[...Array(7)].map((_,i)=>addDays(ws,i)),today=todayStr(),dow=I18N[LANG].dow;
  $("wdRange").textContent=fD().format(parse(days[0]))+" – "+fD().format(parse(days[6]));
  $("wdr-auto").setAttribute("aria-pressed",S.wdRange==="auto");$("wdr-full").setAttribute("aria-pressed",S.wdRange==="full");
  const all=[];days.forEach((d,i)=>day(d).entries.forEach(e=>all.push({...e,date:d,di:i,s:toMin(e.start)})));
  const placed=all.filter(e=>e.s!=null);
  let h0=0,h1=24;
  if(S.wdRange==="auto"){
    if(placed.length){h0=Math.floor(Math.min(...placed.map(e=>e.s))/60);h1=Math.ceil(Math.min(1440,Math.max(...placed.map(e=>e.s+e.min)))/60);
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
      const a=Math.max(e.s,h0*60),b=Math.min(e.s+e.min,h1*60,1440);if(b<=a)return;
      const top=(a-h0*60)/60*HH,ht=Math.max(4,(b-a)/60*HH-1),c=catInfo(e.cat);
      const time=fromMin(e.s)+"–"+fromMin(e.s+e.min);
      evs+=`<button type="button" class="ev" data-day="${d}" style="--c:var(${c.v});top:${top}px;height:${ht}px" title="${esc(c.name)} · ${time} · ${fmt(e.min)}${e.note?" · "+esc(e.note):""}">${ht>=16?`<b>${esc(c.name)}</b>`:""}${ht>=30?`<span>${time}</span>`:""}</button>`;
    });
    if(d===today){const n=new Date(),m=n.getHours()*60+n.getMinutes();if(m>=h0*60&&m<=h1*60)evs+=`<div class="nowl" style="top:${(m-h0*60)/60*HH}px"></div>`}
    html+=`<div class="dcol${d===today?" today":""}" style="height:${H}px;--hh:${HH}px">${evs}</div>`;
  });
  $("wd").innerHTML=html;
  const un=all.filter(e=>e.s==null);
  $("wdnote").textContent=!all.length?T("wdEmpty"):un.length?T("wdNoTime",{n:un.length+" "+I18N[LANG].entries(un.length),t:fmt(un.reduce((a,e)=>a+e.min,0))}):"";
  // table
  let rows=`<thead><tr><th>${T("thTime")}</th><th>${T("thCat")}</th><th>${T("thDur")}</th><th>${T("thNote")}</th></tr></thead><tbody>`;
  days.forEach((d,i)=>{
    const list=sortedEntries(d);if(!list.length)return;
    const tot=list.reduce((a,e)=>a+e.min,0);
    rows+=`<tr class="dsep"><td colspan="4">${cap(fDay().format(parse(d)))} · ${T("dayTotal",{t:fmt(tot)})}</td></tr>`;
    list.forEach(e=>{const c=catInfo(e.cat),s=toMin(e.start);
      rows+=`<tr><td class="mono">${s!=null?fromMin(s)+"–"+fromMin(s+e.min):"—"}</td><td><span class="cc" style="--c:var(${c.v})"><span class="dot"></span>${esc(c.name)}</span></td><td class="mono">${fmt(e.min)}</td><td class="nt">${esc(e.note)}</td></tr>`});
  });
  rows+="</tbody>";
  $("wt").innerHTML=all.length?rows:`<tbody><tr><td class="nt">${T("wdEmpty")}</td></tr></tbody>`;
}

function renderCatManager(){
  const smi=$("streakMin");if(document.activeElement!==smi)smi.value=S.streakMin;
  const weekly=S.goalMode==="week";
  $("mode-week").setAttribute("aria-pressed",weekly);$("mode-day").setAttribute("aria-pressed",!weekly);
  $("goalHint").textContent=T(weekly?"hintWeek":"hintDay");
  const list=$("catlist");
  if(!list.contains(document.activeElement)||document.activeElement.type==="checkbox"||document.activeElement.tagName==="BUTTON"){
    list.innerHTML=S.cats.map(c=>{const ci=catInfo(c.k);const src=weekly?S.wgoals:S.goals;const v=+src[c.k]||0;
      return `<div class="catrow${c.off?" off":""}" style="--c:var(${ci.v})">
        <button class="sw" data-cyc="${c.k}" aria-label="${T("colorBtn")}"></button>
        <input type="text" id="cn-${c.k}" data-cname="${c.k}" value="${esc(ci.name)}" maxlength="24" aria-label="${esc(ci.name)}">
        <label class="gl"><input type="number" min="0" step="${weekly?0.5:15}" id="cg-${c.k}" data-goal="${c.k}" value="${weekly?+(v/60).toFixed(1):v}" class="mono"><span>${T(weekly?"hPerWeek":"mPerDay")}</span></label>
        <label class="chk"><input type="checkbox" id="cp-${c.k}" data-cprod="${c.k}" ${c.prod?"checked":""}><span>${T("prodLabel")}</span></label>
        <button class="small" data-coff="${c.k}">${c.off?T("show"):T("hide")}</button></div>`}).join("");
  }
  $("ncSw").innerHTML=COLORS.map(col=>`<button type="button" class="sw" style="--c:var(--${col})" data-ncol="${col}" aria-pressed="${S.newColor===col}" aria-label="${col}"></button>`).join("");
}

// ---------- events ----------
document.addEventListener("click",async ev=>{
  const b=ev.target.closest("button");if(!b)return;
  const ds=b.dataset;
  if(ds.lang){if(ds.lang!==LANG){LANG=ds.lang;try{localStorage.setItem("ps-lang",LANG)}catch(e){}render();saveSettings()}return}
  if(ds.cat){S.cat=ds.cat;render();return}
  if(ds.dur){const d=+ds.dur;S.dur=S.dur===d?null:d;$("durIn").value="";render();return}
  if(ds.del){delEntry(S.sel,ds.del);return}
  if(ds.day){selectDay(ds.day);return}
  if(ds.wdr){S.wdRange=ds.wdr;renderWeekDetail();return}
  if(ds.mode){S.goalMode=ds.mode;render();saveSettings();return}
  if(ds.idel){setDay(S.sel,{income:(day(S.sel).income||[]).filter(x=>x.id!==ds.idel)});render();saveDay(S.sel);return}
  if(ds.tdel){setDay(S.sel,{tasks:day(S.sel).tasks.filter(x=>x.id!==ds.tdel)});render();saveDay(S.sel);return}
  if(ds.mv){
    const from=S.sel,to=addDays(from,1);const tk=day(from).tasks.find(x=>x.id===ds.mv);if(!tk)return;
    setDay(from,{tasks:day(from).tasks.filter(x=>x.id!==ds.mv)});setDay(to,{tasks:[...day(to).tasks,{...tk}]});
    render();await saveDay(from);await saveDay(to);return}
  if(ds.cyc){S.cats=S.cats.map(c=>c.k===ds.cyc?{...c,color:COLORS[(COLORS.indexOf(c.color)+1)%COLORS.length]}:c);render();saveSettings();return}
  if(ds.coff){S.cats=S.cats.map(c=>c.k===ds.coff?{...c,off:!c.off}:c);render();saveSettings();return}
  if(ds.ncol){S.newColor=ds.ncol;renderCatManager();return}
  switch(b.id){
    case "prev":selectDay(addDays(S.sel,-1));break;
    case "next":selectDay(addDays(S.sel,1));break;
    case "today":selectDay(todayStr());break;
    case "wPrev":selectDay(addDays(S.sel,-7));break;
    case "wNext":selectDay(addDays(S.sel,7));break;
    case "mPrev":S.month=addMonths(S.month,-1);renderCalendar();renderIncome();break;
    case "mNext":S.month=addMonths(S.month,1);renderCalendar();renderIncome();break;
    case "goNewCat":$("catsPanel").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});setTimeout(()=>$("ncName").focus({preventScroll:true}),300);break;
    case "ncAdd":{
      const name=$("ncName").value.trim();
      if(!name){showCatMsg(T("catNeedName"));return}
      if(S.cats.some(c=>catInfo(c.k).name.toLowerCase()===name.toLowerCase())){showCatMsg(T("catExists"));return}
      const k="c"+uid();S.cats=[...S.cats,{k,name,color:S.newColor,prod:$("ncProd").checked}];
      S.cat=k;$("ncName").value="";
      const nextCol=COLORS.find(col=>!S.cats.some(c=>c.color===col));if(nextCol)S.newColor=nextCol;
      render();saveSettings();showCatMsg(T("catAdded",{c:name}));break;}
    case "taskAdd":addTask();break;
    case "incAdd":addIncome();break;
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
      const raw=$("durIn").value;let min=raw.trim()?parseDur(raw):S.dur;
      if(min==null){showMsg(T("needDur"),true);return}
      if(!isFinite(min)||min<=0||min>1440){showMsg(T("badDur"),true);return}
      let start=$("startIn").value||null;
      if(!start&&S.sel===todayStr()){const n=new Date();const s=n.getHours()*60+n.getMinutes()-min;if(s>=0)start=fromMin(s)}
      const cn=catInfo(S.cat).name;
      await addEntry(S.cat,min,$("noteIn").value.trim(),S.sel,start);
      showMsg(T("added",{t:fmt(min),c:cn})+(start?T("addedAt",{s:start}):""));
      $("durIn").value="";$("noteIn").value="";$("startIn").value="";S.dur=null;render();break;}
    case "tStart":if(!S.cat)return;S.timer={cat:S.cat,start:Date.now()};render();saveSettings();break;
    case "tStop":{
      const tm=S.timer;if(!tm)return;const min=Math.round((Date.now()-tm.start)/60000);S.timer=null;const st=new Date(tm.start);
      if(min>=1){await addEntry(tm.cat,min,"",toStr(st),pad(st.getHours())+":"+pad(st.getMinutes()));showMsg(T("timerAdded",{t:fmt(min),c:catInfo(tm.cat).name}))}
      else showMsg(T("timerShort"));
      render();saveSettings();break;}
    case "tCancel":S.timer=null;render();saveSettings();break;
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
  if(ds.cprod){S.cats=S.cats.map(c=>c.k===ds.cprod?{...c,prod:e.target.checked}:c);render();saveSettings();return}
  if(ds.cname){const v=e.target.value.trim();S.cats=S.cats.map(c=>{if(c.k!==ds.cname)return c;const n={...c};if(v&&v!==T("cat_"+c.k))n.name=v;else delete n.name;return n});render();saveSettings();return}
});
$("taskIn").addEventListener("keydown",e=>{if(e.key==="Enter")addTask()});
["incAmt","incSrc"].forEach(id=>$(id).addEventListener("keydown",e=>{if(e.key==="Enter")addIncome()}));
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
$("durIn").addEventListener("input",()=>{if(S.dur!==null){S.dur=null;document.querySelectorAll("#durs button").forEach(x=>x.setAttribute("aria-pressed","false"))}});
["durIn","noteIn","startIn"].forEach(id=>$(id).addEventListener("keydown",e=>{if(e.key==="Enter")$("addBtn").click()}));
let goalT;
$("catlist").addEventListener("input",e=>{
  const k=e.target.dataset.goal;if(!k)return;const n=Math.max(0,+e.target.value||0);
  if(S.goalMode==="week")S.wgoals={...S.wgoals,[k]:Math.round(n*60)};else S.goals={...S.goals,[k]:Math.round(n)};
  render();clearTimeout(goalT);goalT=setTimeout(saveSettings,700);
});
document.addEventListener("keydown",e=>{
  if(e.target.matches("input,textarea"))return;
  if(e.key==="ArrowLeft")selectDay(addDays(S.sel,-1));
  if(e.key==="ArrowRight")selectDay(addDays(S.sel,1));
});
window.addEventListener("pagehide",flushNote);
$("importIn").addEventListener("change",e=>{const f=e.target.files&&e.target.files[0];if(f)importBackup(f);e.target.value=""});
let smT;
$("streakMin").addEventListener("input",e=>{const n=Math.round(+e.target.value);if(!(n>0))return;S.streakMin=n;renderStreak();clearTimeout(smT);smT=setTimeout(saveSettings,700)});

boot();
})();
