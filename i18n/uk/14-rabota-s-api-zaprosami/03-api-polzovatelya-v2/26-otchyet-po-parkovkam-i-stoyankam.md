---
title: "Звіт за паркуваннями та стоянками"
---

Цей API отримує інформацію про стоянки та паркування транспортного засобу за вказаний період. Можна дізнатися координати, тривалість, а також адресу місця стоянки або паркування.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=runstops — команда API для отримання звіту за стоянками та паркуваннями
    
-   imei — ідентифікатор транспортного засобу в системі
    
-   start — час початку вибірки (Unix timestamp)
    
-   stop — час закінчення вибірки (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=runstops&amp;start=1676840400&amp;stop=1676926800&amp;imei=16518<span>&amp;node=1</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676840400,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676873376,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 32976,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.733388",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "61.051853",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Р-351",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Белоярский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "624053",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676875342,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676880065,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 4723,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.893278",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "60.770452",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Екатеринбургская кольцевая автомобильная дорога",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Берёзовский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623703",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "parkings": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676887881,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676889637,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 1756,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.781017",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "58.40189",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Подъезд к д. Зобнина от км 216+740 а/д «г. Пермь — г. Екатеринбург»",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Achitsky District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623235",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успіх)
    
-   msg — повідомлення сервера (наприклад, "OK")
    
-   stops — масив даних про стоянки:
    
-   ts— час початку стоянки (Unix timestamp)
    
-   te— час закінчення стоянки (Unix timestamp)
    
-   dur— тривалість стоянки в секундах
    
-   lat— широта точки
    
-   lon— довгота точки
    
-   address— інформація про адресу стоянки (вулиця, район, область, регіон, поштовий індекс, країна, код країни)
    
-   parkings— масив даних про паркування (аналогічно полям stops)
