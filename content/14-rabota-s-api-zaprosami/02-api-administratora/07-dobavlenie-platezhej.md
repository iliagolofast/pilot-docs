---
title: "Добавление платежей"
source: dobavlenie_platezhej.html
---

Этот API используется для добавления информации о платежах по договору. Можно указать сумму, дату, ID платежа во внешней системе и описание.

## Как получить данные

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/ax/api.php?

### Параметры запроса

Обязательные:

-   cmd=payment — команда для добавления платежа
    
-   inn — ИНН договора (уникальный идентификатор)
    
-   sum — сумма платежа (формат dd.dd)
    
-   id — ID платежа во внешней системе
    
-   date — дата платежа (формат DDMMYYYY)
    
-   descr — описание платежа (строка), например: «платеж за подключение»
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=payment&amp;inn=123123123&amp;sum=10.00&amp;id=124&amp;date=04042016&amp;descr=test%20payment&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Payment inserted successfully",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "payment_id": 124,</div><div>&nbsp; &nbsp; "inn": "123123123",</div><div>&nbsp; &nbsp; "sum": 10.00,</div><div>&nbsp; &nbsp; "date": "04042016",</div><div>&nbsp; &nbsp; "descr": "test payment"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>
