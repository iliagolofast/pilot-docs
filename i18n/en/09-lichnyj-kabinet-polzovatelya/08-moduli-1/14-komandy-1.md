---
title: "Commands"
---

-   Go to Commands.
    

![](images/drex_komandy_1_custom.png)

-   Click Add.
    
-   Select one or more devices.
    
-   Select a template.
    
-   Specify the command.
    
-   The Master password is located in the contract's main settings (admin panel).
    

![](images/drex_komandy_1_custom_2.png)

Select a ready-made template or create a new one, then click “Load”.

![](images/drex_komandy_1_custom_3.png)

Creating templates for sending commands

-   Click +
    
-   Click the Create button
    
-   Specify a name
    
    ![](images/drex_komandy_1_custom_4.png)
    
    Access rights to templates
    
    Use global templates for each language in commands.
    
    ![](images/drex_komandy_1_custom_5.png)
    
    One of the conditions for commands with configurable parameters is that the parameters are enclosed in percent signs, where **n-** is a number and **s** \- is a string.
    

![](images/drex_komandy_1_custom_6.png)

Commands for an object

-   Go to the user interface.
    
-   Open the object's context menu.
    
-   Select Commands.
    

![](images/drex_komandy_1_custom_7.png)

-   Select a command.
    
-   Send it.
    
-   To view the history, select a period and click the search icon.
    

![](images/drex_komandy_1_custom_8.png)

**Admin panel settings**

1\. Add the module to the account

2\. Configure the SMS gateway. Currently, smsgateway24 is supported.

**You need the device ID and the token from your smsgateway24 subscription:**

https://<address>/ax/commands/smsstatus.php?cmd=incoming

https://<address>/ax/commands/smsstatus.php?cmd=status

**Fill in these parameters in the module configuration section:**

Template configuration

**To configure templates:**

1\. Click the configuration button on the right

2.Open the “Commands” tab.

3.Click the “+” symbol, and a window opens that allows us to edit or add a new command:

In this window, we can add a new command, edit the message text, and select in the left panel which vehicles the message will be sent to.

1\. When we click the “Send” button, the system sends the message we wrote earlier to the vehicles selected in the left panel.

2\. The “Save template” option lets us save the template, which makes it easier to send this command in the future without re-entering the data. When you select this option, the system asks us to give our new template a name:

**Note:**

Only an administrator can create templates and assign rights to them to a user, and each template is created for only one device type.

Templates must be created for each device type. In the tree, devices are grouped by type:

**How to load a previously created template?**

1\. You need to select the devices

2\. Select the template you need.

3\. Click “Load template”

**How to delete a command? (available to the administrator only)**

In the list on the left, we can find the list of previously created templates; just click the icon to delete an unneeded command

**How to delete a template? (available to the administrator only)**

After the devices are selected, “Templates” shows us the existing templates, where we can delete one by clicking the icon:

**User rights to templates**

To configure user rights to templates, you need to:

1\. In the settings, select the “Personnel and groups” button and select the user whose rights you want to configure.

2\. The “Edit user” window opens, and we go to the “Commands” option, where we can find the templates and choose which templates this user will have rights to:

**The “Send command” option**

By left-clicking a vehicle, we can find the “Send command” option, which lets us see the history of sent messages and also resend messages.
