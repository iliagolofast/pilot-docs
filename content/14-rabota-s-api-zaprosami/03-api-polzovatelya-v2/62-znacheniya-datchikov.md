---
title: "Значения датчиков"
source: znacheniya_datchikov.html
---

Этот API получает значения дискретных датчиков (уровень топлива, температура, вес и др.) за указанный период времени.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET

### Параметры запроса

-   cmd =get\_discrete\_sensor\_data — команда для получения данных датчиков
    
-   imei — идентификатор объекта
    
-   start — начало периода (Unix timestamp)
    
-   stop — конец периода (Unix timestamp)
    
-   tag\_id — идентификатор датчика
    
-   agent\_id — идентификатор агента (необязательный)
    
-   node — номер узла, на котором нужно выполнить команду
    

<table><tbody><tr><td><span></span></td><td><div>Данные по датчикам можно получать только за 24 часа.</div></td></tr></tbody></table>

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_discrete_sensor_data&amp;imei=350424062310402&amp;start=1677682645&amp;stop=1677761845&amp;tag_id=1158&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "sensor_data": {</div><div>&nbsp; &nbsp; "966960": {</div><div>&nbsp; &nbsp; &nbsp; "1677682772": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682772,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "95.09",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "0"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1677682950": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682950,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "94.9",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "12"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   sensor\_id — идентификатор датчика
    
-   unixtimestamp — время записи значения (Unix timestamp)
    
-   calibrated\_value — откалиброванное значение датчика (например, литры топлива или градусы температуры)
    
-   speed — скорость объекта в момент замера
