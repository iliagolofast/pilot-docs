---
title: "Linking a geofence to an object"
---

Linking a geofence to an object lets you automatically track its movements, monitor idle time and speed, and receive notifications about violations.

How to configure:

1\. Open the settings ![](images/drex_privyazka_geozony_k_obektu_custom.png) of the zone you need

![Linking a geofence to an object](images/drex_privyazka_geozony_k_obektu_screen.png)

2\. Link objects to the geofence

Select the check boxes next to the objects that should be associated with this geofence. The system will track their movements relative to the selected zone and apply all the specified parameters to them.

![Linking a geofence to an object](images/drex_privyazka_geozony_k_obektu_screen_2.png)

3\. Configure additional parameters:

![](images/drex_privyazka_geozony_k_obektu_custom_2.png)

-   Idle control — specify the time in minutes after which staying in the zone is considered idle time.  For example, if you specify 15 minutes, the system records an idle period if the object stays in the zone longer than this time. If you specify 0, idle time in this zone is not counted (this is the default value). Idle data can be viewed in the dedicated idle [reports](../../otchyety-1/tipy-otchyetov/geozony-1/index.html) and in summary reports
    
-   Speed control — set a speed limit for objects within this geofence
    
-   Zone type — choose whether the zone is a working zone or a restricted zone:
    

— working geofence — an area where the object should be and perform its tasks (for example, a warehouse, a construction site, a route)

— restricted geofence — an area the object must not enter (for example, private property, hazardous or closed areas, military facilities)

-   Alert type — configure the alert type in this zone:
    

— idle in zone — the system sends an alert if the object stays in the zone longer than the set time

— border crossing — the system sends an alert when the object enters or leaves the geofence

— idle in zone and border crossing — the system sends an alert on either of these events

-   Recalculate geofences for (number of days)
    

If you changed the geofence parameters or have just created a new one, you can recalculate the events for this zone for a past period (for example, the last 7 days).

To do this, select the “Recalculate geofences for” check box and choose the number of days. The system recalculates all events (entries, exits, idle periods, and so on) for the selected period using the new settings.

4\. Click “Save”, and the geofence settings are applied.

##  How to view the geofence history

In the geofence settings, there is a “Show history” button.

![Linking a geofence to an object](images/drex_privyazka_geozony_k_obektu_screen_3.png)

Click it to see:

-   The history of all object movements in this zone
    
-   The date and time of each object's entry and exit
    
-   The duration of stay in the zone
    

### ![](images/drex_privyazka_geozony_k_obektu_custom_3.png)

If you want to save the history of movements or events for the geofence, click the “Save to CSV” button.
