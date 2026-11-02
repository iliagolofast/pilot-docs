---
title: "Як прив’язати алгоритм до сповіщення"
---

У цій статті розповімо, як налаштувати роботу алгоритмів через сповіщення.

Ви дізнаєтеся:

— [як прив’язати алгоритм до сповіщення, щоб він автоматично спрацьовував під час настання подій](kak-privyazat-algoritm-k-uvedomleniyu.html#автоматическое_срабатывание_алгоритма)

— [як створити сповіщення з алгоритмом для ручного генерування подій](kak-privyazat-algoritm-k-uvedomleniyu.html#ручная_генерация_события)

Щоб алгоритм почав працювати та реагувати на події, його потрібно прив’язати до сповіщення.

<table><tbody><tr><td><span></span></td><td><div>Для роботи прив’язки в договорі має бути підключено модуль <a href="../uvedomleniya/index.html"><span>«Сповіщення»</span></a>.</div></td></tr></tbody></table>

## Прив’язка алгоритму до події

Такий алгоритм автоматично спрацьовуватиме під час виконання умов і надходитиме до «Ситуаційного центру».

1\. На верхній панелі натисніть іконку ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom.png)і відкрийте «Налаштування договору». Перейдіть на вкладку «Сповіщення».

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. Натисніть «Додати» ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png), щоб створити нове сповіщення

3\. Прив’яжіть алгоритм

1) У вікні налаштувань сповіщення натисніть «Прив’язка алгоритму»

![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen.png)

2) У списку виберіть потрібний алгоритм

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

3) Клацніть на алгоритмі — відкриється його схема з блоками

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_5.png)

4\. Налаштуйте блоки алгоритму

1) Двічі клацніть на потрібному блоці

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2) Заповніть текст і виберіть теги подій

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_7.png)

3) Натисніть «ОК»

### Як створити тег для блока

Теги допомагають швидко зрозуміти суть події та візуально виділити її в списку.

Якщо потрібного тега немає:

1\. У полі «Тег» натисніть ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2\. У вікні тегів натисніть ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png), щоб додати новий тег до списку

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_8.png)

3\. Вкажіть назву тега й виберіть колір

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_9.png)

4\. Збережіть — тег з’явиться у списку та стане доступним для вибору

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_10.png)

### Налаштування блока Webhook

Блок Webhook передає відомості про подію з PILOT до зовнішньої системи, наприклад до CRM, диспетчерської системи або корпоративного застосунку. Запит надсилається, коли виконання алгоритму доходить до цього блока. Докладніше про принцип роботи та налаштування Webhook-сповіщень читайте [у цій статті](../uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html).

Якщо в алгоритмі використовується блок Webhook:

1\. Виберіть блок Webhook на схемі

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_11.png)

2\. Двічі клацніть на ньому — відкриються його налаштування

3\. Натисніть значок редагування поруч із назвою блока ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_12.png)

![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_2.png)

4\. Заповніть параметри у вікні Webhook Details

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_13.png)

**URL**

Вкажіть адресу зовнішньої системи, на яку PILOT має надіслати дані. Адресу необхідно отримати в адміністратора або розробника приймальної системи.

**Header (Заголовок)**

Вкажіть заголовки запиту. За замовчуванням використовується передавання даних у форматі JSON:

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; "ContentType: application/json"</div><div>]</div></td></tr></tbody></table>

Змінюйте заголовки лише в тому разі, якщо приймальна система вимагає інший формат даних або додаткові параметри.

**Body (Тіло запиту)**

Вкажіть дані, які потрібно передати. За замовчуванням використовується такий шаблон:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "agent_id": "%AGENTID%",</div><div>&nbsp; "vehiclenumber": "%VEHNUM%",</div><div>&nbsp; "ts": "%TS%",</div><div>&nbsp; "lat": "%LAT%",</div><div>&nbsp; "lon": "%LON%",</div><div>&nbsp; "speed": "%SPEED%",</div><div>&nbsp; "data": "%DATA%",</div><div>&nbsp; "zone": "%ZONE%",</div><div>&nbsp; "driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

Замість змінних, узятих у знаки %, система автоматично підставляє відомості з події. Наприклад, замість %SPEED% буде передано швидкість об’єкта, а замість %VEHNUM% — номер транспортного засобу.

Тіло запиту можна змінити: видалити непотрібні поля, додати власні поля або використати інші доступні змінні.

Зберігайте коректний формат JSON:

"назва\_поля": "%ЗМІННА%"

Якщо структура JSON або запис змінної містить помилку, зовнішня система може не отримати або не опрацювати запит.

**Допустимі змінні**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Змінна</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Що передає</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID акаунта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID об’єкта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер машини</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Мітка часу (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дата й час</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Довгота</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Швидкість</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробіг (за датчиком)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дані сповіщення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Геозона</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID першої геозони</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Назва першої геозони</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Водій</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимальна швидкість (для сповіщень про перевищення)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тривалість перевищення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Встановлений ліміт швидкості (Контроль швидкості)</span></div></td></tr></tbody></table>

Набір доступних змінних може залежати від типу сповіщення. Наприклад, змінні %MAXSPEED%, %DUR% і %SPEEDLIMIT% призначені для сповіщень про перевищення швидкості.

Після заповнення параметрів натисніть «Зберегти», потім підтвердьте налаштування блока кнопкою «ОК». Якщо в різних гілках алгоритму використовуються різні блоки Webhook, налаштуйте кожен із них окремо.

### Налаштування вікна обробки події

Ви можете налаштувати, як виглядатиме [вікно обробки події](kak-obrabotat-sobytie.html#Окно_«Обработка_события») для оператора:

-   У вікні прив’язки алгоритму натисніть «Налаштування»
    

![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_3.png)

2\. Натисніть ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png), щоб додати елементи:

![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_4.png)  
Що можна налаштувати:

-   Тип елемента — вид блока (наприклад, plaintext — звичайний текст)
    
-   Заголовок — назва блока
    
-   Текст — інформація для оператора
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_14.png)

Наприклад:

1\. Додайте рядок типу plaintext

2\. У полі «Заголовок» напишіть, що це за блок (наприклад: «Інформація щодо події»)

3\. У полі «Текст» додайте інформацію, яку оператор має побачити (наприклад: «Перевірте температуру в кузові та зв’яжіться з водієм»).

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_15.png)

Щоб додати розділ з інформацією про транспортний засіб, натисніть на іконку автомобіля. З’явиться новий блок із типом vehicle, у якому можна налаштувати заголовок і текст.

![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_5.png)

1 — Додати інформацію про ТЗ. Щоб додати розділ із даними про водія, натисніть на іконку водійського посвідчення. З’явиться новий блок із типом driver. У цьому блоці можна задати заголовок і текст.

2 — Додати інформацію про водія

Після налаштування натисніть «ОК» — оператор бачитиме форму саме в такому вигляді під час обробки події.

## Завершення налаштування сповіщення

-   У вікні «Налаштування сповіщень» вкажіть:
    
-   Назву сповіщення
    
-   Об’єкт
    
-   Тип сповіщення — Control room (GARM)
    

-   [Групу](kak-nastroit-parametry-sobytij.html#группы_событий)
    
-   Умови сповіщення (наприклад, параметр «Температура» та його поріг)
    

**![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_6.png)**

2\. Натисніть «Зберегти»

**![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_16.png)**

3\. Сповіщення з прив’язаним алгоритмом з’явиться у списку та надходитиме до «Ситуаційного центру», коли умови виконуються

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_17.png)

## Алгоритм для ручного генерування події

Ручне генерування потрібне, коли подія не надходить автоматично — наприклад, для позаштатних ситуацій, тестування або фіксації події оператором уручну.

### Як створити сповіщення для ручного генерування

1\. Відкрийте  [«Налаштування договору»](../../nastrojki-dogovora-2/index.html) і виберіть вкладку «Сповіщення»

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. На вкладці «Сповіщення» натисніть ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

3\. У налаштуваннях сповіщення вкажіть:

![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_7.png)

1 — Тип сповіщення «Ситуаційний центр» (GARM)

2 — Сповіщення лише для ручного генерування

-   Об’єкт
    
-   Назву сповіщення
    
-   Тип сповіщення — Ситуаційний центр (GARM)
    
-   Групу
    
-   Галочку «Лише для ручного генерування»
    
    4\. Натисніть «Прив’язка алгоритму»
    
    5\. У вікні алгоритмів, що відкрилося, виберіть той, який хочете прив’язати до сповіщення, і натисніть «ОК»
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

5\. Збережіть сповіщення

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_18.png)

### Як згенерувати подію вручну

1\. Виберіть об’єкт в основному списку

2\. Клацніть на ньому правою кнопкою миші та виберіть «Згенерувати подію»

![Як прив’язати алгоритм до сповіщення](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_8.png)

3\. Виберіть тип сповіщення для ручного генерування та введіть текст події

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_19.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_20.png)

4\. Подія з’явиться на [панелі](kak-obrabotat-sobytie.html#Панель_Control_room) «Ситуаційний центр» і буде оброблена за алгоритмом
