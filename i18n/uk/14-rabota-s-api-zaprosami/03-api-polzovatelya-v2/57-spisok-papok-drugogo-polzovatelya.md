---
title: "Список папок іншого користувача"
---

Цей API повертає папки, до яких має доступ указаний користувач.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET або POST

### Параметри запиту

-   cmd=get\_folders\_user — команда для отримання списку папок
    
-   user\_id — ідентифікатор користувача (обов’язковий для запиту папок іншого користувача)
    
-   node — номер вузла, на якому потрібно виконати команду
    

У POST-запиті параметри можна передавати в тілі у форматі JSON

### Приклади запитів

GET-запит:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?</span>cmd=get_folders_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

POST-запит:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_folders_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера
    
-   data — масив папок користувача:
    
-   id — ідентифікатор папки
    
-   name — назва папки
