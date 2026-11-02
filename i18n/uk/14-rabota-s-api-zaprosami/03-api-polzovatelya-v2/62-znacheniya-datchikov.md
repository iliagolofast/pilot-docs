---
title: "Значення датчиків"
---

Цей API отримує значення дискретних датчиків (рівень палива, температура, вага тощо) за вказаний період часу.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Метод запиту

GET

### Параметри запиту

-   cmd =get\_discrete\_sensor\_data — команда для отримання даних датчиків
    
-   imei — ідентифікатор об’єкта
    
-   start — початок періоду (Unix timestamp)
    
-   stop — кінець періоду (Unix timestamp)
    
-   tag\_id — ідентифікатор датчика
    
-   agent\_id — ідентифікатор агента (необов’язковий)
    
-   node — номер вузла, на якому потрібно виконати команду
    

<table><tbody><tr><td><span></span></td><td><div>Дані за датчиками можна отримувати лише за 24 години.</div></td></tr></tbody></table>

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_discrete_sensor_data&amp;imei=350424062310402&amp;start=1677682645&amp;stop=1677761845&amp;tag_id=1158&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "sensor_data": {</div><div>&nbsp; &nbsp; "966960": {</div><div>&nbsp; &nbsp; &nbsp; "1677682772": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682772,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "95.09",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "0"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "1677682950": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sensor_id": 966960,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "unixtimestamp": 1677682950,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "calibrated_value": "94.9",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "speed": "12"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   sensor\_id — ідентифікатор датчика
    
-   unixtimestamp — час запису значення (Unix timestamp)
    
-   calibrated\_value — відкаліброване значення датчика (наприклад, літри палива або градуси температури)
    
-   speed — швидкість об’єкта в момент виміру
