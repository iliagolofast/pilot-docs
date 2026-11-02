---
title: "Історія об’єкта"
---

Цей API повертає історію руху транспортного засобу за заданий період: треки з інформацією про пробіг, час роботи, стоянки, координати початку та кінця тощо.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Параметри запиту

Для отримання даних необхідно виконати запит з авторизацією та зазначенням функції й параметрів:

-   Username — логін користувача
    
-   Password — пароль
    
-   functionName=api\_objecthistory — команда для отримання історії об’єкта
    
-   parameters — рядок з параметрами запиту у форматі:
    
    IMEI,FROM\_DATETIME,TO\_DATETIME, де:
    
-   IMEI — IMEI об’єкта
    
-   FROM\_DATETIME — початкова дата/час періоду
    
-   TO\_DATETIME — кінцева дата/час періоду
    

Формат запитуваних даних — масив треків об’єкта за вказаний період.

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objecthistory</div><div>parameters=352016704092097,2025-11-21 04:07:03,2025-11-23 04:07:03</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"FLCNSMD": 0,</div><div>&nbsp;"ENDTM": "2025-11-21 19:05:30",</div><div>&nbsp;"MILEGND": 106286.11,</div><div>&nbsp;"ENDLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"IDLDRTN": "00:00:00",</div><div>&nbsp;"CNT": 1,</div><div>&nbsp;"WRKNGDRTN": "07:47:22",</div><div>&nbsp;"MILEGN": 826.37,</div><div>&nbsp;"DRVR": "",</div><div>&nbsp;"startlatitude": 24.399892,</div><div>&nbsp;"OBJTID": 1344487,</div><div>&nbsp;"WRKNGSTRTTM": "2025-11-21 11:18:08",</div><div>&nbsp;"endlongitude": 48.20568,</div><div>&nbsp;"startlongitude": 39.644265,</div><div>&nbsp;"STPDRTN": "00:12:28",</div><div>&nbsp;"DY": "2025-11-21",</div><div>&nbsp;"endlatitude": 29.960238,</div><div>&nbsp;"OBJCTNME": "5209 ب د م",</div><div>&nbsp;"WRKNGSTRTLCTN": "Sakaka, Al Jawf Region, 3628, Saudi Arabia",</div><div>&nbsp;"MXSPDP": 136</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

У відповідь на API-запит повертається масив треків за вказаний період. Кожен елемент масиву описує один трек і містить:

-   FLCNSMD — витрата палива в цьому треку
    
-   ENDTM — час закінчення треку
    
-   MILEGND — загальний пробіг на кінець треку
    
-   ENDLCTN — адреса точки закінчення треку
    
-   IDLDRTN — сумарний час роботи на холостому ходу (idle) у цьому треку
    
-   CNT — порядковий номер (індекс) треку за день
    
-   WRKNGDRTN — сумарний час роботи двигуна / запалювання «увімкнено»
    
-   MILEGN — пробіг, пройдений у межах цього треку
    
-   DRVR — ім’я водія
    
-   startlatitude — широта точки початку треку
    
-   startlongitude — довгота точки початку треку
    
-   endlatitude — широта точки закінчення треку
    
-   endlongitude — довгота точки закінчення треку
    
-   OBJTID — внутрішній ідентифікатор об’єкта
    
-   WRKNGSTRTTM — час першого вмикання запалювання в цьому треку
    
-   STPDRTN — сумарний час стоянок усередині треку
    
-   DY — дата треку
    
-   OBJCTNME — ім’я об’єкта
    
-   WRKNGSTRTLCTN — адреса точки початку треку
    
-   MXSPDP — максимальна досягнута швидкість у цьому треку
