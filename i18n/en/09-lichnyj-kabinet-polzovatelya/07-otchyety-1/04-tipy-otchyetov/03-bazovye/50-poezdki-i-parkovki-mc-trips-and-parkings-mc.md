---
title: "Trips and Parking MC (Trips and Parkings MC)"
---

The “Trips and Parking MC” report (Trips and Parkings MC) contains information about the movement and Parking periods of the selected monitored Object. It lets you reconstruct the sequence of Events, determine the time and duration of Trips and Parking and their start and end addresses, and calculate Mileage and other operating indicators.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom.png)

### What the report shows

• Status — state of the Object: “Movement” or “Parking”

• Begin — date and time the movement or Parking began

• End — date and time the movement or Parking ended

• Dur. — duration of the corresponding Event

• Distance, km — distance traveled by the Object while moving; no value is shown for Parking

• Start — address where the Trip began or the Parking location

• Stop — address where the Trip ended; for Parking the value may not be shown

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_2.png)

### Summary indicators

Below the table, summary indicators are shown, first for the current report block, then for the entire selected period:

• Total mileage — total distance traveled by the Object

• Track Time — total duration of the generated Tracks

• Moving time — total time the Object was moving

• Track Parking Time — duration of Parking counted within Tracks

• Parking time — total duration of all Parking within the reporting period

• Average speed — the Object’s average speed

• Max. speed — the highest recorded speed

The “for the period” block shows similar indicators calculated from all the data included in the report.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_3.png)

### Trips and Parking filter

At the top of the generated report there are the “Parking” and “Trips” options:

• “Parking” and “Trips” enabled — all Events are shown

![Trips and Parking MC (Trips and Parkings MC)](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__screen.png)

• only “Trips” enabled — only movement periods are shown

• only “Parking” enabled — only Parking periods are shown

The checkboxes let you change which rows are shown without regenerating the report.

### Parameters before generating the report

Before generating the report, the following additional parameters are available:

• Show debug

• Auto reset [Beta]

• Show max/avg speed

• Reset milage

• Update milage

• Drivers

• Vehicle type

• Fuel

• Chart

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_4.png)

### Show debug

The “Show debug” option is intended for diagnosing the calculation of Trips and Mileage.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_5.png)

After you enable it, a “Debug menu” panel appears at the top of the generated report.

![Trips and Parking MC (Trips and Parkings MC)](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__screen_2.png)

The panel contains additional parameters:

• Type

• Mileage

• Show TS

• Show Lat/Lon

These parameters let you view the internal data from which the Trips and Parking were generated.

![Trips and Parking MC (Trips and Parkings MC)](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__screen_3.png)

**1 — Type**

If you enable the “Type” option in the Debug menu, a “Type” column is added to the table.

It shows the internal type or identifier of the Event used by the system to generate the row. For example:

• renderStart — Event generated at the start of the reporting period

• render\_LP\_tracks — Parking generated between movement segments

• one\_\[…\], m\_start\_\[…\], m\_last\_\[…\] — internal identifiers or methods of generating movement segments

These values are intended primarily for diagnostics. They help determine from which Event or algorithm stage a Trip or Parking was generated.

**2 — Mileage**

If you enable the “Mileage” option in the Debug menu, columns with detailed odometer data are added to the table:

• Odo type — source or type of odometer data, for example CAN

• Start — odometer reading at the start of the Trip

• Stop — odometer reading at the end of the Trip

These columns let you check which readings the value in the “Distance, km” column is calculated from. Odometer readings may be missing for Parking.

**3 — Show TS**

If you enable the “Show TS” option, the values in the “Begin” and “End” columns are shown as timestamps — numeric timestamp values.

The system uses a timestamp to store the exact time of an Event. This mode is intended for technical data checks. When the option is disabled, the time is shown in the usual date and time format.

**4 — Show Lat/Lon**

If you enable the “Show Lat/Lon” option, geographic coordinates are shown in the “Start” and “Stop” columns instead of addresses:

• lat — latitude

• lon — longitude

For a Trip, the coordinates of the start and end of movement are shown. For Parking, the coordinates of the Object’s location are shown.

### Auto reset [Beta]

The “Auto reset [Beta]” option is used when calculating Mileage from odometer readings. The system automatically tries to detect resets or breaks in the sequence of readings, for example when a new odometer value is lower than the previous one, and takes them into account when calculating the distance.

### Reset milage

The “Reset milage” option enables processing of Events related to resetting the Mileage readings. It is used to exclude an incorrect difference between the readings before and after a detected reset.

### Update milage

The “Update milage” option enables the use of updated Mileage readings when generating the report. It affects the odometer values used and the calculated distance.

The changes can be seen in the following data:

• initial and final odometer readings

• distance for individual Trips

• total mileage

### Show max/avg speed

If you enable the “Show max/avg speed” option, additional columns appear on the right of the table:

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_6.png)

• Max. speed — the highest speed recorded during the Trip

• Avg. speed — the Object’s average speed during the Trip

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_7.png)

### Drivers

If you enable the “Drivers” option, a “Driver” column is added to the table.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_8.png)

It shows the Driver assigned to the Object during the corresponding Trip or Parking. If no Driver was assigned or no data was received, the cell may stay empty.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_9.png)

### Vehicle type

If you enable the “Vehicle type” option, a column of the same name is added to the table.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_10.png)

 It shows the category or type of the vehicle specified in the Object settings.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_11.png)

### Fuel

If you enable the “Fuel” option, additional indicators are shown in the summary part of the report:

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_12.png)

• Total consumption, l/100 km — calculated fuel consumption

• Balance at start, l — amount of fuel at the start of the reporting period

• Balance at end, l — amount of fuel at the end of the reporting period

• Total consumption for the period — total calculated fuel consumption over the entire selected period

The availability and accuracy of these values depend on the presence of a fuel level sensor and its settings.

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_13.png)

### Chart

If you enable the “Chart” option, a timeline showing the sequence of Events appears above the table:

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_14.png)

• “Parking” — periods when the Object was not moving

• “Movement” — periods of the Object’s movement

• horizontal axis — date and time within the reporting period

![](images/drex_poezdki_i_parkovki_mc__trips_and_parkings_mc__custom_15.png)

The chart helps you visually compare the duration of Trips and Parking, determine when each movement started, and detect long periods without movement.
