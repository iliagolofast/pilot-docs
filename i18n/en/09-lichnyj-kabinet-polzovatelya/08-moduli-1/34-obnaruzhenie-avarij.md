---
title: "Accident detection"
---

The accident detection module shows and processes “accident” events received from the vehicle.

### What the module consists of

-   Notification settings — enabling the “Accident detection” Notification type in the “Contract settings”
    
-   Event display in History — accident Events are saved in History and displayed on the Map and in charts
    

## How to enable Notifications

1\. Go to the “Contract settings”

2\. Open the “Notifications” tab

![](images/drex_obnaruzhenie_avarij_custom.png)

3\. Click ![](images/drex_obnaruzhenie_avarij_custom_2.png)

4\. In the list of Notification types, enable “Accident detection”

![](images/drex_obnaruzhenie_avarij_custom_3.png)  
5\. Click “Save”

Once enabled, the system will monitor incoming Crash tags from the vehicle and send Notifications

### How Notifications are sent

When an accident signal (a Crash tag) arrives from the vehicle, the system checks it:

— if the data can be decoded (Crash\_id), you will see the details in the Notification

— if decoding is not possible, a standard message arrives: "Crash detected!"

<table><tbody><tr><td><span></span></td><td><div>After an accident, the device may send the same Crash tag many times. So that you do not receive a stream of identical Notifications:</div><div>1. The system reacts only to the&nbsp;first signal&nbsp;and sends a Notification</div><div>2. Repeated signals are ignored until the first “clean” point without the accident tag arrives</div><div>3. If a new Crash tag arrives after that, you will receive a new Notification</div><div>This way you get only one Notification per accident, not a stream of repeats.</div></td></tr></tbody></table>

##  Accident history

To find and view an accident Event:

-   Go to the [“History”](../istoriya/index.html) section
    

<table><tbody><tr><td><span></span></td><td><div>For accident Events to be displayed in <span>“History”</span>, enable them in “Contract settings” → “Map and geocoding” tab → “<a href="../nastrojki-dogovora-2/karta-i-geokoding.html#отображение_событий"><span>Displaying events on the map</span></a>” section → “Accident detection” event</div><div><img alt="" src="images/drex_obnaruzhenie_avarij_custom_4.png" data-full-src="drex_obnaruzhenie_avarij_custom_4.png" data-full-width="1200" data-full-height="540"></div></td></tr></tbody></table>

2\. Select the dates of the suspected accident

3\. Select the History Tracks

4\. Open the “Events” tab in “History”

![](images/drex_obnaruzhenie_avarij_custom_5.png)

5\. Find the Event address on the Map — it will be marked with a marker

![](images/drex_obnaruzhenie_avarij_custom_6.png)

6\. Click the marker to see the Event chart

![](images/drex_obnaruzhenie_avarij_custom_7.png)

### What the chart shows

The chart shows how the loads on the vehicle changed during the accident. The data comes from the accelerometer — a device that records acceleration and sudden changes in motion.

The chart has three lines:

-   Blue (X) — forward and backward movement of the vehicle (for example, acceleration, hard braking or a frontal impact).
    
-   Purple (Y) — movement to the right and left (for example, a side impact or a sharp turn).
    
-   Green (Z) — movement up and down (for example, hitting an obstacle, a bump or an impact from below).
    

Sharp peaks and dips are the moment of impact. You can use them to see the nature of the collision: frontal, side or combined.

-   Y axis (vertical) — shows the strength of acceleration / deceleration (in arbitrary accelerometer units)
    
-   X axis (horizontal) — time (in milliseconds)
    
    ### What you can see on the chart
    

![](images/drex_obnaruzhenie_avarij_custom_8.png)

In this example, before the accident the lines fluctuate around 0 — the vehicle is moving smoothly, without sharp acceleration.

In the center there is a sharp dip downward (blue X and purple Y) — this is the moment of collision: strong braking with a lateral shift component.

After the impact the lines return closer to zero, but a slight “ripple” remains — these are oscillations after the collision.
