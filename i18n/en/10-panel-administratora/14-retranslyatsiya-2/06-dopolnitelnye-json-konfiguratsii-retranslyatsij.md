---
title: "Additional JSON configurations for retransmissions"
---

Some retransmission protocols support additional settings through the Json config field. With a JSON configuration you can change the composition of the transmitted data, use processed sensor values, rename fields, filter packets and set up special data transmission scenarios.

The supported parameters depend on the selected retransmission protocol.

Specify the JSON configuration in the Json config field when you create or edit a retransmission.

![Additional JSON configurations for retransmissions](images/drex_dopolnitelnye_json_konfiguratsii_retranslyatsij_screen.png)

## Wialon Retranslator

### Sending processed sensor values

Lets you send sensor values to the retransmission after they have been processed in PILOT.

For example, you can send the fuel level sensor value after calibration has been applied.

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "fuel_1": 135785,</span></div><div><span>&nbsp; &nbsp; "NameSensor": 228</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — list of sensors whose values must be taken from the object’s configured sensors
    
-   fuel\_1 — name of the parameter that will be sent to the retransmission
    
-   135785 — ID of the object’s sensor in the system
    

You can find the sensor ID in the object’s sensor settings.

Notes:

-   For fuel level sensors to work correctly, calibration must be set up.
    
-   Values that fall outside the calibration range are sent as is.
    
-   For example, a raw value of 65530 may be sent instead of liters.
    

### Sensor filtering and processing

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1370805,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1370806</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2",</span></div><div><span>&nbsp; &nbsp; "temp_01": "temp1"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; "temp_2": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 100,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — lets you use the values of the specified object sensors.
    
-   tags\_rewrite — lets you rename parameters before sending.
    

Example:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

In this case, the temp\_2 parameter will be sent as temp2.

-   sensors\_filter — lets you filter sensor values.
    

Supported parameters:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Data type. Currently, int is supported</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Minimum allowed value</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Maximum allowed value</span></div></td></tr></tbody></table>

Example:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Filtering works for sensors that send integer values.

-   sensors\_notuse — lets you exclude sensors from transmission.
    

Example:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

This configuration excludes the specified sensors from the data being sent.

<table><tbody><tr><td><span></span></td><td><div>Sensor settings made in PILOT do not affect retransmission through this mechanism. All transmission parameters must be specified in Json config.</div></td></tr></tbody></table>

## Packet filtering

Lets you skip sending packets that match certain conditions.

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

-   packet\_filter — does not send a packet if the specified parameter has the given value.
    

Example:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

If the Valid parameter equals 0, the packet will not be sent.

You can specify several conditions.

-   keys\_to\_skip — does not send a packet if it contains the specified key.
    

Example:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

If the packet contains the HardVersion field, it will be skipped.

You can specify several keys.

## Wialon IPS and Wialon IPS v2

### Renaming parameters

Lets you replace a parameter name before sending.

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

In this example, the Vsourse parameter will be sent as pwr\_ext.

### Sending IButton in the packet body

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "IButton": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "tcp_box"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

How it works

If the IButton parameter has the tcp\_box type, the identifier value is sent in the packet body. If the parameter is missing, IButton is not added to the packet and an empty value is sent.

This setting is used to send the driver identifier outside the standard parameter block.

### The inputs block

Lets you generate additional inputs based on sensor values.

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "value": false,</span></div><div><span>&nbsp; &nbsp; &nbsp; "myval": false</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Parameters of the inputs block

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Minimum allowed value</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Maximum allowed value</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; value</span></div></td><td colspan="1" rowspan="1"><div><span>If set to true, the actual sensor value is sent in the packet. If the parameter is missing or set to false, the standard packet-building logic is used</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; myval</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lets you substitute your own value for the sensor value when the condition is met</span></div></td></tr></tbody></table>

**Simplified configuration example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

If the sensor value falls within the range from 1 to 1, the value 1 is sent in the packet.

This mechanism is used to duplicate the sensor state in bit form.

For example, to send the door state through the inputs block.

## Wialon Retranslator, Galileo and EGTS

### Renaming fields

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0",</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Lets you replace field names before sending.

For example:

-   temperature → galileo\_temp\_0
    
-   digital → galileo\_in\_2
    

### Saving retransmission logs

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "save_data_for_report": "1"</span></div><div><span>}</span></div></td></tr></tbody></table>

Enables saving of retransmission data for later report generation and diagnostics

### Generating temperature data

**Example**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "temperature_data_generator": {</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2",</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

This setting is used for special scenarios.

When the specified condition is met, the system can automatically generate temperature sensor values.

### Parameters

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; DOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Monitored sensor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; closed_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Value at which the condition is met</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_sensors</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; List of temperature sensors</span></div></td></tr></tbody></table>

This functionality is implemented for special integration scenarios and is used only when the receiving system requires it.
