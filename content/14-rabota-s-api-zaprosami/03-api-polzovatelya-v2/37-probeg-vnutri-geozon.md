---
title: "Пробег внутри геозон"
source: probeg_vnutri_geozon.html
---

Этот API получает информацию о пробеге транспортных средств внутри заданных геозон за выбранный период времени.

## Как получить данные

### Метод

GET

### Адрес запроса

Для получения данных используйте адрес:  https://<server\_address>/api/api.php?

### Параметры запроса

-   cmd = zones\_mileage — команда для получения пробега в геозонах
    
-   ts — время начала выборки (Unix timestamp)
    
-   te — время окончания выборки (Unix timestamp)
    
-   imei — список IMEI объектов через запятую
    
-   zones — список имён геозон через запятую (необязательный параметр; если не указан, возвращается пробег по всем зонам)
    
-   node — номер узла, на котором нужно выполнить команду
    

Пример запроса

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=zones_mileage&amp;ts=1596229200&amp;te=1597006800&amp;imei=867857035056105,123123123&amp;zones=Симферополь,Белогорск,Судак&amp;node=1</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "ts":"1596229200",</div><div>&nbsp; "te":"1597006800",</div><div>&nbsp; "data":{</div><div>&nbsp;&nbsp; &nbsp; "867857035056105":[</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Симферополь",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":88308,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":259.84</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"За пределами города",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":21564,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":283.47</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Белогорск",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":704,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":10.77</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Судак",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":1332,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":11.45</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

В ответ на API-запрос возвращается:

-   zone — название геозоны
    
-   duration — время нахождения объекта в зоне в секундах
    
-   mileage — пройденное расстояние в километрах в данной зоне
