---
title: "Trips and Parking with Axle Load"
---

The “Trips and Parking with Axle Load” report contains information about vehicle movement and Parking, supplemented with axle load indicators. It is intended primarily for trucks and lets you compare the route, Mileage, and Trip duration with the minimum, maximum, and average load values.

Load data helps you monitor vehicle operation and identify possible excesses of permissible values. The permissible load depends on the type and design of the vehicle, the number of axles, and the applicable regulatory requirements.

![](images/drex_poezdki_i_parkovka_s_nagruzkoj_na_os_custom.png)

### What the report shows

• Status — state of the Object: “Movement” or “Parking”

• Begin — date and time the movement or Parking began

• End — date and time the movement or Parking ended

• Dur. — duration of the corresponding Trip or Parking

• Distance (km) — distance traveled by the Object during the Trip; no value is shown for Parking

• Start — address where the movement began or the Parking location

• Stop — address where the movement ended; for Parking the value may be missing

• Coordinates — coordinates of the start and end points of the Trip or the coordinates of the Parking location

• Average weight — average load value recorded during the corresponding Event

• Weight (min.) — minimum recorded load value during the Trip or Parking

• Weight (max.) — maximum recorded load value during the Trip or Parking

• Trip type — Trip category determined by the system or the Object settings

The addresses in the “Start” and “Stop” columns are shown as links that take you to the corresponding locations.

![](images/drex_poezdki_i_parkovka_s_nagruzkoj_na_os_custom_2.png)

### Summary indicators

Below the table, summary indicators for the selected Object and period are shown:

• Total mileage — total distance traveled by the vehicle

• Moving time — total duration of all movement periods

• Parking time — total duration of all Parking

• Average speed — the Object’s average travel speed

• Max. speed — the highest speed recorded over the selected period

• Fuel consumption (by norm) — calculated fuel consumption based on the set norm

• Fuel consumption (by sensor) — fuel consumption calculated from Sensor readings

• Average l/100 km (by norm) — normative average fuel consumption per 100 km

• Average l/100 km (by sensor) — actual average fuel consumption per 100 km based on Sensor data

### Trips and Parking filter

At the top of the report there are the “Parking” and “Trips” options:

• “Parking” and “Trips” enabled — the full sequence of Events is shown

![Trips and Parking with Axle Load](images/drex_poezdki_i_parkovka_s_nagruzkoj_na_os_screen.png)

• only “Trips” enabled — only movement periods are shown

![](images/drex_poezdki_i_parkovka_s_nagruzkoj_na_os_custom_3.png)

• only “Parking” enabled — only periods when the Object was parked are shown

![](images/drex_poezdki_i_parkovka_s_nagruzkoj_na_os_custom_4.png)

To show or hide a particular Event type, check or uncheck the corresponding box.

### Load data

To show average, minimum, and maximum weight, compatible hardware that transmits axle load information must be installed and configured on the Object. If no data is received or the corresponding parameters are not configured, a dash or a missing value is shown in the weight columns.
