---
title: "Basic object settings"
---

The “Main” tab contains information about the vehicle and the parameters of the connected hardware.

To [add](../kak-dobavit-obekt-1.html) an object, fill in the required fields. You can add the remaining data right away or later when editing the card.

![](images/drex_osnovnye_nastrojki_obekta_custom.png)

After the object is saved, the top of the tab shows:

-   the object ID
    
-   the account ID
    
-   mileage — if its value is configured on the “Info” tab
    
-   engine hours — if their value is configured on the “Info” tab
    
-   the object image — the standard image of the selected make, model, and modification, or a photo you uploaded
    

![](images/drex_osnovnye_nastrojki_obekta_custom_2.png)

## Object information

**Vehicle number**

Enter the number or a descriptive name for the object. It is displayed in the object list, on the map, and in reports.

**Vehicle type and color**

Select the vehicle type, for example a passenger car, a truck, or special equipment. The system uses the corresponding icon in the object list and on the map. Next to it you can select the color used to display it.

![](images/drex_osnovnye_nastrojki_obekta_custom_3.png)

**Group**

Select the folder where the object is placed in the object tree. Creating and configuring groups is described in the article [“Object list”](../spisok-obektov.html#группы_объектов).

![](images/drex_osnovnye_nastrojki_obekta_custom_4.png)

**Make**

Select the vehicle manufacturer.

**Model**

Select a model from the list. The list of available models depends on the selected make.

**Modification**

If necessary, select a specific version of the model, for example a variant with a particular body type, engine, or year of manufacture.

After you select the make and model, the system automatically adds the standard image of the vehicle.

![](images/drex_osnovnye_nastrojki_obekta_custom_5.png)

**Template**

Select a ready-made set of settings for the object, for example a [sensor template](../../datchiki-1/shablony-datchikov.html) or an [eco-driving](../../moduli-1/ehkodrajving-kachestvo-vozhdeniya/shablony-pravil.html) template. Use the template that matches the installed hardware and the purpose of the vehicle.

**Description**

Add information that may be needed when working with the object: department, purpose, operating specifics, or other additional information.

**Device tags**

Assign tags for additional classification and quick search of objects. Creating tags is described in the article [“Object tags”](../../nastrojki-dogovora-2/tegi-obektov.html).

### Object photo

On the “Main” tab you can add a photo of the vehicle:

1\. Click the camera icon ![](images/drex_osnovnye_nastrojki_obekta_custom_6.png) next to the image

![](images/drex_osnovnye_nastrojki_obekta_custom_7.png)

2\. Select a file on your computer and upload the photo

![](images/drex_osnovnye_nastrojki_obekta_custom_8.png)

3\. Turn on the toggle ![](images/drex_osnovnye_nastrojki_obekta_custom_9.png) next to the photo if you want to show it instead of the standard vehicle icon

The photo is displayed in the object list and on the map. If the toggle is off, the system keeps using the standard icon of the selected vehicle type.

![](images/drex_osnovnye_nastrojki_obekta_custom_10.png)

To delete the uploaded photo, click the trash can icon ![](images/drex_osnovnye_nastrojki_obekta_custom_11.png) next to the image. 

## Device and connection

This block configures the main telematics hardware of the object.

![](images/drex_osnovnye_nastrojki_obekta_custom_12.png)

**Device type**

Select the model of the GPS tracker or other terminal installed on the vehicle. The selected type determines how incoming data is processed and the connection parameters.

If the model you need is not in the list, contact technical support.

**Device ID/IMEI**

Enter the unique identifier of the main terminal. It can be an ID, a serial number, or an IMEI — it is usually printed on the device body, the packaging, or in the manufacturer's documentation.

PILOT uses this value to determine which object the incoming data belongs to.

A lock icon ![](images/drex_osnovnye_nastrojki_obekta_custom_13.png) is displayed next to the “Device ID/IMEI” field. It protects the identifier from accidental changes. To edit the value, click the lock — the field becomes available for input.

**Additional devices**

You can link other installed hardware to the object, for example an additional tracker or a video device:

1\. Click the edit icon ![](images/drex_osnovnye_nastrojki_obekta_custom_14.png) in the “Additional devices” (Additional Devices) field

2\. In the window that opens, click “Add”

![](images/drex_osnovnye_nastrojki_obekta_custom_15.png)

3\. Enter the IMEI — the unique identifier of the additional device

4\. Select the device type

5\. Click “Save”

The additional device settings include service parameters:

-   Ignore Coord — do not use the additional device's coordinates to determine the object's position
    
-   Ignore Retrans — do not forward the additional device's data through the configured retransmission channels
    

Enable these parameters only if the connection scheme requires it. If you are not sure about the setting, contact your administrator or technical support.

**Server and port**

After you select the device type, PILOT automatically shows the server address and port the terminal must send data to.

Click the copy icon ![](images/drex_osnovnye_nastrojki_obekta_custom_16.png) next to the field to copy the value and use it when configuring the hardware. The field is filled in by the system and cannot be edited manually.

**Time zone**

Select the time zone the object operates in. It is used to display time correctly in history, events, and reports.

**Packet time offset**

Specify the difference in hours if the device transmits time in a format other than GMT. The default value is 0. Change the offset only if the time of the device's messages differs from the actual time.

## Availability of settings

The set and availability of fields depend on the user's rights. For the “User” role:

— the “Device type” field is not available for viewing

— mileage, engine hours, and packet time offset may be available for viewing only

To change parameters that are not available, contact a user with master or administrator rights.
