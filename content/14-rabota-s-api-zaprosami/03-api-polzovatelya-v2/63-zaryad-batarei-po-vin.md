---
title: "Заряд батареи по VIN"
source: zaryad_batarei_po_vin.html
---

Этот API получает информацию о состоянии заряда батареи транспортного средства по VIN.

Работает только для объектов, у которых:

-    заполнено поле VIN в [карточке](../../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html) объекта
    
-   подключен датчик заряда батареи
    

<table><tbody><tr><td><span></span></td><td><div>В запросе можно указать несколько VIN, тогда в ответе вернётся информация по всем указанным объектам.</div></td></tr></tbody></table>

## Как получить данные

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/VTB/api\_vtb.php

### Метод запроса

 POST

Работа с этим API состоит из двух шагов:

1\. Авторизация — получение токена для доступа к данным

2\. Запрос данных — использование токена для получения информации о батарее по VIN

### 1\. Авторизация

Перед тем как запрашивать данные, необходимо авторизоваться.

Тело запроса:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "login": "ваш_логин",</div><div>&nbsp; "password": "ваш_пароль",</div><div>&nbsp; "cmd": "auth"</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответе вы получите токен — длинную уникальную строку.

Этот токен нужен для идентификации пользователя при последующих запросах. Без токена API не отдаст данные о батарее.

### 2\. Получение данных датчика батареи

После получения токена можно запросить информацию о батарее.

Параметры запроса

-   Number — список VIN транспортных средств, информацию о которых вы хотите получить.
    
-   DateFrom — дата и время начала периода (в формате ISO 8601).
    
-   DateTo — дата и время конца периода.
    
-   cmd=vehicle — команда API для запроса данных о транспортном средстве
    

Заголовки запроса:

-   Authorization: Bearer <token> — указываем токен, полученный при авторизации
    
-   Content-Type: application/json — указываем, что тело запроса в формате JSON
    

Тело запроса:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "Number": ["VIN_объекта"],</div><div>&nbsp; "DateFrom": "2023-12-03T00:00:00",</div><div>&nbsp; "DateTo": "2023-12-12T00:00:00",</div><div>&nbsp; "cmd": "vehicle"</div><div>}</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "Number": "456789123",</div><div>&nbsp; &nbsp; "ApplicationNumber": null,</div><div>&nbsp; &nbsp; "CurrentStatus": "ACTIVE",</div><div>&nbsp; &nbsp; "CloseDateTime": "",</div><div>&nbsp; &nbsp; "LastSyncDate": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "AlarmDateTime": "2024-08-28 15:42:45",</div><div>&nbsp; &nbsp; "Latitude": "55.578352",</div><div>&nbsp; &nbsp; "Longitude": "38.125267",</div><div>&nbsp; &nbsp; "BatteryCharge": "полный заряд",</div><div>&nbsp; &nbsp; "LocationLinesID": "",</div><div>&nbsp; &nbsp; "FullAddress": "улица Гарнаева, Рынок, Жуковский, Московская область, Россия",</div><div>&nbsp; &nbsp; "Country": "Россия",</div><div>&nbsp; &nbsp; "Region": "Московская область",</div><div>&nbsp; &nbsp; "Town": "Жуковский",</div><div>&nbsp; &nbsp; "Street": "улица Гарнаева",</div><div>&nbsp; &nbsp; "House": null,</div><div>&nbsp; &nbsp; "numberRegion": 10</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   Number — VIN транспортного средства
    
-   CurrentStatus — текущий статус объекта
    
-   LastSyncDate — дата последней синхронизации
    
-   BatteryCharge — уровень заряда батареи
    
-   FullAddress, Country, Region, Town, Street — местоположение объекта
    
-   Latitude, Longitude — координаты объекта
