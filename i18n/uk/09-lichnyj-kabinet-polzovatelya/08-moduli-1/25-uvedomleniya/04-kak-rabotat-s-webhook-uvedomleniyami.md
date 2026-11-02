---
title: "Як працювати з Webhook-сповіщеннями"
---

Webhook — це спосіб автоматичної передачі даних  про події із системи до зовнішнього сервісу або на ваш сервер.

Наприклад, якщо транспорт перевищив швидкість, система сама надішле запит на вказану вами адресу та передасть інформацію про подію.

### Як працюють Webhook-сповіщення

1\. Ви вказуєте URL-адресу — куди надсилати дані

2\. Коли сповіщення спрацьовує, система надсилає POST-запит із JSON

3\. Ваш сервер приймає дані й обробляє їх так, як потрібно

Перед початком переконайтеся, що:

— URL-адреса коректна й доступна

— сервер відповідає кодом 200 (OK)

— якщо сервер не відповідає або повертає помилку, адреса тимчасово потрапить до чорного списку

## Як налаштувати Webhook

1\. Перейдіть до [створення](kak-sozdat-uvedomlenie.html) або редагування сповіщення

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom.png)

2\. У блоці «Тип і назва» виберіть спосіб надсилання Webhook

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_2.png)

3\. Щоб налаштувати Webhook-сповіщення, натисніть на поле редагування ![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_3.png)— відкриється вікно Webhook Details, де задаються параметри надсилання даних.

У вікні Webhook Details ви побачите три поля:

![Як працювати з Webhook-сповіщеннями ](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen.png)

<table><tbody><tr><td><div><strong>1. URL</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Вкажіть адресу, на яку надсилатимуться дані.

<table><tbody><tr><td><div><strong>2. Header (Заголовок)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Тут указується формат даних, що передаються. За замовчуванням уже стоїть потрібне значення:

<table><tbody><tr><td><span></span></td><td><div>["ContentType: application/json"]</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>3. Body (Тіло запиту)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Це дані, які надсилатимуться. За замовчуванням використовується такий шаблон:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": "%AGENTID%",</div><div>&nbsp;"vehiclenumber": "%VEHNUM%",</div><div>&nbsp;"ts": "%TS%",</div><div>&nbsp;"lat": "%LAT%",</div><div>&nbsp;"lon": "%LON%",</div><div>&nbsp;"speed": "%SPEED%",</div><div>&nbsp;"data": "%DATA%",</div><div>&nbsp;"zone": "%ZONE%",</div><div>&nbsp;"driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>4. Змінні для тіла запиту</strong></div><div>Ви можете змінювати або доповнювати тіло запиту, використовуючи&nbsp;допустимі змінні&nbsp;зі списку праворуч.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Дотримуйтеся формату запису —&nbsp;"value":&nbsp; "%VALUE%". Якщо синтаксис буде порушено, Webhook не працюватиме.</div></td></tr></tbody></table>

**Допустимі змінні**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Змінна</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Що передає</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID акаунта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID об’єкта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер машини</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Мітка часу (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дата й час</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Довгота</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Швидкість</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Пробіг (за датчиком)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дані сповіщення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Геозона</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID першої геозони</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Назва першої геозони</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Водій</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Максимальна швидкість (для сповіщень про перевищення)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тривалість перевищення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Установлений ліміт швидкості (Контроль швидкості)</span></div></td></tr></tbody></table>

### Як підставити значення датчика

Якщо потрібно передати дані конкретного датчика:

1\. Відкрийте вкладку [«Датчики»](../../datchiki-1/dobavlenie-datchika.html#как_добавить_датчик)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_4.png)

![Як працювати з Webhook-сповіщеннями ](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen_2.png)

2\. Скопіюйте точну назву датчика

3\. Поверніться до вікна налаштувань Webhook і в поле Body вставте змінну у форматі: %Назва датчика%. Наприклад, якщо датчик називається Fuel sensor status, напишіть %Fuel sensor status%.

### Як отримати сирі дані

Можна передавати дані безпосередньо від пристрою:

1\. Перейдіть на вкладку [«Точки»](../../obekty-1/menyu-obekta.html#сырые_точки)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_5.png)

2\. Знайдіть параметр у колонці «Необроблені дані»

3\. Вставте його в поле Body у вікні Webhook  у форматі %Ім’я параметра%. Наприклад, якщо параметр називається Valid, напишіть %Valid%.

## Приклад запиту

Коли сповіщення спрацює, на ваш сервер надійдуть дані приблизно в такому вигляді:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": 4328,</div><div>&nbsp;"ts": 1545254055,</div><div>&nbsp;"data": ["У286НМ 67", "Parkingdur", "2", "1", "мм"]</div><div>}</div></td></tr></tbody></table>

Набір даних залежить від того, які змінні ви вказали в тілі запиту та який тип сповіщення налаштовано.
