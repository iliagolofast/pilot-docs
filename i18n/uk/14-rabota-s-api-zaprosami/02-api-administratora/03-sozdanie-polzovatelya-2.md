---
title: "Створення користувача"
---

Цей API створює нового користувача PILOT і призначає йому основні дані: логін, пароль, ім’я, роль, телефон, email і доступні договори.

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу:: https://<server\_address>/backend/api.php?

### Параметри запиту

• cmd=create\_user  — команда для створення користувача

• login — логін нового користувача

• password — пароль нового користувача

• name — ім’я користувача

• role\_id — ID ролі користувача

• phone — номер телефону користувача

• email — email користувача

• accounts — список ID договорів, до яких користувач повинен отримати доступ. Якщо договорів кілька, указуйте їх через кому

• account\_id — ID договору, у якому створюється користувач

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=create_user&amp;login=TestAPI13&amp;password=Qwerty123&amp;name=test Api 13&amp;role_id=1&amp;phone=789995&amp;email=testapi13@mailinator.com&amp;accounts=1106,1131&amp;account_id=1003</div></td></tr></tbody></table>

### Відповідь

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "Success create user: 729",</span></div><div><span>&nbsp; "user_id": 729</span></div><div><span>}</span></div></td></tr></tbody></table>

У відповідь на API-запит повертається:

• code — код результату виконання команди. Значення 0 означає успішне виконання

• msg — текстове повідомлення з результатом виконання команди

• user\_id — ID створеного користувача
