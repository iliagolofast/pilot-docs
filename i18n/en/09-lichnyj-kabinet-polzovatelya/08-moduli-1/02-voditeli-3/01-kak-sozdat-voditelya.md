---
title: "How to create a driver"
---

To add a new driver, go to the “Drivers” tab in the “Main” section.

![How to create a driver](images/drex_kak_sozdat_voditelya__screen.png)

1\. Click “Add driver”

2\. The driver card opens, where you need to fill in the data. The driver card has two tabs: “Main” and “Vehicle”

![](images/drex_kak_sozdat_voditelya__custom.png)

## “Main” tab

This is where you enter the driver’s personal data:

![](images/drex_kak_sozdat_voditelya__custom_2.png)

-   Driver name: full name or the name that will be displayed in the system
    
-   Date of birth
    
-   Gender
    
-   Driving start date
    
-   Driver’s license: number and expiration date
    
-   iButton: authentication key (if driver identification is used). For example, the iButton field is used to automatically [identify the driver by face ID](opredelenie-voditelya-po-face-id.html) received from a Mettax camera
    
-   Email: email address
    
-   Phone: contact number
    
-   Group: the group the driver belongs to
    
-   Description: any additional information
    
-   For all users: if selected, the driver becomes available to all users of the system
    
-   Labels: tags for searching and grouping drivers
    
-   Photo: the driver’s photo. To upload a photo, click the icon ![](images/drex_kak_sozdat_voditelya__custom_3.png) under the image. The icon becomes available after the card is saved for the first time.
    

![How to create a driver](images/drex_kak_sozdat_voditelya__screen_2.png)

After filling in the data, click “Save”.

## “Vehicle” tab

On this tab you can:

— assign the driver to a vehicle

— configure access to objects

— enable or disable alerts

![](images/drex_kak_sozdat_voditelya__custom_4.png)

### Assigning a driver to a vehicle

1\. Select the “Assign driver to vehicle” check box

After that, the “Object” and “Date” fields become active.

![How to create a driver](images/drex_kak_sozdat_voditelya__screen_3.png)

2\. In the “Object” field, select the vehicle the driver will be assigned to

3\. Specify the date and time from which the assignment takes effect

![How to create a driver](images/drex_kak_sozdat_voditelya__screen_4.png)

If a driver is already assigned to a vehicle, they are not unassigned automatically. The system can have several drivers for one vehicle at the same time. This is designed for real-life scenarios, for example, when two drivers work in one vehicle or drivers change by shift or on the road.

If you need a vehicle to have only one active driver at all times, enable the [Single\_Driver](../../../panel-administratora/dogovor/konfiguratsiya/spravochnik-konfiguratsij.html) configuration in the contract in the admin panel.

![](images/drex_kak_sozdat_voditelya__custom_5.png)

In this mode, when a new driver is assigned, the previous one is automatically unassigned. The system will not have two active sessions for one vehicle.

If the driver uses an iButton, all previous drivers are automatically unassigned when the new driver authorizes.

### Show history

The [“Show history”](istoriya-voditelej.html#через_карточку_водителя) button opens a window with the driver’s work history:

— which objects the driver worked on

— during which periods the vehicle changed

![How to create a driver](images/drex_kak_sozdat_voditelya__screen_5.png)

### Access to objects

The “Access to objects” field lets you select which objects the driver will have access to in the system.

![](images/drex_kak_sozdat_voditelya__custom_6.png)

If you select objects, access is limited to those specific objects; if you leave the field empty, access is open to all objects.

### Alerts

If you enable the “Send alerts” option, the system sends notifications related to this driver.

If you disable the option, such notifications are not sent.

![How to create a driver](images/drex_kak_sozdat_voditelya__screen_6.png)

### Finishing work with the card

After configuring all parameters, click “Save” to apply the changes.

The “Delete” button removes the driver card from the system completely.

## “Files” tab

After the card is saved for the first time, the “Files” tab appears.

![](images/drex_kak_sozdat_voditelya__custom_7.png)

You can store the driver’s documents there, for example:

— driver’s license

— medical certificates

— contracts

— other files

### How to add a file

1\. Click the button ![](images/drex_kak_sozdat_voditelya__custom_8.png)

2\. In the window that opens:

— enter a description of the file

— click “Choose file” and upload a file from your device

![](images/drex_kak_sozdat_voditelya__custom_9.png)

3\. Click “Save”.

The file then appears in the list on the “Files” tab.

![](images/drex_kak_sozdat_voditelya__custom_10.png)

### Working with files

To download a file, click it in the “File” column.

To delete a file, click the trash icon next to it.

After adding or deleting files, do not forget to click “Save” in the driver card to apply the changes.
