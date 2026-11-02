---
title: "Data Quality"
---

The “Data Quality” report is designed to check the quality of the telematics data received from monitored Objects over the selected period. Use it to identify missing or delayed data, gaps between packets, GPS problems, sudden coordinate jumps, and other anomalies.

The Report helps you assess how suitable the received data is for building Tracks, calculating Mileage, processing Sensor readings, and performing subsequent recalculations. It takes into account not only the loss of connection with the Object but also the quality of the data already received.

The indicators are calculated separately for each Object for each day of the selected period.

![](images/drex_kachestvo_dannykh__data_quality__custom.png)

### What is analyzed

When assessing data quality, the system checks:

— delay in packets arriving at the server

— intervals between adjacent packets

— sudden coordinate jumps

— GPS signal quality, including the number of satellites and the HDOP value

— invalid packets and packets without coordinates

— packets with identical timestamps

— exceeding the maximum speed set for the Object

### What the report shows

-   Object — name or number of the monitored Object
    
-   Start — start of the analyzed period
    
-   Stop — end of the analyzed period
    
-   Score — overall data quality score on a scale from 0 to 100. The higher the value, the better the data quality
    
-   Status — overall state of data quality:
    
-   ok— the data meets the set requirements
    
-   warning— deviations requiring attention were detected
    
-   bad— significant data quality problems were detected
    
-   no\_data— there is no data for the analyzed period
    
-   Points — number of telematics packets received during the period
    
-   Problems — total number of detected deviations
    
-   Delay max — maximum delay of a packet arriving at the server
    
-   Gaps — number of significant gaps between adjacent packets
    
-   Longest gap — duration of the longest gap
    
-   GPS problems — number of problems caused by an insufficient number of satellites or an HDOP value above the allowed limit
    
-   Coord jumps — number of detected sudden coordinate jumps
    

![](images/drex_kachestvo_dannykh__data_quality__custom_2.png)

### Threshold values

The analysis uses allowed data transmission intervals, delays, gaps, the rate of coordinate change, and other threshold values. They can be configured individually for each Object.

If some parameters are not set, the system uses default values and the Object’s existing settings, including the minimum number of satellites, maximum HDOP, maximum speed, and allowed time without connection.
