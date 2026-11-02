---
title: "Открепить контракт от транспорта"
source: otkrepit_kontrakt_ot_transporta.html
---

Этот API снимает привязку существующего контракта с указанного транспортного средства.

## Как получить данные

### Метод

DELETE

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

• cmd=unlink\_contract — команда для отвязывания контракта

• PlateNum — госномер транспортного средства

• node — номер узла, на котором нужно выполнить команду (необязательный)

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=unlink_contract&amp;PlateNum=test12345&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,&nbsp; &nbsp;</div><div>&nbsp; "msg": "Deletion is successful"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

• code — код результата (0 — успешная операция)

• msg — сообщение сервера о результате действия
