---
title: "How to work with Velavu objects"
---

With the Velavu integration in PILOT, you can track the location of objects inside buildings in real time: which floor, room, or zone equipment and personnel are in.

In this article we will cover:

-    [How to switch to Velavu mode](kak-rabotat-s-obektami-velavu.html#Как_переключиться_на_режим_Velavu) 
    
-    [How to get started with Velavu](kak-rabotat-s-obektami-velavu.html#Как_начать_работать_с_Velavu) 
    
-    [How to synchronize](kak-rabotat-s-obektami-velavu.html#Синхронизация_структуры_Velavu) 
    
-    [How to interact with devices](kak-rabotat-s-obektami-velavu.html#Как_взаимодействовать_с_объектами_Velavu) 
    
-   [How to view device details](kak-rabotat-s-obektami-velavu.html#Просмотр_деталей_устройства) 
    
-    [Object and device menu](kak-rabotat-s-obektami-velavu.html#Меню_объекта_Velavu) 
    
-    [Velavu geofences](kak-rabotat-s-obektami-velavu.html#Геозоны_Velavu) 
    

## How to switch to Velavu mode

After the Velavu integration is connected, the “Climate” module lets you switch between two modes:

-   Standard — the regular “Climate” module mode for working with temperature and humidity sensors
    
-   Velavu — the mode that displays Velavu objects
    
    1\. Open the “Climate” module
    

![](images/drex_kak_rabotat_s_obektami_velavu___custom.png)

2\. On the “Climate” tab, use the drop-down list to switch the mode from “Standard” to “Velavu”

![](images/drex_kak_rabotat_s_obektami_velavu___custom_2.png)

3\. The interface switches to Velavu mode

In Velavu mode, the Velavu object tree is displayed instead of the usual temperature and humidity sensors.

Each element in the tree usually shows:

-   the object name, for example, Velavu-00Q6N
    
-   the type, for example:
    
    — ANCHOR — anchor
    
    — TAG — tag
    
    — Device — device
    

![](images/drex_kak_rabotat_s_obektami_velavu___custom_3.png)

In Velavu mode, the following are available at the top of the window:

![](images/drex_kak_rabotat_s_obektami_velavu___custom_4.png) Filter — to select the elements you need

![](images/drex_kak_rabotat_s_obektami_velavu___custom_5.png) Search — to quickly find a device, floor, or site

![](images/drex_kak_rabotat_s_obektami_velavu___custom_6.png) Synchronization button — to load or update the structure from Velavu

![](images/drex_kak_rabotat_s_obektami_velavu___custom_7.png) Add button — lets you manually add a room if you need to extend the structure

## How to get started with Velavu

For Velavu objects to appear in the “Climate” module, you first need to prepare the objects in the system.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_8.png)

1\. Create a monitoring object. To learn how to create an object, read the separate [article](../../../obekty-1/kak-dobavit-obekt-1.html).

2\. In the object card, enter the object identifier from the Velavu system

![How to work with Velavu objects  ](images/drex_kak_rabotat_s_obektami_velavu___screen.png)

3\. After that, you can configure the object further, for example:

 — select an icon

— specify a color

— fill in other parameters

4\. Run synchronization

Once the objects are prepared, go to the “Climate” module and synchronize the structure.

### Synchronizing the Velavu structure

Synchronization is needed to load the object structure from Velavu and display it in the “Climate” module:

1\. Open the “Climate” module

2\. [Switch to Velavu mode](kak-rabotat-s-obektami-velavu.html)

3\. Click the synchronization button ![](images/drex_kak_rabotat_s_obektami_velavu___custom_9.png)

![How to work with Velavu objects  ](images/drex_kak_rabotat_s_obektami_velavu___screen_2.png)

4\. The system loads buildings, floors, and devices from the Velavu API

After synchronization, the entire structure appears in the object tree, grouped by account, building, and floor.

# How to interact with Velavu objects

-   If you click an object in the tree on the left, the corresponding object on the plan is highlighted.
    
-   If you click an object on the plan, it is automatically selected in the object list.
    

### Which objects are displayed in Velavu

The module can display different types of objects:

-   Anchors — fixed reference points used to calculate the position of other devices
    
-   Tags — tags that are usually attached to equipment, people, or other objects. Once the anchors are configured, their position is calculated automatically.
    
-   Proximity Tags — tags that are detected within the radius of another object
    

![](images/drex_kak_rabotat_s_obektami_velavu___custom_10.png)

### Color coding of Velavu objects

Velavu objects are displayed on the plan as colored circles. The color indicates the object type and its status:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Color</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Object type</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Blue</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Anchor&nbsp;(Anchor&nbsp;)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fixed positioning point installed in a room</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Green</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tag (Tag)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Moving object — equipment, vehicle, or personnel</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Yellow</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Proximity Tags (Proximity Tags)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tag located within the range of another object</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Red</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Offline</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The object is not transmitting data or is outside the coverage area</span></div></td></tr></tbody></table>

![](images/drex_kak_rabotat_s_obektami_velavu___custom_11.png)

### Tooltip on hover

If you hover over an object in the list or on the plan, a tooltip with brief information about the object appears.

The tooltip shows:

-   Name — the object name in the system
    
-   Agent ID — the internal object identifier
    
-   Device ID — the Velavu device identifier
    
-   Location type — the object placement type
    
-   Coordinates — the current coordinates of the object
    
-   Site — the name of the site the object belongs to
    
-   Floor — the floor where the object is located
    
-   Status — the current state of the device: online or offline
    

This tooltip helps you get the main information about an object without opening the device card.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_12.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_13.png)

## Viewing device details

A detailed card with full information is available for each Velavu device. To open it, click the view icon next to the object in the tree.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_14.png)

The device card opens as a separate window with several tabs:

### Basic information

This tab shows general information about the device: where it is located, what it is attached to, and its status.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_15.png)

-   Device name — the device name in the Velavu system, for example, Velavu-Sp8mv
    
-   Device ID — the unique device identifier, for example, Sp8mv
    
-   Site — the name of the site where the device is installed, for example, GARGASH
    
-   Floor — the floor where the device is located, for example, Level 1 - GR001
    
-   Connection status — the current state of the device: online or offline
    

Below is the “Assignment” block, which may show information about the asset:

-   Asset name — the asset the device is attached to
    
-   Asset group — the group the asset belongs to
    
-   Asset category — the asset category
    
-   Operation — the current action or state of the asset
    

At the bottom of the tab, the following field is displayed:

-   Last update — the date and time when data was last received from the device
    

### Location

The “Location” tab shows data about the device location.![](images/drex_kak_rabotat_s_obektami_velavu___custom_16.png)

Here you can see:

-   Floor name — the floor where the device is located
    
-   Site name — the site where the device is placed
    
-   Location type — the way the device is placed
    
-   Latitude — the current latitude value
    
-   Longitude — the current longitude value
    
-   Nearest device ID — the identifier of the nearest device
    
-   Distance to device — the distance to the nearest device
    

### Device status

The “Device status” tab shows the current technical state of the device.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_17.png)

**Battery status**

This block may show:

-   Charge level — the battery charge percentage, for example, 90%
    
-   Battery charging — whether the device is connected to a charger
    

**Connection**

This block shows:

-   Connection status — online or offline
    
-   RSSI — signal level
    
-   Gateway ID — the identifier of the gateway the device is connected through
    
-   Signal level — connection quality
    

**Movement and activity**

In this block you can see:

-   Motion detection — whether the object is moving or stationary
    
-   Last activity — the date and time of the device's last activity
    

### Environment

This tab shows environmental sensor data if the device supports measuring temperature, humidity, or pressure.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_18.png)

Here you can see:

-   Temperature — the current value in °C
    
-   Humidity — the current value in %
    
-   Pressure — the current value in kPa
    

Below is the “History charts” block.

If data is available, charts of temperature, humidity, and pressure changes are displayed here.

Above the charts you can select the viewing period: 1h — 1 hour, 6h — 6 hours, 1d — 1 day, 7d — 7 days, 30d — 30 days, All — the entire available period

### Assignment

The “Assignment” tab shows which asset the device is associated with.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_19.png)

Here you can usually see:

-   Asset name — the asset the device is attached to
    
-   Asset group — the group the asset belongs to
    
-   Asset category — the asset category
    
-   Operation — the current action or state of the asset
    

If the asset data is not filled in, the fields may show N/A.

### Technical data

The “Technical data” tab shows additional service information about the device.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_20.png)

Depending on the device, the following may be available here:

-   Firmware / model
    
-   Beacon interval
    
-   Heartbeat frequency
    
-   State update frequency
    
-   Temperature and humidity update frequency
    
-   Beacon transmit power
    
-   Site ID
    
-   Floor ID
    

## Velavu object menu

A context menu with additional actions is available for Velavu floors and sites. To open the object actions menu, right-click the Velavu object.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_21.png)

Through this menu you can:

![](images/drex_kak_rabotat_s_obektami_velavu___custom_22.png) Edit — change the name and type of the room

![](images/drex_kak_rabotat_s_obektami_velavu___custom_23.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_24.png) Add room — create a nested element of the structure

![](images/drex_kak_rabotat_s_obektami_velavu___custom_25.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_26.png) Show anchors — show the fixed positioning points on the object plan.

Anchors are hidden by default.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_27.png)

To show the anchors, select “Show anchors” in the menu. They will appear on the plan and in the list.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_28.png)

To hide the anchors, select “Hide anchors” in the menu.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_29.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_30.png) Add object — link a Velavu monitoring object to a room

![](images/drex_kak_rabotat_s_obektami_velavu___custom_31.png)

![](images/drex_kak_rabotat_s_obektami_velavu___custom_32.png)  Delete element — remove a room from the structure

## Velavu device menu

For an individual Velavu device, the following action is available in the context menu:

-   Delete object
    

This action removes the link between the device and the Velavu room.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_33.png)

## Velavu geofences

Velavu geofences are loaded into the system automatically from Velavu. You do not need to create them manually in PILOT.

It is enough to configure the sites and buildings in Velavu and then click the synchronization button ![](images/drex_kak_rabotat_s_obektami_velavu___custom_6.png) in Velavu mode in the “Climate” module. The system will automatically import the geofences, the structure of sites and floors, and the related devices.

After that, the Velavu geofences will appear in the “Geofences” section in a separate folder.

![](images/drex_kak_rabotat_s_obektami_velavu___custom_34.png)
