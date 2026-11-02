---
title: "Отримання звіту"
---

Цей API формує звіт за транспортними засобами, водіями, зонами, клієнтами або тегами за вибраний період часу з можливістю детального налаштування вмісту.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET або POST

### Параметри запиту

Обов’язкові:

-   cmd=get\_report — команда для отримання звіту
    
-   report\_type — тип звіту (числовий [ідентифікатор](spisok-otchyetov-2.html#идентификатор_отчёта_для_апи))
    
-   start — початок періоду (Unix timestamp)
    
-   stop — кінець періоду (Unix timestamp)
    
-   veh\_id — ідентифікатори транспортних засобів (через кому)
    
-   explode — розділення даних за: 1 — дні, 2 — тижні, 3 — не розділяти
    
-   group — групування даних: 1 — за днями, 2 — за об’єктами, 3 — за зонами, 4 — за водіями, 5 — за клієнтами, 6 — за групами, 7 — за тегами
    
-   format — формат звіту: json, pdf, xls
    
-   tz —  часовий пояс, що використовується для формування дат і часу у звіті. Укажіть чинний ідентифікатор часового поясу IANA, наприклад Africa/Johannesburg. Якщо передано невідомий або некоректний часовий пояс, API повертає помилку.
    

Додаткові:

-   drivers\_id — список ID водіїв
    
-   zones\_id — список ID геозон
    
-   fillings — включити дані про заповнення
    
-   stales — включити стоки
    
-   speed — включити швидкість
    
-   rashod — включити витрату палива
    
-   stops — включити зупинки
    
-   run — включити запуски транспортних засобів
    
-   contr\_time / type — контрольний час
    
-   tags — список ID тегів
    
-   template — ID шаблону звіту
    
-   outside\_zones — включити зовнішні зони
    
-   work\_hours — враховувати лише робочі години
    
-   fuel — включити паливо
    
-   vehicle\_not\_moving\_time — час простою для звіту
    
-   vehicles\_has\_covered\_km — пробіг транспортного засобу
    
-   notifications — список ID сповіщень
    

### Приклад GET-запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_report&amp;report_type=1&amp;start=1724623200&amp;stop=1724709600&amp;veh_id=1234,5678&amp;explode=1&amp;group=2</div><div>&amp;format=json&amp;tz=Africa/Johannesburg&amp;node=1</div></td></tr></tbody></table>

### Приклад POST-запиту

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_report",</div><div>&nbsp; &nbsp; "report_type": 1,</div><div>&nbsp; &nbsp; "start": 1724623200,</div><div>&nbsp; &nbsp; "stop": 1724709600,</div><div>&nbsp; &nbsp; "veh_id": "1234,5678",</div><div>&nbsp; &nbsp; "explode": 1,</div><div>&nbsp; &nbsp; "group": 2,</div><div>&nbsp; &nbsp; "format": "json",</div><div>&nbsp; &nbsp; "tz": "Africa/Johannesburg"</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "1234",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 125.5,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 15.2,</div><div>&nbsp; &nbsp; &nbsp; "stops": 5,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 60</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "5678",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 98.3,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 12.7,</div><div>&nbsp; &nbsp; &nbsp; "stops": 4,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 55</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера
    
-   data — масив даних звіту
    
-   veh\_id — ідентифікатор транспортного засобу
    
-   date — дата запису звіту
    
-   distance — пройдений шлях (км)
    
-   fuel\_consumption — витрата палива
    
-   stops — кількість зупинок
    
-   speed\_avg — середня швидкість
