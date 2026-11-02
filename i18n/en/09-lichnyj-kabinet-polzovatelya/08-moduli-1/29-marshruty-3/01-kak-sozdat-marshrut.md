---
title: "How to create a route"
---

To create a route in the system, you need to fill in the main parameters in the builder and add route points that will be displayed on the map. In this article we explain how to create a route and set its parameters so that the route is ready for use in the system.

## How to create a route

1\. Go to the “Routes” tab

![](images/drex_kak_sozdat_marshrut___custom.png)

2\. Click the button ![](images/drex_kak_sozdat_marshrut___custom_2.png) — the “Build route” form opens

![How to create a route  ](images/drex_kak_sozdat_marshrut___screen.png)

3\. Fill in the route parameters

![](images/drex_kak_sozdat_marshrut___custom_3.png)

### Main settings

1\. Name

Enter a clear route name, for example: “Route No. 5”, “Downtown delivery”, “Warehouse — Customer”.

2\. Detection range (km)

This parameter defines how far from the route line a vehicle is still considered to be on the route.

Simply put, the system creates a “corridor” around the route. For example, if you enter 0.3 km, this means 300 meters on each side of the route line.

As long as the vehicle moves inside this corridor, the system considers that it follows the route. If it leaves the corridor, a deviation from the route is recorded.

The value can be a fraction (for example, 0.3).  A value that is too small (for example, 0.05 km) can cause false triggers because of GPS error. A value that is too large (for example, 5 km) will count serious detours as part of the route.

3\. Geocoder

Select the service that automatically fills in the address from the coordinates of route points.

### Control time

This is the planned time for completing the entire route.

For example, if the route usually takes 2 hours 30 minutes, enter 2 hours and 30 minutes.

This value is used in reports:

— to compare plan and actual

— to see whether the driver meets the standard

### Route completion percentage

This parameter defines what percentage of points must be visited for the route to be considered completed.

For example, if 10 points are set and the percentage is 90%, the driver can skip one point and the route is still considered completed. This allows for force majeure on the road — for example, an accident or a traffic jam when the driver has to bypass part of the route.

-   “Active” check box
    

If you want the percentage rule to actually apply:

1\. Enter the required percentage (for example, 80)

2\. Check the “Active” box

3\. Save the route builder

## How to add route points

A route point is a checkpoint where the passage of a vehicle is recorded.

1\. Go to the “Points” section below the route settings

2\. Click the button ![](images/drex_kak_sozdat_marshrut___custom_2.png)

3\. Select the place on the map or enter the address manually. The point appears on the map

![](images/drex_kak_sozdat_marshrut___custom_4.png)

4\. If needed, drag the marker to the exact place

On the map, a point is shown as an icon with a number surrounded by a circle — the detection radius. This radius, which looks like a red dashed line on the map, determines when a vehicle has entered or left the checkpoint. If the vehicle enters the point radius, the system records the visit.

![](images/drex_kak_sozdat_marshrut___custom_5.png)

To change the point radius, click it with the left mouse button and drag it to the size you need.

The radius affects detection accuracy: the larger it is, the greater the allowed error in detecting a visit. A radius that is too large may count an arrival before the vehicle actually stops, and one that is too small may cause a point to be missed.

If the vehicle did not cross the checkpoint radius, the system does not record its visit — this is counted as a deviation from the route.

5\. Repeat the process for the other route points and click “Save”

If you add two or more points, the system automatically builds a route between them.

![](images/drex_kak_sozdat_marshrut___custom_6.png)

### How to link an RFID / BLE tag to a route point

A BLE tag is a small physical device (Bluetooth Low Energy) installed at a specific place, for example at a terminal stop or on a customer's premises.

When a vehicle approaches this point, the tracker detects the tag and sends its unique identifier (the IButton parameter) to the system.

Why this is needed:

— if GPS is unstable or jammed

— if accurate recording of arrival at a specific place is important

— if you need route completion to be counted correctly

<table><tbody><tr><td><span></span></td><td><div>Tags can be linked to route points only when the <a href="../rfid-metki-2/index.html"><span>RFID tags</span></a> module is enabled. First you need to set up the tags in this module. To learn how to create a tag, read this <a href="../rfid-metki-2/kak-podgotovit-rfid-metki-k-rabote.html"><span>article</span></a>.</div></td></tr></tbody></table>

If you use BLE tags:

1\. Open the route

2\. Select a specific point

![](images/drex_kak_sozdat_marshrut___custom_6.png)

3\. Click the tag icon next to the point you need  ![](images/drex_kak_sozdat_marshrut___custom_7.png)

4\. In the window that opens, select the tag you need and link it to the point

The tag must be within the point radius.

![](images/drex_kak_sozdat_marshrut___custom_8.png)

5\. Click “Save”

You can link several tags to one point.

![](images/drex_kak_sozdat_marshrut___custom_9.png)

After linking the tag to the point, save the route.

When a vehicle drives the route, the system works as follows:

1\. Checks whether a BLE tag is linked to the point

2\. Looks for an IButton event within ±5 minutes of the passage time

3\. If a tag is detected — the point visit is recorded via BLE

4\. If no tag is detected — the standard GPS geofence check is used

This way, even if GPS is unstable, the route is counted correctly — based on the actual arrival at the point.

## How to view or edit a route

1\. Go to the “Routes” tab

2\. Find the route you need

3\. Right-click it

![](images/drex_kak_sozdat_marshrut___custom_10.png)

4\. Select “Edit”

5\. The route builder opens, where you can make changes or just view the settings

![](images/drex_kak_sozdat_marshrut___custom_11.png)
