---
title: "Оновлення додаткових полів транспорту"
---

Цей API змінює значення додаткових [полів](../../panel-administratora/dogovor/redaktor-polej-transportnogo-sredstva.html) транспорту одним запитом за agent\_id або imei. Можна змінювати одразу всі поля або їх частину, кількість полів не обмежена.

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php

### Заголовки

Content-Type: application/json

Authorization: Basic <ваші\_облікові\_дані>

### Параметри запиту

-   cmd=agent\_update\_custom\_fields — команда для API
    
-   agent\_id — ідентифікатор транспортного засобу (якщо не використовуєте imei).
    
-   imei — IMEI пристрою ТЗ (якщо не використовуєте agent\_id).
    
-   custom\_fields — об’єкт з парами ключ-значення для оновлення додаткових полів
    

У custom\_fields можна вказувати будь-яку кількість полів, наприклад extra\_field1, extra\_field2, … extra\_fieldN (за умови, що ці поля створено в обліковому записі). Значення полів можуть бути числами, рядками або булевими значеннями

### Приклад запиту

Оновлення кількох полів за agent\_id:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"agent_id": 30547,</div><div>"custom_fields": {</div><div>"extra_field1": "Путевой лист №123",</div><div>"extra_field2": "2025-11-01",</div><div>"extra_field7": "+79000000000"</div><div>}</div><div>}'</div></td></tr></tbody></table>

Оновлення за imei:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \'</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"imei": "359339099999999",</div><div>"custom_fields": {</div><div>"extra_field3": "Пропуск №A12345",</div><div>"extra_field4": "2025-12-31"</div><div>}</div><div>}'</div></td></tr></tbody></table>

### Приклад відповіді

<table><tbody><tr><td><span></span></td><td><div>{</div><div>"code": 1,</div><div>"msg": "OK"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання: 1 — успішно, 0 — помилка
    
-   msg — текстовий опис результату (наприклад, "OK" або повідомлення про помилку)
