---
title: "Отримання інформації про об’єкт"
---

Цей API використовується для отримання повної інформації про транспортний засіб.

Можна запросити дані як за agent\_id, так і за IMEI-номером пристрою.

У відповіді повертається докладна інформація: держномер, витрата палива, ліміти швидкості, VIN, модель, налаштування конфігурації, прив’язаний водій тощо.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

Обов’язкові:

-   cmd=vehinfo — команда для отримання інформації про ТЗ
    
-   node — номер вузла, на якому потрібно виконати команду
    

Має бути вказано один із цих параметрів:

-   agentid — ідентифікатор машини (agent\_id)
    
-   imei — унікальний IMEI-номер пристрою
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehinfo&amp;agentid=81181&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "ownerid": 5374,</div><div>&nbsp; &nbsp; "vehiclenumber": "Howen C",</div><div>&nbsp; &nbsp; "typeid": 1,</div><div>&nbsp; &nbsp; "summer_fuel": "10",</div><div>&nbsp; &nbsp; "winter_fuel": "10",</div><div>&nbsp; &nbsp; "idle_fuel": "2",</div><div>&nbsp; &nbsp; "time_zone": "Europe/Moscow",</div><div>&nbsp; &nbsp; "speed_limit": 0,</div><div>&nbsp; &nbsp; "agentid": 81181,</div><div>&nbsp; &nbsp; "account_id": 3925,</div><div>&nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; "year": "1900",</div><div>&nbsp; &nbsp; "vin": "",</div><div>&nbsp; &nbsp; "fuel_type": "50",</div><div>&nbsp; &nbsp; "driver_name": "Test",</div><div>&nbsp; &nbsp; "driver_phone": "12121212121"</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   ownerid — ID власника
    
-   vehiclenumber — держномер або назва ТЗ
    
-   typeid — тип транспортного засобу
    
-   summer\_fuel / winter\_fuel / idle\_fuel — норми витрати палива (літо, зима, холостий хід)
    
-   time\_zone — часовий пояс, у якому використовується ТЗ
    
-   speed\_limit — обмеження швидкості
    
-   account\_id — ID договору, до якого прив’язано ТЗ
    
-   model / year / vin — модель, рік випуску та VIN автомобіля
    
-   fuel\_type — тип палива
    
-   driver\_name / driver\_phone — ПІБ і телефон закріпленого водія
    
-   config — JSON з додатковою конфігурацією (налаштування щодо палива, мотогодин, обмежень тощо)
