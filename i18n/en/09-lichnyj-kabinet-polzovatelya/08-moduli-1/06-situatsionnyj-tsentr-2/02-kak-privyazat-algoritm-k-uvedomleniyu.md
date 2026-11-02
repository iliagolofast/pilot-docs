---
title: "How to link an algorithm to a notification"
---

This article explains how to set up algorithms to work through notifications.

You will learn:

— [how to link an algorithm to a notification so that it runs automatically when events occur](kak-privyazat-algoritm-k-uvedomleniyu.html#автоматическое_срабатывание_алгоритма)

— [how to create a notification with an algorithm for manual event generation](kak-privyazat-algoritm-k-uvedomleniyu.html#ручная_генерация_события)

For an algorithm to start working and respond to events, it must be linked to a notification.

<table><tbody><tr><td><span></span></td><td><div>For linking to work, the <a href="../uvedomleniya/index.html"><span>“Notifications”</span></a> module must be enabled in the contract.</div></td></tr></tbody></table>

## Linking an algorithm to an event

Such an algorithm runs automatically when the conditions are met and arrives in the “Control room”.

1\. In the top panel, click the icon ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom.png)and open “Contract settings”. Go to the “Notifications” tab.

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. Click “Add” ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) to create a new notification

3\. Link the algorithm

1) In the notification settings window, click “Algorithm linking”

![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen.png)

2) Select the algorithm you need from the list

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

3) Click the algorithm; its diagram with blocks opens

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_5.png)

4\. Configure the algorithm blocks

1) Double-click the block you need

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2) Fill in the text and select event tags

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_7.png)

3) Click “OK”

### How to create a tag for a block

Tags help you quickly understand the essence of an event and visually highlight it in the list.

If the tag you need does not exist:

1\. In the “Tag” field, click ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2\. In the tags window, click ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) to add a new tag to the list

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_8.png)

3\. Enter the tag name and select a color

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_9.png)

4\. Save; the tag appears in the list and becomes available for selection

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_10.png)

### Configuring the Webhook block

The Webhook block passes event information from PILOT to an external system, for example a CRM, a dispatch system, or a corporate application. The request is sent when algorithm execution reaches this block. For more on how Webhook notifications work and how to configure them, see [this article](../uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html).

If the algorithm uses a Webhook block:

1\. Select the Webhook block in the diagram

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_11.png)

2\. Double-click it to open its settings

3\. Click the edit icon next to the block name ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_12.png)

![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_2.png)

4\. Fill in the parameters in the Webhook Details window

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_13.png)

**URL**

Specify the address of the external system to which PILOT should send the data. You need to get the address from the administrator or developer of the receiving system.

**Header**

Specify the request headers. By default, data is sent in JSON format:

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; "ContentType: application/json"</div><div>]</div></td></tr></tbody></table>

Change the headers only if the receiving system requires a different data format or additional parameters.

**Body**

Specify the data to send. By default, the following template is used:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "agent_id": "%AGENTID%",</div><div>&nbsp; "vehiclenumber": "%VEHNUM%",</div><div>&nbsp; "ts": "%TS%",</div><div>&nbsp; "lat": "%LAT%",</div><div>&nbsp; "lon": "%LON%",</div><div>&nbsp; "speed": "%SPEED%",</div><div>&nbsp; "data": "%DATA%",</div><div>&nbsp; "zone": "%ZONE%",</div><div>&nbsp; "driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

Instead of the variables enclosed in % signs, the system automatically substitutes information from the event. For example, %SPEED% is replaced with the object’s speed, and %VEHNUM% with the vehicle number.

You can change the request body: remove unneeded fields, add your own fields, or use other available variables.

Keep the JSON format valid:

"field\_name": "%VARIABLE%"

If the JSON structure or a variable is written incorrectly, the external system may not receive or process the request.

**Allowed variables**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Variable</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; What it passes</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Account ID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Object ID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vehicle number</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Timestamp</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Date and time</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitude</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitude</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Mileage (from the sensor)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Notification data</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Geofence</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID of the first geofence</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Name of the first geofence</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Maximum speed (for speeding notifications)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Duration of the speeding</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Set speed limit (Speed control)</span></div></td></tr></tbody></table>

The set of available variables may depend on the notification type. For example, the variables %MAXSPEED%, %DUR%, and %SPEEDLIMIT% are intended for speeding notifications.

After filling in the parameters, click “Save”, then confirm the block configuration with the “OK” button. If different branches of the algorithm use different Webhook blocks, configure each of them separately.

### Configuring the event processing window

You can configure how the [event processing window](kak-obrabotat-sobytie.html#Окно_«Обработка_события») looks for the operator:

-   In the algorithm linking window, click “Settings”
    

![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_3.png)

2\. Click ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) to add elements:

![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_4.png)  
What you can configure:

-   Element type: the kind of block (for example, plaintext is plain text)
    
-   Title: the block name
    
-   Text: information for the operator
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_14.png)

For example:

1\. Add a row of the plaintext type

2\. In the “Title” field, write what this block is (for example: “Event information”)

3\. In the “Text” field, add the information the operator should see (for example: “Check the temperature in the cargo body and contact the driver”).

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_15.png)

To add a section with vehicle information, click the car icon. A new block of the vehicle type appears, where you can set the title and text.

![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_5.png)

1 — Add vehicle information. To add a section with driver data, click the driver’s license icon. A new block of the driver type appears. In this block you can set the title and text.

2 — Add driver information

After configuring, click “OK”; the operator will see the form exactly in this form when processing the event.

## Completing the notification setup

-   In the “Notification settings” window, specify:
    
-   Notification name
    
-   Object
    
-   Notification type: Control room (GARM)
    

-   [Group](kak-nastroit-parametry-sobytij.html#группы_событий)
    
-   Notification conditions (for example, the “Temperature” parameter and its threshold)
    

**![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_6.png)**

2\. Click “Save”

**![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_16.png)**

3\. The notification with the linked algorithm appears in the list and is sent to the “Control room” when the conditions are met

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_17.png)

## Algorithm for manual event generation

Manual generation is needed when an event does not arrive automatically, for example, for non-routine situations, testing, or an operator recording an event manually.

### How to create a notification for manual generation

1\. Open [“Contract settings”](../../nastrojki-dogovora-2/index.html) and select the “Notifications” tab

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. On the “Notifications” tab, click ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

3\. In the notification settings, specify:

![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_7.png)

1 — Notification type “Control room” (GARM)

2 — Notification for manual generation only

-   Object
    
-   Notification name
    
-   Notification type: Control room (GARM)
    
-   Group
    
-   The “Manual generation only” check box
    
    4\. Click “Algorithm linking”
    
    5\. In the algorithms window that opens, select the one you want to link to the notification and click “OK”
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

5\. Save the notification

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_18.png)

### How to generate an event manually

1\. Select the object in the main list

2\. Right-click it and select “Generate event”

![How to link an algorithm to a notification](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_8.png)

3\. Select the notification type for manual generation and enter the event text

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_19.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_20.png)

4\. The event appears on the “Control room” [panel](kak-obrabotat-sobytie.html#Панель_Control_room) and is processed according to the algorithm
