---
title: "Agricultural Report"
---

The Agricultural Report contains information about the field work of the selected monitored Objects and their attached implements over the specified period. Use it to determine the duration and distance of completed work, calculate the area treated, and analyze fuel or working fluid consumption.

Data is grouped by Object, trailer, and zone. For each zone, separate work periods are displayed, and the “Zone total” row shows the summary figures.

### What the report shows

• Start — date and time the work in the zone began

• Stop — date and time the work ended

• Duration — length of the corresponding work period

• Distance — distance traveled by the Object during the work

• Width — working width of the trailer or implement per pass

• Area treated — area calculated from the distance traveled and the working width of the implement

• Fuel consumption — volume of fuel used during the corresponding period

• Fuel consumption/ha — fuel consumption per hectare of area treated

• Start location — address where the work began

• End location — address where the work ended

The “Zone total” row shows the summary figures for all work periods in the corresponding zone:

• total work duration

• total distance traveled

• total area treated

• total consumption of fuel or working fluid

![](images/drex_selskokhozyajstvennyj_otchyet_custom.png)

### Selecting a trailer

Before generating the report, you can select the trailer the Object worked with.

![](images/drex_selskokhozyajstvennyj_otchyet_custom_2.png)

After you click “Generate report”, the “Report parameters” window opens, showing:

• Trailer — the selected attached implement

• Width — the working width of the implement used to calculate the area treated

![](images/drex_selskokhozyajstvennyj_otchyet_custom_3.png)

If needed, you can change the width before generating the report. After you confirm, the system recalculates the area treated using the specified value.

### Report settings

By default, the report shows fuel consumption figures.

Use the “Report settings” button to choose the consumption type:

• Fuel consumption (Fuel Consumption) — shows the volume of fuel used and consumption per hectare

• Fluid consumption (Fluid Consumption) — shows the volume of working fluid used and consumption per hectare

![](images/drex_selskokhozyajstvennyj_otchyet_custom_4.png)

### Preparing the report

The Agricultural Report is available when two Modules are connected and configured:

• [Geofences](../geozony-1/index.html) — used to create and define the boundaries of the fields to be treated

• [Trailers](../../../moduli-1/pritsepy.html) — used to register agricultural equipment, link it to monitored Objects, and set the working width

The report is generated when the vehicle is inside a field Geofence and a trailer with the “Agro” option enabled is attached to it. If the Modules are not connected or are configured incorrectly, the area treated is not shown in the report.
