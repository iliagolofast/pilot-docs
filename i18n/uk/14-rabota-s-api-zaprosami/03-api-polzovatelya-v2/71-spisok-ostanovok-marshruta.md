---
title: "Список зупинок маршруту"
---

Цей API повертає список усіх зупинок для вказаного маршруту, зокрема інформацію про координати, тип зупинки, порядок слідування та вартість проїзду.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=stopList — команда для отримання списку зупинок
    
-   line\_num — номер маршруту
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stopList&amp;line_num=1Б&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "line": {</div><div>&nbsp; &nbsp; "id": 1083,</div><div>&nbsp; &nbsp; "name": "1Б",</div><div>&nbsp; &nbsp; "number": "1Б",</div><div>&nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; "description": "1Б",</div><div>&nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; "interval": 25,</div><div>&nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5085,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Центр занятости",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9036",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3315",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 5086,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Автовокзал",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9039",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "52.3236",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 60,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_type": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "descr": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "stop_order": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "price": "0.00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "dir": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "silent": 0</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   id— унікальний ідентифікатор маршруту/зупинки
    
-   name— назва маршруту або зупинки
    
-   number— номер маршруту
    
-   bidirectional— 1, якщо маршрут двоспрямований
    
-   active— 1, якщо маршрут активний
    
-   price— вартість проїзду
    
-   interval— інтервал слідування в хвилинах
    
-   stops— масив зупинок маршруту:
    
-   lat, lon — координати зупинки
    
-   radius— радіус зони зупинки в метрах
    
-   stop\_type— тип зупинки: 0 — звичайна, 1 — технічна, 2 — кінцева
    
-   stop\_order— порядок слідування зупинки в маршруті
    
-   silent— 1 — не генерувати повідомлення для цієї зупинки
