---
title: "Violation control"
---

The “Violation control” module automatically tracks speeding by a vehicle.

While the vehicle is moving, the system compares its actual speed with the speed allowed on the current road section. If the speed exceeds the allowed value by more than the set threshold, the system registers a speed violation.

## How to configure violation control

1\. Open the object card — double-click the object in the object list

![](images/drex_kontrol_narushenij__custom.png)

2\. Go to the “Violation control” tab

![](images/drex_kontrol_narushenij__custom_2.png)

3.  Select the “Speed violation” check box to enable speeding control

![](images/drex_kontrol_narushenij__custom_3.png)

4\. Set a value in the “Allowed speed excess threshold” field

5.  If necessary, select the “Send alerts” check box to receive notifications about registered violations

![](images/drex_kontrol_narushenij__custom_4.png)

6\. Click “Save”

After saving, the system starts tracking speeding according to the specified settings.

## Configuration parameters

### Speed violations

Enables or disables speeding control for the selected object.

If the check box is selected, the system tracks the driving speed and records violations according to the specified settings.

![Violation control ](images/drex_kontrol_narushenij__screen.png)

### Allowed speed excess threshold

Determines by how much the vehicle's speed must exceed the allowed speed on the road for the system to register a violation.

![Violation control ](images/drex_kontrol_narushenij__screen_2.png)

For example, if:

-   the allowed speed on the road section is 80 km/h;
    
-   the set threshold is 20 km/h,
    

a violation is registered only when the vehicle's speed exceeds 100 km/h.

### Send alerts

If you select this check box, the system sends a notification each time a violation is registered.

Data on recorded speed violations is available in the [“Events”](sobytiya.html) module

![Violation control ](images/drex_kontrol_narushenij__screen_3.png)

## Speed limits

When detecting speeding, the system uses the speed limits for each road section.

By default, this data is taken from the OpenStreetMap (OSM) mapping service. The system stores an allowed speed value for each road type, which is used when calculating violations.

If necessary, these values can be changed. To do so, click “Change speed limit values”.

![Violation control ](images/drex_kontrol_narushenij__screen_4.png)

A table of speed limits for various road types and vehicle categories opens.

![](images/drex_kontrol_narushenij__custom_5.png)

The first column shows the road types used by OpenStreetMap. The names are displayed as internal OSM identifiers. For example: AT:rural — rural roads in Austria,  DE:urban — urban roads in Germany, bus\_guideway — a road intended for bus traffic.

For each road type, you can set separate speed limits for different vehicle categories:

-   General — the default value
    
-   Trucks — for trucks
    
-   Buses — for buses
    
-   Passenger cars — for passenger cars
    

If a vehicle category has its own value set, the system uses exactly that value when detecting a violation.

### How to change a speed limit

1\. Click “Change speed limit values”

![Violation control ](images/drex_kontrol_narushenij__screen_4.png)

2\. Find the road type you need

![](images/drex_kontrol_narushenij__custom_5.png)

3\. Double-click the cell with the vehicle category you need

![](images/drex_kontrol_narushenij__custom_6.png)

4\. Enter the new speed limit value.

5\. Click “Save”

6\. Close the window and click “Save” in the object card
