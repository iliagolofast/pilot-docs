---
title: "How to set up control commands"
---

For the “Open” and “Close” buttons to work in the app, you need to set up the arm and disarm command templates in PILOT.

![How to set up control commands](images/drex_kak_nastroit_komandy_upravleniya_screen.png)

Command templates are set up in PILOT:

1\. Open the user account

2\. Go to the “Main” section

3\. Click the “Commands” icon

![How to set up control commands](images/drex_kak_nastroit_komandy_upravleniya_screen_2.png)

3\. A window opens where you can create command templates.

![](images/drex_kak_nastroit_komandy_upravleniya_custom.png)

## How to create a command template

1\. Click “Add command”

![How to set up control commands](images/drex_kak_nastroit_komandy_upravleniya_screen_3.png)

2\. Select the object the command is created for

3\. Click ![](images/drex_kak_nastroit_komandy_upravleniya_custom_2.png)

![](images/drex_kak_nastroit_komandy_upravleniya_custom_3.png)

3\. Specify the parameters:

-   Command type — GRPS
    
-   Command kind — SMS\_VIA\_GPRS
    

![](images/drex_kak_nastroit_komandy_upravleniya_custom_4.png)

4\. In the “SMS” field, enter the command text, for example: setdigout 0 — disarm

![](images/drex_kak_nastroit_komandy_upravleniya_custom_5.png)

5\. If needed, select the hex checkbox if the command must be sent in HEX format

6\. Click “Save as template” and enter a name

![](images/drex_kak_nastroit_komandy_upravleniya_custom_6.png)

Template names must be exactly as follows:

-   arm — arm the object
    
-   disarm — disarm the object
    
-   get\_beacon\_ids — get the tag list
    
    The names are written in lowercase. The app uses these names to find and run the commands.
    

## Command examples

Arming — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Device</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Command template</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Disarming — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Device</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Command template</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>

Getting the tag list — get\_beacon\_ids

A command for getting the list of Bluetooth tags registered on the device.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Device</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Command template</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; getparam 1600;1601;1602;1603;1604;1605;1606;1607;1608;1609;1610</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>For the commands to work correctly:</div><div>— the device must be online</div><div>— a security sensor must be set up in the system — it is needed so the app can show the current security status</div></td></tr></tbody></table>

After the templates are set up, the “Close” and “Open” buttons become active, and you can control the car from the “Car status” screen.
