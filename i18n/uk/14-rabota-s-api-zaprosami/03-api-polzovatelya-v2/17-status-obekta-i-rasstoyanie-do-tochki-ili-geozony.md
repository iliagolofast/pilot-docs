---
title: "Статус об’єкта та відстань до точки або геозони"
---

Цей API передає поточний статус транспортного засобу, а також час і відстань до заданої точки або геозони.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = get\_status\_and\_distance — команда для отримання статусу й відстані
    
-   vehnum — гаражний або держномер автомобіля, можна вказати кілька через кому
    
-   zone — назва геозони (якщо потрібно розрахувати відстань до зони)
    
-   point — координати точки у форматі широта,довгота (якщо потрібна відстань до конкретної точки)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклади запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;zone=Госпиталь%20Лапино&amp;node=1</div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_status_and_distance&amp;vehnum=М897ЕТ777&amp;point=55.923032,37.659668&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "cstatus": 6,</div><div>&nbsp; "cstatus_timestamp": 1554985159,</div><div>&nbsp; "destination_name": "Zero coordinates",</div><div>&nbsp; "distance": {</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "length": 27613,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "point": "55.923032,37.659668",</div><div>&nbsp; &nbsp; "time": 2002,</div><div>&nbsp; &nbsp; "type": "point"</div><div>&nbsp; },</div><div>&nbsp; "ignition": 1,</div><div>&nbsp; "rbu": "08",</div><div>&nbsp; "sensors": {</div><div>&nbsp; &nbsp; "Unloading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Loading Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "Ignition Sensor": "on|1554985138",</div><div>&nbsp; &nbsp; "FUEL SENSORS OPERATION SENSORS": "Operating|1554985138",</div><div>&nbsp; &nbsp; "Fuel ... fuel": "202.96 Liter|1554995669"</div><div>&nbsp; },</div><div>&nbsp; "source_name": "Loading_Chertanovo",</div><div>&nbsp; "status": 4,</div><div>&nbsp; "status_timestamp": 1554985072,</div><div>&nbsp; "unixtimestamp": 1554995864,</div><div>&nbsp; "vehiclenumber": "М897ЕТ777",</div><div>&nbsp; "zone": []</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   cstatus — поточний статус об’єкта
    
-   cstatus\_timestamp — час фіксації статусу (Unix timestamp)
    
-   destination\_name — назва точки призначення
    
-   distance — об’єкт з інформацією про відстань і час до точки або зони:
    
-   length — відстань у метрах
    
-   time — час у секундах
    
-   type — тип об’єкта (point або zone)
    
-   point — координати точки (якщо type=point)
    
-   ignition — стан запалювання (1 = увімкнено)
    
-   rbu — ідентифікатор РБУ
    
-   sensors — стан різних сенсорів (наприклад, завантаження/розвантаження, паливо)
    
-   source\_name — ім’я джерела даних
    
-   status — статус об’єкта
    
-   status\_timestamp — час останньої зміни статусу
    
-   unixtimestamp — час отримання даних
    
-   vehiclenumber — номер транспортного засобу
    
-   zone — масив із поточними зонами (якщо є)
