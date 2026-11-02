---
title: "Report Types in the Builder"
---

When creating a report, you first select the report builder type.

![](images/drex_tipy_otchyetov_v_konstruktore_custom.png)

It determines:

— which data will be used

— which fields will be available in the “Columns” section

— what the final report will look like

## Available report types

The following types are available in the system:

-   [Summary table](tipy-otchyetov-v-konstruktore.html#Суммарная_таблица) — summary data: totals, sums, the number of events and other aggregated indicators
    
-   [Work](tipy-otchyetov-v-konstruktore.html#Работа) — the activity of an Object or sensors during the selected period
    
-   [Eco events](tipy-otchyetov-v-konstruktore.html#Эко-события) — events related to economical and uneconomical driving and fuel consumption
    
-   [Chart](tipy-otchyetov-v-konstruktore.html#График) — data visualization as charts
    
-   [Trips table](tipy-otchyetov-v-konstruktore.html#Таблица_поездок) — a list of trips with parameters: time, mileage, start and end
    
-   [Geofences table](tipy-otchyetov-v-konstruktore.html#Таблица_геозон) — geofence data: entries, exits, time spent
    
-   [Current state](tipy-otchyetov-v-konstruktore.html#Таблица_текущего_состояния) — the state of the Object at the moment the report is generated
    
-   [Sensor operation](tipy-otchyetov-v-konstruktore.html#Работа_датчиков) — sensor operation data for the period
    
-   [Sensor events](tipy-otchyetov-v-konstruktore.html#События_датчиков) — triggers, state changes and threshold events
    
-   [Connection loss](tipy-otchyetov-v-konstruktore.html#Потеря_связи) — information on connection outages
    
-   [Notifications](tipy-otchyetov-v-konstruktore.html#Уведомления) — a list of system notifications
    
-   [Cards](tipy-otchyetov-v-konstruktore.html#Карты) — data on fuel cards and transactions
    
-   [Driver behavior](tipy-otchyetov-v-konstruktore.html#Поведение_водителя) — events related to driving style
    
-   [Fleet summary](tipy-otchyetov-v-konstruktore.html#Сводка_по_автопарку) — general information on all Objects
    
-   [RFID tags](tipy-otchyetov-v-konstruktore.html#RFID-метки) — RFID data
    
-   [Refuel and fuel drain events](tipy-otchyetov-v-konstruktore.html#События_заправки_и_слива) — fuel operations
    
-   [PTM](tipy-otchyetov-v-konstruktore.html#PTM ) — specialized reports for the PTM module
    

### How report data is generated

1\. You select the report type

2\. The system loads the categories and fields available for it

3\. In the “Columns” section, you select the data you need

![](images/drex_tipy_otchyetov_v_konstruktore_custom_2.png)

4\. The report displays only the selected columns

The set of available columns depends on the selected report type

The builder has:

-   universal (basic) fields — available in most report types
    
-   specialized categories — appear only for certain types
    

### Example 1. The “Current state” type

Data on the current state of a vehicle is available for this type.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_3.png)

In addition to the basic data (for example, make, model, speed), a “Services” category appears, where you can add maintenance fields:

-   Last TO motohours — engine hours at the last maintenance
    
-   Next TO motohours — engine hours at the next maintenance
    
-   Mh until next TO — engine hours until the next maintenance
    
-   Last TO date — the date of the last maintenance
    
-   Last TO number — the number of the last maintenance
    
-   Next TO date — the date of the next maintenance
    
-   Last TO mileage — the mileage at the last maintenance
    

These fields help you monitor the current state and maintenance of a vehicle.

### Example 2. The “Cards” type

Data on fuel cards and transactions is available for the “Cards” type.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_4.png)

A CardTransactions category appears in the columns, where you can select, for example:

-   Transaction Type — the operation type
    
-   Transaction Location — the location
    
-   Transaction Time — the time
    
-   Card number — the card number
    
-   Distance Previous-Current — the distance between values
    
-   Current — the current value
    
-   Transaction Amount — the amount
    

This type is used to analyze card operations.

## Examples of report types

The builder offers several report types, each solving its own task. Below are a brief description and examples to make it easier to find your way.

## Summary table

A summary table helps you get summary data on Objects for the selected period.

You configure:

-   which columns will be in the report
    
-   which indicator to use for the total
    
-   how to sort the data
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_5.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the order of rows
    
-   Total — the main indicator for the summary
    
-   Desc — descending sort
    
-   Columns — which data to show
    
-   Configuration — additional settings
    

An example of a report built from the builder

![](images/drex_tipy_otchyetov_v_konstruktore_custom_6.png)

 The “Total” field sets the main indicator on which the report is built.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_7.png)

 The “Sorting” field determines the order of rows.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_8.png)

For example, if you select sorting by Vehicle, the rows in the finished report will be sorted by vehicle.

![Report Types in the Builder](images/drex_tipy_otchyetov_v_konstruktore_screen.png)

With Desc enabled, the data is sorted in descending order.

![Report Types in the Builder](images/drex_tipy_otchyetov_v_konstruktore_screen_2.png)

![](images/drex_tipy_otchyetov_v_konstruktore_custom_9.png)

## Work

The “Work” report shows the activity of Objects or drivers during a period.

With this report you can see:

— when the event occurred

— on which Object

— where it was recorded

— the parameter values

The report can include the values of discrete, two-state and multi-state sensors. The required sensor is selected by the label assigned to it when configuring the column.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_10.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

The example in the screenshot creates an Overspeed CAN general report — a speeding report based on CAN data.  A filter is set in the “Configuration” field — the report will include only events where the sensor value is greater than 85.

<table><tbody><tr><td><span></span></td><td><div>{"filter": [ { "key": "sensor", "rule": "&gt;", "value": 85 } ]}</div></td></tr></tbody></table>

## Chart

A chart is a report type that builds a visual representation of data as graphs. It is designed to analyze how indicators change over time: speed, fuel consumption, temperature, mileage, equipment operation and other parameters.

You can add several data groups:

-   Speed — a graph of the Object's driving speed
    
-   ODO — a mileage graph
    
-   Fuel — fuel level and consumption
    
-   Temperature — the temperature of various sensors (you can select specific ones).
    
-   Special sensors — special sensors
    
-   Hardware — data from hardware
    
-   Eco Pies — eco events and violations (harsh braking, turns, collisions, unfastened seat belt, etc.).
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_11.png)

For each group you can:

-   Turn its display on or off.
    
-   Select specific sensors or event types
    
-   Configure “Show axis” — whether to display a separate Y axis for this group
    
-   Configure “Single axle” — use one common Y axis
    
    For Eco Pie you can select additional settings:
    
-   Show per hour — show the number of events per hour
    
-   Show duration — show the duration of events
    

After the report is saved and built in the “Reports” section, the system displays an interactive chart:

![](images/drex_tipy_otchyetov_v_konstruktore_custom_12.png)

-   The X axis shows time
    
-   The Y axis shows the values of the selected parameters (there may be several axes)
    
-   Each parameter is assigned its own line color
    
-   When you hover over the chart, a tooltip appears with the exact time and the values of all parameters at that point
    
-   A legend at the bottom of the chart shows which lines correspond to which parameters
    
-   You can zoom, pan and analyze individual time segments of the chart
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_13.png)

## Eco events

The “Eco events” type is used to build reports on events related to:

— economical or uneconomical driving style

— fuel consumption

— the environmental behavior of the vehicle

Such a report helps you analyze when and where eco events occurred and what type of event was recorded.![](images/drex_tipy_otchyetov_v_konstruktore_custom_14.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Summarize — the summary mode of the report
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

## Trips table

A trips table is a report type used to view vehicle trips during the selected period.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_15.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

After the report is built, the system displays a table with trips for the selected period.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_16.png)

## Geofences table

A geofences table is a report type for analyzing geofence visits and equipment operation inside them. The report can display entries and exits, the length of stay in a zone, sensor operation periods and other related data.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_17.png)

When creating a report, configure the following parameters:

-   Name — enter the report name
    
-   Rows — select how rows are formed:
    
-   Geofence visits — one row corresponds to one geofence visit
    
-   Equipment work periods — one row corresponds to a separate operating period of the selected sensor inside a geofence
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_18.png)

-   Sorting — select the field by which the data will be ordered
    
-   Descending (Desc) — turn on descending sort
    
-   Columns — configure the data that should be displayed in the report
    
-   Configuration — if necessary, specify additional parameters and filters
    

The set of available data and columns may depend on the selected row formation mode.

To build a report using a form from the builder:

1\. Go to the “Reports” section

2\. Select the report type 

3\. Specify the required Objects

4\. Select the required geofences

5\. Set the report period and click “Build report”

After that, the system generates a table for the selected geofences.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_19.png)

## Current state table

A current state table is a report type that shows the current state of an Object at the moment the report is built.

The example shown displays service data, but depending on the selected report configuration, the set of data may be different.

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_20.png)

![](images/drex_tipy_otchyetov_v_konstruktore_custom_21.png)

## Sensor operation

Sensor operation is a report type that shows data on sensor operation during the selected period.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_22.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sensor groups — one or more sensor groups to be used in the report
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

The “Sensor groups” field lets you limit the report to the sensors you need.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_23.png)

## Sensor events

Sensor events is a report type that shows events recorded by sensors: triggers, state changes, reaching threshold values and other events.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_24.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sensor groups — one or more sensor groups on which the report will be built
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

## Connection loss

This report type lets you build an extended connection loss report yourself by selecting the columns you need and setting your own filter by outage duration.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_25.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_26.png)

## Notifications

Notifications is a report type used to view events created by the notification system.

Such a report helps you analyze, for example:

— which notifications were generated

— when they occurred

— on which Object

— where exactly the event was recorded

— through which communication channel the notification was sent

![](images/drex_tipy_otchyetov_v_konstruktore_custom_27.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Notifications Type — the notification types to include in the report
    
-   Filter by — a filter by the channel or delivery method of the notification
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Colors — color display
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

### Notification type

The Notifications Type field lets you select exactly which [notification types](../../moduli-1/uvedomleniya/tipy-uvedomlenij-i-usloviya-srabatyvaniya.html) will be included in the report:

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_28.png)

-   Speed
    
-   Ignition events
    
-   Ignition operation
    
-   Sensor events
    
-   Sensor operation
    
-   Sensor value change
    
-   Sensor malfunctions
    
-   Device problems
    
-   Temperature
    
-   Humidity
    
-   Connection loss
    
-   Mileage
    
-   Movement
    
-   Parking
    
-   Geofences
    
-   Fuel level
    
-   Scheduler
    
-   RFID tags
    
-   Composite notifications
    

In this field you can select several notification types. In this case, the report shows all the selected types

### Delivery method

The Filter by field is used to filter notifications by delivery method:

-   SMS — a message to a phone
    
-   Push (Mobile App) — a notification in the mobile app
    
-   Email — an e-mail message
    
-   Alert — a pop-up [notification in the interface](../../moduli-1/uvedomleniya/kak-prosmatrivat-uvedomleniya.html) of the system
    
-   [Webhook](../../moduli-1/uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html) — sending data to an external service
    
-   Command to device — sending a command to the tracker
    
-   Telegram — a notification via the [Telegram bot](../../../mobilnye-prilozheniya/telegram-bot/index.html)
    

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_29.png)

In the “Columns” block you can configure what information will be displayed in the report, for example,

-   Vehicle — the Object the notification relates to
    
-   Notification Type — the notification type
    
-   Notification time — when the event occurred
    
-   Notification Name — the notification name
    
-   Notification Location — the place where the notification was recorded
    

After the report is built, the system displays a list of notifications for the selected period.

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_30.png)

## Cards

Cards is a report type used to view information on fuel cards and their transactions.

## ![](images/drex_tipy_otchyetov_v_konstruktore_custom_31.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

## Driver behavior

This report type is used to analyze driving manner.

With it you can track:

— harsh accelerations

— harsh braking

— speeding

— other violations

— indicators related to driving safety and economy

![](images/drex_tipy_otchyetov_v_konstruktore_custom_32.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

## Fleet summary

This report type is used to get generalized information on the entire fleet.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_33.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

![](images/drex_tipy_otchyetov_v_konstruktore_custom_34.png)

## RFID tags

RFID tags is a report type used to view data related to RFID tags.

Such a report helps you analyze, for example,

— which RFID tags were detected

— when the event occurred

— where it occurred

— which device or Object the record relates to

![](images/drex_tipy_otchyetov_v_konstruktore_custom_35.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

## Refuel and fuel drain events

Refuel and fuel drain events is a report type used to view fuel operations:

Such a report helps you control fuel operations and analyze, for example,

— when a refuel or fuel drain occurred

— how much fuel was added or drained

— where the event occurred

— what the fuel values were at the start and at the end

![](images/drex_tipy_otchyetov_v_konstruktore_custom_36.png)

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
    

## PTM 

This is a specialized report type for data from the PTM module.

![](images/drex_tipy_otchyetov_v_konstruktore_custom_37.png)

It is used to view and analyze PTM-related records, for example:

— the task number

— the customer

— planned dates

— mileage

When creating a report of this type, you can set:

-   Name — the report name
    
-   Sorting — the field by which the data will be ordered
    
-   Desc — descending sort
    
-   Columns — the set of data that will be displayed in the report
    
-   Configuration — additional parameters and filters
