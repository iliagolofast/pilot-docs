---
title: "Temperature Report"
---

The “Temperature Report” shows how temperature sensor readings changed over the selected period. A separate chart is built for each day and each monitored object.

The horizontal axis shows time, and the vertical axes show temperature and humidity. Sensor readings are shown as lines of different colors, and the horizontal gray lines show the boundaries of the permitted temperature range.

![Temperature Report](images/drex_otchyet_po_temperature_screen.png)

When you hover over the chart, a pop-up window appears with the date, time and sensor readings at the selected moment.

![](images/drex_otchyet_po_temperature_custom.png)

If you open the map panel and select a point on the chart, the map shows the Object's location at that moment. This way you can trace the relationship between temperature changes and the route.

![](images/drex_otchyet_po_temperature_custom_2.png)

## How to configure a temperature sensor

Configuring a temperature sensor helps you get accurate data on the condition of equipment or vehicles. Correct sensor configuration and specifying operating ranges helps automatically filter out invalid values so that you see only reliable information.

A temperature sensor is added in the same way as any other sensor. For more information on adding sensors, see this [article](../../../datchiki-1/dobavlenie-datchika.html).

![](images/drex_otchyet_po_temperature_custom_3.png)

Here we go through the parameters you need to specify for a temperature sensor so that reports are built correctly.

To configure a temperature sensor:

1\. [Add](../../../datchiki-1/dobavlenie-datchika.html#как_добавить_датчик) a sensor

2\. Specify the name and description

3\. In the drop-down list, select the [sensor type](../../../datchiki-1/tipy-datchikov/index.html)

4\. Specify the data field. Select which parameter to take the data from (for example, engine\_temp).  It is important to select exactly the field in which the system receives temperature values.

5\. Set the minimum and maximum threshold

Configure the sensor's operating range — the permitted value limits within which the sensor operates normally. If the readings go outside this range, the system records a deviation.

On the chart, this range is highlighted with gray lines, so you can immediately see when the temperature was within the norm.

6\. Configure the minimum and maximum value filter

Set the minimum and maximum values so that the system ignores erroneous data (for example, if the sensor returned an error or an invalid value). Such values are automatically excluded from reports.
