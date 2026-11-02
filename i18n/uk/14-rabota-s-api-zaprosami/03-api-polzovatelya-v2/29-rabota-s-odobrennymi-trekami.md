---
title: "Робота зі схваленими треками"
---

Цей API допомагає працювати із затвердженими треками транспортних засобів: установлювати періоди, отримувати треки та використовувати трек-плеєр.

## Як отримати дані

### Адреса запиту

Для отримання даних використовуйте адресу: https://<server\_address>/api/api.php?

### Параметри запиту

Параметри передаються через рядок запиту методом POST або GET залежно від команди.

Щоб отримати потрібні дані, додайте до адреси запиту параметри. Параметри вказуються після знака питання «?» і розділяються знаком «&».

-   cmd=set\_approved\_tracks — команда для встановлення затверджених періодів
    
-   cmd=get\_approved\_tracks — команда для отримання схвалених треків
    
-   veh — державний номер або ідентифікатор транспортного засобу
    
-   ts — початок періоду (timestamp)
    
-   te — кінець періоду (timestamp)
    
-   node — номер вузла, на якому потрібно виконати команду
    

### Установити затверджені періоди

Приклад API-запиту

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=set_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=1537952400&amp;node=1</span></div></td></tr></tbody></table>

Відповідь API

<table><tbody><tr><td><span></span></td><td><div>{"code":0,"msg":"ОК обновлено"}</div></td></tr></tbody></table>

### Отримати схвалені треки

Приклад API-запиту

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;admin_address&gt;<span>/api/api.php?cmd=get_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=153795 2400&amp;node=1</span></div></td></tr></tbody></table>

Відповідь API

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "data":{</div><div>&nbsp; &nbsp; "approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":2.8051348330013,"ts":1537948809,"te":1537949431,"max_speed":"59","avg_speed":26}</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "not_approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":1.8650025635569,"ts":1537945206,"te":1537946030,"max_speed":"40","avg_speed":12},</div><div>&nbsp; &nbsp; &nbsp; {"length":4.1987356239849,"ts":1537948298,"te":1537948798,"max_speed":"65","avg_speed":37}</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

У відповідь на API-запит повертається:

-   approved— список затверджених треків
    
-   not\_approved— список треків, які не було затверджено
    
-   length— довжина треку в кілометрах
    
-   ts— час початку треку (timestamp)
    
-   te— час кінця треку (timestamp)
    
-   max\_speed— максимальна швидкість на треку
    
-   avg\_speed— середня швидкість
    

### Трек-плеєр

Трек-плеєр — це вебсервіс, який дає змогу візуально переглядати треки транспорту. На відміну від звичайного API, він одразу повертає готову сторінку з картою та треком, а не JSON чи XML.

Посилання для перегляду треку:

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;server_address&gt;<span>/api/track_player.php?login=demo&amp;pass=demo&amp;ts=1536933600&amp;te=1536940800&amp;veh=в848ае199&amp;lang=ru&amp;node=1</span></div></td></tr></tbody></table>

Ви можете використовувати URL як iframe src для відображення треку на сторінці.
