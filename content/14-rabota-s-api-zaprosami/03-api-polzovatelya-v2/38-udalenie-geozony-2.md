---
title: "Удаление геозоны"
source: udalenie_geozony_2.html
---

Этот API удаляет геозону из системы. При удалении геозоны автоматически снимаются все привязки этой геозоны с транспортными средствами.

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=geofencedel — команда для удаления геозоны
    
-   zone\_id — внутренний идентификатор геозоны
    
-   external\_id — внешний идентификатор геозоны (опционально)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencedel&amp;zone_id=473989&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"data": {</div><div>&nbsp;"zones_deleted": [</div><div>&nbsp;473989</div><div>&nbsp;]</div><div>&nbsp;}</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   message — сообщение сервера о результате действия
    
-   data.zones\_deleted — массив ID удалённых геозон (zone\_id), для которых операция прошла успешно
