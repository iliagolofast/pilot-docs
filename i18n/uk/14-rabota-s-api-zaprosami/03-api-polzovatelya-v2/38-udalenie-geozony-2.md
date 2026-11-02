---
title: "Видалення геозони"
---

Цей API видаляє геозону із системи. Під час видалення геозони автоматично знімаються всі прив’язки цієї геозони до транспортних засобів.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для виконання запиту використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=geofencedel — команда для видалення геозони
    
-   zone\_id — внутрішній ідентифікатор геозони
    
-   external\_id — зовнішній ідентифікатор геозони (необов’язково)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=geofencedel&amp;zone_id=473989&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"data": {</div><div>&nbsp;"zones_deleted": [</div><div>&nbsp;473989</div><div>&nbsp;]</div><div>&nbsp;}</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код результату (0 — успішна операція)
    
-   message — повідомлення сервера про результат дії
    
-   data.zones\_deleted — масив ID видалених геозон (zone\_id), для яких операція пройшла успішно
