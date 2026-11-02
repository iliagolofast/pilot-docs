---
title: "Список водіїв"
---

Цей API призначений для отримання інформації про водіїв, зареєстрованих в акаунті. З його допомогою можна отримати дані про кожного водія, зокрема ПІБ, контактну інформацію, опис, права доступу та ідентифікатори.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = drivers\_list— команда для отримання списку водіїв
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_list&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 317,</div><div>&nbsp; &nbsp; &nbsp; "name": "Ivan Ivanov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #3",</div><div>&nbsp; &nbsp; &nbsp; "phone": "798345546",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": "",</div><div>&nbsp; &nbsp; &nbsp; "access": []</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1122,</div><div>&nbsp; &nbsp; &nbsp; "name": "Andrey Petrov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #1",</div><div>&nbsp; &nbsp; &nbsp; "phone": "+525531696255",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": null,</div><div>&nbsp; &nbsp; &nbsp; "access": [1122]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   id — ідентифікатор водія
    
-   name — ПІБ водія
    
-   code — код водія (якщо є)
    
-   description — опис водія
    
-   phone — номер телефону
    
-   license — дані водійського посвідчення
    
-   email — адреса електронної пошти
    
-   access — список ID ресурсів або об’єктів, до яких має доступ водій
