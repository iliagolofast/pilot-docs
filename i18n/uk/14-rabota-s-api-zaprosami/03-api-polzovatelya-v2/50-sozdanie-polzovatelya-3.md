---
title: "Створення користувача"
---

Цей API дає змогу створити нового користувача в PILOT із заданими параметрами: логін, пароль, роль і контактні дані.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET

### Параметри запиту

cmd=create\_user — команда для створення користувача

login — логін нового користувача

password — пароль користувача

name — ім’я користувача

phone — номер телефону користувача

email — Email користувача

role\_id — роль користувача: 0 — Admin, 1 — User

vehicles — список доступних транспортних засобів (ID або кількість)

folders — список доступних папок (ID або кількість)

-   node — номер вузла, на якому потрібно виконати команду
    

<table><tbody><tr><td><span></span></td><td><div>У запиті необхідно вказувати логін і пароль адміністратора, який створює користувача.</div></td></tr></tbody></table>

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=create_user&amp;login=TestAPI3&amp;password=123456&amp;name=Test API&amp;role_id=1&amp;phone=789995&amp;email=testapi5@mailinator.com&amp;vehicles=15&amp;folders=5&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success create user: 48"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера з ID створеного користувача
