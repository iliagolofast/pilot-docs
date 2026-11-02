---
title: "Блокировка или разблокировка объектов"
source: blokirovka_ili_razblokirovka_obektov.html
---

Этот API блокирует или разблокирует объекты по параметрам agent\_id, imei или account\_id. В зависимости от переданного статуса, машина будет либо заблокирована, либо активирована. Блокировка или разблокировка может быть выполнена на основании идентификаторов, таких как агент, IMEI или номер договора.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Метод

POST

### Параметры запроса

Обязательные:

-   cmd=setvehblock  — команда для блокировки или разблокировки машины.
    
-   status —  статус блокировки. Значение: 0— заблокирована; 1— активна (разблокирована)
    
-   node — номер узла, на котором нужно выполнить команду
    

Один из этих параметров должен быть указан:

-   agentid — идентификатор агента
    
-   imei — IMEI-номер устройства
    
-   accountid — номер договора
    

### Примеры запроса

Блокировка машины по IMEI:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=0&amp;imei=1231231231&amp;node=1</div></td></tr></tbody></table>

Разблокировка машины по agentid:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=1&amp;agentid=2914&amp;node=1</div></td></tr></tbody></table>

Ответ

При успешной блокировке или разблокировке машины вы получите следующий ответ:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "status": 1</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код ответа. Значение:
    
    — 0 — операция прошла успешно
    
    — возможные другие значения: ошибки, такие как 400 или 500, если произошли проблемы.
    
-   data — данные о блокировке/разблокировке
    
-   agentid — Идентификатор агента, для которого был изменён статус
    
-   status — Статус машины: 0— заблокирована; 1— активна (разблокирована)
    
-   msg — сообщение об успешности выполнения операции
