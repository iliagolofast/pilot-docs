---
title: "Дані треку"
---

Цей API завантажує детальні точки маршруту (треку) для поїздки, отриманої раніше через метод [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html). Кожна точка треку містить координати, швидкість і абсолютний час реєстрації точки у форматі Unix timestamp.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = gettrack — команда для отримання треку.
    
-   id — ідентифікатор треку, отриманий у відповіді API [rungeo](otchyet-po-dvizheniyu-s-geo-privyazkoj.html#трек_id)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettrack&amp;id=70685695&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "track_data": "47.2037;39.6325;10;1439443509:47.2037;39.6324;13;1439443510:47.2037;39.6323;15;1439443512:47.2036;39.6304;22;1439443568",</div><div>&nbsp; "track_id": 70685695,</div><div>&nbsp; "unixstarttimestamp": 1439443509</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   track\_id— унікальний ідентифікатор треку;
    
-   unixstarttimestamp— дата й час початку треку у форматі Unix timestamp;
    
-   track\_data— послідовність точок треку, розділених двокрапкою (:).
    

Кожна точка треку складається з чотирьох значень, розділених крапкою з комою (;):

1\. latitude — широта;

2\. longitude — довгота;

3\. speed\_kmh — швидкість у км/год;

4\. point\_unix\_timestamp — абсолютний час реєстрації точки у форматі Unix timestamp, UTC.

Формат точки:

<table><tbody><tr><td><span></span></td><td><div>latitude;longitude;speed_kmh;point_unix_timestamp</div></td></tr></tbody></table>

Приклад:

<table><tbody><tr><td><span></span></td><td><div>47.2037;39.6325;10;1439443509</div></td></tr></tbody></table>

Значення 1439443509 — абсолютний час реєстрації точки, а не кількість секунд від початку треку.

Щоб обчислити час, що минув від початку треку, використовуйте формулу: elapsed\_seconds = point\_unix\_timestamp - unixstarttimestamp. Наприклад: 1439443568 - 1439443509 = 59
