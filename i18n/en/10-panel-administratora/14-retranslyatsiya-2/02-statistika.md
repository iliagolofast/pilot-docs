---
title: "Statistics"
---

The Statistics tab shows data transfer statistics and information about possible retranslation errors.

To open the statistics, go to the “Retranslation” → “Statistics” section.

![](images/drex_statistika_custom.png)

The page lets you monitor retranslation, track the success of data transfer, analyze errors and identify problem Objects or transfer destinations.

![](images/drex_statistika_custom_2.png)

The statistics are generated from the retranslation service data and are displayed according to the current User's access rights.

The administrator can view global statistics for the whole system or statistics for individual endpoints.

A Partner user sees statistics only for their own endpoints and the endpoints of Partners below them in their hierarchy.

### Statistics view modes

The Scope filter is available to the administrator:

-   Global — statistics for the whole retranslation system.
    
-   Endpoints — statistics for individual data transfer destinations.
    

![](images/drex_statistika_custom_3.png)

Users with the Partner role work only in Endpoints mode.

## Statistics filters

At the top of the page there are filters that let you select the data you need for analysis.![](images/drex_statistika_custom_4.png)

### Scope (Statistics scope)

Defines the source of the statistics:

-   Global — statistics for the whole system;
    
-   Endpoints — statistics for individual endpoints.
    

Available to administrators only.

### Protocol

A filter by data transfer protocol. It lets you display statistics only for the selected protocol.

### Metric

Defines which events will be displayed in the charts and tables.

The following values are available:

-   All metrics — all metrics
    
-   OK only — only successfully accepted packets
    
-   Errors only — only errors
    
-   Spooled only — only packets placed in the queue
    
-   Dropped only — only dropped packets
    

### Endpoint

Lets you select one endpoint or a group of endpoints for analysis.

The list of endpoints is grouped by Partner.

### Loop threshold/hour (Cyclic transmission threshold per hour)

Used to find Objects with a suspiciously large number of transmitted packets.

If the number of packets exceeds the specified threshold, the Object may appear in the Loop suspicion table.

### From and to

The start and end of the analyzed period.

Time on the charts is displayed in the User's local time zone in 24-hour format.

## Statistics charts

At the top of the page, charts are displayed that help you quickly assess the state of retranslation.

**![](images/drex_statistika_custom_5.png)**

### Traffic over time

Shows the change in the number of packets over time.

The chart helps you identify:

— periods of high activity

— a sharp increase in load

— the moments errors appear

— periods with no data transfer

### Outcome

Shows the distribution of data transfer results.

From the chart you can quickly assess:

— how many packets were successfully accepted

— how many packets ended with an error

— how many packets were placed in the queue

— whether there are problems with data transfer

![](images/drex_statistika_custom_6.png)

### By protocol

Compares statistics across different data transfer protocols.

The chart lets you determine:

— which protocol is used most often;

— which protocol has more errors

— which protocols create the main load

### By endpoint

Compares statistics between endpoints.

From the chart you can quickly determine:

— the most active endpoints

— endpoints with an increased number of errors

— the transfer destinations with the highest load

If you click any endpoint on the By endpoint chart, the system automatically:

— selects this endpoint in the filter

— updates the other charts

— updates the statistics tables

— shows information only for the selected endpoint

![](images/drex_statistika_custom_7.png)

## Metrics

The following indicators are used in the statistics.

### Accepted / Ack

The number of packets successfully accepted by the external system. The higher this indicator, the more successfully retranslation is working.

### Send

The number of packet send attempts. Shows the total volume of outgoing data transfer.

### Errors

The number of sending or connection errors. A rise in this indicator usually points to problems with the connection, the endpoint settings or the availability of the external system.

### Spooled

The number of packets placed in the send queue. Such packets will be sent later, when transfer becomes possible.

### Dropped

The number of packets that were dropped by the service and will not be transferred.

### Queue

The current size of the endpoint queue. If the value keeps growing, this may indicate problems sending data to the external system.

## Statistics tables

Tables with information are located below the charts.

![](images/drex_statistika_custom_8.png)

### Top endpoints

A list of endpoints with the largest number of transferred packets for the selected period.

Lets you quickly identify the most active data transfer destinations.

### Recent endpoint errors

A list of the latest retranslation errors.

The table helps you quickly understand the cause of data transfer problems and identify the endpoint where the error occurred.

### Top vehicles for endpoint

A list of Objects that generated the largest volume of traffic for the selected endpoint.

Used to analyze load and find the most active Objects.

![](images/drex_statistika_custom_9.png)

### Loop suspicion

A list of Objects that exceeded the set threshold of packets per hour.

This situation may indicate cyclic data transmission, a hardware configuration error or incorrect operation of the integration.

If Objects appear in this list, it is recommended to check the retranslation settings and the data source.

![](images/drex_statistika_custom_10.png)
