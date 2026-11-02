---
title: "Список договорів оренди"
---

Цей API передає інформацію про договори оренди з модуля Rent Car (AVIS): відкриті, заброньовані та закриті договори. Для кожного договору повертаються дані про орендаря, точки початку та завершення оренди, планові дати видачі й повернення, а також номери договорів і автомобіля.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

Щоб отримати потрібні дані, додайте до адреси запиту такі параметри:

-   cmd=rentcar\_contracts — команда для отримання списку договорів оренди.
    
-   status — статус договорів, які потрібно отримати. Можна передати один статус або кілька через кому:
    
-   open — відкриті договори (оренда зараз активна)
    
-   booked — заброньовані договори (бронювання, оренда ще не почалася)
    
-   closed — закриті договори (оренда завершена)
    

Формат запитуваних даних — масив договорів оренди.

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rentcar_contracts&amp;status=open,booked,closed</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"list": [</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"mva": "12312",</div><div>&nbsp;"ra": "16",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "Private house"</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "rgergrr"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "erterter"</div><div>&nbsp;},</div><div>&nbsp;"mva": "2222",</div><div>&nbsp;"ra": "17",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "ABC-123"</div><div>&nbsp;}</div><div>&nbsp;]</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код статусу (0 — успіх)
    
-   msg — повідомлення про статус (OK — запит виконано успішно)
    
-   list — масив договорів оренди, кожен з яких містить:
    
-   driver\_name — ім’я орендаря (водія), на якого оформлено договір
    
-   driver\_phone — контактний телефон орендаря
    
-   start\_location — точка початку оренди (видача автомобіля):
    
-   title — назва/адреса точки видачі
    
-   end\_location — точка завершення оренди (повернення автомобіля):
    
-   title — назва/адреса точки повернення
    
-   mva — номер договору оренди (Master Vehicle Agreement)
    
-   ra — номер бронювання / угоди про оренду (Rental Agreement)
    
-   ts\_expected — планований час початку оренди (Unix timestamp)
    
-   te\_expected — планований час завершення оренди (Unix timestamp)
    
-   plate\_number — державний реєстраційний номер автомобіля за договором
