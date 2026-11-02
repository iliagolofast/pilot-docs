---
title: "Данные трека"
source: dannye_treka.html
---

Этот API загружает детальные точки маршрута (трека) для поездки, полученной ранее через метод [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html). Каждая точка трека содержит координаты, скорость и абсолютное время регистрации точки в формате Unix timestamp.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = gettrack — команда для получения трека.
    
-   id — идентификатор трека, полученный в ответе API [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html#трек_id)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettrack&amp;id=70685695&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "track_data": "47.2037;39.6325;10;1439443509:47.2037;39.6324;13;1439443510:47.2037;39.6323;15;1439443512:47.2036;39.6304;22;1439443568",</div><div>&nbsp; "track_id": 70685695,</div><div>&nbsp; "unixstarttimestamp": 1439443509</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   track\_id— уникальный идентификатор трека;
    
-   unixstarttimestamp— дата и время начала трека в формате Unix timestamp;
    
-   track\_data— последовательность точек трека, разделённых двоеточием (:).
    

Каждая точка трека состоит из четырёх значений, разделённых точкой с запятой (;):

1\. latitude — широта;

2\. longitude — долгота;

3\. speed\_kmh — скорость в км/ч;

4\. point\_unix\_timestamp — абсолютное время регистрации точки в формате Unix timestamp, UTC.

Формат точки:

<table><tbody><tr><td><span></span></td><td><div>latitude;longitude;speed_kmh;point_unix_timestamp</div></td></tr></tbody></table>

Пример:

<table><tbody><tr><td><span></span></td><td><div>47.2037;39.6325;10;1439443509</div></td></tr></tbody></table>

Значение 1439443509 — абсолютное время регистрации точки, а не количество секунд от начала трека.

Чтобы вычислить время, прошедшее с начала трека, используйте формулу: elapsed\_seconds = point\_unix\_timestamp - unixstarttimestamp. Например: 1439443568 - 1439443509 = 59
