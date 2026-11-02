---
title: "Driving quality types"
---

Driving quality types are event categories that the system uses to classify violations and generate “Eco-driving” reports.

Each driving quality rule is linked to a specific event type. When the rule is triggered, the system records an event of the selected type.

For example:

-   Acceleration — sharp acceleration
    
-   Braking — harsh braking
    
-   Turn — sharp turn
    
-   Speed — speeding
    
-   Seat Belt — seat belt violation.
    

Event types are stored in a separate [reference book](tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения).

When you create or change a rule, you select the type you need from this reference book in the “Type” field.

![Driving quality types](images/drex_tipy_kachestva_vozhdeniya_screen.png)

If the standard types are not enough, you can [create your own](tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:). After creation, the new type becomes available when setting up rules.

## How to open the driving quality types reference book

1\. Open the “Driving quality” tab

2\. In the upper right part of the window, find the tools for managing “Eco-driving” settings

![Driving quality types](images/drex_tipy_kachestva_vozhdeniya_screen_2.png)

3\. Click the “Driving quality types” button

![Driving quality types](images/drex_tipy_kachestva_vozhdeniya_screen_3.png)

The event types reference book opens.

![](images/drex_tipy_kachestva_vozhdeniya_custom.png)

These are the types used when selecting a value in the “Type” column (Acceleration, Braking, Turn, Speed, Seat Belt)

![](images/drex_tipy_kachestva_vozhdeniya_custom_2.png)

## How to create a new type

1\. In the event types reference book, click “Add” ![](images/drex_tipy_kachestva_vozhdeniya_custom_3.png)

2\. Enter the event name

![](images/drex_tipy_kachestva_vozhdeniya_custom_4.png)

3\. Click “Save”.

After saving, the system automatically assigns the new type a unique identifier (ID). The system uses it to identify the event type unambiguously, and it does not need to be set manually.

![](images/drex_tipy_kachestva_vozhdeniya_custom_5.png)

To change a type name, double-click the row, make the changes, and save them.

To delete a type, use the “Delete” button ![](images/drex_tipy_kachestva_vozhdeniya_custom_6.png).

<table><tbody><tr><td><span></span></td><td><div>Delete types only if they are no longer used in rules. If a type is already in use, first replace it in the existing rules, and then delete it.</div></td></tr></tbody></table>
