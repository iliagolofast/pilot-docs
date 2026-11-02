---
title: "Видалення користувача"
---

Цей API видаляє наявного користувача в системі PILOT за його ідентифікатором.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

DELETE

### Параметри запиту

-   cmd=remove\_user — команда для видалення користувача
    
-   user\_id — ідентифікатор користувача, якого потрібно видалити
    
-   node — номер вузла, на якому потрібно виконати команду (необов’язково)
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_user&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success remove"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg—  повідомлення сервера про результат дії
