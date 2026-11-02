---
title: "BRAG Driving Safety Report (BRAG Report)"
---

The BRAG Report is designed to assess driving safety and assign Drivers to BRAG categories. The Report was developed to meet QatarEnergy requirements for IVMS vehicle monitoring systems.

The system analyzes recorded violations: speeding, harsh acceleration, braking, and cornering, as well as seat belt violations. Based on the results, each active Driver is given an overall score and a color category.

Before generating the report, you need to select the period and the vehicles or a vehicle group. Drivers for whom data was received during the selected period are included in the calculation.

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom.png)

### General information

The top of the report shows:

-   Contractor — contractor name
    
-   Project — project name
    
-   Department — the unit the report was generated for
    
-   Report period — start and end of the analyzed period
    
-   Generated — date and time the report was generated
    
-   Report type — report type, for example Weekly/Monthly
    

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_2.png)

### Fleet Overview

The Fleet Overview block contains general information about the fleet:

-   Total Vehicles — total number of selected vehicles
    
-   Active Drivers — number of Drivers with recorded activity during the selected period
    
-   Total Distance (km) — total vehicle mileage in kilometers
    
-   Total duration — total vehicle operating time
    

The number of active Drivers may be lower than the number of vehicles: only Drivers for whom the system received the necessary data are included in the BRAG distribution.

### BRAG Performance Distribution

The BRAG Performance Distribution block shows the distribution of active Drivers across four categories. For each category, the number of Drivers and their share of the total number of active Drivers are displayed:

-   BLUE — Outstanding — outstanding driving performance
    
-   GREEN — Acceptable — acceptable performance
    
-   AMBER — Attention Required — performance requires attention
    
-   RED — Action Required — action must be taken
    

The category color is also used to highlight the Driver’s name in the detailed table:

-   blue — BLUE category
    
-   green — GREEN category
    

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_3.png)

-   yellow — AMBER category
    
-   red — RED category
    

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_4.png)

The higher the overall score and the number of violations, the more attention the driving style requires.

### Fleet Performance Summary

The Fleet Performance Summary block contains summary indicators for the selected fleet:

-   Fleet Average Score — average overall score of the Drivers
    
-   Total events — total number of recorded events and violations
    
-   Events per 100 km — average number of events per 100 km of mileage. This indicator lets you compare the results of Drivers and units with different mileage.
    

### Individual Driver Performance

The Individual Driver Performance block gives detailed results for each Driver.

The table shows:

-   Driver ID — Driver identifier
    
-   Driver Name — Driver name
    
-   Duration HH:MM:SS — total Driver working time
    
-   Distance (km) — distance traveled
    
-   Overspeed 120 kph — number of speeding events in the 120 km/h category
    
-   Overspeed 100 kph — number of speeding events in the 100–119 km/h category
    
-   Overspeed 80 kph — number of speeding events in the 80–99 km/h category
    
-   Overspeed 60 kph — number of speeding events in the 60–79 km/h category
    
-   Overspeed 40 kph — number of speeding events in the 40–59 km/h category
    
-   Overspeed 30 kph — number of speeding events in the 30–39 km/h category
    
-   Harsh Accel — number of harsh accelerations
    
-   Harsh Braking — number of harsh braking events
    
-   Harsh Cornering — number of harsh cornering events
    
-   Seatbelt Violation — number of seat belt violations
    
-   Driver Score — the Driver’s overall score, which determines the Driver’s BRAG category
    

## Preparing data for the report

Violation data comes into the report from the [Notifications](../../../moduli-1/uvedomleniya/index.html) configured for the vehicles. Therefore, before using the report, you need to [create the required Notifications](../../../moduli-1/uvedomleniya/kak-sozdat-uvedomlenie.html) and assign them to the corresponding vehicles.

The algorithm identifies the Event type by the Notification name. The names must strictly match the established template:

-   BRAG Harsh Braking
    
-   BRAG Harsh Acceleration
    
-   BRAG Harsh Cornering
    
-   BRAG Overspeed
    
-   BRAG Overspeed 30-39
    
-   BRAG Overspeed 40-59
    
-   BRAG Overspeed 60-79
    
-   BRAG Overspeed 80-99
    
-   BRAG Overspeed 100-119
    
-   BRAG Overspeed 120
    
-   BRAG Seatbelt Violation
    

![BRAG Driving Safety Report (BRAG Report)](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__screen.png)

Assign the Notifications to the vehicles whose data should be included in the report.

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_5.png)

If the Notification name has been changed, the Notification is missing, or it is assigned to the wrong vehicle, the algorithm may not recognize the Event. In this case, the violation will not appear in the report and the overall figures may be calculated incorrectly.
