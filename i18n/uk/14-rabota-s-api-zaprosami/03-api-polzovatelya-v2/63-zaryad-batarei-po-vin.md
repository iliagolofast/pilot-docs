---
title: "Заряд батареї за VIN"
---

Цей API отримує інформацію про стан заряду батареї транспортного засобу за VIN.

Працює лише для об’єктів, у яких:

-    заповнено поле VIN у [картці](../../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html) об’єкта
    
-   підключено датчик заряду батареї
    

<table><tbody><tr><td><span></span></td><td><div>У запиті можна вказати кілька VIN, тоді у відповіді повернеться інформація за всіма вказаними об’єктами.</div></td></tr></tbody></table>

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/VTB/api\_vtb.php

### Метод запиту

 POST

Робота з цим API складається з двох кроків:

1\. Авторизація — отримання токена для доступу до даних

2\. Запит даних — використання токена для отримання інформації про батарею за VIN

### 1\. Авторизація

Перш ніж запитувати дані, необхідно авторизуватися.

Тіло запиту:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "login": "ваш_логин",</div><div>&nbsp; "password": "ваш_пароль",</div><div>&nbsp; "cmd": "auth"</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповіді ви отримаєте токен — довгий унікальний рядок.

Цей токен потрібен для ідентифікації користувача під час наступних запитів. Без токена API не віддасть дані про батарею.

### 2\. Отримання даних датчика батареї

Після отримання токена можна запросити інформацію про батарею.

Параметри запиту

-   Number — список VIN транспортних засобів, інформацію про які ви хочете отримати.
    
-   DateFrom — дата й час початку періоду (у форматі ISO 8601).
    
-   DateTo — дата й час кінця періоду.
    
-   cmd=vehicle — команда API для запиту даних про транспортний засіб
    

Заголовки запиту:

-   Authorization: Bearer <token> — вказуємо токен, отриманий під час авторизації
    
-   Content-Type: application/json — вказуємо, що тіло запиту у форматі JSON
    

Тіло запиту:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "Number": ["VIN_объекта"],</div><div>&nbsp; "DateFrom": "2023-12-03T00:00:00",</div><div>&nbsp; "DateTo": "2023-12-12T00:00:00",</div><div>&nbsp; "cmd": "vehicle"</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "Number": "456789123",</div><div>&nbsp; &nbsp; "ApplicationNumber": null,</div><div>&nbsp; &nbsp; "CurrentStatus": "ACTIVE",</div><div>&nbsp; &nbsp; "CloseDateTime": "",</div><div>&nbsp; &nbsp; "LastSyncDate": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "AlarmDateTime": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "Latitude": "55.578352",</div><div>&nbsp; &nbsp; "Longitude": "38.125267",</div><div>&nbsp; &nbsp; "BatteryCharge": "полный заряд",</div><div>&nbsp; &nbsp; "LocationLinesID": "",</div><div>&nbsp; &nbsp; "FullAddress": "улица Гарнаева, Рынок, Жуковский, Московская область, Россия",</div><div>&nbsp; &nbsp; "Country": "Россия",</div><div>&nbsp; &nbsp; "Region": "Московская область",</div><div>&nbsp; &nbsp; "Town": "Жуковский",</div><div>&nbsp; &nbsp; "Street": "улица Гарнаева",</div><div>&nbsp; &nbsp; "House": null,</div><div>&nbsp; &nbsp; "numberRegion": 10</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   Number — VIN транспортного засобу
    
-   CurrentStatus — поточний статус об’єкта
    
-   LastSyncDate — дата останньої синхронізації
    
-   BatteryCharge — рівень заряду батареї
    
-   FullAddress, Country, Region, Town, Street — місцеположення об’єкта
    
-   Latitude, Longitude — координати об’єкта
