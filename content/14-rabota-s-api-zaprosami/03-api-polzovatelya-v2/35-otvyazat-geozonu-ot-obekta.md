---
title: "Отвязать геозону от объекта"
source: otvyazat_geozonu_ot_obekta.html
---

Этот API удаляет привязку существующей геозоны от транспортного средства.

## Как получить данные

### Метод

GET

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=geofenceunlink — команда для удаления привязки геозоны
    
-   zone\_id — идентификатор геозоны (обязательный, если external\_id не задан)
    
-   external\_id — внешний идентификатор геозоны (необязательно, игнорируется, если указан zone\_id)
    
-   agent\_id — идентификатор агента (транспортного средства)
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>http://&lt;address&gt;/api/api.php?cmd=geofenceunlink&amp;zone_id=158414&amp;agent_id=66497&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

В ответе на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера о результате действия
