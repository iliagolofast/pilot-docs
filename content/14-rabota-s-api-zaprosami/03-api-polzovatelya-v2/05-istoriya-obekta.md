---
title: "История объекта"
source: istoriya_obekta.html
---

Этот API возвращает историю движения транспортного средства за заданный период: треки с информацией о пробеге, времени работы, стоянках, координатах начала и конца и т.д.

## Как получить данные

### Метод

POST

### Адрес запроса

Для получения данных используйте адрес: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Параметры запроса

Для получения данных необходимо выполнить запрос с авторизацией и указанием функции и параметров:

-   Username — логин пользователя
    
-   Password — пароль
    
-   functionName=api\_objecthistory — команда для получения истории объекта
    
-   parameters — строка с параметрами запроса в формате:
    
    IMEI,FROM\_DATETIME,TO\_DATETIME, где:
    
-   IMEI — IMEI объекта
    
-   FROM\_DATETIME — начальная дата/время периода
    
-   TO\_DATETIME — конечная дата/время периода
    

Формат запрашиваемых данных — массив треков объекта за указанный период.

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objecthistory</div><div>parameters=352016704092097,2025-11-21 04:07:03,2025-11-23 04:07:03</div></td></tr></tbody></table>

Ответ

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"FLCNSMD": 0,</div><div>&nbsp;"ENDTM": "2025-11-21 19:05:30",</div><div>&nbsp;"MILEGND": 106286.11,</div><div>&nbsp;"ENDLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"IDLDRTN": "00:00:00",</div><div>&nbsp;"CNT": 1,</div><div>&nbsp;"WRKNGDRTN": "07:47:22",</div><div>&nbsp;"MILEGN": 826.37,</div><div>&nbsp;"DRVR": "",</div><div>&nbsp;"startlatitude": 24.399892,</div><div>&nbsp;"OBJTID": 1344487,</div><div>&nbsp;"WRKNGSTRTTM": "2025-11-21 11:18:08",</div><div>&nbsp;"endlongitude": 48.20568,</div><div>&nbsp;"startlongitude": 39.644265,</div><div>&nbsp;"STPDRTN": "00:12:28",</div><div>&nbsp;"DY": "2025-11-21",</div><div>&nbsp;"endlatitude": 29.960238,</div><div>&nbsp;"OBJCTNME": "5209 ب د م",</div><div>&nbsp;"WRKNGSTRTLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"MXSPDP": 136</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

В ответ на API-запрос возвращается массив треков за указанный период. Каждый элемент массива описывает один трек и содержит:

-   FLCNSMD — расход топлива в данном треке
    
-   ENDTM — время окончания трека
    
-   MILEGND — общий пробег на конец трека
    
-   ENDLCTN — адрес точки окончания трека
    
-   IDLDRTN — суммарное время работы на холостом ходу (idle) в этом треке
    
-   CNT — порядковый номер (индекс) трека за день
    
-   WRKNGDRTN — суммарное время работы двигателя / зажигания «включено»
    
-   MILEGN — пробег, пройденный в пределах этого трека
    
-   DRVR — имя водителя
    
-   startlatitude — широта точки начала трека
    
-   startlongitude — долгота точки начала трека
    
-   endlatitude — широта точки окончания трека
    
-   endlongitude — долгота точки окончания трека
    
-   OBJTID — внутренний идентификатор объекта
    
-   WRKNGSTRTTM — время первого включения зажигания в данном треке
    
-   STPDRTN — суммарное время стоянок внутри трека
    
-   DY — дата трека
    
-   OBJCTNME — имя объекта
    
-   WRKNGSTRTLCTN — адрес точки начала трека
    
-   MXSPDP — максимальная достигнутая скорость в этом треке
