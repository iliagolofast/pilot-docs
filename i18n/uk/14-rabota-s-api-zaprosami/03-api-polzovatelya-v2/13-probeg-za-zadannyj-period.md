---
title: "Пробіг за заданий період"
---

Цей API повертає пробіг і мотогодини транспортного засобу за вибраний проміжок часу.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET

### Параметри запиту

-   cmd=istatus — команда для отримання пробігу
    
-   imei — ідентифікатор об’єкта в системі
    
-   start — початок інтервалу (Unix timestamp)
    
-   stop — кінець інтервалу (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;imei=6794i&amp;start=1664917200&amp;stop=1665003600&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "run": 126.79500000000007,</div><div>&nbsp; "run_by_can": 0,</div><div>&nbsp; "motorhours": 9897,</div><div>&nbsp; "unixtimestamp_start": 1664917200,</div><div>&nbsp; "unixtimestamp_stop": 1665003600</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   run — пробіг за період, км
    
-   run\_by\_can — пробіг за даними CAN, км
    
-   motorhours — мотогодини за період, секунди
    
-   unixtimestamp\_start — початок інтервалу
    
-   unixtimestamp\_stop — кінець інтервалу
