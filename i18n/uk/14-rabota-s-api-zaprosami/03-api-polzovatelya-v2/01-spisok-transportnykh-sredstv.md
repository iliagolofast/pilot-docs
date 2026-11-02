---
title: "Список транспортних засобів"
---

Цей API передає інформацію про транспортні засоби, зокрема їхнє поточне місцеположення, дані з датчиків, технічну інформацію, а також додаткові параметри.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

Щоб отримати потрібні дані, додайте до адреси запиту команду.

-   cmd=list — команда для отримання списку транспортних засобів
    
-   node — номер вузла, на якому потрібно виконати команду
    

Формат запитуваних даних — масив даних про транспортні засоби.

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=list</span>&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "list": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "agentid": 9003,</span></div><div><span>&nbsp; &nbsp; &nbsp; "imei": "356307046873054",</span></div><div><span>&nbsp; &nbsp; &nbsp; "typeid": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "Car",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vehiclenumber": "Х444МР123",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vin": "TRDFG65876",</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": "Geo-Center OOO",</span></div><div><span>&nbsp; &nbsp; &nbsp; "created_time": 1414224633,</span></div><div><span>&nbsp; &nbsp; &nbsp; "current_mileage": 881,</span></div><div><span>&nbsp; &nbsp; &nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1418744535",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "43.5562",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.9084",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 268,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 246,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Parking", "description": "TEST SPEED" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Fuel sensor", "description": "Fuel sensor" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "External power supply", "description": "External power supply" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Ignition sensor", "description": "Ignition sensor" }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ],</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors_status": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187852",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "off",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "External power supply",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187851",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "26.27 V",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "26.27",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "26272",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Fuel sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187850",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1 l",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1626336197",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ]</span></div><div><span>&nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код статусу (0 — успіх)
    
-   msg — повідомлення про статус
    
-   list — масив об’єктів транспортних засобів, кожен з яких містить:
    
-   agentid — унікальний ідентифікатор пристрою стеження
    
-   imei — міжнародний ідентифікатор мобільного обладнання
    
-   typeid — числовий ідентифікатор типу транспортного засобу
    
-   type — тип транспортного засобу
    
-   vehiclenumber — реєстраційний номер транспортного засобу
    
-   vin — ідентифікаційний номер транспортного засобу
    
-   folder — організаційна група
    
-   created\_time — час додавання до системи у форматі Unixtimestamp
    
-   current\_mileage —поточний пробіг
    
-   status — інформація про поточний стан:
    
-   unixtimestamp — час останнього оновлення
    
-   lat — широта
    
-   lon — довгота
    
-   speed — швидкість
    
-   dir — напрямок руху в градусах
    
-   alt — висота над рівнем моря
    
-   satsinview — кількість видимих супутників GPS
    
-   sensors — масив доступних датчиків
    
-   sensors\_status — детальний статус кожного датчика, зокрема:
    
-   name — назва датчика
    
-   id — ідентифікатор датчика
    
-   hum\_value — реальне значення після тарування
    
-   dig\_value — цифрове значення після тарування
    
-   raw\_value — необроблене значення до тарування
    
-   change\_ts — час останньої зміни значення
    
-   group — група датчиків
