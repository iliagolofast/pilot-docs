---
title: "Time error in object data"
---

PILOT checks the time in the data transmitted by the tracker. If the data is too old or contains a date from the future, a red error icon appears in the object list next to the object's status.

![](images/drex_oshibka_vremeni_v_dannykh_obekta_custom.png)

The object may still appear online, but new points may not appear on the map. The “Online” status shows that the tracker maintains a connection with the system. The error icon helps you understand why the incoming data does not update the object's position.

## How to view the details

Click the red icon next to the object. The “Data error” window opens with the following information:

![](images/drex_oshibka_vremeni_v_dannykh_obekta_custom_2.png)

-   Current problem — the tracker transmits data that is too old or data with a date from the future
    
-   Last correct update — the time of the last update with a correct time
    
-   Error started — when the system detected the current problem
    
-   Last incorrect packet — the date and time specified by the tracker in the latest data with the error. This time may differ from the time the system received it.
    

## What to do when the error appears

1\. Check the date, time, and time zone in the tracker settings. Incorrect settings may cause the error

2\. Check time synchronization. If the tracker receives time from GPS or GLONASS, make sure synchronization works. If the time is not updated, restart the tracker

3\. If the error persists, contact the specialist who services the hardware. Give them a screenshot of the “Data error” window. The specialist will check the firmware, the data transmission settings, and the reason why old data or data with a date from the future is being sent

4\. If you need help from PILOT technical support, specify the object name and the tracker ID, and attach a screenshot of the “Data error” window. The screenshot shows the type of problem and the update times

The red icon next to the object disappears automatically after data with a correct time is received. The OK button only closes the window and does not eliminate the error.
