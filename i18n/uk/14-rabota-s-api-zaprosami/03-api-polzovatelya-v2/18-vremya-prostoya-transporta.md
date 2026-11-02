---
title: "Час простою транспорту"
---

Цей API повертає список періодів простоїв транспортного засобу за вибраний проміжок часу.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET

### Параметри запиту

Параметри передаються через рядок запиту або в тілі POST-запиту:

-   cmd=get\_idle — команда для отримання простоїв
    
-   time\_start — початок періоду (timestamp, unixtime)
    
-   time\_end — кінець періоду (timestamp, unixtime)
    
-   imei — IMEI пристрою моніторингу. Якщо пристроїв кілька, указуються через кому: imei=887556,io9987,76573
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад API-запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_idle&amp;time_start=16878956&amp;time_end=16878755&amp;imei=887556,io9987,76573&amp;node=1</div></td></tr></tbody></table>

### Приклад відповіді

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "2914": [</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": "1641814740", "idle_end": 1641814984},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641815547, "idle_end": 1641825619},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641827105, "idle_end": 1641893307},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641893623, "idle_end": 1641898037}</div><div>&nbsp; &nbsp; &nbsp; // ... решта записів ...</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату: 0 — успішно 1 — помилка
    
-   data — словник, де ключі — ідентифікатори транспортних засобів, а значення — список періодів простою:
    
-   idle\_start — час початку простою (timestamp)
    
-   idle\_end — час кінця простою (timestamp)
    
-   message — текстове повідомлення про результат запиту
