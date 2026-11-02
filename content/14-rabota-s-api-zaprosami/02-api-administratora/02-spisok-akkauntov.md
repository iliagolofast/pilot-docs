---
title: "Список аккаунтов"
source: spisok_akkauntov.html
---

Этот API получает список аккаунтов с основной информацией: ID договора, название, баланс и количество транспортных средств.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

-   cmd=accountslist — команда для получения списка аккаунтов
    
-   node — номер узла, на котором нужно выполнить команду
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=accountslist&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 10,</div><div>&nbsp; "org_name": "Test relaying",</div><div>&nbsp; "org_type": 2,</div><div>&nbsp; "balance": "0.00",</div><div>&nbsp; "acc_deposit": "40000.00",</div><div>&nbsp; "comment": null,</div><div>&nbsp; "inn": null,</div><div>&nbsp; "kpp": null,</div><div>&nbsp; "bill_email": "relay@mail.com",</div><div>&nbsp; "bill_phone": "43542554",</div><div>&nbsp; "hidden": 1,</div><div>&nbsp; "veh_count": 0</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   id — уникальный идентификатор аккаунта
    
-   org\_name — название организации или договора
    
-   org\_type — тип организации
    
-   balance — текущий баланс договора
    
-   acc\_deposit — сумма депозита на договоре
    
-   comment — дополнительный комментарий к договору
    
-   inn — ИНН организации (идентификационный номер налогоплательщика)
    
-   kpp — КПП организации (код причины постановки на учёт)
    
-   bill\_email — email, указанный для выставления счетов или уведомлений по биллингу
    
-   bill\_phone — телефон для связи по вопросам биллинга
    
-   hidden — признак удалённого аккаунта: 0 — аккаунт не удалён, 1 — аккаунт удалён
    
-   veh\_count — количество транспортных средств, закреплённых за этим договором
