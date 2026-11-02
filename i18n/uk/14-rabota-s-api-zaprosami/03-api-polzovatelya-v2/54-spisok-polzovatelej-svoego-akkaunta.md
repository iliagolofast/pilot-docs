---
title: "Список користувачів власного акаунта"
---

Цей API використовується для отримання списку всіх користувачів, зареєстрованих у вашому акаунті.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET або POST

### Параметри запиту

-   cmd=get\_account\_user\_list — команда API для отримання списку користувачів акаунта
    
-   node — номер вузла, на якому виконується команда
    

### Приклад GET-запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_user_list&amp;node=1</div></td></tr></tbody></table>

### Приклад POST-запиту

Тіло запиту (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_user_list"</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 19,</div><div>&nbsp; &nbsp; &nbsp; "roleid": 1,</div><div>&nbsp; &nbsp; &nbsp; "info": "",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "123123",</div><div>&nbsp; &nbsp; &nbsp; "email": "testTOTP@testTOTP.com",</div><div>&nbsp; &nbsp; &nbsp; "name": "dasd",</div><div>&nbsp; &nbsp; &nbsp; "account_id": 1000,</div><div>&nbsp; &nbsp; &nbsp; "lang": "en",</div><div>&nbsp; &nbsp; &nbsp; "parent_id": 2</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 = успішна операція)
    
-   data — масив користувачів акаунта:
    
-   id — ідентифікатор користувача
    
-   roleid — роль користувача (0 — Admin, 1 — User, 2 — Logistic тощо)
    
-   info — додаткова інформація
    
-   msisdn — номер телефону
    
-   email— Email користувача
    
-   name — ім’я користувача
    
-   account\_id — ідентифікатор акаунта, до якого належить користувач
    
-   lang — мова інтерфейсу користувача
    
-   parent\_id — ідентифікатор батьківського користувача (якщо є)
