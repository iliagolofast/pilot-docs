---
title: "Изменение доступа пользователя к договорам"
source: izmenenie_dostupa_polzovatelya_k_dogovoram.html
---

Этот API изменяет список договоров, к которым пользователь PILOT имеет доступ.

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

• cmd=update\_user\_accounts\_map — команда для изменения доступа пользователя к договорам

• accounts — список ID договоров, к которым пользователь должен иметь доступ. Если договоров несколько, укажите их через запятую

• user\_id — ID пользователя, для которого изменяется доступ

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087&amp;user_id=535</div></td></tr></tbody></table>

Если нужно указать несколько договоров:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087,1131&amp;user_id=535</div></td></tr></tbody></table>

### Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

• code — код результата выполнения команды. Значение 0 означает успешное выполнение

• msg — текстовое сообщение с результатом выполнения команды
