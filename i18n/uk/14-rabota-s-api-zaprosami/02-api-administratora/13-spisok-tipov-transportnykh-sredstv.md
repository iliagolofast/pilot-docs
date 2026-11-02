---
title: "Список типів транспортних засобів"
---

Використовуйте цей API для отримання списку всіх типів транспортних засобів у договорі.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=vehtypelist — команда для отримання списку типів ТЗ
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehtypelist&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "Car"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "Truck"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 3,</div><div>&nbsp; &nbsp; &nbsp; "name": "Passenger"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 4,</div><div>&nbsp; &nbsp; &nbsp; "name": "Agrimotor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання запиту (0 — успішно)
    
-   data — масив типів ТЗ:
    
-   identifier — унікальний ідентифікатор типу ТЗ
    
-   name — назва типу ТЗ
    
-   message — текстове повідомлення про результат запиту
