---
title: "Справочник конфигураций"
source: spravochnik_konfiguratsij.html
---

В этой статье рассмотрим доступные конфигурации в системе и их назначение. 

**Добавление новых разрешенных автомобилей в уведомления**

Для того, чтобы новые разрешенные автомобили автоматически добавлялись в уведомления, необходимо установить данную конфигурацию в личном кабинете. Данная  функция  предназначена для маппинговых  объектов

( т.е для объектов из других договоров).

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация </span><span><strong>Confirm adding vehicles to notifications</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom.png)

**Настройка скрытия информации о приборе**

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация&nbsp; <strong>hide_device</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_2.png)

**Бесплатный период для Партнера**

Предназначено для тестового периода системы.

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация&nbsp; </span><span><strong>Partner Grace Period (days)</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_3.png)

**Добавление столбца "Адрес" в дереве объектов**

Для отображения адреса  во  вкладке онлайн следует   добавить  следующую  конфигурацию в  настройки  договора.

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация =&nbsp; </span><strong>Address in Online Tree</strong></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_4.png)

**Блокировка партнера при отрицательном балансе по истечению 5-ти дней**

При условии, что у партнера тип счета - предоплата и баланс меньше или равен нулю (с учетом депозита).

Если партнер находится в системе, то на протяжение 5 дней, каждые 3 часа в панели администратора будет появляться диалоговое окно с предупреждением.

**![](images/drex_spravochnik_konfiguratsij_custom_5.png)**

На 5-й день, если партнер находится в системе, произойдет автоматическое завершение сеанса и перенос партнера на страницу логина.

Партнер не сможет зайти в панель администратора.

![](images/drex_spravochnik_konfiguratsij_custom_6.png)

Окно добавить оповещение.

После пополнения баланса, партнер входит в систему.

![](images/drex_spravochnik_konfiguratsij_custom_7.png)

 **Один водитель**

Привязать только одного водителя к объекту при создании нового водителя или при обновлении старого.

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация <strong>single_driver = true </strong>для учетной записи.</span></div></td></tr></tbody></table>

Когда мы создаем водителя или обновляем старую запись и связываем водителя с транспортным средством или если у этого конкретного транспортного средства уже есть связанный водитель, он сначала автоматически отменяет связь с предыдущим водителем, а затем связывает нового водителя.

![](images/drex_spravochnik_konfiguratsij_custom_8.png)

**Отображение видео трансляции в новой вкладке**

Для того , чтобы  отобразить видео трансляцию в новой вкладке, необходимо внести конфиг  в  договор  со значением true, в настройки модуля.

Для того, чтобы  конфигурация стала не активной, необходимо  прописать false.

-   Активируйте модуль CMS.
    
-   Перейдите во вкладку настройки модуля.
    
-   Добавьте запись **open\_in\_new\_tab**
    

![](images/drex_spravochnik_konfiguratsij_custom_9.png)

При  нажатии на значок камеры в  интерфейсе  пользователя, открывается трансляция в  новой вкладке по ссылке.

Нажав на заначек  камеры   и выбрав  период дат , появиться   история записи с камер наблюдения.

![](images/drex_spravochnik_konfiguratsij_custom_10.png)

**Ребрендинг для двухфакторной аутентификации TOTP**

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация&nbsp; </span><span><strong>TOTP Label = name</strong></span></div></td></tr></tbody></table>

Предназначен для  изменения названия компани в иконке,  когда клиенту приходят коды для входа в учетную запись.

![](images/drex_spravochnik_konfiguratsij_custom_11.png)

![](images/drex_spravochnik_konfiguratsij_custom_12.png)

**Видимость всех тарифов**

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация&nbsp; </span><span><strong>Only private prices = 1</strong></span></div></td></tr></tbody></table>

 Тарифы  можно скрыть  используя  конфигурацию в настройках Партнера.

![](images/drex_spravochnik_konfiguratsij_custom_13.png)

Конфигурация для  данного окна, видимость в настройках договора.

![](images/drex_spravochnik_konfiguratsij_custom_14.png)

**Модуль Аналитики (Панель) - стартовая вкладка.**

Конфигурация  предназначена отображать  Панель  Аналитики при стартовой загрузке  интерфейса.

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация&nbsp; </span><span><strong>Main Tab = dashboard</strong></span></div></td></tr></tbody></table>

**![](images/drex_spravochnik_konfiguratsij_custom_15.png)**

Вкладка  в Пользовательском  интерфейсе  отображается как  стартовая.

**![](images/drex_spravochnik_konfiguratsij_custom_16.png)**

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация = <strong>additional_fields</strong> для модуля топливных карт&nbsp; в аккаунте.</span></div><div>&nbsp;</div></td></tr></tbody></table>

По умолчанию столбцы скрыты, и пользователь может их отобразить во вкладке транзакции. В зависимости от типа вашего топливного кабинета поля могут быть разными для  настройки конфигурации.

![](images/drex_spravochnik_konfiguratsij_custom_17.png)

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация<strong> Low Ballance Emails</strong> = </span><a href="mailto:s@pilot-telematics.com,"><span>s@pilot-telematics.com</span></a><span> (можно указать несколько адресов)</span></div></td></tr></tbody></table>

Конфигурация предназначена для выбора аккаунтов, по которым нужно получать уведомления о низком балансе. Укажите в настройках необходимые email-адреса для уведомлений.

![](images/drex_spravochnik_konfiguratsij_custom_18.png)

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация </span><span><strong>Maps</strong> =&nbsp;{"default": "Google Sat", "hidden":&nbsp;["OSM"]}</span></div></td></tr></tbody></table>

Конфигурация для договора или партнера позволяет управлять видимостью карт и устанавливать карту по умолчанию

(Яндекс, Google, OSM).

![](images/drex_spravochnik_konfiguratsij_custom_19.png)

![](images/drex_spravochnik_konfiguratsij_custom_20.png)

<table><tbody><tr><td><span></span></td><td><div><span>Конфигурация <strong>Link to manual&nbsp; = </strong></span><a href="https://doc.pilot-gps.ru"><span>https://doc.pilot-gps.ru</span></a></div></td></tr></tbody></table>

Конфигурация позволяет пользователям загружать свои собственные учебные материалы и руководства пользователя в систему.

Загруженные документы будут доступны для просмотра в любое время, что обеспечивает удобный доступ к инструкциям по функциям Pilot.

Пользователи могут легко находить нужные материалы и использовать их для получения информации и помощи по различным аспектам работы с системой.

![](images/drex_spravochnik_konfiguratsij_custom_21.png)

![](images/drex_spravochnik_konfiguratsij_custom_22.png)

<table><tbody><tr><td><span></span></td><td><div>Конфигурация <strong>Telegram bot</strong></div></td></tr></tbody></table>

Чтобы добавить быстрый переход в Telegram-бот через личный кабинет пользователя, используйте конфигурацию Telegram bot.

 В поле значения укажите адрес бота, например: @PilotGpsBot.

![](images/drex_spravochnik_konfiguratsij_custom_23.png)

После сохранения в личном кабинете пользователя, в меню дополнительных настроек, появится отдельная вкладка со ссылкой для перехода в Telegram-бот.

![](images/drex_spravochnik_konfiguratsij_custom_24.png)
