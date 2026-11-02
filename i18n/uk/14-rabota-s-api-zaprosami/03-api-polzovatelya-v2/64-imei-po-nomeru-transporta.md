---
title: "IMEI за номером транспорту"
---

Цей API використовується для визначення IMEI пристрою, встановленого на транспортному засобі, за його номером.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=get\_imei — команда для API
    
-   vehnum — номер транспорту
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_imei&amp;vehnum=IX35&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "imei": "356307045913463"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 = успіх)
    
-   msg — повідомлення сервера
    
-   imei — IMEI пристрою, встановленого в транспортному засобі
