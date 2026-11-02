---
title: "Objects"
---

The “Objects” tab shows all Object retranslations available to the current User.

## List of Objects

To open the list of Objects, go to the “Retranslation” → “Objects” section.

![](images/drex_obekty_2_custom.png)

Here you can:

— find the Object you need

— see through which endpoint data is transmitted

— enable or disable retranslation of an Object

— open the retranslation settings

— view the data transfer statistics for the Object

![](images/drex_obekty_2_custom_2.png)

### Top panel

The following actions are available on the top panel:

-   Configs — retranslation configuration settings
    
-   Export — export the list of Objects
    
-   Statistics — select the period for displaying the mini-charts
    
-   Search — search the table
    
-   Clear filters — clear the filters
    

![](images/drex_obekty_2_custom_2.png)

### Table columns

-   Actions — available actions for the Object's retranslation.
    
-   ID — the identifier of the retranslation record.
    
-   Agent id — the Object identifier.
    
-   Host —  the IP address or domain name of the external server.
    
-   Port — the port of the external server
    
-   Format — the data transfer protocol used.
    
-   Statistics / Err — a mini-chart of errors
    
-   Statistics / Send — a mini-chart of send attempts for the selected period
    
-   Statistics / Ack — a mini-chart of accepted packets for the selected period
    
-   Last id — the identifier of the last processed packet.
    
-   Uspw — authorization data
    
-   Time zone — the time zone of the Object's retranslation
    
-    ![](images/drex_obekty_2_custom_3.png) ![](images/drex_obekty_2_custom_4.png) — the state of the Object's retranslation (enabled or disabled).
    

### Actions with an Object

The following actions are available in the Actions column:

![Objects](images/drex_obekty_2_screen.png)

![](images/drex_obekty_2_custom_5.png) ![](images/drex_obekty_2_custom_6.png)   — enable or disable retranslation of the Object

![](images/drex_obekty_2_custom_7.png) Edit — open the Object's retranslation settings. You can also open the editing form by double-clicking the Object row.

In the editing form you can change the parameters that apply only to the selected Object:

![](images/drex_obekty_2_custom_8.png)

If you need to change the server address, port, data transfer protocol or connection path, open the settings of the corresponding endpoint on the [Endpoints](endpoints.html) tab.

## Working with retranslations from the “Machines” section

You can manage retranslations not only through the “Objects” tab in the “Retranslation” section, but also directly from the list of Objects in the “Machines” section.

To do this:

1\. Go to the “Machines” section

![](images/drex_obekty_2_custom_9.png)

2\. Select one or more machines

3\. Right-click

4\. In the context menu, select the “Retranslations” item

![](images/drex_obekty_2_custom_10.png)

### Retranslations of a single machine

If one machine is selected, the retranslations window of the selected Object opens.

![](images/drex_obekty_2_custom_11.png)

The window consists of two sections:

**Configuration — c**ontains the list of the Object's configured retranslations.

Here you can:

— add a new retranslation

— change an existing one

— delete a retranslation

— enable or disable data transfer

**Resend requests** — contains requests to resend historical data for the selected period.

### Retranslations of several machines

If several machines are selected, the menu item is displayed as “Retranslation (N)”, where N is the number of selected Objects.

![](images/drex_obekty_2_custom_12.png)

After the window opens, you can create the same retranslation for several machines at once.

![](images/drex_obekty_2_custom_13.png)

In this case, the system will create a separate retranslation record for each selected Object using the one selected endpoint.

### How to add a retranslation

1\. In the “Machines” section, select one or more Objects

2\. Open the context menu with a right click

3\. Select the “Retranslations” item

![](images/drex_obekty_2_custom_10.png)

4\. In the “Configuration” section, click the button ![](images/drex_obekty_2_custom_14.png)

![](images/drex_obekty_2_custom_11.png)

The retranslation creation form opens.

![](images/drex_obekty_2_custom_15.png)

Fill in the required parameters:

-   Endpoint — the data transfer destination
    
-   External ID — the Object identifier in the external system
    
-   Speed limit — the transfer speed limit
    
-   Time zone — the time zone
    
-   Uspw — authorization data
    
-   “Enabled” checkbox — enables or disables retranslation
    
-   Json config — additional parameters in JSON format
    
-   Schedule  — the data transfer schedule
    

The host, port, format and path fields are determined by the endpoint settings and cannot be edited in this form. To change these parameters, change the settings of the corresponding [endpoint](endpoints.html).

After saving, the Object will start transmitting data through the selected endpoint.

### Resend requests

The Resend requests section is intended for resending previously saved data for a specified period.

![Objects](images/drex_obekty_2_screen_2.png)

This function is used if data was not transferred to the external system for some reason or a repeated export of historical information is required.

How to create a request:

1\. In the Resend requests section, click the button ![](images/drex_obekty_2_custom_14.png)

2\. Specify the period start date

3\. Specify the period end date

![](images/drex_obekty_2_custom_16.png)

4\. Click “Add”

After creation, the request appears in the table.

![](images/drex_obekty_2_custom_17.png)

### Resend requests table columns

-   Start time — the start of the resend period
    
-   Stop time  — the end of the resend period
    
-   Create at — the date and time the request was created
    
-   Update at — the date and time the request was last changed
    
-   Status — the current state of the request:
    
-   New — the request has been created and is waiting to be processed
    
-   In Process — the data is being resent
    
-   Complete — processing is complete
    

After the request is completed, the data for the specified period will be retransmitted through the selected retranslation.
