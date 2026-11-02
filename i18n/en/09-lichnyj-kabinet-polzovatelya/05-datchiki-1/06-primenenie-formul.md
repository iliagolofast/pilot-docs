---
title: "Using formulas"
---

A conversion formula is a mathematical expression applied to the data received from a sensor.

Why apply a formula:

-   To correct sensor readings, for example, a formula lets you fix inaccuracies in sensor readings
    
-   To bring raw sensor data to real physical quantities. For example, a sensor outputs numbers from 0 to 1000, and the formula converts them into the real liters of fuel in the tank
    
-   To convert units of measurement, for example, kilometers to miles or liters to gallons
    
-   To combine data, for example, a formula can use values from different sensors to produce new indicators
    

In the sensor settings window, the formula is entered in a special field

![Using formulas](images/drex_primenenie_formul_screen.png)

<table><tbody><tr><td><span></span></td><td><div>The formula is applied to the data immediately after it is received from the sensor, before the <a href="dobavlenie-datchika.html#тарировочная_таблица"><span>calibration</span></a> table is used.</div></td></tr></tbody></table>

The formula must start with one of the following characters:

• arithmetic signs: +, -, \*, /

• the equals sign: =

In a formula you can use:

• mathematical operations: addition (+), subtraction (-), multiplication (\*), division (/)

• parentheses ( ) to specify the order of operations

## Simple formulas

Used for simple operations such as multiplication, division, addition, and subtraction. The original sensor value is substituted into the formula automatically.

Let's look at an example of applying a formula.

Suppose we have a battery charge sensor that transmits the value in millivolts. In the raw points, we find the sensor value: Vsource = 9246.

![](images/drex_primenenie_formul_custom.png)

To display the familiar sensor value in volts, the raw value must be divided by 1000. In the sensor settings window, in the “Formula” field, we write the formula: /1000.

The final sensor value is calculated by the formula Vbattery/1000:

-   The system takes the current sensor value in the raw points
    

2\. Divides this value by 1000

3\. The result becomes the new sensor value

![](images/drex_primenenie_formul_custom_2.png)

The final value of the battery sensor in volts is shown in the object tooltip — 9.25 V.

![](images/drex_primenenie_formul_custom_3.png)

### Examples of simple formulas

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Formula</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Result</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multiply the original value by 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/1000</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Divide the original value by 1000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; /25.5+7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Divide the value by 25.5 and add 7 to it</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; /100+(7*3-2)*4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; A more complex example using parentheses</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>In formulas, decimal fractions are written with a period, not a comma. For example: 25.4, 1.75</div></td></tr></tbody></table>

## Variables in a formula

Data from sensor fields and standard variables can be substituted into a formula.

All values to be substituted into the formula are enclosed in %% characters

Standard variables used in a formula:

%S% — speed

%A% — altitude

%D% — direction

%P% or %satsinview% — number of satellites

%ts% — time of the current packet

%ts1% — time of the previous packet

Time is used in Unix timestamp format — the number of seconds elapsed since January 1, 1970.

%value% — value of the current sensor

All other values are taken directly from the names in the raw points data packet sent by the sensor.

![](images/drex_primenenie_formul_custom_4.png)

For example:

%Vbattarey% — battery charge sensor value

%GSM% — mobile signal level value

%HDOP% — horizontal dilution of precision

Enclose the required parameter name in %%, and during the formula calculation it is replaced with the corresponding value from the data packet.

### Examples of formulas with variable substitution

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Formula</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Result</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *%GSM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multiply the original value by the data from the GSM field</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/%HDOP%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Divide the original value by the data from the HDOP field</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts1%-%ts%</span></div></td><td colspan="1" rowspan="1"><div><span>Get the time difference between the current and the previous packet</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts%/86400</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Convert time from seconds to days</span></div></td></tr></tbody></table>

## Complex formulas

Complex formulas always start with the = sign. In such formulas the original sensor value is not used automatically. If you need to use the original value, specify it through %value%.

These formulas let you perform more complex operations, including using variables, parentheses, and mathematical functions.

### Examples of complex formulas

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Formula</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Result</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =%value%*2+10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multiply the current sensor value by 5 and add 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;=%S%*3.6+%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Convert speed to km/h and add the original value</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; </span><span>=</span><span>(%DIN1%+%DIN2%)/%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Divide the sum of the digital inputs by the original value</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; =7/%value%</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Divide the number&nbsp;7&nbsp;by the&nbsp;original sensor value</span></div></td></tr></tbody></table>

## Conditional operators

Conditional operators are a way to set selection logic in a formula. They let a formula take different values depending on whether a certain condition is met. It is similar to a query: “If the condition is true, do one thing, otherwise do another”.

### A conditional operator is written like this

condition ? value\_if\_yes : value\_if\_no

This expression can be explained as follows:

— condition  — the expression that is checked, for example, the temperature is above 30

—value\_if\_yes — the value returned if the condition is true

— value\_if\_no — the value returned if the condition is false

### Comparison operators

The following operators can be used in conditions:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>Operator</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Meaning</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ==</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; equal to</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> checks for exact equality</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; !=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; not equal to</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; checks for inequality</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; greater than</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; checks whether the left value is greater than the right one</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &lt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; less than</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; checks whether the left value is less than the right one</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; greater than or equal to</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; checks whether the left value is greater than or equal to the right one</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &lt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; less than or equal to</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; checks whether the left value is less than or equal to the right one</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &amp;&amp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; and</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; checks that all conditions are true</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ||</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; or</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; checks that at least one condition is true</span></div></td></tr></tbody></table>

### Example 1

Suppose we have a digital input sensor field DIN1, and we want to set a condition:

-   If DIN1 equals 1, the result is 22
    
-   If DIN1 does not equal 1, the result is 33
    

The formula looks like this: =(%DIN1% == 1) ? 22 : 33

The system checks the condition: %DIN1% == 1 (whether the DIN1 value equals 1). If the condition is true, 22 is returned. If the condition is false, 33 is returned.

### Example 2

Suppose we have a temperature sensor field temp, and we want to set a condition:

-   If the temperature is above 30, the result is: temperature \* 10.
    
-   If the temperature is less than or equal to 30, the result is: temperature \* 20.
    

The formula looks like this: =(%temp% > 30) ? %temp% \* 10 : %temp% \* 20.

The system checks the condition: %temp% > 30 (whether the temperature is above 30). If the condition is true, temperature \* 10 is returned. If the condition is false, temperature \* 20 is returned.

### Example 3

Suppose we have a temperature sensor with the field temp and a humidity sensor humidity, and we want to set the following condition:

-   If the temperature is above 25 AND the humidity is below 60%, the result is 100
    
-   Otherwise, the result is 50
    

The formula looks like this: =(%temp% > 25 && %humidity% < 60) ? 100 : 50

%temp% > 25 is the first condition (the temperature is above 25), %humidity% < 60 is the second condition (the humidity is below 60%). The && operator means that both conditions must be met. The system checks the conditions and, if both conditions are true, returns 100; if at least one condition is false, it returns 50.

## PHP functions

PHP functions are ready-made tools of the PHP programming language for processing, converting, and formatting data.  With [PHP functions](https://www.php.net/manual/ru/ref.math.php), apply complex transformations by simply specifying the function name and the value in the formula.

All you need to do:

1\. Write the function name in the formula

2\. Specify in parentheses the value you want to convert

3\. And the system automatically takes your data, processes it the required way, and shows the result

For example, if you write round (45.78) in a formula, you get the rounded number 46.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Functions</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Example</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; substr</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Extracts part of a string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =substr('%Data%', x, y) — returns “y” characters from the Data value starting at position “x”</span></div><div><span>&nbsp;&nbsp; =substr('%FIELD%', 1, 2) — returns 2 characters from the FIELD value starting at position 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; round</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Rounds a number</span></div></td><td colspan="1" rowspan="1"><div><span>=round(%AIN1%/1000) — divides the AIN1 value by 1000 and rounds the result</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hexdec</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Converts a hexadecimal number to decimal</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hexdec('%Param%'), if Param=0A, the function returns 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; dechex</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Converts a decimal number to hexadecimal</span></div></td><td colspan="1" rowspan="1"><div>&nbsp; =<span>dechex('%Param%'), if Param=255, the function converts 255 to 'FF'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; decbin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Converts a decimal number to binary</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>=decbin('%Param%'), if Param=10, the function returns 1010&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hex2bin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Converts a hexadecimal notation to binary data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hex2bin ('%Param%'), if Param=4142, the function returns the binary representation</span></div><div><span>&nbsp; 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; strrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Reverses a string</span></div></td><td colspan="1" rowspan="1"><div><span>=strrev('%value%'), if value=0123d848010000e5, the function converts the value to &nbsp; &nbsp; &nbsp;</span></div><div><span>5е000010848d3210</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; bytesrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Reverses hexadecimal bytes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =bytesrev('%value%'), value=0123d848010000e5, the function converts the value to</span></div><div><span>&nbsp; e500000148d82301</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; explode</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;</div><div><span><strong>&nbsp;</strong></span><span> Splits a string into parts by the specified delimiter and returns an array of strings</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>=explode(',','%value%')[2]</span></div><div><span>Suppose the sensor transmits a string of comma-separated values: 90.5,3450,112,43,215</span></div><div><span>In this case the formula&nbsp;=explode(',','%value%')[2]&nbsp;takes the current sensor reading and splits it into an array: '90.5', '3450', '112', '43', '215', and then extracts the element with index 2 —&nbsp;'112'</span></div><div><span>An array of strings&nbsp;is&nbsp; a list of separate strings numbered from zero.</span></div><div><span>','&nbsp;is the delimiter, in this case a comma. The string is split at this character.</span></div><div><span>'%value%'&nbsp;is the string to split.</span></div><div><span>[2]&nbsp;— square brackets are used to access an array element. [2] means “give me the third element”, numbering starts at 0.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Compares several values and returns the largest</span></div></td><td colspan="1" rowspan="1"><div><span>=max('%value%', 90), if value=85, the function returns 90</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Returns the smallest value</span></div></td><td colspan="1" rowspan="1"><div><span>=min('%value%', 90), if value=85, the function returns 85</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; abs</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Returns the absolute value of a number</span></div></td><td colspan="1" rowspan="1"><div><span>=abs('%value%'), if value = -15, the function returns 15</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; str_replace</span></div></td><td colspan="1" rowspan="1"><div><span>Replaces some characters or words with others</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>str_replace(search, replace, subject)</span></div><ul><li><div><span>search — what to look for</span></div></li><li><div><span>replace — what to replace it with</span></div></li><li><div><span>subject — where to look (the string)</span></div></li></ul><div><span>&nbsp;For example, we need to replace commas with periods in numbers</span></div><div><span>=str_replace(",", ".",'%value%'), if value = 1,234,567, the function outputs — 1.234.567</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sqrt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calculates the square root</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sqrt('%value%'), if value = 25 , the function returns 5</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; pow</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Raises a number to a power</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =pow('%value%', 3), if value =2, the function returns 8 (that is, 2³)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calculates the sine of an angle (in radians)&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sin('%value%'), if value= 1.57, the final value is ≈ 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calculates the cosine of an angle (in radians)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =cos('%value%'), if value = 0, the final value is 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; asin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calculates the arcsine (in radians)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =asin('%value%'), if value=1, the function returns 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; acos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calculates the arccosine (in radians)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =acos('%value%'), if value= 0, the function returns 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number_format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Formats a number with separators</span><span></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =number_format(1234.56, 2, ',', ' ') the function returns 1 234,56</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Returns the current time in UNIX format — in seconds since January 1, 1970</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =time('2023-12-20 12:00:00')</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; array_sum</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Adds up all numbers in an array</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =array_sum([1,2,3,4]) — the function returns 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; pack</span></div></td><td colspan="1" rowspan="1"><div><span>Packs data into a binary format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =pack('H*', '4142') — packs 'AB' into binary data</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; unpack</span></div></td><td colspan="1" rowspan="1"><div><span>Unpacks binary data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =unpack('H*', 'AB')[1] — returns '4142'</span></div></td></tr></tbody></table>

### Examples of complex conversions

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Example</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Converting an unsigned number to a signed number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=((%BLE_T1%&gt;3000)?((%BLE_T1%-65535)/100):(%BLE_T1%/100))&nbsp;</span></div><div>&nbsp;</div><ul><li><div><span>If the number is greater than 3000 — subtract 65535 from it and divide by 100</span></div></li><li><div><span>If it is less than or equal to 3000 — divide by 100</span></div><div><span>This formula is often used for temperature sensors, where negative values are encoded as large positive numbers.</span></div></li></ul></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Converting a byte sequence</span></div><div><span>&nbsp; (little endian to big endian)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=strtoupper(substr(unpack('H*',strrev(hex2bin(%value%)))[1],2,12))&nbsp;—&nbsp;1500000124286b01&nbsp;→&nbsp;6B2824010000</span></div><ul><li><div><span>hex2bin(%value%) — converts a hex string to binary data</span></div></li><li><div><span>strrev(...) — reverses the bytes</span></div></li><li><div><span>unpack('H*', ...) — converts back to hex</span></div></li><li><div><span>substr(..., 2, 12) — takes the required part of the string</span></div></li><li><div><span>strtoupper(...) — converts to upper case</span></div></li></ul></td></tr></tbody></table>

## Division by zero

When a formula contains division, be careful with the divisor — the number you divide by. If the divisor is zero, an error occurs, because division by zero is mathematically impossible.

For example, the formula =1000/%DIN1% causes an error if the DIN1 sensor value is 0 or undefined.

In this case, use a conditional operator to check the divisor: =(%DIN1%==0) ? 0 : 1000/%DIN1%. The system checks the condition:  %DIN1% == 0 (whether the DIN1 value equals zero). If the condition is true, the result is 0. If the condition is false, 1000 is divided by the DIN1 value.

## How to check that a formula works

<table><tbody><tr><td><span></span></td><td><div>When you apply a formula, make sure it converts the data correctly.</div></td></tr></tbody></table>

Check the formula using the “Test” button:

![Using formulas](images/drex_primenenie_formul_screen_2.png)

-   Click the “Test” button in the “Formula” field.
    
-   The system shows values you can use to check the formula specified in the handler. You can select ready-made values or enter your own.
    
    3\. After that, click the “Test” button again, and the system shows the result of applying the formula: correct or incorrect.
    

![](images/drex_primenenie_formul_custom_5.png)

## Where else formulas are used

Formulas in PILOT can be used not only for processing sensor data. You can use formulas in the [“Object card”](../obekty-1/kartochka-obekta/index.html#Формула_в_карточке_объекта) or when working with the [“Notifications”](../moduli-1/uvedomleniya/index.html) module. The principle of how they work is the same everywhere — the same writing rules and the same mathematical operations.
