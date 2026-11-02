---
title: "How to manage RFID tags"
---

In the “RFID tags” module, you can add and edit tags, combine them into groups, search for the records you need, and load data from Excel.

## How to add an RFID tag

To create a new RFID tag:

1\. Go to the “RFID tags” tab

![](images/drex_kak_upravlyat_rfid_metkami_custom.png)

2\. Click the “Add” button ![](images/drex_kak_upravlyat_rfid_metkami_custom_2.png)

![How to manage RFID tags](images/drex_kak_upravlyat_rfid_metkami_screen.png)

The RFID tag creation card opens.

![](images/drex_kak_upravlyat_rfid_metkami_custom_3.png)

Fill in the required fields:

-   ID — the unique identifier of the RFID tag. It is usually entered manually, using the identifier that the RFID reader transmits when it reads the tag. In some cases, the ID may be assigned automatically after the hardware reads the RFID tag for the first time.
    
-   Name — the name of the RFID tag under which it will be displayed in the system
    
-   Group — the group the tag belongs to
    
-   Description — additional information about the tag
    
-   Latitude and longitude  — approximate coordinates of the RFID tag location. For example, if the RFID tag is attached to a container site, a checkpoint, or another stationary object, you can save its coordinates in the system
    
-   Fixed tag — enable this parameter if the tag is in a permanent location and does not move. A stationary RFID tag can be linked [to a geofence](../geozony-2/privyazka-rfid-metki-k-geozone.html), [to a route point](../marshruty-3/kak-sozdat-marshrut.html#Как_привязать_RFID_/_BLE-метку_к_точке_маршрута), or [to a bus stop](../rejsy-2/kak-dobavit-ostanovki.html#Как_привязать_RFID-метку_к_остановке). In this case, PILOT will take the tag read into account when determining visits to these zones
    
    3\. Click “Save”. After saving, the tag appears in the general list
    

![](images/drex_kak_upravlyat_rfid_metkami_custom_4.png)

## How to create an RFID tag group

If the group you need does not exist in the system yet, you can create it when adding or editing a tag.

1\. In the “Group” field, enter the name of the new group

![](images/drex_kak_upravlyat_rfid_metkami_custom_5.png)

2\. Fill in the other tag parameters

3\. Click “Save”

![](images/drex_kak_upravlyat_rfid_metkami_custom_6.png)

The new group is created automatically and becomes available when you add subsequent RFID tags.

## How to edit an RFID tag

1\. Double-click the tag in the list

2\. Change the required parameters

3\. Click “Save”

![](images/drex_kak_upravlyat_rfid_metkami_custom_7.png)

## How to find an RFID tag

To search, use the group filter or the search bar.

![How to manage RFID tags](images/drex_kak_upravlyat_rfid_metkami_screen_2.png)

1 — Search by group

Select a group above the list. After you select it, the table is updated and only the records that belong to this group remain.

2 — Search by name or ID

Enter a known value in the search bar. Only the records that match the query remain in the list.

To show all tags again, clear the search bar.

## Toolbar commands

The top panel of the module provides commands for creating, updating, importing, exporting, and displaying RFID tags.

![How to manage RFID tags](images/drex_kak_upravlyat_rfid_metkami_screen_3.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_8.png) Add — create an RFID tag

![](images/drex_kak_upravlyat_rfid_metkami_custom_9.png) Export to Excel — save the tag list to an XLSX file

![](images/drex_kak_upravlyat_rfid_metkami_custom_10.png) Import from Excel — load RFID tags from an XLSX file to add or update the tag list. Before importing, make sure the file structure matches the Excel template

![](images/drex_kak_upravlyat_rfid_metkami_custom_11.png) Download Excel template — download a file template for importing RFID tags. Fill in the required fields in the template and save the file, then use “Import from Excel” and upload the completed file

![](images/drex_kak_upravlyat_rfid_metkami_custom_12.png) Refresh — refresh the RFID tag list without reloading the page

![](images/drex_kak_upravlyat_rfid_metkami_custom_13.png) Icon color settings —  [configure the color display of RFID tags](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_настроить_цвет_маркера) on the map depending on when the latest data was received

![](images/drex_kak_upravlyat_rfid_metkami_custom_14.png) Show on map — display the selected RFID tags on the map. Before using it, select one or more tags in the list

![](images/drex_kak_upravlyat_rfid_metkami_custom_15.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_16.png)  Clear map — remove all displayed RFID tags from the map

## RFID tag actions

Additional actions are available for RFID tags in the list.

![How to manage RFID tags](images/drex_kak_upravlyat_rfid_metkami_screen_4.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_17.png) Show on map —  view the last known location of the RFID tag on the map

![](images/drex_kak_upravlyat_rfid_metkami_custom_18.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_19.png)  Tag history — view the usage history of the RFID tag

![](images/drex_kak_upravlyat_rfid_metkami_custom_20.png)

![](images/drex_kak_upravlyat_rfid_metkami_custom_21.png) Delete tag — delete the RFID tag from the system
