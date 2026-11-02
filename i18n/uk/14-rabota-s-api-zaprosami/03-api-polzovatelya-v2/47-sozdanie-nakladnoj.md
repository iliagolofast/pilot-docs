---
title: "Створення накладної"
---

Цей API створює нову накладну на заданий період часу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=add\_waybill — команда для додавання накладної
    
-   ts — час початку (Unix timestamp)
    
-   te — час завершення (Unix timestamp)
    
-   agent\_id — ідентифікатор агента
    
-   name — назва накладної
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;name=test+bill1&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "ts": 1596022528,</div><div>&nbsp; &nbsp; "te": 1596488400,</div><div>&nbsp; &nbsp; "agent_id": 44841,</div><div>&nbsp; &nbsp; "account_id": 3934,</div><div>&nbsp; &nbsp; "waybill": {</div><div>&nbsp; &nbsp; &nbsp; "name": "test bill1"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 = успіх)
    
-   data — об’єкт з даними створеної накладної
    
-   ts — час початку накладної
    
-   te — час завершення накладної
    
-   agent\_id — ідентифікатор агента
    
-   account\_id — ідентифікатор акаунта
    
-   waybill.name — назва накладної
