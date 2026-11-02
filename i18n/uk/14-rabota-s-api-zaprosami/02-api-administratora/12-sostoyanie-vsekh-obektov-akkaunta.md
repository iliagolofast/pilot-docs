---
title: "Стан усіх об’єктів облікового запису"
---

Цей API надає список усіх транспортних засобів, прив’язаних до певного облікового запису, з їхнім поточним станом.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=vehicles — команда для отримання списку транспортних засобів
    
-   account\_id — ID облікового запису, для якого потрібно отримати список об’єктів
    
-   node — номер вузла, на якому потрібно виконати команду
    
    Додаткові параметри:
    
-   is\_show\_deleted — показати видалені ТЗ (0 — показати лише активні ТЗ, 1 — показати всі ТЗ, зокрема видалені)
    

Формат запитуваних даних — масив даних про транспортні засоби.

### Приклад запиту

Відображення видалених об’єктів:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehicles&amp;account_id=2238&amp;is_show_deleted=1&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 0,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM1100",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 69332,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "SSS",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.200989",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.634436",</div><div>&nbsp; &nbsp; &nbsp; "model": "HYUNDAI IX35",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79818775160",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 7,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457709039",</div><div>&nbsp; &nbsp; &nbsp; "type": "Static",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "356307045913463",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "IX35"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 0,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 1,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 8026,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM4200",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 17441,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.318118",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.995648",</div><div>&nbsp; &nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79110181596",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "100.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "350.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 9,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457726726",</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "354330031297057",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "nex"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

active — статус активності об’єкта: 1 — активний, 0 — неактивний

deleted — чи було об’єкт видалено: 0 — не видалено, 1 — видалено

agentid — унікальний номер пристрою

configuration — назва конфігурації GPS-обладнання (наприклад, Teltonika FM1100)

current\_mileage — пробіг транспортного засобу, км

dir — напрямок руху

driver\_name — ім’я водія (якщо призначено)

driver\_phone — телефон водія

folder — назва папки/категорії в системі

lat — географічна широта останньої позиції

lon — географічна довгота останньої позиції

model — модель ТЗ

msisdn — SIM-номер трекера

on — запалювання (1 — увімкнено, 0 — вимкнено)

partner\_price — ціна для партнера

price — роздрібна ціна

sats — кількість супутників, з якими встановлено контакт

speed — поточна швидкість, км/год

ts — часова мітка (timestamp, UNIX time) останнього оновлення позиції

type — тип об’єкта

uniqid — унікальний ідентифікатор пристрою (зазвичай IMEI)

vehiclenumber — номер ТЗ
