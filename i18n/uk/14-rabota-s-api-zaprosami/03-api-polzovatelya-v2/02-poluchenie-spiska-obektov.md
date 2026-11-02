---
title: "Отримання списку об’єктів"
---

Цей API передає інформацію про транспортні засоби, зокрема їхнє поточне місцеположення.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Параметри запиту

Для отримання даних необхідно виконати запит з авторизацією та зазначенням функції:

-   Username — логін користувача
    
-   Password — пароль
    
-   functionName=api\_objectlist — команда для отримання списку об’єктів
    
-   node — номер вузла, на якому потрібно виконати команду
    

Формат запитуваних даних — масив об’єктів транспортних засобів.

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectlist</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016703961657",</div><div>&nbsp;"PLATE": "6561",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 25.9131066,</div><div>&nbsp;"LONGITUDE": 46.4645949</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

У відповідь на API-запит повертається масив об’єктів транспортних засобів. Кожен об’єкт містить:

-   IMEI — ідентифікатор трекера, встановленого на транспортному засобі
    
-   PLATE — номер транспортного засобу
    
-   NAME — ім’я транспортного засобу
    
-   LATITUDE — поточна широта місцеположення об’єкта
    
-   LONGITUDE — поточна довгота місцеположення об’єкта
