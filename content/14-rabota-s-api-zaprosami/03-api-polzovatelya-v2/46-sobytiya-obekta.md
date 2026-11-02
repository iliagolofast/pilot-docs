---
title: "События объекта"
source: sobytiya_obekta.html
---

Этот API возвращает события в реальном времени по транспортным средствам, включая информацию о контракте, компании, водителе, скорости и местоположении начала события.

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=live\_events — команда для получения событий в реальном времени
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=live_events&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "1264": {</div><div>&nbsp; &nbsp; "Contract Number": "CONTRACT ID",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "LEK",</div><div>&nbsp; &nbsp; "Vehicle Owner": "SUB-CONTRACTOR",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "5174 WA",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 18262972,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881932",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.185841",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.213230"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "1123": {</div><div>&nbsp; &nbsp; "Contract Number": "",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "",</div><div>&nbsp; &nbsp; "Vehicle Owner": "",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "6076MB",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 0,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881413",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.188658",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.206314"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   Ключ объекта (1264, 1123) — уникальный идентификатор события
    
-   Contract Number — номер контракта
    
-   Company Name — название компании
    
-   Base Location — база транспортного средства
    
-   Vehicle Owner — владелец транспорта
    
-   ID — внутренний ID события
    
-   EventID, EventType — идентификатор события и его тип
    
-   VehicleID — госномер или идентификатор транспортного средства
    
-   Asset Category — категория транспортного средства
    
-   Road Type — тип дороги
    
-   DriverID — идентификатор водителя
    
-   Event Start Time — время начала события (Unix timestamp)
    
-   Event Start Speed — скорость в момент начала события
    
-   Event Start Location — координаты начала события (lat, lon)
