---
title: "Время простоя транспорта"
source: vremya_prostoya_transporta.html
---

Этот API возвращает список периодов простоев транспортного средства за выбранный промежуток времени.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET

### Параметры запроса

Параметры передаются через строку запроса или в теле POST-запроса:

-   cmd=get\_idle — команда для получения простоев
    
-   time\_start — начало периода (timestamp, unixtime)
    
-   time\_end — конец периода (timestamp, unixtime)
    
-   imei — IMEI устройства мониторинга. Если устройств несколько, указываются через запятую: imei=887556,io9987,76573
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример API-запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_idle&amp;time_start=16878956&amp;time_end=16878755&amp;imei=887556,io9987,76573&amp;node=1</div></td></tr></tbody></table>

### Пример ответа

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "2914": [</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": "1641814740", "idle_end": 1641814984},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641815547, "idle_end": 1641825619},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641827105, "idle_end": 1641893307},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641893623, "idle_end": 1641898037}</div><div>&nbsp; &nbsp; &nbsp; // ... остальные записи ...</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата: 0 — успешно 1 — ошибка
    
-   data — словарь, где ключи — идентификаторы транспортных средств, а значения — список периодов простоя:
    
-   idle\_start — время начала простоя (timestamp)
    
-   idle\_end — время конца простоя (timestamp)
    
-   message — текстовое сообщение о результате запроса
