---
title: "Состояние всех объектов аккаунта"
source: sostoyanie_vsekh_obektov_akkaunta.html
---

Этот API предоставляет список всех транспортных средств, привязанных к определённому аккаунту, с их текущим состоянием.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=vehicles — команда для получения списка транспортных средств
    
-   account\_id — ID аккаунта, для которого нужно получить список объектов
    
-   node — номер узла, на котором нужно выполнить команду
    
    Дополнительные параметры:
    
-   is\_show\_deleted — показать удалённые ТС (0 — показать только активные ТС, 1 — показать все ТС, включая удалённые)
    

Формат запрашиваемых данных — массив данных о транспортных средствах.

### Пример запроса

Отображение удалённых объектов:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehicles&amp;account_id=2238&amp;is_show_deleted=1&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 0,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM1100",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 69332,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "SSS",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.200989",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.634436",</div><div>&nbsp; &nbsp; &nbsp; "model": "HYUNDAI IX35",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79818775160",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 7,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457709039",</div><div>&nbsp; &nbsp; &nbsp; "type": "Static",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "356307045913463",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "IX35"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "active": 0,</div><div>&nbsp; &nbsp; &nbsp; "deleted": 1,</div><div>&nbsp; &nbsp; &nbsp; "agentid": 8026,</div><div>&nbsp; &nbsp; &nbsp; "configuration": "Teltonika FM4200",</div><div>&nbsp; &nbsp; &nbsp; "current_mileage": 17441,</div><div>&nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; "driver_name": "",</div><div>&nbsp; &nbsp; &nbsp; "driver_phone": "",</div><div>&nbsp; &nbsp; &nbsp; "folder": "ЮФО",</div><div>&nbsp; &nbsp; &nbsp; "lat": "47.318118",</div><div>&nbsp; &nbsp; &nbsp; "lon": "39.995648",</div><div>&nbsp; &nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; &nbsp; "msisdn": "79110181596",</div><div>&nbsp; &nbsp; &nbsp; "on": 1,</div><div>&nbsp; &nbsp; &nbsp; "partner_price": "100.00",</div><div>&nbsp; &nbsp; &nbsp; "price": "350.00",</div><div>&nbsp; &nbsp; &nbsp; "sats": 9,</div><div>&nbsp; &nbsp; &nbsp; "speed": 0,</div><div>&nbsp; &nbsp; &nbsp; "ts": "1457726726",</div><div>&nbsp; &nbsp; &nbsp; "type": "Car",</div><div>&nbsp; &nbsp; &nbsp; "uniqid": "354330031297057",</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "nex"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

active — статус активности объекта: 1 — активен, 0 — неактивен

deleted — был ли объект удалён: 0 — не удалён, 1 — удалён

agentid — уникальный номер устройства

configuration — название конфигурации GPS-оборудования (например, Teltonika FM1100)

current\_mileage — пробег транспортного средства, км

dir — направление движения

driver\_name — имя водителя (если назначен)

driver\_phone — телефон водителя

folder — название папки/категории в системе

lat — географическая широта последней позиции

lon — географическая долгота последней позиции

model — модель ТС

msisdn — SIM-номер трекера

on — зажигание (1 — включено, 0 — выключено)

partner\_price — цена для партнёра

price — розничная цена

sats — количество спутников, с которыми установлен контакт

speed — текущая скорость, км/ч

ts — временная метка (timestamp, UNIX time) последнего обновления позиции

type — тип объекта

uniqid — уникальный идентификатор устройства (обычно IMEI)

vehiclenumber — номер ТС
