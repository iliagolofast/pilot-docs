---
title: "Підключення до BI Analytics API"
---

Щоб підключитися до BI Analytics API, необхідно отримати дані для авторизації та правильно налаштувати параметри підключення.

Для підключення вам знадобляться:

— логін і пароль партнерського акаунта

— адреса сервера, на якому працює ваш акаунт

Після підготовки цих даних ви зможете використовувати BI Analytics API для підключення до Power BI або будь-якої іншої BI-системи, що підтримує роботу з REST API.

## Де взяти логін і пароль

Для підключення до BI Analytics API потрібні логін і пароль партнерського акаунта.

Використовуйте ті самі дані, які були видані вам під час реєстрації партнерського акаунта. Це ті самі логін і пароль, які використовуються для входу в панель адміністратора.

Якщо у вас є доступ із правами головного адміністратора, ви можете переглянути ці дані в картці партнерського акаунта на вкладці «Основні налаштування»:

-   Логін — використовуйте як username
    
-   Пароль — використовуйте як password
    

![Підключення до BI Analytics API](images/drex_podklyuchenie_k_bi_analytics_api_screen.png)

## Як вибрати адресу сервера

Для підключення до BI Analytics API в запиті потрібно вказати адресу сервера в параметрі BaseUrl. Використовуйте той сервер, на якому працює ваш акаунт.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Сервер</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Адреса</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Призначення</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Production</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Основний сервер</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Саудівська Аравія</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://ksa.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Регіональний сервер для Саудівської Аравії</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Африка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.africa</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Регіональний сервер для Африки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Blade</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://blade.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сервер Blade</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Iglit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://gps.iglit.tech</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сервер Iglit</span></div></td></tr></tbody></table>

У запиті вкажіть потрібний URL, наприклад,

<table><tbody><tr><td><span></span></td><td><div>BaseUrl = "https://ksa.pilot-gps.com",</div></td></tr></tbody></table>
