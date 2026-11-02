---
title: "Керування контрактами оренди"
---

Цей API надає можливості для керування контрактами оренди транспортних засобів. За допомогою цього API можна виконувати запуск, оновлення, зупинення оренди, а також автентифікацію та генерацію токенів для авторизації.

## Авторизація

Щоб використовувати API, необхідно пройти автентифікацію за допомогою Bearer-токена.

### Отримання токена для авторизації

Перш ніж надсилати запити, необхідно отримати токен, згенерувавши його за допомогою логіна й пароля для панелі адміністратора.

### Приклад авторизації

Запит на генерацію токена:

<table><tbody><tr><td><span></span></td><td><div><span>curl --location --request GET 'https://</span>&lt;admin_address&gt;<span>/backend/app/contracts.php' \</span></div><div><span>--header 'Content-Type: application/json' \</span></div><div><span>--data-raw '{</span></div><div><span>&nbsp; &nbsp; "cmd": "generate_token",</span></div><div><span>&nbsp; &nbsp; "login": "YOUR_LOGIN_FOR_ADMIN_PANEL",</span></div><div><span>&nbsp; &nbsp; "password": "YOUR_PASSWORD_FOR_ADMIN_PANEL"</span></div><div><span>}'</span></div></td></tr></tbody></table>

Приклад відповіді:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "0",</div><div>&nbsp; &nbsp; "message": "007898667a1b5711682399ea38a84f61"</div><div>}</div></td></tr></tbody></table>

У відповіді ви отримаєте токен. Використовуйте його в заголовку Authorization для подальших запитів.

Приклад заголовка:

<table><tbody><tr><td><span></span></td><td><div>Authorization: Bearer 007898667a1b5711682399ea38a84f61</div></td></tr></tbody></table>

## Основні команди

Для виконання операцій потрібно вказати параметр cmd, який визначає, яку операцію ви хочете виконати.

-   generate\_token — отримати токен для авторизації
    
-   start — почати оренду автомобіля
    
-   update — оновити дані оренди
    
-   stop — зупинити оренду автомобіля
    

## Параметри запиту

Усі параметри передаються у форматі JSON

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Параметр</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Тип</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Обов’язковий</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Опис</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mva</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Числовий ідентифікатор орендованого транспортного засобу</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ra</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер договору оренди</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; plate_number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номерний знак автомобіля</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ім’я водія, який орендує ТЗ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_phone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Телефон водія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_passport</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Паспорт водія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_address</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Адреса водія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер водійського посвідчення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Термін дії посвідчення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_email</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Email водія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_birth_date</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Дата народження водія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_sex</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Стать (m або f)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_country</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Країна водія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Рейтинг водія</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Очікуваний час початку оренди (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Очікуваний час закінчення оренди (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Фактичний час початку оренди (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Фактичний час закінчення (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Місце початку оренди (з широтою, довготою або адресним рядком — lat, lon, address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; end_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Місце закінчення оренди (lat, lon або address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rate_code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код ставки оренди за договором</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; car_group_charged</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Група автомобіля</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; checkout_branch</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Відділення видачі</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mileage_limit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ліміт пробігу</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>cid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ідентифікатор клієнта, водія, який орендує транспортний засіб</span></div></td></tr></tbody></table>

## Приклади запитів

### Запуск оренди

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Content-Type: application/json' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "start",</div><div>&nbsp; &nbsp; "mva": 111,</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "ts_expected": 1644927600,</div><div>&nbsp; &nbsp; "te_expected": 1644981600,</div><div>&nbsp; &nbsp; "start_location": { "lat": 40.712776, "lon": -74.005974 },</div><div>&nbsp; &nbsp; "car_group_charged": "Economy"</div><div>}'</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1233",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

У відповідь повертається:

code — код відповіді

odo — значення одометра

message — текстове повідомлення про результат запиту

### Оновлення оренди

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "update",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "mileage_limit": 2000</div><div>}'</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Зупинення оренди

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer YOUR_TOKEN' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "stop",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "driver_rating": 4,</div><div>&nbsp; &nbsp; "end_location": {"address": "Ilino 2c"}</div><div>}'</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Коди відповіді та помилок

0 — операція успішна

1 — автомобіль не знайдено

2 — немає змін для оновлення

3 — договір оренди не знайдено

4 — помилка автентифікації

5 — невідома помилка

6 — немає прав для виконання операції

7 — модуль контрактів не активний

8 — цей номер договору оренди вже використовується іншим обліковим записом

9 — автомобіль орендовано іншим обліковим записом

10 — автомобіль не орендовано

11 — некоректний запит

12 — неправильний параметр місцеположення

13 — цей номер договору оренди використовується іншим агентом

14 — паспорт було передано, але не вказано ім’я водія

15 — ім’я водія було передано, але не вказано паспорт

16 — водія не знайдено за наданими даними

17 — дані водія не збігаються з раніше збереженими

18 — договір оренди з цим номером не знайдено

19 — цей договір оренди вже завершено

20 — автомобіль уже орендовано

21 — водія вказано неправильно

22 — наявний договір було закрито, створено новий

500 — внутрішня помилка сервера
