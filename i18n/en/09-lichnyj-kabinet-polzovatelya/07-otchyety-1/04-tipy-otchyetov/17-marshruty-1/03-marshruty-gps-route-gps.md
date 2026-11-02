---
title: "GPS Routes (Route GPS)"
---

The **Route GPS** report helps you monitor the execution of scheduled trips: visits to checkpoints, driving time, trip duration, distance traveled and unplanned stops.

The report includes only those routes on which the Object made a trip during the selected period. If there were no trips on a route, the route is not displayed.

![](images/drex_marshruty_gps__route_gps__custom.png)

The report is designed for circular routes consisting of three checkpoints:

1\. the starting point — the company premises

2\. the intermediate point — the customer's location

3\. the end point — the same company premises

### What the report shows

-   Vehicle No (vehicle number) — the Object number
    
-   Customer Name (customer name) — the name of the second-to-last checkpoint of the route
    
-   Actual Start Time (actual start time) — the date and time the trip along the route started
    
-   Time arrived at customer location (time of arrival at the customer) — the date and time the Object arrived at the second checkpoint of the route
    
-   End Time (end time) — the date and time the trip finished, when the Object returned to the final checkpoint. For a circular route, the end point is the same as the starting point
    
-   Actual Route (actual route) — the route along which the trip was made
    
-   Trip Status (trip status) — the result of the route execution. The status shows whether the driver visited all the planned checkpoints:
    
-   Finished (completed) — all checkpoints were visited
    
-   Unfinished (not completed) — one or more checkpoints were not visited or the trip is not yet finished
    
-   Time In Transit (travel time) — the Object's driving time during the trip
    
-   Trip Duration (trip duration) — the time from the start to the end of the trip
    
-   Distance Travelled (distance traveled) — the distance the Object covered during the trip
    
-   Number of Stops Outside Planned Geofence (number of stops outside planned geofences) — the number of stops made outside the route checkpoints
    
-   Number of planned stoppage (number of planned stops) — the number of checkpoints provided for by the route
    

![](images/drex_marshruty_gps__route_gps__custom_2.png)

### Viewing the route on the map

To study the Object's movement in more detail, expand the “Map” panel and click the required report row. The map shows data for the selected day:

-   the Object's trips — as lines with arrows showing the direction of travel
    
-   parking — as P markers
    
-   the planned route — as a dashed line
    
-   route checkpoints — as numbered markers
    

If there were several trips during the day, their lines may overlap.

![](images/drex_marshruty_gps__route_gps__custom_3.png)

A collapsible “Trips” panel appears on the left side of the map. For each trip it lists the start time, date and distance traveled. Click the required trip to keep only its route on the map.

![](images/drex_marshruty_gps__route_gps__custom_4.png)

Click a checkpoint marker to see

-   the point name
    
-   the coordinates
    
-   the address
    

![](images/drex_marshruty_gps__route_gps__custom_5.png)

### Accounting for parking

The map shows all parking events related to the selected day. The last parking event is also counted if it started on the selected day and ended on the next one.

For example, if the Object stopped at 17:00 and resumed moving at 09:00 the next day, the time of this parking event is included in Trip Duration (trip duration). Therefore, the duration value can sometimes exceed 24 hours.
