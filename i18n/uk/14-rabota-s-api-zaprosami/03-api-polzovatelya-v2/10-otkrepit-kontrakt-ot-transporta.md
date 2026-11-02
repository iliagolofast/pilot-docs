---
title: "Відкріпити контракт від транспорту"
---

Цей API знімає прив’язку наявного контракту з указаного транспортного засобу.

## Як отримати дані

### Метод

DELETE

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

• cmd=unlink\_contract — команда для відв’язування контракту

• PlateNum — держномер транспортного засобу

• node — номер вузла, на якому потрібно виконати команду (необов’язковий)

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=unlink_contract&amp;PlateNum=test12345&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,&nbsp; &nbsp;</div><div>&nbsp; "msg": "Deletion is successful"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

• code — код результату (0 — успішна операція)

• msg — повідомлення сервера про результат дії
