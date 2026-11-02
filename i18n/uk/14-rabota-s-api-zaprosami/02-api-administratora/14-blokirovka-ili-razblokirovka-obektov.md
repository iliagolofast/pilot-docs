---
title: "Блокування або розблокування об’єктів"
---

Цей API блокує або розблоковує об’єкти за параметрами agent\_id, imei або account\_id. Залежно від переданого статусу машину буде заблоковано або активовано. Блокування чи розблокування можна виконати на основі ідентифікаторів, таких як агент, IMEI або номер договору.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Метод

POST

### Параметри запиту

Обов’язкові:

-   cmd=setvehblock  — команда для блокування або розблокування машини.
    
-   status —  статус блокування. Значення: 0— заблокована; 1— активна (розблокована)
    
-   node — номер вузла, на якому потрібно виконати команду
    

Має бути вказано один із цих параметрів:

-   agentid — ідентифікатор агента
    
-   imei — IMEI-номер пристрою
    
-   accountid — номер договору
    

### Приклади запиту

Блокування машини за IMEI:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=0&amp;imei=1231231231&amp;node=1</div></td></tr></tbody></table>

Розблокування машини за agentid:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=setvehblock&amp;status=1&amp;agentid=2914&amp;node=1</div></td></tr></tbody></table>

Відповідь

У разі успішного блокування або розблокування машини ви отримаєте таку відповідь:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "status": 1</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код відповіді. Значення:
    
    — 0 — операція пройшла успішно
    
    — можливі інші значення: помилки, такі як 400 або 500, якщо виникли проблеми.
    
-   data — дані про блокування/розблокування
    
-   agentid — Ідентифікатор агента, для якого було змінено статус
    
-   status — Статус машини: 0— заблокована; 1— активна (розблокована)
    
-   msg — повідомлення про успішність виконання операції
