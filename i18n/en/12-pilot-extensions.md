---
title: "PILOT Extensions"
---

PILOT Extensions is a tool that lets developers extend the functionality of the PILOT monitoring system. With it you can add new features, integrate external services and adapt the platform to specific tasks.

PILOT Extensions is suitable for:

— developers and integrators who want to adapt the system to specific business tasks and connect external services.

— companies that need more functionality than the standard version offers, for example, creating custom reports, integrating with other systems or customizing interfaces and visualizations

— teams that want to quickly develop and test new ideas by building prototypes and minimum viable extensions (MVPs) for further iteration

— organizations that value flexibility and the ability to extend the platform so that it can adapt to change and grow with the business

### Where to find documentation and examples

All the material you need to get started with PILOT Extensions can be found in the official GitHub repository:

-   [PILOT Extensions repository](https://github.com/pilot-telematics/pilot_extensions)
    
-   [Quick start guide in Russian](https://github.com/pilot-telematics/pilot_extensions/blob/main/README_RU.md)
    
-   [Quick start guide in English](https://github.com/pilot-telematics/pilot_extensions/blob/main/README.md)
    
-   [Usage examples and instructions for working with ChatGPT to generate code](https://github.com/pilot-telematics/pilot_extensions/tree/main/docs/ChatGPT_Prompts)
    
-   [API documentation for working with maps and markers](https://github.com/pilot-telematics/pilot_extensions/tree/main/docs)
    

### How to get started

1\. Go to the [PILOT Extensions repository](https://github.com/pilot-telematics/pilot_extensions) on GitHub

2\. Read the installation and setup guide in the README file

3\. Choose a suitable template or example for your extension — you will find examples and instructions in the docs folder

4\. Implement your logic

5\. Integrate the extension into the PILOT interface as described in the repository documentation

<table><tbody><tr><td><span></span></td><td><div>For a clear explanation of the process of creating extensions with PILOT Extensions, we have prepared the video <a href="https://youtu.be/Gw1SdHo-kxM?si=mDjEIpw-oaqCc7EK "><span>“How to create your own app with PILOT Extensions”</span></a>.&nbsp;</div><div>It shows how to use artificial intelligence to generate code automatically, connect data from PILOT, work with the API and integrate the extension into the system interface.</div><div><div><a href="https://youtu.be/Gw1SdHo-kxM?si=mDjEIpw-oaqCc7EK " title="560_315">https://youtu.be/Gw1SdHo-kxM?si=mDjEIpw-oaqCc7EK</a></div></div></td></tr></tbody></table>

## What PILOT extensions look like in the interface

If extensions are available for your account, you can open the list from the additional actions menu:

1\. Click ![](images/drex_pilot_extensions__custom.png) in the upper right corner

2\. In the drop-down list, select “Extensions”

![](images/drex_pilot_extensions__custom_2.png)

A window with the list of available extensions then opens.

### Extension list

The “Extensions” window shows all extensions available for your account.

![](images/drex_pilot_extensions__custom_3.png)

The list is displayed as cards. For each extension, the following are usually shown:

-   extension icon
    
-   name
    
-   author
    
-   short description
    
-   enable switch
    
-   ![](images/drex_pilot_extensions__custom_4.png) button with information about the extension
    

If there are many extensions, you can use the search bar ![](images/drex_pilot_extensions__custom_5.png) at the top of the window to find the one you need quickly.

### How to enable or disable an extension

To the left of each extension there is a switch.

![](images/drex_pilot_extensions__custom_6.png) If the switch is on, the extension is active for the user

![](images/drex_pilot_extensions__custom_7.png) If the switch is off, the extension is not available in the interface

After you enable it, the extension may:

-   appear as a new menu item
    
-   open as a separate module
    
-   add new interface elements or actions to the system
    

### Extension information

To the right of each extension there is a button 

### ![](images/drex_pilot_extensions__custom_4.png).

![PILOT Extensions ](images/drex_pilot_extensions__screen.png)

If you click it, a page with information about the extension opens.

![](images/drex_pilot_extensions__custom_8.png)

### Unpublished extensions

In the upper right corner of the extensions window there is the Show drafts option.

![PILOT Extensions ](images/drex_pilot_extensions__screen_2.png)

Turning it on shows in the list not only published extensions but also draft versions — that is, extensions that have not yet been released.

A draft is a working version of an extension that is under development, testing or refinement.

This option is used when you need, for example, to check an extension before publication or to test a new feature.

<table><tbody><tr><td><span></span></td><td><div>The&nbsp;Show drafts&nbsp;option is available to administrators only.</div></td></tr></tbody></table>

### Example extension

One example of an extension is Airports List. This is a module that shows a list of airports and their locations on the map.

After you enable the extension:

-   a new section appears in the interface
    
-   a screen with the list of airports opens
    
-   a map is displayed alongside
    
-   when you select a row in the list, you can immediately see the airport on the map
    

Such an extension adds a new working tool to the system, rather than just a separate setting.

![](images/drex_pilot_extensions__custom_9.png)
