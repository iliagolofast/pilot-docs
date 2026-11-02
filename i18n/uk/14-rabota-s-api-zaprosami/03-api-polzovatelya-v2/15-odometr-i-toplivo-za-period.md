---
title: "Одометр і паливо за період"
---

Цей API отримує інформацію про пробіг (показання одометра) і витрату палива транспортного засобу за вибраний проміжок часу.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET

### Параметри запиту

-   cmd=odo\_and\_fuel — команда для отримання даних одометра й палива
    
-   imei — ідентифікатор пристрою (ID об’єкта)
    
-   start — час початку періоду у форматі Unix timestamp
    
-   stop — час кінця періоду у форматі Unix timestamp
    
-   node — номер вузла, на якому виконується команда
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=odo_and_fuel<span>&amp;start=1767214800&amp;stop=1767560400&amp;imei=861076084529922&amp;node=6</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "ok",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fuel": 7.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "start_odo": 407121.6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_odo": 407229.4</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера
    
-   fuel — кількість витраченого палива за період
    
-   start\_odo — показання одометра на початку періоду
    
-   stop\_odo — показання одометра наприкінці періоду
