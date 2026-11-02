---
title: "Звіт за рухом із гео-прив’язкою"
---

Цей API дає змогу отримати звіт про переміщення транспортного засобу за вибраний період із зазначенням координат і географічної інформації (адреса, район, місто тощо). Дані містять інформацію про початок і завершення кожного відрізка руху, середню та максимальну швидкість, довжину шляху й місце за гео-координатами.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = rungeo — команда для отримання звіту
    
-   imei — унікальний ідентифікатор об’єкта в системі
    
-   start — час початку вибірки у форматі Unix timestamp
    
-   stop — час закінчення вибірки у форматі Unix timestamp
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rungeo&amp;imei=356307045913463&amp;start=1439413200&amp;stop=1439586000&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "tracks": {</div><div>&nbsp; &nbsp; "1439443509": {</div><div>&nbsp; &nbsp; &nbsp; "avgspeed": 35.3889,</div><div>&nbsp; &nbsp; &nbsp; "length": 12.7304,</div><div>&nbsp; &nbsp; &nbsp; "maxspeed": 59,</div><div>&nbsp; &nbsp; &nbsp; "ts": 1439443509,</div><div>&nbsp; &nbsp; &nbsp; "te": 1439445837,</div><div>&nbsp; &nbsp; &nbsp; "slat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "slon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "elat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "elon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "sgeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya ulitsa",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "egeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya Street",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання (0 = успіх)
    
-   msg — повідомлення про статус
    
-   tracks — об’єкт, де ключі — це мітки часу початку поїздки (Unix timestamp), а значення — дані про кожну поїздку
    

Ці ключі водночас є унікальними ідентифікаторами треків (track\_id), які можна використовувати в запиті методу [gettrack](dannye-treka.html) для отримання детальних точок маршруту.

Для кожної поїздки:

-   avgspeed — середня швидкість (км/год)
    
-   maxspeed — максимальна швидкість (км/год)
    
-   length — довжина маршруту (км)
    
-   ts — час початку поїздки (Unix timestamp)
    
-   te — час закінчення поїздки (Unix timestamp)
    
-   slat, slon — координати старту (широта, довгота)
    
-   elat, elon — координати кінця
    
-   sgeo — адреса місця старту (місто, вулиця, будинок, поштовий індекс)
    
-   egeo — адреса місця закінчення
