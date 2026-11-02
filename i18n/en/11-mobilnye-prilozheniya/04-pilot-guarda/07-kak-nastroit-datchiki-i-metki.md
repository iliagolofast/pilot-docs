---
title: "How to set up sensors and tags"
---

The PILOT Guarda app can show detailed information about the car’s condition: battery charge, fuel level, temperature and other parameters.

For this data to appear in the app, you need to do the following in advance:

— [set up sensors](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) in PILOT

— assign [tags](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html) to them

A tag is a unique name assigned to a sensor in the monitoring system. Thanks to tags, the app knows which sensor is responsible for what and displays the information on the screen correctly.

## Which sensors can be connected

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Tag</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>What it shows</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_main_battery</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Car battery charge. As a rule, this is the supply voltage at the monitoring device</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_lock_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Engine blocking status</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_fuel_level</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fuel level</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Engine temperature</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_flat_cable_fault_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Wiring harness fault status</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Car interior temperature</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_humidity</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Car interior humidity</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_1_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Output 1 status</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_2_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Output 2 status</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_3_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Output 3 status</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ignition status</span></div></td></tr></tbody></table>

## How to set up sensors

Sensors are set up in PILOT:

1\. Open the user account

2\. Select the object you need. Right-click to open the object menu

3\. Go to the “Sensors” tab

![](images/drex_kak_nastroit_datchiki_i_metki_custom.png)

4\. [Create a new sensor](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) or open an existing one

![](images/drex_kak_nastroit_datchiki_i_metki_custom_2.png)

5\. Specify the tag you need from the list above

The app uses the tag to understand which data to show on the “Car status” screen.

For example:

— if a temperature sensor is assigned the garm\_on\_board\_temperature tag, the app shows the car interior temperature

![](images/drex_kak_nastroit_datchiki_i_metki_custom_3.png)

— if an external power sensor is assigned the garm\_main\_battery tag, the app shows the car battery charge

![](images/drex_kak_nastroit_datchiki_i_metki_custom_4.png)

— if an ignition sensor is assigned the garm\_engine\_status tag, the app shows the engine state — on or off

![](images/drex_kak_nastroit_datchiki_i_metki_custom_5.png)

If the tag you need is not in the list, first [create it](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html), then assign it to the sensor.

![](images/drex_kak_nastroit_datchiki_i_metki_custom_6.png)

6\. Save the changes

After that, the sensor data starts to appear in the mobile app on the “Car status” screen.

![How to set up sensors and tags](images/drex_kak_nastroit_datchiki_i_metki_screen.png)

<table><tbody><tr><td><div><span>1 — Car battery voltage</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div><span>2 — Ignition state</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![How to set up sensors and tags](images/drex_kak_nastroit_datchiki_i_metki_screen_2.png)

<table><tbody><tr><td><div>1 — Current fuel level in the tank</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>2 — Interior temperature</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Other parameters that can be shown in the app in the car summary:

-   Balance — SIM card status of the monitoring device
    
-   Temperature — engine temperature
    
-   Door state — open or closed
    
-   Headlight state — on or off
    
-   Security state — on or off
