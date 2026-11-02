---
title: "Удаление папки"
source: udalenie_papki_.html
---

Этот API удаляет указанную папку и перемещает все транспортные средства из неё в корневую папку.

## Как получить данные

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=deletefolder — команда для удаления папки
    
-   folder\_id— идентификатор папки, которую нужно удалить
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=deletefolder&amp;folder_id=545&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Папка успешно удалена"</div><div>}</div></td></tr></tbody></table>
