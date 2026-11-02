---
title: "Список доступних акаунтів"
---

Цей API використовується для отримання списку акаунтів, до яких має доступ поточний користувач.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET або POST

### Параметри запиту

-   cmd=get\_account\_map — команда API для отримання списку доступних акаунтів
    
-   node —  номер вузла, на якому виконується команда
    

### Приклад GET-запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_map&amp;node=1</div></td></tr></tbody></table>

### Приклад POST-запиту

Тіло запиту (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_map"</div><div>}</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"account_id": 1005},</div><div>&nbsp; &nbsp; {"account_id": 1000}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання (0 означає успішну операцію)
    
-   data — список доступних акаунтів користувача
    
-   account\_id — ідентифікатор акаунта (договору)
