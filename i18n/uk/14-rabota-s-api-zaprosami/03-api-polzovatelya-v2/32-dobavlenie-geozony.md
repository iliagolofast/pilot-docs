---
title: "Додавання геозони"
---

Цей API створює нову геозону, указавши її назву, тип, колір, групу та геометрію.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=geofenceadd — команда для додавання геозони
    
-   zonename — назва геозони
    
-   zonetype — тип зони (1 — багатокутник, 2 — коло)
    
-   color — колір зони у форматі HEX (наприклад, #FFFFFF)
    
-   info — текстова інформація про геозону
    
-   group\_name — назва групи геозон (створюється, якщо не існує, необов’язково)
    
-   group\_id — ID наявної групи (якщо вказано, group\_name ігнорується, необов’язково)
    
-   geometry — GEOJson з описом багатокутника або кола
    
-   external\_id — зовнішній ідентифікатор геозони (необов’язково)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

Полігон:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=1&amp;zonename=test_api_polygon&amp;external_id=12354&amp;info=blabla&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Polygon","coordinates":[[[55.184334,25.112866],[55.183512,25.113472],[55.182154,25.112516],[55.183511,25.111016],[55.184923,25.112133]]]}&amp;node=1</div></td></tr></tbody></table>

Коло:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=2&amp;zonename=test_api_circle&amp;external_id=12345&amp;info=circle_info&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Circle","coordinates":[55.184334,25.112866],"radius":150}&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": 158412,</div><div>&nbsp; &nbsp; "zonename": "test_api_polygon",</div><div>&nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; "external_id": "12354",</div><div>&nbsp; &nbsp; "created_at": 1610536445,</div><div>&nbsp; &nbsp; "updated_at": 1610536445,</div><div>&nbsp; &nbsp; "color": "#FF3300",</div><div>&nbsp; &nbsp; "info": "blabla",</div><div>&nbsp; &nbsp; "group_id": 6984</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповіді на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера
    
-   data — об’єкт з інформацією про створену геозону:
    
-   id — ідентифікатор геозони
    
-   zonename — назва геозони
    
-   zonetype — тип зони (1 — багатокутник, 2 — коло)
    
-   external\_id — зовнішній ідентифікатор
    
-   created\_at — час створення (Unix timestamp)
    
-   updated\_at — час оновлення (Unix timestamp)
    
-   color — колір геозони
    
-   info — текстова інформація
    
-   group\_id— ідентифікатор групи геозон
