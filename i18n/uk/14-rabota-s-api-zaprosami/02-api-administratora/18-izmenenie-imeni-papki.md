---
title: "Зміна імені папки"
---

За допомогою цього API можна змінити ім’я наявної папки. Для цього необхідно надіслати запит із параметрами, що вказують на папку, ім’я якої потрібно змінити, і нове ім’я для неї.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php

### Метод

 POST

### Параметри запиту

-   cmd=editfoldername — команда для зміни імені папки
    
-   folder\_id — ідентифікатор папки, ім’я якої необхідно змінити
    
-   new\_folder\_name  — нове ім’я для папки
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=editfoldername&amp;folder_id=454545&amp;new_folder_name=testname&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Имя папки успешно обновлено"</div><div>}</div></td></tr></tbody></table>
