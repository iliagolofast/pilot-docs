---
title: "Пробег за заданный период"
source: probeg_za_zadannyj_period.html
---

Этот API возвращает пробег и моточасы транспортного средства за выбранный промежуток времени.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET

### Параметры запроса

-   cmd=istatus — команда для получения пробега
    
-   imei — идентификатор объекта в системе
    
-   start — начало интервала (Unix timestamp)
    
-   stop — конец интервала (Unix timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;imei=6794i&amp;start=1664917200&amp;stop=1665003600&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "run": 126.79500000000007,</div><div>&nbsp; "run_by_can": 0,</div><div>&nbsp; "motorhours": 9897,</div><div>&nbsp; "unixtimestamp_start": 1664917200,</div><div>&nbsp; "unixtimestamp_stop": 1665003600</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   run — пробег за период, км
    
-   run\_by\_can — пробег по данным CAN, км
    
-   motorhours — моточасы за период, секунды
    
-   unixtimestamp\_start — начало интервала
    
-   unixtimestamp\_stop — конец интервала
