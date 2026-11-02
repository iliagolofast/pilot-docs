---
title: "Schedule Adherence Report"
---

The Report is designed to monitor actual schedule performance on the selected bus line.

It compares the planned stop times (from the schedule matrix) with the actual stop visit times and clearly shows how closely the actual movement matched the plan.

![](images/drex_otchyet_po_soblyudeniyu_raspisanij_custom.png)

### What the report shows

The Report is built for one selected bus line and is generated as a table where:

-   The first column is the schedule name
    
-   Each following column is a stop on the route
    
-   Each cell contains data for a specific stop for a specific Trip
    

Each cell shows:

-   Plan — planned arrival time at the stop
    
-   Actual — actual arrival time at the stop
    
-   Difference — deviation of the actual time from the planned time
    
-   Object — the vehicle (license plate) that actually made the stop
    

If no actual visit was recorded, the cell is marked “Missed” (not performed)

![](images/drex_otchyet_po_soblyudeniyu_raspisanij_custom_2.png)

###  How the report is generated

1\. The selected bus line and its list of stops are taken

2\. The history of schedule versions in effect during the specified period is loaded

3\. For each day in the reporting interval, the schedule table to apply is determined:

-   by specific date
    
-   by day of the week
    
-   or daily
    
    4\. For each planned Trip and each stop, the nearest actual visit to that stop is searched for
    
    5\. If an Event is found within the allowed deviation window, Plan / Actual / Difference / Object are shown in the cell
    
    6\. If no Event is found, the cell is marked “Missed”
    

### Comparison logic

-   The Report checks schedule adherence not for a specific bus but by whether the stop was made on the line.
    
-   If several buses operate on the line at the same time, the report counts any bus that actually made the stop at the right time.
    
-   No more than one actual Event is used for each planned time.
    
-   One actual Event is not reused to confirm several planned stops.
    
-   If the schedule changes within the reporting period, the schedule version that was in effect at the time of the specific planned Trip is applied.
    

### Report color coding

-   Green — minimal deviation, the stop was made close to the plan
    
-    Yellow — acceptable deviation from the schedule
    
-   Orange — noticeable time deviation.
    
-   Red — large deviation or missed stop (no actual visit)
