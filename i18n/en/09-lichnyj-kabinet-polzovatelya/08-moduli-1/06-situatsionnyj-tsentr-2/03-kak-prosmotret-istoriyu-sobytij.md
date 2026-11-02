---
title: "How to view the event history"
---

The event history helps you understand what happened, on which object, and exactly how the system responded.

To view the event history:

1\. Go to the “Algorithms” section in the top menu and select the “History” tab

![How to view the event history](images/drex_kak_prosmotret_istoriyu_sobytij_screen.png)

2.  Specify a date or date range and click “Search”; a list of events appears below

![How to view the event history](images/drex_kak_prosmotret_istoriyu_sobytij_screen_2.png)

If you need to save the history to files, use the buttons:

1 — ![](images/drex_kak_prosmotret_istoriyu_sobytij_custom.png)Save the history to PDF

2 — ![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_2.png) Save the history to XLSX

If you need to show only unprocessed events, select the “Unprocessed” check box

![How to view the event history](images/drex_kak_prosmotret_istoriyu_sobytij_screen.png)

3\. Click the arrow ![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_3.png)next to an event to see the details

![How to view the event history](images/drex_kak_prosmotret_istoriyu_sobytij_screen_3.png)

The event shows:

-   Date and time of the event 
    
-   The object on which it occurred
    
-   The group the event belongs to
    
-   Event text 
    
-   Operator: the user who processed or confirmed the event
    
-   Processing date: when the operator actually processed the event
    
    ## Algorithm diagram
    

To the right of the event list, a diagram of the algorithm that was run for the selected event is displayed.

The diagram shows:

-   algorithm blocks: the steps the system performs
    
-   algorithm branches: possible ways the scenario can develop
    

The diagram helps you understand which steps the system performed and which path the algorithm took when processing the event.

![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_4.png)

Example diagram:

![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_5.png)

This algorithm contains the following blocks:

-   Start: the beginning of the algorithm, the moment the event occurs
    
-   Condition: a condition check. For example: “speed > 90 km/h for longer than 10 seconds”.
    
    Two branches come out of the condition:
    
    Yes: the condition was met
    
    No: the condition was not met
    
-   Text / Command blocks: system actions
    
-   End: completion of event processing
    
    The blue line shows which path the algorithm took. For example: Start → Condition → (Yes) → Text → End.
    
    Gray lines are branches that were not triggered in this event.
