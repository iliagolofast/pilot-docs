---
title: "Додавання платежів"
---

Цей API використовується для додавання інформації про платежі за договором. Можна вказати суму, дату, ID платежу в зовнішній системі та опис.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/ax/api.php?

### Параметри запиту

Обов’язкові:

-   cmd=payment — команда для додавання платежу
    
-   inn — ІПН договору (унікальний ідентифікатор)
    
-   sum — сума платежу (формат dd.dd)
    
-   id — ID платежу в зовнішній системі
    
-   date — дата платежу (формат DDMMYYYY)
    
-   descr — опис платежу (рядок), наприклад: «платіж за підключення»
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=payment&amp;inn=123123123&amp;sum=10.00&amp;id=124&amp;date=04042016&amp;descr=test%20payment&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Payment inserted successfully",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "payment_id": 124,</div><div>&nbsp; &nbsp; "inn": "123123123",</div><div>&nbsp; &nbsp; "sum": 10.00,</div><div>&nbsp; &nbsp; "date": "04042016",</div><div>&nbsp; &nbsp; "descr": "test payment"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>
