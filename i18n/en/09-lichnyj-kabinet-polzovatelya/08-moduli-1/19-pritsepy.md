---
title: "Trailers"
---

The “Trailers” module is designed for creating, configuring, and managing trailers used together with monitoring objects.

![](images/drex_pritsepy__custom.png)

A trailer can be used in two ways:

— as an information object — it stores trailer data and can be linked to a vehicle

— as a monitoring object — it has its own GPS tracker and sensors and transmits data to the system

After a trailer is linked to a vehicle, the system displays them as a single combination and lets you track information about both the tractor unit and the trailer itself.

In this article, we will explain how to:

— [create a trailer](pritsepy.html#Как_создать_прицеп)

— [configure trailer parameters](pritsepy.html#Параметры_прицепа)

— [link a trailer to a vehicle](pritsepy.html#Привязка_прицепа)

— [view trailer information on the map and in the object list](pritsepy.html#Работа_с_прицепами)

— [work with the link history](pritsepy.html#История_прицепа)

— [delete a trailer](pritsepy.html#Как_удалить_прицеп)

## How to create a trailer

1\. Go to the “Trailers” tab

![](images/drex_pritsepy__custom_2.png)

2\. Click the Add button ![](images/drex_pritsepy__custom_3.png) 

![Trailers ](images/drex_pritsepy__screen.png)

The trailer creation card opens.

Fill in the required parameters and click “Save”.

![](images/drex_pritsepy__custom_4.png)

### Trailer parameters

-   Trailer name — the name under which the trailer is displayed in the system
    
-   Associated object — select the monitoring object from which the trailer receives location data, sensor states, and other parameters.
    

<table><tbody><tr><td><span></span></td><td><div><span>The associated object is not the vehicle the trailer will be attached to, but the monitoring object whose data relates to this trailer.</span></div></td></tr></tbody></table>

Type — select the trailer type

![](images/drex_pritsepy__custom_5.png)

<table><tbody><tr><td><span></span></td><td><div><span>If the type you need is not in the list, contact technical support to have it added.</span></div></td></tr></tbody></table>

-   Width — specify the trailer width and select the unit of measurement: millimeters, centimeters, meters
    

![](images/drex_pritsepy__custom_4.png)

-   Group — select the group the trailer will belong to
    
-   RFID — the RFID code transmitted by the vehicle's RFID sensor when a trailer is connected. Using this identifier, the system automatically determines which trailer is connected to the vehicle.
    
-   Description — additional information about the trailer.
    

### Additional parameters

![Trailers ](images/drex_pritsepy__screen_2.png)

-   Exclusive — determines the order in which trailers are linked.
    

If the parameter is enabled, when this trailer is connected, all other trailers previously linked to the vehicle are automatically unlinked. Use this parameter if only one trailer can be connected to a vehicle at a time.

-   Agro — used together with the agriculture module ([Agro](agro.html)). Enable this parameter only for objects that work with the agro module functionality.
    
-   Send alerts — enables sending notifications about events related to this trailer
    

### Access to objects

Select in the list the objects for which this trailer will be available. If you leave the field empty, the trailer is available to all objects.

![](images/drex_pritsepy__custom_6.png)

## How to link a trailer

You can link a trailer to a vehicle in two ways.

### Through the trailer card

At the bottom of the card, open the “Objects” section.

Select with check boxes one or more vehicles to which you need to grant access or link the trailer.

![Trailers ](images/drex_pritsepy__screen_3.png)

To find the object you need, you can use:

-   the filter ![](images/drex_pritsepy__custom_7.png) 
    
-   search with match highlighting ![](images/drex_pritsepy__custom_8.png) — the characters found are highlighted in yellow
    

After selecting the objects, click “Save”.

### Through the object card

1\. Select the object in the list

2\. Right-click it

3\. In the context menu, select “Trailers”

![](images/drex_pritsepy__custom_9.png)

4\. Do one of the following:

-   Link — to connect a trailer
    
-   Unlink — to disconnect a previously linked trailer.
    

## Working with trailers

After a trailer is linked:

— the object icon on the map changes to a vehicle-with-trailer icon

![Trailers ](images/drex_pritsepy__screen_4.png)

— the name of the connected trailer appears in the “Trailer” column of the object list

![Trailers ](images/drex_pritsepy__screen_5.png)

### Information on the map

You can view the object's tooltip on the map with information about the trailer.

![Trailers ](images/drex_pritsepy__screen_6.png)

To open the object's tooltip, left-click its icon.

If trailer display is enabled in the settings, the object's tooltip shows information about the connected trailer. If there is an associated object, you can view the data coming from the trailer's GPS tracker.

To enable trailer display in the tooltip:

1\. Go to “Contract settings”

2\. Open the “Personalization” tab

3\. In the “Tooltip elements” section, select the “Trailer” check box

![](images/drex_pritsepy__custom_10.png)

4\. Save the changes

### Information in the object list

To view trailer information in a tooltip, hover over the object in the list.

![Trailers ](images/drex_pritsepy__screen_7.png)

For the tooltip to be displayed in the object list, in [“Personalization”](../nastrojki-dogovora-2/personalizatsiya.html#общие_настройки_отображения) select the “Show object tree tooltips” option.

## Trailer history

A link history is available for each trailer.

To open the history:

1\. Right-click the trailer on the “Trailers” tab

2\. Select “Show history”

![](images/drex_pritsepy__custom_11.png)

The history shows:

![](images/drex_pritsepy__custom_12.png)

-   the object the trailer was linked to
    
-   the trailer name
    
-   the date and time of linking
    
-   the date and time of unlinking
    
-   the RFID code
    

To delete a record from the history, click the icon ![](images/drex_pritsepy__custom_13.png).

## How to delete a trailer

1\. Right-click the trailer on the “Trailers” tab

2\. Select “Delete”

![](images/drex_pritsepy__custom_11.png)
