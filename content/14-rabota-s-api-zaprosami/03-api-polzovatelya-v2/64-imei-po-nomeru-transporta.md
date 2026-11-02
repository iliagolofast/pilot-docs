---
title: "IMEI по номеру транспорта"
source: imei_po_nomeru_transporta.html
---

Этот API используется для того, чтобы определить IMEI устройства, установленного на транспортном средстве, по его номеру.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=get\_imei — команда для API
    
-   vehnum — номер транспорта
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_imei&amp;vehnum=IX35&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "imei": "356307045913463"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 = успех)
    
-   msg — сообщение сервера
    
-   imei — IMEI устройства, установленного в транспортном средстве
