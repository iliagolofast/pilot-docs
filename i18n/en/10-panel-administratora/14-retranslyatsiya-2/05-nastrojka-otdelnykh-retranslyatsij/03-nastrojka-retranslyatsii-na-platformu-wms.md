---
title: "Setting up retransmission to the WMS platform"
---

This article explains how to set up an integration that sends data from GPS trackers in PILOT to the external WMS platform using the “Riyadh Municipality” protocol.

Setup consists of two stages:

1\. Setting up retransmission in the PILOT admin panel

2\. Setting up object sensors

### 1\. Setting up retransmission in the admin panel

1\. Open the admin panel

2\. Go to the “Vehicles” tab

3\. Find the object you need, right-click it and select “Retransmission” in the menu

**![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom.png)**

4. In the window that opens, click the button for adding a retransmission ![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_2.png)

**![Setting up retransmission to the WMS platform](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen.png)**

5\. In the “Configuration” window, fill in the retransmission settings:

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_3.png)

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Field</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Description</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Value</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Host</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Host address to send data to (IP or domain name)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span>For example, admin-dev-wms.iotsquared.io&nbsp;(the host is specified in the protocol)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Port</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Port that the data is sent to</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;443</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Retransmission format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>RIYADH municipality — select from the drop-down list</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;External device identifier (usually the IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Enter the device&nbsp;IMEI&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Path</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Request path containing the x-token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; /api/v1/integrations/http/${httpid}&nbsp;(where ${httpid} is the x-token)</span></div><div><span>&nbsp; For example, /api/v1/integrations/http/32fc9bec-967839-467890-56a0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;USPW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;User name and password, if authorization is required</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Time zone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Time zone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;UTC</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Speed limit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Speed limit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Enabled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Retransmission activity status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Select the checkbox</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Additional parameters in JSON format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Specify the partner name</span></div></td></tr></tbody></table>

Configuration example

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_4.png)

### 2\. Setting up sensors

For the integration with WMS to work correctly, the following sensors must be installed on the object:

— GPS antenna sensor

— CAN mileage sensor

— special weight sensor (Weight)

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_5.png)

For a Teltonika device to transmit CAN mileage (odometer readings), you need to enable this parameter with a command.

1\. Open the admin panel

2\. Go to the “Vehicles” tab

3\. Find the object you need, right-click it and select “Commands” in the menu

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_6.png)

4.  In the “Commands” window, select a command from the drop-down list

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_7.png)

5\. Specify the command parameters and click “Send”

![Setting up retransmission to the WMS platform](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen_2.png)

1 — Specify the command parameters

2 — Open the command list

-   setparam 50160:1 — enable odometer data transmission
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_8.png)

If you need to set an initial mileage value, that is, not starting from zero:

-   setparam 11807:\[value\]— set mileage not starting from zero
    
    For example, setparam 11807:2729, where 2729 is the initial odometer value in kilometers
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_9.png)

These commands configure the Teltonika device to receive mileage data via the vehicle’s CAN bus. After setup, mileage is transmitted to the system automatically.
