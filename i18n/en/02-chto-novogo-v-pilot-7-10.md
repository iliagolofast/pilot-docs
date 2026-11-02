---
title: "What's new in PILOT 7.10"
---

### August 2026

PILOT 7.10 expands reports, automation, and integrations, updates the admin panel, and adds new features to the mobile app.

## PILOT web version

### [New AI assistant features](lichnyj-kabinet-polzovatelya/interfejs-lichnogo-kabineta/verkhnyaya-panel/index.html#AI-помощник_ИИ)

We continue to develop the PILOT AI assistant: we have updated its design and expanded its capabilities. It answers questions about working with the platform, helps you find the right features and documentation materials, and suggests solutions to common tasks. If there is no ready answer, the assistant helps you prepare a request to technical support.

Developers now get hints on working with the API and creating extensions. The AI assistant is still being tested and refined, so its capabilities and the quality of its answers will improve gradually.

![](images/drex_chto_novogo_v_pilot_7_10_custom.png)

### [Detecting hidden fuel drains](lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/nastrojka-datchika-topliva.html)

The fuel sensor settings now include the “Drain via return line” function. It helps detect thefts in which fuel is drained through the return line to the tank.

The system analyzes abnormal fuel consumption while driving, calculates the volume of a possible drain, and marks the location of the event on the map.

![What's new in PILOT 7.10](images/drex_chto_novogo_v_pilot_7_10_screen.png)

### [Controlling stop visits by RFID](lichnyj-kabinet-polzovatelya/moduli-1/rejsy-2/kak-dobavit-ostanovki.html#Как_привязать_RFID-метку_к_остановке)

Bus visits to stops can be controlled with RFID tags. You can link one or more tags to each stop of a bus line. When the vehicle reads a linked tag, the system registers a visit to the corresponding stop.

![What's new in PILOT 7.10](images/drex_chto_novogo_v_pilot_7_10_screen_2.png)

### [Relative odometer](lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/nastrojka-otnositelnogo-odometra.html)

We added a sensor that calculates mileage from pulses from the speedometer or other connected equipment. You can use it when GPS/GLONASS data is unavailable or not accurate enough. You can set a separate number of pulses per kilometer for each vehicle.

![](images/drex_chto_novogo_v_pilot_7_10_custom_2.png)

### [Managing downtime data](lichnyj-kabinet-polzovatelya/moduli-1/servis/prostoi.html#Работа_со_списком_простоев)

The “Downtime” tab of the “Service” module now has filtering, import, and export of records. You can select data by object, dates, duration, and downtime reason, and export it to a file and load it back into the system. It is easier to find the information you need and work with a large number of records.

### ![](images/drex_chto_novogo_v_pilot_7_10_custom_3.png)

### [Video upload progress](lichnyj-kabinet-polzovatelya/moduli-1/video-i-cms/kak-rabotat-s-mediafajlami.html)

While a video file is uploading, the system shows the amount of data transferred, the percentage complete, the current speed, and the estimated time to completion. This makes it easier to estimate when the video will be ready and to notice a drop in transfer speed.

![](images/drex_chto_novogo_v_pilot_7_10_custom_4.png)

## Reports

### [Updated report scheduler](lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/planirovshchik-otchyetov.html)

We reworked the creation of schedules for automatic reports. The report parameters, the data period, and the generation schedule are separated into individual blocks, so you can independently specify what data should go into the report and when it should be sent.

The scheduler lets you generate reports for the entire previous day, set the start and end time of the period, and configure intervals that cross midnight. Before saving, you can check the data period for the next report, and in the schedule you can select specific days of the week for generating it.

![](images/drex_chto_novogo_v_pilot_7_10_custom_5.png)

### Filter by drivers

You can now generate reports only for selected drivers. The “By drivers” parameter is available for the following reports:

-   [“Downtime report”](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/otchyet-po-prostoyam.html)
    
-   [“Mileage report (by drivers)”](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/voditeli-2/otchyet-po-probegu-po-voditelyam.html)
    
-   [“Mileage report (with drivers)”](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/otchyet-po-probegu-s-voditelyami.html)
    

![](images/drex_chto_novogo_v_pilot_7_10_custom_6.png)

When you enable the parameter, the “Drivers” panel opens. In it you can select one or more drivers or a whole group. The report will include only the events related to them.

![](images/drex_chto_novogo_v_pilot_7_10_custom_7.png)

### Selecting geofences for a report

Before generating the [“Movement between zones”](lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/geozony-1/otchyet-o-peremeshchenii-mezhdu-zonami.html) report, you can select the geofences you need. The report will include only movements between them.

![](images/drex_chto_novogo_v_pilot_7_10_custom_8.png)

## Report builder

### [More sensor data in reports](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/tipy-otchyetov-v-konstruktore.html#Работа)

“Work” type reports can include values of discrete, two-position, and multi-position sensors. To output the data, just select the label of the sensor you need when configuring the column.

### [Merging report rows](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/kak-rabotat-s-konstruktorom.html#Объединение_строк)

The report builder has a new setting, {"merge": true}. It suits reports where, instead of a detailed list of events, you need a single summary row for the selected breakdown period.

When the setting is enabled, the records for the period are merged and the intermediate rows are hidden.

![](images/drex_chto_novogo_v_pilot_7_10_custom_9.png)

For example, in a report broken down by day, you can output one row per driver: with total mileage and driving and idle durations, as well as the start time of the first trip and the end time of the last trip. This makes the report more compact and the summary figures easier to compare.

![](images/drex_chto_novogo_v_pilot_7_10_custom_10.png)

### [Filtering numeric data](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/kak-rabotat-s-konstruktorom.html#Фильтрация_данных)

For columns with numeric values you can set the conditions **\>**, **<**, or **\=**. For example, the condition **\>** 25 in the “Maximum event speed” column leaves in the report only the rows where the maximum speed exceeds 25 km/h.

![](images/drex_chto_novogo_v_pilot_7_10_custom_11.png)

### [Configuring rows in geofence reports](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/tipy-otchyetov-v-konstruktore.html#Таблица_геозон)

For “Geofences” type reports you can choose how the rows are generated:

-   Geofence visits — a separate row for each visit to a geofence
    
-   Equipment work periods — a separate row for each work period of the selected sensor inside the geofence
    

![](images/drex_chto_novogo_v_pilot_7_10_custom_12.png)

For example, the Equipment work periods mode helps determine how long equipment worked in a given area. If the equipment was switched on before entering, the period starts at the moment of entry. If the object left the geofence before the equipment was switched off, the period ends at the moment of exit. The report includes only the intervals during which the object was in the geofence and the equipment was working.

### [Work shift reports](lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/kak-rabotat-s-konstruktorom.html#Разбивка_данных_по_сменам)

We added data breakdown by work shifts. A separate interval with calculated indicators is generated for each shift, so you can analyze day and night work separately.

In the report configuration you can set the shift boundaries, output one or all shifts, and choose whether to keep the night shift whole or split it at midnight.

![What's new in PILOT 7.10](images/drex_chto_novogo_v_pilot_7_10_screen_3.png)

## Integrations and API

### [Sending statuses and media files via Telegram](mobilnye-prilozheniya/telegram-bot/kak-peredavat-statusy-i-mediafajly-cherez-telegram-bot.html)

Employees can send work statuses, photos, and videos to PILOT through the Telegram bot. The available statuses are configured separately for each account, so the employee only needs to choose the right option in the bot.

![](images/drex_chto_novogo_v_pilot_7_10_custom_13.png)

You can view and download the photos and videos that were sent in the PILOT web interface. The dispatcher can track the stages of work, and the supporting materials are stored together with the work data.

![](images/drex_chto_novogo_v_pilot_7_10_custom_14.png)

### [Sending events to external systems](lichnyj-kabinet-polzovatelya/moduli-1/situatsionnyj-tsentr-2/kak-privyazat-algoritm-k-uvedomleniyu.html#Настройка_блока_Webhook)

“Situation center” algorithms now have a **Webhook** block. It lets you automatically send event data to external services.

Place the block in the branch of the algorithm you need, and when linking the algorithm to a notification, specify the recipient's address and the data to send.

# ![](images/drex_chto_novogo_v_pilot_7_10_custom_15.png)

### [Access to event media files via API](rabota-s-api-zaprosami/api-polzovatelya-v2/mediafajly-sobytij.html)

We added an API for getting photos and videos associated with ADAS and DMS events. You can request data for selected objects for the period you need and get links to view the media files in a browser. The resulting materials can be used in external systems to analyze and verify events.

## Admin panel

### Updated design

The admin panel has a new design and a higher-contrast color palette. The dark side menu is separated from the light work area, selected rows and statuses are more noticeable, and large tables are easier to view.

![](images/drex_chto_novogo_v_pilot_7_10_custom_16.png)

Search, filters, and actions on records are placed directly above the tables, next to the data.

![](images/drex_chto_novogo_v_pilot_7_10_custom_17.png)

The user panel has moved to the bottom of the side menu. It shows the user profile and offers quick actions:

— switching between the light and dark themes

— choosing the interface language

— going to the news

— logging out of the account

— collapsing the side menu

![](images/drex_chto_novogo_v_pilot_7_10_custom_18.png)

We also updated the internal components of the admin panel. The interface displays correctly in modern browsers, and tables, forms, and controls work consistently in all sections.

### Managing Comms Cloud SIM cards

We added support for [Comms Cloud](https://commscloud.com/) SIM cards. In a single section you can check the SIM card's data and status, go to the linked vehicle, and, if necessary, block or unblock the card.

![](images/drex_chto_novogo_v_pilot_7_10_custom_19.png)

## Mobile app

### [Vehicle operation analytics](mobilnye-prilozheniya/mobilnyj-pilot/kak-prosmotret-analitiku.html)

The mobile app now has an “Analytics” tab for monitoring key indicators of vehicle operation. It shows statistics for the last 24 hours: idle and working time, mileage, and the number of vehicles.

Vehicle statuses, connection state, mileage, violations, geofences, and other indicators are presented in charts. You can assess the situation and spot deviations right from your smartphone.

## ![](images/drex_chto_novogo_v_pilot_7_10_custom_20.png) 

![](images/drex_chto_novogo_v_pilot_7_10_custom_21.png)

### [AI assistant](mobilnye-prilozheniya/mobilnyj-pilot/kak-rabotat-s-ii-podderzhkoj.html)

The PILOT AI assistant is now available in the mobile app. It helps you find the right features and explains how to perform common tasks: build a report, configure an object, create a geofence, or connect a device. Answers may contain links to the relevant documentation sections.

Chats are saved in the history, so you can return to a previous conversation to continue the discussion or view an answer again.

![](images/drex_chto_novogo_v_pilot_7_10_custom_22.png)![](images/drex_chto_novogo_v_pilot_7_10_custom_23.png)

### [Additional login protection](mobilnye-prilozheniya/mobilnyj-pilot/kak-ustanovit-i-vojti-v-prilozhenie.html#Вход_в_приложение_с_двухфакторной_аутентификацией_)

The app supports login with two-factor authentication. After entering your username and password, confirm the login with a one-time code from an authenticator app or from e-mail.

The additional check protects the account even if someone else learns the password.

![](images/drex_chto_novogo_v_pilot_7_10_custom_24.png)     ![](images/drex_chto_novogo_v_pilot_7_10_custom_25.png)

### [Topping up the balance via Stripe](mobilnye-prilozheniya/mobilnyj-pilot/menyu-i-nastrojki-polzovatelya.html#Финансы_)

We added the ability to top up the organization's balance via Stripe. In the “Finance” tab, enter the amount, proceed to payment, and choose an available method on the Stripe page.

The function is available for accounts that have Stripe payment connected. You can check the account status after the payment right in the app.

![](images/drex_chto_novogo_v_pilot_7_10_custom_26.png)

### [Viewing events and notifications](mobilnye-prilozheniya/mobilnyj-pilot/kak-prosmatrivat-uvedomleniya-i-sobytiya.html)

The “Events” section now has separate “Notifications” and “Events” tabs. The first collects the triggers of configured rules, and the second shows changes in the state of objects and sensors.

For each tab you can separately select objects, data types, and the viewing period. You can open the place where a notification or event was registered on the map.

# ![](images/drex_chto_novogo_v_pilot_7_10_custom_27.png)  

![](images/drex_chto_novogo_v_pilot_7_10_custom_28.png)

PILOT 7.10 offers more tools for data analysis, process automation, and working with the platform from a smartphone. The new features help you get the information you need faster and monitor vehicle operation.

We continue to develop the platform and are preparing new tools for monitoring and managing your fleet.
