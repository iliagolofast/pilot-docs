---
title: "Composite objects"
---

The “Composite objects” module is designed to combine several fuel objects and sensors into one logical object and track them as a single fuel accounting system.

It helps you build a clear fuel flow scheme — from source and storage to dispensing — and correctly calculate receipts, consumption, and balances.

![](images/drex_sostavnye_obekty_3_custom.png)

The module is useful in the following scenarios:

— if a tanker truck with several compartments is used

— if there is a stationary gas station or fuel depot

— if you need to account for receiving, storing, and dispensing fuel within a single scheme

In the module, you can:

— [create](sostavnye-obekty-3.html#Как_добавить_элементы_в_составной_объект) and configure composite objects

— [add](sostavnye-obekty-3.html#Как_добавить_элементы_в_составной_объект) elements (objects) and sensors to them

— use them in [reports](sostavnye-obekty-3.html) and monitoring for fuel calculations

## How to create a composite object

1.  Before creating a composite object, make sure the following are already configured in the system:

— the required objects (vehicles, tanks, and other elements that will be part of the scheme)

— the corresponding sensors

All [objects](../obekty-1/kak-dobavit-obekt-1.html) and [sensors](../datchiki-1/dobavlenie-datchika.html) must be added and configured correctly in advance — only after that can they be combined into a composite object.

2\. Go to “Main” → “Composite objects”

![Composite objects](images/drex_sostavnye_obekty_3_screen.png)

3\. Click the button to add an object ![](images/drex_sostavnye_obekty_3_custom_2.png)

4\. Enter the name of the composite object

![](images/drex_sostavnye_obekty_3_custom_3.png)

5\. It appears in the list on the “Composite objects” tab

![Composite objects](images/drex_sostavnye_obekty_3_screen_2.png)

## How to add elements to a composite object

1\. Open the composite object you created

2\. Click the button to add an element

![Composite objects](images/drex_sostavnye_obekty_3_screen_3.png)

3\. Specify:

![Composite objects](images/drex_sostavnye_obekty_3_screen_4.png)

— object — an element of the composite object (select from the list)

— sensor (select from the list of the object's sensors)

— date

— element type — its role in the fuel scheme:

-   Tank — a container for storing fuel, for example, a tanker truck compartment, a stationary reservoir, a generator tank.
    
-   Input flow meter — measures the volume of fuel entering the system, for example, receiving at a fuel depot, filling a stationary tank, recording receipts before storage.
    
-   Flow meter — measures the volume of fuel leaving the tank, for example, refueling a vehicle, dispensing fuel to customers, supplying fuel to equipment.
    
-   Input tank — an external fuel source, for example, a large external supplier reservoir.
    

![](images/drex_sostavnye_obekty_3_custom_4.png)

4\. Click “Save”

The element becomes part of the composite object and appears in the list. Click it — it is displayed on the diagram.

![](images/drex_sostavnye_obekty_3_custom_5.png)

Add all the required elements.

![](images/drex_sostavnye_obekty_3_custom_6.png)

## Diagram configuration

The diagram block is at the bottom of the window.

![](images/drex_sostavnye_obekty_3_custom_6.png)

1\. Drag the elements with the mouse to the desired positions

2\. Connect them with arrows — from input to output

3\. Click “Save” below the diagram

![](images/drex_sostavnye_obekty_3_custom_7.png)

After that, the system uses this diagram in fuel calculations and reports.

![](images/drex_sostavnye_obekty_3_custom.png)

## Working with the composite object list

![Composite objects](images/drex_sostavnye_obekty_3_screen_5.png)

1 — Filter in the object list

2 — Search

If the list is long, you can:

 — use the filter

— use the “Search” field

To refresh the list, use the button ![](images/drex_sostavnye_obekty_3_custom_8.png).

To create a new composite object, click ![](images/drex_sostavnye_obekty_3_custom_9.png) .

To delete an element or the entire composite object, click the delete button ![](images/drex_sostavnye_obekty_3_custom_10.png) next to it in the list.

To edit an object, double-click it in the list, and the edit window opens.
