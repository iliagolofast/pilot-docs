---
title: "Список часових поясів"
---

Цей API повертає список доступних часових поясів, які можна використовувати під час налаштування користувача або об’єкта.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET або POST

### Параметри запиту

-   cmd=get\_time\_zones — команда для отримання списку часових поясів
    
-   node — номер вузла, на якому виконується команда
    

### Приклад GET-запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_time_zones&amp;node=1</div></td></tr></tbody></table>

### Приклад POST-запиту

Тіло запиту (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_time_zones"</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "text": "Africa/Abidjan" },</div><div>&nbsp; &nbsp; { "text": "Africa/Accra" },</div><div>&nbsp; &nbsp; { "text": "Africa/Addis Ababa" },</div><div>&nbsp; &nbsp; { "text": "Africa/Algeria" },</div><div>&nbsp; &nbsp; { "text": "Africa/Asmara" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bamako" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bangui" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 = успішна операція)
    
-   data — список доступних часових поясів
    
-   text — назва часового поясу у форматі Region/City
