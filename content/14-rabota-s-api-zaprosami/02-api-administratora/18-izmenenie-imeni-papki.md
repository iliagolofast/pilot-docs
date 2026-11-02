---
title: "Изменение имени папки"
source: izmenenie_imeni_papki.html
---

С помощью этого API можно изменить имя существующей папки. Для этого необходимо отправить запрос с параметрами, указывающими на папку, имя которой нужно изменить, и новое имя для неё.

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php

### Метод

 POST

### Параметры запроса

-   cmd=editfoldername — команда для изменения имени папки
    
-   folder\_id — идентификатор папки, имя которой необходимо изменить
    
-   new\_folder\_name  — новое имя для папки
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=editfoldername&amp;folder_id=454545&amp;new_folder_name=testname&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Имя папки успешно обновлено"</div><div>}</div></td></tr></tbody></table>
