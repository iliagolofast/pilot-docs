---
title: "Додавання заправки за карткою"
---

Цей API додає запис про витрату пального за карткою, зокрема інформацію про кількість пального, вартість, місце та водія.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

Обов’язкові:

-   cmd=add\_fuel\_transaction — команда для додавання транзакції
    
-   card\_num — номер паливної картки
    
-   operation — тип операції (наприклад, refill)
    
-   unixtimestamp — час транзакції у форматі Unix timestamp
    
-   place — місце проведення операції
    
-   azs — назва АЗС
    
-   liters — кількість літрів пального
    
-   fuel — тип пального
    
-   price — ціна без знижки
    
-   sum — сума без знижки
    
-   node — номер вузла, на якому потрібно виконати команду
    

Необов’язкові:

-   priceg — ціна зі знижкою
    
-   sumg — сума зі знижкою
    
-   driver — ПІБ водія
    
-   lat — широта місця транзакції
    
-   lon — довгота місця транзакції
    
-   info — додаткова інформація
    
-   internal\_id — внутрішній ідентифікатор транзакції
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_fuel_transaction&amp;node=1</div></td></tr></tbody></table>

Приклад тіла запиту (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "card_num": "1234567890123456",</div><div>&nbsp; "operation": "refill",</div><div>&nbsp; "unixtimestamp": 1695000000,</div><div>&nbsp; "place": "Main street 12",</div><div>&nbsp; "azs": "WOG",</div><div>&nbsp; "liters": 50,</div><div>&nbsp; "fuel": "Diesel",</div><div>&nbsp; "price": 55.0,</div><div>&nbsp; "sum": 2750.0,</div><div>&nbsp; "driver": "Ivan Ivanov"</div><div>}</div></td></tr></tbody></table>

Відповідь

{

  "code": 0,

  "msg": "OK"

}

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера про результат дії
