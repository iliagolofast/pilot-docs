---
title: "Отчёт по движению"
source: otchyet_po_dvizheniyu.html
---

С помощью этого API получайте  информацию о поездках транспортного средства за выбранный период. При включении модуля «Геозоны», каждая поездка разбивается на отрезки по входу и выходу из зон.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

Параметры запроса

-   cmd=run — команда для получения отчёта
    
-   imei — уникальный идентификатор объекта (ТС)
    
-   start — время начала выборки в формате Unix timestamp
    
-   stop — время окончания выборки в формате Unix timestamp
    
-   zones — включение информации о геозонах:
    
    — 0 — треки включаются целиком, без разбивки по зонам
    
    — 1 — треки разбиваются на отрезки по моментам входа и выхода в геозоны
    
-   eco— включение данных эко-драйвинга в треки
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=run&amp;imei=359772039289781&amp;start=1406318400&amp;stop=1406404800&amp;zones=1&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "zones": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "213854753412306",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Гараж",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3861",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7127",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 2</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406353422": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406353422,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopuid": "966971618589014",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stopname": "Барнаульский автовокзал",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "53.3508",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "83.7593",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msgtype": 1</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "tracks": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341955": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341955,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 0.26,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "17",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 17</div><div>&nbsp;&nbsp; &nbsp; &nbsp; },</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1406341994": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1406341994,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1406353389,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 119.83,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "maxspeed": "96",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "avgspeed": 58</div><div>&nbsp;&nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

Массив зон (zones) — точки входа и выхода из геозон:

-   ts — время события (Unix timestamp)
    
-   stopuid — уникальный идентификатор геозоны
    
-   stopname — название геозоны
    
-   lat — широта точки
    
-   lon — долгота точки
    
-   msgtype — тип события (1 = вход, 2 = выход)
    

Массив треков (tracks) — информация о поездках:

-   ts — время начала поездки (Unix timestamp)
    
-   te — время окончания поездки (Unix timestamp)
    
-   length — длина поездки в километрах
    
-   maxspeed — максимальная скорость (км/ч)
    
-   avgspeed — средняя скорость (км/ч)
    
-   lats — широта точки старта
    
-   lons — долгота точки старта
    
-   late — широта точки окончания
    
-   lone — долгота точки окончания
    
-   eco — данные эко-драйвинга (при включении параметра eco):
    
-   Acceleration, Braking, Speed — показатели по каждому параметру
