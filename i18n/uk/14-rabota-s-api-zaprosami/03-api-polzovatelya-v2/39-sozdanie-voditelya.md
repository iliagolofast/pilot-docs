---
title: "Створення водія"
---

Цей API дає змогу додати нового водія до системи або оновити дані наявного водія. З його допомогою можна вказати ПІБ, код iButton, контактну інформацію, номер водійського посвідчення та список об’єктів, до яких водій матиме доступ.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = drivers\_add — команда для додавання або оновлення водія
    
-   name — ім’я водія (ПІБ)
    
-   code — код iButton водія (обов’язковий)
    
-   description — опис водія (необов’язковий)
    
-   phone — номер телефону водія (необов’язковий)
    
-   license — номер водійського посвідчення (необов’язковий)
    
-   email — адреса електронної пошти
    
-   access — список ідентифікаторів об’єктів (agent\_id), до яких дозволено доступ водієві, через кому
    
-   node — номер вузла, на якому потрібно виконати команду
    

<table><tbody><tr><td><span></span></td><td><div>Якщо водій із такими параметрами вже існує в системі, його дані буде оновлено. Якщо ні — буде створено нового водія</div></td></tr></tbody></table>

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_add&amp;name=NewDriverName&amp;code=123456&amp;description=DESCR&amp;phone=122212343&amp;license=rrr3335552&amp;email=new@email.com&amp;access=1122,3344&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; "id": 16990,</div><div>&nbsp;&nbsp; &nbsp; "name": "NewDriverName",</div><div>&nbsp;&nbsp; &nbsp; "code": "123456",</div><div>&nbsp;&nbsp; &nbsp; "description": "DESCR",</div><div>&nbsp;&nbsp; &nbsp; "phone": "122212343",</div><div>&nbsp;&nbsp; &nbsp; "license": "rrr3335552",</div><div>&nbsp;&nbsp; &nbsp; "email": "new@email.com",</div><div>&nbsp;&nbsp; &nbsp; "access": [1122, 3344]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   id— унікальний ідентифікатор водія
    
-   name— ПІБ водія
    
-   code— код iButton водія
    
-   description— опис водія
    
-   phone— номер телефону
    
-   license— номер водійського посвідчення
    
-   email— адреса електронної пошти
    
-   access— список ідентифікаторів об’єктів, до яких дозволено доступ
