---
title: "Подключение к BI Analytics API"
source: podklyuchenie_k_bi_analytics_api.html
---

Чтобы подключиться к BI Analytics API, необходимо получить данные для авторизации и правильно настроить параметры подключения.

Для подключения вам понадобятся:

— логин и пароль партнёрского аккаунта

— адрес сервера, на котором работает ваш аккаунт

После подготовки этих данных вы сможете использовать BI Analytics API для подключения к Power BI или любой другой BI-системе, поддерживающей работу с REST API.

## Где взять логин и пароль

Для подключения к BI Analytics API нужны логин и пароль партнёрского аккаунта.

Используйте те же данные, которые были выданы вам при регистрации партнёрского аккаунта. Это те же логин и пароль, которые используются для входа в панель администратора.

Если у вас есть доступ с правами главного администратора, вы можете посмотреть эти данные в карточке партнёрского аккаунта во вкладке «Основные настройки»:

-   Логин — используйте как username
    
-   Пароль — используйте как password
    

![Подключение к BI Analytics API](images/drex_podklyuchenie_k_bi_analytics_api_screen.png)

## Как выбрать адрес сервера

Для подключения к BI Analytics API в запросе нужно указать адрес сервера в параметре BaseUrl. Используйте тот сервер, на котором работает ваш аккаунт.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Сервер</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Адрес</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Назначение</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Production</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Основной сервер</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Саудовская Аравия</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://ksa.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Региональный сервер для Саудовской Аравии</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Африка</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.africa</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Региональный сервер для Африки</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Blade</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://blade.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сервер Blade</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Iglit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://gps.iglit.tech</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Сервер Iglit</span></div></td></tr></tbody></table>

В запросе укажите нужный URL, например,

<table><tbody><tr><td><span></span></td><td><div>BaseUrl = "https://ksa.pilot-gps.com",</div></td></tr></tbody></table>
