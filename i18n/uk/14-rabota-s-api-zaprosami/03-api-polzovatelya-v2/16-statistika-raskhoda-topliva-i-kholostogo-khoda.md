---
title: "Статистика витрати палива та холостого ходу"
---

Цей API отримує дані про те, скільки палива було витрачено за вибраний період часу, а також скільки часу транспортний засіб працював на холостому ходу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=fuelconsumtion — команда для отримання звіту
    
-   imei — унікальний ідентифікатор транспортного засобу
    
-   start — час початку вибірки (Unix timestamp)
    
-   stop — час закінчення вибірки (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=fuelconsumtion&amp;imei=7157153151020&amp;start=1644741475&amp;stop=1644914275&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "7157153151020": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "idle": 98872,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fuel consumed": 457.92</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 = успішно, інші значення = помилка)
    
-   data — дані за вибраним об’єктом:
    
-   idle — час роботи двигуна на холостому ходу (у секундах)
    
-   fuel consumed — обсяг спожитого палива за вказаний період (літри)
    
-   message — текстове повідомлення про результат
