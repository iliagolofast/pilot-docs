---
title: "Путевые листы"
source: putevye_listy_.html
---

Этот API используется для получения информации о путевых листах (waybill) за указанный период.

С его помощью можно:

— получить список задач (заданий) по каждому агенту

— посмотреть планируемые и фактические времена выполнения

— узнать статусы выполнения и подробности по точкам маршрута

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://tasks.<server\_address>/backend/public/get\_waybill\_for\_pilot

### Параметры запроса

from\_ts — время начала выборки (Unix timestamp, пример: 1536181200)

to\_ts — время окончания выборки (Unix timestamp, пример: 1538773200)

agents — список идентификаторов агентов через запятую (например: 13128,13130,...)

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/get_waybill_for_pilot?from_ts=1536181200&amp;to_ts=1538773200&amp;agents=13128,13130,21055</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "",</div><div>&nbsp; "items": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 13128,</div><div>&nbsp; &nbsp; &nbsp; "c_begin_time": "1536200000",</div><div>&nbsp; &nbsp; &nbsp; "c_end_time": "1536210000",</div><div>&nbsp; &nbsp; &nbsp; "c_information": "{\"route\":\"Маршрут №54\",\"driver\":\"Иванов И.И.\"}",</div><div>&nbsp; &nbsp; &nbsp; "c_initiator": "Диспетчер",</div><div>&nbsp; &nbsp; &nbsp; "c_progress_time": "1536200500",</div><div>&nbsp; &nbsp; &nbsp; "c_running_time": "1536200300",</div><div>&nbsp; &nbsp; &nbsp; "c_status_id": 2,</div><div>&nbsp; &nbsp; &nbsp; "c_status_name": "Выполнено",</div><div>&nbsp; &nbsp; &nbsp; "id": 98765,</div><div>&nbsp; &nbsp; &nbsp; "points_info": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "point_id": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.7558",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "37.6173",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "visited_at": "1536200600"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   success — результат выполнения (true — успех, false — ошибка)
    
-   msg — сообщение об ошибке (если есть)
    
-   items — массив данных о заданиях
    

Для каждого задания:

agent\_id — идентификатор агента

c\_begin\_time — планируемое время начала выполнения задачи

c\_end\_time — фактическое время завершения задачи

c\_information — строка с дополнительной информацией о задании (JSON, зависит от шаблона)

c\_initiator — заявитель (кто создал задание)

c\_progress\_time — фактическое время посещения первой точки

c\_running\_time — фактическое время отправления на выполнение задания

c\_status\_id — идентификатор статуса задания

c\_status\_name — расшифровка статуса задания

id — идентификатор задания в системе PTM

points\_info — массив информации о посещённых точках маршрута
