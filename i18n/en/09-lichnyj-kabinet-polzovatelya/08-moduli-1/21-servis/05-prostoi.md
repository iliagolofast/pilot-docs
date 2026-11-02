---
title: "Downtime"
---

Downtime is the time when a vehicle is temporarily not in use. For example, when it is undergoing maintenance or repair.

The “Downtime” tab displays all records of vehicle downtime periods.

### ![](images/drex_prostoi_custom.png)

## Working with the downtime list

In the upper-right corner of the “Downtime” tab there are buttons for managing the list:

![](images/drex_prostoi_custom_2.png)Export — export downtime records to a file

![](images/drex_prostoi_custom_3.png)Import — load downtime records from a file

![](images/drex_prostoi_custom_4.png)Filter — select records by values in the columns

![](images/drex_prostoi_custom_5.png)Refresh — reload the data and update the list

### ![](images/drex_prostoi_custom_6.png)

### How to filter records

Click “Filter”. Fields appear under the table headers where you can set selection conditions:

-   Object — enter the name or number of the vehicle
    
-   Start and End — select the date and time
    
-   Duration — specify the downtime duration
    
-   Duration for the current year — specify the total duration of downtime
    
-   Downtime reason — enter text from the reason description
    

![](images/drex_prostoi_custom_7.png)

You can fill in one or several fields. The table keeps only the records that match all the specified conditions.

For example, to find the downtime of a specific vehicle, enter its name or number in the field under the “Object” column. To reset filtering, delete the entered values.

![](images/drex_prostoi_custom_8.png)

## How to create a downtime record

-   On the “Downtime” tab, click ![](images/drex_prostoi_custom_9.png)
    
-   In the new window:
    

![](images/drex_prostoi_custom_10.png)

-   Select the object that is currently in downtime
    
-   Specify the downtime reason
    
-   Select the start and end date and time of the downtime using the calendar
    

![](images/drex_prostoi_custom_11.png)

3\. Click “Save” — the downtime record appears in the general list

![](images/drex_prostoi_custom_12.png)

### How to edit or delete a downtime record

To edit, double-click the record in the list, change the data, and save.

To delete, click the icon ![](images/drex_prostoi_custom_13.png) next to the record.

## How downtime is displayed

When you create a downtime record for a vehicle because of maintenance, a special icon ![](images/drex_prostoi_custom_14.png) appears next to the object on the “Online” tab, and its status changes to “Downtime” and is highlighted in yellow.

![](images/drex_prostoi_custom_15.png)

Click the icon to open information about the maintenance period — you immediately see for which period the downtime is scheduled.

![](images/drex_prostoi_custom_16.png)

### Object behavior during downtime

-   If the downtime has already started
    
    The object status automatically changes to “Downtime”, and it is excluded from the problems and alarms block. This helps avoid overloading operational monitoring with unnecessary events.
    
-   If the downtime is scheduled for the future
    
    Only the icon is displayed, and the object status does not change until the downtime begins.
    

![](images/drex_prostoi_custom_17.png)

## How to add downtime through the object menu

1\. Go to the “Online” tab

2\. Select the object you need in the list

3\. Right-click it to open the context menu

4\. Select “Add downtime”

![](images/drex_prostoi_custom_18.png)

After that, the object gets a downtime record and a wrench icon.

![](images/drex_prostoi_custom_19.png)

### How to remove downtime

1\. Right-click the object

2\. In the context menu, select “Delete downtime”

3\. Confirm the action

![](images/drex_prostoi_custom_20.png)
