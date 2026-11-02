---
title: "Призначити водія на транспорт"
---

Цей API закріплює водія за конкретним транспортним засобом за допомогою його ідентифікатора (IMEI) та мітки (ключа).

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=linkdriver — команда для API, що виконує прив’язку водія
    
-   imei — унікальний ідентифікатор транспортного засобу в системі
    
-   driver — ПІБ водія
    
-   driverkey— номер ключа (мітки) водія
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=linkdriver&amp;imei=548545218454&amp;driver=ADAS+driver&amp;driverkey=89185717259&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": [],</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успіх, інше значення — помилка)
    
-   data — додаткові дані (у цьому разі порожній масив)
    
-   message — текстове повідомлення від сервера (наприклад, «success»)
