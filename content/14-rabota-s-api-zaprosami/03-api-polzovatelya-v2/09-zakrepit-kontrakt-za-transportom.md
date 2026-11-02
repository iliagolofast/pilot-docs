---
title: "Закрепить контракт за транспортом"
source: zakrepit_kontrakt_za_transportom.html
---

Этот API привязывает контракт к транспортному средству, указывая его госномер, дату начала действия, имя контракта и расстояние.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=link\_contract — команда для привязывания контракта
    
-   PlateNum — госномер транспортного средства
    
-   Date — время начала действия контракта (Unix timestamp)
    
-   Name — название контракта
    
-   Distance — расстояние (например, пробег по контракту)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=link_contract&amp;PlateNum=test12345&amp;Distance=1111&amp;Date=1623927270&amp;Name=1212&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "The linking is successful"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера о результате действия
