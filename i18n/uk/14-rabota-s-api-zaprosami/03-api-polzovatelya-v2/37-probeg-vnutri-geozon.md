---
title: "Пробіг усередині геозон"
---

Цей API отримує інформацію про пробіг транспортних засобів усередині заданих геозон за обраний період часу.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd = zones\_mileage — команда для отримання пробігу в геозонах
    
-   ts — час початку вибірки (Unix timestamp)
    
-   te — час завершення вибірки (Unix timestamp)
    
-   imei — список IMEI об’єктів через кому
    
-   zones — список назв геозон через кому (необов’язковий параметр; якщо не вказано, повертається пробіг по всіх зонах)
    
-   node — номер вузла, на якому потрібно виконати команду
    

Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=zones_mileage&amp;ts=1596229200&amp;te=1597006800&amp;imei=867857035056105,123123123&amp;zones=Симферополь,Белогорск,Судак&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "ts":"1596229200",</div><div>&nbsp; "te":"1597006800",</div><div>&nbsp; "data":{</div><div>&nbsp;&nbsp; &nbsp; "867857035056105":[</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Симферополь",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":88308,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":259.84</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"За пределами города",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":21564,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":283.47</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Белогорск",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":704,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":10.77</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Судак",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":1332,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":11.45</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   zone — назва геозони
    
-   duration — час перебування об’єкта в зоні в секундах
    
-   mileage — пройдена відстань у кілометрах у цій зоні
