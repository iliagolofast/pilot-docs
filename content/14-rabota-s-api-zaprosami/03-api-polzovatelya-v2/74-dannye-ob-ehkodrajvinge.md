---
title: "Данные об экодрайвинге"
source: dannye_ob_ehkodrajvinge.html
---

Этот API позволяет вам получать информацию об экологичности вождения транспортных средств за указанный период. 

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

Чтобы получить нужные данные, добавьте к адресу запроса параметры. Параметры указываются после знака вопроса «?» и разделяются знаком «&».

-   cmd = mileco\_drive — команда для получения данных о поездке 
    
-   start — дата и время начала периода, за который вы хотите получить данные
    
-   stop — дата и время окончания периода
    

Время указывается в формате Unixtimestamp — это количество секунд, прошедших с 1 января 1970 года.

-   vehid — идентификатор транспортного средства, по которому необходимо получить данные. Если  нужно получить данные об одной машине —  введите её  ID, если о нескольких машинах — перечислите их ID через запятую.
    
    <table><tbody><tr><td><span></span></td><td><div>Если вы не укажете параметр&nbsp;vehid, система автоматически выдаст информацию по всем машинам, закреплённым за вашим аккаунтом.</div></td></tr></tbody></table>
    
-   imei — уникальный номер GPS-трекера транспортного средства. Используйте этот параметр для получения данных по конкретному трекеру.
    
    <table><tbody><tr><td><span></span></td><td><div>При указании&nbsp;imei&nbsp;параметр&nbsp;vehid&nbsp;указывать не нужно.</div></td></tr></tbody></table>
    

Пример API-запроса с imei:

<table><tbody><tr><td><span></span></td><td><div><span>https://</span><span>&lt;</span><span>address</span><span>&gt;</span><span>/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;imei=86645655031889725</span></div></td></tr></tbody></table>

-   time\_diff\_type — группировка данных по времени. По умолчанию данные собираются за каждый день.
    
-   time\_diff\_type=1 — данные будут собраны за каждые 7 дней
    
-   time\_diff\_type=2 — данные будут собраны за каждый месяц
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>&nbsp;<span>https://&lt;url&gt;/api/api.php?cmd=mileco_drive&amp;start=1738113401&amp;stop=1738631801&amp;time_diff_type=1&amp;</span>vehid=32,53&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "32": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 32,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 842.75354055,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 511 ГР 123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Car",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "speed": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "msg": "Speed",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "cnt": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "val": 1290,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fee": 12</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div><span>&nbsp; &nbsp; "53": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; "29.01.2025_01:16|04.02.2025_01:16": {</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "date": "Wednesday, 29.01.2025 01:16 - Tuesday, 04.02.2025 01:16",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_id": 53,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "distance": 8.24949075,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "agent_id": 545,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_id": 10025,</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "account_name": "ИП Иванов",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_name": "О 619АК 67",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "veh_type": "Bus",</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "eco_data": []</span></div><div><span>&nbsp; &nbsp; &nbsp; &nbsp; }</span></div><div><span>&nbsp; &nbsp; }&nbsp; &nbsp;</span></div></td></tr></tbody></table>

В ответ на API-запрос возвращаются данные о каждом транспортном средстве:

-   veh\_id — идентификатор транспортного средства
    
-   imei — уникальный номер трекера
    
-   distance — пройденное расстояние за указанный период
    
-   agent\_id —  идентификатор договора
    
-   account\_id — номер аккаунта в системе
    
-   account\_name —  имя аккаунта
    
-   veh\_name — название транспортного средства
    
-   veh\_type — тип транспортного средства
    
-   eco\_data — данные о вождении
