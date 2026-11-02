---
title: "Notification types and trigger conditions"
---

When you create a notification, you select the type of event the system will monitor and set up its trigger conditions.

The conditions determine when the notification is sent — for example, when a speed limit is exceeded, during a long parking stop, or when a sensor reading changes.

![Notification types and trigger conditions](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_screen.png)

All available notification types are listed below.

**Movement and route**

-   [Speed](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Скорость)
    
-   [Movement](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Движение)
    
-   [Parking](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Стоянка)
    
-   [Mileage](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Пробег)
    
-   [Routes](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Маршруты)
    
-   [Scheduler](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Планировщик)
    

**System and device status**

-   [Connection loss](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Потеря_связи)
    
-   [Device problems](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Проблемы_с_устройством)
    

**Sensors and events**

-   [Sensor events](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#События_датчиков)
    
-   [Ignition operation](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Работа_зажигания)
    
-   [Ignition event](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Событие_зажигания)
    
-   [Sensor operation](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Работа_датчика)
    
-   [Sensor value change](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Изменение_значения_датчика)
    
-   [Multi-sensor events](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Мультисенсорные_события)
    
-   [Complex sensor event](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Комплексное_событие_датчика)
    
-   [Sensor faults](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Неисправности_датчиков)
    

**Indicators**

-   [Temperature](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Температура)
    
-   [Humidity](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Влажность)
    
-   [Pressure](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Давление)
    
-   [Fuel level](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Уровень_топлива)
    
-   [Refuels and fuel drains](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Заправки_и_сливы_топлива)
    
    **Geolocation and object events**
    
-   [Geofences](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Геозоны)
    
-   [Proximity to an object](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Приближение_к_объекту)
    

**Advanced scenarios**

-   [Formula](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Формула)
    
-   [Event media files](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Медиафайлы_события)
    
-   [iButton duplication](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Дублирование_iButton)
    
-   [Blocking for exceeding limits](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Блокировка_за_превышение_лимитов)
    

## How to set up conditions

1\. Select the notification type

The notification type determines which event the system monitors — for example, speeding, parking, or a sensor trigger.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom.png)

2\. Set the parameters — for example, the speed threshold or duration

3\. Add extra conditions if needed

To add another condition, click the button ![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_2.png)

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_3.png)

To remove a condition, use the button ![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_4.png)

You can also change the order of conditions with the arrows ![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_5.png)

If a notification has several conditions, you can select a logical rule between them:

-   AND — the notification is triggered if all conditions are met at the same time
    
-   OR — the notification is triggered if at least one of the conditions is met
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_6.png)

## Main notification types

### Speed

The notification is triggered if the object's speed meets the specified condition.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_7.png)

You can set the following conditions:

If the speed is:

— greater than the specified value

— less than the specified value

— equal to the specified value

You can also specify how long the condition must be met:

— seconds

— minutes

— hours

— kilometers of travel

For “Speed” notifications you can set a repeat interval. This helps you avoid a large number of identical notifications.

For example: if the speed exceeds 60 km/h for more than 60 seconds, the system sends a notification. The next notification appears only after the specified interval (for example, 5 minutes) if the speeding continues.

### Ignition events

The “Ignition events” notification type is used to receive messages when the ignition state of an object changes.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_8.png)

Available conditions:

-   On — a notification is sent when the ignition is turned on
    
-   Off — a notification is sent when the ignition is turned off
    
-   On and off — a notification is sent for both events
    
-   Moving without the sensor on — a notification is sent if the object started moving but the ignition sensor is not on
    

If needed, you can enable the “Failure trigger” option. It helps you track recurring errors or unstable sensor operation.

When the option is enabled, additional fields become available:

-   Number of errors — how many times the error must repeat for the notification to be triggered
    
-   Reset time — after how many minutes the error counter is reset
    

### Ignition operation

This notification type lets you monitor how long an object stays with the ignition on or off.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_9.png)

After selecting this type, set the trigger condition:

-   Longer than — a notification is sent if the ignition stays on or off for longer than the specified value. Enter a number for the duration and select the unit: seconds, minutes, hours, kilometers of travel
    
-   Break duration — a setting that counts only events separated by a break of the specified length. For the break you also need to specify a value and a unit
    

### Sensor events

The “Sensor events” notification type lets you receive notifications when the state of the selected sensor changes.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_10.png)

Available conditions:

-   On — a notification is sent when the sensor switches to the “on” state
    
-   Off — a notification is sent when the sensor switches to the “off” state
    
-   On and off — a notification is sent on any change of the sensor state
    
-   Moving without the sensor on — a notification is sent if the object started moving but the selected sensor is not on.
    

If needed, you can enable the “Failure trigger” option. It helps you track recurring errors or unstable sensor operation.

When the option is enabled, additional fields become available:

-   Number of errors — how many times the error must repeat for the notification to be triggered
    
-   Reset time — after how many minutes the error counter is reset
    
-   Sensor groups — select the group of sensors the condition applies to.
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_11.png)

### Sensor operation

With this notification type you can monitor how a sensor value changes and how long the sensor stays in a given state.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_12.png)

After selecting the type, set the conditions:

• No change for longer than — the notification is triggered if the sensor value does not change for longer than the specified time. You need to specify a numeric value and a unit.

• Longer than — the notification is triggered if the sensor stays in a certain state, or its value exceeds the condition, for longer than the specified time. You also need to set a value and a unit.

• Break duration — a setting that defines how long a break in sensor operation must be to end the current event.

• Sensor groups — select the group of sensors the condition applies to.

If a sensor with the specified tag is on, the system starts counting its operating time. When the duration reaches the “Longer than” value, an event is created and a notification is sent.

After the notification is sent, no repeated notifications are sent for the same event while the sensor keeps working continuously.

If the sensor turns off, the system starts counting the break duration. If the sensor turns on again before the “Break duration” time has elapsed, the event is considered ongoing and no new notification is created.

If the sensor stayed off for at least the time specified in “Break duration”, the current event ends. The next period of the sensor being on is counted as a new event.

For example: if “Longer than” = 10 minutes and “Break duration” = 2 hours, a notification is sent after the sensor has been working for 10 minutes. A repeat notification appears only after the sensor has been off for at least 2 hours, then turns on again and works for more than 10 minutes.

### Sensor value change

The “Sensor value change” notification type lets you track how much the value of the selected sensor has changed over a certain period of time.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_13.png)

After selecting this type, set the trigger condition:

-   Difference greater than — enter a numeric value: how much the sensor value must change for the notification to be triggered. For example: 5 — if the value changes by more than 5 units.
    

If you enable the “by modulus |x|” option, the system takes a change in either direction into account — both an increase and a decrease.

-   Over a period — specify the time interval over which the change is analyzed: enter a number and select a unit (seconds, minutes)
    
-   Sensor groups — select the group of sensors the condition applies to.
    

### Multi-sensor events

The “Multi-sensor events” notification type is used for sensors that work with a state table (for example, equipment status, device operating mode, switch positions).

Such a sensor can have several possible values, and the notification is triggered when its state changes.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_14.png)

Then set the conditions:

-   Changes only — if you enable this option, a notification is sent only when the sensor value changes
    
-   Ignore values outside the table — if you enable this setting, the system takes into account only the values listed in the sensor's table. All other values (not described in the table) are ignored, and no notification is sent for them
    
-   Sensor groups — select the group of sensors the condition applies to
    

### Complex sensor event

The “Complex sensor event” notification type lets you set up a single notification for several sensor events at once.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_15.png)

Select the groups of sensors the condition applies to.

The “Reset time” field sets the period after which the system resets the event state.

### Sensor faults

The “Sensor faults” notification type is designed to detect possible problems in sensor operation and to monitor that sensors work correctly.

This notification also works as a fault indicator:

— when a fault is detected, a yellow indicator appears next to the object status

— when a sensor goes into the failure state, a red indicator appears

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_16.png)

You can enable one or several conditions at the same time:

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_17.png)

-   Outside the calibration table — a notification is sent if the sensor value goes outside the calibration table for the specified period of time
    
-   No changes — a notification is sent if the sensor value does not change for the specified time
    
-   Number of changes — a notification is sent if the number of changes of the sensor value is greater or less than the set threshold over the specified period of time.
    

You can also take into account:

-   Geofence enter — sensor changes are counted only when entering a geofence
    
-   Geofence exit — sensor changes are counted only when leaving a geofence
    
-   Additional rule — lets you set an extra condition for detecting a fault. You need to specify:
    

— the sensor field name

— the condition: >, <, =

— the value

[Handlers](../../datchiki-1/obrabotchiki-datchikov.html) and [formulas](../../datchiki-1/primenenie-formul.html) can be used.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_18.png)

-   Failure trigger settings — if a fault repeats several times, the sensor can go into the failure state.
    

The trigger settings define:

— Number of errors — how many faults must occur for the sensor to go into the failure state

— Reset time (min) — the error-free period after which the failure status is cleared automatically

-   Trigger reset rules — how long the object must stay parked or drive without errors for the fault status to be cleared automatically. You can set up the conditions under which the trigger is reset:
    

— parking time (in minutes)

— driving time (in minutes)

— if needed, set a formula

-   Sensor groups — select the group of sensors the condition applies to
    

### Device problems

The “Device problems” notification type is designed to detect incorrect tracker operation or data transmission errors.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_19.png)

You can enable one or several conditions at the same time:

-   Coordinates change without speed (Coords change without speed) — the notification is triggered if the object's coordinates change but its speed is zero. You need to specify a threshold and a unit
    
-   Speed without coordinates change (Speed without changing coords) — the notification is triggered if the device transmits a speed but the coordinates stay the same
    
-   Coordinates change — a notification is sent on a sudden or abnormal change of coordinates. You can set the parameters above which the event is considered a problem.
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_20.png)

-   Additional rule — lets you set an extra condition for detecting a fault. You need to specify:
    

— the sensor field name

— the condition: >, <, =

— the value

-   Failure trigger settings — if the problem occurs several times, the device can go into the failure state. The trigger settings define:
    

— Number of errors — how many times the problem must repeat

— Reset time (min) — after how many error-free minutes the failure status is cleared

-   Trigger reset rules — you can set up the conditions under which the trigger is reset:
    

— parking time (in minutes)

— driving time (in minutes)

— if needed, set a formula

### Pressure

The “Pressure” notification type is used to monitor pressure sensor readings. The notification is triggered if the pressure value meets the specified condition.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_21.png)

After selecting this type, set the trigger condition:

• Condition — select how the system compares the pressure value:

— Greater than — the notification is triggered if the pressure becomes greater than the specified value

— Equal to — the notification is triggered if the pressure equals the specified value

— Less than — the notification is triggered if the pressure becomes less than the specified value

• Value — enter the numeric pressure value the sensor reading is compared with

• Longer than — specify how long the condition must be met for the notification to be triggered. Enter a number and select a unit:

— seconds

— minutes

— hours

— kilometers of travel

• Repeat interval — sets the pause between identical notifications if the condition continues to be met

For example: if the pressure is below the set value for more than 10 seconds, the notification is sent once. The next notification appears only after the specified interval if the condition still persists.

• Sensor groups — select the group of sensors the condition applies to

### Temperature

This notification type is used to monitor temperature from the selected sensor, for example in a refrigerator unit, an engine, or other equipment.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_22.png)

Then set the conditions:

-   If the temperature — sets the main rule by which the system compares the sensor readings with the specified value in degrees Celsius (°C). Available options:
    
    — Greater than — the notification is triggered if the temperature exceeds the specified value
    
    — Equal to — the notification is triggered if the temperature is exactly equal to the specified value
    
    — Less than — the notification is triggered if the temperature drops below the specified value
    
    — Out of range — the notification is triggered if the temperature goes outside the set range (for example, below +2°C or above +8°C)
    
-   Longer than — lets you set the minimum time the condition must be met for the notification to be triggered. This helps filter out short and insignificant fluctuations (for example, when the refrigerator door is opened). In the “Units” field you can select the unit of this duration: seconds, minutes, hours.
    
-   No change for longer than — a separate condition that helps detect possible sensor faults when its readings “freeze” at one value. The notification is triggered if the temperature does not change for longer than the specified period of time.
    
-   Sensor groups — select which temperature sensors this rule applies to
    

### Humidity

The “Humidity” notification type is used to monitor humidity from the selected sensor, for example in a cargo compartment or a refrigerator unit.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_23.png)

After selecting the type, set the conditions:

-   If the humidity:
    

— Greater than — the notification is triggered if the humidity is above the specified value

— Less than — the notification is triggered if the humidity is below the specified value

— Equal to — the notification is triggered if the humidity equals the specified value

— Out of range by — the notification is triggered if the humidity deviates from the set range by the specified value

-   Enter the numeric humidity value the system compares the sensor readings with. The value is set in percent (%).
    
-   Longer than — specify how long the condition must be met for the notification to be triggered:
    

— Seconds — the condition is met for longer than the specified number of seconds

— Minutes — the condition is met for longer than the specified number of minutes

— Hours — the condition is met for longer than the specified number of hours

-   No change for longer than — this setting lets you control situations when the humidity does not change for a set time. The notification is triggered if the humidity value stays unchanged for longer than the specified period
    

### Connection loss

The “Connection loss” notification type is used to monitor loss of connection with an object. The notification is triggered if no data is received from the device within the specified time or distance.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_24.png)

After selecting this type, set the trigger condition:

-   Longer than — specify how long the connection loss must last for the notification to be triggered:
    

— Seconds — the notification is triggered if the connection loss lasts longer than the specified number of seconds

— Minutes — the notification is triggered if the connection loss lasts longer than the specified number of minutes

— Hours — the notification is triggered if the connection loss lasts longer than the specified number of hours

— Kilometers — the notification is triggered if the object has traveled the specified distance without a connection

### Mileage

The “Mileage” notification type is used to monitor an object's mileage by the odometer. It lets you receive notifications if the mileage is greater or less than the set value over the selected period.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_25.png)

After selecting the type, set the conditions:

-   If the mileage:
    

— Greater than — the notification is triggered if the object's mileage is greater than the specified value

 — Less than — the notification is triggered if the object's mileage is less than the specified value

— Monthly limit exceeded — the notification is triggered if the mileage for the month has exceeded the set value

-   Units — enter the numeric mileage value the system compares the odometer data with. The value is set in kilometers.
    
-   Period — select the period over which the condition is checked:
    

— Total — the condition is checked for the entire period since the notification was created

— Per month — the condition is checked within the current month

— Per day — the condition is checked within the current day

### Movement

The “Movement” notification type is used to monitor object movement. The notification is triggered if the object is moving for longer than the set time or covers the specified distance.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_26.png)

Set the conditions:

-   Longer than — specify how long the object must be moving for the notification to be triggered. Enter a number and select a unit:
    

— Seconds — the notification is triggered if the movement lasts longer than the specified number of seconds

— Minutes — the notification is triggered if the movement lasts longer than the specified number of minutes

— Hours — the notification is triggered if the movement lasts longer than the specified number of hours

— Kilometers — the notification is triggered if the object has traveled more than the specified distance

-   Break duration — this setting counts only movement events separated by a break of the specified length. If the break between two movement segments is shorter than the specified value, the system treats them as one continuous movement. For example, if you set a break of 10 seconds, a stop shorter than 10 seconds does not interrupt the movement event.
    

### Parking

The “Parking” notification type is used to monitor object stops. The notification is triggered if the object stays still for longer than the set time.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_27.png)

After selecting this type, set the trigger condition:

-   Longer than — specify how long the object must stay still for the notification to be triggered:
    

— Seconds — the notification is triggered if the parking lasts longer than the specified number of seconds

— Minutes — the notification is triggered if the parking lasts longer than the specified number of minutes

— Hours — the notification is triggered if the parking lasts longer than the specified number of hours

### Geofences

The “Geofences” notification type is used to monitor geofence-related events. It lets you receive notifications when an object enters a geofence, leaves it, stops inside it, or passes through it without stopping.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_28.png)

Available conditions:

-   Entry — the notification is triggered when the object enters the selected geofence
    
-   Exit — the notification is triggered when the object leaves the selected geofence
    
-   Entry+Exit — a notification is sent both on entering and on leaving the geofence
    
-   Stop in geofence — the notification is triggered if the object stops inside the geofence
    
-   No stop in geofence — the notification is triggered if the object enters the geofence, does not stop in it, and then leaves it
    
-   Min. speed — for conditions related to a stop or no stop, you can specify a minimum speed. This parameter helps determine whether the object is considered moving or stopped inside the geofence
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_29.png)

### Fuel level

The “Fuel level” notification type is used to monitor the fuel level from the selected sensor on the object. The notification is triggered if the fuel level meets the specified condition.

After selecting this type, set the trigger condition:

-   If the fuel level:
    

— Greater than — the notification is triggered if the fuel level is above the specified value

— Less than — the notification is triggered if the fuel level is below the specified value

— Equal to — the notification is triggered if the fuel level equals the specified value

-   Units — enter the numeric fuel level value the system compares the sensor readings with
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_30.png)

### Refuels and fuel drains

The “Refuels and fuel drains” (Fuel Refuelings & Drainings) notification type is used to monitor events related to changes in fuel level. It lets you receive notifications about refuels and fuel drains on an object.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_31.png)

After selecting this type, check which events should trigger the notification:

• Refuels — the notification is triggered when the system detects a refuel

• Drains — the notification is triggered when the system detects a fuel drain

• Refuel start — the notification is triggered at the moment a refuel starts

• Drain start — the notification is triggered at the moment a fuel drain starts

### Proximity to an object

The “Proximity to an object” notification type is used to monitor the situation when one object approaches another within a set distance.

In this notification type, one object is treated as a moving geofence, and the system tracks when another object enters or leaves this zone.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_32.png)

After selecting this type, set the trigger condition:

If the distance to the object is:

-   Less than — specify the distance at which an object is considered to be near another object. The value is set in meters.
    
-   Longer than — specify how long an object must stay within the range of another object for the notification to be triggered. The value is set in seconds.
    
-   Enter — if you enable this option, the notification is triggered when the object enters the range of another object
    
-   Exit — if you enable this option, the notification is triggered when the object leaves the range of another object
    
-   Objects — select from the list the objects for which proximity will be tracked
    

The system compares the objects from the list and determines when one object is at the set distance from another. The object being approached is treated as a moving geofence. For example, if a vehicle from the selected list gets closer than 100 meters to another object and stays nearby for more than 30 seconds, the system sends a notification.

### Formula

The “Formula” notification type is used to check a custom condition set as a formula. The notification is triggered if the formula result is true or false.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_33.png)

In the “Formula” field, enter the expression to check. You can use raw data fields, sensor values, handlers, and formulas in it.

The notification is triggered if the check result is:

• true — the condition is met

• false — the condition is not met

### Blocking for exceeding limits

The “Blocking for exceeding limits” notification type is used to send a notification if an object was blocked because of a violation of the set limits.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_34.png)

If the system detects such a block, the notification is sent through the selected channel.

After selecting this type, specify the delivery method, for example:

• Email

• SMS

• Webhook

• Telegram

• Push

If Email is selected, notifications are sent to the specified email address.

This notification type is applied automatically to all existing objects and to all new objects created after it is set up.

### Scheduler

The “Scheduler” notification type is used to monitor object movement during working and non-working hours according to its [work schedule](../kontrol-vremeni.html#Рабочее_время_объекта) settings.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_35.png)

After selecting this type, set the trigger conditions:

• At the scheduled time — the notification is triggered if the object moves within the set working hours

• Outside the scheduled time — the notification is triggered if the object moves outside the set working hours

-   Longer than — specify how long the object must be moving for the notification to be triggered
    
-   Break duration — this setting takes breaks between movement events into account. If the break is shorter than the specified value, the system treats the movement as continuous. For example: if you set a break of 10 seconds, a short stop of less than 10 seconds does not interrupt the movement event.
    

### Event media files

The “Event media files” notification type is used to send a notification when the device successfully uploads to the storage server a media file associated with a recorded event. This notification is triggered not at the moment of the event itself, but only after the file has been successfully transferred and saved on the server.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_36.png)

For example, a notification can be sent when the device uploads a photo of a violation, a video clip of the event, a snapshot from the driver's cabin or of the road situation, or another file created after the event was recorded.

Such a notification can be used for events related to ADAS / DMS violations and warnings, for example driver distraction, phone use, smoking while driving, fatigue, collision risk, lane departure, or harsh braking.

The “Repeat interval” parameter lets you set a pause between identical notifications if the device uploads several media files in a row for the same event.

### iButton duplication

The “iButton duplication” notification type is used to detect situations when the same iButton is registered on more than one vehicle within a set period of time.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_37.png)

Such a notification helps detect incorrect driver identification. For example, if a driver used the same iButton on one vehicle and then on another, the system may assume that the driver switched to the other object and update the assignment. As a result, trip, driver, and report data may become incorrect.

After selecting this type, set the condition:

-   Over a period — specify the time during which the system checks whether the same iButton was used on more than one object. The notification is triggered if the same iButton is detected on several objects within the specified time.
    

For this notification type to work correctly:

— an iButton sensor must be set up on the objects

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_38.png)

— the [drivers module](../voditeli-3/index.html) must be used

— the notification must be linked to the objects you want to monitor

### Routes

The “Routes” notification type is used to monitor events on routes already assigned to an object. In the settings of this notification you select which route events you want to be notified about.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_39.png)

After [assigning the vehicle to a route](../marshruty-3/kak-privyazat-marshrut-k-obektu.html), the system starts comparing the object's trips with the assigned route:

— records entering and leaving the route

— takes passing checkpoints into account

— includes trips in route reports

In the settings of this notification type, you select which route events should trigger notifications:

-   In stop zone — the notification is triggered when the object is in the zone of a checkpoint or stop. The radius of this zone is set on the map [when configuring the route](../marshruty-3/kak-sozdat-marshrut.html#Параметры_маршурута).
    
-   Outside stop zone — the notification is triggered when the object leaves the zone of a checkpoint or stop. The zone boundary is also defined by the radius set when editing the route
    
-   Route entry — the notification is triggered when the object enters the route boundaries. The route boundaries are defined by its width set on the map
    
-   Route exit — the notification is triggered when the object leaves the route boundaries.
