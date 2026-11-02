---
title: "Прогноз прибуття на зупинку"
---

Цей API отримує прогнозований час прибуття автобусів, тролейбусів і маршруток на вказану зупинку.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = stationForecast — команда для отримання прогнозу прибуття
    
-   stopid — ідентифікатор зупинки (береться з [інтерфейсу](../../lichnyj-kabinet-polzovatelya/moduli-1/rejsy-2/kak-dobavit-ostanovki.html) PILOT)
    
-   node — номер вузла, на якому потрібно виконати команду
    

Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stationForecast&amp;stopid=7400&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "curent_stop": 1,</div><div>&nbsp; &nbsp; "line_id": 1371,</div><div>&nbsp; &nbsp; "line_name": "№ 17 С. КАЛЬФА - ПЛ. СУВОРОВА - УЛ. ГЕНЕРАЛА ЖИДИЛОВА",</div><div>&nbsp; &nbsp; "line_num": "17",</div><div>&nbsp; &nbsp; "line_type": "A",</div><div>&nbsp; &nbsp; "this_stop": 32,</div><div>&nbsp; &nbsp; "time": 4065,</div><div>&nbsp; &nbsp; "vehicle": "BUS FLIGHT",</div><div>&nbsp; &nbsp; "vehid": 48854</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>

У відповідь на API-запит повертається масив об’єктів із прогнозами для кожного маршруту на цій зупинці:

-   curent\_stop — порядковий номер зупинки в маршруті, на якій зараз перебуває транспортний засіб
    
-   line\_id — ID маршруту
    
-   line\_name — повна назва маршруту
    
-   line\_num — номер маршруту
    
-   line\_type — тип маршруту: 'A' — автобус, 'T' — тролейбус, 'M' — маршрутка
    
-   this\_stop — порядковий номер цієї зупинки в маршруті
    
-   time — прогнозований час прибуття на цю зупинку в секундах
    
-   vehicle — держномер транспортного засобу
    
-   vehid — ID транспортного засобу
