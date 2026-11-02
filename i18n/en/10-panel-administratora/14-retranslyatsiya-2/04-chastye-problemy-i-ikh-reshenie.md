---
title: "Common problems and solutions"
---

### No data in the external system

If data does not appear in the external system, check:

— whether the endpoint is enabled

— whether retranslation of the Object is enabled

— whether External ID is filled in correctly

— whether the endpoint settings are correct (host, port, format, path)

— whether the authorization data (Uspw) is specified correctly

— whether there are errors on the [Statistics](statistika.html) tab

— whether the queue (Queue) is growing

### A new Object was not connected automatically

Check:

—  whether the [Auto add](endpoints.html#Как_настроить_Auto_Add) rule is enabled for the Object's Contract

—  whether the Object was created after the rule was set up

—  whether the endpoint is enabled

—  whether the Object belongs to the Contract for which the Auto add rule is set up

—  whether the User has [access rights](index.html#Права_доступа) to this Contract

### Queue is growing

If the [Queue](statistika.html#Queue) indicator is increasing, packets are accumulating in the queue and cannot be sent.

This usually happens if:

— the external server is unavailable

— incorrect connection parameters are specified

— the receiving side rejects the connection

Check the Host, Port and Uspw settings, the availability of the external system and the latest errors on the [Statistics](statistika.html) tab.

### The number of errors (Err) is growing

If the [Err](statistika.html#Errors) indicator is increasing, check:

— the availability of the external system

— the correctness of the authorization parameters

— whether the selected data transfer protocol is correct

— the schedule settings

— restrictions or requirements of the receiving side

### There is Send, but no Ack

If the [Send](statistika.html#Send) indicator is growing while [Ack](statistika.html#Ack) stays at zero, this means the system is sending data but does not receive an acknowledgment of receipt.

Check:

— the protocol settings

— External ID

— Json config

— the authorization data

— error messages on the Statistics tab

### Statistics are not displayed

Possible reasons:

— no data has been transferred through the endpoint yet

— the display period selected is too short

— the endpoint was created recently

— the statistics have not had time to be generated yet

## Recommendations

-   Create a separate endpoint for each external system
    
-   Set up [Auto add](endpoints.html#Как_настроить_Auto_Add) if all new Objects of a Contract must automatically transmit data to one system
    
-   Before deleting an endpoint, check the number of connected Objects
    
-   When problems occur, first open the [Statistics](statistika.html) tab and check the Queue, Err, Send and Ack indicators
