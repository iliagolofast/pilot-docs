---
title: "Connection Loss"
---

The “Connection Loss” report contains information about the periods when the system did not receive data from monitored Objects. Use it to find out which vehicle lost its connection, when it happened, how long it lasted, and where the Object was according to the last data received.

Before generating the report, you need to select the period and the vehicles and enter a value in the “Min. time (sec)” field.

![](images/drex_poterya_svyazi_custom.png)

The “Min. time (sec)” field sets the minimum duration of a connection loss for the Event to be included in the report. The value is specified in seconds.

For example:

-   120— the report shows intervals of two minutes or longer
    
-   300— the report shows intervals of five minutes or longer
    

![Connection Loss](images/drex_poterya_svyazi_screen.png)

Short intervals shorter than the specified value are not included in the report. This setting helps filter out brief connection interruptions and keep only significant Events.

### What the report shows

-   Object — name of the vehicle or other monitored Object
    
-   Folder — the folder containing the Object in the Object list
    
-   Start — date and time the interval began during which the system did not receive data from the Object
    
-   Stop — date and time the interval ended or data transmission was restored
    
-   Duration — total duration of the connection loss
    
-   Address — address or location of the Object according to the last available data
    

![](images/drex_poterya_svyazi_custom_2.png)
