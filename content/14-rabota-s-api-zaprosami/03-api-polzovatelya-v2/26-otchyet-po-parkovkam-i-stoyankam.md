---
title: "Отчёт по парковкам и стоянкам"
source: otchyet_po_parkovkam_i_stoyankam.html
---

Этот API получает информацию о стоянках и парковках транспортного средства за указанный период. Можно узнать координаты, длительность, а также адрес места стоянки или парковки.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=runstops — команда API для получения отчета по стоянкам и парковкам
    
-   imei — идентификатор транспортного средства в системе
    
-   start — время начала выборки (Unix timestamp)
    
-   stop — время окончания выборки (Unix timestamp)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=runstops&amp;start=1676840400&amp;stop=1676926800&amp;imei=16518<span>&amp;node=1</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676840400,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676873376,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 32976,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.733388",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "61.051853",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Р-351",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Белоярский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "624053",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676875342,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676880065,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 4723,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.893278",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "60.770452",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Екатеринбургская кольцевая автомобильная дорога",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Берёзовский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623703",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "parkings": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676887881,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676889637,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 1756,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.781017",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "58.40189",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Подъезд к д. Зобнина от км 216+740 а/д «г. Пермь — г. Екатеринбург»",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Achitsky District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623235",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успех)
    
-   msg — сообщение сервера (например, "OK")
    
-   stops — массив данных о стоянках:
    
-   ts— время начала стоянки (Unix timestamp)
    
-   te— время окончания стоянки (Unix timestamp)
    
-   dur— длительность стоянки в секундах
    
-   lat— широта точки
    
-   lon— долгота точки
    
-   address— информация об адресе стоянки (улица, район, область, регион, почтовый индекс, страна, код страны)
    
-   parkings— массив данных о парковках (аналогично полям stops)
