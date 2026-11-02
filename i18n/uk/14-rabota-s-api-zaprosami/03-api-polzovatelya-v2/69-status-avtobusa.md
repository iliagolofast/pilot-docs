---
title: "Статус автобуса"
---

Цей API повертає актуальний стан автобуса: маршрут, поточну та наступну зупинки, а також інформацію про сам маршрут (номер, вартість, інтервал руху тощо).

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу:  https://<server\_address>/api/api.php?

### Параметри запиту

-   cmd=currentBusState — команда для отримання статусу автобуса
    
-   vehnum — номер автобуса
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=currentBusState&amp;vehnum=А%20086%20КХ%20116%20RUS&amp;node=1</div></td></tr></tbody></table>

**Відповідь**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "lines": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1086,</div><div>&nbsp; &nbsp; &nbsp; "name": "1А",</div><div>&nbsp; &nbsp; &nbsp; "number": "1А",</div><div>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; &nbsp; "description": "1А",</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; &nbsp; "interval": 10,</div><div>&nbsp; &nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_id": 0,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_order": 0,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_id": 5217,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_order": 48</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   id — ID маршруту
    
-   name — назва маршруту
    
-   number — номер маршруту
    
-   bidirectional — ознака двоспрямованості (1 — так, 0 — ні)
    
-   active — ознака активності маршруту (1 — активний)
    
-   price — вартість проїзду
    
-   interval — інтервал руху в хвилинах
    
-   currentstop\_id — ID зупинки, на якій зараз перебуває автобус
    
-   currentstop\_order — порядковий номер поточної зупинки
    
-   nextstop\_id — ID наступної зупинки
    
-   nextstop\_order — порядковий номер наступної зупинки
