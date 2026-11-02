---
title: "Idling Report"
---

The Idling Report is designed to monitor the duration of vehicle idling. It lets you determine when and where idling occurred, how long it lasted, which Driver was assigned to the Object, and how much fuel was used during this period.

![](images/drex_otchyet_po_prostoyam_custom.png)

### How idling is determined

Idling is a period during which the vehicle did not move for longer than the allowed time set [in the Object settings](../../../obekty-1/kartochka-obekta/index.html#Настройки_объекта).

The allowed duration is set in the Object card in the “Idling” field. If needed, you can enable ignition tracking. In this case, idling is recorded only if the vehicle is not moving with the ignition on.

![](images/drex_otchyet_po_prostoyam_custom_2.png)

1 — Set the idling time

2 — Enable ignition tracking

### What the report shows

-   Vehicle — name or number of the monitored Object
    
-   Driver — the Driver assigned to the vehicle or identified by the system, for example, by iButton
    
-   Department — the group the vehicle belongs to
    
-   Vehicle type — type of vehicle, for example, passenger car or truck
    
-   Start — date and time the idling began
    
-   Stop — date and time the idling ended
    
-   Duration (hh:mm:ss) — idling duration, calculated as the difference between the start and end times
    
-   Address — the address where the vehicle was during the idling
    
-   Coordinates — latitude and longitude of the idling location
    

![](images/drex_otchyet_po_prostoyam_custom_3.png)

### Excessive fuel consumption

Before generating the report, you can check the “Excessive fuel” box. If a fuel level or fuel consumption sensor is configured for the Object, an additional column appears in the report:

-   Excessive fuel — the amount of fuel used by the vehicle during idling.
    

![Idling Report](images/drex_otchyet_po_prostoyam_screen.png)

![](images/drex_otchyet_po_prostoyam_custom_4.png)

### Filter by Drivers

If you enable the “On Driver” option, an additional “Drivers” panel opens to the right of the Object list.

![Idling Report](images/drex_otchyet_po_prostoyam_screen_2.png)

1 — Enable the Driver filter

2 — Select a Driver from the list

In this panel you can select one Driver, several Drivers, or a group of Drivers. The report will show only Events related to the selected Drivers.
