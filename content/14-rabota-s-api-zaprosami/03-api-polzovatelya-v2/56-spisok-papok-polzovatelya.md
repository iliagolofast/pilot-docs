---
title: "Список папок пользователя"
source: spisok_papok_polzovatelya.html
---

Этот API возвращает список папок, к которым имеет доступ пользователь в договоре.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Метод запроса

GET или POST

### Параметры запроса

• cmd=get\_folders\_user — команда для получения списка папок

При POST-запросе параметры можно передавать в теле в формате JSON

-   node — номер узла, на котором нужно выполнить команду
    

### Пример GET-запроса

<table><tbody><tr><td><span></span></td><td><div>&nbsp;https://&lt;server_address&gt;/api/api.php?cmd=get_folders_user&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

• code — код результата (0 — успешная операция)

• msg — сообщение сервера

• data — массив папок пользователя:

• id — идентификатор папки

• name — название папки
