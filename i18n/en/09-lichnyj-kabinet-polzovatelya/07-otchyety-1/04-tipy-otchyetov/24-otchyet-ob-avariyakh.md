---
title: "Accident Report"
---

The report is available if the [“Accident Detection”](../../moduli-1/obnaruzhenie-avarij.html) module is enabled. It helps you analyze in detail what happened to a vehicle: when and where the incident occurred, how fast the vehicle was moving, from which direction the impact came, and which trips took place during this period.

![](images/drex_otchyet_ob_avariyakh_custom.png)

The top part of the report contains the main information about the event:

-   Report period — the dates for which the report was generated
    
-   License plate (garage number) — the vehicle identifier
    
-   Crash (Event type) — the event description, in this case an accident
    
-   Time — the exact time of the incident
    
-   Device type — the name of the device that sent the data
    
-   Coordinates — the point on the map where the event occurred (you can open the location on the map).
    

![](images/drex_otchyet_ob_avariyakh_custom_2.png)

### Acceleration graph (Accelerometer Graph)

The central part of the report contains a graph showing which forces acted on the vehicle at the moment of the accident:

-   X axis (blue line) — forward/backward motion (acceleration, braking, head-on impact)
    
-   Y axis (purple line) — right/left motion (turning, side impact)
    
-   Z axis (green line) — up/down motion (a bump, hitting an obstacle)
    
-   Red line — the vehicle's speed
    

Sharp spikes or drops on the graph indicate the moment of the collision.

### Vehicle diagram

Next to it is a vehicle model with a red arrow that indicates the direction of the impact during the accident.

### Trips and parking

At the bottom of the report is a list of the vehicle's trips and parking for the selected period.

The table shows:

-   Status — moving or parked
    
-   Start / End — the start and end time of the trip or parking
    
-   Maximum speed — the highest speed during the trip
    
-   Duration — how long the trip or parking lasted
    
-   Distance (km) — the total mileage of this trip
    
-   Start / Stop — the address where the trip started and ended
    
-   Coordinates — the exact GPS coordinates
    
    <table><tbody><tr><td><span></span></td><td><div>After an accident, the device may send “Crash” tags many times. In the report, if more than a minute has passed between such signals, it is considered a new accident event. Therefore, there may be several records for one vehicle in the report.</div></td></tr></tbody></table>
    
    If you click a row with a specific accident, the system tries to load the vehicle's track for that time and show it on the map (the panel at the top). If there is no track data, the map simply does not change.
    

![](images/drex_otchyet_ob_avariyakh_custom_3.png)
