---
title: "Оновити список договорів користувача"
---

Цей API дає змогу призначити користувачеві доступ до певних договорів.

Наприклад, якщо в системі у партнера кілька договорів, то адміністратор може вибрати, до яких саме матиме доступ конкретний користувач.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

POST

### Параметри запиту

-   cmd=update\_user\_accounts\_map — команда для зміни списку доступних договорів
    
-   accounts — список ідентифікаторів договорів через кому
    
    <table><tbody><tr><td><span></span></td><td><div>Договори (accounts) мають належати тому самому партнеру, якому належить користувач.</div></td></tr></tbody></table>
    
-   user\_id — ідентифікатор користувача, якому призначається доступ
    
-   node — номер вузла, на якому виконується команда
    
    <table><tbody><tr><td><span></span></td><td><div>Якщо в користувача в системі партнер дорівнює 0 → призначити договори неможливо (<a href="../../panel-administratora/administrator/account-mapping.html"><span>мапінг</span></a> не работает).</div></td></tr></tbody></table>
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_accounts_map",</div><div>&nbsp; &nbsp; "accounts": "1005",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера
