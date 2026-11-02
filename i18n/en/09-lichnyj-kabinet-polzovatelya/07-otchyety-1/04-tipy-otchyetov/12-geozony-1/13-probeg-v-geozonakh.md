---
title: "Mileage in Geofences"
---

The report shows how many kilometers a vehicle drove inside each selected geofence during the specified period, and how long it spent there, both in motion and parked.

![](images/drex_probeg_v_geozonakh_custom.png)

 When building the report, select one or more geofences. The system calculates the mileage, driving time and parking time inside the selected zones for the specified period.

![Mileage in Geofences](images/drex_probeg_v_geozonakh_screen.png)

You can also use checkboxes to refine the calculation.

<table><tbody><tr><td><div><img alt="" src="images/drex_probeg_v_geozonakh_custom_2.png" data-full-src="drex_probeg_v_geozonakh_custom_2.png" data-full-width="345" data-full-height="36"></div><div>&nbsp;<h3>Movement in geozones</h3></div><div>This checkbox turns on accounting for movement inside geofences.</div><div>If the checkbox is selected:</div><div>— the report counts and displays only the mileage recorded inside the selected geofences</div><div>— data outside these zones is not counted</div><div><h3>Outside geofences</h3></div><div>This checkbox controls the display of mileage outside the selected geofences.</div><div>If the checkbox is selected:</div><div>— the system additionally calculates the mileage and time when the Object was outside the selected zones</div><div>— separate rows with the distance and time outside the zones appear in the report</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

### What the report shows

Each row is one vehicle in one geofence for the selected period.

The report shows the following data:

-   Date — the period for which the indicators are calculated
    
-   Object — the vehicle for which the report is built
    
-   Zone — the name of the geofence inside which movement was recorded
    
-   Mileage (km) — how many kilometers the vehicle drove inside this zone
    
-   Time — the total time spent in the zone
    
-   Time in motion — how long the vehicle was moving inside the geofence
    
-   Parking duration — how long the vehicle stood in the zone without moving
    

At the bottom of the report there is a “Total” row that sums up:

— the total mileage across all selected geofences

— the total time spent

— the total time in motion

— the total parking duration

![](images/drex_probeg_v_geozonakh_custom_3.png)
