---
title: "Список геозон"
---

Цей API повертає список усіх геозон з їхніми характеристиками, зокрема координати, тип, колір і групу.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=geofencelist— команда для отримання списку геозон
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencelist&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 157828,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "Test Magnit",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 2,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": null,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#00CC00",</div><div>&nbsp; &nbsp; &nbsp; "info": "geozone text info",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Circle",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [40.036497, 46.981936],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 305</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 153244,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "school",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": 1234,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#FF9900",</div><div>&nbsp; &nbsp; &nbsp; "info": "kml upload",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Polygon",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184334, 25.112866],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183512, 25.113472],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.182154, 25.112516],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183511, 25.111016],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184923, 25.112133]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповіді на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   msg — повідомлення сервера
    
-   data — масив об’єктів геозон, кожен з яких містить:
    
-   id — ідентифікатор геозони
    
-   zonename — назва геозони
    
-   zonetype — тип геозони (1 — полігон, 2 — коло)
    
-   external\_id — зовнішній ідентифікатор (якщо є)
    
-   created\_at — час створення (Unix timestamp)
    
-   updated\_at — час оновлення (Unix timestamp)
    
-   color — колір геозони в інтерфейсі
    
-   info— додаткова інформація
    
-   group\_name — назва групи геозон
    
-   group\_id — ідентифікатор групи
    
-   geometry — геометрія зони:
    
-   type — тип (Circle або Polygon)
    
-   coordinates — координати (для кола: \[довгота, широта\]; для полігона: масив масивів координат)
    
-   radius — радіус для кругової геозони (у метрах)
