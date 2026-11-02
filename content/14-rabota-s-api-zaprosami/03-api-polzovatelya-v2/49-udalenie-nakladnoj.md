---
title: "Удаление накладной"
source: udalenie_nakladnoj.html
---

Этот API удаляет существующую накладную за указанный период времени.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=remove\_waybill — команда для удаления накладной
    
-   ts — время начала (Unix timestamp)
    
-   te — время окончания (Unix timestamp)
    
-   agent\_id — идентификатор агента
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": 1</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code— код результата (0 = успех)
    
-   data— результат удаления (1 = удалено успешно)
