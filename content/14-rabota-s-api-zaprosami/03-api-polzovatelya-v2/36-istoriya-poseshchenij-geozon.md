---
title: "История посещений геозон"
source: istoriya_poseshchenij_geozon_.html
---

Этот API получает информацию о том, когда объекты посещали определённые геозоны за указанный период времени.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=ag\_geozones — команда API для получения истории геозон
    
-   start — дата начала периода (Unix timestamp)
    
-   stop — дата окончания периода (Unix timestamp)
    
-   imei — идентификатор транспортного средства. Можно указать несколько через запятую
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса для одного транспортного средства

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635<span>&amp;node=1</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

### Пример запроса для нескольких транспортных средств

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635,867481037184458</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "865291046424635": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "867481037184458": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1607949101,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1607956478</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1608012176,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1608041334</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успех)
    
-   msg — сообщение сервера (например, "OK")
    
-   data — информация о посещениях геозон
    
-   Если один объект, data — массив посещений
    
-   Если несколько объектов, data — объект, где ключи — IMEI транспортных средств, а значения — массивы посещений
    
-   group— группа геозоны
    
-   zonename— название геозоны
    
-   ts— время входа в геозону (Unix timestamp)
    
-   te— время выхода из геозоны (Unix timestamp)
