---
title: "Отримання списку папок"
---

Цей API використовується для отримання списку папок. У відповіді повертається список з унікальними ID папок, їхніми назвами та батьківськими папками.

## Як отримати дані

### Метод

GET

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

Обов’язкові:

-   cmd=getfolders — команда для отримання списку папок
    
-   node — номер вузла, на якому потрібно виконати команду
    

Додаткові:

-   account\_id — ID облікового запису, для якого потрібно отримати список папок
    

### Приклад запиту

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=getfolders&amp;account_id=3925&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "9793": {"name": "АС-Капитал", "parent": "Колонна №1"},</div><div>&nbsp; "11462": {"name": "Ленэнерго", "parent": "Колонна №1"},</div><div>&nbsp; "12551": {"name": "Вектор", "parent": "test123"},</div><div>&nbsp; "16453": {"name": "test_alex", "parent": "1april"},</div><div>&nbsp; "18492": {"name": "31Novfolder", "parent": "Колонна №1"}</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   ключ (наприклад, "9793") — унікальний ID папки
    
-   name — назва папки
    
-   parent — батьківська папка, до якої належить поточна папка
