---
title: "Робота обладнання"
---

Цей API дає змогу отримувати дані про роботу датчиків транспортного засобу за обраний період.

З його допомогою можна:

— відстежувати періоди роботи/вмикання датчиків (наприклад, запалювання, вмикання обладнання).

— отримувати інформацію про місцеположення під час вмикання датчика.

— аналізувати поведінку обладнання та роботу транспортного засобу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=sensors — команда для отримання даних про роботу датчиків
    
-   imei — ідентифікатор транспортного засобу в системі
    
-   start — час початку вибірки (Unix timestamp)
    
-   stop — Час завершення вибірки (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=sensors&amp;imei=356307046690011&amp;start=1404637430&amp;stop=1404645198&amp;node=1</div></td></tr></tbody></table>

Відповідь

Кожен датчик подано об’єктом, де ключ — ідентифікатор датчика в системі:

<table><tbody><tr><td><span></span></td><td><div>"sensors": {</div><div>&nbsp; &nbsp; "9175": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fieldname": "DIS1",&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик зажигания", &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 9175,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "work": {&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404637430": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404637430,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404637834,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3825",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0031",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "Россия, Астраханская область, Наримановский район, Николаевское шоссе, 1б" // Адрес</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404638577": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404638577,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404639841,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3625",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0478",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "RU, Астрахань, улица Савушкина"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // ... следующие периоды работы датчика</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   fieldname — назва поля датчика в системі (наприклад, DIS1)
    
-   info — назва датчика в системі (наприклад, «Датчик запалювання»)
    
-   id — ідентифікатор датчика в системі
    
-   work — об’єкт з періодами роботи датчика, ключі — час вмикання (ts)
    
-   ts — час вмикання датчика (Unix timestamp)
    
-   te — час вимикання датчика (Unix timestamp)
    
-   lat — широта в момент вмикання
    
-   lon — довгота в момент вмикання
    
-   place — адреса або місцеположення в момент вмикання датчика
