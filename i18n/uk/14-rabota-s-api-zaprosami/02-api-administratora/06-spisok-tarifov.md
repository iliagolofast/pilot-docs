---
title: "Список тарифів"
---

За допомогою цього API отримуйте список тарифів, доступних для облікового запису, з інформацією про валюту, ціну й опис.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=pricelist —  команда для отримання списку тарифів
    
-   node — номер вузла, на якому потрібно виконати команду
    
    Додатково:
    
-   coden (необов’язково) — код валюти:
    
    — цифровий (наприклад, 840 для USD, 810 для RUB)
    
    — літерний (наприклад, USD або RUR)
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=pricelist&amp;coden=840&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 143,</div><div>&nbsp; &nbsp; &nbsp; "code": "840",</div><div>&nbsp; &nbsp; &nbsp; "currency": 2,</div><div>&nbsp; &nbsp; &nbsp; "descr": "3 dollars per property per month",</div><div>&nbsp; &nbsp; &nbsp; "name": "US dollar",</div><div>&nbsp; &nbsp; &nbsp; "price": "3.00"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання запиту (0 — успішно)
    
-   data — масив тарифів:
    
-   id — унікальний ідентифікатор тарифу
    
-   code — код валюти (цифровий)
    
-   currency — внутрішній ідентифікатор валюти
    
-   descr — опис тарифу
    
-   name — назва тарифу (наприклад, "US dollar")
    
-   price — вартість тарифу в зазначеній валюті
    
-   message — текстове повідомлення про результат запиту
