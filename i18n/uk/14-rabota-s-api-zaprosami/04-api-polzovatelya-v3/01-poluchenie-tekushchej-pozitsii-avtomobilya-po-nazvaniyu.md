---
title: "Отримання поточної позиції автомобіля за назвою"
---

Метод повертає останню збережену позицію автомобіля. Автомобіль визначається за його точною назвою в PILOT.

Метод призначений для інтеграції із системами відстеження перевезень, зокрема WIMT. На відміну від методів, що використовують IMEI, у запиті передається назва автомобіля — truckNo.

Інтерактивний опис методу доступний у [Swagger — Track and Trace](https://pilot-swagger.pilot-gps.com/#/Vehicles/getVehicleTrackAndTrace)

## Як отримати дані

### Метод

POST

### Адреса запиту

https://<server\_address>/api/v3/vehicles/track-and-trace

Замініть <server\_address> адресою сервера PILOT.

### Авторизація

Для виконання запиту використовується стандартна авторизація API V3 за допомогою Bearer token.

Передайте токен у заголовку Authorization:

Authorization: Bearer <access\_token>

Замініть <access\_token> чинним токеном API V3.

### Заголовки запиту

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Заголовок</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Обов’язковий</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Authorization</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Bearer token для авторизації користувача в API V3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; X-Node</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер вузла користувача. Використовується для перенаправлення запиту на потрібний сервер</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Content-Type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Формат тіла запиту. Вкажіть application/json</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Accept</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ні</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Формат відповіді. Рекомендоване значення — application/json</span></div></td></tr></tbody></table>

Приклад заголовків:

Authorization: Bearer <access\_token>

X-Node: 3

Content-Type: application/json

Accept: application/json

## Параметри запиту

Параметри передаються в тілі запиту у форматі JSON.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Тип</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Обов’язковий</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; shipmentNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер вантажу або перевезення. Метод приймає значення, але не зберігає і не повертає його</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Назва автомобіля в PILOT. Має точно відповідати значенню vehiclenumber</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код країни, наприклад ZA. У відповіді повертається без змін</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; trackingFlag</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Так</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Стан відстеження, наприклад START або STOP. У поточній версії значення приймається, але не зберігається і не впливає на обробку запиту</span></div></td></tr></tbody></table>

## Пошук автомобіля

Метод шукає автомобіль за точним значенням truckNo серед автомобілів, доступних авторизованому користувачу.

Передане значення має повністю збігатися з назвою автомобіля — vehiclenumber — у PILOT. Враховуйте регістр символів, пробіли та спеціальні символи.

Наприклад, якщо автомобіль називається KS51YPGP\_F, у запиті необхідно передати:

<table><tbody><tr><td><span></span></td><td><div>"truckNo": "KS51YPGP_F"</div></td></tr></tbody></table>

Якщо назва не збігається або в користувача немає доступу до автомобіля, метод не поверне його позицію.

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "trackingFlag": "START"</div><div>}</div></td></tr></tbody></table>

Приклад запиту cURL:

<table><tbody><tr><td><span></span></td><td><div>curl --request POST \</div><div>&nbsp; --url "https://&lt;server_address&gt;/api/v3/vehicles/track-and-trace" \</div><div>&nbsp; --header "Authorization: Bearer &lt;access_token&gt;" \</div><div>&nbsp; --header "X-Node: 3" \</div><div>&nbsp; --header "Content-Type: application/json" \</div><div>&nbsp; --header "Accept: application/json" \</div><div>&nbsp; --data '{</div><div>&nbsp; &nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; &nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; &nbsp; "countryID": "ZA",</div><div>&nbsp; &nbsp; "trackingFlag": "START"</div><div>&nbsp; }'</div></td></tr></tbody></table>

### Відповідь

Якщо запит виконано успішно, метод повертає останню збережену GPS-позицію автомобіля, адресу, часовий пояс і назву акаунта.

Поля успішної відповіді

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Поле</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Тип</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код виконання запиту. Значення 0 означає успішне виконання</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; msg</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Результат виконання запиту. У разі успішного виконання повертається OK</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; process_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час обробки запиту в секундах</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код країни, отриманий у запиті. Повертається без змін</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; timeZone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Часовий пояс у форматі IANA, наприклад Africa/Johannesburg</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Назва знайденого автомобіля в PILOT</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; latitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта останньої збереженої GPS-позиції</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; longitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Довгота останньої збереженої GPS-позиції</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Назва акаунта, якому належить автомобіль</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; streetName</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Адреса останньої позиції, отримана за допомогою зворотного геокодування</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lastRecordedOn</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Час реєстрації останньої GPS-позиції у форматі Unix timestamp</span></div></td></tr></tbody></table>

Поля shipmentNo, trackingFlag і trackLink у відповіді не повертаються.

### Приклад успішної відповіді

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "process_time": 0.001,</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "timeZone": "Africa/Johannesburg",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "latitude": -26.2041,</div><div>&nbsp; "longitude": 28.0473,</div><div>&nbsp; "source": "Example Fleet",</div><div>&nbsp; "streetName": "Main Road, Johannesburg",</div><div>&nbsp; "lastRecordedOn": 1785142800</div><div>}</div></td></tr></tbody></table>

## Формати часу

### Часовий пояс

Поле timeZone містить ідентифікатор часового поясу з бази IANA:

<table><tbody><tr><td><span></span></td><td><div>"timeZone": "Africa/Johannesburg"</div></td></tr></tbody></table>

Ідентифікатор IANA визначає регіональний часовий пояс і дає змогу коректно враховувати його правила.

Фіксований зсув, наприклад UTC+02:00, метод не повертає.

### Час останньої позиції

Поле lastRecordedOn містить час останньої GPS-позиції у форматі Unix timestamp:

<table><tbody><tr><td><span></span></td><td><div>"lastRecordedOn": 1785142800</div></td></tr></tbody></table>

Unix timestamp містить кількість секунд, що минули з 1 січня 1970 року, 00:00:00 UTC. Значення не залежить від часового поясу.

Щоб відобразити дату й час користувачеві, перетворіть lastRecordedOn з урахуванням значення timeZone.

### Визначення адреси

Поле streetName формується за допомогою зворотного геокодування: PILOT перетворює координати останньої позиції на текстову адресу.

<table><tbody><tr><td><span></span></td><td><div>"streetName": "Main Road, Johannesburg"</div></td></tr></tbody></table>

Повнота й точність адреси залежать від доступних картографічних даних.
