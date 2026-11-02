---
title: "How to process an event"
---

## Module panel

When a notification with a linked algorithm is triggered, the event immediately appears in the interface, in the operator’s workspace panel for event processing.

The “Control room” panel is located at the bottom of the “Main” section interface.

To expand the panel, click the arrow ![](images/drex_kak_obrabotat_sobytie_custom.png).

![How to process an event](images/drex_kak_obrabotat_sobytie_screen.png)

The panel shows a list of all events that came in through notifications and are waiting for the operator’s response.

![How to process an event](images/drex_kak_obrabotat_sobytie_screen_2.png)

### Top part

The top part of the panel helps you find the events you need.

It provides:

-   Event groups: a filter by type (speed, temperature, geofence, and so on)
    
-   Search ![](images/drex_kak_obrabotat_sobytie_custom_2.png): search by object or event text
    
-   Refresh ![](images/drex_kak_obrabotat_sobytie_custom_3.png): manually refreshes the list
    
-   Additional actions ![](images/drex_kak_obrabotat_sobytie_custom_4.png):
    
    — Event processing interval: the time during which an event is considered current and available for processing. Select the interval you need from the list to define how long an event is displayed in the list before it is automatically moved to the “unprocessed” status.
    
    — Page size: the number of events displayed on one page
    

— Grouping: combines identical events of one object into a single row for convenience.

— Processed: select the check box to show processed events. By default, only unprocessed events are displayed.

![](images/drex_kak_obrabotat_sobytie_custom_5.png)

### Event table

Each row is an object with a current event or a group of events.

Main columns:

-   Date: the time of the last event
    
-   Object: the object name. An address or zone may be displayed under it
    
-   Stage: the current step of the algorithm
    
-   Operator: who took the event into work
    
-   Event:
    
-   The [group](kak-nastroit-parametry-sobytij.html#группы_событий) the event belongs to
    
-   A red circle with a number shows how many events are not yet processed
    
-   Text: the standard event description
    
-   Alternative text: a custom description from the notification settings (if set)
    

![How to process an event](images/drex_kak_obrabotat_sobytie_screen_3.png)

To the left of the row there is an arrow ![](images/drex_kak_obrabotat_sobytie_custom_6.png) that expands the list of all events within the group.

## How to start processing an event

1\. When a notification is triggered, the event appears in the list on the panel

2\. Click the row; the event is displayed on the map

![](images/drex_kak_obrabotat_sobytie_custom_7.png)

3\. Expand the row and select the event you need

4\. Click:

-   “Start” to process the event
    
-   “Skip” if the event does not require processing
    

## “Event processing” window

After you click “Start”, a step-by-step processing window opens; it follows the logic of your algorithm.

![](images/drex_kak_obrabotat_sobytie_custom_8.png)

In the top part:

-   Event ID: internal number
    
-   Address: the place of the event. You can copy it by clicking ![](images/drex_kak_obrabotat_sobytie_custom_9.png)
    
-   Event text: description
    
-   Event information: a hint for the operator from the algorithm
    

Below:

-   Comment: what the operator did about the event
    

If the algorithm contains additional steps, the following may appear:

-   drop-down lists for selecting a reason or status
    
-   the “Next step” button: moves to the next block of the algorithm
    

![](images/drex_kak_obrabotat_sobytie_custom_10.png)

## Completing processing

On the last step of the algorithm there may be two buttons:

-   Yes: confirms the event (a violation occurred, the action was taken)
    
-   No: an alternative result (false alarm, no action required)
    

![](images/drex_kak_obrabotat_sobytie_custom_11.png)

After you choose:

— the algorithm ends

— the event is considered processed

— the result is saved in the history

If the algorithm has no fork, a “Finish” button appears instead of “Yes / No”.

![](images/drex_kak_obrabotat_sobytie_custom_12.png)

## How to work with the event processing window

  ![How to process an event](images/drex_kak_obrabotat_sobytie_screen_4.png)

In the processing window, click the map icon ![](images/drex_kak_obrabotat_sobytie_custom_13.png); a built-in map opens at the bottom.

On the map you will see:

-   the object’s position at the time of the event
    
-   the track of movement before and after the event
    
-   the address and coordinates
    

![](images/drex_kak_obrabotat_sobytie_custom_14.png)

Click the icon ![](images/drex_kak_obrabotat_sobytie_custom_15.png) in the processing window to open an additional panel with detailed data on the object and the event.

![](images/drex_kak_obrabotat_sobytie_custom_16.png)

It has three blocks:

1\. Sensors

— sensor values at the time of the event

— current values now

2\. Processed events

— the date of previous events for this object

— which operators processed them

— processing time, group, and event text

3\. Task information

— task number and status

— time of status changes

— route and actual times

On this panel the operator sees the full context of the event without leaving the processing window.
