---
title: "Получение списка папок"
source: poluchenie_spiska_papok.html
---

Этот API используется для получения списка папок. В ответе возвращается список с уникальными ID папок, их названиями и родительскими папками.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

Обязательные:

-   cmd=getfolders — команда для получения списка папок
    
-   node — номер узла, на котором нужно выполнить команду
    

Дополнительные:

-   account\_id — ID аккаунта, для которого нужно получить список папок
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=getfolders&amp;account_id=3925&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "9793": {"name": "АС-Капитал", "parent": "Колонна №1"},</div><div>&nbsp; "11462": {"name": "Ленэнерго", "parent": "Колонна №1"},</div><div>&nbsp; "12551": {"name": "Вектор", "parent": "test123"},</div><div>&nbsp; "16453": {"name": "test_alex", "parent": "1april"},</div><div>&nbsp; "18492": {"name": "31Novfolder", "parent": "Колонна №1"}</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   ключ (например, "9793") — уникальный ID папки
    
-   name — название папки
    
-   parent — родительская папка, к которой относится текущая папка
