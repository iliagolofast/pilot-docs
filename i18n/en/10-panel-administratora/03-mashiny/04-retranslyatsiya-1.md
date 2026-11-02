---
title: "Retranslation"
---

**Retranslation settings for a monitored Object.**

1\. Select a monitored Object.

2\. Select "Retranslation" from the context menu.

![](images/drex_retranslyatsiya_1_custom.png)

![](images/drex_retranslyatsiya_1_custom_2.png)

-   **Host -** the host address for retranslating data using the specified protocol (as an IP address or a domain name).
    
-   **Port -** the port to which data is retranslated using the specified protocol.
    
-   **Format** - the retranslation format (select from the drop-down list).
    
-   **External id -** the retranslation identifier of the monitored Object (usually the imei block, the last digits of the imei, is used).
    
-   **Path -** When a domain name is used, this field contains additional parameters.
    
-   **USPW -** If identification is required, this field will contain the user name and password.
    
-   **Time zone -** the time zone in GMT format from the drop-down list.
    
-   **Speed limit -** a field for specifying the maximum data transfer rate.
    
-   **Enabled -** a button for enabling retransmission.
    
-   **Json config** - additional configuration for retranslation setup in JSON format (for example, to display parameters from different Sensors).
    
-   **Comment -** additional information about the retranslation.
    
    ![](images/drex_retranslyatsiya_1_custom_3.png)
    

<table><tbody><tr><td><span></span></td><td><div><span><strong>Implementation for “Wialon retrains”, “galileo”, “egts”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0", &nbsp; //we replace the name of the "temperature" field from the raw data,</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2" &nbsp; //with the value "galileo_temp_0",</span></div><div><span>&nbsp; },&nbsp; &nbsp; // and send it to retranslation&nbsp;</span></div><div><span>&nbsp;</span></div><div><span>&nbsp; "save_data_for_report": "1",&nbsp; &nbsp; //we save retranslation logs for the Report</span></div><div><span>&nbsp; &nbsp; "temperature_data_generator": {&nbsp; &nbsp; //based on the door Sensor state&nbsp; "DOS" =0</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2", &nbsp; &nbsp; //generate a random value from 4 to 8 for the "temperature_sensors" field.&nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,&nbsp; &nbsp; //implemented for a specific request</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div><div>&nbsp;</div><div><span><strong>Implementation for “Wialon&nbsp; ips” and “Wialon ipsv2”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": { &nbsp; //we replace the name of the "Vsourse" field from the raw data</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",&nbsp; //with the value "pwr_ext", and send it through retranslation&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

**Bulk retranslation for Objects.**

**Select several Objects on the Machines tab.**

-   Click the "Retranslation" button.
    
-   Add the parameters.
    
-   Enter a single imei and, after adding, change this parameter in each Object to the actual one in the User interface.
    

**![](images/drex_retranslyatsiya_1_custom_4.png)**

**![](images/drex_retranslyatsiya_1_custom_5.png)**

**![](images/drex_retranslyatsiya_1_custom_6.png)**
