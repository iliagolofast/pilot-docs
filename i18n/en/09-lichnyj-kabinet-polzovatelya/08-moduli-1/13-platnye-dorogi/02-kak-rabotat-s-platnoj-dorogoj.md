---
title: "How to work with a toll road"
---

A special menu is provided for configuring a toll road.

Left-click the toll road you need, and you will see the following functions:

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom.png)

-   [Gates](kak-rabotat-s-platnoj-dorogoj.html#Ворота) — configure entry and exit points
    
-   [Scheduler](kak-rabotat-s-platnoj-dorogoj.html#Планировщик) — set conditions and rates for the toll road
    
-   [Delete](kak-rabotat-s-platnoj-dorogoj.html#Удалить_платную_дорогу) — delete the toll road
    
    ## How to add toll gates
    

Gates are points on a toll road that record the moment an object enters and exits the tolled section. Thanks to gates, the system determines exactly when an object started and finished driving on the toll road.

For accurate accounting of the start and end of the tolled section, add entry and exit points — gates.

How to add gates:

1\. Open the toll road menu and select “Gates”

2.  Click ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_2.png) to add a new point

3\. Enter the gate name

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_3.png)

4\. Select the gate type:

-   Entry — marks the place where vehicles enter the toll road
    
-   Exit — marks the place where vehicles leave the toll road
    
-   Composite (or complex) — can be both an entry and an exit
    
    5\. A gate marker appears on the map. You can move it to the right place.
    
     ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_4.png)
    
    6\. After the gates are added, click “Save”.
    

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_5.png)

Depending on the structure of the toll road and the traffic patterns, the system supports different gate configuration options. This lets you account for all trips accurately and correctly calculate the toll for any route.

As examples, let us look at two main scenarios: using simple gates and complex gates.

### Simple gates

Simple gates are the option where the entry and exit points are located on the same line (the same section of the toll road). In this case, you simply mark the start and end of the tolled section, and the system records all trips between these two points.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_6.png)

For example, a vehicle enters the toll road through “Gate 1” and exits through “Gate 2” on the same section.

Even if GPS is temporarily lost on the road (for example, in a tunnel), the system still remembers where the entry and exit were and correctly calculates the toll.

### Complex gates

Complex (or composite) gates are the option where the entry and exit can be on different lines (different sections of toll roads). You can link one line as an entry with another line as an exit, and there can be several such combinations. Such gates are convenient for complex traffic layouts, when a toll road has several routes, interchanges, entries, and exits. They let you account for trips between different sections of toll roads.

For example, a vehicle enters the toll road through “Gate A” (on one section) and exits through “Gate B” (on another section). You can create several such links, for example: “Entry 1” — “Exit 1”, “Entry 2” — “Exit 2”, and so on.

How to create complex gates:

 1. Create toll roads on the map

Draw the first section of the toll road on the map as a polyline, set its width, and give it a clear name, for example, Polyline\_North.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_7.png)

Draw the second section of the toll road and name it, for example, Polyline\_South

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_8.png)

2\. Go to the settings of one of the toll roads, for example, Polyline\_North

3\. In the toll road menu, select “Gates”

4\. Click ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_2.png) to add gates

5\. Enter the gate name, for example, North\_to\_South

6\. Select the gate type — composite (complex)

7\. In the Link zone field, select the second toll road you want to link these gates to, for example, Polyline\_South. In the “Location” field, the coordinates are filled in automatically.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_9.png)

8\. Click “Save”

9\. Configure rates and schedule

For this composite pair of gates, you can open the [“Scheduler”](kak-rabotat-s-platnoj-dorogoj.html#Планировщик) ![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_10.png) and set individual rates and a schedule for the route between, for example, Polyline\_North and Polyline\_South

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_11.png)

10\. If necessary, create the reverse direction for the second toll road

This way, if a vehicle enters the toll road through the gate on Polyline\_North and exits through the gate on Polyline\_South, the system determines that this is the North\_to\_South route and applies the corresponding rate and schedule.

## How to work with the scheduler

The scheduler is a tool for configuring the conditions of travel on a toll road.

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_12.png)

How to configure the scheduler:

1\. Open the toll road menu

2\. Select “Scheduler”

3\. In the “Scheduler” window, configure the parameters

-   Traffic periods:
    
    For each day of the week (weekdays, Saturday, Sunday), set the time intervals you need:
    
    — normal
    
    — high
    
    — peak
    
    For each period, specify its own time frame, for example, 08:00–10:00 — high traffic.
    
-   Rates for different vehicle types:
    
    For each time period, specify the toll for:
    
    — motorcycles and passenger cars
    
    — buses and trucks
    
    — trucks with trailers
    
-   Tolerance
    
    Click the tolerance button and specify the allowed delay or deviation time so that the system does not treat minor lateness as a violation.
    

![](images/drex_kak_rabotat_s_platnoj_dorogoj_custom_13.png)

4\. After filling in all the parameters, click “Save” at the bottom of the window. The conditions of travel on the toll road are taken into account automatically according to your settings.

## How to delete a toll road

To delete a toll road, open the toll road menu and select “Delete” — after that, the toll road disappears from the zone list and is no longer displayed on the map.
