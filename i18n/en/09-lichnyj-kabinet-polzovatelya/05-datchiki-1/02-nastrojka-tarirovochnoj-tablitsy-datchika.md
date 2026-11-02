---
title: "Setting up the sensor calibration table"
---

PILOT has two kinds of calibration tables: a calibration table with a chart and a calibration table with text states. You can edit a calibration table only after the new sensor is saved.

A calibration table is a lookup reference that converts technical sensor readings into meaningful values.

Let's look at an example of using a calibration table for a fuel level sensor.

Suppose we have a fuel tank of non-standard shape, so its volume cannot be expressed as a simple function of the fuel level.

We install a fuel level sensor in it that works on the rheostat principle. It does not measure the fuel volume directly but changes its electrical resistance depending on the liquid level. As a result, the sensor outputs data in ohms rather than liters.  The sensor resistance range is 10 to 180 ohms. To determine the fuel level in the tank correctly, you need to perform calibration and create a correspondence table.

Tank calibration:

1\. Empty the tank completely and record the minimum sensor resistance value

2\. Then pour in fuel in portions, for example 10 liters each, and record the resistance readings

3\. Record the sensor readings after each pour

4\. Repeat the process until the tank is full

5\. Create the calibration table – the correspondence between the fuel level in liters and the sensor resistance in ohms

Example of a calibration table for a 100-liter tank

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Fuel level, l</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Sensor resistance, ohm</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 180</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 160</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 140</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 120</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 40</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 100</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 50</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 80</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 60</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 60</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 70</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 50</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 80</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 40</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 90</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 100</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td></tr></tbody></table>

When the sensor transmits, for example, 100 ohms, the system uses the calibration table to determine that the tank contains about 40 liters of fuel. If the sensor transmits 110 ohms, the system calculates that the fuel level is about 35 liters.

## Calibration table with a chart 

A type of calibration table in which sensor readings are converted to real values using a dependency chart. The X axis shows the sensor readings, and the Y axis shows the real values of the measured quantity. A chart is built between the entered points and determines the real value for a sensor reading. This type of calibration table is often used for fuel level, weight, temperature, and humidity sensors.

**![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom.png)**

### How to create a table

You can configure the table in the sensor parameters window or upload a ready-made one from a file. A configured table can be saved to a file and used for other similar sensors.

![Setting up the sensor calibration table](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_screen.png)

To open the calibration table, click “Edit”.

<table><tbody><tr><td><div><h3>Edit table</h3></div><div><img alt="1. " src="images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_control_1.png" data-full-src="drex_nastrojka_tarirovochnoj_tablitsy_datchika_control_1.png" data-full-width="188" data-full-height="33"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_2.png)

How to add values to the table:

-   Click “Add”  ![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_3.png)
    

2\. Enter the real amount of fuel and the value the sensor shows

3\. Click “Save”

4\. Repeat the steps for all the required readings

Example of a filled-in table

**![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom.png)**

## Calibration table with text states

This type of calibration table is used for multi-position sensors and converts the sensor's numeric values into statuses that are easy for the user to understand.

![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_4.png)

Let's look at an example of using this type of table.

For example, we have a multi-position GPS antenna sensor that shows the signal level. A GPS receiver measures signal strength in dBm, where values are usually in the range from -160 dBm to -120 dBm.

In the table, we convert the technical values sent by the sensor into understandable statuses: “No signal”, “Weak signal”, “Medium signal”, “Good signal”.

When the sensor sends a value, for example -135 dBm,  the system finds the match in the table and converts it into a text status — “Weak signal”. The text status is shown in the object's [tooltip](../obekty-1/dopolnitelnaya-informatsiya-ob-obekte.html) and in [reports](../otchyety-1/index.html).

Such a calibration table can be used for different parameters,  for example, you can set value ranges for temperature measurement: “Cold” — 0–10°C, “Warm” — 10–25°C, “Hot” — 25°C and above;  or display the battery charge not as a percentage but as the statuses “Low”, “Medium”, “Full”.

How to add a calibration table for multi-position sensors:

-   Open the sensor parameters window
    
-   In the “Calibration table” section, click “Edit”
    
-   In the calibration table window, click “Add”![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_3.png)
    
-   Fill in the columns with the minimum and maximum sensor values,
    
-   Set the text statuses in the “Semantics” column
    
-   Select an icon and a Background color for the status.  The status color is used on charts and [in history](../istoriya/kak-rabotat-s-istoriej.html#трек_по_датчику) when building the track.
    
-   Click “Save”
