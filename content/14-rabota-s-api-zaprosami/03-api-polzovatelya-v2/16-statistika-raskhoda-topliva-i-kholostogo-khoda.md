---
title: "Статистика расхода топлива и холостого хода"
source: statistika_raskhoda_topliva_i_kholostogo_khoda.html
---

Этот API получает данные о том, сколько топлива было израсходовано за выбранный период времени, а также сколько времени транспортное средство работало на холостом ходу.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=fuelconsumtion — команда для получения отчёта
    
-   imei — уникальный идентификатор транспортного средства
    
-   start — время начала выборки (Unix timestamp)
    
-   stop — время окончания выборки (Unix timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=fuelconsumtion&amp;imei=7157153151020&amp;start=1644741475&amp;stop=1644914275&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "7157153151020": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "idle": 98872,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fuel consumed": 457.92</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 = успешно, другие значения = ошибка)
    
-   data — данные по выбранному объекту:
    
-   idle — время работы двигателя на холостом ходу (в секундах)
    
-   fuel consumed — объём потребленного топлива за указанный период (литры)
    
-   message — текстовое сообщение о результате
