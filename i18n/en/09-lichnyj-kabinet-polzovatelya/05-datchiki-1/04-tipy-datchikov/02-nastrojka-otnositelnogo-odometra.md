---
title: "Setting up the relative odometer"
---

The “Relative odometer” sensor calculates the object's mileage from the number of pulses transmitted by the terminal. It suits hardware that counts pulses before sending a data packet and starts a new count after sending.

PILOT adds up the values from the received messages and converts them to kilometers. The “Pulses per kilometer” coefficient is used for the calculation.

Configure the sensor separately for each object: the number of pulses per kilometer depends on the vehicle and the installed hardware.

![](images/drex_nastrojka_otnositelnogo_odometra_custom.png)

Before setting up, make sure that:

— the terminal transmits the number of pulses in a separate field

— each value contains the number of pulses counted since the previous packet was sent

— the number of pulses corresponding to one kilometer of travel is known

If the terminal transmits a constantly increasing total counter, the “Relative odometer” sensor with the “Pulse” type is not suitable for such data.

## How to add the sensor

-   Add a new sensor to the object
    
    3\. In the “Purpose” field, select “Relative odometer”.
    
    4\. Make sure the “Type” field is set to “Pulse”
    
    5\. In the “Name” field, enter a descriptive name for the sensor, for example “Relative odometer”
    
    6\. In the “Field” field, specify the parameter in which the terminal transmits the number of pulses
    
    7\. If necessary, fill in the “Conversion formula”. If the terminal transmits a ready number of pulses and no additional conversion is required, leave the field empty
    
    8\. In the “Pulses per kilometer” field, enter the number of pulses corresponding to one kilometer of travel
    

![Setting up the relative odometer](images/drex_nastrojka_otnositelnogo_odometra_screen.png)

9\. If necessary, turn on “Filter values” to exclude incorrect readings

10\. Click “Save”

After saving, PILOT starts adding up the values from the selected field and calculating mileage using the specified number of pulses per kilometer.

## Calculating mileage from pulses

A pulse is a signal the terminal receives from connected equipment while the vehicle is moving. The greater the distance the vehicle covers, the more pulses the terminal records.

In each packet, the terminal transmits the number of pulses accumulated since the previous packet was sent. PILOT adds up these values for the selected period and calculates mileage with the formula: **Mileage, km = sum of pulses ÷ number of pulses per kilometer**

For example, the sensor settings specify 1000 pulses per kilometer. During a trip, the terminal transmitted three values: 200, 350, and 450.

First, PILOT adds up the pulses: 200 + 350 + 450 = 1000 pulses

Then it calculates the mileage: 1000 ÷ 1000 = 1 km

The value in the “Pulses per kilometer” field must be greater than zero. The more accurately the coefficient is specified, the more accurately the mileage is calculated.

## How to determine the number of pulses per kilometer

If the coefficient is unknown, determine it with a test trip:

1\. Record the initial mileage and pulse counter readings

2\. Drive a test distance. For a more accurate result, it is better to choose a long enough section, for example 10 kilometers

3\. Determine the total number of pulses received during the trip

4\. Divide the number of pulses by the distance traveled: **Pulses per kilometer = number of pulses ÷ distance, km**

For example, over 10 kilometers the terminal transmitted 12,500 pulses: 12,500 ÷ 10 = 1250 pulses per kilometer

Enter 1250 in the “Pulses per kilometer” field.

After calibration, make another test trip and compare the calculated mileage with the actual one. If the values differ, refine the coefficient.

## Checking the calculation

Compare the calculated mileage with the vehicle's actual mileage on the test section.

If the values differ:

— check whether the field with the number of pulses is selected correctly

— make sure the terminal starts a new count after sending each packet

— adjust the “Pulses per kilometer” value

— check the completeness of the received data

If some packets did not reach PILOT, the calculated mileage may be lower than the actual one.
