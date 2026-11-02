---
title: "Список типов транспортных средств"
source: spisok_tipov_transportnykh_sredstv_.html
---

Используйте этот API для получения списка всех типов транспортных средств в договоре.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=vehtypelist — команда для получения списка типов ТС
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehtypelist&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "Car"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "Truck"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 3,</div><div>&nbsp; &nbsp; &nbsp; "name": "Passenger"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 4,</div><div>&nbsp; &nbsp; &nbsp; "name": "Agrimotor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения запроса (0 — успешно)
    
-   data — массив типов ТС:
    
-   identifier — уникальный идентификатор типа ТС
    
-   name — название типа ТС
    
-   message — текстовое сообщение о результате запроса
