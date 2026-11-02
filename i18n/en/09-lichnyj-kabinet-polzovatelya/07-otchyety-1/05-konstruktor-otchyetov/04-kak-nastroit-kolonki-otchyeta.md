---
title: "How to Configure Report Columns"
---

For a report to contain the data you need, you must add and configure columns in the builder. Each column determines what information will be displayed in the report and how it will be processed.

To add a column:

1\. In the report builder, click the button ![](images/drex_kak_nastroit_kolonki_otchyeta_custom.png)  in the “Columns” block

2\. Fill in the parameters of the new column

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_2.png)

### Column parameters

1\. Name

Enter the column name that will be displayed in the report header.

2\. Data

Select from the drop-down list the data field that will be used in the column

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_3.png)

3\. Sensor groups

Select the sensor group whose values should be shown in the column. When the report is built, the system automatically displays the values of the sensors from the selected group.

Reports support output of the values of discrete, two-state and multi-state sensors.

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_4.png)

4\. Total Functions

This parameter determines how the system calculates the totals at the bottom of the table (in the summary row).  
**![](images/drex_kak_nastroit_kolonki_otchyeta_custom_5.png)**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Value</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; What it does</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; None</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The total for the column is not calculated</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Sum</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Adds up all values in the column</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Average</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calculates the arithmetic mean (sum ÷ number of Objects)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Max.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Shows the maximum value in the column</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Min.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Shows the minimum value in the column</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Formula</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lets you set your own calculation formula</span></div></td></tr></tbody></table>

You can select several functions at once for one column.

Example of using totals in a mileage report:

-   CAN mileage — Sum, Max.
    
-   GPS mileage — Min.
    
-   CAN mileage at start — Sum
    
-   CAN mileage at end — Average
    

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_6.png)

In the built report, total rows appear at the bottom of the table showing the values calculated according to the selected functions.

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_7.png)

5\. Units

Specify the unit of measurement of the data (km, L, km/h, °C, hours, etc.).

6\. Formula

Lets you use mathematical expressions, for example, (%odometer\_end% - %odometer\_begin%) / 100

7\. Filter

For any column with numeric values you can configure filtering of report rows. In the “Filter” field, specify one of the conditions:

-   \> X— the value is greater than X
    
-   < X— the value is less than X
    
-   \= X— the value is equal to X
    

For example, if you enter > 25 for the “Speed” column, the report will show only events recorded at a speed above 25 km/h.

8\. Formatting function

Lets you set special formatting of the value (rounding, date conversion, unit conversion, etc.). It is used to bring data to the required form.

9\. Hide

Select the checkbox if the column is needed only for calculations (for example, for a formula) but should not be shown in the final report.

### How to delete a column

Click the column and click ![](images/drex_kak_nastroit_kolonki_otchyeta_custom_8.png).

## How to configure the columns table

Configure the columns table the way that suits you. Select which columns with parameters to display.

1\. In the header of any column, click the arrow ![](images/drex_kak_nastroit_kolonki_otchyeta_custom_9.png). A menu with column settings appears:

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_10.png)

-   Sorting data in ascending or descending order
    
-   Selecting columns to display
    
    2\. To configure which columns to show:
    
-   Click “Columns” — a list of parameters available for display in the table column opens
    
-   Select the checkboxes next to the parameters you want to see
    

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_11.png)

## How to use formulas in report columns

The report builder has two ways of adding formulas:

1\. A formula for an existing field — adding a formula to an already existing data field

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_12.png)

2\. A standalone formula — creating a new column based on a formula using several fields

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_13.png)

### A formula for an existing field

This method is used when you need to modify the data of an already existing field.

How to configure:

1\. Add a column with an existing data field (for example, “Idle time”).

2\. In the “Formula” field, enter the expression to be applied to this field

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_12.png)

For example, a Fuel Consumption While Driving report with an “Idle time” column. The “Formula” field contains =%te%-%ts% — this expression calculates the difference between the end time (te) and the start time (ts) of the idle

### A standalone formula

This method is used when you need to create a new column based on several data fields.

How to configure:

1\. Add a new column

2\. In the “Data” field, select “Formula”

3\. In the “Formula” field, enter an expression using data field identifiers

For example, a Fuel Consumption While Driving report with a “Consumption while driving” column:

![](images/drex_kak_nastroit_kolonki_otchyeta_custom_13.png)

-   In the “Data” field, Formula is selected
    
-   The Formula field contains =%fuel%/((%te%-%ts%)/60/60) — this expression calculates fuel consumption per hour:
    
    — %fuel% — fuel consumption according to the sensor
    
    — (%te%-%ts%)/60/60 — time in hours (the difference between the end and start time of the event, divided by 3600 seconds)
    

After the report is saved, the system automatically calculates the value for each row using the specified formula.

For more information on formula syntax, see the separate [article](../../datchiki-1/primenenie-formul.html).
