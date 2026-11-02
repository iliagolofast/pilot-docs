---
title: "Довідник конфігурацій"
---

У цій статті розглянемо доступні конфігурації в системі та їх призначення. 

**Додавання нових дозволених автомобілів у сповіщення**

Щоб нові дозволені автомобілі автоматично додавалися у сповіщення, необхідно встановити цю конфігурацію в особистому кабінеті. Ця функція призначена для мапінгових об’єктів

(тобто для об’єктів з інших договорів).

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація </span><span><strong>Confirm adding vehicles to notifications</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom.png)

**Налаштування приховування інформації про прилад**

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація&nbsp; <strong>hide_device</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_2.png)

**Безкоштовний період для Партнера**

Призначено для тестового періоду системи.

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація&nbsp; </span><span><strong>Partner Grace Period (days)</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_3.png)

**Додавання стовпця "Адреса" в дерево об’єктів**

Щоб відобразити адресу на вкладці онлайн, слід додати таку конфігурацію в налаштування договору.

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація =&nbsp; </span><strong>Address in Online Tree</strong></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_4.png)

**Блокування партнера за від’ємного балансу після закінчення 5 днів**

За умови, що у партнера тип рахунку — передоплата, а баланс менший або дорівнює нулю (з урахуванням депозиту).

Якщо партнер перебуває в системі, то протягом 5 днів кожні 3 години в панелі адміністратора з’являтиметься діалогове вікно з попередженням.

**![](images/drex_spravochnik_konfiguratsij_custom_5.png)**

На 5-й день, якщо партнер перебуває в системі, відбудеться автоматичне завершення сеансу та перенесення партнера на сторінку логіну.

Партнер не зможе зайти в панель адміністратора.

![](images/drex_spravochnik_konfiguratsij_custom_6.png)

Вікно додати сповіщення.

Після поповнення балансу партнер входить у систему.

![](images/drex_spravochnik_konfiguratsij_custom_7.png)

 **Один водій**

Прив’язати лише одного водія до об’єкта під час створення нового водія або під час оновлення старого.

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація <strong>single_driver = true </strong>для облікового запису.</span></div></td></tr></tbody></table>

Коли ми створюємо водія або оновлюємо старий запис і пов’язуємо водія з транспортним засобом, або якщо в цього конкретного транспортного засобу вже є пов’язаний водій, система спочатку автоматично скасовує зв’язок з попереднім водієм, а потім пов’язує нового водія.

![](images/drex_spravochnik_konfiguratsij_custom_8.png)

**Відображення відеотрансляції в новій вкладці**

Щоб відобразити відеотрансляцію в новій вкладці, необхідно внести конфіг у договір зі значенням true, у налаштування модуля.

Щоб конфігурація стала неактивною, необхідно прописати false.

-   Активуйте модуль CMS.
    
-   Перейдіть на вкладку налаштування модуля.
    
-   Додайте запис **open\_in\_new\_tab**
    

![](images/drex_spravochnik_konfiguratsij_custom_9.png)

Під час натискання на значок камери в інтерфейсі користувача відкривається трансляція в новій вкладці за посиланням.

Натиснувши на значок камери та вибравши період дат, з’явиться історія запису з камер спостереження.

![](images/drex_spravochnik_konfiguratsij_custom_10.png)

**Ребрендинг для двофакторної автентифікації TOTP**

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація&nbsp; </span><span><strong>TOTP Label = name</strong></span></div></td></tr></tbody></table>

Призначений для зміни назви компанії в іконці, коли клієнту приходять коди для входу в обліковий запис.

![](images/drex_spravochnik_konfiguratsij_custom_11.png)

![](images/drex_spravochnik_konfiguratsij_custom_12.png)

**Видимість усіх тарифів**

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація&nbsp; </span><span><strong>Only private prices = 1</strong></span></div></td></tr></tbody></table>

 Тарифи можна приховати за допомогою конфігурації в налаштуваннях Партнера.

![](images/drex_spravochnik_konfiguratsij_custom_13.png)

Конфігурація для цього вікна, видимість у налаштуваннях договору.

![](images/drex_spravochnik_konfiguratsij_custom_14.png)

**Модуль Аналітики (Панель) - стартова вкладка.**

Конфігурація призначена для відображення Панелі Аналітики під час стартового завантаження інтерфейсу.

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація&nbsp; </span><span><strong>Main Tab = dashboard</strong></span></div></td></tr></tbody></table>

**![](images/drex_spravochnik_konfiguratsij_custom_15.png)**

Вкладка в Користувацькому інтерфейсі відображається як стартова.

**![](images/drex_spravochnik_konfiguratsij_custom_16.png)**

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація = <strong>additional_fields</strong> для модуля паливних карток в акаунті.</span></div><div>&nbsp;</div></td></tr></tbody></table>

За замовчуванням стовпці приховані, і користувач може їх відобразити на вкладці транзакції. Залежно від типу вашого паливного кабінету поля можуть бути різними для налаштування конфігурації.

![](images/drex_spravochnik_konfiguratsij_custom_17.png)

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація<strong> Low Ballance Emails</strong> = </span><a href="mailto:s@pilot-telematics.com,"><span>s@pilot-telematics.com</span></a><span> (можна вказати кілька адрес)</span></div></td></tr></tbody></table>

Конфігурація призначена для вибору акаунтів, за якими потрібно отримувати сповіщення про низький баланс. Вкажіть у налаштуваннях необхідні email-адреси для сповіщень.

![](images/drex_spravochnik_konfiguratsij_custom_18.png)

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація </span><span><strong>Maps</strong> =&nbsp;{"default": "Google Sat", "hidden":&nbsp;["OSM"]}</span></div></td></tr></tbody></table>

Конфігурація для договору або партнера дає змогу керувати видимістю карт і встановлювати карту за замовчуванням

(Яндекс, Google, OSM).

![](images/drex_spravochnik_konfiguratsij_custom_19.png)

![](images/drex_spravochnik_konfiguratsij_custom_20.png)

<table><tbody><tr><td><span></span></td><td><div><span>Конфігурація <strong>Link to manual&nbsp; = </strong></span><a href="https://doc.pilot-gps.ru"><span>https://doc.pilot-gps.ru</span></a></div></td></tr></tbody></table>

Конфігурація дає змогу користувачам завантажувати власні навчальні матеріали та посібники користувача в систему.

Завантажені документи будуть доступні для перегляду в будь-який час, що забезпечує зручний доступ до інструкцій із функцій Pilot.

Користувачі можуть легко знаходити потрібні матеріали та використовувати їх для отримання інформації та допомоги з різних аспектів роботи із системою.

![](images/drex_spravochnik_konfiguratsij_custom_21.png)

![](images/drex_spravochnik_konfiguratsij_custom_22.png)

<table><tbody><tr><td><span></span></td><td><div>Конфігурація <strong>Telegram bot</strong></div></td></tr></tbody></table>

Щоб додати швидкий перехід у Telegram-бот через особистий кабінет користувача, використовуйте конфігурацію Telegram bot.

 У полі значення вкажіть адресу бота, наприклад: @PilotGpsBot.

![](images/drex_spravochnik_konfiguratsij_custom_23.png)

Після збереження в особистому кабінеті користувача, у меню додаткових налаштувань, з’явиться окрема вкладка з посиланням для переходу в Telegram-бот.

![](images/drex_spravochnik_konfiguratsij_custom_24.png)
