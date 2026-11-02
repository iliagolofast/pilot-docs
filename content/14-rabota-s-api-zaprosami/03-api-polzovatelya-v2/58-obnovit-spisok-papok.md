---
title: "Обновить список папок"
source: obnovit_spisok_papok.html
---

Этот API позволяет изменить набор папок, к которым имеет доступ конкретный пользователь.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

POST

### Параметры запроса

-   cmd=update\_user\_folders — команда для обновления списка папок
    
-   folders — список ID папок через запятую, которые нужно назначить пользователю
    
-   user\_id — идентификатор пользователя, для которого изменяются папки
    

Пример запроса

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_folders",</div><div>&nbsp; &nbsp; "folders": "1,11",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответе на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера о результате действия
