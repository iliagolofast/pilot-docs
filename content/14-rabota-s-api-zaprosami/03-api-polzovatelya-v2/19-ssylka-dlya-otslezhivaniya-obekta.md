---
title: "Ссылка для отслеживания объекта"
source: ssylka_dlya_otslezhivaniya_obekta.html
---

Этот API получает временную ссылку для отслеживания объекта на карте с активацией и деактивацией по заданным геозонам.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd=get\_temp\_link — команда API для получения временной ссылки
    
-   imei — идентификатор объекта (ТС) в системе
    
-   startgeo — геозона для активации ссылки
    
-   stopgeo — геозона для деактивации ссылки
    
-   max\_duration — максимальное время действия ссылки в минутах (по умолчанию 24 часа)
    

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_temp_link&amp;imei=356307045913463&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API&amp;max_duration=800</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/monitor_token.php?token=1f87a19c068ad47f3f769dc151527794&amp;lang=en&amp;zoom=10&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API</div></td></tr></tbody></table>

В ответ возвращается прямая ссылка на карту с временным токеном. Ссылка учитывает указанные геозоны активации (startgeo) и деактивации (stopgeo)
