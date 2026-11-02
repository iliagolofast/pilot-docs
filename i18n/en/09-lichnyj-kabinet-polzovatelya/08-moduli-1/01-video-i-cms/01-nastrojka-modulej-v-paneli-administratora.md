---
title: "Configuring modules in the admin panel"
---

For dash cams and cameras to work in the system, you need to enable two modules: “Video” and “CMS”.

They work together:

-   “CMS” connects the devices and receives the data stream
    
-   “Video” shows streams, stores the archive, and provides access to the player
    

If you enable only one of them, the connection of cameras and dash cams will be incomplete.

## Enabling the modules

If you have administrator access:

1\. Log in to the admin panel

2\. Go to the “Contracts” tab

3\. Select the contract you need

4\. Right-click the contract and select “Edit”

![](images/drex_nastrojka_modulej_v_paneli_administratora_custom.png)

5\. Go to the “Modules” tab

6\. Select the check boxes next to the “Video” and “CMS” modules

![](images/drex_nastrojka_modulej_v_paneli_administratora_custom_2.png)

After that, the modules will be activated for the selected contract.

## Configuring CMS

1\. Go to the “Module settings” tab

![](images/drex_nastrojka_modulej_v_paneli_administratora_custom_3.png)

2\. Select the “CMS” module

3\. Find the “Configs” section; it is empty by default

4\. Specify the keys:

-   url: video.pilot-gps.com
    
-   account: login
    
-   password: password
    
    <table><tbody><tr><td><span></span></td><td><div>To get the login and password, contact technical support. For security reasons they are not published in this guide.</div></td></tr></tbody></table>
    

After that, the CMS module will be configured.

When everything is set up, the PILOT system will:

-   receive video online
    
-   save recordings from dash cams and cameras
    
-   combine telemetry (speed, location, events).
