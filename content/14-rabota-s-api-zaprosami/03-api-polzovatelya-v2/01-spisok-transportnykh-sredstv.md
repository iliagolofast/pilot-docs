---
title: "Список транспортных средств"
source: spisok_transportnykh_sredstv.html
---

Этот API передаёт информацию о транспортных средствах, включая их текущее местоположение, данные с датчиков, техническую информацию, а также дополнительные параметры.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

Чтобы получить нужные данные, добавьте к адресу запроса команду.

-   cmd=list — команда для получения списка транспортных средств
    
-   node — номер узла, на котором нужно выполнить команду
    

Формат запрашиваемых данных — массив данных о транспортных средствах.

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=list</span>&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "OK",</span></div><div><span>&nbsp; "list": [</span></div><div><span>&nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; "agentid": 9003,</span></div><div><span>&nbsp; &nbsp; &nbsp; "imei": "356307046873054",</span></div><div><span>&nbsp; &nbsp; &nbsp; "typeid": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "Car",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vehiclenumber": "Х444МР123",</span></div><div><span>&nbsp; &nbsp; &nbsp; "vin": "TRDFG65876",</span></div><div><span>&nbsp; &nbsp; &nbsp; "folder": "Geo-Center OOO",</span></div><div><span>&nbsp; &nbsp; &nbsp; "created_time": 1414224633,</span></div><div><span>&nbsp; &nbsp; &nbsp; "current_mileage": 881,</span></div><div><span>&nbsp; &nbsp; &nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1418744535",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "43.5562",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.9084",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 268,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 246,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Parking", "description": "TEST SPEED" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Fuel sensor", "description": "Fuel sensor" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "External power supply", "description": "External power supply" },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { "name": "Ignition sensor", "description": "Ignition sensor" }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ],</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "sensors_status": [</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187852",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "off",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "0",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "External power supply",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187851",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "26.27 V",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "26.27",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "26272",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1627467122",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Fuel sensor",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "1187850",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1 l",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "1",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1626336197",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": ""</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; ]</span></div><div><span>&nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код статуса (0 — успех)
    
-   msg — сообщение о статусе
    
-   list — массив объектов транспортных средств, каждый из которых содержит:
    
-   agentid — уникальный идентификатор устройства слежения
    
-   imei — международный идентификатор мобильного оборудования
    
-   typeid — числовой идентификатор типа транспортного средства
    
-   type — тип транспортного средства
    
-   vehiclenumber — регистрационный номер транспортного средства
    
-   vin — идентификационный номер транспортного средства
    
-   folder — организационная группа
    
-   created\_time — время добавления в систему в Unixtimestamp-формате
    
-   current\_mileage —текущий пробег
    
-   status — информация о текущем состоянии:
    
-   unixtimestamp — время последнего обновления
    
-   lat — широта
    
-   lon — долгота
    
-   speed — скорость
    
-   dir — направление движения в градусах
    
-   alt — высота над уровнем моря
    
-   satsinview — количество видимых спутников GPS
    
-   sensors — массив доступных датчиков
    
-   sensors\_status — детальный статус каждого датчика, включая:
    
-   name — название датчика
    
-   id — идентификатор датчика
    
-   hum\_value — реальное значение после калибровки
    
-   dig\_value — цифровое значение после калибровки
    
-   raw\_value — необработанное значение до калибровки
    
-   change\_ts — время последнего изменения значения
    
-   group — группа датчиков
