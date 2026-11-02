---
title: "How to work with the “Climate” module"
---

The “Climate” module helps you monitor temperature and humidity at monitored objects.

In it you can group sensors into a structure of rooms, view their current values, follow updates, and display sensors on an object plan.

In this article we will cover:

-   [What to do before you start](kak-rabotat-s-modulem-klimat.html#Перед_началом_работы)
    
-   [How the module interface is organized](kak-rabotat-s-modulem-klimat.html#Интерфейс_модуля)
    
-   [How to create a room](kak-rabotat-s-modulem-klimat.html#Как_работать_с_модулем)
    
-   [How to add nested elements](kak-rabotat-s-modulem-klimat.html#Добавьте_вложенные_элементы)
    
-   [How to add a sensor](kak-rabotat-s-modulem-klimat.html#Добавьте_датчик)
    
-   [How to work with sensors in the list](kak-rabotat-s-modulem-klimat.html#Как_работать_с_датчиками_в_списке)
    
-   [How to upload a room plan](kak-rabotat-s-modulem-klimat.html#Как_загрузить_схему_помещения)
    
-   [How to place sensors on the plan](kak-rabotat-s-modulem-klimat.html#Как_разместить_датчики_на_схеме)
    
-   [Which actions are available for a room](kak-rabotat-s-modulem-klimat.html#Меню_действий_с_помещением)
    

## Before you start

For the “Climate” module to work correctly, temperature or humidity sensors must be set up in advance on the monitored objects.

The module works only with sensors that are already added to the system and linked to monitored objects.

Therefore, before you start, make sure that:

1\. A monitored object has been created 

2\. A temperature or humidity sensor is set up on the object

### Example

Suppose you want to monitor the temperature in a residential space. Then:

1\. First, create an object named Home in the monitoring system. To learn how to create a monitored object, read [here](../../obekty-1/kak-dobavit-obekt-1.html).

![](images/drex_kak_rabotat_s_modulem__klimat__custom.png)

2\. Then add a temperature sensor to it. To learn how to set up a sensor on an object, read [here](../../datchiki-1/dobavlenie-datchika.html).

![](images/drex_kak_rabotat_s_modulem__klimat__custom_2.png)

3\. After that, open the “Climate” module and [link the sensor to a room](kak-rabotat-s-modulem-klimat.html#Добавьте_датчик)

## Module interface

The module interface is divided into two main parts:

![](images/drex_kak_rabotat_s_modulem__klimat__custom_3.png)

### List of rooms and sensors

On the left is the main workspace with a list of:

-   Names of buildings, floors, and rooms
    
-   Sensors linked to each room
    
-   The current value of each sensor
    
-   Time of the last update 
    
-   A mini-chart of reading changes
    

Tools are located at the top of the list:

![](images/drex_kak_rabotat_s_modulem__klimat__custom_4.png) Search: a field for quickly finding the object or sensor you need

![](images/drex_kak_rabotat_s_modulem__klimat__custom_5.png) Filter: to select items by conditions

![](images/drex_kak_rabotat_s_modulem__klimat__custom_6.png) “Add” button: to add a new room

![](images/drex_kak_rabotat_s_modulem__klimat__custom_7.png) Refresh button: to refresh the data

### Room plan

If an [SVG plan has been uploaded](kak-rabotat-s-modulem-klimat.html#Как_загрузить_схему_помещения) for the room, the plan with sensor markers is displayed on the right.

## How to work with the module

### 1\. Create a room

To start monitoring the climate, you need to create a structure: a building, a floor, or a room

-   Go to the “Climate” section
    
    2\. Click the button ![](images/drex_kak_rabotat_s_modulem__klimat__custom_6.png) at the top of the list
    
    ![How to work with the “Climate” module](images/drex_kak_rabotat_s_modulem__klimat__screen.png)
    
    3\. In the window that appears, enter the room name
    

![](images/drex_kak_rabotat_s_modulem__klimat__custom_8.png)

4\. Click OK

![](images/drex_kak_rabotat_s_modulem__klimat__custom_9.png)

The new room appears in the list. You can now work with it through the context menu.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_10.png)

If you want to change a room you created:

1\. Right-click it

2\. In the menu, select “Edit”

![](images/drex_kak_rabotat_s_modulem__klimat__custom_11.png)

3\. In the window that opens, change the name

4\. If necessary, select the room type: building, floor, room

![](images/drex_kak_rabotat_s_modulem__klimat__custom_12.png)

5\. Click “Add”

### 2\. Add nested elements

If your room consists of several zones, you can make the structure more detailed. For example, add floors to a building and rooms to a floor.

1\. Right-click the room you need in the list

2\. In the menu, select “Add room”

![How to work with the “Climate” module](images/drex_kak_rabotat_s_modulem__klimat__screen_2.png)

3\. Specify the name of the new element

![](images/drex_kak_rabotat_s_modulem__klimat__custom_13.png)

4\. Select the room type: building, floor, or room

![](images/drex_kak_rabotat_s_modulem__klimat__custom_14.png)

5\. Click “Add”

The new element appears inside the selected room. You can repeat this process to build the structure you need.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_15.png)

### 3\. Add a sensor

After creating a room, you need to link a sensor to it:

1\. Select the room you need in the list

2\. Right-click and select “Add sensor”

![How to work with the “Climate” module](images/drex_kak_rabotat_s_modulem__klimat__screen_3.png)

3\. A settings window opens where you need to select:

-   Monitored object: the object the sensor is linked to
    
-   Sensor: the temperature or humidity sensor you need from the list
    

![](images/drex_kak_rabotat_s_modulem__klimat__custom_16.png)

![](images/drex_kak_rabotat_s_modulem__klimat__custom_17.png)

4\. Click “Add”

![](images/drex_kak_rabotat_s_modulem__klimat__custom_18.png)

After saving, the sensor appears in the “Climate” module list.

It displays:

-   Name: the sensor name in the system
    
-   Current value: the temperature or humidity right now
    
-   Update time: when data was last received
    
-   [Mini-chart](kak-rabotat-s-modulem-klimat.html#Мини-график_): how the value changed over time
    

If a [plan has been uploaded](kak-rabotat-s-modulem-klimat.html#Как_загрузить_схему_помещения), the sensor is also displayed on it.

![How to work with the “Climate” module](images/drex_kak_rabotat_s_modulem__klimat__screen_4.png)

## How to work with sensors in the list

### Sensor tooltip

If you hover the cursor over a sensor in the list, a tooltip appears.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_19.png)

It shows:

-   sensor name
    
-   sensor ID
    
-   sensor type
    
-   current value
    
-   current status
    

The following statuses can be used for sensors:

-   In range: the value is within the allowed range
    
-   Out of range: the value has gone beyond the allowed limits
    
-   Offline: no current data is arriving from the sensor
    

### Mini-chart

A mini-chart of the sensor’s operation and reading changes may be displayed next to the sensor in the list. It helps you quickly see how values changed over time.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_20.png)

If you hover the cursor over the chart, you can see a tooltip with additional information, for example, the value at a specific point and the time the reading changed.

### How to delete a sensor

1\. Right-click the sensor

2\. Select “Delete sensor”

![](images/drex_kak_rabotat_s_modulem__klimat__custom_21.png)

3\. Confirm the deletion

## How to upload a room plan

A room plan is an SVG file with a plan of your object. After uploading the plan and adding sensors, you can:

— see sensors directly on the plan 

— compare values between rooms and see the temperature difference in different zones

— monitor the situation visually

### How to upload

1\. Select the room you need in the list

2\. Right-click and select “Upload SVG”

![How to work with the “Climate” module](images/drex_kak_rabotat_s_modulem__klimat__screen_5.png)

3\. Select the SVG file with the room plan

4\. Specify the width and height of the plan; these are the dimensions at which the plan is displayed in the interface

![](images/drex_kak_rabotat_s_modulem__klimat__custom_22.png)

5\. Save

After that, the plan appears on the right side of the module window.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_23.png)

### How to place sensors on the plan

After you upload an SVG plan, the added sensors appear on it automatically.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_24.png)

You can drag the sensors with the mouse and place them according to their actual location in the room.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_25.png)

When you hover the mouse over a sensor on the plan, a tooltip with its name and current value appears.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_26.png)

![](images/drex_kak_rabotat_s_modulem__klimat__custom_27.png)

## Room actions menu

To open the actions menu, right-click the room.

![](images/drex_kak_rabotat_s_modulem__klimat__custom_28.png)

Through this menu you can:

![](images/drex_kak_rabotat_s_modulem__klimat__custom_29.png) Edit the element

![](images/drex_kak_rabotat_s_modulem__klimat__custom_30.png) Add room: create a nested structure element

![](images/drex_kak_rabotat_s_modulem__klimat__custom_31.png) Upload plan: add an SVG file so that the plan appears on the right side of the window

![](images/drex_kak_rabotat_s_modulem__klimat__custom_32.png)  Add sensor: connect a temperature or humidity sensor

![](images/drex_kak_rabotat_s_modulem__klimat__custom_33.png)  Delete element: delete the room
