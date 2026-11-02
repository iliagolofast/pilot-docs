---
title: "Report scheduler"
---

The report scheduler is a tool for generating and sending reports automatically on a schedule.

With the scheduler you can:

— select the report type

— set the period whose data is included in the report

— specify the time and frequency of report generation

— select objects or tags

— specify the e-mail addresses the report is sent to

<table><tbody><tr><td><span></span></td><td><div>To use the report scheduler, confirm your e-mail address on the <a href="privatnost.html#Как_подтвердить_электронную_почту:_"><span>“Privacy”</span></a> tab.</div></td></tr></tbody></table>

![](images/drex_planirovshchik_otchyetov_custom.png)

## How to create a schedule

1\. Open the “Report scheduler” tab

2\. Click “Add new schedule” ![](images/drex_planirovshchik_otchyetov_custom_2.png)

3\. In the window that opens, configure the report parameters, the data period, and the generation schedule

![](images/drex_planirovshchik_otchyetov_custom_3.png)

4\. Select the objects or tags to generate the report for

5\. Click “Save”

The schedule is then created, and reports are generated and sent at the specified frequency.

### Report parameters

In the “Report parameters” block, fill in the following fields:

![](images/drex_planirovshchik_otchyetov_custom_4.png)

-   Name — enter a descriptive name for the schedule
    
-   Language — select the language of the generated report
    
-   Report type — select a report from the list. The list shows only the report types you have access to. You can view the available reports on the [“Report list”](spisok-otchyetov-1.html) tab
    
-   Sensor groups (Select tags) — select the sensor tags whose data should be included in the report. Tags let you generate a report only for the sensors you need. You can assign tags [in the sensor settings](../datchiki-1/metki-datchikov.html). The availability of the field and the list of tags depend on the selected report type.
    
-   Grouping — specify how to group data in the report, for example by dates or by objects
    
-   Breakdown — select the intervals the data in the report is split into, for example by day, by week, or with no additional breakdown
    

If you select a report type that supports maps, additional settings appear in the scheduler. Which settings appear depends on the selected report:

![Report scheduler](images/drex_planirovshchik_otchyetov_screen.png)

-   Show maps (Show maps) — adds a static map with the object's route for the report period to the report.
    
-   Map type (Map Type) — lets you select the base map used in the report, for example OSM or Google Sat. The selected base map is used when the “Map type” (Show maps) option is enabled
    
-   Show parking — marks parking locations on the map with **P** icons. This option is available only after “Show maps” (Show maps) is enabled
    
-   Show odometer (Show odometer) — adds odometer readings at the start and end of the trip to the table, if the selected report supports this option
    

![Report scheduler](images/drex_planirovshchik_otchyetov_screen_2.png)

These settings are saved in the schedule and applied every time the report is generated automatically.

-   Report time zone — select the time zone used to determine the data period and the time of events in the report
    
-   Format — select the file format: PDF or Excel
    
-   Page size — select the page size, for example A4
    
-   Orientation — select the page layout: “Portrait” (vertical) or “Landscape” (horizontal). For reports with many columns, select “Landscape” to fit the table to the page width.
    
-   Emails — specify one or more e-mail addresses to send the report to. To remove an address from the list, click the cross next to it.
    

Make sure your e-mail address is confirmed on the [“Privacy”](privatnost.html#Как_подтвердить_электронную_почту:_) tab. You cannot use the report scheduler without a confirmed address.

Recipients can unsubscribe from a specific report using the link in the e-mail. If no recipients remain in the list, PILOT suspends report generation. The schedule is kept. After you add a new recipient, sending resumes from the current period.

### Report data period

In the “Report data period” block, set the time interval whose data should be included in the report.

-   From — specify the time from which data is included in the report
    
-   Previous day — enable this option if the start time of the period belongs to the previous day
    
-   To — specify the time up to which data is included in the report
    
-   Period — select the duration of the period
    

The “Previous day” option lets you generate reports for intervals that start on one day and end on another.

For example, if you specify:

-   period start — 20:00
    
-   enable “Previous day”
    
-   period end — 08:00
    

the report will include data from 20:00 of the previous day to 08:00 of the current day.

### Generation schedule

In the “Generation schedule” block, specify when and how often the report should be created.

-   Next generation — select the date and time of the nearest report generation and sending
    
-   Frequency (Generate) — specify how often the report should be generated:
    
-   daily — the report is generated every day
    
-   weekly — the report is generated once a week
    
-   monthly — the report is generated once a month
    
-   selected days — the report is generated only on the specified days of the week
    

Below the schedule settings, the “Data period” is displayed — the automatically calculated interval whose data will be included in the next report.

### Selecting objects or tags

On the right side of the window, select the objects to generate the report for:

-   “Objects” — the report is generated for the selected objects
    
-   “Tags” — the report is generated for the objects grouped by the selected tags
    

You can select individual objects or an entire group of objects. Use the search bar and filters for quick search.

![](images/drex_planirovshchik_otchyetov_custom_5.png)

### Saving the schedule

Before saving, check the schedule settings and click “Save”.

The schedule appears in the scheduler, after which reports are generated automatically and sent to the specified recipients.

![](images/drex_planirovshchik_otchyetov_custom_6.png)

## Unsubscribing from a scheduled report

You can stop receiving a scheduled report using the link in the e-mail. You do not need to sign in to PILOT to unsubscribe.

Unsubscribing applies only to the report and e-mail address shown on the confirmation page. Other scheduled reports will continue to arrive. The other recipients of this report keep their subscription.

### How to unsubscribe

1\. Open the e-mail with the scheduled report

2\. Click the “Unsubscribe from this scheduled report” link

![Report scheduler](images/drex_planirovshchik_otchyetov_screen_3.png)

3\. On the page that opens, check the report name and e-mail address

4\. Click the “Unsubscribe” button

PILOT removes the specified address from the recipient list and shows a message confirming a successful unsubscription, with the report name.

If you are already signed in to PILOT, following the link and unsubscribing keep your current session.

## Unsubscribing from a scheduled report

You can stop receiving a scheduled report using the link in the e-mail. You do not need to sign in to PILOT to unsubscribe.

Unsubscribing applies only to the report and e-mail address shown on the confirmation page. Other scheduled reports will continue to arrive. The other recipients of this report keep their subscription.

### How to unsubscribe

1\. Open the e-mail with the scheduled report

2\. Click the “Unsubscribe from this scheduled report” link

![Report scheduler](images/drex_planirovshchik_otchyetov_screen_3.png)

3\. On the page that opens, check the report name and e-mail address

4\. Click the “Unsubscribe” button

PILOT removes the specified address from the recipient list and shows a message confirming a successful unsubscription, with the report name.

If the last recipient unsubscribes, PILOT suspends report generation. The schedule is kept and continues to be updated. After you add a new recipient, sending resumes from the current period.
