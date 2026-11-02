---
title: "Total Work Report"
---

The Total Work Report contains time indicators of the operation of the selected monitored Objects over the specified period. Use it to compare the duration of movement and Parking, ignition-on time, and Maintenance periods, and to determine the time actually worked.

![](images/drex_summarnyj_otchyet_po_rabote_custom.png)

### What the report shows

• Vehicle — name, registration, or fleet number of the monitored Object

• Date — date and time the interval began and ended for which the indicators are calculated

• Information — additional information about the monitored Object; if no information is specified, the field stays empty

• Total time — total duration of the corresponding reporting interval

• Movement duration — total time the Object was moving

• Parking time — total duration of the Object’s Parking

• Ignition on — total time during which the ignition was recorded as on

• Ignition off — total time during which the ignition was off

• Non-working time — the part of the reporting interval that falls within non-working time according to the configured [Object schedule](../../../moduli-1/kontrol-vremeni.html#Рабочее_время_объекта)

• Maintenance time — duration of the periods during which the Object was under Maintenance

• Time worked — time within the work schedule minus Maintenance periods. Calculated as the total time minus non-working time and Maintenance time

![](images/drex_summarnyj_otchyet_po_rabote_custom_2.png)

### The “Working time only” option

Before generating the report, you can enable the “Working time only” option. In this case, the indicators are calculated only within the working intervals set in the Object’s schedule.

The option lets you exclude nighttime, weekends, and other non-working intervals from the analysis.

![](images/drex_summarnyj_otchyet_po_rabote_custom_3.png)
