---
title: "Статус объекта и расстояние до точки или геозоны"
source: status_obekta_i_rasstoyanie_do_tochki_ili_geozony.html
---

Этот API передаёт текущий статус транспортного средства, а также время и расстояние до заданной точки или геозоны.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = get\_status\_and\_distance — команда для получения статуса и расстояния
    
-   vehnum — гаражный или госномер автомобиля, можно указать несколько через запятую
    
-   zone — название геозоны (если нужно рассчитать расстояние до зоны)
    
-   point — координаты точки в формате широта,долгота (если нужно расстояние до конкретной точки)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Примеры запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;zone=Госпиталь%20Лапино&amp;node=1</div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;point=55.923032,37.659668&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "cstatus": 6,</div><div>&nbsp; "cstatus_timestamp": 1554985159,</div><div>&nbsp; "destination_name": "Zero coordinates",</div><div>&nbsp; "distance": {</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "length": 27613,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "point": "55.923032,37.659668",</div><div>&nbsp; &nbsp; "time": 2002,</div><div>&nbsp; &nbsp; "type": "point"</div><div>&nbsp; },</div><div>&nbsp; "ignition": 1,</div><div>&nbsp; "rbu": "08",</div><div>&nbsp; "sensors": {</div><div>&nbsp; &nbsp; "Unloading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Loading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Ignition Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "FUEL SENSORS OPERATION SENSORS": "Operating|1554985138",</div><div>&nbsp; &nbsp; "Fuel ... fuel": "202.96 Liter|1554995669"</div><div>&nbsp; },</div><div>&nbsp; "source_name": "Loading_Chertanovo",</div><div>&nbsp; "status": 4,</div><div>&nbsp; "status_timestamp": 1554985072,</div><div>&nbsp; "unixtimestamp": 1554995864,</div><div>&nbsp; "vehiclenumber": "М897ЕТ777",</div><div>&nbsp; "zone": []</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   cstatus — текущий статус объекта
    
-   cstatus\_timestamp — время фиксации статуса (Unix timestamp)
    
-   destination\_name — название точки назначения
    
-   distance — объект с информацией о расстоянии и времени до точки или зоны:
    
-   length — расстояние в метрах
    
-   time — время в секундах
    
-   type — тип объекта (point или zone)
    
-   point — координаты точки (если type=point)
    
-   ignition — состояние зажигания (1 = включено)
    
-   rbu — идентификатор РБУ
    
-   sensors — состояние различных сенсоров (например, загрузка/разгрузка, топливо)
    
-   source\_name — имя источника данных
    
-   status — статус объекта
    
-   status\_timestamp — время последнего изменения статуса
    
-   unixtimestamp — время получения данных
    
-   vehiclenumber — номер транспортного средства
    
-   zone — массив с текущими зонами (если есть)
