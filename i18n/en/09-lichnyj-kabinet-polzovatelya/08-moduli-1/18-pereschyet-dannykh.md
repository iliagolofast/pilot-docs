---
title: "Data recalculation"
---

The recalculation module reprocesses an object's data for a selected period and updates information about trips and geofence visits if settings have changed or information was displayed incompletely.

Two types of recalculation are available:

-   Trips — the system regenerates the object's trips
    
-   Geofences — the system reprocesses data on the object's presence in geofences
    

## How to start a recalculation

1\. Go to the “Main” section → “Online” tab

2\. Find the object you need in the list

3\. Right-click it

4\. Select “Data recalculation”

![Data recalculation ](images/drex_pereschyet_dannykh__screen.png)

5\. In the “Recalculation type” field, select which data to update:

![](images/drex_pereschyet_dannykh__custom.png)

-   Trips — the system recalculates the object's trips
    
-   Geofences — the system reprocesses data related to the object's presence in geofences
    
    6\. In the “Number of days” field, specify the recalculation period
    
    7\. Click “Start”
    

After the start, the request is queued for processing.

<table><tbody><tr><td><span></span></td><td><div>Recalculation does not run immediately. Processing time depends on the selected period and the amount of data.&nbsp;The&nbsp;longer the period, the longer the recalculation may take.</div></td></tr></tbody></table>

After processing is complete, the results are available in the recalculation history.

## How to view the recalculation result

To check the status of a recalculation, click “History” in the “Data recalculation” window.

![Data recalculation ](images/drex_pereschyet_dannykh__screen_2.png)

A list of all recalculations that were run for the selected object opens. Here you can check the recalculation parameters, its status, and the processing result.

![](images/drex_pereschyet_dannykh__custom_2.png)

The table shows:

-   Object — the object the recalculation was run for
    
-   Recalculation type — trips or geofences
    
-   Days — the number of days selected at launch
    
-   Requested — the date and time the request was sent
    
-   Processed — the date and time of processing or of the last status update
    
-   Result — the current status and information about the recalculation
    

If the “Processed” and “Result” fields are not yet filled in, the recalculation may be queued or in progress. Open the history later to check its status.

After a trip recalculation, the result may show:

-   Run time — the processing duration in seconds
    
-   Agents — the number of processed messages from the object
    
-   Points — the number of processed points
    
-   Tracks — the number of generated trips
    
-   Parkings — the number of generated parkings
    

After a geofence recalculation, the result may contain service records, execution time, and the number of processed geofences. This information is used mainly for diagnosing the system. For normal operation, it is enough to make sure the recalculation completed successfully.

![](images/drex_pereschyet_dannykh__custom_3.png)

<table><tbody><tr><td><span></span></td><td><div>If the recalculation did not start, finished with an error, or no data appeared after it, contact support.</div></td></tr></tbody></table>
