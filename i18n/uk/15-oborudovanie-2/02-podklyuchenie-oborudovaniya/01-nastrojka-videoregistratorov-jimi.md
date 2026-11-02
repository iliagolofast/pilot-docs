---
title: "Налаштування відеореєстраторів Jimi"
---

Відеореєстратори Jimi налаштовуються за допомогою текстових команд. Ви просто надсилаєте пристрою потрібну команду — і він починає працювати так, як потрібно вам.

За допомогою цих команд можна:

— підключити реєстратор до сервера

— вказати, куди надсилати відео та дані про поїздки

— увімкнути онлайн-трансляцію

— налаштувати автоматичне завантаження відео за певних подій

У цій статті ми розглянемо команди, які допоможуть вам запустити та правильно налаштувати пристрій.

## Основні команди налаштування

### 1\. Дозвіл підключення до сервера

<table><tbody><tr><td><span></span></td><td><div>COREKITSW,0</div></td></tr></tbody></table>

Ця команда дає змогу відеореєстратору підключатися до відеосервера PILOT. Тобто команда активує можливість роботи пристрою з платформою.

### 2\. Налаштування сервера для телеметрії

<table><tbody><tr><td><span></span></td><td><div>SERVER,1,&lt;доменное имя&gt;,20056</div><div>или</div><div>SERVER,0,&lt;IP-адрес&gt;,20056</div></td></tr></tbody></table>

Тут вказуємо сервер, на який надсилатиметься телеметрія (дані про рух, швидкість, події).

-   1 — якщо використовуєте доменне ім’я (наприклад: server.example.com)
    
-   0 — якщо підключаєтеся за IP-адресою (наприклад: 192.168.1.100)
    
-   20056— порт для зв’язку
    

### 3\. Налаштування сервера для завантаження відео

<table><tbody><tr><td><span></span></td><td><div>UPLOAD,&lt;https://server_address/upload&gt;</div></td></tr></tbody></table>

Адреса сервера, куди надсилатимуться відеофайли, наприклад, під час відтворення або завантаження подій.

### 4\. Налаштування сервера для онлайн-трансляції

<table><tbody><tr><td><span></span></td><td><div>RSERVICE,&lt;rtmp://server_address/live&gt;</div></td></tr></tbody></table>

За допомогою цієї команди задається RTMP-сервер для прямої трансляції відео в реальному часі.

### 5\. Налаштування сервера для списку файлів

<table><tbody><tr><td><span></span></td><td><div>FILELIST,&lt;https://server_address/filelist&gt;</div></td></tr></tbody></table>

Адреса, куди реєстратор надсилає список доступних відеозаписів.

### 6\. Автоматичне завантаження відео подій

<table><tbody><tr><td><span></span></td><td><div>UPLOADSW,&lt;A&gt;,&lt;B&gt;</div></td></tr></tbody></table>

За допомогою цієї команди можна вказати, які саме події мають викликати автоматичне завантаження відеороликів і які камери при цьому використовувати.

-   A — подія, під час якої завантажуватиметься відео. Наприклад: CRASH (аварія), SOS (тривожна кнопка), OVERSPEED (перевищення швидкості).
    
-   B — спосіб завантаження:
    

— OFF — вимкнути автоматичне завантаження

— ON — завантажувати відео з обох камер (фронтальної та внутрішньої)

— 1 — завантажувати лише відео з фронтальної камери

— 2 — завантажувати лише відео з внутрішньої камери

Наприклад: UPLOADSW,CRASH,ON — під час спрацювання події «Аварія» реєстратор автоматично завантажить відео з обох камер.

## Список подій

Нижче наведено таблицю, де зібрано всі події, які може розпізнати реєстратор. Їх можна використовувати в команді UPLOADSW.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; №</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Код події</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Що означає</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Натискання SOS-кнопки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CRASH</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Аварія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VIBRATE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Вібрація / удар</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OVERSPEED</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перевищення швидкості</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDACC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Різкий розгін</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 6</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDDEC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Різке гальмування</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDTURN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Різкий поворот</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 8</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DRIVE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Режим руху</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 9</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; POWER</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Зміна живлення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VOLTAGELOW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Низька напруга</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 11</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CLOSEEYES</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Втома / заплющені очі</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 12</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; YAWN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Позіхання, ознака втоми</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 13</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DISTRACTION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Водій відволікся</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 14</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SMOKING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Куріння за кермом</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 15</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; PHONECALLING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Використання телефону</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 16</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYOFF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Реле вимкнено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 17</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYRECOVERY</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Реле відновлено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 18</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; MISSINGFACE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обличчя не виявлено</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 19</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; NOSDCARD</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Немає SD-картки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SDCARDMOUNT</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Встановлено SD-картку</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 21</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OIL</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Подія датчика масла</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 22</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OILTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Помилка за маслом</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 23</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TEMPTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Перегрів двигуна</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 24</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Помилка за UART</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 25</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; LANEDEPARTURE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Виїзд зі смуги</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 26</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VEHICLETOOCLOSE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Інший ТЗ занадто близько</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 27</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; FORWARDCOLLISION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ризик зіткнення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 28</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART_DOOR</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Датчик дверей</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 29</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Визначення обличчя (AI)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Помилка розпізнавання обличчя</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 31</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Визначення ременя безпеки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 32</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ANWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ремінь не пристебнуто</span></div></td></tr></tbody></table>
