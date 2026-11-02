---
title: "Зміна логіна та пароля користувача"
---

Цей API дає змогу змінити логін і пароль наявного користувача в системі PILOT.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET

### Параметри запиту

-   cmd=update\_user\_auth — команда для редагування авторизаційних даних
    
-   login — новий логін користувача
    
-   password — новий пароль користувача
    
-   user\_id — ідентифікатор користувача, дані якого потрібно змінити
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=update_user_auth&amp;login=TestAPI&amp;password=qwerty&amp;user_id=48&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера про результат дії
