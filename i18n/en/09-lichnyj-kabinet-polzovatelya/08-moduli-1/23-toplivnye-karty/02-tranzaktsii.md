---
title: "Transactions"
---

The “Transactions” tab displays operations made with fuel cards. Here you can find the operation you need, view refuel details, and check whether the object's location matches the gas station coordinates.

![](images/drex_tranzaktsii_custom.png)

## How to find transactions

1\. In the “From date” and “To date” fields, specify the period

2\. In the “Card” field, select a fuel card

![Transactions](images/drex_tranzaktsii_screen.png)

1 — Transaction period

2 — Fuel card selection

After you select the parameters, operations for the specified period appear in the table.

![](images/drex_tranzaktsii_custom_2.png)

## How to view operation details

Select the transaction you need in the table. The “Operation details” area opens on the right side of the screen.

![](images/drex_tranzaktsii_custom_3.png)

It shows:

-   the company — the data provider
    
-   the fuel card number
    
-   the date and time of the operation
    
-   the gas station
    
-   the object's location
    
-   the odometer reading
    
-   the fuel type
    
-   the fuel quantity
    
-   the price
    
-   the total amount
    
-   the refuel volume according to the sensor
    
-   the coordinate matching result
    
-   a map with the object's location
    

## Coordinate matching check

PILOT compares the object's location at the time of the operation with the saved coordinates of the gas station. The coordinates are considered matching if the distance between the object and the gas station does not exceed 100 meters.

The result is displayed in the “Coordinate match” field:

-   green “Match” status — the object was near the specified gas station
    

![](images/drex_tranzaktsii_custom_4.png)

-   red “No match” status — the object was more than 100 meters from the saved gas station coordinates
    

![](images/drex_tranzaktsii_custom_5.png)

A lack of a match does not always mean an incorrect operation. The cause may be inaccurate gas station coordinates, an error in determining the object's location, or missing data.

If the fuel card is not linked to an object, PILOT cannot determine its location for the check. In this case, a message appears saying that the card is not linked to an object.

<table><tbody><tr><td><span></span></td><td><div>If no coordinates are specified for a gas station, contact technical support. Provide the name or identifier of the gas station, the address, latitude, and longitude.</div></td></tr></tbody></table>

## Table settings

To change how the transactions table is displayed, click the arrow ![](images/drex_tranzaktsii_custom_6.png) in the header of the column you need. In the menu that opens, you can:

— sort records in ascending or descending order

— select the columns to display

— group records by the selected parameter

— enable the grouped data view

![](images/drex_tranzaktsii_custom_7.png)

To select columns:

1\. Open the menu in the header of any column

2\. Select “Columns”

3\. Select the check boxes next to the data you want to see in the table

The “Gas station” column shows the fueling station specified in the transaction. The result of matching its coordinates with the object's location can be viewed in the operation details.

This tab displays operations made with fuel cards.
