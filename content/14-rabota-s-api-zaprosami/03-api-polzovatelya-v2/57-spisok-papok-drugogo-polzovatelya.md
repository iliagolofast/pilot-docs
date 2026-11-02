---
title: "Список папок другого пользователя"
source: spisok_papok_drugogo_polzovatelya.html
---

Этот API возвращает папки, к которым имеет доступ указанный пользователь.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET или POST

### Параметры запроса

-   cmd=get\_folders\_user — команда для получения списка папок
    
-   user\_id — идентификатор пользователя (обязательный для запроса папок другого пользователя)
    
-   node — номер узла, на котором нужно выполнить команду
    

При POST-запросе параметры можно передавать в теле в формате JSON

### Примеры запросов

GET-запрос:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?</span>cmd=get_folders_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

POST-запрос:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_folders_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера
    
-   data — массив папок пользователя:
    
-   id — идентификатор папки
    
-   name — название папки
