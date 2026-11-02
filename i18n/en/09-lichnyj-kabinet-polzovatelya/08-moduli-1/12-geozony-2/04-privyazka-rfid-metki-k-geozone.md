---
title: "Linking an RFID tag to a geofence"
---

A stationary RFID tag can be linked to a geofence. PILOT takes its read into account when determining a visit and records the event even when the object's GPS coordinates are temporarily inaccurate.

RFID tag management is available if:

— you have administrator rights

—  the [RFID tags module](../rfid-metki-2/index.html) is connected for the account

— the geofence belongs to the account and is available for editing

## How to prepare an RFID tag

Before linking, add the RFID tag to the system:

1\. Open the “Main” section and go to the “RFID tags” tab

2\. Create a [new](../rfid-metki-2/kak-podgotovit-rfid-metki-k-rabote.html) tag or edit an existing one

![](images/drex_privyazka_rfid_metki_k_geozone_custom.png)

3\. Specify the tag ID. It must match the identifier transmitted by the RFID reader

![Linking an RFID tag to a geofence](images/drex_privyazka_rfid_metki_k_geozone_screen.png)

4\. Specify the latitude and longitude. The tag coordinates must be inside the geofence you want to link it to

5\. Enable the “Fixed tag” parameter

![Linking an RFID tag to a geofence](images/drex_privyazka_rfid_metki_k_geozone_screen_2.png)

6\. Click “Save”

If the tag coordinates are outside the geofence, PILOT does not allow linking. In this case, check the tag coordinates or the geofence boundaries.

## How to link an RFID tag

-   Open the “Main” section and go to the “Geofences” tab
    

2\. Select the check box next to the geofence you need to display it on the map

![](images/drex_privyazka_rfid_metki_k_geozone_custom_2.png)

3\. Make sure the RFID tag is inside the geofence

![](images/drex_privyazka_rfid_metki_k_geozone_custom_3.png)

4\. Right-click the geofence and select “Manage RFID tags”

![](images/drex_privyazka_rfid_metki_k_geozone_custom_4.png)

5\. Find the tag you need and select it in the link column.

To search for a tag by name or identifier, use the “Search” field.

![](images/drex_privyazka_rfid_metki_k_geozone_custom_5.png)

To show only the tags already linked to the selected geofence, click “Linked”

![Linking an RFID tag to a geofence](images/drex_privyazka_rfid_metki_k_geozone_screen_3.png)

6\. Click “Save”

The RFID tag is linked to the geofence. If the tag coordinates are outside it, PILOT does not allow linking.

## How a visit is determined

When an object detects an RFID tag linked to a geofence, PILOT takes this read into account regardless of the current GPS coordinates. Therefore, a visit can be recorded even if, according to GPS data, the object is outside the geofence.

A geofence visit is the period between entry and exit, not each individual tag read.

An exit is recorded when both conditions are met:

— the object no longer detects the linked RFID tag

— according to GPS data, the object is outside the geofence

Therefore, several RFID tag reads do not always create several visits. For example, if an object moved away from the tag and then detected it again, but according to GPS stayed inside the geofence all this time, the current visit does not end.

## How to view tag details on the map

Click the RFID tag on the map to open a tooltip.

![](images/drex_privyazka_rfid_metki_k_geozone_custom_6.png)

The tooltip shows:

-   the date and time of the last read
    
-   the tag name
    
-   the tag identifier
    
-   coordinates
    
-   the address
    

The tooltip header shows the object that last detected the RFID tag. If the tag has never been read, there is no object information.
