---
title: "Зміна доступу користувача до договорів"
---

Цей API змінює список договорів, до яких користувач PILOT має доступ.

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

• cmd=update\_user\_accounts\_map — команда для зміни доступу користувача до договорів

• accounts — список ID договорів, до яких користувач повинен мати доступ. Якщо договорів кілька, указуйте їх через кому

• user\_id — ID користувача, для якого змінюється доступ

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087&amp;user_id=535</div></td></tr></tbody></table>

Якщо потрібно вказати кілька договорів:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=update_user_accounts_map&amp;accounts=1087,1131&amp;user_id=535</div></td></tr></tbody></table>

### Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

• code — код результату виконання команди. Значення 0 означає успішне виконання

• msg — текстове повідомлення з результатом виконання команди
