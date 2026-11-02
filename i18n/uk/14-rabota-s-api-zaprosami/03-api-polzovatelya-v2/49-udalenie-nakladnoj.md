---
title: "Видалення накладної"
---

Цей API видаляє наявну накладну за вказаний період часу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=remove\_waybill — команда для видалення накладної
    
-   ts — час початку (Unix timestamp)
    
-   te — час завершення (Unix timestamp)
    
-   agent\_id — ідентифікатор агента
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": 1</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code— код результату (0 = успіх)
    
-   data— результат видалення (1 = успішно видалено)
