---
title: "How to create an algorithm"
---

The “Control room” module helps the system respond to events automatically. It uses event-handling algorithms: predefined sequences of actions that run when certain conditions are met.

For example, you can configure the system to:

— immediately notify the operator and mark the event as critical when speed or temperature is exceeded

— create a task for the dispatcher and send the driver a reminder in case of a long idle period

— record the arrival time and send an SMS to the customer when the vehicle enters the customer’s geofence

## Creating an algorithm

-   Go to the “Algorithms” section in the top interface menu
    

![](images/drex_kak_sozdat_algoritm_custom.png)

2\. Create a new algorithm

On the “List” tab, click the “Add” button ![](images/drex_kak_sozdat_algoritm_custom_2.png). The builder workspace opens

![](images/drex_kak_sozdat_algoritm_custom_3.png)

3\. Assemble the algorithm from blocks

In the workspace you can drag blocks and arrange them into a scenario.

Each block is a separate step that the system performs when the event is triggered.

Available blocks:

-   Start block: the starting point of the algorithm
    
-   Text: displays a message or comment
    
-   Command: a system action (for example, sending a notification)
    
-   Command template: a ready-made action for reuse
    
-   Webhook: sends an HTTP request to an external system. The block lets you pass event data to a third-party service, for example a CRM, a dispatch system, or a corporate application
    
-   Condition: a logical check (for example, if the temperature exceeds a threshold)
    
-   Choice: a fork with several action options
    
-   End: completes the algorithm
    

Additional blocks may also be available, depending on the system configuration.

4\. Arrange the blocks and connect them

An algorithm usually starts with the “Start block”, followed by condition checks and actions, and ends with the “End” block.

![](images/drex_kak_sozdat_algoritm_custom_4.png)

Connect the blocks by dragging branches between them.

![](images/drex_kak_sozdat_algoritm_custom_5.png)

For example, branches are set from the “Condition” block to the “Text” block:

-   “Yes”: if the condition is met
    

![](images/drex_kak_sozdat_algoritm_custom_6.png)

![](images/drex_kak_sozdat_algoritm_custom_7.png)

-   “No”: if the condition is not met
    

![](images/drex_kak_sozdat_algoritm_custom_8.png)

Place the Webhook block in the branch where data must be sent to an external system. If the request must be sent regardless of the check result, add a separate Webhook block to both branches.

At this stage only the structure of the algorithm is defined. Parameter values (conditions, message texts, request parameters, and other settings) are specified later, when you link the algorithm to a notification.

![](images/drex_kak_sozdat_algoritm_custom_9.png)

5\. Save the algorithm

When the diagram is ready, click “Accept”.

![](images/drex_kak_sozdat_algoritm_custom_10.png)

In the window that appears, enter a name for the algorithm and click “OK”. The algorithm is saved in the list and becomes available for use.

![](images/drex_kak_sozdat_algoritm_custom_11.png)

### Example of a simple algorithm

Task: record an event if the cargo temperature exceeds the allowed value.

How to build the algorithm:

1\. Add the “Start block”

2\. Add the “Condition” block, which checks that the temperature is above normal

The “Temperature” parameter and the threshold are set later, when linking to a notification.

3\. From the “Condition” block, place “Text” blocks and draw the “Yes” and “No” branches to them

4\. Complete the algorithm with the “End” block and make sure all blocks are connected

![](images/drex_kak_sozdat_algoritm_custom_12.png)

This is a basic algorithm that can be used as a foundation for automatic event handling.

A created algorithm does not run on its own. To make it work, you need to link it to a notification.

You can read how to do this in the next [article](kak-privyazat-algoritm-k-uvedomleniyu.html).
