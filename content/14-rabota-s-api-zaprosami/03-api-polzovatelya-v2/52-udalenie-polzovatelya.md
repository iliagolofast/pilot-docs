---
title: "Удаление пользователя"
source: udalenie_polzovatelya_.html
---

Этот API удаляет существующего пользователя в системе PILOT по его идентификатору.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

DELETE

### Параметры запроса

-   cmd=remove\_user — команда для удаления пользователя
    
-   user\_id — идентификатор пользователя, которого нужно удалить
    
-   node — номер узла, на котором нужно выполнить команду (опционально)
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_user&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success remove"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg—  сообщение сервера о результате действия
