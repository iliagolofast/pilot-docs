---
title: "Список геозон"
source: spisok_geozon.html
---

Этот API возвращает список всех геозон с их характеристиками, включая координаты, тип, цвет и группу.

## Как получить данные

### Метод

POST

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=geofencelist— команда для получения списка геозон
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencelist&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 157828,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "Test Magnit",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 2,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": null,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#00CC00",</div><div>&nbsp; &nbsp; &nbsp; "info": "geozone text info",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Circle",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [40.036497, 46.981936],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "radius": 305</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 153244,</div><div>&nbsp; &nbsp; &nbsp; "zonename": "school",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "external_id": 1234,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "created_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "updated_at": 1609780839, &nbsp;</div><div>&nbsp; &nbsp; &nbsp; "color": "#FF9900",</div><div>&nbsp; &nbsp; &nbsp; "info": "kml upload",</div><div>&nbsp; &nbsp; &nbsp; "group_name": "TEST",</div><div>&nbsp; &nbsp; &nbsp; "group_id": 6531,</div><div>&nbsp; &nbsp; &nbsp; "geometry": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "Polygon",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "coordinates": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184334, 25.112866],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183512, 25.113472],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.182154, 25.112516],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.183511, 25.111016],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.184923, 25.112133]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответе на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера
    
-   data — массив объектов геозон, каждый из которых содержит:
    
-   id — идентификатор геозоны
    
-   zonename — название геозоны
    
-   zonetype — тип геозоны (1 — полигон, 2 — круг)
    
-   external\_id — внешний идентификатор (если есть)
    
-   created\_at — время создания (Unix timestamp)
    
-   updated\_at — время обновления (Unix timestamp)
    
-   color — цвет геозоны в интерфейсе
    
-   info— дополнительная информация
    
-   group\_name — название группы геозон
    
-   group\_id — идентификатор группы
    
-   geometry — геометрия зоны:
    
-   type — тип (Circle или Polygon)
    
-   coordinates — координаты (для круга: \[долгота, широта\]; для полигона: массив массивов координат)
    
-   radius — радиус для круговой геозоны (в метрах)
