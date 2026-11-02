---
title: "Task actions"
---

In this article we look at additional task actions that help you control task execution, and explain:

— [how to track how a task is being executed by the system and the driver](dejstviya-s-zadaniyami.html#Как_отслеживать,_как_задание_выполняется_системой_и_водителем)

— [how to use the waybill](dejstviya-s-zadaniyami.html#Как_использовать_путевой_лист)

— [how to start task recalculation](dejstviya-s-zadaniyami.html#Как_запустить_пересчёт_задания_)

The task table has an “Actions” column with icons for performing operations on a task.

![](images/drex_dejstviya_s_zadaniyami__custom.png)

![Task actions ](images/drex_dejstviya_s_zadaniyami__screen.png)

## Visualization of task progress

Click the icon ![](images/drex_dejstviya_s_zadaniyami__custom_2.png), and the task execution chart opens. The chart helps you track how the task was planned, how the system is executing it, and how the driver is actually executing it.

![](images/drex_dejstviya_s_zadaniyami__custom_3.png)

## Route progress

Click the icon ![](images/drex_dejstviya_s_zadaniyami__custom_4.png), and the waybill with route information opens.

The waybill is a detailed report on how the vehicle drove its route. Use it to track the actual task execution by comparing planned and actual data.

![](images/drex_dejstviya_s_zadaniyami__custom_5.png)

Main elements of the waybill

The **task parameters** are shown at the top, such as:

-   Task ID
    
-   Date and time
    
-   Execution status
    

The center of the screen contains the **table of route points**. Each row corresponds to a separate route point (address).

Main columns of the waybill table:

-   Actions — this column contains icons for working with route points. For example:
    
    ![](images/drex_dejstviya_s_zadaniyami__custom_6.png) Mark geofence entry
    
    ![](images/drex_dejstviya_s_zadaniyami__custom_7.png) Mark geofence entry (ignoring location)
    
    ![](images/drex_dejstviya_s_zadaniyami__custom_8.png) Mark geofence exit
    
    ![](images/drex_dejstviya_s_zadaniyami__custom_9.png) Change the working radius of the geofence — click the point and specify the new radius
    
    ![](images/drex_dejstviya_s_zadaniyami__custom_10.png)Change the location and radius of the geofence using the marker on the map —  move the marker on the map and save the changes
    
    ![Task actions ](images/drex_dejstviya_s_zadaniyami__screen_2.png) Save changes — confirm the changes to the marker
    
-   Address — the full address of each route point
    
-   Type — the point type (for example, loading, unloading, intermediate point)
    
-   Actual distance and time — the actual distance the vehicle traveled and the actual travel time
    
-   Planned values — the planned time and distance for this route point
    

You can configure the waybill table columns as you like. Choose which parameter columns to display:

1\. In the header of any column, click the arrow ![](images/drex_dejstviya_s_zadaniyami__custom_11.png). A menu with column settings appears, where you can:

• Sort the data in ascending or descending order

• Choose which columns to show in the table

2\. To choose which columns to show:

-   Click “Columns” — a list of parameters available for display opens
    
-   Check the parameters you want to see
    

![](images/drex_dejstviya_s_zadaniyami__custom_12.png)

On the right of the waybill is the **map with the route**:

![](images/drex_dejstviya_s_zadaniyami__custom_13.png)

— route points are numbered

— the red dashed line is the planned route on the map

— the green line is the actual route

— the current or last recorded location of the vehicle is marked

When working with the map, you can use the following tools:

### Zooming

There are several ways to change the map scale:

1\. Buttons on the map toolbar ![](images/drex_dejstviya_s_zadaniyami__custom_14.png) and ![](images/drex_dejstviya_s_zadaniyami__custom_15.png)

In the upper left part of the map there are buttons for quickly zooming in and out

2\. Mouse scroll wheel

Scroll the mouse wheel: away from you — the map gets larger, toward you — smaller. The cursor indicates which area you want to examine in more detail.

3\. Mouse double-click

Double-click the left mouse button at any point on the map — it zooms in immediately.

### Measuring distance between points

This tool ![](images/drex_dejstviya_s_zadaniyami__custom_16.png) helps you calculate distances between any points on the map.

 How to use it:

-   Click on the map to mark the first point
    
    2\. Click again to mark the second point
    
    3\. A line with the distance appears between the points
    
    If you need to measure several segments, keep clicking on the map to add new points. The length of each segment is shown next to it.
    

![](images/drex_dejstviya_s_zadaniyami__custom_17.png)

### Measuring area

This tool ![](images/drex_dejstviya_s_zadaniyami__custom_18.png) helps you calculate the area of the section you select on the map.

How to use it:

1\. On the map, mark the corners of the shape you want to measure one after another

2\. When you finish drawing the shape, the program calculates and shows its area

![](images/drex_dejstviya_s_zadaniyami__custom_19.png)

### Printing the map

This function prints the current map view. When you click the print button ![](images/drex_dejstviya_s_zadaniyami__custom_20.png), four print orientation options are offered:

1\. Landscape — the map is printed in horizontal orientation. This orientation is convenient for displaying extended areas or objects arranged horizontally.

2\. Portrait — the map is printed in vertical orientation. This format suits areas that are elongated vertically.

3\. Auto — the system automatically selects the best print orientation depending on the current map view and its proportions.

4\. Custom — select this option if you want to print only a certain area of the map. To do this, select the part of the map you need with the mouse, and it is sent to print.

### Viewing traffic

The traffic view function shows current road congestion using color indication:

-   Green — free-flowing traffic
    
-   Yellow — moderate congestion
    
-   Red — heavy congestion
    

To turn on traffic display, check this option in the upper right part of the map.

### Selecting a map

You can choose from several map types to display space in the PTM interface. The map type is the base layer of the cartographic image used in the monitoring system to display spatial data. To change the map, click the map selection button ![](images/drex_dejstviya_s_zadaniyami__custom_21.png).

![](images/drex_dejstviya_s_zadaniyami__custom_22.png)

The bottom of the map shows **route parameters** that help you track its execution:

![Task actions ](images/drex_dejstviya_s_zadaniyami__screen_3.png)

<table><tbody><tr><td><div><h3>Route parameters</h3></div><div><img alt="1. " src="images/drex_dejstviya_s_zadaniyami__control_1.png" data-full-src="drex_dejstviya_s_zadaniyami__control_1.png" data-full-width="139" data-full-height="46"></div><ul><li><div>Distance — total mileage on the route (for example, 36.59 km)</div></li><li><div>Driving time — how long the vehicle was actually on the road, excluding stops</div></li><li><div>Total time — the total route execution time, including driving and all stops</div></li></ul></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

At the bottom of the “Waybill” window there is a route **player** that shows the vehicle's movement along the route in real time.

![Task actions ](images/drex_dejstviya_s_zadaniyami__screen_4.png)

### Route player

![](images/drex_dejstviya_s_zadaniyami__custom_23.png)

Click Play ▶ to start route playback. The vehicle icon moves along the track from start to end.

The scroll bar (timeline) shows the entire route interval. By dragging the slider, you can manually jump to any moment of the route and see the vehicle's exact position on the map

### Timeline

![](images/drex_dejstviya_s_zadaniyami__custom_24.png)

Below the scroll bar the following are shown

-   Date and time (for example, 14.08.2025, 15:55) — the moment corresponding to the current slider position
    
-   Speed (for example, 6 km/h) — the vehicle's speed on the current section of the route
    

Additional player functions:

-   Follow ![](images/drex_dejstviya_s_zadaniyami__custom_25.png) — if you check the box next to the eye icon, you will follow the vehicle on the map during route playback.
    
-   Playback speed control ![](images/drex_dejstviya_s_zadaniyami__custom_26.png) — with the slider on the right you can speed up or slow down route playback
    
    ## Task recalculation
    

Click the icon  ![](images/drex_dejstviya_s_zadaniyami__custom_27.png), and the process of recalculating all task parameters based on current data starts. You can use task recalculation if new data has arrived from the tracker or if the task settings were changed and the calculations need to be updated without manual editing.

During recalculation:

— the system rebuilds the route points based on updated data

— new settings are taken into account: auto statuses, auto forecasts, changes in templates and other parameters

— the system recalculates task and point statuses, planned and actual times, mileage, and parking times
