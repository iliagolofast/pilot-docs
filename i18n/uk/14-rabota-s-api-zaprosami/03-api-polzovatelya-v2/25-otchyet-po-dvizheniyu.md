---
title: "Звіт за рухом"
---

За допомогою цього API отримуйте  інформацію про поїздки транспортного засобу за вибраний період. Якщо ввімкнено модуль «Геозони», кожна поїздка розбивається на відрізки за входом і виходом із зон.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

Параметри запиту

-   cmd=run — команда для отримання звіту
    
-   imei — унікальний ідентифікатор об’єкта (ТЗ)
    
-   start — час початку вибірки у форматі Unix timestamp
    
-   stop — час закінчення вибірки у форматі Unix timestamp
    
-   zones — увімкнення інформації про геозони:
    
    — 0 — треки включаються цілком, без розбиття за зонами
    
    — 1 — треки розбиваються на відрізки за моментами входу та виходу з геозон
    
-   eco— увімкнення даних екодрайвінгу в треки
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=run&amp;imei=359772039289781&amp;start=1406318400&amp;stop=1406404800&amp;zones=1&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "zones": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "213854753412306",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Гараж",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3861",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7127",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 2</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406353422": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406353422,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "966971618589014",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Барнаульский автовокзал",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3508",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7593",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 1</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "tracks": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341955": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341955,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 0.26,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "17",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 17</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406353389,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 119.83,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "96",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 58</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

Масив зон (zones) — точки входу та виходу з геозон:

-   ts — час події (Unix timestamp)
    
-   stopuid — унікальний ідентифікатор геозони
    
-   stopname — назва геозони
    
-   lat — широта точки
    
-   lon — довгота точки
    
-   msgtype — тип події (1 = вхід, 2 = вихід)
    

Масив треків (tracks) — інформація про поїздки:

-   ts — час початку поїздки (Unix timestamp)
    
-   te — час закінчення поїздки (Unix timestamp)
    
-   length — довжина поїздки в кілометрах
    
-   maxspeed — максимальна швидкість (км/год)
    
-   avgspeed — середня швидкість (км/год)
    
-   lats — широта точки старту
    
-   lons — довгота точки старту
    
-   late — широта точки закінчення
    
-   lone — довгота точки закінчення
    
-   eco — дані екодрайвінгу (якщо ввімкнено параметр eco):
    
-   Acceleration, Braking, Speed — показники за кожним параметром
