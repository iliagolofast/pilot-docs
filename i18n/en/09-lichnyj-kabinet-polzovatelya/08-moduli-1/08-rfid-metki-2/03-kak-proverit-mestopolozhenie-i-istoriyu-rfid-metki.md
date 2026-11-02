---
title: "How to check the location and history of an RFID tag"
---

In the “RFID tags” module, you can check the last read, show a tag on the map, and view its usage history.

## How to check the last read

When a vehicle detects an RFID tag, PILOT automatically updates the information in its row.

![How to check the location and history of an RFID tag](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_screen.png)

The list shows:

1 — Updated: the date and time of the last information update

2 — Last update: how much time has passed since the read

3 — Vehicle: the monitoring object that last read the tag

The vehicle appears in the row after the tag has actually been read. Physical contact between the reader and the tag is not required. It is enough for the tag to be within range of the hardware.

## How to show one tag on the map

1\. Find the actions menu in the tag row

![How to check the location and history of an RFID tag](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_screen_2.png)

2\. Select “Show on map”![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom.png)

The map moves to the last known location of the tag and shows a marker.

![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_2.png)

Click the marker to open a tooltip. It shows:

— the date and time of the last update

— the tag name

— the tag ID

— coordinates, which you can copy

— the address

To close the tooltip, click the cross in its upper-right corner or select another marker.

## How to show several tags

1\. Select one or more tags in the list

2\. On the toolbar, click “Show on map” ![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom.png)

![How to check the location and history of an RFID tag](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_screen_3.png)

Markers for the selected tags appear on the map.

![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_3.png)

To remove all markers, click “Clear map” ![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_4.png).

## How to view the history of an RFID tag

1\. Open the actions menu in the tag row

![How to check the location and history of an RFID tag](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_screen_2.png)

2\. Select “Tag history” ![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_5.png)

![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_6.png)

For each read, the following are displayed:

— the vehicle that read the tag

— date and time

— the coordinates of the read

## How to configure the marker color

The marker color shows how much time has passed since the latest data was received.

![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_7.png)

The following rules apply by default:

— green — data was received no more than four hours ago

— red — more than four hours have passed since data was received

**![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_8.png)**

The color helps you quickly spot tags whose information has not been updated for a long time.

To configure marker colors:

1\. Click “Icon color settings” ![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_9.png) on the toolbar

![How to check the location and history of an RFID tag](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_screen_4.png)

2\. In the “RFID tag icon colors” window, click ![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_10.png)

![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_11.png)

3\. Add a rule and specify for it:

— the icon color

— the comparison condition

— the time in hours

![](images/drex_kak_proverit_mestopolozhenie_i_istoriyu_rfid_metki_custom_11.png)

4\. Click “Save” — the rules are applied
