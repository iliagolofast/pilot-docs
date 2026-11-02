---
title: "Події об’єкта"
---

Цей API повертає події в реальному часі за транспортними засобами, зокрема інформацію про договір, компанію, водія, швидкість і місцеположення початку події.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=live\_events — команда для отримання подій у реальному часі
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=live_events&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "1264": {</div><div>&nbsp; &nbsp; "Contract Number": "CONTRACT ID",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "LEK",</div><div>&nbsp; &nbsp; "Vehicle Owner": "SUB-CONTRACTOR",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "5174 WA",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 18262972,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881932",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.185841",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.213230"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "1123": {</div><div>&nbsp; &nbsp; "Contract Number": "",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "",</div><div>&nbsp; &nbsp; "Vehicle Owner": "",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "6076MB",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 0,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881413",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.188658",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.206314"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   Ключ об’єкта (1264, 1123) — унікальний ідентифікатор події
    
-   Contract Number — номер договору
    
-   Company Name — назва компанії
    
-   Base Location — база транспортного засобу
    
-   Vehicle Owner — власник транспорту
    
-   ID — внутрішній ID події
    
-   EventID, EventType — ідентифікатор події та її тип
    
-   VehicleID — держномер або ідентифікатор транспортного засобу
    
-   Asset Category — категорія транспортного засобу
    
-   Road Type — тип дороги
    
-   DriverID — ідентифікатор водія
    
-   Event Start Time — час початку події (Unix timestamp)
    
-   Event Start Speed — швидкість у момент початку події
    
-   Event Start Location — координати початку події (lat, lon)
