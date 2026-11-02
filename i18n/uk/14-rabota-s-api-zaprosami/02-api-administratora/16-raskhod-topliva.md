---
title: "Витрата палива"
---

Цей API отримує дані про витрату палива для конкретного транспортного засобу за вибраний період часу.

Повертається інформація про заправки, витрачене паливо, зливи та показання датчиків палива на початок і кінець періоду.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=fuel — команда для отримання даних про паливо
    
-   ts — дата початку вибірки у форматі Unix timestamp
    
-   te — дата кінця вибірки у форматі Unix timestamp
    
-   agentid — ID транспортного засобу (agent\_id)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=fuel&amp;ts=1708981200&amp;te=1709154000&amp;agentid=6477&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "fill": 100,&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "fuel": 84, &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stale": 0,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stop": 43 &nbsp; &nbsp;</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату запиту (0 = успішний запит)
    
-   fill — кількість палива, заправленого протягом періоду
    
-   fuel — кількість витраченого палива
    
-   stale — кількість палива, злитого або втраченого
    
-   start — показання датчика палива на початок періоду
    
-   stop — показання датчика палива на кінець періоду
    
-   msg — текстове повідомлення з результатом запиту
