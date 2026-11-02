---
title: "Облік пасажиропотоку"
---

Цей API використовується для отримання даних про пасажиропотік у транспорті, оснащеному системою автокондуктор.

З його допомогою можна:

— переглянути, скільки пасажирів зайшло та вийшло на кожній зупинці

 — отримати координати зупинок, час події та відеоідентифікатор (якщо система підтримує відеозапис)

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd= pass\_counter — команда для виклику API
    
-   ts — час початку вибірки у форматі Unix timestamp
    
-   te — час завершення вибірки у форматі Unix timestamp
    
-   node — номер вузла, на якому потрібно виконати команду
    

Додатково:

-   imei — IMEI автомобіля, оснащеного автокондуктором. Якщо не вказати, вибірка буде за всіма автомобілями з обладнанням
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=pass_counter&amp;ts=1554670800&amp;te=1554757200&amp;imei=963852741159753&amp;node=1</div></td></tr></tbody></table>

### Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "36571": {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 36571,</div><div>&nbsp; &nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9346",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.8981",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554696995,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 13</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9238",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.9098",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 4,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554697232,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 14</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "autoconductor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання (0 = успіх)
    
-   msg — повідомлення про статус (наприклад, OK)
    
-   data — основний об’єкт з даними про пасажиропотік.
    
-   agent\_id — ID автомобіля в системі
    
-   vehiclenumber — внутрішній номер ТЗ або назва обладнання (наприклад, autoconductor)
    
-   stops — масив зупинок з даними про пасажиропотік
    
-   busline\_id — ID маршруту
    
-   door\_id — номер дверей, через які зафіксовано рух пасажирів
    
-   lat — широта зупинки
    
-   lon — довгота зупинки
    
-   p\_in — кількість пасажирів, що зайшли
    
-   p\_out — кількість пасажирів, що вийшли
    
-   ts — час події (Unix timestamp)
    
-   video\_id — ID відеозапису, пов’язаного з подією (якщо є)
