---
title: "Geofences in the object card"
---

When the “Geofences” module is connected, a separate “Geofences” tab appears in the [object card](../../obekty-1/kartochka-obekta/index.html).

![](images/drex_geozony_v_kartochke_obekta_custom.png)

On this tab, you can:

— link the object to the geofences you need — select the check boxes next to the geofences that should be associated with this object

— configure individual parameters for it: idle control, speed control, zone type, alert type

-   Idle control — specify the time in minutes after which staying in the zone is considered idle time.  For example, if you specify 15 minutes, the system records an idle period if the object stays in the zone longer than this time. If you specify 0, idle time in this zone is not counted (this is the default value).
    
-   Speed control — set a speed limit for the object within this geofence.
    
-   Zone type — choose whether the zone is a working zone or a restricted zone for the object:
    

— working geofence — an area where the object should be and perform its tasks (for example, a warehouse, a construction site, a route)

— restricted geofence — an area the object must not enter (for example, private property, hazardous or closed areas, military facilities)

-   Alert type — configure the alert type in this zone:
    

— idle in zone — the system sends an alert if the object stays in the zone longer than the set time

— border crossing — the system sends an alert when the object enters or leaves the geofence

— idle in zone and border crossing — the system sends an alert on either of these events.

After filling in all the parameters, do not forget to click the “Save” button.
