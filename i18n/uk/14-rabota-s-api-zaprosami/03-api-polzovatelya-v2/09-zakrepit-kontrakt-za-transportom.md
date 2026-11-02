---
title: "Закріпити контракт за транспортом"
---

Цей API прив’язує контракт до транспортного засобу, указуючи його держномер, дату початку дії, ім’я контракту та відстань.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=link\_contract — команда для прив’язування контракту
    
-   PlateNum — держномер транспортного засобу
    
-   Date — час початку дії контракту (Unix timestamp)
    
-   Name — назва контракту
    
-   Distance — відстань (наприклад, пробіг за контрактом)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=link_contract&amp;PlateNum=test12345&amp;Distance=1111&amp;Date=1623927270&amp;Name=1212&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "The linking is successful"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера про результат дії
