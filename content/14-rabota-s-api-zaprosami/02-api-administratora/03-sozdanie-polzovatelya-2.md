---
title: "Создание пользователя"
source: sozdanie_polzovatelya_2.html
---

Этот API создаёт нового пользователя PILOT и назначает ему основные данные: логин, пароль, имя, роль, телефон, email и доступные договоры.

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес:: https://<server\_address>/backend/api.php?

### Параметры запроса

• cmd=create\_user  — команда для создания пользователя

• login — логин нового пользователя

• password — пароль нового пользователя

• name — имя пользователя

• role\_id — ID роли пользователя

• phone — номер телефона пользователя

• email — email пользователя

• accounts — список ID договоров, к которым пользователь должен получить доступ. Если договоров несколько, укажите их через запятую

• account\_id — ID договора, в котором создаётся пользователь

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=create_user&amp;login=TestAPI13&amp;password=Qwerty123&amp;name=test Api 13&amp;role_id=1&amp;phone=789995&amp;email=testapi13@mailinator.com&amp;accounts=1106,1131&amp;account_id=1003</div></td></tr></tbody></table>

### Ответ

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "code": 0,</span></div><div><span>&nbsp; "msg": "Success create user: 729",</span></div><div><span>&nbsp; "user_id": 729</span></div><div><span>}</span></div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

• code — код результата выполнения команды. Значение 0 означает успешное выполнение

• msg — текстовое сообщение с результатом выполнения команды

• user\_id — ID созданного пользователя
