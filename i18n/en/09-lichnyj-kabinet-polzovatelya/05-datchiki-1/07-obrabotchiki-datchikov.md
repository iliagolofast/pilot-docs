---
title: "Sensor handlers"
---

Handlers are tools that help convert and process raw sensor data into understandable values. Instead of writing complex formulas for every sensor each time, you can create one handler and use it wherever you need it.

Suppose you have a vehicle on-board network voltage sensor that transmits values in millivolts.

![](images/drex_obrabotchiki_datchikov_custom.png)

In the raw points, we find the sensor value: Vsource = 14592

![](images/drex_obrabotchiki_datchikov_custom_2.png)

To see the familiar sensor reading in volts, the value must be divided by 1000.

We can create a handler that we will then use in other sensors where the sensor value needs to be divided by 1000.

## How to create a handler

-   In the sensors window, find the “Handlers” tab
    
-   On the tab, click “Add” ![](images/drex_obrabotchiki_datchikov_custom_3.png)
    

![](images/drex_obrabotchiki_datchikov_custom_4.png)

3\. Enter a name for the handler. This name will be used later in the “Formula” field in the sensor settings window. The field must contain only Latin letters, digits, and signs

4\. In the “Formula” field, write the formula that this handler will use. If the formula refers to the sensor data field that the sensor transmits, use the [%%](primenenie-formul.html#экранирующие_символы) characters around the field name, for example, %fuel\_1% or %value%

5\. Add a description of the handler so you know what it is used for

6\. Click “Save”

## How to set up a calibration table

In a handler you can set up a calibration table that the handler takes into account. This table helps convert technical sensor readings into understandable values.

To set up a calibration table:

-   Click the icon  ![](images/drex_obrabotchiki_datchikov_custom_5.png)
    
-   In the calibration table window for the handler, click “Add” ![](images/drex_obrabotchiki_datchikov_custom_6.png)
    

3\. Enter the real value and the value the sensor shows

![](images/drex_obrabotchiki_datchikov_custom_7.png)

4\. Click “Save”

5\. Repeat the steps for all the required readings

6\. Click “Save” in the calibration table window

![](images/drex_obrabotchiki_datchikov_custom_8.png)

 In the calibration table, select the “Nearest value selection” and “Calibration priority” functions with checkboxes.

-   The “Nearest value selection” function is a method of rounding to the nearest calibration point. When the device receives a value that does not exactly match the recorded points, it needs to calculate the result. If the “Nearest value selection” option is on, the device takes the value from the nearest point of the calibration table. If it is off, it calculates an intermediate value taking the neighboring points into account.
    
-   The “Calibration priority” function determines the order of data processing when calibrating the sensor. Priority is given to calibration data over measurement data, that is, the system always starts by checking the calibration table, using it as the primary reference. The system first checks whether the value is in the calibration table. If an exact value is found, it uses it. Only if there is no exact match does it apply the standard calculation algorithm.
    

![](images/drex_obrabotchiki_datchikov_custom_9.png) ![](images/drex_obrabotchiki_datchikov_custom_10.png)— use these buttons to  load a ready-made calibration table from a file or save it to your computer.

To delete a value in the table, click  ![](images/drex_obrabotchiki_datchikov_custom_11.png).

## How to apply a handler

1\. Open the sensor where you need to apply the handler

2\. In the “Formula” field, write the handler name. First enter the “=” sign, then the name of the handler itself, and in parentheses and %% characters the field transmitted by the sensor. For example, =divide(%fuel\_1%)

3\. Check the handler using the “[Test](primenenie-formul.html#тест_формулы)” button

4\. Click “Save” in the sensor settings window for the handler to be applied to this sensor

## Examples of using handlers

### Example 1. How to convert sensor data with a handler

Let's create a handler:

-   Enter a name for the handler — divide
    

2\. In the “Formula” field, enter %value%/1000. 

value is the value sent by the sensor that needs to be divided by 1000.

3.  Add a description of the handler — “Division by 1000”

4.  Save the handler

![](images/drex_obrabotchiki_datchikov_custom_12.png)

Let's apply the handler:

-   Go to the settings window of the sensor where the handler needs to be applied.
    

2\. In the “Formula” field, enter the “=” sign and the handler name, and in parentheses and %% characters the value of the on-board network sensor field: =divide(%Vsource%)

![](images/drex_obrabotchiki_datchikov_custom_13.png)

3\. Check the handler using the “Test” button

4\. Click “Save” in the sensor settings window

Let's check how the sensor readings are displayed after the handler is applied

In the raw points, the on-board network sensor value is: Vsource = 12626

![](images/drex_obrabotchiki_datchikov_custom_14.png)

After processing with the formula, the object tooltip shows the real sensor value — 12.6 V.

![](images/drex_obrabotchiki_datchikov_custom_15.png)

In this example we showed how to perform a simple operation with a handler. But you can also use more complex [formulas](primenenie-formul.html) for it if necessary.

Once you create a handler, you can apply it to many sensors of the same type without worrying about possible errors in the formulas.

### Example 2. How to get the sum and the average of two fuel level sensors

Suppose we have two fuel level sensors. And we need to see their total level and the average fuel level.

![](images/drex_obrabotchiki_datchikov_custom_16.png)

![](images/drex_obrabotchiki_datchikov_custom_17.png)

<table><tbody><tr><td><span></span></td><td><div>Both sensors must output values in the same units, and each sensor must have its own calibration table configured.</div></td></tr></tbody></table>

Create handlers for each sensor:

Handler for sensor 1

-   Enter a name for the handler —  fuel\_nav\_1
    

2\. In the “Formula” field, enter  %t\_53lls1% —  copy the field name from the card of fuel sensor 1

3.  Save the handler

Handler for sensor 2

-    Name for the handler — fuel\_nav\_2
    

2\. In the “Formula” field, enter  %lls2% —  copy the field name from the card of fuel sensor 2

3.  Save the handler

![](images/drex_obrabotchiki_datchikov_custom_18.png)

Next, create the total fuel sensor:

-   Enter the sensor name and description  — Total fuel sensor
    

![](images/drex_obrabotchiki_datchikov_custom_19.png)

2\. Select the sensor type —  Discrete

3\. In the field, specify the stream of one of the existing sensors (for example, t\_53lls1) — points will arrive through it and the formula will be recalculated

4\. In the formula, enter =fuel\_nav\_1()+fuel\_nav\_2()

5\. Save the card of the total fuel sensor

After that, the total fuel level across the two tanks appears in the raw points and in the object tooltip (if you enabled the display).

Let's create one more sensor for the average fuel level:

-   Enter the sensor name and description  — Average fuel sensor
    
    2\. Select the sensor type —  Discrete
    
    4\. In the field, specify the stream of one of the sensors (for example, t\_53lls1)
    
    5\. In the formula, enter  =(fuel\_nav\_1()+fuel\_nav\_2())/2
    
    6\. Save the card of the average fuel sensor
    

![](images/drex_obrabotchiki_datchikov_custom_20.png)

In the raw points, check the values of the created sensors.

![Sensor handlers](images/drex_obrabotchiki_datchikov_screen.png)

As a result, the object has four sensors: “Fuel sensor 1”, “Fuel sensor 2”, “Total fuel sensor”, and “Average fuel sensor”.

 ![](images/drex_obrabotchiki_datchikov_custom_21.png)

The same logic can be used to process data from temperature sensors.
