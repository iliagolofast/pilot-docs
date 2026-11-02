---
title: "Текущий статус транспорта"
source: tekushchij_status_transporta.html
---

Этот API используется для получения актуальной информации о текущем статусе одного или нескольких транспортных средств, включая данные о местоположении, скорости, показаниях датчиков и техническом состоянии.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

Чтобы получить нужные данные, добавьте к адресу запроса параметры. Параметры указываются после знака вопроса «?» и разделяются знаком «&».

-   cmd = status— команда для получения информации о статусе
    
-   imei — уникальный идентификатор GPS-трекера
    
-   agents — список идентификаторов agentid, указывается через запятую для запроса статусов нескольких объектов
    
-   veh\_numbers — регистрационный номер транспортного средства, точно как он указан в системе с обязательным соблюдением регистра букв и цифр
    
-   node — номер узла, на котором нужно выполнить команду
    

<table><tbody><tr><td><span></span></td><td><div>В запросе должен присутствовать один из трёх параметров: imei, agents или veh_numbers.</div></td></tr></tbody></table>

## Примеры

### Запрос по IMEI

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=status&amp;imei=357073296325265<span>&amp;node=1</span></div></td></tr></tbody></table>

###  Запрос по нескольким идентификаторам агентов

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=status&amp;agents=51594,44841&amp;node=1</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 44841,</div><div>&nbsp; &nbsp; &nbsp; "imei": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM2200",</div><div>&nbsp; &nbsp; &nbsp; "typeid": 27,</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "NURKA",</div><div>&nbsp; &nbsp; &nbsp; "folder": "REAL",</div><div>&nbsp; &nbsp; &nbsp; "created_time": 1518167398,</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "865473034076573",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 65345,</div><div>&nbsp; &nbsp; &nbsp; "initial_mileage": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": null,</div><div>&nbsp; &nbsp; &nbsp; "model": "ВАЗ (Lada) Kalina",</div><div>&nbsp; &nbsp; &nbsp; "info": " test",</div><div>&nbsp; &nbsp; &nbsp; "vin": "XTA219470K0259832",</div><div>&nbsp; &nbsp; &nbsp; "status": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "direction": 27,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "47.119755",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "39.667492",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "alt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "satsinview": 16,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "moving": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parking": 9267,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "firing": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "sensors_status": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Ignition sensor",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "150549",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "выкл.",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "0",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621423461",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "GROUP!"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "name": "Датчик топлива",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "368013",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hum_value": "1249.4 -",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dig_value": "1249.4",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "raw_value": "12494",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "change_ts": "1621432378",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "group": "myGroup"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "reqest_time": 0.0642</div><div>}</div></td></tr></tbody></table>

Ответ возвращается в формате JSON и содержит:

 imei — уникальный номер трекера

-   distance — пройденное расстояние за указанный период
    
-   agent\_id —  идентификатор устройства слежения
    
-   account\_id — номер аккаунта в системе
    
-   code — код статуса (0 - успех)
    
-   msg — сообщение о статусе выполнения запроса
    
-   data — массив объектов с информацией о транспортных средствах:
    
-   agentid — идентификатор договора
    
-   imei — международный идентификатор устройства слежения
    
-   vin — идентификационный номер транспортного средства
    
-   configuration — модель трекера
    
-   typeid — числовой идентификатор типа транспортного средства
    
-   type — тип транспортного средства
    
-   vehiclenumber — регистрационный номер транспортного средства
    
-   folder — организационная группа или филиал
    
-   created\_time — время создания в формате Unixtimestamp
    
-   uniqid — уникальный идентификатор
    
-   current\_mileage — текущий пробег
    
-   initial\_mileage — начальный пробег
    
-   driver\_name — имя водителя
    
-   driver\_phone — телефон водителя
    
-   model — модель транспортного средства
    
-   info — дополнительная информация
    
-   status — информация о текущем состоянии:
    
-   active — активен ли объект (1 или 0)
    
-   speed — текущая скорость
    
-   direction — текущее направление в градусах
    
-   lat — текущая широта
    
-   lon — текущая долгота
    
-   alt — текущая высота
    
-   satsinview — количество видимых спутников
    
-   unixtimestamp — время последнего обновления
    
-   moving — время в движении в секундах
    
-   parking — время парковки в секундах
    
-   firing — состояние зажигания (1 — включено, 0 — выключено)
    
-   sensors\_status — массив с информацией о датчиках:
    
-   name — название датчика
    
-   id — идентификатор датчика
    
-   hum\_value — реальное значение после калибровки
    
-   dig\_value — цифровое значение после калибровки
    
-   raw\_value — необработанное значение до калибровки
    
-   change\_ts — время последнего изменения значения Unixtimestamp-формате
    
-   group — группа датчика
    
-   reqest\_time — время выполнения запроса в секундах
