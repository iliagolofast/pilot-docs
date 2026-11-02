---
title: "Отримання найближчих транспортних засобів"
---

API призначений для пошуку транспортних засобів у заданому радіусі від указаної точки із сортуванням за відстанню.

Підходить для сценаріїв оперативного реагування (наприклад, поліція, спецслужби), коли оператору потрібно швидко визначити, які машини перебувають найближче до місця події.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

Щоб отримати потрібні дані, додайте до адреси запиту команду.

-   cmd= get\_nearest\_vehicles 
    
-   group\_id — ID групи транспортних засобів (orgdep.id)
    
-   lat — широта цільової точки (від −90 до 90)
    
-   lon — довгота цільової точки (від −180 до 180)
    
-   radius — радіус пошуку. Підтримує значення виду 500M, 1KM, 10KM, 20KM або число в метрах
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_nearest_vehicles&amp;group_id=228&amp;lat=43.28191&amp;lon=76.90723&amp;radius=50KM</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>&nbsp;</div><div>&nbsp;{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "group_id": 123,</div><div>&nbsp; "group_name": "Police Fleet",</div><div>&nbsp; "location": { "latitude": 24.4539, "longitude": 54.3773 },</div><div>&nbsp; "radius_meters": 10000,</div><div>&nbsp; "vehicles_found": 2,</div><div>&nbsp; "vehicles": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "POL-001",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 456,</div><div>&nbsp; &nbsp; &nbsp; "veh_id": 789,</div><div>&nbsp; &nbsp; &nbsp; "imei": "123456789",</div><div>&nbsp; &nbsp; &nbsp; "model": "Toyota Land Cruiser",</div><div>&nbsp; &nbsp; &nbsp; "vehicle_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "address": "Sheikh Zayed Road, Dubai, UAE",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "latitude": 24.4550,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "longitude": 54.3780,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ignition": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1706964000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zone": []</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "distance": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "meters": 1234,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "kilometers": 1.23,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "straight_line_meters": 1200</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "travel_time": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "seconds": 180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "minutes": 3.0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "formatted": "3 min"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   group\_id — ID групи транспортних засобів
    
-   group\_name — назва групи
    
-   location — координати цільової точки
    
-   latitude— широта
    
-   longitude— довгота
    
-   radius\_meters — радіус пошуку в метрах
    
-   vehicles\_found — кількість знайдених транспортних засобів
    
-   vehicles — масив об’єктів з інформацією про транспортні засоби:
    
-   vehiclenumber— номер транспортного засобу
    
-   agentid— ID агента/пристрою
    
-   veh\_id— ID об’єкта
    
-   imei— IMEI пристрою
    
-   model— модель ТЗ
    
-   vehicle\_type— тип ТЗ (Car, Truck тощо)
    
-   location— місцеположення ТЗ
    
-   address— адреса (за даними геокодера)
    
-   latitude, longitude, altitude
    
-   status— поточний стан ТЗ
    
-   active— активність (1 = у роботі)
    
-   speed— швидкість, км/год
    
-   direction— напрямок руху
    
-   altitude— висота
    
-   satsinview— кількість супутників
    
-   ignition— запалювання (1 = увімкнено)
    
-   unixtimestamp— час події у форматі UNIX
    
-   zone— масив поточних геозон
    
-   distance— відстань до цілі
    
-   meters— у метрах
    
-   kilometers— у кілометрах
    
-   straight\_line\_meters— по прямій у метрах
    
-   travel\_time— розрахунковий час руху до цілі
    
-   seconds — у секундах
    
-   minutes — у хвилинах
    
-   formatted— форматований час (наприклад, "3 min")
