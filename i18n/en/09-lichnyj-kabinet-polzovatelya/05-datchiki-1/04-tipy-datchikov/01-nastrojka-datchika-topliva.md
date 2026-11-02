---
title: "Setting up the fuel sensor"
---

The fuel sensor in the system has many parameters. Here we look at how to configure it correctly to get accurate data and record refuel and fuel drain events properly.

![](images/drex_nastrojka_datchika_topliva_custom.png)

### General sensor settings

-   Purpose — the sensor type in the system
    
-   Type — the sensor's operating principle, for example “Discrete”
    
-   Name — the internal name of the sensor shown in the interface
    
-   Field — the hardware input of the tracker the sensor is connected to
    
-   Description — additional information about the sensor
    
-   Units of measurement — usually liters (“l.”)
    
-   Conversion formula — if you need to correct the data
    
-   Tags — labels for convenient search and filtering of sensors
    

### Detecting refuels and fuel drains

To determine refuels and fuel drains correctly, the filtering parameters and trigger thresholds must be configured properly in the system. This helps exclude false events and improve data accuracy.

-   The “Active” switch — turns the analysis of refuels and fuel drains by this sensor on or off.
    
    For fuel sensors: all enabled sensors of the object are first summed to obtain the total volume of fuel in the vehicle, and only then are events searched for in the sum. If turned off, the sensor works as a regular one, without searching for refuels and fuel drains.
    

### Drain through the return line

The “Drain through the return line” function helps detect hidden theft through the return line — the fuel line through which unused fuel returns to the tank.

![](images/drex_nastrojka_datchika_topliva_custom_2.png)

After the function is enabled, the system analyzes abnormal fuel consumption while driving, calculates the volume of a possible drain, and marks the place of the event on the map.

### Trigger thresholds

-   Refuel threshold — the minimum increase in fuel level that the system considers a refuel
    
-   Fuel drain threshold — the minimum decrease in fuel level that is recorded as a fuel drain
    

These parameters help to:

— ignore minor fluctuations in fuel level

— exclude sensor noise

— record only real events

### Driving speed filter

The speed filter is used to exclude false events while driving.

For example:

— fuel consumption on the road is not detected as a fuel drain

— fluctuations in fuel level are not counted as a refuel

The system analyzes the object's speed at the time of the event and, depending on the selected mode, can ignore points with high speed.

-   Maximum speed for detection (event search) — the speed in km/h below which the vehicle is considered stationary
    
-   Speed mode  — how exactly to check the speed within an event
    
    Speed accounting mode options:
    

![](images/drex_nastrojka_datchika_topliva_custom_3.png)

-   All points — all points of the event must be below the set speed threshold
    
-   Start — it is enough for only the first point of the event to be below the speed threshold
    
-   Any point — the event is counted if at least one point meets the condition (for example, is in parking)
    
-   Average speed — the system compares the average speed of the event with the set threshold
    
-   Off —  disables the speed check. In this mode, refuels and fuel drains are recorded regardless of speed
    
-   Coefficient  — checks whether enough points have a speed below the threshold. It fine-tunes the filtering with additional parameters:
    

— Minimum share of slow points — defines the percentage of event points that must be at low speed. For example: a value of 0.5 means at least 50%

— Minimum parking duration — sets the total time during which the object must be at low speed

This mode handles situations where the beginning of a refuel or its “tail” falls on a short stretch of movement, but the vehicle was actually stationary most of the time

### Fuel change rate filter

These parameters let you distinguish real events from natural fuel consumption.

-   Minimum refuel rate  — the minimum rate of fuel level increase  (l/h) for an event to be considered a refuel. If the fuel level rises too slowly, the event is not considered a refuel.
    
-   Minimum fuel drain rate  — the minimum level drop (l/h) for an event to be considered a fuel drain. If the fuel decreases more slowly than the set value, the event is ignored.
    

### Sensitivity to sensor noise

-   Smoothing coefficient — the degree of chart smoothing before analysis. It is used when there is noise in the fuel sensor data.
    
    The higher the value, the smoother the chart and the fewer sharp jumps, which are often caused by sensor errors.
    

### Removal of symmetric events

This function helps exclude from the report false operations in which a refuel and a fuel drain occur with almost identical volumes (for example, a road slope or a technical failure).

-   The “Remove symmetric refuels/drains” switch — enables the search for “drain → refuel” or “refuel → drain” pairs with very close volumes
    
-   Maximum difference, % —  the allowed difference in the pair's volumes in percent
    
-   Maximum difference, l — how much the volumes in liters may differ.
    
-   Maximum distance (interval between events), h  — the time span within which events are considered a “pair”, for example 12 hours.
    

<table><tbody><tr><td><span></span></td><td><div>Watch the YouTube video that shows <a href="https://youtu.be/9YfvN5r7zGA"><span>how to set up the refuel and fuel drain detector</span></a>.</div><div><div><a href="https://youtu.be/9YfvN5r7zGA" title="560_315">https://youtu.be/9YfvN5r7zGA</a></div></div></td></tr></tbody></table>
