---
title: "Звіт про активність водіїв"
---

Цей API отримує інформацію про діяльність водіїв транспортних засобів за обраний період. У відповіді вказуються різні режими роботи (наприклад, рух, робота, відпочинок).

## Як отримати дані

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = gettachodata — команда для отримання даних тахографа
    
-   agent\_id — ідентифікатор транспортного засобу / кількох ТЗ через кому
    
-   imei — ідентифікатор пристрою (альтернатива agent\_id)
    
-   ts — час початку вибірки (Unix timestamp)
    
-   te — час завершення вибірки (Unix timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettachodata&amp;ts=1624568400&amp;te=1624586400&amp;agent_id=120407,120646&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "С 220 СК 750": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Work": 4997,</div><div>&nbsp; &nbsp; &nbsp; "Drive": 248,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 1722,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "А 152 АК 790": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Drive": 5436,</div><div>&nbsp; &nbsp; &nbsp; "Work": 1706,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 4995,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   номер транспортного засобу
    
-   First driver / Second driver — дані по кожному водієві
    
-   Drive — час у русі
    
-   Work — робочий час
    
-   Rest — час відпочинку
    
-   Driver available — час, коли водій був доступний для роботи
