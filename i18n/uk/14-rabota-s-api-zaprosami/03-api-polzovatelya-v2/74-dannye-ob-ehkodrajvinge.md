---
title: "Дані про екодрайвінг"
---

Цей API дає змогу отримувати інформацію про екологічність водіння транспортних засобів за вказаний період. 

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

Щоб отримати потрібні дані, додайте до адреси запиту параметри. Параметри вказуються після знака питання «?» і розділяються знаком «&».

-   cmd = mileco\_drive — команда для отримання даних про поїздку 
    
-   start — дата й час початку періоду, за який ви хочете отримати дані
    
-   stop — дата й час завершення періоду
    

Час вказується у форматі Unixtimestamp — це кількість секунд, що минули з 1 січня 1970 року.

-   vehid — ідентифікатор транспортного засобу, за яким необхідно отримати дані. Якщо потрібно отримати дані про один автомобіль — введіть його ID, якщо про кілька автомобілів — перелічіть їхні ID через кому.
    
    <table><tbody><tr><td><span></span></td><td><div>Якщо ви не вкажете параметр&nbsp;vehid, система автоматично видасть інформацію за всіма автомобілями, закріпленими за вашим акаунтом.</div></td></tr></tbody></table>
    
-   imei — унікальний номер GPS-трекера транспортного засобу. Використовуйте цей параметр для отримання даних за конкретним трекером.
    
    <table><tbody><tr><td><span></span></td><td><div>У разі зазначення&nbsp;imei&nbsp;параметр&nbsp;vehid&nbsp;указувати не потрібно.</div></td></tr></tbody></table>
    

Приклад API-запиту з imei:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span><span>&lt;</span><span>address</span><span>&gt;</span><span>/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;imei=86645655031889725</span></div></td></tr></tbody></table>

-   time\_diff\_type — групування даних за часом. За замовчуванням дані збираються за кожен день.
    
-   time\_diff\_type=1 — дані будуть зібрані за кожні 7 днів
    
-   time\_diff\_type=2 — дані будуть зібрані за кожен місяць
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>&nbsp;<span>https://&lt;url&gt;/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;</span>vehid=32,53&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "32": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 842.75354055,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 511 ГР 123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "speed": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msg": "Speed",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "cnt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "val": 1290,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fee": 12</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div><span>&nbsp; &nbsp; "53": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 53,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 8.24949075,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 619АК 67",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Bus",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": []</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }&nbsp; &nbsp;</span></div></td></tr></tbody></table>

У відповідь на API-запит повертаються дані про кожен транспортний засіб:

-   veh\_id — ідентифікатор транспортного засобу
    
-   imei — унікальний номер трекера
    
-   distance — пройдена відстань за вказаний період
    
-   agent\_id —  ідентифікатор договору
    
-   account\_id — номер акаунта в системі
    
-   account\_name —  ім’я акаунта
    
-   veh\_name — назва транспортного засобу
    
-   veh\_type — тип транспортного засобу
    
-   eco\_data — дані про водіння
