---
title: "Создание папки"
source: sozdanie_papki.html
---

Этот API используется для создания новой папки в системе. Можно указать родительскую папку, название новой папки, а также права доступа для пользователей.

## Как получить данные

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

Обязательные:

-   cmd=addfolder — команда для создания папки
    
-   account\_id — ID договора
    
-   parent\_id — ID родительской папки
    
-   folder\_name — имя создаваемой папки
    
-   node — номер узла, на котором нужно выполнить команду
    

Дополнительные:

-   users— список ID пользователей через запятую, которым нужно дать права на эту папку
    
-   Значение users=admins — дает права всем пользователям договора с ролью администратора
    
    Если параметр не задан или пустой — права копируются из родительской папки
    

### Примеры запросов

Права на папку всем администраторам:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=admins&amp;node=1</div></td></tr></tbody></table>

Права на папку конкретным пользователям:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=123,212,432&amp;node=1</div></td></tr></tbody></table>

Папка создается с правами родительской папки (по умолчанию):

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Создана новая папка my_folder с идентификатором 27330"</div><div>}</div></td></tr></tbody></table>
