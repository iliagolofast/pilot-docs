---
title: "Получение последнего события транспортного средства"
source: poluchenie_poslednego_sobytiya_transportnogo_sredstva.html
---

API предназначен для получения последнего события транспортного средства за предыдущие 24 часа.

Метод поддерживает сопоставление аккаунтов: пользователь может получить событие транспортного средства из связанного аккаунта, если у него есть доступ к этому транспортному средству.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:

https://<server\_address>/api/v3/events/live

Замените <server\_address> адресом сервера PILOT.

### Параметры запроса

Добавьте к адресу запроса параметр:

-   agent\_id — идентификатор транспортного средства в PILOT.
    

Транспортное средство должно быть доступно авторизованному пользователю.

## Пример запроса

<table><tbody><tr><td><span></span></td><td><div>GET https://&lt;server_address&gt;/api/v3/events/live?agent_id=2000</div><div>Authorization: Bearer &lt;token&gt;</div><div>X-Node: 0</div></td></tr></tbody></table>

### Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "events": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "Cotract Number": 1102,</div><div>&nbsp; &nbsp; &nbsp; "Company Name": "Boooch Test",</div><div>&nbsp; &nbsp; &nbsp; "AgentId": 2000,</div><div>&nbsp; &nbsp; &nbsp; "VehicleID": "10-14262 Sunny",</div><div>&nbsp; &nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; &nbsp; "EventID": 4531206,</div><div>&nbsp; &nbsp; &nbsp; "Event Type": 103,</div><div>&nbsp; &nbsp; &nbsp; "Event Message": "SpeedN|110|&gt;|112|10|ss|17",</div><div>&nbsp; &nbsp; &nbsp; "Event Start Time": 1785746496,</div><div>&nbsp; &nbsp; &nbsp; "Event Start Speed": null,</div><div>&nbsp; &nbsp; &nbsp; "Event Start location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.164997",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.235535"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "Event End Time": null,</div><div>&nbsp; &nbsp; &nbsp; "Event duration": null</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "process_time": 0.0222</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения запроса. Значение 0 означает успешное выполнение
    
-   msg — результат выполнения запроса
    
-   events — массив найденных событий
    
-   process\_time — время обработки запроса в секундах
    

Массив events содержит:

-   Cotract Number — идентификатор аккаунта, которому принадлежит транспортное средство
    
-   Company Name — название аккаунта
    
-   AgentId — идентификатор транспортного средства в PILOT
    
-   VehicleID — название транспортного средства
    
-   Road Type — тип дорожного покрытия. В текущей версии возвращается Blacktop
    
-   EventID — идентификатор события
    
-   Event Type — тип события
    
-   Event Message — текст события
    
-   Event Start Time — время начала события в формате Unix timestamp
    
-   Event Start Speed — скорость в момент начала события. Если данные отсутствуют, возвращается null
    
-   Event Start location — координаты транспортного средства в момент начала события:
    
-   lat — широта
    
-   lon — долгота
    
-   Event End Time — время завершения события в формате Unix timestamp. Если данные отсутствуют, возвращается null
    
-   Event duration — продолжительность события в секундах. Рассчитывается как разница между временем завершения и временем начала события. Если одно из значений отсутствует, возвращается null
