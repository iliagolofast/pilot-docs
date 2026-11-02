---
title: "Trips and Parking (Working Time)"
---

The “Trips and Parking (Working Time)” report contains information about the movement and Parking of the selected vehicles according to the work schedule. Use it to determine how an Object was used during working or non-working time: when it was moving, where it was parked, how far it traveled, and how much time it spent in each state.

![](images/drex_poezdki_i_stoyanki__rabochee_vremya__custom.png)

### What the report shows

• Status — state of the Object: “Movement” or “Parking”

• Object — name, registration, or fleet number of the vehicle

• Driver — the Driver assigned to the vehicle during the corresponding Event

• Day of the week — the day of the week on which the movement or Parking took place

• Begin — date and time the movement or Parking began

• End — date and time the movement or Parking ended

• Dur. — duration of the corresponding Trip or Parking

• Distance, km — distance traveled by the Object during the Trip; no value is shown for Parking

• Start — address where the movement began or the Parking location

• Stop — address where the movement ended; for Parking the value may not be shown

![](images/drex_poezdki_i_stoyanki__rabochee_vremya__custom_2.png)

### Summary indicators

Below the table, summary indicators for the current Object or report block are shown:

• Total mileage — total distance traveled by the Object during the counted time

• Moving time — total duration of all movement periods

• Parking time — total duration of all Parking

• Average speed — the Object’s average speed while moving

• Max. speed — the highest speed recorded while moving

Below that, a separate summary block with indicators for the entire selected period is shown:

• Total mileage for the period

• Moving time for the period

• Parking time for the period

• Average speed for the period

• Max. speed for the period

![](images/drex_poezdki_i_stoyanki__rabochee_vremya__custom_3.png)

### Working time parameters

Before generating the report, you can select which data to include:

• Working time only — the report counts Events that fall within working time according to the configured schedule

![](images/drex_poezdki_i_stoyanki__rabochee_vremya__custom_4.png)

• Non-working time only — the report counts Events that fall within non-working time

![](images/drex_poezdki_i_stoyanki__rabochee_vremya__custom_5.png)

Working and non-working time is determined by the [Object’s work schedule settings](../../../moduli-1/kontrol-vremeni.html#Рабочее_время_объекта).

**Working time only**

When you enable the “Working time only” option, the report lets you analyze vehicle use during the hours set by the work schedule.

The report shows:

• Trips made during working time

• Parking between Trips

• Parking from the start of the working interval to the first movement

• Parking from the last movement to the end of the working interval

![](images/drex_poezdki_i_stoyanki__rabochee_vremya__custom_6.png)

**Non-working time only**

When you enable the “Non-working time only” option, the report shows movement and Parking outside the set work schedule.

It helps you identify:

• Trips after working hours end

• vehicle use on weekends or non-working days

• movement before the start of the work shift

• long Parking outside working hours

![](images/drex_poezdki_i_stoyanki__rabochee_vremya__custom_7.png)
