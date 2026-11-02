---
title: "Список тарифов"
source: spisok_tarifov.html
---

С этим API получайте список тарифов, доступных для аккаунта, с информацией о валюте, цене и описании.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=pricelist —  команда для получения списка тарифов
    
-   node — номер узла, на котором нужно выполнить команду
    
    Дополнительно:
    
-   coden (опционально) — код валюты:
    
    — цифровой (например, 840 для USD, 810 для RUB)
    
    — буквенный (например, USD или RUR)
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=pricelist&amp;coden=840&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 143,</div><div>&nbsp; &nbsp; &nbsp; "code": "840",</div><div>&nbsp; &nbsp; &nbsp; "currency": 2,</div><div>&nbsp; &nbsp; &nbsp; "descr": "3 dollars per property per month",</div><div>&nbsp; &nbsp; &nbsp; "name": "US dollar",</div><div>&nbsp; &nbsp; &nbsp; "price": "3.00"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код выполнения запроса (0 — успешно)
    
-   data — массив тарифов:
    
-   id — уникальный идентификатор тарифа
    
-   code — код валюты (цифровой)
    
-   currency — внутренний идентификатор валюты
    
-   descr — описание тарифа
    
-   name — название тарифа (например, "US dollar")
    
-   price — стоимость тарифа в указанной валюте
    
-   message — текстовое сообщение о результате запроса
