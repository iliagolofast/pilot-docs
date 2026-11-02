---
title: "Создание накладной"
source: sozdanie_nakladnoj.html
---

Этот API создаёт новую накладную на заданный период времени.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=add\_waybill — команда для добавления накладной
    
-   ts — время начала (Unix timestamp)
    
-   te — время окончания (Unix timestamp)
    
-   agent\_id — идентификатор агента
    
-   name — название накладной
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;name=test+bill1&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "ts": 1596022528,</div><div>&nbsp; &nbsp; "te": 1596488400,</div><div>&nbsp; &nbsp; "agent_id": 44841,</div><div>&nbsp; &nbsp; "account_id": 3934,</div><div>&nbsp; &nbsp; "waybill": {</div><div>&nbsp; &nbsp; &nbsp; "name": "test bill1"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 = успех)
    
-   data — объект с данными созданной накладной
    
-   ts — время начала накладной
    
-   te — время окончания накладной
    
-   agent\_id — идентификатор агента
    
-   account\_id — идентификатор аккаунта
    
-   waybill.name — название накладной
