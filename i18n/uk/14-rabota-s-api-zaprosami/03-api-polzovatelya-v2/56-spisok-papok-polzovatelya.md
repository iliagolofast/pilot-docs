---
title: "Список папок користувача"
---

Цей API повертає список папок, до яких користувач має доступ у договорі.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET або POST

### Параметри запиту

• cmd=get\_folders\_user — команда для отримання списку папок

У POST-запиті параметри можна передавати в тілі у форматі JSON

-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад GET-запиту

<table><tbody><tr><td><span></span></td><td><div>&nbsp;https://&lt;server_address&gt;/api/api.php?cmd=get_folders_user&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"id":1,"name":"DEMO"},</div><div>&nbsp; &nbsp; {"id":6,"name":"ИП Емельянов"},</div><div>&nbsp; &nbsp; {"id":11,"name":"FOLDER1"},</div><div>&nbsp; &nbsp; {"id":12,"name":"FOLDER2"}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

• code — код результату (0 — успішна операція)

• msg — повідомлення сервера

• data — масив папок користувача:

• id — ідентифікатор папки

• name — назва папки
