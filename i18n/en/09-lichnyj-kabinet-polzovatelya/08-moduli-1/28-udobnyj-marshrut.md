---
title: "Convenient Route"
---

The integration passes data on trips and fare payments from the “Convenient Route” system to PILOT. Based on this data, you can analyze passenger flow and generate bus reports.

The setup consists of three stages:

1\. The contract administrator enables the required modules

2\. The server administrator sets up API access

3\. The user links payment terminals to buses

Before you start the setup, prepare:

-   the login and password for API access
    
-   the API address
    
-   the Terminal ID of each payment terminal
    

<table><tbody><tr><td><span></span></td><td><div>Terminal ID is the identifier of the payment terminal installed in a bus. PILOT uses this identifier to determine which bus the trip and payment data belongs to.</div></td></tr></tbody></table>

-   the list of buses with terminals installed
    

<table><tbody><tr><td><span></span></td><td><div>Before the setup, prepare the API address, login and password, and the terminal identifiers for the buses. If you do not have this data, contact the contract administrator or PILOT support. The specialists will tell you where to get it.</div></td></tr></tbody></table>

-   access to the PILOT admin panel
    
-   access to the config.php file on the server
    

### 1\. Enable the module

This stage is performed by the PILOT administrator

1\. Open the admin panel

2\. Go to the Contracts tab.

3\. Select the contract you need and right-click it

4\. Select “Edit”

![](images/drex_udobnyj_marshrut_custom.png)

5 In the contract card, go to the “Modules” tab and enable the “Convenient Route” and “Passenger flow” modules

![Convenient Route](images/drex_udobnyj_marshrut_screen.png)

6\. After enabling the modules, go to “Module settings” in the contract card

7\. Find and select the “Convenient Route integration” module

![](images/drex_udobnyj_marshrut_custom_2.png)

8\. In the “Configs” block, add the parameters

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Key</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Value</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Purpose</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; version</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Enables API version 2</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; field_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; For example, Terminal ID, gosNum</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span>Defines the field the integration uses to match data to a bus</span></div></td></tr></tbody></table>

9\. Click “Save”

### 2\. Set up the API connection

This stage is performed by the server administrator.

Open the config.php file on the server and add the parameters:

<table><tbody><tr><td><span></span></td><td><div>// Удобный маршрут 2.0</div><div>$convroute_url = 'http://195.19.176.128:3000/api';</div><div>$convroute_user = '&lt;логин API&gt;';</div><div>$convroute_pass = '&lt;пароль API&gt;';</div></td></tr></tbody></table>

**![](images/drex_udobnyj_marshrut_custom_3.png)**

Instead of the placeholders, enter the login and password received for your organization.

Save the changes in the config.php file.

### 3\. Specify the bus Terminal ID

This stage is performed by a user with rights to edit vehicles.

The way to fill it in depends on the value of the field\_name parameter and the contract configuration.

If the Terminal ID field is used:

1\. Open the card of the bus you need

2\. Go to the “General” section

3\. Find the “Terminal ID” field

![Convenient Route](images/drex_udobnyj_marshrut_screen_2.png)

4\. Enter the identifier of the terminal installed in this bus

5\. Click “Save”

In some configurations a separate Terminal ID field may not be displayed. If the field you need is missing or you are not sure where to enter the identifier, contact the contract administrator or PILOT support.

### 4\. Check that data is arriving

After the setup, wait for new transactions to appear in the “Convenient Route” system. Then generate a report:

1\. Open the “Reports” section.

2\. Go to the “Passenger flow” group

3\. Select a bus

4\. Specify the period in which payments were made through the terminal

5\. Select the “Summary for Convenient Route” report

6\. Generate the report

7\. Check that data is present

With the integration enabled, the following reports may also be available:

-   Summary for ASOP No. 2
    
-   Summary for ASOP No. 3
    
-   Summary for ASOP No. 4
    
-   City bus + Convenient Route
    
-   Passenger transportation report
    
-   other reports of the [“Passenger flow”](../otchyety-1/tipy-otchyetov/passazhiropotok/index.html) group
