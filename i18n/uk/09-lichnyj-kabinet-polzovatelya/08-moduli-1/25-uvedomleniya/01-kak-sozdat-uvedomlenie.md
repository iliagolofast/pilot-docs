---
title: "Як створити сповіщення"
---

Після активації модуля «Сповіщення» в налаштуваннях договору з’являється нова вкладка «Сповіщення».

Через цю вкладку можна налаштувати події, за яких система надсилатиме сповіщення користувачам.

<table><tbody><tr><td><div>1. Перейдіть у <a href="../../nastrojki-dogovora-2/index.html" target="_blank"><span>«Налаштування договору»</span></a><span> і в</span>ідкрийте вкладку «Сповіщення</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Як створити сповіщення](images/drex_kak_sozdat_uvedomlenie_screen.png)

<table><tbody><tr><td><div>2. Натисніть кнопку <img alt="" src="images/drex_kak_sozdat_uvedomlenie_custom.png"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

3\. Відкриється вікно для налаштування сповіщення

![Як створити сповіщення](images/drex_kak_sozdat_uvedomlenie_screen_2.png)

## Основні параметри сповіщення

<table><tbody><tr><td><div><strong>1. Шаблон</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Виберіть шаблон сповіщення, якщо хочете використати вже готові налаштування.

![](images/drex_kak_sozdat_uvedomlenie_custom_2.png)

Шаблон створюється після налаштування сповіщення — для цього заповніть усі параметри та натисніть [«Зберегти як шаблон»](kak-sozdat-uvedomlenie.html#Сохранить_как_шаблон). Після цього його можна буде використовувати повторно.

<table><tbody><tr><td><div><strong>2. Вибір за об’єктами або мітками</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Вкажіть, до яких об’єктів застосовуватиметься сповіщення:

-   За об’єктами — виберіть конкретні транспортні засоби або обладнання
    
-   За мітками (тегами) — використовуйте, якщо потрібно застосувати сповіщення одразу до групи об’єктів
    

![](images/drex_kak_sozdat_uvedomlenie_custom_3.png)

<table><tbody><tr><td><div><strong>3. Тип і назва</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Задайте назву сповіщення — вона допоможе швидко знайти його у списку та зрозуміти, за яку подію воно відповідає.

![](images/drex_kak_sozdat_uvedomlenie_custom_4.png)

Виберіть спосіб, яким ви хочете отримувати сповіщення:

-   SMS — повідомлення на телефон
    
-   Push — сповіщення в мобільному застосунку
    
-   Email — лист на електронну пошту
    
-   Alert — спливне [сповіщення в інтерфейсі](kak-prosmatrivat-uvedomleniya.html) системи
    
-   Control Room — подія відобразиться в [«Ситуаційному центрі»](../situatsionnyj-tsentr-2/kak-obrabotat-sobytie.html)
    
-   [Webhook](kak-rabotat-s-webhook-uvedomleniyami.html) — надсилання даних у зовнішній сервіс
    
-   Команда на пристрій — надсилання команди на трекер
    
-   Шаблон команди — надсилання на пристрій заздалегідь налаштованої [команди за шаблоном](../komandy-1.html)
    
-   Telegram — сповіщення через [Telegram-бот](../../../mobilnye-prilozheniya/telegram-bot/index.html)
    

<table><tbody><tr><td><span></span></td><td><div>Щоб отримувати сповіщення по Email, заздалегідь <a href="kak-nastroit-poluchenie-uvedomlenij.html" target="_blank"><span>підтвердьте</span></a> адресу електронної пошти в особистих налаштуваннях.</div></td></tr></tbody></table>

За потреби можна задати альтернативний текст повідомлення — він надсилатиметься під час спрацювання сповіщення.

Якщо у вас підключено модуль «Ситуаційний центр» (Control Room), стане доступною кнопка [«Прив’язка алгоритму»](../situatsionnyj-tsentr-2/kak-privyazat-algoritm-k-uvedomleniyu.html). За її допомогою можна налаштувати автоматичні сценарії обробки подій — наприклад, задати послідовність дій, яка виконуватиметься під час настання певної події.

<table><tbody><tr><td><div><strong>4. Час сповіщення</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

У блоці «Час сповіщення» можна задати умови, за яких працюватиме сповіщення:

— вибрати часовий пояс

— вказати дні тижня

— задати часові інтервали

![](images/drex_kak_sozdat_uvedomlenie_custom_5.png)

<table><tbody><tr><td><div><strong>5. Додаткова інформація</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Позначте потрібні параметри — вони будуть додані до тексту сповіщення:

— швидкість руху

— водій об’єкта

— геозона, в якій перебуває об’єкт (за підключеного модуля [«Геозони»](../geozony-2/index.html))

— прив’язка до карти (Google)

— пряме посилання на подію

— адреса події

Пряме посилання на подію відкриває об’єкт просто на карті зі сповіщення. Після переходу ви побачите поточне положення об’єкта та його основні параметри.

![](images/drex_kak_sozdat_uvedomlenie_custom_6.png)

Посилання діє обмежений час, після чого стає недоступним.

![](images/drex_kak_sozdat_uvedomlenie_custom_7.png)

<table><tbody><tr><td><div><strong>6. Типи та умови сповіщень</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Під час створення сповіщення виберіть, за якої події воно має спрацьовувати.

![](images/drex_kak_sozdat_uvedomlenie_custom_8.png)

 Наприклад:

— перевищення швидкості

— спрацювання датчиків

— стоянка або рух

— втрата зв’язку

— інші події системи

Для кожного типу сповіщення задаються свої умови спрацювання. Наприклад:

— поріг швидкості

— тривалість події

Докладніше про типи та умови сповіщень — читайте в окремій [статті](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html).

<table><tbody><tr><td><div><strong>7. Параметри геозон</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Це налаштування доступне, якщо підключено модуль&nbsp;<a href="../geozony-2/index.html"><span>«Геозони»</span></a>.</div></td></tr></tbody></table>

У налаштуваннях сповіщення ви можете вказати, в яких геозонах має спрацьовувати сповіщення.

![](images/drex_kak_sozdat_uvedomlenie_custom_9.png)

Для цього виберіть одну або кілька геозон зі списку або позначте одразу всі за допомогою кнопки ![](images/drex_kak_sozdat_uvedomlenie_custom_10.png).

Потім виберіть, де саме має спрацьовувати сповіщення:

-   Скрізь — сповіщення надходитиме незалежно від того, де перебуває об’єкт
    
-   У вибраних зонах — сповіщення надходитиме, лише якщо об’єкт перебуває всередині позначених геозон
    
-   Поза вибраними зонами — сповіщення надходитиме, лише якщо об’єкт перебуває за межами позначених геозон
    

<table><tbody><tr><td><div>Після налаштування всіх параметрів сповіщення натисніть «Зберегти».</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Як створити сповіщення](images/drex_kak_sozdat_uvedomlenie_screen_3.png)

<table><tbody><tr><td><div>Якщо ви хочете зберегти налаштоване сповіщення як шаблон, щоб потім використовувати його як шаблон під час налаштування нового сповіщення, натисніть «Зберегти як шаблон».</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>Якщо увімкнути параметр «Для всіх користувачів», сповіщення надсилатиметься всім користувачам акаунта.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Усі створені сповіщення відображаються на вкладці «Сповіщення» в «Налаштуваннях договору». Як працювати з цією вкладкою, читайте в статті [«Як працювати зі списком сповіщень»](kak-rabotat-so-spiskom-uvedomlenij.html).

![](images/drex_kak_sozdat_uvedomlenie_custom_11.png)

<table><tbody><tr><td><span></span></td><td><div>Подивіться <a href="https://youtu.be/O4y0YhNp6b4"><span>приклад налаштування сповіщень</span></a> у короткому відео на YouTube:</div><div><div><a href="https://youtu.be/O4y0YhNp6b4" title="560_315">https://youtu.be/O4y0YhNp6b4</a></div></div></td></tr></tbody></table>
