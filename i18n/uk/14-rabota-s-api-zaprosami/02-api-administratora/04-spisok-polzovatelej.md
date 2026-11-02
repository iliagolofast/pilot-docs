---
title: "Список користувачів"
---

Цей API використовується для отримання списку користувачів конкретного облікового запису з основною інформацією про кожного користувача.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=users — команда для отримання списку користувачів
    
-   accountid — ID облікового запису, для якого запитуються користувачі
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=users&amp;accountid=56832</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"data": [</div><div>&nbsp;{</div><div>&nbsp;"id": 88977,</div><div>&nbsp;"name": "valera_test",</div><div>&nbsp;"login": "valera17totsenko@gmail.com",</div><div>&nbsp;"passwd": "123456",</div><div>&nbsp;"info": null,</div><div>&nbsp;"email": "valera17totsenko@gmail.com",</div><div>&nbsp;"lang": "en",</div><div>&nbsp;"roleid": 0</div><div>&nbsp;}</div><div>&nbsp;],</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   id — ID користувача
    
-   name — відображуване ім’я
    
-   login — логін
    
-   passwd — пароль
    
-   info — дод. інформація про користувача
    
-   email — адреса електронної пошти
    
-   lang — мова інтерфейсу користувача
    
-   roleid — ID ролі
