---
title: "Получение информации об объекте"
source: poluchenie_informatsii_ob_obekte.html
---

Этот API используется для получения полной информации о транспортном средстве.

Можно запросить данные как по agent\_id, так и по IMEI-номеру устройства.

В ответе возвращается подробная информация: госномер, расход топлива, лимиты скорости, VIN, модель, настройки конфигурации, привязанный водитель и прочее.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/backend/api.php?

### Параметры запроса

Обязательные:

-   cmd=vehinfo — команда для получения информации о ТС
    
-   node — номер узла, на котором нужно выполнить команду
    

Один из этих параметров должен быть указан:

-   agentid — идентификатор машины (agent\_id)
    
-   imei — уникальный IMEI-номер устройства
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehinfo&amp;agentid=81181&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "ownerid": 5374,</div><div>&nbsp; &nbsp; "vehiclenumber": "Howen C",</div><div>&nbsp; &nbsp; "typeid": 1,</div><div>&nbsp; &nbsp; "summer_fuel": "10",</div><div>&nbsp; &nbsp; "winter_fuel": "10",</div><div>&nbsp; &nbsp; "idle_fuel": "2",</div><div>&nbsp; &nbsp; "time_zone": "Europe/Moscow",</div><div>&nbsp; &nbsp; "speed_limit": 0,</div><div>&nbsp; &nbsp; "agentid": 81181,</div><div>&nbsp; &nbsp; "account_id": 3925,</div><div>&nbsp; &nbsp; "model": "",</div><div>&nbsp; &nbsp; "year": "1900",</div><div>&nbsp; &nbsp; "vin": "",</div><div>&nbsp; &nbsp; "fuel_type": "50",</div><div>&nbsp; &nbsp; "driver_name": "Test",</div><div>&nbsp; &nbsp; "driver_phone": "12121212121"</div><div>&nbsp; }</div><div>]</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   ownerid — ID владельца
    
-   vehiclenumber — госномер или название ТС
    
-   typeid — тип транспортного средства
    
-   summer\_fuel / winter\_fuel / idle\_fuel — нормы расхода топлива (лето, зима, холостой ход)
    
-   time\_zone — часовой пояс, в котором используется ТС
    
-   speed\_limit — ограничение скорости
    
-   account\_id — ID договора, к которому привязано ТС
    
-   model / year / vin — модель, год выпуска и VIN автомобиля
    
-   fuel\_type — тип топлива
    
-   driver\_name / driver\_phone — ФИО и телефон закрепленного водителя
    
-   config — JSON с дополнительной конфигурацией (настройки по топливу, мотор-часам, ограничениям и др.)
