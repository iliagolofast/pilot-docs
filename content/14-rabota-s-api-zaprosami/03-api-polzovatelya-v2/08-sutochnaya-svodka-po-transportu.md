---
title: "Суточная сводка по транспорту"
source: sutochnaya_svodka_po_transportu.html
---

Этот API получает сведения о транспортном средстве за последние 24 часа, включая пробег, уровень топлива, заправки и расход топлива.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = vehinfo\_24\_hours — команда для получения информации за 24 часа
    
-   agent\_id — идентификатор транспортного средства (можно несколько через запятую)
    
-   imei — идентификатор устройства (можно несколько через запятую)
    
-   ts — метка времени (Unix timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=vehinfo_24_hours&amp;imei=10518,165182&amp;ts=1617710825&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "10518": {</div><div>&nbsp; &nbsp; "total_mileage": 745851.44,</div><div>&nbsp; &nbsp; "fuel_start": 229.37,</div><div>&nbsp; &nbsp; "fuel_stop": 229.37,</div><div>&nbsp; &nbsp; "fuel_fill": 409.6,</div><div>&nbsp; &nbsp; "fuel_drain": 153.15,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 256.45,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 35,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 161.5658,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 22,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; },</div><div>&nbsp; "165182": {</div><div>&nbsp; &nbsp; "total_mileage": 100946.68,</div><div>&nbsp; &nbsp; "fuel_start": 0,</div><div>&nbsp; &nbsp; "fuel_stop": 0,</div><div>&nbsp; &nbsp; "fuel_fill": 0,</div><div>&nbsp; &nbsp; "fuel_drain": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_l_per_100km": 0,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l": 22.313,</div><div>&nbsp; &nbsp; "fuel_consumption_norm_l_per_100km": 10,</div><div>&nbsp; &nbsp; "engine_hours": 0</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   total\_mileage — общий пробег
    
-   fuel\_start — количество топлива в начале периода
    
-   fuel\_stop — количество топлива в конце периода
    
-   fuel\_fill — заправка
    
-   fuel\_drain — слив топлива
    
-   fuel consumption (l) — фактический расход топлива
    
-   fuel consumption (l/100km) — расход на 100 км
    
-   fuel\_consumption\_norm(l) — нормативный расход топлива
    
-   fuel\_consumption\_norm(l/100km) — нормативный расход на 100 км
    
-   engine hours — моточасы
