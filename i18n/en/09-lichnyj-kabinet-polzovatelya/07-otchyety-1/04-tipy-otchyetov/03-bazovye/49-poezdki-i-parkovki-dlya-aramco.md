---
title: "Trips and Parking for Aramco"
---

The “Trips and Parking for Aramco” report contains information about the movement and Parking periods of vehicles over the selected period. The Report lets you reconstruct the sequence of Trips and Parking, and determine their time and duration, start and end addresses, distance traveled, and summary operating indicators.

![](images/drex_poezdki_i_parkovki_dlya_aramco_custom.png)

### What the report shows

• Status — state of the Object: “Movement” or “Parking”, as well as the Event sequence number

• Begin — date and time the movement or Parking began

• End — date and time the movement or Parking ended

• Duration — duration of the corresponding Trip or Parking

• Distance (km) — distance traveled during the Trip; no value is shown for Parking

• Start — address where the Trip began or the Parking location

• Stop — address where the Trip ended; for Parking the value may not be shown

• Coordinates — coordinates of the start and end of the Trip, or the coordinates of the Parking location

For a Trip, the “Coordinates” column shows two pairs of coordinates: the first corresponds to the start of movement, the second to its end. For Parking, the coordinates of the Object’s location are shown.

The addresses in the “Start” and “Stop” columns are shown as links that take you to the corresponding location.

![](images/drex_poezdki_i_parkovki_dlya_aramco_custom_2.png)

### Trips and Parking filter

At the top of the generated report there are the “Parking” and “Trips” options. Use them to change which data is shown:

![Trips and Parking for Aramco](images/drex_poezdki_i_parkovki_dlya_aramco_screen.png)

• “Parking” and “Trips” enabled — the full sequence of Events is shown

• only “Trips” enabled — only movement periods are shown

![](images/drex_poezdki_i_parkovki_dlya_aramco_custom_3.png)

• only “Parking” enabled — only Parking periods are shown

![](images/drex_poezdki_i_parkovki_dlya_aramco_custom_4.png)

To show or hide an Event type, check or uncheck the corresponding box.

### Summary indicators

Below the table, summary indicators are shown, first for the current Object or report block, and then for the entire selected period:

• Trips — total number of Trips

• Movements — number of recorded movement periods

• Parking — number of recorded Parking stops

• Total mileage — total distance traveled by the vehicle

• Moving time — total duration of all movement periods

• Parking duration — total time the Object was parked

• Average speed — the vehicle’s average speed over the selected period

• Maximum speed — the highest speed recorded over the selected period

• Fuel consumption (by norm) — calculated fuel consumption based on the set norm

• Fuel consumption (by sensor) — fuel consumption calculated from Sensor readings

• Average consumption, l/100 km (by norm) — calculated average fuel consumption per 100 km

• Average consumption, l/100 km (by sensor) — average fuel consumption per 100 km calculated from Sensor data

In a separate summary block, the values are repeated with the “for the period” label and are calculated from all the data included in the report.

![](images/drex_poezdki_i_parkovki_dlya_aramco_custom_5.png)

### The “Chart” option

Before generating the report, you can enable the “Chart” option.

![](images/drex_poezdki_i_parkovki_dlya_aramco_custom_6.png)

In this case, a timeline appears above the table part that graphically shows the sequence of movement and Parking.

![](images/drex_poezdki_i_parkovki_dlya_aramco_custom_7.png)

The chart shows:

• horizontal axis — date and time within the reporting period

• “Parking” — periods when the vehicle was not moving

• “Movement” — periods when the vehicle was moving

The chart helps you determine when the Object was moving or parked, compare the duration of Events, and see long periods without movement.
