---
title: "Добавление заправки по карте"
source: dobavlenie_zapravki_po_karte.html
---

Этот API добавляет запись о расходе топлива по карте, включая информацию о количестве топлива, стоимости, месте и водителе.

## Как получить данные

### Метод

POST

### Адрес запроса

Для выполнения запроса используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

Обязательные:

-   cmd=add\_fuel\_transaction — команда для добавления транзакции
    
-   card\_num — номер топливной карты
    
-   operation — тип операции (например, refill)
    
-   unixtimestamp — время транзакции в формате Unix timestamp
    
-   place — место проведения операции
    
-   azs — название АЗС
    
-   liters — количество литров топлива
    
-   fuel — тип топлива
    
-   price — цена без скидки
    
-   sum — сумма без скидки
    
-   node — номер узла, на котором нужно выполнить команду
    

Необязательные:

-   priceg — цена со скидкой
    
-   sumg — сумма со скидкой
    
-   driver — ФИО водителя
    
-   lat — широта места транзакции
    
-   lon — долгота места транзакции
    
-   info — дополнительная информация
    
-   internal\_id — внутренний идентификатор транзакции
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_fuel_transaction&amp;node=1</div></td></tr></tbody></table>

Пример тела запроса (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "card_num": "1234567890123456",</div><div>&nbsp; "operation": "refill",</div><div>&nbsp; "unixtimestamp": 1695000000,</div><div>&nbsp; "place": "Main street 12",</div><div>&nbsp; "azs": "WOG",</div><div>&nbsp; "liters": 50,</div><div>&nbsp; "fuel": "Diesel",</div><div>&nbsp; "price": 55.0,</div><div>&nbsp; "sum": 2750.0,</div><div>&nbsp; "driver": "Ivan Ivanov"</div><div>}</div></td></tr></tbody></table>

Ответ

{

  "code": 0,

  "msg": "OK"

}

В ответ на API-запрос возвращается:

-   code — код результата (0 — успешная операция)
    
-   msg — сообщение сервера о результате действия
