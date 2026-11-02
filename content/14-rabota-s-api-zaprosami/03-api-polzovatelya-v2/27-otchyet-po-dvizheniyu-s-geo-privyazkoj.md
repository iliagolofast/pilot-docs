---
title: "Отчёт по движению с гео-привязкой"
source: otchyet_po_dvizheniyu_s_geo_privyazkoj.html
---

Этот API позволяет получить отчёт о перемещениях транспортного средства за выбранный период с указанием координат и географической информации (адрес, район, город и т. д.). Данные содержат информацию о начале и завершении каждого отрезка движения, средней и максимальной скорости, длине пути и месте по гео-координатам.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = rungeo — команда для получения отчёта
    
-   imei — уникальный идентификатор объекта в системе
    
-   start — время начала выборки в формате Unix timestamp
    
-   stop — время окончания выборки в формате Unix timestamp
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rungeo&amp;imei=356307045913463&amp;start=1439413200&amp;stop=1439586000&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "tracks": {</div><div>&nbsp; &nbsp; "1439443509": {</div><div>&nbsp; &nbsp; &nbsp; "avgspeed": 35.3889,</div><div>&nbsp; &nbsp; &nbsp; "length": 12.7304,</div><div>&nbsp; &nbsp; &nbsp; "maxspeed": 59,</div><div>&nbsp; &nbsp; &nbsp; "ts": 1439443509,</div><div>&nbsp; &nbsp; &nbsp; "te": 1439445837,</div><div>&nbsp; &nbsp; &nbsp; "slat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "slon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "elat": "47.2037",</div><div>&nbsp; &nbsp; &nbsp; "elon": "39.6325",</div><div>&nbsp; &nbsp; &nbsp; "sgeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya ulitsa",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "egeo": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "city": "Rostov-on-Don",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "road": "2-ya Krasnodarskaya Street",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "house_number": "80 к13",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "state": "Rostov Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "postcode": "344091"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения (0 = успех)
    
-   msg — сообщение о статусе
    
-   tracks — объект, где ключи — это метки времени начала поездки (Unix timestamp), а значения — данные о каждой поездке
    

Эти ключи одновременно являются уникальными идентификаторами треков (track\_id), которые можно использовать в запросе метода [gettrack](dannye-treka.html) для получения детальных точек маршрута.

Для каждой поездки:

-   avgspeed — средняя скорость (км/ч)
    
-   maxspeed — максимальная скорость (км/ч)
    
-   length — длина маршрута (км)
    
-   ts — время начала поездки (Unix timestamp)
    
-   te — время окончания поездки (Unix timestamp)
    
-   slat, slon — координаты старта (широта, долгота)
    
-   elat, elon — координаты конца
    
-   sgeo — адрес места старта (город, улица, дом, почтовый индекс)
    
-   egeo — адрес места окончания
