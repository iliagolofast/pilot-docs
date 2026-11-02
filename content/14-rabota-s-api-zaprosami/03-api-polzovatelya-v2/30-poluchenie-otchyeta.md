---
title: "Получение отчёта"
source: poluchenie_otchyeta.html
---

Этот API формирует отчёт по транспортным средствам, водителям, зонам, клиентам или тегам за выбранный период времени с возможностью детальной настройки содержимого.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET или POST

### Параметры запроса

Обязательные:

-   cmd=get\_report — команда для получения отчёта
    
-   report\_type — тип отчёта (числовой [идентификатор](spisok-otchyetov-2.html#идентификатор_отчёта_для_апи))
    
-   start — начало периода (Unix timestamp)
    
-   stop — конец периода (Unix timestamp)
    
-   veh\_id — идентификаторы транспортных средств (через запятую)
    
-   explode — разделение данных по: 1 — дни, 2 — недели, 3 — не разделять
    
-   group — группировка данных: 1 — по дням, 2 — по объектам, 3 — по зонам, 4 — по водителям, 5 — по клиентам, 6 — по группам, 7 — по тегам
    
-   format — формат отчёта: json, pdf, xls
    
-   tz —  часовой пояс, используемый для формирования дат и времени в отчёте. Укажите действующий идентификатор часового пояса IANA, например Africa/Johannesburg. Если передан неизвестный или некорректный часовой пояс, API возвращает ошибку.
    

Дополнительные:

-   drivers\_id — список ID водителей
    
-   zones\_id — список ID геозон
    
-   fillings — включить данные о заполнениях
    
-   stales — включить стоки
    
-   speed — включить скорость
    
-   rashod — включить расход топлива
    
-   stops — включить остановки
    
-   run — включить запуски транспортных средств
    
-   contr\_time / type — контрольное время
    
-   tags — список ID тегов
    
-   template — ID шаблона отчета
    
-   outside\_zones — включить внешние зоны
    
-   work\_hours — учитывать только рабочие часы
    
-   fuel — включить топливо
    
-   vehicle\_not\_moving\_time — время простоя для отчёта
    
-   vehicles\_has\_covered\_km — пробег транспортного средства
    
-   notifications — список ID уведомлений
    

### Пример GET-запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_report&amp;report_type=1&amp;start=1724623200&amp;stop=1724709600&amp;veh_id=1234,5678&amp;explode=1&amp;group=2</div><div>&amp;format=json&amp;tz=Africa/Johannesburg&amp;node=1</div></td></tr></tbody></table>

### Пример POST-запроса

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_report",</div><div>&nbsp; &nbsp; "report_type": 1,</div><div>&nbsp; &nbsp; "start": 1724623200,</div><div>&nbsp; &nbsp; "stop": 1724709600,</div><div>&nbsp; &nbsp; "veh_id": "1234,5678",</div><div>&nbsp; &nbsp; "explode": 1,</div><div>&nbsp; &nbsp; "group": 2,</div><div>&nbsp; &nbsp; "format": "json",</div><div>&nbsp; &nbsp; "tz": "Africa/Johannesburg"</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "1234",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 125.5,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 15.2,</div><div>&nbsp; &nbsp; &nbsp; "stops": 5,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 60</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "5678",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 98.3,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 12.7,</div><div>&nbsp; &nbsp; &nbsp; "stops": 4,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 55</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера
    
-   data — массив данных отчёта
    
-   veh\_id — идентификатор транспортного средства
    
-   date — дата записи отчёта
    
-   distance — пройденный путь (км)
    
-   fuel\_consumption — расход топлива
    
-   stops — количество остановок
    
-   speed\_avg — средняя скорость
