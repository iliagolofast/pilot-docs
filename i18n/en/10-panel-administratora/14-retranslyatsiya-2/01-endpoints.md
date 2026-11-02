---
title: "Endpoints"
---

This article describes how to work with data transfer destinations (endpoints): from creating and configuring a connection to connecting Objects and automating the retranslation process.

Here you will learn:

-   [What an endpoint is](endpoints.html#Что_такое_endpoint)
    
-   [How to work with the list of endpoints](endpoints.html#Список_endpoints)
    
-   [How to create endpoints](endpoints.html#Как_создать_endpoint)
    

• [How to connect Objects to an endpoint](endpoints.html#Объекты_endpoint)

-   [How to set up automatic connection of new Objects](endpoints.html#Как_настроить_Auto_Add)
    

## What an endpoint is

An endpoint is a destination for transferring data to an external system. It holds the connection parameters: the server address, port, data transfer protocol and authorization parameters.

After an endpoint is created, one or more Objects can be connected to it.

## List of endpoints

To open the list of endpoints, go to the “Retranslation” → “Endpoints” section.

![](images/drex_endpoints_custom.png)

This tab shows all available data transfer destinations and their current state.

**![](images/drex_endpoints_custom_2.png)**

Here you can:

— create new endpoints

— change the settings of existing endpoints

— connect Objects

— set up automatic connection of new Objects

— view data transfer statistics

— enable, disable and delete endpoints

### Top panel

The following actions are available on the top panel:

1\. Add — create a new endpoint

2\. Statistics — select the period for displaying statistics

3\. Search — search for an endpoint in the table

4\. Clear filters — reset all filters

![Endpoints](images/drex_endpoints_screen.png)

### Selecting the statistics display period

![](images/drex_endpoints_custom_3.png)

The Statistics parameter affects the display of the mini-charts in the columns:

-   Err — errors
    
-   Send — sending of data
    
-   Ack — acknowledged packets
    

![Endpoints](images/drex_endpoints_screen_2.png)

The mini-charts help you quickly assess the state of retranslation for the selected period.

The chart shows:

— the dynamics of the indicator

— the total number of events for the selected period

When you hover the cursor, information about the selected point of the chart is displayed.

The following periods are available:

![](images/drex_endpoints_custom_3.png)

-   12 hours — the last 12 hours
    
-   Day — the last 24 hours
    
-   Week — the last week
    
-   2 weeks — the last two weeks
    
-   Month — the last month
    

### Endpoints table columns

## ![](images/drex_endpoints_custom_4.png)

Actions — available actions for the endpoint

ID —  the unique identifier of the endpoint

Partner ID — the identifier of the Partner that owns the endpoint

Partner name — the name of the Partner that owns the endpoint

Host — the IP address or domain name of the external server

Port — the port for connecting to the external server

Format — the data transfer protocol used

Statistics / Objects — the number of Objects connected to the endpoint

Statistics / Active — the number of active Objects that are currently transmitting data and are online

Statistics  / Auto — the number of Contracts for which automatic adding of Objects is enabled

Statistics / Queue — the number of packets in the send queue

Statistics / Err — a mini-chart of errors for the selected period

Statistics / Send — a mini-chart of send attempts for the selected period

Statistics / Ack — a mini-chart of accepted packets for the selected period

On/off — the endpoint state (enabled or disabled)

Status — the endpoint state: active, disabled or no active Objects

Uspw — authorization data (hidden by default)

Testing — the test endpoint flag. Available to the administrator only

TimeZone — the time zone

Comment — additional information

Speed Limit — the maximum speed transmitted to the external system

Schedule — the retranslation schedule

Mapping fields — field mapping settings for special formats

You can configure which columns with parameters to display in the table.

![](images/drex_endpoints_custom_5.png)

To do this:

1\. Click the arrow ![](images/drex_endpoints_custom_6.png) in the header of any column

2\. Select the Columns item

3\. Check the columns you need

4\. Uncheck the columns you do not want to display

The same menu also offers:

— ascending sort

— descending sort

— data filtering

### Endpoint actions

The following actions are available in the “Actions” column:

## ![Endpoints](images/drex_endpoints_screen_3.png)

![](images/drex_endpoints_custom_7.png) ![](images/drex_endpoints_custom_8.png) On or off — enable or disable the endpoint

![](images/drex_endpoints_custom_9.png) Edit  — open the form for editing the endpoint. You can also double-click a table row to open the endpoint settings

![](images/drex_endpoints_custom_10.png) Auto add — set up automatic connection of Objects

![](images/drex_endpoints_custom_11.png) Statistics —  open the [statistics](statistika.html) for the selected endpoint

![](images/drex_endpoints_custom_12.png) Machines or Objects — open the list of connected Objects

![](images/drex_endpoints_custom_13.png) Delete — delete the endpoint

### How to create an endpoint

1\. Click “Add” on the top panel

## ![Endpoints](images/drex_endpoints_screen_4.png)

2\. Fill in the connection parameters

![](images/drex_endpoints_custom_14.png)

Main parameters

Name — the name of the endpoint

Host — the address of the external server to which data will be sent

Port — the port of the external system connection

Format — the data transfer protocol or format

Path — an additional path or URL route, if required by the protocol used

Uspw — authorization data for connecting to the external system

Time zone — the time zone that will be used by default for the Objects of this endpoint

Speed Limit — the maximum speed that will be transmitted to the external system

“Enabled” checkbox — enables or disables the endpoint

Testing — lets you create a test endpoint. The parameter is available to administrators only

Json config — additional connection settings in JSON format

Comment — a free-form comment for system Users

Mapping fields — field mapping settings for special data transfer formats

Schedule — the schedule during which data transfer through this endpoint is allowed

3\. Click “Save”

After saving, the endpoint becomes available for connecting Objects.

### How to edit an endpoint

1\. Click the “Edit” button  ![](images/drex_endpoints_custom_9.png) in the actions column or double-click the endpoint row

## ![Endpoints](images/drex_endpoints_screen_3.png)

2\. Change the necessary parameters

![](images/drex_endpoints_custom_15.png)

3\. Click “Save”

The changes are applied automatically to all Objects that use this endpoint.

If the system finds an endpoint with the same parameters, it will offer to merge them. Check the settings carefully before confirming.

If you do not confirm the merge, the changes will not be saved.

![](images/drex_endpoints_custom_16.png)

### How to enable or disable an endpoint

To temporarily stop or resume data transfer:

1\. Click the enable button ![](images/drex_endpoints_custom_8.png) or the disable button  ![](images/drex_endpoints_custom_7.png)  in the actions column

![Endpoints](images/drex_endpoints_screen_5.png)

If an endpoint is disabled, all Objects connected to it stop transmitting data to the external system.

### How to delete an endpoint

1\. Click the delete button ![](images/drex_endpoints_custom_13.png) in the actions column

2\. Confirm the deletion

Before deletion, the system will show the number of Objects that use this endpoint.

After deletion, data transfer through the endpoint will be stopped completely.

## Endpoint Objects

To view the Objects connected to an endpoint:

1\. Find the endpoint you need

2\. Click the “Machines/Objects” button  ![](images/drex_endpoints_custom_12.png) in the actions column

A list of Objects that transmit data through the selected endpoint opens.

![](images/drex_endpoints_custom_17.png)

From this window you can:

— connect new Objects

— change the retranslation parameters of individual Objects

— temporarily disable data transfer

— remove Objects from the endpoint

### Object list columns

![](images/drex_endpoints_custom_17.png)

Agent ID — the Object identifier

Machine — the name of the monitored Object

IMEI — the unique device identifier

Contract — the Object's Contract

External ID — the Object identifier in the external system

On/off — whether retranslation of the Object is enabled or disabled

Err — a mini-chart of errors for the Object

Send — a mini-chart of send attempts for the Object

Ack — a mini-chart of accepted packets for the Object

Actions with Objects:

![](images/drex_endpoints_custom_7.png) and ![](images/drex_endpoints_custom_8.png)  — enable or disable the Object in this endpoint

![](images/drex_endpoints_custom_18.png) — remove the Object from this endpoint

### How to add Objects

1\. In the “Objects/Machines” window, click the “Add” button

![Endpoints](images/drex_endpoints_screen_6.png)

2\. Select one or more Objects

![](images/drex_endpoints_custom_19.png)

3\. If necessary, change the External ID. By default, the device IMEI is used as the External ID

4\. Click “Add” to connect the selected Objects to the endpoint

If the list of Objects is long, use the search at the top in the “Search” field — enter the name or number of the Object.

### How to edit an Object

1\. Double-click the Object in the list

![](images/drex_endpoints_custom_17.png)

2\. Make changes in the Object editing form

![](images/drex_endpoints_custom_20.png)

In the form you can change the Object-level retranslation parameters:

-   Endpoint — the data transfer destination through which the Object sends information to the external system
    
-   External ID — the Object identifier in the external system
    
-   “Enabled” checkbox — enables or disables data transfer for the selected Object only
    
-   Speed limit — the maximum speed that will be transmitted to the external system for this Object
    
-   Time zone — the time zone used for transmitting this Object's data
    
-   Uspw — authorization data for this Object
    
-   Json config — additional retranslation settings in JSON format
    
-   Schedule — the data transfer schedule for the Object.
    

The Host, Port, Format and Path parameters cannot be changed in this form. They are inherited from the endpoint.

If you need to change the connection to the external system, open the endpoint settings or select another endpoint.

3\. Save the settings

## Automatic connection of Objects to an endpoint

The Auto add function lets you automatically connect new Objects to an endpoint.

This function is used when all Objects of a particular Contract must automatically transmit data to one external system. After the rule is set up, new Objects will be connected automatically without additional User actions.

### How to set up Auto add

1\. Click the Auto add button  ![](images/drex_endpoints_custom_10.png)in the actions column

## ![Endpoints](images/drex_endpoints_screen_7.png)

2\. A window opens with the list of Contracts for enabling automatic adding of Objects. Click “Add”

![](images/drex_endpoints_custom_21.png)

3\. Select one or more Contracts

![](images/drex_endpoints_custom_22.png)

4\. Click “Add”

After saving, all new Objects of the selected Contracts will be connected to this endpoint automatically.
