---
title: "Створення папки"
---

Цей API використовується для створення нової папки в системі. Можна вказати батьківську папку, назву нової папки, а також права доступу для користувачів.

## Як отримати дані

### Метод

POST

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/backend/api.php?

### Параметри запиту

Обов’язкові:

-   cmd=addfolder — команда для створення папки
    
-   account\_id — ID договору
    
-   parent\_id — ID батьківської папки
    
-   folder\_name — ім’я папки, що створюється
    
-   node — номер вузла, на якому потрібно виконати команду
    

Додаткові:

-   users— список ID користувачів через кому, яким потрібно надати права на цю папку
    
-   Значення users=admins — надає права всім користувачам договору з роллю адміністратора
    
    Якщо параметр не задано або він порожній — права копіюються з батьківської папки
    

### Приклади запитів

Права на папку всім адміністраторам:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=admins&amp;node=1</div></td></tr></tbody></table>

Права на папку конкретним користувачам:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=123,212,432&amp;node=1</div></td></tr></tbody></table>

Папка створюється з правами батьківської папки (за замовчуванням):

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;node=1</div></td></tr></tbody></table>

Відповідь

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Создана новая папка my_folder с идентификатором 27330"</div><div>}</div></td></tr></tbody></table>
