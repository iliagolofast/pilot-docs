---
title: "Сырые данные по IMEI"
source: syrye_dannye_po_imei.html
---

Этот API позволяет получить сырые данные устройства за указанный период времени.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = ag\_events — команда для получения сырых точек
    
-   imei — уникальный идентификатор устройства
    
-   ts — время начала выборки (Unix timestamp)
    
-   te — время окончания выборки (Unix timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_events&amp;ts=1498201000&amp;te=1498201200&amp;imei=356307045913463&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201016": {"alt": 33, "lat": "47.2124", "lon": "39.6922", "sat": 15, "speed": 0, "ts": 1498201016},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201037": {"alt": 29, "lat": "47.2124", "lon": "39.6924", "sat": 15, "speed": 6, "ts": 1498201037},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201097": {"alt": 31, "lat": "47.2128", "lon": "39.6933", "sat": 15, "speed": 0, "ts": 1498201097}</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "vehicle": {"agentid": 2914, "created_time": 1359797592, "current_mileage": 90224, "folder": "Sky Electronics", "imei": "356307045913463", "type": "Cow", "typeid": 31, "vehiclenumber": "IX35"}</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успех)
    
-   msg — сообщение сервера
    
-   data — объект с сырыми точками, где ключи — timestamp точек, значения:
    
-   lat — широта
    
-   lon — долгота
    
-   alt — высота
    
-   sat — количество спутников
    
-   speed — скорость
    
-   ts — время события (Unix timestamp)
    
-   vehicle — информация об объекте:
    
-   agentid — идентификатор агента
    
-   created\_time — время создания объекта
    
-   current\_mileage — текущий пробег
    
-   folder — название папки/группы
    
-   imei — идентификатор устройства
    
-   type — тип объекта
    
-   typeid — идентификатор типа объекта
    
-   vehiclenumber — номер машины
