---
title: "Информация по накладной"
source: informatsiya_po_nakladnoj.html
---

Этот API позволяет получить данные о накладной за определённый период.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = get\_waybill — команда для получения накладных
    
-   ts — время начала выборки (Unix timestamp)
    
-   agent\_id — идентификатор агента
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_waybill&amp;ts=1596022528&amp;agent_id=44841&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "ts": 1596022528,</div><div>&nbsp; &nbsp; &nbsp; "te": 1596488400,</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 44841,</div><div>&nbsp; &nbsp; &nbsp; "account_id": 3934,</div><div>&nbsp; &nbsp; &nbsp; "waybill": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "test bill1"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 = успех)
    
-   data — массив с информацией о накладных:
    
-   ts — время начала накладной
    
-   te — время окончания накладной
    
-   agent\_id — идентификатор агента
    
-   account\_id — идентификатор аккаунта
    
-   waybill — объект с данными накладной:
    
-   name — название накладной
