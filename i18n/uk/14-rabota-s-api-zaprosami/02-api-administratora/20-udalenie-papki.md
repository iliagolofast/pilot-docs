---
title: "Видалення папки"
---

Цей API видаляє вказану папку та переміщує всі транспортні засоби з неї до кореневої папки.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

-   cmd=deletefolder — команда для видалення папки
    
-   folder\_id— ідентифікатор папки, яку потрібно видалити
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=deletefolder&amp;folder_id=545&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Папка успешно удалена"</div><div>}</div></td></tr></tbody></table>
