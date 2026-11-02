---
title: "Добове зведення по транспорту"
---

Цей API отримує відомості про транспортний засіб за останні 24 години, зокрема пробіг, рівень палива, заправки та витрату палива.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = vehinfo\_24\_hours — команда для отримання інформації за 24 години
    
-   agent\_id — ідентифікатор транспортного засобу (можна кілька через кому)
    
-   imei — ідентифікатор пристрою (можна кілька через кому)
    
-   ts — мітка часу (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=vehinfo_24_hours&amp;imei=10518,165182&amp;ts=1617710825&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "10518": {</div><div>&nbsp; &nbsp; "total_mileage": 745851.44,</div><div>&nbsp; &nbsp; "fuel_start": 229.37,</div><div>&nbsp; &nbsp; "fuel_stop": 229.37,</div><div>&nbsp; &nbsp; "fuel_fill": 409.6,</div><div>&nbsp; &nbsp; "fuel_drain": 153.15,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 256.45,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 35,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 161.5658,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 22,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; },</div><div>&nbsp; "165182": {</div><div>&nbsp; &nbsp; "total_mileage": 100946.68,</div><div>&nbsp; &nbsp; "fuel_start": 0,</div><div>&nbsp; &nbsp; "fuel_stop": 0,</div><div>&nbsp; &nbsp; "fuel_fill": 0,</div><div>&nbsp; &nbsp; "fuel_drain": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 22.313,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 10,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   total\_mileage — загальний пробіг
    
-   fuel\_start — кількість палива на початку періоду
    
-   fuel\_stop — кількість палива наприкінці періоду
    
-   fuel\_fill — заправка
    
-   fuel\_drain — злив палива
    
-   fuel consumption (l) — фактична витрата палива
    
-   fuel consumption (l/100km) — витрата на 100 км
    
-   fuel\_consumption\_norm(l) — нормативна витрата палива
    
-   fuel\_consumption\_norm(l/100km) — нормативна витрата на 100 км
    
-   engine hours — мотогодини
