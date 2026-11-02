---
title: "Отримання сирих точок об’єкта"
---

API повертає сирі дані GPS-треків транспортного засобу за вказаний період.

Цей запит можна робити лише за період не більше 10 днів.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

Обов’язкові:

-   cmd=rawpoints — команда для отримання сирих точок
    
-   ts — дата початку вибірки у форматі UNIX timestamp
    
-   te — дата кінця вибірки у форматі UNIX timestamp
    
-   agentid — ідентифікатор транспортного засобу
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?<span>cmd=rawpoints&amp;ts=1760216400&amp;te=1760302800&amp;agentid=157773</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 1,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215545",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706906",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 15,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 10,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14547;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022428</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 339,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215938",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706751",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 12,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14538;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022437</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "deb": [</div><div>&nbsp; &nbsp; 2914,</div><div>&nbsp; &nbsp; 1458022428,</div><div>&nbsp; &nbsp; 1458043980</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання запиту (0 — успішно)
    
-   data — масив точок:
    
-   agentid — ідентифікатор транспортного засобу
    
-   height/ altitude — висота над рівнем моря (м)
    
-   direction — напрямок руху (градуси)
    
-   latitude/ longitude — координати точки
    
-   satsinview — кількість видимих супутників
    
-   servertime — час сервера в UNIX timestamp
    
-   speed — швидкість у км/год
    
-   triggerdata — дані тригерів пристрою
    
-   unixtimestamp — час події в UNIX timestamp
    
-   deb — масив налагоджувальної інформації (agentid, початок і кінець періоду)
    
-   message — повідомлення про результат запиту
