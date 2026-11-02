---
title: "Setting up retranslation to RNIS"
---

To set up data transfer from monitored Objects to the Unified Regional Navigation and Information System (RNIS) of Moscow, follow these steps:

### 1\. Setting up retranslation in the PILOT monitoring system

1\. Go to the admin panel

2\. Go to the “Machines” tab

3\. Find the Object you need, right-click it and select “Retranslation” in the menu

**![](images/drex_nastrojka_retranslyatsii_v_rnis_custom.png)**

4. In the window that opens, click the button for adding a retranslation ![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_2.png)

**![Setting up retranslation to RNIS](images/drex_nastrojka_retranslyatsii_v_rnis_screen.png)**

5\. In the “Configuration” window, fill in the fields to set up retranslation to RNIS:

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_3.png)

Use the following parameters:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Field</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Description</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Value</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Host</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;The host address for sending data (IP or domain name)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; data.rnis.mos.ru — the address of the receiving server</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Port</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;The port to which data is sent</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 4444 — the port for connecting to the RNIS server</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;The retranslation format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> EGTS — the data transfer protocol</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;The external device identifier (usually the IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>Enter the last 8 digits of the device IMEI.</span></div><div><span>For example, if the device IMEI is 4901542<span>03237518</span>, enter 03237518 in the external identifier field</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Enabled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;The retranslation activity status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Be sure to check the box</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Additional parameters in JSON format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; {"skip_auth": true} — the standard configuration for connection</span></div></td></tr></tbody></table>

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_4.png)

### 2\. Registering the terminal in the RNIS account

1\. Go to your RNIS account on the mos.ru website.

2\. When adding a telematics terminal for a vehicle, specify the following parameters:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;RNIS parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Value</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Protocol</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; EGTS_O</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;A critically important parameter. Corresponds to the EGTS form,</span></div><div><span>&nbsp;where the identifier is transmitted in the OID field</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Identifier</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; XXXXXXXX</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;The same number as the external identifier&nbsp;in&nbsp;the PILOT system (the last 8 digits of the IMEI). For example, if the device IMEI is 4901542<span>03237518</span>, enter 03237518 in the external identifier field</span></div></td></tr></tbody></table>

Diagram of a successful PILOT and RNIS integration

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;RNIS</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Format: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Protocol: EGTS_O</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID: 03237518</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identifier: 03237518</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>The last 8 digits of the device IMEI must match in both the PILOT system and the RNIS system. For example, if&nbsp;03237518&nbsp;is specified in PILOT, the same identifier must be transmitted in the OID field in RNIS.</div></td></tr></tbody></table>

When registering in RNIS, you must provide the operator with the following data:

-   To identify the vehicle, the last 8 digits of the IMEI are transmitted in the OID field
    
-   Protocol type — the EGTS\_O type must be selected in RNIS for your connection
    
    <table><tbody><tr><td><span></span></td><td><div>To avoid errors and ensure correct data transfer, it is important that the settings and the identifier specified in PILOT exactly match those used in RNIS.</div><ul><li><div>The Object's external identifier in the PILOT system (the last 8 digits of the device IMEI) must be transmitted&nbsp;to&nbsp;RNIS in the OID field (under the EGTS_O protocol).</div></li><li><div>The data transfer protocol must be the same in both systems: EGTS in the PILOT system and EGTS_O in RNIS.</div></li></ul></td></tr></tbody></table>
    

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;RNIS</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Protocol: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Protocol: EGTS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID: (the last 8 digits of the IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Connection type: EGTS_O</span></div></td></tr></tbody></table>
