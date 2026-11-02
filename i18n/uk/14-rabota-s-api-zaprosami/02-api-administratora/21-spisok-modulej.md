---
title: "Список модулів"
---

За допомогою цього API отримуйте повний список доступних модулів у договорі з їхніми ідентифікаторами та описом.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/ax/api.php?

### Параметри запиту

-   cmd=modlist — команда для отримання списку модулів
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=modlist&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "код": 0,</div><div>&nbsp; "данные": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль топливных карт",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 7,</div><div>&nbsp; &nbsp; &nbsp; "имя": "топливо"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль блокировки двигателя",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 8,</div><div>&nbsp; &nbsp; &nbsp; "имя": "блок"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль уведомлений",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 27,</div><div>&nbsp; &nbsp; &nbsp; "имя": "уведомление"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "сообщение": "ОК"</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   код — код виконання запиту (0 — успішно)
    
-   данные — масив об’єктів з модулями:
    
-   descr — опис модуля
    
-   идентификатор — унікальний ID модуля
    
-   имя — системна назва модуля
    
-   сообщение — текстове повідомлення про результат запиту
