---
title: "Tachograph"
---

The “Tachograph” module helps you track and analyze driver work based on data from the hardware. All data comes directly from the tachograph and cannot be changed manually.

Use the module to track driver activity statuses: driving, rest, work, availability.

Based on the activity data you can:

-   understand how busy each driver is
    
-   check whether work and rest regulations are observed
    
-   analyze how the schedule was actually worked
    

## How to configure data for the module

1\. Go to the admin panel, open the “Machines” tab and find the Object the tachograph works with

2\. Right-click the selected Object — the context menu opens

3\. Select “Edit” in the menu

![](images/drex_takhograf_2_custom.png)

4\. In the Object settings window that opens, select the “Configuration” tab.

5\. Add the module configuration with the button  ![](images/drex_takhograf_2_custom_2.png) and click “Save”

![](images/drex_takhograf_2_custom_3.png)

## Which Sensors are required

For the module to display reliable information, certain Sensors must be added to the Object card:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Sensor purpose</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; What it shows</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; &nbsp; Sensor setup example</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Driver state</span></div></td><td colspan="1" rowspan="1"><div><span>Position of the driver mode switch: driving, rest, work, availability</span></div></td><td colspan="1" rowspan="1"><div><span><img alt="" src="images/drex_takhograf_2_custom_4.png" data-full-src="drex_takhograf_2_custom_4.png" data-full-width="1012" data-full-height="740"></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Card state</span></div></td><td colspan="1" rowspan="1"><div><span>Status of the driver card in the slot (inserted or not, in use or not)</span></div></td><td colspan="1" rowspan="1"><div><span><img alt="" src="images/drex_takhograf_2_custom_5.png" data-full-src="drex_takhograf_2_custom_5.png" data-full-width="1012" data-full-height="739"></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Tachograph mode</span></div></td><td colspan="1" rowspan="1"><div><span>Changes in the tachograph operating states</span></div></td><td colspan="1" rowspan="1"><div><span><img alt="" src="images/drex_takhograf_2_custom_6.png" data-full-src="drex_takhograf_2_custom_6.png" data-full-width="1012" data-full-height="744"></span></div></td></tr></tbody></table>

For details on how to add Sensors, see the section [“Sensors”](../datchiki-1/dobavlenie-datchika.html)

## How to view tachograph data

1\. In the User account, go to the “Tachograph” section

2\. Select the Object you want to analyze

3\. Specify the period in the calendar — the days or hours you need data for

4\. Click “Search”

 ![](images/drex_takhograf_2_custom_7.png)

5\. You will see an activity summary: when the driver was driving, resting, available or working. The data is displayed as a clear interactive report on driver work and rest regimes for the selected period, broken down by days and weeks.

![](images/drex_takhograf_2_custom_8.png)

## How the system works internally

The module receives data directly from the tachograph. This is “raw” technical data that the system converts into understandable states. This data is used to calculate driver activity statuses: driving, rest, work.

![](images/drex_takhograf_2_custom_9.png)

### How to decode tachograph data

Let's look more closely at the tables with data received directly from the tachograph's digital interface — for example, via the CAN bus or another data transmission channel.

 This data is processed by the monitoring system and helps determine:

-   Which driver card was installed (Table 1)
    
-   What the status of each driver is — resting, working, driving the vehicle — as well as the current card state in each slot (Table 2)
    

These parameters are generated as codes and bit values, so to be interpreted correctly they must be handled either by the system or by a specialist when configuring the hardware.

Below is the decoding of this data according to the tachograph specification.

Table 1

This table describes the structure of the packet that transmits the identification number of the driver card installed in the tachograph:

0x02 – driver card 1 or 2. The card number depends on the type of event for which this packet is generated.

The codes of the events for which the packet is generated help determine exactly which card was installed and in what situation.

![](images/drex_takhograf_2_custom_10.png)

Table 2

The table describes a data byte from the tachograph interface with ID: 98.

This byte contains compressed information about the following parameters:

-   The activity of each driver — rest, readiness for work, driving the vehicle, etc.
    
-   The state of the card slots — whether a card is inserted or not, whether it is authorized or not.
    

The byte is divided into bit fields — 8 bits in total, split into 4 groups of 2 bits, each responsible for a specific parameter.

![](images/drex_takhograf_2_custom_11.png)

The information from this byte helps you:

-   Connect external hardware to the tachograph
    
-   Get accurate data on driver activity
    
-   Configure the system so that it understands what exactly the driver is doing
    

For example: if the value of bits 0–1 = 3, driver No. 1 is driving the vehicle.

Calibration tables are also often built on the basis of this data. They are needed to convert the “raw” numbers from the tachograph data byte into understandable states. Instead of “raw” values such as 2 or 3, you will see “Rest” or “Card authorized”.

 One byte (8 bits) is split into four pairs of bits — each 2 bits are responsible for one state:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Bits</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Values</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 0–1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Driver 1 activity</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2–3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Driver 1 card slot</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4–5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Driver 2 activity</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 6–7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Driver 2 card slot</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr></tbody></table>

Therefore you need to configure calibration tables to convert the values into an understandable driver activity and card state.

### Calibration table examples

 The “Driver state” calibration table. You use this table to decode bits 0–1 and 4–5 (driver activity).

![](images/drex_takhograf_2_custom_12.png)

The “Card state” calibration table. You use this table for parameters 2–3 and 6–7 (driver card state).

![](images/drex_takhograf_2_custom_13.png)

To learn how to configure a calibration table, read [here](../datchiki-1/dobavlenie-datchika.html#тарировочная_таблица).

## Where to view tachograph Reports

The module generates a [driver activity Report](../otchyety-1/tipy-otchyetov/takhograf-1/otchet-po-aktivnosti.html) that helps you track:

— periods when the driver is at the wheel

— rest, availability and work time

— work without a card or with an unauthorized card

— time intervals for each driver
