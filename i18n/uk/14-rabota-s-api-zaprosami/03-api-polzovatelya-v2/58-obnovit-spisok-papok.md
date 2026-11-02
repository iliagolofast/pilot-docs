---
title: "Оновити список папок"
---

Цей API дає змогу змінити набір папок, до яких має доступ конкретний користувач.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

POST

### Параметри запиту

-   cmd=update\_user\_folders — команда для оновлення списку папок
    
-   folders — список ID папок через кому, які потрібно призначити користувачеві
    
-   user\_id — ідентифікатор користувача, для якого змінюються папки
    

Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_folders",</div><div>&nbsp; &nbsp; "folders": "1,11",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповіді на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера про результат дії
