---
title: "Agro"
---

The agricultural module is a combination of two modules.

The Geofences module and the Trailers module.

-   Add a new trailer +.
    
-   Fill in the fields.
    
-   Save.
    
    ![](images/drex_agro__custom.png)
    
    ![](images/drex_agro__custom_2.png)
    
-   **Trailer name** - the name of the trailer.
    
-   **Type** - a list of trailer types.
    
-   **Width** - when we use agricultural equipment, for example a fork, we can define its width, and from this size we can calculate how much area of the field has been processed. The calculation formula: distance \* trailer width / 10,000 = ha.
    
-   **Group** - the fleet group structure for grouping trailers.
    
-   **RFID** - if we use RFID tags, we can automate attaching and automatically detach trailers by installing Sensors on Objects; similarly to iButtons for Drivers, we can create a Sensor to detect the trailer's RFID tag and attach or detach it.
    
-   **Description** — any additional information about the trailer.
    
-   **Exclusivity** - if we check exclusivity, each trailer can be linked to only one Object at a time, which means that if we link the same trailer to another Object, it will be detached from the previous one, or if this Object is used to link to another trailer, it will be unlinked from the first one.
    
-   **Agriculture** - as explained earlier, this enables the trailer for the agricultural module.
    
-   **Send alerts** - if we check this box, we will receive alerts on the PILOT platform when the trailer is linked or unlinked to any Object.
    
-   **Vehicle access** — we can restrict access to the vehicles the trailer can be attached to.
    
-   **Object tree** – all Objects the User has the right to manage, shown when selecting a link to the current Object.
    
-   **Show history** - we can check the History of this trailer and, if necessary, change it.
    
-   **Data recalculation**   - available from the admin panel of the Pilot section with the Agriculture type.
    
    **Display the trailer**
    
    ![](images/drex_agro__custom_3.png)
    
    **Trailer history**
    
-   Select the Trailer.
    
-   Select the History menu.
    

![](images/drex_agro__custom_4.png)

![](images/drex_agro__custom_5.png)

**Track history**

If everything is configured correctly, the agricultural module will aggregate data when the Object is inside a work field with an agricultural trailer attached.

When Trips are completed, we can use the History module to replay the agricultural History data.

Check the box for agriculture.

![](images/drex_agro__custom_6.png)

If there is data, for each field we can see the Trip history with the track width (trailer width settings) and the calculated distance and area covered:

![](images/drex_agro__custom_7.png)

The Report for this module is in the [Reports](../otchyety-1/tipy-otchyetov/agro/index.html) section.
