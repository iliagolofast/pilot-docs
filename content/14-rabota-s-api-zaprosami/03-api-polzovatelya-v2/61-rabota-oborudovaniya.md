---
title: "Работа оборудования"
source: rabota_oborudovaniya.html
---

Этот API позволяет получать данные о работе датчиков транспортного средства за выбранный период.

С его помощью можно:

— отслеживать периоды работы/включения датчиков (например, зажигание, включение оборудования).

— получать информацию о местоположении при включении датчика.

— анализировать поведение оборудования и работу транспортного средства.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=sensors — команда для получения данных о работе датчиков
    
-   imei — идентификатор транспортного средства в системе
    
-   start — время начала выборки (Unix timestamp)
    
-   stop — Время окончания выборки (Unix timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=sensors&amp;imei=356307046690011&amp;start=1404637430&amp;stop=1404645198&amp;node=1</div></td></tr></tbody></table>

Ответ

Каждый датчик представлен объектом, где ключ — идентификатор датчика в системе:

<table><tbody><tr><td><span></span></td><td><div>"sensors": {</div><div>&nbsp; &nbsp; "9175": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fieldname": "DIS1",&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик зажигания", &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 9175,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "work": {&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404637430": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404637430,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404637834,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3825",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0031",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "Россия, Астраханская область, Наримановский район, Николаевское шоссе, 1б" // Адрес</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404638577": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404638577,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404639841,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3625",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0478",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "RU, Астрахань, улица Савушкина"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // ... следующие периоды работы датчика</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   fieldname — название поля датчика в системе (например, DIS1)
    
-   info — название датчика в системе (например, «Датчик зажигания»)
    
-   id — идентификатор датчика в системе
    
-   work — объект с периодами работы датчика, ключи — время включения (ts)
    
-   ts — время включения датчика (Unix timestamp)
    
-   te — время выключения датчика (Unix timestamp)
    
-   lat — широта в момент включения
    
-   lon — долгота в момент включения
    
-   place — адрес или местоположение в момент включения датчика
