---
title: "Добавление геозоны"
source: dobavlenie_geozony.html
---

Этот API создаёт новую геозону, указав её название, тип, цвет, группу и геометрию.

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=geofenceadd — команда для добавления геозоны
    
-   zonename — название геозоны
    
-   zonetype — тип зоны (1 — многоугольник, 2 — круг)
    
-   color — цвет зоны в формате HEX (например, #FFFFFF)
    
-   info — текстовая информация о геозоне
    
-   group\_name — название группы геозон (создаётся, если не существует, опционально)
    
-   group\_id — ID существующей группы (если указан, group\_name игнорируется, опционально)
    
-   geometry — GEOJson с описанием многоугольника или круга
    
-   external\_id — внешний идентификатор геозоны (опционально)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

Полигон:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=1&amp;zonename=test_api_polygon&amp;external_id=12354&amp;info=blabla&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Polygon","coordinates":[[[55.184334,25.112866],[55.183512,25.113472],[55.182154,25.112516],[55.183511,25.111016],[55.184923,25.112133]]]}&amp;node=1</div></td></tr></tbody></table>

Круг:

<table><tbody><tr><td><span></span></td><td><div>http://&lt;server_address&gt;/api/api.php?cmd=geofenceadd&amp;zonetype=2&amp;zonename=test_api_circle&amp;external_id=12345&amp;info=circle_info&amp;color=%23FF3300&amp;group_name=TEST_API&amp;geometry={"type":"Circle","coordinates":[55.184334,25.112866],"radius":150}&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": 158412,</div><div>&nbsp; &nbsp; "zonename": "test_api_polygon",</div><div>&nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; "external_id": "12354",</div><div>&nbsp; &nbsp; "created_at": 1610536445,</div><div>&nbsp; &nbsp; "updated_at": 1610536445,</div><div>&nbsp; &nbsp; "color": "#FF3300",</div><div>&nbsp; &nbsp; "info": "blabla",</div><div>&nbsp; &nbsp; "group_id": 6984</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

В ответе на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера
    
-   data — объект с информацией о созданной геозоне:
    
-   id — идентификатор геозоны
    
-   zonename — название геозоны
    
-   zonetype — тип зоны (1 — многоугольник, 2 — круг)
    
-   external\_id — внешний идентификатор
    
-   created\_at — время создания (Unix timestamp)
    
-   updated\_at — время обновления (Unix timestamp)
    
-   color — цвет геозоны
    
-   info — текстовая информация
    
-   group\_id— идентификатор группы геозон
