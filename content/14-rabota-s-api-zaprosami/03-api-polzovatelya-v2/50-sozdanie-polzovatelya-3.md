---
title: "Создание пользователя"
source: sozdanie_polzovatelya_3.html
---

Этот API позволяет создать нового пользователя в PILOT с заданными параметрами: логин, пароль, роль и контактные данные.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET

### Параметры запроса

cmd=create\_user — команда для создания пользователя

login — логин нового пользователя

password — пароль пользователя

name — имя пользователя

phone — номер телефона пользователя

email — Email пользователя

role\_id — роль пользователя: 0 — Admin, 1 — User

vehicles — список доступных транспортных средств (ID или количество)

folders — список доступных папок (ID или количество)

-   node — номер узла, на котором нужно выполнить команду
    

<table><tbody><tr><td><span></span></td><td><div>В запросе необходимо указывать логин и пароль администратора, который создаёт пользователя.</div></td></tr></tbody></table>

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=create_user&amp;login=TestAPI3&amp;password=123456&amp;name=Test API&amp;role_id=1&amp;phone=789995&amp;email=testapi5@mailinator.com&amp;vehicles=15&amp;folders=5&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success create user: 48"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера, с ID созданного пользователя
