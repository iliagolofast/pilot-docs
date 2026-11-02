---
title: "Engine blocking"
---

The engine blocking module lets you remotely block and unblock a vehicle through the system.

<table><tbody><tr><td><span></span></td><td><div>For the function to work, a special blocking relay must be installed on the vehicle.</div></td></tr></tbody></table>

## How to connect the module

Configuration is performed in the admin panel at the contract level.

1\. Open the contract card

2\. Right-click to open the contract menu and select “Edit”

![](images/drex_blokirovka_dvigatelya_custom.png)

3\. Go to the “Modules” tab

4\. Enable the engine blocking module

![Engine blocking](images/drex_blokirovka_dvigatelya_screen.png)

4\. Save the changes

## Command configuration

The module can be linked to any of your command templates:

1\. In the admin panel, go to the contract card

2\. Go to the “Module settings” tab

**![](images/drex_blokirovka_dvigatelya_custom_2.png)**

3\. Select the engine blocking module

4\. In the “Configs” block, add a configuration:

-   arm\_template\_id — the ID of the command template for blocking the engine
    
-   disarm\_template\_id — the ID of the command template for unblocking the engine
    

In the “Value” field, enter the ID of the command template you created.

5\. Save the contract settings

After that:

— when you click “Block”, the system sends the command from the arm\_template\_id template

— when you click “Unblock”, it sends the command from the disarm\_template\_id template

## How to block or unblock the engine

1\. In the user account, select the object you need

2\. Right-click the object to open its context menu

3\. Select “Block” or “Unblock”

![](images/drex_blokirovka_dvigatelya_custom_3.png)

![](images/drex_blokirovka_dvigatelya_custom_4.png)

4\. Enter the contract password to confirm and click the corresponding button

![](images/drex_blokirovka_dvigatelya_custom_5.png)

![](images/drex_blokirovka_dvigatelya_custom_6.png)

After confirmation, the command is sent to the device.

The contract's Master password, specified in its card, is used for confirmation.

![Engine blocking](images/drex_blokirovka_dvigatelya_screen_2.png)
