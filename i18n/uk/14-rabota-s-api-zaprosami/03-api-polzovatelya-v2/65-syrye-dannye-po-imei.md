---
title: "Сирі дані за IMEI"
---

Цей API дає змогу отримати сирі дані пристрою за вказаний період часу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = ag\_events — команда для отримання сирих точок
    
-   imei — унікальний ідентифікатор пристрою
    
-   ts — час початку вибірки (Unix timestamp)
    
-   te — час завершення вибірки (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_events&amp;ts=1498201000&amp;te=1498201200&amp;imei=356307045913463&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201016": {"alt": 33, "lat": "47.2124", "lon": "39.6922", "sat": 15, "speed": 0, "ts": 1498201016},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201037": {"alt": 29, "lat": "47.2124", "lon": "39.6924", "sat": 15, "speed": 6, "ts": 1498201037},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201097": {"alt": 31, "lat": "47.2128", "lon": "39.6933", "sat": 15, "speed": 0, "ts": 1498201097}</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "vehicle": {"agentid": 2914, "created_time": 1359797592, "current_mileage": 90224, "folder": "Sky Electronics", "imei": "356307045913463", "type": "Cow", "typeid": 31, "vehiclenumber": "IX35"}</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успіх)
    
-   msg — повідомлення сервера
    
-   data — об’єкт із сирими точками, де ключі — timestamp точок, значення:
    
-   lat — широта
    
-   lon — довгота
    
-   alt — висота
    
-   sat — кількість супутників
    
-   speed — швидкість
    
-   ts — час події (Unix timestamp)
    
-   vehicle — інформація про об’єкт:
    
-   agentid — ідентифікатор агента
    
-   created\_time — час створення об’єкта
    
-   current\_mileage — поточний пробіг
    
-   folder — назва папки/групи
    
-   imei — ідентифікатор пристрою
    
-   type — тип об’єкта
    
-   typeid — ідентифікатор типу об’єкта
    
-   vehiclenumber — номер автомобіля
