---
title: "Parking Report"
---

The Parking Report contains information about the Parking of the selected vehicles over the specified period. Use it to find out when and where a vehicle was parked, how long the Parking lasted, and which Geofence the Object was in.

![](images/drex_otchyet_po_parkovkam_custom.png)

Before generating the report, you need to select the period and the vehicles. You can also set the duration of the Parking to be included in the report:

1— Min. time (sec.) — minimum Parking duration. Shorter Parking is not included in the report. For example, with a value of 120, Parking of two minutes or longer is shown.

2— Max. time (sec.) — maximum Parking duration. Parking longer than the specified value is not included in the report. A value of 0 means the maximum duration is not limited.

![Parking Report](images/drex_otchyet_po_parkovkam_screen.png)

These parameters help you exclude Parking that is too short or too long and keep only the intervals needed for analysis.

### What the report shows

-   Vehicle number — name, registration, or fleet number of the vehicle
    
-   Start — date and time the Parking began
    
-   Stop — date and time the Parking ended
    
-   Duration — total Parking duration
    
-   Place — address or description of the place where the vehicle was
    
-   Lat — geographic latitude of the Parking location
    
-   Lon — geographic longitude of the Parking location
    
-   Geofence — the Geofence where the Parking was recorded
    

![](images/drex_otchyet_po_parkovkam_custom_2.png)

The “Total” row shows the total duration of all Parking of the corresponding vehicle over the specified interval.

![](images/drex_otchyet_po_parkovkam_custom_3.png)
