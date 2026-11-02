---
title: "PILOT 7.7"
---

In version 7.7 we updated the interface design, added new features, improved working with reports, and expanded API request capabilities so that managing objects, contracts, and routes is even easier.

## [Updated user interface](../lichnyj-kabinet-polzovatelya/interfejs-lichnogo-kabineta/index.html)

### New design

We reworked the interface design to create an intuitive and visually appealing user experience. The new design keeps a clean, structured look, improves navigation in the user account, and makes the main functions more accessible.

![](images/drex_pilot_7_7_custom.png)

### Color update

We reworked the palette and refreshed the interface colors to make it more readable and comfortable to work with on different screens. Improved contrast and updated aesthetics make working with the system smoother and more engaging.

### New settings menu

All rarely used functions, such as choosing the language, switching the theme, viewing news, and contacting technical support, are now gathered in one menu. This frees up screen space for the main functions and keeps the interface simple and clear.

![](images/drex_pilot_7_7_custom_2.png)

### Optimized map tools

All map tools are now gathered in one place: a special panel in the lower right corner of the screen. You no longer need to spend time looking for tools in different parts of the screen; everything you need is at hand.

![](images/drex_pilot_7_7_custom_3.png)

### Improved navigation with a new menu structure

We moved the second-level menu to the left. The main sections are located at the top, as before, and the section tabs are on the left. This layout simplifies navigation and helps you find the information you need faster.

![](images/drex_pilot_7_7_custom_4.png)

## New features for work

### [Module](../lichnyj-kabinet-polzovatelya/moduli-1/vesy.html)

### “Scales”

The new version adds the “Scales” module, which helps control vehicle weighing operations. You can now:

       — add new weighing stations

       — track weighing history

       — export weighing data for reports

![](images/drex_pilot_7_7_custom_5.png)

### Updates in the

### [“Service” module](../lichnyj-kabinet-polzovatelya/moduli-1/servis/index.html)

In this update we focused on improving the module's structure and tab navigation. We also added a new feature: vehicle technical inspection. You can now check a vehicle before a trip or acceptance:

-   Create inspection reports for specific vehicles
    
-   Answer checklist questions
    
-   Attach photos and supporting documents
    
-   Mark the condition of parts
    

The new tool helps you quickly assess the condition of a vehicle and improves fleet safety.

![](images/drex_pilot_7_7_custom_6.png)

### [ICCID field for identifying SIM cards](../lichnyj-kabinet-polzovatelya/obekty-1/kartochka-obekta/index.html#ICCID)

We added a new ICCID field to the object card, the unique identifier of a SIM card, which:

-   Lets you identify SIM cards
    
-   Simplifies entering and managing SIM data
    
-   Automatically fills in missing ICCID data when integrated with a SIM provider
    

![](images/drex_pilot_7_7_custom_7.png)

### [Notifications with an exact timestamp](../lichnyj-kabinet-polzovatelya/moduli-1/uvedomleniya/index.html)

We added the time to every notification. When you come back after a period without connection, you will see the exact sequence of all events. SMS and push messages will show what happened and when.

### [Switching between routes and stops](../lichnyj-kabinet-polzovatelya/moduli-1/marshruty-3/kak-sozdat-marshrut-cherez-trek-v-istorii.html)

Routes and stops can be displayed separately. The function lets you view routes without stops overlapping and makes the map clearer.

![](images/drex_pilot_7_7_custom_8.png)

### [Recalculating driver performance data](../panel-administratora/pereraschyety.html)

Administrators can now recalculate driver performance data for any specified period, keeping reports up to date.

![](images/drex_pilot_7_7_custom_9.png)

### [Deleting objects through the admin panel](../panel-administratora/mashiny/udalit-2.html)

Previously, to delete an object you had to switch from the admin panel to the user interface. We have now added a “Delete” button directly in the “Vehicles” tab of the admin interface. You don't need to switch between interfaces.

![](images/drex_pilot_7_7_custom_10.png)

### Improved data protection for retransmission

The admin panel can now hide confidential retransmission data (tokens, passwords, user names) from partners. Partners who use SAW retransmission can still work with the system but no longer see this information. This means you can share access safely without worrying about the risk of information leaks.

![](images/drex_pilot_7_7_custom_11.png)

## New API capabilities

### [New API for moving objects to new contracts](../rabota-s-api-zaprosami/api-administratora/peremeshchenie-obekta-mezhdu-dogovorami.html)

You can now move vehicles between accounts quickly with the new API. Just specify the vehicle ID and the new account in the API request, and the object is moved.

### [Extended API for adding vehicles](../rabota-s-api-zaprosami/api-administratora/dobavlenie-transportnogo-sredstva.html)

We extended the API functionality:

-   When creating a new vehicle you can now specify the device's MAC address, and in this case the system automatically creates a record for the object in the “Buses” tab of the admin panel.
    
-   The API now supports a second SIM card for devices with two slots, which improves the reliability of the network connection.
    

### [Updated API for managing bus trips](../rabota-s-api-zaprosami/api-polzovatelya-v2/upravlenie-avtobusnymi-rejsami.html)

We updated the API for creating routes and assigning buses to trips. The path for getting this information has changed: all requests must now be sent to the new address.

### [Extended API for getting eco driving data](../rabota-s-api-zaprosami/api-polzovatelya-v2/dannye-ob-ehkodrajvinge.html)

The API for getting eco driving data now includes additional parameters:

-   account number
    
-   account name
    
-   vehicle name and type
    
-   unique GPS tracker number
    

You can also get data on all vehicles linked to your account in a single request.

## Report updates

### [Report on inactive objects](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/ustrojstva-oflajn.html)

We created a new “Offline devices” report. It shows a list of objects with which there is currently no connection. Use this report in the “Report scheduler” to generate and send it automatically on a schedule.

![](images/drex_pilot_7_7_custom_12.png)

### Saving temperature reports to Excel

You can now export temperature reports to Excel. Export all the data in a convenient table format for further work. Build charts, analyze temperature readings, and keep the measurement history in the familiar Excel format.

### [New mileage report](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/pomesyachnyj-otchyet-po-probegu.html)

We created a monthly mileage report that provides mileage information for each month, as well as the vehicle's total mileage for the entire selected period.

![](images/drex_pilot_7_7_custom_13.png)

### [Time interval selection in the refrigerator report](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/bazovye/otchyet-o-refrizheratore.html)

We added a time interval selection to the refrigerator report. Configure reports on the operation of refrigeration units for specific periods by specifying the interval you need between data records.

### [Toll points report with geofence group information](../lichnyj-kabinet-polzovatelya/otchyety-1/tipy-otchyetov/geozony-1/svodnyj-otchyet-po-platnym-dorogam.html)

The toll points report now shows not only the geofence where the toll point is located but also the geofence group it belongs to.

### New eco driving reports

We added 5 new reports that help control drivers' driving style. The reports show data on speeding violations and identify drivers with the lowest eco driving scores.
