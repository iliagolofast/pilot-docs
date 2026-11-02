---
title: "Route Idling Event"
---

The “Route Idling Events” report contains information about cases when a monitored Object remained stationary for longer than the allowed time. Use it to find out where and when the idling occurred, which Driver was assigned to the Object, and which Geofence it was in.

![](images/drex_sobytie_prostoev_na_marshrute_custom.png)

### How idling is determined

The allowed idling duration is set in the Object card [in “Settings”](../../../obekty-1/kartochka-obekta/index.html#Настройки_объекта) in the “Idling, sec.” field.

The Event is generated as follows:

1\. The vehicle stops

2\. The countdown of the set idling time begins

3\. If the vehicle does not start moving before this time expires, the system records the Event

4\. Idling continues until movement resumes or the ignition is turned off, if the ignition state is taken into account

For example, if the idling time for an Object is set to 00:10:00, the Event appears after the vehicle has been stationary for more than 10 minutes.

If needed, you can enable ignition tracking in the Object settings. In this case, an idling Event is recorded only when the vehicle is not moving with the ignition on.

![Route Idling Event](images/drex_sobytie_prostoev_na_marshrute_screen.png)

1 — Set the idling time

2 — Enable ignition tracking

### What the report shows

-   Object — name or number of the monitored Object
    
-   Date and time — date and time the idling Event was recorded
    
-   Event — information about exceeding the allowed idling time, for example “Idling for more than 00:10:00”
    
-   Drivers — the Driver assigned to the Object at the time of the Event
    
-   Geofences — the Geofence where the idling was recorded
    
-   Coordinates — latitude and longitude of the place where the Object was during the idling
    

![](images/drex_sobytie_prostoev_na_marshrute_custom_2.png)
