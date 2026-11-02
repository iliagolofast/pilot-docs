---
title: "События по уведомлениям"
source: sobytiya_po_uvedomleniyam.html
---

Этот API используется для получения событий [уведомлений](../../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html) за выбранный период, например, превышение скорости, движение вне зоны или другие заранее настроенные оповещения.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = notifications — команда для получения событий уведомлений
    
-   ts — время начала выборки (Unix timestamp)
    
-   te — время окончания выборки (Unix timestamp)
    
-   notification — имя уведомления, по которому нужно получить события
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=notifications&amp;ts=1606942800&amp;te=1607115600&amp;notification=test&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=52km/h Duration: 42 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988609</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=29km/h Duration: 12 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988438</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "PS2",</div><div>&nbsp; &nbsp; &nbsp; "agentid": 109792,</div><div>&nbsp; &nbsp; &nbsp; "message": "Speed &gt; 10 km/h longer than 10 ss max speed=17km/h Duration: 13 sec",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606988106</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "id": 3701</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   vehiclenumber — госномер или внутренний номер транспортного средства
    
-   agentid — идентификатор объекта в системе
    
-   message — текст события уведомления
    
-   ts — время события в формате Unix timestamp
    
-   id — идентификатор запроса/сессии
