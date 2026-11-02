---
title: "Получение ближайших транспортных средств"
source: poluchenie_blizhajshikh_transportnykh_sredstv.html
---

API предназначен для поиска транспортных средств в заданном радиусе от указанной точки с сортировкой по расстоянию.

Подходит для сценариев оперативного реагирования (например, полиция, спецслужбы), когда оператору нужно быстро определить, какие машины находятся ближе всего к месту происшествия.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

Чтобы получить нужные данные, добавьте к адресу запроса команду.

-   cmd= get\_nearest\_vehicles 
    
-   group\_id — ID группы транспортных средств (orgdep.id)
    
-   lat — широта целевой точки (от −90 до 90)
    
-   lon — долгота целевой точки (от −180 до 180)
    
-   radius — радиус поиска. Поддерживает значения вида 500M, 1KM, 10KM, 20KM или число в метрах
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_nearest_vehicles&amp;group_id=228&amp;lat=43.28191&amp;lon=76.90723&amp;radius=50KM</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>&nbsp;</div><div>&nbsp;{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "group_id": 123,</div><div>&nbsp; "group_name": "Police Fleet",</div><div>&nbsp; "location": { "latitude": 24.4539, "longitude": 54.3773 },</div><div>&nbsp; "radius_meters": 10000,</div><div>&nbsp; "vehicles_found": 2,</div><div>&nbsp; "vehicles": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "POL-001",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 456,</div><div>&nbsp; &nbsp; &nbsp; "veh_id": 789,</div><div>&nbsp; &nbsp; &nbsp; "imei": "123456789",</div><div>&nbsp; &nbsp; &nbsp; "model": "Toyota Land Cruiser",</div><div>&nbsp; &nbsp; &nbsp; "vehicle_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "address": "Sheikh Zayed Road, Dubai, UAE",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "latitude": 24.4550,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "longitude": 54.3780,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "altitude": 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ignition": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1706964000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zone": []</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "distance": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "meters": 1234,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "kilometers": 1.23,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "straight_line_meters": 1200</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "travel_time": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "seconds": 180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "minutes": 3.0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "formatted": "3 min"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   group\_id — ID группы транспортных средств
    
-   group\_name — название группы
    
-   location — координаты целевой точки
    
-   latitude— широта
    
-   longitude— долгота
    
-   radius\_meters — радиус поиска в метрах
    
-   vehicles\_found — количество найденных транспортных средств
    
-   vehicles — массив объектов с информацией о транспортных средствах:
    
-   vehiclenumber— номер транспортного средства
    
-   agentid— ID агента/устройства
    
-   veh\_id— ID объекта
    
-   imei— IMEI устройства
    
-   model— модель ТС
    
-   vehicle\_type— тип ТС (Car, Truck и др.)
    
-   location— местоположение ТС
    
-   address— адрес (по данным геокодера)
    
-   latitude, longitude, altitude
    
-   status— текущее состояние ТС
    
-   active— активность (1 = в работе)
    
-   speed— скорость, км/ч
    
-   direction— направление движения
    
-   altitude— высота
    
-   satsinview— количество спутников
    
-   ignition— зажигание (1 = включено)
    
-   unixtimestamp— время события в формате UNIX
    
-   zone— массив текущих геозон
    
-   distance— расстояние до цели
    
-   meters— в метрах
    
-   kilometers— в километрах
    
-   straight\_line\_meters— по прямой в метрах
    
-   travel\_time— расчётное время движения до цели
    
-   seconds — в секундах
    
-   minutes — в минутах
    
-   formatted— форматированное время (например, "3 min")
