---
title: "Прогноз прибытия на остановку"
source: prognoz_pribytiya_na_ostanovku.html
---

Этот API получает прогнозируемое время прибытия автобусов, троллейбусов и маршруток на указанную остановку.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = stationForecast — команда для получения прогноза прибытия
    
-   stopid — идентификатор остановки (берётся из [интерфейса](../../lichnyj-kabinet-polzovatelya/moduli-1/rejsy-2/kak-dobavit-ostanovki.html) PILOT)
    
-   node — номер узла, на котором нужно выполнить команду
    

Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stationForecast&amp;stopid=7400&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "curent_stop": 1,</div><div>&nbsp; &nbsp; "line_id": 1371,</div><div>&nbsp; &nbsp; "line_name": "№ 17 С. КАЛЬФА - ПЛ. СУВОРОВА - УЛ. ГЕНЕРАЛА ЖИДИЛОВА",</div><div>&nbsp; &nbsp; "line_num": "17",</div><div>&nbsp; &nbsp; "line_type": "A",</div><div>&nbsp; &nbsp; "this_stop": 32,</div><div>&nbsp; &nbsp; "time": 4065,</div><div>&nbsp; &nbsp; "vehicle": "BUS FLIGHT",</div><div>&nbsp; &nbsp; "vehid": 48854</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>

В ответ на API-запрос возвращается массив объектов с прогнозами для каждого маршрута на этой остановке:

-   curent\_stop — порядковый номер остановки в маршруте, на которой сейчас находится транспортное средство
    
-   line\_id — ID маршрута
    
-   line\_name — полное название маршрута
    
-   line\_num — номер маршрута
    
-   line\_type — тип маршрута: 'A' — автобус, 'T' — троллейбус, 'M' — маршрутка
    
-   this\_stop — порядковый номер этой остановки в маршруте
    
-   time — прогнозируемое время прибытия на эту остановку в секундах
    
-   vehicle — госномер транспортного средства
    
-   vehid — ID транспортного средства
