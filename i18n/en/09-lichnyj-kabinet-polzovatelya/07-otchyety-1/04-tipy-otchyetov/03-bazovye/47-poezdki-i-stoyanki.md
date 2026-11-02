---
title: "Trips and Parking"
---

The “Trips and Parking” report contains information about the movement and Parking periods of the selected monitored Objects. Use it to determine when and where a vehicle started and finished moving, how long it was on the road or parked, how far it traveled, and how fast it moved.

Events are shown in chronological order. Each row corresponds to a separate Trip or Parking. The top of the report shows the monitored Object and the analyzed period.

![](images/drex_poezdki_i_stoyanki_custom.png)

### What the report shows

• Status — state of the Object: “Movement” or “Parking”; Parking is also assigned a sequence number

• Begin — date and time the movement or Parking began

• End — date and time the movement or Parking ended

• Duration — duration of the corresponding Trip or Parking

• Distance, km — distance traveled by the Object during the Trip; no value is shown for Parking

• Start — address where the movement began or the Parking location

• Stop — address where the movement ended; for Parking the value may not be shown

• Coordinates — geographic coordinates of the start and end of the Trip, or the coordinates of the Parking location

The addresses in the “Start” and “Stop” columns are shown as links that take you to the corresponding location.

![](images/drex_poezdki_i_stoyanki_custom_2.png)

### Summary indicators

The bottom of the report shows summary indicators, first for the current data block, for example for one Object for a day, and then for the entire selected reporting period.

• Total mileage — total distance traveled by the Object within the current report block

• Track Time — total Track duration, which includes moving time and short Parking recorded within the Track

• Moving time — total time the Object was moving

• Track Parking Time — total duration of Parking included in the Track; together with moving time it makes up the Track Time value

• Parking time — total duration of all Parking of the Object, including Parking before the first Trip, between Trips, and after the last Trip within the reporting period

• Average speed — the Object’s average speed while moving

• Maximum speed — the highest speed recorded while moving

### Totals for the entire reporting period

Below the divider line, similar indicators calculated across all report blocks are shown:

• Total mileage for the period — total distance traveled by the Object over the entire selected period

• Tracks Time for the period — total duration of all Tracks in the period, including movement and Parking within Tracks

• Moving time for the period — total time the Object was moving over the entire selected period

• Track Parking Time for the period — total duration of Parking included in Tracks over the selected period

• Parking time for the period — total time the Object was parked within the selected period

• Average speed for the period — the Object’s average speed over the entire selected period

• Maximum speed for the period — the highest speed recorded over the entire selected period

![](images/drex_poezdki_i_stoyanki_custom_3.png)

### How Parking time is counted

The Report covers the entire selected time interval, including the periods before the first and after the last Trip:

• If the vehicle was not moving at the start of the reporting period, the system adds Parking from the start of the period to the first recorded movement

• If the Object remained stationary after the last movement, Parking is shown until the end of the reporting period

• If the end of the selected period is in the future, the last Parking is shown up to the current moment

In this way, the report accounts not only for Trips but also for the gaps between them, so that the sequence of Events within the analyzed period remains continuous.

### Trips and Parking display filter

At the top of the generated report there are the “Parking” and “Trips” options.

![Trips and Parking](images/drex_poezdki_i_stoyanki_screen.png)

They let you change which rows are shown without selecting the reporting period again:

• “Parking” and “Trips” enabled — all Events are shown

• only “Trips” enabled — only movement periods are shown

![](images/drex_poezdki_i_stoyanki_custom_4.png)

• only “Parking” enabled — only periods when the Object was parked are shown

![](images/drex_poezdki_i_stoyanki_custom_5.png)

To show or hide an Event type, check or uncheck the corresponding box.

### Report parameters

Before generating the report, you can configure additional parameters:

![Trips and Parking](images/drex_poezdki_i_stoyanki_screen_2.png)

• Drivers — adds a “Driver” column to the table with information about the Driver assigned to the Object during the Event

![](images/drex_poezdki_i_stoyanki_custom_6.png)

• Vehicle type — adds a “Vehicle type” column to the table with the vehicle category

![](images/drex_poezdki_i_stoyanki_custom_7.png)

• Chart — adds a graphical representation of movement and Parking periods to the report

![](images/drex_poezdki_i_stoyanki_custom_8.png)

The chart appears above the table part and shows the sequence of Events on a timeline:

-   “Parking” — periods when the Object was not moving
    
-   “Movement” — periods of the Object’s Trips
    

The chart lets you visually compare the duration of Trips and Parking and determine when the state changes. For a detailed view, you can zoom in on a selected part of the timeline. The Reset zoom button restores the original chart scale.
