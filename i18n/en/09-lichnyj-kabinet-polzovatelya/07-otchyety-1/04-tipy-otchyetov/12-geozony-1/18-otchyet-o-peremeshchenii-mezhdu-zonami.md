---
title: "Movement Between Zones Report"
---

The report shows vehicle movements between the selected geofences during the specified period. Use it to find out which zone a vehicle left and which zone it arrived in, how long the movement took, what distance was covered and how many stops occurred along the way.

![](images/drex_otchyet_o_peremeshchenii_mezhdu_zonami_custom.png)

Before building the report, you need to select:

— the period

— one or more vehicles

— the geofences whose movements you want to include in the report

![](images/drex_otchyet_o_peremeshchenii_mezhdu_zonami_custom_2.png)

If the data is split by day, a separate block is generated for each day. The “Total” row shows the totals for the corresponding period.

### What the report shows

-   Vehicle — the name or number of the monitored object
    
-   Driver — the driver assigned to the vehicle
    
-   Start time — the date and time the movement between zones started
    
-   End time — the date and time the movement between zones ended
    
-   Zone start — the geofence from which the vehicle started moving
    
-   Zone end — the geofence in which the vehicle finished moving
    
-   Number of stops — the number of stops recorded during the movement
    
-   Travel time — the total duration of movement between zones
    
-   Idling time — the total duration of idling
    
-   Stop time — the total duration of stops
    
-   Distance — the distance traveled by the vehicle between zones
    
-   Time in zone — how long the vehicle stayed in the geofence
    

![](images/drex_otchyet_o_peremeshchenii_mezhdu_zonami_custom_3.png)

### Preparing geofences

For the report to be generated correctly, create the necessary geofences in the [“Geofences”](../../../moduli-1/geozony-2/sozdanie-geozony.html) module, then [link](../../../moduli-1/geozony-2/privyazka-geozony-k-obektu.html) them to the vehicle in the Object settings and set the type to [“Working”](../../../moduli-1/geozony-2/privyazka-geozony-k-obektu.html#Тип_зоны).

A working geofence is a territory where the vehicle is supposed to be or to perform tasks, for example a warehouse, a construction site, a production site or a section of a route.

![](images/drex_otchyet_o_peremeshchenii_mezhdu_zonami_custom_4.png)
