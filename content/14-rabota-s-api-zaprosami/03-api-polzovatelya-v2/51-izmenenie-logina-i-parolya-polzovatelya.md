---
title: "Изменение логина и пароля пользователя"
source: izmenenie_logina_i_parolya_polzovatelya.html
---

Этот API позволяет изменить логин и пароль существующего пользователя в системе PILOT.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET

### Параметры запроса

-   cmd=update\_user\_auth — команда для редактирования авторизационных данных
    
-   login — новый логин пользователя
    
-   password — новый пароль пользователя
    
-   user\_id — идентификатор пользователя, данные которого нужно изменить
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=update_user_auth&amp;login=TestAPI&amp;password=qwerty&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера о результате действия
