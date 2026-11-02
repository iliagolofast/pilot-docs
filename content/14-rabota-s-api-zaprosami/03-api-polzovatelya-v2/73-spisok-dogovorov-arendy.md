---
title: "Список договоров аренды"
source: spisok_dogovorov_arendy_.html
---

Этот API передаёт информацию о договорах аренды из модуля Rent Car (AVIS): открытые, забронированные и закрытые договоры. Для каждого договора возвращаются данные об арендаторе, точках начала и окончания аренды, плановых датах выдачи и возврата, а также номера договоров и автомобиля.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/api.php?

### Параметры запроса

Чтобы получить нужные данные, добавьте к адресу запроса следующие параметры:

-   cmd=rentcar\_contracts — команда для получения списка договоров аренды.
    
-   status — статус договоров, которые нужно получить. Можно передать один статус или несколько через запятую:
    
-   open — открытые договоры (аренда сейчас активна)
    
-   booked — забронированные договоры (бронь, аренда ещё не началась)
    
-   closed — закрытые договоры (аренда завершена)
    

Формат запрашиваемых данных — массив договоров аренды.

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rentcar_contracts&amp;status=open,booked,closed</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"list": [</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"mva": "12312",</div><div>&nbsp;"ra": "16",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "Private house"</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "rgergrr"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "erterter"</div><div>&nbsp;},</div><div>&nbsp;"mva": "2222",</div><div>&nbsp;"ra": "17",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "ABC-123"</div><div>&nbsp;}</div><div>&nbsp;]</div><div>}</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   code — код статуса (0 — успех)
    
-   msg — сообщение о статусе (OK — запрос выполнен успешно)
    
-   list — массив договоров аренды, каждый из которых содержит:
    
-   driver\_name — имя арендатора (водителя), на которого оформлен договор
    
-   driver\_phone — контактный телефон арендатора
    
-   start\_location — точка начала аренды (выдача автомобиля):
    
-   title — название/адрес точки выдачи
    
-   end\_location — точка окончания аренды (возврат автомобиля):
    
-   title — название/адрес точки возврата
    
-   mva — номер договора аренды (Master Vehicle Agreement)
    
-   ra — номер бронирования / соглашения об аренде (Rental Agreement)
    
-   ts\_expected — плановое время начала аренды (Unix timestamp)
    
-   te\_expected — плановое время окончания аренды (Unix timestamp)
    
-   plate\_number — государственный регистрационный номер автомобиля по договору
