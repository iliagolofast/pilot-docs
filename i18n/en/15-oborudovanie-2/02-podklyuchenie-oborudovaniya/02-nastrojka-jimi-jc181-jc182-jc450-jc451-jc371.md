---
title: "Setting up Jimi JC181/JC182/JC450/JC451/JC371"
---

For Jimi video recorders (JC181, JC182, JC450, JC451, JC371) to connect to the PILOT server and transmit data and video, you need to send them several commands.

You can send the commands to the device by SMS or through a remote management server (depending on how the device is configured).

Below are examples of commands for setting up the connection to PILOT.

### 1\. Server setup

<table><tbody><tr><td><span></span></td><td><div>SERVER,video.pilot-gps.com,6608,NA,NA,NA,NA#</div></td></tr></tbody></table>

This command tells the device where to send the data.

-   video.pilot-gps.com — PILOT server
    
-   6608 — port
    
-   NA — enter it if a parameter has no value (an empty field must always be filled with NA).
    

### 2\. APN setup

<table><tbody><tr><td><span></span></td><td><div>APN,internet,,,,,,,,,mtn,,mtn,,,,,,,</div></td></tr></tbody></table>

This command configures the access point for the SIM card so that the device can connect to the internet.

-   internet — access point name (APN)
    
-   mtn — login
    
-   mtn — password
    

### 3\. Device identifier setup

<table><tbody><tr><td><span></span></td><td><div>BCD,1#</div></td></tr></tbody></table>

This command determines which identifier the device will use:

-   1 = last 12 digits of the IMEI
    

### 4\. Time zone setup

<table><tbody><tr><td><span></span></td><td><div>TIMEZONE,±hh:mm</div></td></tr></tbody></table>

This command sets the time zone for the device so that event times on the server match the actual local time.

For example, Moscow time is UTC+03:00: TIMEZONE,+03:00

### 5\. Rebooting the device

<table><tbody><tr><td><span></span></td><td><div>REBOOT</div></td></tr></tbody></table>

 After all the settings are made, reboot the device so that the new parameters take effect.
