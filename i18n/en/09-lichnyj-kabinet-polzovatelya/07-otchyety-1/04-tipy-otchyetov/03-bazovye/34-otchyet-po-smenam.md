---
title: "Shifts Report"
---

The Shifts Report is designed to monitor vehicle operation against a shift schedule in the [“Time Control”](../../../moduli-1/kontrol-vremeni.html) Module. Use it to compare the actual departure and return times of vehicles with the set shift boundaries, identify late arrivals, and view movement and Parking intervals.

One shift per day is counted for each vehicle. The day boundary is determined by the time zone specified in the Object settings.

![](images/drex_otchyet_po_smenam_custom.png)

### How a shift is determined

-   The start of a shift is when the vehicle leaves the specified Geofence
    
-   The end of a shift is when the vehicle returns to that Geofence
    
-   Allowed start and end times are set for the shift
    
-   If the vehicle left later than the set time, the system may record a “Late departure” Event
    
-   If the vehicle returned later than the set time, the system may record a “Late return” Event
    

The report shows, in sequence, the vehicle’s movement and Parking intervals during the shift

### What the report shows

-   Vehicle — name, registration, or fleet number of the vehicle
    
-   Departure/Return — shift start or end Event: leaving the specified Geofence or returning to it
    
-   Working time violation — detected deviation from the set schedule, for example, late departure or late return
    
-   Status — state of the vehicle in the corresponding interval, for example Movement or Parking
    
-   Date — the date the shift belongs to
    
-   Start time — actual start time of the displayed movement or Parking interval
    
-   End time — actual end time of the interval
    
-   Shift start — set shift start time
    
-   Shift end — set shift end time
    
-   Duration — duration of the corresponding interval.
    
-   Distance — distance traveled by the vehicle during the interval. For Parking, a zero value is usually shown.
    
-   Start place — address or description of the Object’s location at the start of the interval.
    
-   End place — address or description of the Object’s location at the end of the interval.
    

![](images/drex_otchyet_po_smenam_custom_2.png)

For the start and end of a shift to be determined correctly, first configure the working Geofence and the vehicle’s schedule:

1\. In the Geofence settings, assign the required Object and check the “Working” box for it. Leaving this Geofence is treated as the start of a shift, and returning to it as the end of the shift.

![Shifts Report](images/drex_otchyet_po_smenam_screen.png)

2\. In the Object card, open the [“Working time”](../../../moduli-1/kontrol-vremeni.html#Рабочее_время_объекта) tab, select the working days, and set the schedule for weekdays and days off.

![](images/drex_otchyet_po_smenam_custom_3.png)

3\. Check the Object’s time zone: it determines the day boundaries and is used to match actual Events against the set schedule

4\. Check the minimum parking time in the Object settings. This parameter determines how long a stationary Object must remain still before it is counted in the report as Parking.

![Shifts Report](images/drex_otchyet_po_smenam_screen_2.png)
