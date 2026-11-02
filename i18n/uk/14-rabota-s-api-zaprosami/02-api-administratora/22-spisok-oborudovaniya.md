---
title: "Список обладнання"
---

Цей API використовується для отримання списку всіх типів обладнання (моделей пристроїв), що використовуються в договорі, із зазначенням виробника.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=vehmodellist — команда для отримання списку моделей обладнання
    
-   node — номер вузла, на якому потрібно виконати команду
    
    ### Приклад запиту
    

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehmodellist&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 Lite GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   code — код виконання запиту (0 — успішно)
    
-   data — масив моделей обладнання:
    
-   identifier — унікальний ідентифікатор моделі
    
-   name — назва моделі обладнання
    
-   supplier — виробник обладнання
    
-   message — текстове повідомлення про результат запиту
