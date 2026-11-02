---
title: "Отримання останньої події транспортного засобу"
---

API призначений для отримання останньої події транспортного засобу за попередні 24 години.

Метод підтримує зіставлення облікових записів: користувач може отримати подію транспортного засобу зі пов’язаного облікового запису, якщо має доступ до цього транспортного засобу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:

https://<server\_address>/api/v3/events/live

Замініть <server\_address> адресою сервера PILOT.

### Параметри запиту

Додайте до адреси запиту параметр:

-   agent\_id — ідентифікатор транспортного засобу в PILOT.
    

Транспортний засіб має бути доступним авторизованому користувачу.

## Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>GET https://&lt;server_address&gt;/api/v3/events/live?agent_id=2000</div><div>Authorization: Bearer &lt;token&gt;</div><div>X-Node: 0</div></td></tr></tbody></table>

### Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "events": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "Cotract Number": 1102,</div><div>&nbsp; &nbsp; &nbsp; "Company Name": "Boooch Test",</div><div>&nbsp; &nbsp; &nbsp; "AgentId": 2000,</div><div>&nbsp; &nbsp; &nbsp; "VehicleID": "10-14262 Sunny",</div><div>&nbsp; &nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; &nbsp; "EventID": 4531206,</div><div>&nbsp; &nbsp; &nbsp; "Event Type": 103,</div><div>&nbsp; &nbsp; &nbsp; "Event Message": "SpeedN|110|&gt;|112|10|ss|17",</div><div>&nbsp; &nbsp; &nbsp; "Event Start Time": 1785746496,</div><div>&nbsp; &nbsp; &nbsp; "Event Start Speed": null,</div><div>&nbsp; &nbsp; &nbsp; "Event Start location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.164997",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.235535"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "Event End Time": null,</div><div>&nbsp; &nbsp; &nbsp; "Event duration": null</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "process_time": 0.0222</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання запиту. Значення 0 означає успішне виконання
    
-   msg — результат виконання запиту
    
-   events — масив знайдених подій
    
-   process\_time — час обробки запиту в секундах
    

Масив events містить:

-   Cotract Number — ідентифікатор облікового запису, якому належить транспортний засіб
    
-   Company Name — назва облікового запису
    
-   AgentId — ідентифікатор транспортного засобу в PILOT
    
-   VehicleID — назва транспортного засобу
    
-   Road Type — тип дорожнього покриття. У поточній версії повертається Blacktop
    
-   EventID — ідентифікатор події
    
-   Event Type — тип події
    
-   Event Message — текст події
    
-   Event Start Time — час початку події у форматі Unix timestamp
    
-   Event Start Speed — швидкість у момент початку події. Якщо даних немає, повертається null
    
-   Event Start location — координати транспортного засобу в момент початку події:
    
-   lat — широта
    
-   lon — довгота
    
-   Event End Time — час завершення події у форматі Unix timestamp. Якщо даних немає, повертається null
    
-   Event duration — тривалість події в секундах. Розраховується як різниця між часом завершення та часом початку події. Якщо одне зі значень відсутнє, повертається null
