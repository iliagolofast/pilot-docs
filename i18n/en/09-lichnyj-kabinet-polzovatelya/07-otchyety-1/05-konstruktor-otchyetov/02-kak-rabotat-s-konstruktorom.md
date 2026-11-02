---
title: "How to Work with the Builder"
---

The report builder lets you create your own report form with the columns, filters and calculation logic you need.

In this article you will learn:

-   [How to create a report](kak-rabotat-s-konstruktorom.html#Как_создать_отчёт) — step-by-step configuration of the report form
    
-   [How to run a report](kak-rabotat-s-konstruktorom.html#Как_построить_отчёт) — running a report from the builder
    
-   [Report grouping](kak-rabotat-s-konstruktorom.html#Группировка_отчёта_по_группам) — how to combine data by groups
    
-   [Interface overview](kak-rabotat-s-konstruktorom.html#Обзор_интерфейса_конструктора) — what the builder consists of
    
-   [Report configuration](kak-rabotat-s-konstruktorom.html#Конфигурация_отчёта) — how to configure a report further
    
-   [Import and export](kak-rabotat-s-konstruktorom.html#Импорт_и_экспорт_отчётов) — how to transfer reports between accounts
    

## How to create a report

1\. Go to the “Reports” section

![How to Work with the Builder](images/drex_kak_rabotat_s_konstruktorom_screen.png)

2\. Find the “Builder” button ![](images/drex_kak_rabotat_s_konstruktorom_custom.png)

3\. Click it — the builder window opens

![](images/drex_kak_rabotat_s_konstruktorom_custom_2.png)

In the builder:

4\. Click “Add” ![](images/drex_kak_rabotat_s_konstruktorom_custom_3.png)

5\. Select the [report type](tipy-otchyetov-v-konstruktore.html)

![](images/drex_kak_rabotat_s_konstruktorom_custom_4.png)

6\. In the “Name” field, enter the report name

![](images/drex_kak_rabotat_s_konstruktorom_custom_5.png)

7\. In the “Columns” block, click “+” and add the required fields

8\. Specify the data, formulas, filters and other column parameters

9\. If necessary, fill in the “Configuration” field

10\. Click “Save”

After saving, the report becomes available in the “Reports” section.

### Report example

For example, you can create an Idle – Summary Table report.

![](images/drex_kak_rabotat_s_konstruktorom_custom_6.png)

Report type: “Summary table”

Added columns:

-   Vehicle — the Object for which the report is built
    
-   Idle time — the idling duration
    
-   Total number of idles — the number of events
    
-   Fuel at start — the fuel balance at the start
    
-   Fuel at end — the fuel balance at the end
    

In the “Configuration” field you can set a filter so that only the data you need appears in the report.

![How to Work with the Builder](images/drex_kak_rabotat_s_konstruktorom_screen_2.png)

For example, only Objects with idling:

<table><tbody><tr><td><span></span></td><td><div>{"filter":[{"key":"total_idle_events_number","rule":"&gt;","value":0}]}</div></td></tr></tbody></table>

After the report is created and saved in the builder, it becomes available in the “Reports” section.

![](images/drex_kak_rabotat_s_konstruktorom_custom_7.png)

## How to run a report

1\. Go to the “Reports” section

2\. Select an Object (select its checkbox in the list)

3\. Select the required report created in the builder

![](images/drex_kak_rabotat_s_konstruktorom_custom_7.png)

4\. Specify the period and additional parameters

5\. Click “Build report”

![](images/drex_kak_rabotat_s_konstruktorom_custom_8.png)

The system generates the report according to the specified form.

![](images/drex_kak_rabotat_s_konstruktorom_custom_9.png)

You can do the following with the finished report:

— view and analyze it

— export it to CSV, Excel, PDF — ![](images/drex_kak_rabotat_s_konstruktorom_custom_10.png)

— print it ![](images/drex_kak_rabotat_s_konstruktorom_custom_11.png)

![](images/drex_kak_rabotat_s_konstruktorom_custom_12.png)

## Report grouping

The data of a report created in the builder can be combined into separate blocks using grouping. Depending on the report type, the following options are available:

-   by drivers
    
-   by dates
    
-   by Objects
    
-   by Object groups
    

To configure grouping:

1\. Go to the “Reports” section

2\. Select a report created in the builder

3\. In the “Grouping” field, select the suitable option

![How to Work with the Builder](images/drex_kak_rabotat_s_konstruktorom_screen_3.png)

4\. Select Objects and, if necessary, other data for building the report

5\. Click “Build report”

For example, with grouping by Object groups, a separate block with the data related to it is generated for each selected group.

![](images/drex_kak_rabotat_s_konstruktorom_custom_13.png)

## Builder interface overview

![](images/drex_kak_rabotat_s_konstruktorom_custom_14.png)

On the left is the “Reports” panel with a list of reports that have already been created.

![](images/drex_kak_rabotat_s_konstruktorom_custom_15.png)

It contains the list of created reports and control buttons:

The control buttons are also located here:

![](images/drex_kak_rabotat_s_konstruktorom_custom_16.png) — create a new report

![](images/drex_kak_rabotat_s_konstruktorom_custom_17.png)  ![](images/drex_kak_rabotat_s_konstruktorom_custom_18.png) — import or export a report

![](images/drex_kak_rabotat_s_konstruktorom_custom_19.png) — refresh the list

On the right is the configuration area for the selected report:

![](images/drex_kak_rabotat_s_konstruktorom_custom_20.png)

-   Type — the report builder type
    
-   Name — the report name
    
-   Total — the main indicator for the summary
    
-   Sorting — the order in which data is displayed
    
-   Desc — descending sort
    
-   Columns — configuration of the report contents
    
-   Configuration — additional report configuration in JSON format. It lets you control how data is displayed in the report.
    

## Report configuration

The “Configuration” field is intended for additional report settings. Parameters are specified in JSON format and define how data is processed and displayed.

![How to Work with the Builder](images/drex_kak_rabotat_s_konstruktorom_screen_4.png)

### Splitting data by hours

To split the data into hourly intervals, specify:

<table><tbody><tr><td><span></span></td><td><div>{"split": "hour"}</div></td></tr></tbody></table>

When the report is built, the data for each hour is displayed in a separate block.

![](images/drex_kak_rabotat_s_konstruktorom_custom_21.png)

### Splitting data by shifts

Report data can be split by work shifts. For each shift, the system generates a separate interval and calculates indicators only from the data that belongs to it.

To configure the split, specify the start and end time of each shift in the split parameter, for example,

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"]</div><div>}</div></td></tr></tbody></table>

![](images/drex_kak_rabotat_s_konstruktorom_custom_22.png)

In this example, two shifts are configured:

-   from 08:00 to 20:00
    
-   from 20:00 to 08:00 the next day
    

If the show parameter is not specified, the report displays all configured shifts.

**Example of a report for all shifts**

In the example, the “Loader Operation Timeline” report is split into day and night shifts. For each shift, a separate block is displayed with the Object, the start and end time of the interval and the equipment operation indicators.

The night shift is displayed as one continuous interval from 20:00 of the current day to 08:00 of the next day.

Since the selected report period starts at 00:00, the remaining part of the night shift — from 00:00 to 08:00 — is also displayed at the beginning of the report.

![](images/drex_kak_rabotat_s_konstruktorom_custom_23.png)

**Displaying one shift**

To include only one of the configured shifts in the report, add the show parameter:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"],</div><div>&nbsp; "show": 1</div><div>}</div></td></tr></tbody></table>

The parameter value corresponds to the shift's sequence number in the list:

-   show: 1 — show the first shift, from 08:00 to 20:00
    
-   show: 2 — show the second shift, from 20:00 to 08:00
    

**Example of a report for one shift**

The example specifies the show: 1 parameter, so the report contains only day shifts from 08:00 to 20:00. A separate block is generated for each day. Night shifts are not displayed in the report.

![](images/drex_kak_rabotat_s_konstruktorom_custom_24.png)

**Splitting a shift at midnight**

By default, the shift from 20:00 to 08:00 is treated as one continuous interval. To split it at the calendar day boundary, add the split\_days parameter:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"],</div><div>&nbsp; "split_days": 1</div><div>}</div></td></tr></tbody></table>

The night shift will be split into two intervals:

-   from 20:00 to 00:00
    
-   from 00:00 to 08:00
    

The day shift remains one block from 08:00 to 20:00.

The show parameter is not specified because the report includes both the day and night shifts.

![](images/drex_kak_rabotat_s_konstruktorom_custom_25.png)

All parameters can be used at the same time:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "split": ["08-20", "20-08"],</div><div>&nbsp; "show": 1,</div><div>&nbsp; "split_days": 1</div><div>}</div></td></tr></tbody></table>

In this example, the report displays only the first shift, and shifts that cross midnight are split by calendar day.

### Filtering data

The configuration lets you define which data should appear in the report.

For example, for an Idle – Summary Table report you can add the following columns:

-   Vehicle
    
-   Idle time
    
-   Total number of idles
    
-   Fuel at start
    
-   Fuel at end
    

To include in the report only Objects for which at least one idle was registered, specify:

<table><tbody><tr><td><span></span></td><td><div>{"filter":[{"key":"total_idle_events_number","rule":"&gt;","value":0}]}</div></td></tr></tbody></table>

As a result, rows in which the value of the “Total number of idles” field is zero are not displayed.

![](images/drex_kak_rabotat_s_konstruktorom_custom_6.png)

### Merging rows

To merge several rows within one split period into a summary row, specify:

<table><tbody><tr><td><span></span></td><td><div>{"merge": true}</div></td></tr></tbody></table>

 The merged row shows the values of the configured columns, and the intermediate rows are hidden. Configure the columns that should be included in the report and save the changes.

![](images/drex_kak_rabotat_s_konstruktorom_custom_26.png)

Example of merging rows

![](images/drex_kak_rabotat_s_konstruktorom_custom_27.png)

In the example, the report is grouped by drivers and split by day. A separate block is created for each driver, and their data for each day is merged into one row. The row shows the vehicle, the date, the start time of the first trip and the end time of the last trip, the total driving and idling time, and the total mileage for the day.

## Importing and exporting reports

Reports from the builder can be transferred between accounts. To do this, use the “Export” ![](images/drex_kak_rabotat_s_konstruktorom_custom_18.png) and “Import” ![](images/drex_kak_rabotat_s_konstruktorom_custom_17.png) buttons   

![How to Work with the Builder](images/drex_kak_rabotat_s_konstruktorom_screen_5.png)

### How to export a report

1\. Click “Export” ![](images/drex_kak_rabotat_s_konstruktorom_custom_18.png)

2\. Select a location on your device

3\. Save the file

### How to import a report

1\. Click “Import” ![](images/drex_kak_rabotat_s_konstruktorom_custom_17.png)

2\. In the window that opens, if necessary, turn on the Remove existing reports option if you need to delete existing reports in the builder  
![](images/drex_kak_rabotat_s_konstruktorom_custom_28.png)

3\. Select the report file

4\. Click “Import”

The report will be uploaded to the account.
