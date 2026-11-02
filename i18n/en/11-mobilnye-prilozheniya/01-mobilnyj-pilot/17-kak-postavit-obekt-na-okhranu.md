---
title: "How to arm an object"
---

To arm an object, a [security sensor](../../lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/index.html) must be set up on it. If the sensor is set up, an “Arming” item appears in the object menu.

# ![](images/drex_kak_postavit_obekt_na_okhranu_custom.png)   ![](images/drex_kak_postavit_obekt_na_okhranu_custom_2.png)

For the function to work, command templates named arm and disarm must also be created in the system. [Set them up](kak-postavit-obekt-na-okhranu.html#Как_настроить_шаблоны_команд) in the web interface beforehand, and the arming commands will appear:

-   Arm — arm the object
    
-   Disarm — disarm the object
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_3.png)  ![](images/drex_kak_postavit_obekt_na_okhranu_custom_4.png)

When the security status changes, the corresponding icon appears next to the object in the list:

![](images/drex_kak_postavit_obekt_na_okhranu_custom_5.png) — object is armed

![](images/drex_kak_postavit_obekt_na_okhranu_custom_6.png) — object is disarmed

![How to arm an object](images/drex_kak_postavit_obekt_na_okhranu_screen.png)  ![How to arm an object](images/drex_kak_postavit_obekt_na_okhranu_screen_2.png)

## How to set up command templates

Command templates are set up in the PILOT web interface:

1\. Open the user account

2\. Go to the “Main” section

3\. Click the “Commands” icon

![](images/drex_kak_postavit_obekt_na_okhranu_custom_7.png)

3\. A window opens where you can create command templates.

![](images/drex_kak_postavit_obekt_na_okhranu_custom_8.png)

### How to create a command template

1\. Click “Add command”

![](images/drex_kak_postavit_obekt_na_okhranu_custom_9.png)

2\. Select the object the command is created for

3\. Click ![](images/drex_kak_postavit_obekt_na_okhranu_custom_10.png)

![](images/drex_kak_postavit_obekt_na_okhranu_custom_11.png)

3\. Specify the parameters:

-   Command type — GRPS
    
-   Command kind — SMS\_VIA\_GPRS
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_12.png)

4\. In the “SMS” field, enter the command text, for example: setdigout 0 — disarm

![](images/drex_kak_postavit_obekt_na_okhranu_custom_13.png)

5\. If needed, select the hex checkbox if the command must be sent in HEX format

6\. Click “Save as template” and enter a name

![](images/drex_kak_postavit_obekt_na_okhranu_custom_14.png)

Template names must be exactly as follows:

-   arm — arm the object
    
-   disarm — disarm the object
    
    The names are written in lowercase. The app uses these names to find and run the commands.
    

## Command examples

Arming — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Device</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Command template</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Disarming — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Device</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Command template</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>
