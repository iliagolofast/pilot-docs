---
title: "Інформація про об’єкт"
---

Цей API передає докладну інформацію про конкретний транспортний засіб.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Параметри запиту

Для отримання даних необхідно виконати запит з авторизацією та зазначенням функції й об’єкта:

-   Username — логін користувача
    
-   Password — пароль
    
-   functionName=api\_objectdetails — команда для отримання деталей об’єкта
    
-   parameters — IMEI об’єкта, за яким запитуються деталі
    
-   node — номер вузла, на якому потрібно виконати команду
    

Формат запитуваних даних — один об’єкт транспортного засобу

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectdetails</div><div>parameters=352217706092097</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209 ",</div><div>&nbsp;"INSTALLATIONDATE": "Dec 06, 2023",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається об’єкт з інформацією про транспортний засіб:

-   IMEI — ідентифікатор трекера, встановленого на транспортному засобі
    
-   PLATE —  номер транспортного засобу
    
-   INSTALLATIONDATE — дата встановлення трекера на транспортний засіб
    
-   NAME — ім’я транспортного засобу
    
-   LATITUDE — поточна широта місцеположення об’єкта
    
-   LONGITUDE — поточна довгота місцеположення об’єкта
