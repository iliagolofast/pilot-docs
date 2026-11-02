---
title: "PILOT 7.8"
---

In PILOT 7.8 we made the platform even more convenient and functional. We added useful tools, expanded reports, and improved data accuracy so that you can find the information you need faster and solve work tasks easily.

## Interface and data improvements

### New access rights in the report builder

You can now manage access to reports flexibly: set rights to view, edit, and delete separately. For example, you can give an employee view-only access, without the ability to change or delete reports. This protects reports from accidental changes and deletion.

![](images/drex_pilot_7_8_custom.png)

### Choosing the speed source

In the object settings you can now choose the speed source: use GPS by default or specify another field, for example a CAN bus value. This function helps calculate mileage and driving time more accurately and take into account the specifics of different vehicle types. When choosing the speed source, you can also set the units of measurement right away.

![](images/drex_pilot_7_8_custom_2.png)

### Tracking temperature along the route

When you click the temperature chart in a report, you immediately see where the vehicle was on the map at that moment. This makes it easy to trace the relationship between temperature changes and the route.

![](images/drex_pilot_7_8_custom_3.png)

### Displaying sensor values in the mobile app

The sensor settings now have an option that lets you choose whether to show sensor values in the mobile app. If the option is on, the sensor value is visible on the smartphone. If it is off, the value is not shown in the mobile version.

![](images/drex_pilot_7_8_custom_4.png)

![](images/drex_pilot_7_8_custom_5.png)

### Displaying the “Under maintenance” status

Vehicles with the “Under maintenance” status are now more noticeable in the system: such objects appear in the general list with a wrench icon. When you click it, you see information about the dates of the current maintenance.

![](images/drex_pilot_7_8_custom_6.png)

### Sending location via Telegram

You can now use the updated function for sending coordinates via Telegram. It works on the new version of the Telegram API and is even more stable and accurate.

The updated Telegram bot can be used as a mobile tracker: send your location straight from the app, and the system receives this data in real time.

### Downloading a video segment

You can now export only the segment you need from videos received from connected devices. Open the recording, set the start and end time, and download a separate clip without unnecessary minutes.

Choose the exact interval and get a separate file, save time and traffic by not downloading the whole video, and prepare incident materials faster.

![](images/drex_pilot_7_8_custom_7.png)

### New “Points of interest” module

We added “Points of interest” so that you can mark important places on the map: offices, warehouses, parking lots, customer addresses, and other sites. For each point you can specify coordinates, choose a suitable icon, add a description, and combine it with others into a group by purpose.

![](images/drex_pilot_7_8_custom_8.png)

### Analytics update

**Connection status chart with percentages**

The vehicle connection status chart in the analytics section of the dashboard has been updated. The chart shows the percentage breakdown by connection status, so you immediately see what part of the fleet is currently online and which vehicles have not connected for a long time.

![](images/drex_pilot_7_8_custom_9.png)

**Grouping the rating by models**

In the vehicle rating you can now group data by vehicle model. You can compare indicators not only for individual vehicles but also by model.

![](images/drex_pilot_7_8_custom_10.png)

## New features and integrations

### AI bot: your technical assistant

We created a smart assistant that acts as a technical consultant. With it you can find answers to questions faster and get help right inside the system.

![](images/drex_pilot_7_8_custom_11.png)

The bot is available in all languages and is always ready to tell you:

-   how to use the platform's capabilities
    
-   where to find the information you need
    
-   how to solve technical tasks more easily
    

![](images/drex_pilot_7_8_custom_12.png)

Like any AI-based system, the bot can sometimes make mistakes. It is best to double-check important details or confirm them with the support team. Your feedback will help make it even more useful.

### Toll roads: expense control and route planning

Use the “Toll roads” function in the “Geofences” module to take toll road sections into account. With it you can:

-   control expenses and see when and how much your objects drove on toll roads
    
-   take toll sections into account when planning routes
    
-   analyze trips: toll road data is saved and available in reports
    

For details on how to work with toll roads and set up entry and exit sections, read this [article](../lichnyj-kabinet-polzovatelya/moduli-1/platnye-dorogi/index.html).

![](images/drex_pilot_7_8_custom_13.png)

### Yandex LBS integration

Object locations can now be determined with the Yandex LBS service: coordinates are available not only from GPS but also from cellular network and Wi-Fi data. As a result, the system keeps tracking vehicles even without a GPS signal, for example in underground parking lots or dense urban areas.

### Jimi video recorder support

You can now connect and use the Jimi JC400 video recorder to record and transmit video.

### CMSV6 passenger counter integration

We added support for CMSV6 passenger counting cameras. Based on data from these devices, two reports are now available:

-   the number of boardings and alightings in each departure and arrival geofence
    
-   overall passenger flow statistics for the selected period across all routes
    

These reports will help you better understand route load and plan vehicle operation more accurately.

### Wialon data migration wizard

Transferring objects and events from Wialon to PILOT is now easier. We created a separate module: the “Import from Wialon” migration wizard.

With the migration wizard you can:

-   create data transfer tasks
    
-   select the objects to transfer
    
-   see the status of each migration stage
    

### Two-way communication through the camera

If a video device is connected, you can talk to the driver through the camera as if on a call. Open the camera and click the intercom icon: the driver will hear you through the device's speaker and can reply.

With the intercom you can get in touch quickly without extra calls: right in the camera window you can clarify the situation on site, give instructions, and immediately get a voice confirmation.

![](images/drex_pilot_7_8_custom_14.png)

### Saving zones together with toll sections

You can now save and transfer geofences together with toll section and scheduler settings. Use the export and import buttons, and all parameters will be saved.

![](images/drex_pilot_7_8_custom_15.png)

### Sending coordinates from the “Situation center”

The “Situation center” module has a button for quickly copying a link to the vehicle's current location. You can copy the link with one click and send it to emergency services, colleagues, or other recipients, for example in case of theft, an emergency, or to clarify a route.

![](images/drex_pilot_7_8_custom_16.png)

### Improved bus arrival forecast

In the “Bus line management” module, the bus arrival forecast has been improved: the time is now calculated taking into account the actual road route.

Three new columns have appeared in the “Online” tab:

-   bus line name
    
-   next stop
    
-   scheduled arrival time at it
    

You immediately see which bus is running on which route, where it is heading, and when it will reach the next stop.

![](images/drex_pilot_7_8_custom_17.png)

### Driving and rest time control in the “Eco driving” module

In the “Eco driving” module you can set up rules for controlling drivers' driving and rest time.

You define:

-   how long a driver can be behind the wheel
    
-   how long they must rest between trips
    
-   daily and weekly rest periods
    

The system automatically monitors these parameters and warns you if the limits are exceeded. The function is based on tachograph logic, helping you comply with work and rest regulations and look after drivers' safety.

### Notification about repeated iButton use

A new notification type has been added. It is triggered if the same iButton is used on several vehicles within a set period of time. This way you can notice a driver change in time and avoid errors in the “driver – vehicle” assignment.

For the notification to work, objects must have an iButton sensor installed, and the “Drivers” and “Notifications” modules must be enabled.

![](images/drex_pilot_7_8_custom_18.png)

## Reports and automation

### Custom intervals in the report scheduler

In the scheduler you can now set any report sending interval, for example every 5 minutes, every hour, or another period. Reports are generated for completed periods. For example, if a report is set to be sent every 15 minutes, at 10:00 you receive data for the interval from 9:45 to 10:00. You can set up the schedule for your tasks and receive exactly the data you need.

![](images/drex_pilot_7_8_custom_19.png)

### New report for managing waste bins

The system has a new report on waste container management that helps analyze and optimize waste collection. It consists of two blocks:

**Service chart**

Shows how many times each container was serviced during the selected period. Based on this data you can:

-   assess compliance with the collection schedule
    
-   identify containers with high or low load
    
-   compare zones and bin types
    

![](images/drex_pilot_7_8_custom_20.png)

**Fill map**

Shows on the map the points where containers were full. Each circle shows how many times the bin was full during the selected period. The map helps you:

-   identify areas with regular overflow
    
-   identify districts where collection frequency needs to be increased
    
-   adjust routes and send vehicles to the busiest zones
    

![](images/drex_pilot_7_8_custom_21.png)

### Sensor templates for partner accounts

You can now create a sensor template for the entire partner account and apply it at once to all the objects you need with a particular device type. In the interface you can select and apply such a template to all objects; you don't have to configure each object separately.

![](images/drex_pilot_7_8_custom_22.png)

### Fuel report update

The fuel report, which calculates consumption based on sensor readings, now includes tables of refuels and fuel drains. In one report you now see both consumption and all refuel and drain events with dates and volumes.

![](images/drex_pilot_7_8_custom_23.png)

### Extended sensor reports

The report builder can now generate sensor reports with support for new parameters. You can configure a report to include:

-   geofence name
    
-   ignition status
    
-   door status
    
-   temperature
    
-   humidity
    

In one report you can see all vehicle and sensor parameters, as well as the geofence in which events were recorded. All the columns you need can be added flexibly through the report builder.

![](images/drex_pilot_7_8_custom_24.png)

### Notification templates

You can now create notification templates and transfer them between accounts. You can save notification settings from one account and apply them in another. This function helps you set up notifications for new or similar accounts faster and saves time.

![](images/drex_pilot_7_8_custom_25.png)

### Coordinates in the speeding report

Each record in the report now has exact coordinates. You immediately see where the violation occurred, can discuss the situation with the driver in specific terms, and can identify “dangerous” road sections to adjust routes.

![](images/drex_pilot_7_8_custom_26.png)

## PILOT mobile app updates

In the new version of the mobile PILOT we updated the interface, brought back the dark theme, and added useful functions. We fixed bugs and made the app more stable. Using the mobile PILOT is now even more convenient.

### Interface updates

We updated the color palette and synchronized it with the web version. Colors are now the same on all platforms.

We increased contrast and refreshed the shades so that the interface is easier to read and more comfortable to use on any screen. Working in the system has become visually cohesive and pleasant.

We updated markers and icons to make them more noticeable and clearer, so elements are readable at a glance and navigation is easier.

We moved some elements so that the data you need is found faster in familiar scenarios.

![](images/drex_pilot_7_8_custom_27.png)

### Dark theme

We brought back the dark theme. You can choose between light and dark, and by default the app follows the system theme.

![](images/drex_pilot_7_8_custom_28.png)

### “Video” section

**Camera previews**

The “Video” tab now shows previews of all connected cameras at once, making it easier to assess the picture and go to the one you need.

![](images/drex_pilot_7_8_custom_29.png)

**New video player**

We completely updated the player for online streams and video history:

-   modern design and simple controls
    
-   switching cameras with arrows
    
-   turning sound on and off
    
-   taking screenshots
    
-   full-screen video
    

![](images/drex_pilot_7_8_custom_30.png)

### Administrator login

Administrators can now log in to the app with their own username and immediately see the profiles of all users under the contract. You can quickly switch between accounts, help colleagues, and manage settings.

### Vehicle inspections

The app now includes the “Inspections” tool from the “Service” module. You can now check the condition of vehicles right from your phone:

-   record the vehicle's condition using ready-made forms
    
-   add comments and photos
    
-   confirm the result with a signature
    
-   review the inspection history to identify faults in advance and reduce downtime risks
    

![](images/drex_pilot_7_8_custom_31.png)
