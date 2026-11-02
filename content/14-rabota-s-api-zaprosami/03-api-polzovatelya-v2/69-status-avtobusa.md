---
title: "Статус автобуса"
source: status_avtobusa.html
---

Этот API возвращает актуальное состояние автобуса: маршрут, текущую и следующую остановки, а также информацию о самом маршруте (номер, стоимость, интервал движения и др.).

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=currentBusState — команда для получения статуса автобуса
    
-   vehnum — номер автобуса
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=currentBusState&amp;vehnum=А%20086%20КХ%20116%20RUS&amp;node=1</div></td></tr></tbody></table>

**Ответ**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "lines": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1086,</div><div>&nbsp; &nbsp; &nbsp; "name": "1А",</div><div>&nbsp; &nbsp; &nbsp; "number": "1А",</div><div>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; &nbsp; "description": "1А",</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; &nbsp; "interval": 10,</div><div>&nbsp; &nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_id": 0,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_order": 0,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_id": 5217,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_order": 48</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   id — ID маршрута
    
-   name — название маршрута
    
-   number — номер маршрута
    
-   bidirectional — признак двунаправленности (1 — да, 0 — нет)
    
-   active — признак активности маршрута (1 — активен)
    
-   price — стоимость проезда
    
-   interval — интервал движения в минутах
    
-   currentstop\_id — ID остановки, на которой сейчас находится автобус
    
-   currentstop\_order — порядковый номер текущей остановки
    
-   nextstop\_id — ID следующей остановки
    
-   nextstop\_order — порядковый номер следующей остановки
