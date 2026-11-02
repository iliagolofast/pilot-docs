---
title: "PILOT 7.9"
---

In version 7.9 we focused on ease of use, flexible settings, and expanded analytics. In this section we have gathered and described in detail all the key changes and improvements included in both releases.

There are new tools for driver monitoring, access and notification management, expanded reporting and integration capabilities, and improvements to existing system modules.

## Access and security management

### [Two-factor authentication by e-mail](../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/privatnost.html#Двухфакторная_аутентификация)

The system now supports two-factor authentication by e-mail. At login, in addition to your username and password, you must enter a one-time code sent to your e-mail. This method increases account security and helps protect data from unauthorized access.

![](images/drex_pilot_7_9_custom.png)

### [Two types of tokens for accessing the monitoring service](../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/tokeny.html)

The system now has two types of tokens: special links for secure access without sharing a username and password. You can choose the access format depending on the task: view only or full login to the system.

A view token lets you open monitoring without revealing credentials, for example to show a map to a client or to give temporary access for observation.

A login token lets you log in via a link without entering a password. The user is automatically logged in with the same rights as with regular authorization. The token's validity period can be limited or left unlimited.

![](images/drex_pilot_7_9_custom_2.png)

### [Interface settings for a user](../lichnyj-kabinet-polzovatelya/nastrojki-dogovora-2/personal-i-gruppy/index.html#права_доступа)

We added the ability to manage the display of system sections and modules for each user in the “Interface” tab.

Now you can:

— show or hide individual modules

— turn off the display of the main tabs

— configure the workspace for a specific role

Even if a module is enabled at the contract level, you can hide it for a selected employee.

![](images/drex_pilot_7_9_custom_3.png)

## Expanded integrations

### [Telegram bot configuration](../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html#Конфигурация_Telegram_bot)

We added the ability to quickly go to the Telegram bot from the user account.

In the account settings, specify the bot configuration and add its address. After saving, a separate tab with a link to the bot appears in the user account.

![](images/drex_pilot_7_9_custom_4.png)

### [Links Field integration](../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html#__Links_Field_\(links_field_sms_provider\))

We integrated the [Links Field platform](https://linksfield.com.br/en) for managing SIM cards.

When working with the Links Field provider, you can now:

— specify the SIM card ICCID for each vehicle

— configure API access

— get SIM card data directly in the system

— use the provider to send SMS notifications

### [LBS connection](../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html#LBS_Config)

We added the ability to enable Yandex base station (LBS) positioning yourself from the account's admin panel.

A new key, LBS Config, has appeared in the account configuration section. Enter your Yandex API key in it, and the account will be able to determine device locations from the nearest cellular base stations (GSM/LTE).

![](images/drex_pilot_7_9_custom_5.png)

### [Weather layer integration](../lichnyj-kabinet-polzovatelya/interfejs-lichnogo-kabineta/karta/index.html#слои_карты)

The map now has a Windy.com weather layer. Weather conditions are displayed right in the system, on top of routes and monitored objects, which helps you take conditions into account when planning and analyzing routes.

In the map settings you can turn on the weather layer, choose a forecast model (depending on your plan), and select the display type: wind, precipitation, cloud cover, and other parameters. A time panel with animation is available for viewing the forecast over time.

Weather data is synchronized with the map and updates automatically when you pan and zoom.

![](images/drex_pilot_7_9_custom_6.png)

### Integration of equipment with Wirepas support

The system now supports equipment with Wirepas technology for indoor navigation. You can track the movement of objects indoors, where the GPS signal is unavailable or unstable.

The technology uses a network of wireless devices that form a self-configuring mesh network and transmit location data inside the building.

The solution is suitable for monitoring equipment, machinery, and personnel in warehouses, production premises, and other enclosed spaces, and also helps control internal logistics and movements inside facilities.

## Admin panel

### [Account cloning](../panel-administratora/dogovor/menyu-dogovora/klonirovanie-dogovora.html)

We expanded account cloning and made it easier to create a new account based on an existing one.

When cloning in the admin panel, you can now choose which data to transfer to the new account:

— sensor templates

— individual prices per object

— payment e-mail templates

— user assignments

— users with their rights and display settings

— reports from the report builder

— geofences linked to the contract

![](images/drex_pilot_7_9_custom_7.png)

### [“Vehicles by sensor name” report](../panel-administratora/otchyety-2.html)

We added a new administrative report, “Vehicles by sensor name”. It helps you view sensors by contract, check that their names are correct, and put the records of installed equipment in order. The report simplifies auditing and makes data control more transparent and convenient.

![](images/drex_pilot_7_9_custom_8.png)

## Module updates

### [“Composite objects” module in the new interface](../lichnyj-kabinet-polzovatelya/moduli-1/sostavnye-obekty-3.html)

The “Composite objects” module is now available in the new interface. It lets you combine in a single logical scheme:

-   stationary and mobile tanks
    
-   inlet flow meters (fuel receiving)
    
-   outlet flow meters (fuel dispensing)
    
-   related sensors
    

Now you can:

     — describe the complete fuel flow chain, from receipt at the “inlet” part to dispensing to the consumer

     — account for storage, receiving, and dispensing within a single scheme

     — analyze fuel receipts, consumption, balances, and possible losses across the whole system

Create and configure composite objects, use them in monitoring and reports, and analyze the indicators.

![](images/drex_pilot_7_9_custom_9.png)

### [Expanded capabilities of the “Service” module](../lichnyj-kabinet-polzovatelya/moduli-1/servis/index.html)

We expanded the “Service” module to make planning and control of maintenance more convenient and transparent.

The tables now include new indicators: current engine hours, mileage to the next maintenance, and engine hours to the next maintenance.

You can now attach files to service records: photos, work completion reports, documents, or instructions. All materials are stored with the record and are always available for viewing and downloading.

![](images/drex_pilot_7_9_custom_10.png)

An access rights system has also been added. You can separately configure who can add, edit, or delete records, and define access to the module's sections.

![](images/drex_pilot_7_9_custom_11.png)

### [Quick adding of downtime](../lichnyj-kabinet-polzovatelya/moduli-1/servis/prostoi.html#Как_добавить_простой_через_меню_объекта)

You can now add downtime directly from the object's context menu in the “Online” tab, without going to the “Service” module. Just right-click the object and select “Add downtime”, and the record is created automatically.

![](images/drex_pilot_7_9_custom_12.png)

### [Updated “Object analytics” chart](../lichnyj-kabinet-polzovatelya/moduli-1/servis/analitika.html#Аналитика_конкретного_объекта_в_Сервисе)

We updated the analytics overview chart in the object card so that you can clearly evaluate the cost of owning equipment and make management decisions based on actual and planned data.

Now, when you go to the “Object analytics” section, you see a combined “Analytics overview” chart that shows by year:

— planned and actual maintenance costs for each year

— planned and actual fuel costs

— the total cost of owning the object, planned and actual

— changes in the object's value over time

— the cost of one kilometer of mileage, planned and actual

![](images/drex_pilot_7_9_custom_13.png)

### [Event processing interval in the “Situation center” module](../lichnyj-kabinet-polzovatelya/moduli-1/situatsionnyj-tsentr-2/kak-obrabotat-sobytie.html)

We added a new setting to the “Situation center” module: the event processing interval. It defines how long an event remains relevant and available for processing.

Previously, unprocessed events were deleted automatically after 24 hours. Now you can increase the interval to 72 or 120 hours. Events will stay in the list longer so that you can process them later.

![](images/drex_pilot_7_9_custom_14.png)

### [Linking tags in the “Routes” module](../lichnyj-kabinet-polzovatelya/moduli-1/marshruty-3/kak-sozdat-marshrut.html#Параметры_маршурута)

You can now link BLE tags to route points and count trip completion by their signal.

If a vehicle detects a BLE tag, the point is considered visited, even if GPS is inaccurate or jammed.

As a result:

— routes are counted correctly even during satellite signal failures

— a visit to a point is confirmed by the vehicle's actual presence

— the system automatically records arrival and departure

![](images/drex_pilot_7_9_custom_15.png)

## [Updated fuel analysis algorithm](../lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/index.html#Как_настроить_датчик_топлива)

The new data processing logic for fuel sensors detects refuels and fuel drains more accurately, reduces the effect of sensor noise, and excludes false events.

The algorithm analyzes changes in the fuel level taking into account several factors: volume thresholds, vehicle speed, the rate of fuel level change, and sensor data quality. This helps the system tell real fuel operations from normal consumption or random fluctuations in readings.

The fuel sensor settings now include advanced analysis parameters: event volume thresholds, a speed filter, a speed accounting mode, a filter by the rate of fuel level change, sensor data smoothing, and a mechanism for removing symmetric events.

![](images/drex_pilot_7_9_custom_16.png)

## [Report builder](../lichnyj-kabinet-polzovatelya/otchyety-1/konstruktor-otchyetov/index.html)

We expanded the “Report builder” so that you can analyze equipment operation in more depth and get more useful data in a familiar format.

### Service downtime accounting

The Service Downtime table has been added.

Now you can:

— see the downtime of each vehicle

— calculate the total downtime for a period

— analyze service downtime over time

This way, you can evaluate the effect of maintenance on fleet operation and make management decisions based on actual data.

![](images/drex_pilot_7_9_custom_17.png)

### Eco summary reports by event type

For the Eco type, summary analysis by event type has been added.

New fields are available:

— Eco event type

— number of events

— average speed

— maximum speed

Now you can generate reports in the form of an active safety summary and analyze driving style more systematically.

![](images/drex_pilot_7_9_custom_18.png)

### Speed at the time of violation

Reports have a new parameter: speed at the time of violation. You can now see the vehicle's actual speed at the point where the violation was triggered.

### Detailed fuel report

A new report type has been added: fuel refuels and drains.

Each operation is shown in a separate row with the time, volume, location, and fuel level. You get a complete log of operations and a transparent picture of fuel handling.

![](images/drex_pilot_7_9_custom_19.png)

### Loss of communication

We added a new “Loss of communication” report type to the builder. It helps you understand when and under what conditions a device loses its connection to the system.

The report shows the start and end time of the disconnection, its duration, where it happened, the vehicle's state at the moment of signal loss, and the possible cause, for example power disconnection or network loss.

With this report you can not only record the fact of a disconnection but also understand the situation and tell short-term interference from real problems.

![](images/drex_pilot_7_9_custom_20.png)

## Driver monitoring

### Face ID for automatic driver assignment

The system now supports face recognition through on-board cameras. A driver can be assigned automatically based on the Face ID result.

The check is performed when the ignition is switched on and periodically during the trip. The system determines who is behind the wheel, even if different drivers use the vehicle, records the recognition results, and passes the data to reports.

### [Driver working hours](../lichnyj-kabinet-polzovatelya/moduli-1/kontrol-vremeni.html)

We added a new “Working hours” tab to the driver card. You can now configure the driver's schedule: select working days of the week and set time intervals separately for weekdays, Saturday, and Sunday. If necessary, the system can restrict assigning the driver outside the set schedule.

![](images/drex_pilot_7_9_custom_21.png)

### [Accounting for drivers' working hours in the PTM module](../lichnyj-kabinet-polzovatelya/moduli-1/pilot-task-manager/spravochniki-2.html#параметры_шаблонов_PTM)

The PILOT Task Manager module now checks drivers' working hours when assigning tasks.

When creating a task, the system can now analyze the driver's work schedule. If the selected interval falls on rest time or non-working hours, the system shows the user a warning.

To enable the check, activate the “Check working hours” parameter, available for Datetime and Address fields.

The function allows dispatchers and logistics specialists to take drivers' work schedules into account when planning tasks and reduces the risk of assigning tasks to non-working time.

![](images/drex_pilot_7_9_custom_22.png)

### [Updated Eco Driving and rating calculation logic](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/kachestvo-vozhdeniya/otchyet-po-kachestvu-vozhdeniya.html)

The logic for calculating Eco Driving scores has been updated. The score is now generated for each driver, taking into account all the vehicles they drove.

You can build ratings by both vehicles and drivers and analyze data in different breakdowns. Violations are attributed to a specific driver rather than to the equipment, so the score reflects real driving style and helps you make better-founded management decisions.

## Notifications

### [Command templates in notifications](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html)

The notification create and edit form has two new fields:

-   Command — for entering text manually
    
-   Command template — select a ready-made template from the list
    

When configuring a notification, you can now enter a command yourself or choose a previously saved template.

![](images/drex_pilot_7_9_custom_23.png)

### [Account ID in Webhook notifications](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html)

Webhook notifications now include additional information: Account ID. Along with the event data, the system now sends the identifier of the account from which the notification was sent.![](images/drex_pilot_7_9_custom_24.png)

### [New notification type: “Event media files”](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Медиафайлы_события)

The system has a new notification type: “Event media files”. The notification is sent when a device successfully uploads to the server a media file related to an event, for example a photo or video.

Unlike regular notifications, it is triggered not at the moment of the event but after the file is uploaded successfully. This notification type gives you immediate confirmation and lets you go straight to viewing materials for events such as violations or ADAS/DMS triggers.

![](images/drex_pilot_7_9_custom_25.png)

### [Notifications in the object card](../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html#Настройки_объекта)

The object card has switches for managing notifications about the limits of each vehicle.

For the “Speed control”, “Loss of communication”, and “Downtime” parameters you can turn notifications on or off separately.

For the “Downtime” parameter an ignition icon is available. It defines whether the ignition state is taken into account when calculating downtime.

Limits continue to be recorded in the system even when notifications are turned off, so control is maintained without unnecessary alerts.

![](images/drex_pilot_7_9_custom_26.png)

## [New API: rental contracts](../rabota-s-api-zaprosami/api-polzovatelya-v2/spisok-dogovorov-arendy.html)

A new API method has been added for getting the list of rental contracts from the Rent Car module.

With it you can get data on all types of contracts:

— active (open)

— booked

— completed

For each contract, the method returns data about the renter, the rental start and end points, the planned issue and return dates, and the contract and vehicle numbers.
