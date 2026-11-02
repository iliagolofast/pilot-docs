---
title: "Sensor types"
---

In this article we look at the sensor types that exist in the PILOT system, what they are used for, and which parameters you need to configure for some of them to work correctly.

— [what sensor types exist](index.html#Типы_датчиков) and how they work

— [how to choose the sensor purpose and its type](index.html#Типы_датчиков_по_принципу_работы)

— [how to configure a fuel sensor](index.html#Как_настроить_датчик_топлива)

## Sensor types

The sensor type determines which parameters it controls in the monitoring system. Let's look in more detail at which sensor types exist and what they are used for in PILOT.

When adding a sensor, first select its purpose. The type is determined automatically, but you can change it if necessary.

![Sensor types](images/drex_tipy_datchikov_screen.png)

1 — Sensor purpose

2 — Sensor type

## Sensor types by operating principle

### Text sensors

Displays the device state in words.

For example, instead of technical codes, a lock sensor outputs the messages “Lock open” and “Lock closed”.

### Discrete sensors

Pass on data in the form in which the device sent it. To get an exact value, this data can be converted using [calibration tables](../dobavlenie-datchika.html#тарировочная_таблица) or [formulas](../primenenie-formul.html).

For discrete sensors you can enable the alerts function. When the sensor state changes, the system sends notifications by e-mail or SMS.

### Pulse sensors

Count the number of pulses between readings. 

For example, an engine hours sensor that records the number of pulses to calculate equipment running time.

### Two-position sensors

Record two states of an object: on — off or open — closed.

The system determines its state by a range of values: if the reading falls between the set minimum and maximum, the sensor is considered on, otherwise off. 

### Discrete integral sensors

Work on the principle of discrete sensors but additionally accumulate the received values.

For example, such a sensor can count the total number of events — how many times the engine was started or the body doors were opened during a shift.

### Pulse integral sensors

An analog of pulse sensors, but with the function of accumulating the total number of pulses.

For example, such sensors can count the total number of pulses to analyze long-term equipment operation — the total engine running time over a month or the total mileage of a vehicle over a quarter.

### Two-position inverse sensors

Work the same way as two-position sensors but show the state in reverse order.

For example, you need the alarm to go off when a door is opened without authorization. A regular sensor may fail to trigger because of the wiring specifics, while an inverse sensor “flips” the signal: when the door is open, the sensor shows “closed”; when it is closed, it shows “open”, to guarantee that the alarm is triggered. This way, the sensor insures the system against errors.

### Multi-position sensors

Used to register readings that can take several values. The values are interpreted based on a calibration table. For example, temperature, humidity, or pressure sensors.

### Composite sensors

Combine data from several sensors.

For example, combining data from a fuel sensor and an engine hours sensor to calculate fuel consumption per unit of time.

### Special sensors

Such sensors are designed to collect highly specialized information.

For example, an RFID sensor can recognize objects and people, a GPS sensor determines the exact location, a CAN bus sensor collects the vehicle's technical parameters, and a people counter counts the number of visitors in a room.

## Sensor table

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>Sensor purpose</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>Operating principle</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Ignition sensor</span></div></td><td colspan="1" rowspan="1"><div><span>Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>The sensor is used to monitor engine operation and account for vehicle running time. When the engine is running, the sensor shows the value = 1; when it is off, the value = 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><a href="nastrojka-datchika-topliva.html"><span><span>Fuel sensor</span></span></a></div></td><td colspan="1" rowspan="1"><div><span>Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Tracks the fuel level in the tank.</span></div><div><span>To learn how to configure a fuel sensor, read </span><a href="index.html#Как_настроить_датчик_топлива"><span><span>below</span></span></a></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Special equipment operation sensor</span></div></td><td colspan="1" rowspan="1"><div><span>Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>Collects data on the start and end of equipment operation. It has two states: on — the sensor shows the value = 1, and off = 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Battery charge sensor</span></div></td><td colspan="1" rowspan="1"><div><span>Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Tracks the battery state and records charge levels</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>GPS antenna sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>Determines the presence or absence of a GPS signal. It has two states: on — the sensor shows the value = 1, or off = 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Temperature sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Monitors the temperature of cargo, for example in refrigerated vehicles, or of the environment. You must set the minimum and maximum temperature values at which the sensor triggers</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>SOS button</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>A sensor whose non-zero value allows marking a message as an alarm. You need to set the minimum and maximum values for the sensor to trigger</span><span></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Engine lock status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>Shows the current state of the mechanism: locked&nbsp; or unlocked</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>CAN mileage</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Tracks the distance the vehicle has traveled</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Liquid volume sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Monitors the liquid level in a container</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Passenger flow</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Composite</span></div></td><td colspan="1" rowspan="1"><div><span>Determines the number of boarding and exiting passengers and the direction of their movement</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Fuel consumption</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Pulse</span></div></td><td colspan="1" rowspan="1"><div><span>Measures the amount of fuel consumed through pulses. When a certain volume of fuel passes through the sensor, it gives an electrical signal. To measure consumption correctly, configure the “Pulses per liter” parameter, which specifies how many pulses the sensor produces when one liter of fuel passes through</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>iButton</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Special</span></div></td><td colspan="1" rowspan="1"><div><span>Used to identify drivers with iButton — a compact electronic key with a built-in chip. On contact with the reader, the key transmits its unique number, which PILOT uses to identify the driver.</span></div><div><span>The iButton purpose can also be used </span><a href="../../moduli-1/voditeli-3/opredelenie-voditelya-po-face-id.html"><span>to identify the driver by a Mettax camera</span></a></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Accelerometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Determines changes in speed and direction of movement. Records acceleration along the X, Y, Z axes and detects collisions.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Fuel type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multi-position</span></div></td><td colspan="1" rowspan="1"><div><span>Used to monitor the consumption of several types of fuel, for example gas or gasoline.</span></div><div><span>How this sensor detects a refuel:</span></div><div><span>1. Refuel detection</span></div><div><span>The sensor constantly monitors the fuel level and records the readings.</span></div><ul><li><div><span>The system takes 5 consecutive fuel level measurements</span></div></li><li><div><span>Compares the difference between the first and the last measurement</span></div></li><li><div><span>If the difference between them is greater than the specified value, the system considers it a refuel. This value is set in the sensor settings.</span></div></li></ul><div><span>2. Refuel start</span></div><div><span>When the system has detected a refuel, it analyzes the data for the last 20 minutes. It looks for the measurement point with the lowest fuel level in this time span. The system considers this point the start of the refuel.</span></div><div><span>3. Refuel end</span></div><div><span>The system understands that the refuel has ended:</span></div><ul><li><div><span>If five measurements in a row show the same fuel level — the vehicle has been refueled and is standing still</span></div></li><li><div><span>If the next measurement shows less fuel than the previous one — the vehicle has been refueled and started moving</span></div></li><li><div><span>If the signal disappears for an hour, the system considers that the vehicle's power was cut off, for example the ignition was turned off, which can also mean the end of the refuel</span></div></li></ul><div><span>A fuel drain is detected the same way as a refuel, except that instead of an increase in the fuel level the system records a sharp decrease.</span></div><div><span>The system detects a refuel or fuel drain by comparing the fuel level at several points. If data arrives too often, increase the number of points in the sensor settings to avoid false triggers. If too rarely, decrease it.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Rotation speed</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Measures the number of revolutions of the engine or other rotating mechanisms. It is used, for example, to monitor the rotation speed of the engine, a concrete mixer drum, or other equipment. The measurement result is shown in revolutions per minute — RPM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Engine hours sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Reads the number of pulses between readings to record equipment running time. It is used to account for the running time of the engine or other devices</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Concrete mixer loading or unloading sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>Used to track the loading and unloading of materials in construction machinery</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>RFID reader</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Special</span></div></td><td colspan="1" rowspan="1"><div><span>Used to read RFID tags and recognize objects or users.</span></div><div><span>An RFID tag&nbsp;is&nbsp;an electronic tag or chip that stores a unique code for identifying an object or a person. It works as a contactless electronic pass</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Humidity sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Used to monitor the humidity level, for example in refrigeration units, warehouses, and other places where it is important to maintain the required humidity. It shows just a number, for example 60%, or an acceptable humidity range, for example, normal is 40-60%</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Weight sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discrete</span></div></td><td colspan="1" rowspan="1"><div><span>Used to measure the load on a vehicle</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Lock</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Text</span></div></td><td colspan="1" rowspan="1"><div><span>Sends the password to unlock the lock. After it triggers, a new item appears in the object menu — “Open lock”</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sleep sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>Sends a signal that the device is switching to sleep mode. When it is time to go to sleep mode, the device sends a last message with&nbsp; an event number and then stops transmitting data completely</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Security sensor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>Can be in two states: “on” or “off”. For example, such a sensor monitors the opening of a door or window in case of a possible intrusion</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Battery connection</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Two-position</span></div></td><td colspan="1" rowspan="1"><div><span>Determines whether the battery is connected or not</span></div></td></tr><tr><td colspan="1" rowspan="1"><div>&nbsp;</div><div><a href="nastrojka-otnositelnogo-odometra.html"><span><span>Relative odometer</span></span></a></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; Pulse</span></div></td><td colspan="1" rowspan="1"><div><span>A sensor for calculating mileage from the speedometer or other connected equipment data. It accounts for the distance traveled when GPS/GLONASS data is missing or not accurate enough.</span></div><div><span>The terminal counts pulses between message transmissions, and PILOT sums the received values and converts them into distance.</span></div><div><span>To configure it, specify the number of pulses per kilometer. The value is determined separately for each vehicle because it depends on the installed equipment. For example, if 1000 pulses correspond to one kilometer, enter 1000 in the “Pulses per kilometer” field</span></div></td></tr></tbody></table>
