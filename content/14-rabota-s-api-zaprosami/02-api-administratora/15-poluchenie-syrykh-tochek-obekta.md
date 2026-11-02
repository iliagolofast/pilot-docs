---
title: "Получение сырых точек объекта"
source: poluchenie_syrykh_tochek_obekta.html
---

API возвращает сырые данные GPS-треков транспортного средства за указанный период.

Этот запрос можно делать только за период не более 10 дней.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

Обязательные:

-   cmd=rawpoints — команда для получения сырых точек
    
-   ts — дата начала выборки в формате UNIX timestamp
    
-   te — дата конца выборки в формате UNIX timestamp
    
-   agentid — идентификатор транспортного средства
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?<span>cmd=rawpoints&amp;ts=1760216400&amp;te=1760302800&amp;agentid=157773</span></div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 1,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215545",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706906",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 15,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 10,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14547;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022428</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agentid": 2914,</div><div>&nbsp; &nbsp; &nbsp; "height": 32,</div><div>&nbsp; &nbsp; &nbsp; "direction": 339,</div><div>&nbsp; &nbsp; &nbsp; "latitude": "47.215938",</div><div>&nbsp; &nbsp; &nbsp; "longitude": "39.706751",</div><div>&nbsp; &nbsp; &nbsp; "satsinview": 12,</div><div>&nbsp; &nbsp; &nbsp; "servertime": 1458044666,</div><div>&nbsp; &nbsp; &nbsp; "speed": 12,</div><div>&nbsp; &nbsp; &nbsp; "triggerdata": "Priority=0;EventSource=0;DIS1=1;GSMVal=4;IN1=67;Vsourse=14538;",</div><div>&nbsp; &nbsp; &nbsp; "unixtimestamp": 1458022437</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "deb": [</div><div>&nbsp; &nbsp; 2914,</div><div>&nbsp; &nbsp; 1458022428,</div><div>&nbsp; &nbsp; 1458043980</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения запроса (0 — успешно)
    
-   data — массив точек:
    
-   agentid — идентификатор транспортного средства
    
-   height/ altitude — высота над уровнем моря (м)
    
-   direction — направление движения (градусы)
    
-   latitude/ longitude — координаты точки
    
-   satsinview — количество видимых спутников
    
-   servertime — время сервера в UNIX timestamp
    
-   speed — скорость в км/ч
    
-   triggerdata — данные триггеров устройства
    
-   unixtimestamp — время события в UNIX timestamp
    
-   deb — массив отладочной информации (agentid, начало и конец периода)
    
-   message — сообщение о результате запроса
