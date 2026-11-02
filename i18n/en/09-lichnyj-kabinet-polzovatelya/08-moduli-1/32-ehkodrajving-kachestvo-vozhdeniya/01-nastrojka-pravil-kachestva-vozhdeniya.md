---
title: "Setting up driving quality rules"
---

Driving quality rules define which driver actions the system treats as violations and how they are taken into account when assessing driving quality.

Each rule monitors a specific parameter received from the device installed on the vehicle, for example speed, acceleration, or idling duration. If the value meets the specified conditions, the system records a driving quality event.

For each rule you can set:

— the parameter to monitor

— the event recording conditions

— the event type

— the message displayed in reports

— the number of penalty points and how they are assigned

You can create any number of rules and configure them to suit your vehicles, the installed equipment, and your company's requirements.

## How to open the driving quality settings

1\. In the user account, double-click the vehicle you need in the object list

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom.png)

2\. In the object card, open the “Driving quality” tab

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_2.png)

On this tab you can create and change the rules by which the system detects violations.

## Control rules

The center of the window contains the rules table. Each row is a separate rule by which the system analyzes data received from the device. If the value meets the specified conditions, the system records a driving quality event.

You can create any number of rules and configure them to suit your vehicles and equipment.

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_3.png)

### Rule parameters

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Column</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Field</span></div></td><td colspan="1" rowspan="1"><div><span>The sensor or parameter to be monitored. For example, speed, acceleration, ignition, or another parameter received from the device</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Formula</span></div></td><td colspan="1" rowspan="1"><div><span>An additional mathematical or logical expression for processing the value before the check</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Type</span></div></td><td colspan="1" rowspan="1"><div><span>The type of driving quality event that is recorded when the condition is met. The system uses the type to classify the event and calculate “Eco-driving” indicators. You can use the built-in </span><a href="tipy-kachestva-vozhdeniya.html"><span><span>types</span></span></a><span> or create your own</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Message</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The text displayed in reports when the event is recorded. For example: Harsh Braking or Speeding</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Min.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The minimum value from which the rule starts to trigger</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Max.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The maximum value at which the event is still considered a violation. For example, if you specify the range 132–250 km/h, a violation is recorded at a speed within this range</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Period</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The interval in seconds during which several identical triggers are counted as one event. For example, if you specify 600 seconds for idling, a new violation is recorded only 10 minutes after the previous one</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Penalty</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The number of penalty points assigned for the event. It can be 0 — in this case the event is recorded, but no penalty points are assigned</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Penalty type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><a href="nastrojka-pravil-kachestva-vozhdeniya.html#Типы_штрафов"><span><span>Calculation method</span></span></a><span> for penalty points</span></div></td></tr></tbody></table>

### Main control types

“Eco-driving” reports most often use four main event types:

-   Acceleration — sharp vehicle acceleration
    
-   Braking — harsh braking
    
-   Cornering — a sharp maneuver when taking a turn
    
-   Speed — exceeding the set speed threshold
    

If needed, you can create [your own event types](tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:).

### Penalty types

For each rule you can choose one of three ways of assigning penalty points.

**Simple**

A fixed number of points specified in the “Penalty” field is assigned.

For example, if the penalty is 5, 5 points are assigned for each violation.

**Weighted**

The penalty is calculated taking the severity of the violation into account. The more the violation exceeds the set threshold, the greater the total number of penalty points.

This type is used when you need to consider not only the fact of the violation but also its seriousness.

**Multiplier**

The number of points is calculated by the formula: Violation value × Penalty

For example:

-   violation value — 5
    
-   penalty — 2
    

The total number of penalty points is 10.

This mode is convenient when the size of the penalty should depend on the magnitude of the violation.

## How to create a rule

You can create any number of control rules yourself.

To do this:

1\. On the “Driving quality” tab, click the “Add rule” button ![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_4.png)

![Setting up driving quality rules](images/drex_nastrojka_pravil_kachestva_vozhdeniya_screen.png)

2\. A new row appears in the table

3\. Fill in the rule parameters

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_5.png)

Specify:

1\. Field — the sensor or parameter to be monitored

2\. Formula, if needed

3\. Event type — select from the list. If the type you need is not there, you can [create it yourself](tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:)

4\. The message that will be displayed in reports

5\. The minimum and maximum values that define the range in which the event is considered a violation

6\. The period for merging repeated events

7\. The penalty size and penalty type

After filling in the parameters, click “Save”.

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_6.png)

After saving, the rule starts being used when processing data received from the device.

To change a rule, change the parameters you need in the corresponding fields of the rule row.

To delete a rule, click the icon ![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_7.png) in the row of the rule you need, then save the changes.

## Additional penalties

At the bottom of the window there are penalty settings that apply independently of individual rules.

The following parameters are available:

-   Penalty for entering a restricted geofence — assigned when the vehicle enters a restricted geofence
    
-   Penalty for an unauthorized driver — assigned if the vehicle is driven by a driver who is not permitted to operate this object
    
-   Penalty for speeding per minute / unit — additional points for exceeding the set speed limit
    

Enter the required values and save the settings.

![Setting up driving quality rules](images/drex_nastrojka_pravil_kachestva_vozhdeniya_screen_2.png)
