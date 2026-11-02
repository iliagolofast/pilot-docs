---
title: "Учёт пассажиропотока"
source: uchyet_passazhiropotoka.html
---

Этот API используется для получения данных о пассажиропотоке в транспорте, оснащённом системой автокондуктор.

С его помощью можно:

— посмотреть, сколько пассажиров вошло и вышло на каждой остановке

 — получить координаты остановок, время события и видеоидентификатор (если система поддерживает видеозапись)

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd= pass\_counter — команда для вызова API
    
-   ts — время начала выборки в формате Unix timestamp
    
-   te — время окончания выборки в формате Unix timestamp
    
-   node — номер узла, на котором нужно выполнить команду
    

Дополнительно:

-   imei — IMEI машины, оснащённой автокондуктором. Если не указать, то выборка будет по всем машинам с оборудованием
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=pass_counter&amp;ts=1554670800&amp;te=1554757200&amp;imei=963852741159753&amp;node=1</div></td></tr></tbody></table>

### Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "36571": {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 36571,</div><div>&nbsp; &nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9346",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.8981",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554696995,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 13</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9238",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.9098",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 4,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554697232,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 14</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "autoconductor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения (0 = успех)
    
-   msg — сообщение о статусе (например, OK)
    
-   data — основной объект с данными по пассажиропотоку.
    
-   agent\_id — ID машины в системе
    
-   vehiclenumber — внутренний номер ТС или имя оборудования (например, autoconductor)
    
-   stops — массив остановок с данными по пассажиропотоку
    
-   busline\_id — ID маршрута
    
-   door\_id — номер двери, через которую зафиксировано движение пассажиров
    
-   lat — широта остановки
    
-   lon — долгота остановки
    
-   p\_in — количество вошедших пассажиров
    
-   p\_out — количество вышедших пассажиров
    
-   ts — время события (Unix timestamp)
    
-   video\_id — ID видеозаписи, связанной с событием (если есть)
