---
title: "Статистика поїздок і пройдена відстань"
---

Цей API отримує інформацію про пробіг, поїздки та паркування транспортного засобу за вказаний період.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = distance — команда для отримання даних про пробіг
    
-   imei — унікальний ідентифікатор об’єкта
    
-   start — час початку вибірки (Unix timestamp)
    
-   stop — час закінчення вибірки (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=distance&amp;imei=7157153151020&amp;start=1676926800&amp;stop=1677013200&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "distance": {</div><div>&nbsp; &nbsp; "duration": 23740,</div><div>&nbsp; &nbsp; "length": 104.54,</div><div>&nbsp; &nbsp; "start": 1761944400,</div><div>&nbsp; &nbsp; "stop": 1762030800,</div><div>&nbsp; &nbsp; "can": 0,</div><div>&nbsp; &nbsp; "usecan": false,</div><div>&nbsp; &nbsp; "gps": 104.54,</div><div>&nbsp; &nbsp; "parking_time": 62237,</div><div>&nbsp; &nbsp; "parking_count": 14,</div><div>&nbsp; &nbsp; "max_speed": 92,</div><div>&nbsp; &nbsp; "avg_speed": 18,</div><div>&nbsp; &nbsp; "trips_cnt": 6,</div><div>&nbsp; &nbsp; "trips_ts": 1761947653,</div><div>&nbsp; &nbsp; "trips_te": 1762027933,</div><div>&nbsp; &nbsp; "trips_time": 80280,</div><div>&nbsp; &nbsp; "trips_driving": 18043,</div><div>&nbsp; &nbsp; "parkings": {</div><div>&nbsp; &nbsp; &nbsp; "1761948742": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761948742,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761949164,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.404495",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.443546",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 341967622</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1761950225": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761950225,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761978656,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.380997",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.434662"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1761978976": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761978976,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761979445,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.386534",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.439198",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342008717</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1761983958": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761983958,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761984933,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.386375",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.413776",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342008717</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1761986309": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761986309,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761988132,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.341892",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.397186",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342008717</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1761988857": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761988857,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761989297,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.368885",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.42438",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342008717</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1761989685": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761989685,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762002192,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.380968",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.434662"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1762002484": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762002484,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762002826,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.378464",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.442036",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342062148</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1762003344": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762003344,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762003645,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.381042",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.434467",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342062148</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1762005988": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762005988,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762006366,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.316278",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.382927",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342062148</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1762007656": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762007656,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762008203,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.354523",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.382133",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "track_id": 342062148</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1762010014": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762010014,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762012025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.381067",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.434717"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1762012439": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762012439,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762021038,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.369600",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.435860"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1762022306": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762022306,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762027298,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.380917",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.434715"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "tracks": {</div><div>&nbsp; &nbsp; &nbsp; "341967622": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start": 1761947653,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop": 1761950225,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761947653,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761950225,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "length": 22.83,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "can": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "gps": 22.83,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "max_speed": 92,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "avg_speed": 26,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parkings": [1761948742],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_count": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_time": 422,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlat": "25.381645",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplat": "25.380997",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlon": "55.528587",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplon": "55.434662"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "342008717": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start": 1761978656,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop": 1761989685,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1761978656,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1761989685,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "length": 43.99,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "can": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "gps": 43.99,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "max_speed": 72,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "avg_speed": 18,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parkings": [1761978976, 1761983958, 1761986309, 1761988857],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_count": 4,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_time": 3707,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlat": "25.380960",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplat": "25.380968",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlon": "55.434743",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplon": "55.434662"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "342062148": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start": 1762002192,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop": 1762010014,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762002192,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762010014,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "length": 28.78,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "can": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "gps": 28.78,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "max_speed": 61,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "avg_speed": 14,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parkings": [1762002484, 1762003344, 1762005988, 1762007656],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_count": 4,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_time": 1568,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlat": "25.381003",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplat": "25.381067",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlon": "55.434752",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplon": "55.434717"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "342078382": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start": 1762012025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop": 1762012439,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762012025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762012439,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "length": 2.32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "can": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "gps": 2.32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "max_speed": 34,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "avg_speed": 19,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parkings": [],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_count": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_time": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlat": "25.381067",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplat": "25.369600",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlon": "55.434717",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplon": "55.435860"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "342089059": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start": 1762021038,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop": 1762022306,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762021038,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762022306,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "length": 3.97,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "can": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "gps": 3.97,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "max_speed": 49,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "avg_speed": 11,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parkings": [],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_count": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_time": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlat": "25.369557",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplat": "25.380917",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlon": "55.435802",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplon": "55.434715"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "342095630": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start": 1762027298,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop": 1762027933,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1762027298,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1762027933,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "length": 2.65,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "can": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "gps": 2.65,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "max_speed": 32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "avg_speed": 13,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parkings": [],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_count": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking_time": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlat": "25.380903",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplat": "25.380952",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "startlon": "55.434485",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stoplon": "55.434668"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "startlat": "25.381645",</div><div>&nbsp; &nbsp; "startlon": "55.528587",</div><div>&nbsp; &nbsp; "stoplat": "25.380952",</div><div>&nbsp; &nbsp; "stoplon": "55.434668",</div><div>&nbsp; &nbsp; "active_days": 1,</div><div>&nbsp; &nbsp; "range_dates": {</div><div>&nbsp; &nbsp; &nbsp; "1761944400": 1</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   duration — тривалість усіх поїздок у секундах
    
-   length — реальний пробіг у кілометрах
    
-   max\_speed — максимальна швидкість у км/год
    
-   avg\_speed — середня швидкість у км/год
    
-   trips\_cnt — кількість поїздок
    
-   trips\_time — загальний час поїздок у секундах
    
-   trips\_driving — час без зупинок у секундах
    
-   parking\_count — кількість паркувань
    
-   parking\_time — загальний час паркування в секундах
    
-   parkings — масив паркувань, кожне паркування включає:
    
-   ts— час початку паркування
    
-   te— час закінчення паркування
    
-   lat— широта
    
-   lon— довгота
    
-   length— довжина паркування в кілометрах
    
-   track\_id — ідентифікатор треку, з яким пов’язане паркування. Якщо паркування прив’язане до треку, це поле міститиме унікальний ідентифікатор треку.
    
-   tracks — масив даних про поїздки, кожна поїздка включає:
    
-   length— довжина поїздки
    
-   max\_speed— максимальна швидкість
    
-   avg\_speed— середня швидкість
    
-   startlat, startlon, stoplat, stoplon — координати початку та кінця поїздки
