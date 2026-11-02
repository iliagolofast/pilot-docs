---
title: "Fuel Consumption by CAN"
---

The “Fuel Consumption by CAN” report shows fuel consumption based on CAN data for the selected period. Use it to compare the amount of fuel consumed with the Object's mileage and to calculate the average consumption per 100 km.

![](images/drex_raskhod_topliva_po_can_custom.png)

### Sensor configuration requirements

For data to appear in the report, a CAN fuel consumption sensor must be configured on the Object.

In the sensor settings, specify:

• Purpose — Fuel consumption

• Type — Discrete integral

• Save history — the checkbox must be enabled

The sensor must transmit the cumulative fuel consumption value. To calculate the report, the system takes the initial and final values for the day and calculates consumption as the difference between them.

If the sensor is configured with a different purpose or type, or if history saving is disabled, the data may not appear in the report.

![](images/drex_raskhod_topliva_po_can_custom_2.png)

### What the report shows

• Object — the name of the monitored object for which the report was generated

• Date — the date for which the data is shown

• Consumption — the amount of fuel consumed on the specified date

• Distance — the Object's mileage on the specified date

• Fuel consumption — the average fuel consumption per 100 km

Fuel consumption is calculated using the formula: (Consumption × 100 km) / Distance

![](images/drex_raskhod_topliva_po_can_custom_3.png)
