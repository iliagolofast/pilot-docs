---
title: "Special Sensors Report"
---

The Special Sensors Report contains charts of Sensor readings for the selected Objects over the specified period. Use it to trace how parameters change over time, identify sharp deviations and periods with no data, and compare the readings of several Sensors.

A separate block of charts is generated for each selected Object. The content of the report depends on the hardware and Sensors installed on the Object.

![](images/drex_otchyet_po_spetsdatchikam_custom.png)

### What the chart shows

— the horizontal axis shows the date and time the data was received

— the vertical axis shows the Sensor values in the corresponding units

— individual Sensors or indicators are shown in different colors

— when you hover over a line, you can see the exact time and the recorded value

![](images/drex_otchyet_po_spetsdatchikam_custom_2.png)

The example report shows:

-   Fuel level sensor signal level, dB — signal level of the fuel level sensor
    
-   GSM/GPRS network level, units — indicator of the device’s mobile network connection quality
    
-   Satellite signal level, units — indicator of satellite signal reception quality
    
-   CAN speed, km/h — vehicle speed received from the CAN bus
    
-   On-board network, Volts — voltage of the vehicle’s on-board network
    

![](images/drex_otchyet_po_spetsdatchikam_custom_3.png)

Sharp rises and drops in the lines show a change in the corresponding parameter. Horizontal sections mean the value stayed relatively constant.

To display readings, the special Sensors must first be [added and correctly configured on the Object](../../../datchiki-1/dobavlenie-datchika.html). If a Sensor is missing, configured incorrectly, or did not transmit data during the selected period, the corresponding chart may not be displayed.
