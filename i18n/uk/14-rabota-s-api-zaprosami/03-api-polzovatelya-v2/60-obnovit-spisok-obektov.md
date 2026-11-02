---
title: "Оновити список об’єктів"
---

Цей API призначає користувачеві доступ лише до вибраних транспортних засобів.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

POST

### Параметри запиту

-   cmd=update\_user\_vehicles — команда для зміни списку об’єктів
    
-   vehicles — список ідентифікаторів об’єктів (ID транспортних засобів) через кому.
    
-   user\_id — ідентифікатор користувача, якому оновлюється доступ
    
-   node — номер вузла, на якому виконується команда
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_vehicles",</div><div>&nbsp; &nbsp; "vehicles": "2,18",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера
