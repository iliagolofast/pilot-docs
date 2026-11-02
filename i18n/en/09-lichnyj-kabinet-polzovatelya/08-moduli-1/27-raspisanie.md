---
title: "Schedule"
---

The “Schedule” module is used together with the [“Trips”](rejsy-2/index.html) module. A schedule specifies the time at which a vehicle must pass the checkpoints of a trip or start the next pass along the route.

![](images/drex_raspisanie_custom.png)

Schedule data is used in the [round trips report](../otchyety-1/tipy-otchyetov/avtobusnye-linii/otchyet-po-krugorejsam.html). The report lets you compare the planned time with the vehicle's actual travel time and determine the deviation from the schedule.

The “Trips” module defines the vehicle's route, and the “Schedule” module defines the planned travel time along this route.

## How to create a schedule

To create a schedule:

1\. Open the “Schedule” tab

2\. Click the “Add schedule” button ![](images/drex_raspisanie_custom_2.png)

![Schedule](images/drex_raspisanie_screen.png)

3\. Fill in the schedule parameters:

![](images/drex_raspisanie_custom_3.png)

-   Name — enter the schedule name
    
-   Bus line — select the trip the schedule is created for. The [trip must be created](rejsy-2/kak-sozdat-rejs.html) beforehand in the “Trips” module. After you select the trip, the schedule is linked to the corresponding route.
    

![](images/drex_raspisanie_custom_4.png)

-   Time — specify the planned time of passing the stops of the selected trip. Enter the time and click the button ![](images/drex_raspisanie_custom_5.png). Each value is added separately and appears in the list at the bottom of the form.
    

For example, for a trip with three consecutive stops you can add:

— 07:15 — the time of passing the first stop

— 07:30 — the second stop

— 07:45 — the third stop

![](images/drex_raspisanie_custom_6.png)

-   Link to lap start — check the box if the added values should mark the start times of new laps
    

![](images/drex_raspisanie_custom_7.png)

For example, if you add 07:12, 08:12, and 09:12, the vehicle must:

— start the first lap at 07:12

— start the second lap at 08:12

— start the third lap at 09:12

A new lap means the vehicle starting another pass along the selected route from its starting point.

The added values are shown at the bottom of the form in the “Time” section. To delete a value, click the trash icon next to it.

![Schedule](images/drex_raspisanie_screen_2.png)

4\. Click “Save”
