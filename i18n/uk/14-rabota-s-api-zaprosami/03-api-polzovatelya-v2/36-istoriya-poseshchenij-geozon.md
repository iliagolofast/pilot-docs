---
title: "Історія відвідувань геозон"
---

Цей API отримує інформацію про те, коли об’єкти відвідували певні геозони за вказаний період часу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=ag\_geozones — команда API для отримання історії геозон
    
-   start — дата початку періоду (Unix timestamp)
    
-   stop — дата завершення періоду (Unix timestamp)
    
-   imei — ідентифікатор транспортного засобу. Можна вказати кілька через кому
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту для одного транспортного засобу

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635<span>&amp;node=1</span></div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

### Приклад запиту для кількох транспортних засобів

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635,867481037184458</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "865291046424635": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "867481037184458": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1607949101,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1607956478</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1608012176,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1608041334</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успіх)
    
-   msg — повідомлення сервера (наприклад, "OK")
    
-   data — інформація про відвідування геозон
    
-   Якщо один об’єкт, data — масив відвідувань
    
-   Якщо кілька об’єктів, data — об’єкт, де ключі — IMEI транспортних засобів, а значення — масиви відвідувань
    
-   group— група геозони
    
-   zonename— назва геозони
    
-   ts— час входу в геозону (Unix timestamp)
    
-   te— час виходу з геозони (Unix timestamp)
