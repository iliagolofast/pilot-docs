---
title: "Список облікових записів"
---

Цей API отримує список облікових записів з основною інформацією: ID договору, назва, баланс і кількість транспортних засобів.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=accountslist — команда для отримання списку облікових записів
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=accountslist&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 10,</div><div>&nbsp; "org_name": "Test relaying",</div><div>&nbsp; "org_type": 2,</div><div>&nbsp; "balance": "0.00",</div><div>&nbsp; "acc_deposit": "40000.00",</div><div>&nbsp; "comment": null,</div><div>&nbsp; "inn": null,</div><div>&nbsp; "kpp": null,</div><div>&nbsp; "bill_email": "relay@mail.com",</div><div>&nbsp; "bill_phone": "43542554",</div><div>&nbsp; "hidden": 1,</div><div>&nbsp; "veh_count": 0</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   id — унікальний ідентифікатор облікового запису
    
-   org\_name — назва організації або договору
    
-   org\_type — тип організації
    
-   balance — поточний баланс договору
    
-   acc\_deposit — сума депозиту на договорі
    
-   comment — додатковий коментар до договору
    
-   inn — ІПН організації (індивідуальний податковий номер)
    
-   kpp — КПП організації (код причини постановки на облік)
    
-   bill\_email — email, указаний для виставлення рахунків або сповіщень з білінгу
    
-   bill\_phone — телефон для зв’язку з питань білінгу
    
-   hidden — ознака видаленого облікового запису: 0 — обліковий запис не видалено, 1 — обліковий запис видалено
    
-   veh\_count — кількість транспортних засобів, закріплених за цим договором
