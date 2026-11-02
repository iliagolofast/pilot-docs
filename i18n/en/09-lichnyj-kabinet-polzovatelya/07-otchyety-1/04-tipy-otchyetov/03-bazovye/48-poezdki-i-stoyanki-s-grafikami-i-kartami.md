---
title: "Trips and Parking with Charts and Maps"
---

The “Trips and Parking with Charts and Maps” report (Trips and Parkings (charts & maps)) contains summary and detailed information about an Object’s movement and Parking over the selected period.

It helps you find out the number and duration of Trips and Parking, the places where movement started and ended, Mileage, and maximum and average speed. The chart shows changes in speed and Mileage, and the Map shows the route and Parking locations.

# ![](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_custom.png)

### Report summary

The **Report Summary** section shows the overall indicators of the Object’s operation for the selected period:

• Object — name, registration, or fleet number of the vehicle

• Start time — date and time the first recorded movement began

• Start location — address where the first movement began

• Departure time — date and time the last recorded movement ended

• End location — address where the last movement ended

• Trips — total number of Trips

• Movement duration — total time the Object was moving

• Parking — number of recorded Parking stops

• Parking duration — total duration of Parking counted between Trips

• Mileage — total distance traveled by the Object

• Duration — additional total indicator of the duration of recorded Events

• Maximum speed — the highest speed recorded over the selected period

• Average speed — the Object’s average speed

The “Total” row shows the total values for the number of Trips and Parking stops, movement duration, Parking duration, and Mileage.

![](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_custom_2.png)

### Trip details

The **Trips details** section contains a separate row for each Trip:

• Start time — date and time the Trip started

• Start location — address where the movement began

• Departure time — date and time the Trip ended

• End location — address where the movement ended

• Duration — Trip duration

• Parking duration — duration of the Parking associated with the Trip

• Engine hours — engine operating time during the Trip

• Mileage — distance traveled during the Trip

• Maximum speed — maximum speed recorded during the Trip

• Average speed — average travel speed during the Trip

The Trip start and end addresses are shown as links that take you to the corresponding location.

### Parking details

The **Parkings details** section contains information about recorded Parking:

• Start time — date and time the Parking began

• Departure time — date and time the Parking ended

• Duration — total Parking duration

• Location — address where the Object was located

![](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_custom_3.png)

### Chart

Below the tables there is a chart of speed and Mileage changes over time.

• Horizontal axis — time within the selected reporting period

• Left vertical axis — vehicle speed in km/h

• Right vertical axis — accumulated Mileage value in kilometers

• Speed / “Speed” — change in the Object’s speed over time

• Mileage / “Mileage” — change in accumulated Mileage

Sections where the speed is zero correspond to periods with no movement. A rising Mileage line shows an increase in the distance traveled.

When you hover over a point on the chart, a tooltip appears with the date, time, and recorded speed value.

![](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_custom_4.png)

### Map and Parking

To add a Map to the report:

1\. In the “Map Type” field, select the base map on which the route will be shown. For example, OSM or Google Sat

![](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_custom_5.png)

2\. Check the “Show maps” box

A static Map with the route for the corresponding period is added to the report. It may show the start and end points of the route.

![Trips and Parking with Charts and Maps](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_screen.png)

3\. To mark Parking locations, also check the “Show parking” box.

![Trips and Parking with Charts and Maps](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_screen_2.png)

The “Show parking” option becomes available after Show maps is enabled.

If Parking display is enabled, Parking locations are marked with the **![](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_custom_6.png)** icons.

### Odometer readings

To include odometer readings, check the “Show odometer” box before generating the report.

![Trips and Parking with Charts and Maps](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_screen_3.png)

Additional columns with the odometer readings at the start and end of the Trip appear in the table part.

![Trips and Parking with Charts and Maps](images/drex_poezdki_i_stoyanki_s_grafikami_i_kartami_screen_4.png)
