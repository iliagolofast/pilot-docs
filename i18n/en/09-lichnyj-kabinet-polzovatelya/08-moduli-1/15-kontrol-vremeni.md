---
title: "Time control"
---

The “Time control” module helps you monitor the working time of vehicles and drivers according to a specified schedule.

With it, you can configure:

 — on which days and hours an object may operate

— how long continuous driving is allowed

— how long rest should last during the day, at night, and over 24 hours

— the maximum time on a route, in a zone, or between zones

Based on these settings, the system generates violation notifications — for example, about overwork, insufficient rest, or staying on a route too long.

![Time control ](images/drex_kontrol_vremeni__screen.png)

## How to configure the working time of an object

1\. Go to the “Online” tab

2\. Select the object you need in the list

3\. Double-click it to open the card

4\. In the left panel, select the “Working time” tab

![](images/drex_kontrol_vremeni__custom.png)

The tab consists of several blocks:

### Days of the week

Select the check boxes for the days on which the object may operate

### Schedule

The “Schedule” block sets working intervals by time:

-   Weekdays (Mon–Fri)
    
-   Saturday
    
-   Sunday
    

To set the time:

1\. Click the icon ![](images/drex_kontrol_vremeni__custom_2.png) next to the row you need

2\. In the window that opens:

![](images/drex_kontrol_vremeni__custom_3.png)

-   Click ![](images/drex_kontrol_vremeni__custom_4.png)
    
-   Specify the working interval
    
-   If necessary, add several intervals
    
    3\. Save the changes
    

### Night time

The “Night time” block defines the period of the day that is considered night.

Specify:

— the start time of the night period

— the end time of the night period.

These settings are used to calculate night rest and generate the corresponding notifications.

### Alert settings

This is where you set the threshold values; when they are exceeded, the system generates notifications.

![](images/drex_kontrol_vremeni__custom_5.png)

Available parameters:

-   Driving duration (min.) — the allowed time of continuous movement without a break
    
-   Rest time — day (min.) — the daytime rest standard
    
-   Rest time — night (min.) — the nighttime rest standard (within the night period)
    
-   Rest time per 24 hours (min.) — the minimum total rest per 24 hours
    
-   Max. driving time between zones (min.) — the maximum travel time between geofences
    
-   Max. parking time in zone (min.) — the maximum allowed parking time in a geofence
    
-   Max. time on route (min.) — the maximum allowed time on a route from the start to the end of the trip.
    

The object's actual figures are compared with these values. If a violation is recorded, the system can create a notification.

## How to configure the working time of a driver

<table><tbody><tr><td><span></span></td><td><div>To work with drivers, the <a href="voditeli-3/index.html"><span>“Drivers”</span></a> module must be connected.</div></td></tr></tbody></table>

1\. Go to the “Drivers” tab

![](images/drex_kontrol_vremeni__custom_6.png)

2\. Double-click the driver you need

3\. In the card, open the “Working time” tab

![](images/drex_kontrol_vremeni__custom_7.png)

4\. Configure the schedule:

-   Select the check boxes for the days on which the driver may work
    

In the “Schedule” block, set working intervals by time:

-   Weekdays (Mon–Fri)
    
-   Saturday
    
-   Sunday
    

To set the time:

1\. Click the icon ![](images/drex_kontrol_vremeni__custom_2.png) next to the row you need

2\. In the window that opens:

![](images/drex_kontrol_vremeni__custom_3.png)

-   Click ![](images/drex_kontrol_vremeni__custom_4.png)
    
-   Specify the working interval
    
    5\. Save the changes
    

If you try to assign a driver to a vehicle outside working hours, the system shows a warning and prevents the operation.

## Default working time settings at the contract level

In the admin panel, you can set default working time settings and restrictions for the Time control module at the contract level.

These parameters are used as a template:

— when adding new objects

— for objects that have never had their own settings saved on the “Working time” tab

That is, you configure the settings once in the contract — and when an object is created, these values are automatically filled into its card. If necessary, they can be changed at the level of a specific object.

You can specify only the parameters you want to make defaults. The remaining fields use system values or are filled in manually.

### How to specify the configuration

1\. Go to the admin panel

2\. Open the card of the contract you need

3\. Go to the “Module settings” tab

**![](images/drex_kontrol_vremeni__custom_8.png)**

4\. Select Time control module

5\. In the “Configs” block, add a key and its value, for example,

-    works\_day = 1,2,3,4,5 (work from Monday to Friday)
    
-    max\_parking\_time = 500 ( no more than 500 minutes of parking in a geofence)
    
-   max\_driving\_time = 1000 ( no more than 1000 minutes of driving between geofences)
    
    6\. Save the contract settings
    

After that, when a new object is created, the specified parameters automatically appear on the “Working time” tab.

![](images/drex_kontrol_vremeni__custom_9.png)

### Available configuration keys

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Configuration key</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Example</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; continues_driving</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Max. continuous driving (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; continues_driving = 250&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>Max. driving time between geofences (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; max_driving_time = 10</span></div><div><span>&nbsp;&nbsp; (no more than 10 minutes between zones)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Max. parking time in a zone (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; max_parking_time = 60</span></div><div><span>&nbsp; (no more than one hour of parking in a zone)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max_stay_on_route</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Max. time on a route (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; max_stay_on_route = 600</span></div><div><span>&nbsp; (no more than 10 hours on a route)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Minimum daytime rest (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_day = 15&nbsp;</span></div><div><span>&nbsp; (at least 15 minutes of rest during the day)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_night</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Minimum nighttime rest (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_night = 15&nbsp;(at least 15 minutes of rest at night)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_full</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Minimum rest per 24 hours (min.)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; rest_time_full = 30&nbsp;(at least 30 minutes of rest per day)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; works_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Specific days of the week (1–7 Monday–Sunday)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; works_day = 1,2,3,4,5</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; work_schedule</span></div></td><td colspan="1" rowspan="1"><div><span>Work schedule in JSON format, specifying working intervals for weekdays and days off</span></div><ul><li><div><span>schedule&nbsp;— general schedule template</span></div></li><li><div><span>days_of_week&nbsp;— specific days of the week (1–5&nbsp;— Monday–Friday) with intervals.</span></div></li><li><div><span>wknd1,&nbsp;wknd2&nbsp;— settings for days off (Saturday, Sunday).</span></div></li></ul><div><span>Intervals are specified in the&nbsp;HH:MM-HH:MM format</span></div></td><td colspan="1" rowspan="1"><div><table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"wknd1": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"wknd2": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"schedule": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"days_of_week": {</span></div><div><span>&nbsp;"1": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"2": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"3": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"4": "04:00-19:00, 19:00-04:00",</span></div><div><span>&nbsp;"5": "04:00-19:00, 19:00-04:00"</span></div><div><span>&nbsp;}</span></div><div><span>}</span></div></td></tr></tbody></table></div></td></tr></tbody></table>

In this way, through the contract configuration you centrally set the basic operating rules and save time when creating new objects.
