---
title: "How to add stops"
---

A stop is a geographic zone that a vehicle must visit while performing a trip along a route.

1\. Go to the lower part of the workspace — this is where the list of all stops is located

![How to add stops](images/drex_kak_dobavit_ostanovki_screen.png)

2\. Click the button ![](images/drex_kak_dobavit_ostanovki_custom.png) to add a new stop

3\. In the window that opens, specify:

![](images/drex_kak_dobavit_ostanovki_custom_2.png)

-   Name and description
    
-   Coordinates: manually with the arrows or by moving the marker on the map
    
-   Stop radius (m) — the zone within which arrival is recorded
    
    If needed, check the boxes:
    
    — technical stop ![](images/drex_kak_dobavit_ostanovki_custom_3.png) — not counted in boarding and alighting, but used in route calculation
    
    <table><tbody><tr><td><span></span></td><td><div>A technical stop is a point on the route that:</div><div>— is not shown in the schedule of passenger trips</div><div>— does not take part in boarding and alighting records — no passengers are recorded at it</div><div>— takes part in building the route — for example, it helps lay out the path correctly</div><div>— can be used to monitor bus movement — for example, as a checkpoint</div><div>— does not affect passenger flow reports — its data does not go into boarding/alighting statistics</div></td></tr></tbody></table>
    
    — terminal stop  ![](images/drex_kak_dobavit_ostanovki_custom_4.png)— the point where the route ends and the return journey begins
    
    <table><tbody><tr><td><span></span></td><td><div>If you check the “Terminal” box for a stop, the system treats it as the last stop on the route:</div><div>— the system truncates the route — all stops after this one are not used in the trip</div><div>— the bus starts moving in the opposite direction — that is, it switches to the return schedule (if the trip is bidirectional)</div><div>— only the stops up to and including this terminal stop are counted in the schedule and reports</div></td></tr></tbody></table>
    

![](images/drex_kak_dobavit_ostanovki_custom_5.png)

4\. Click “Save” — the stop appears in the list

![](images/drex_kak_dobavit_ostanovki_custom_6.png)

The list shows all added stops with their ID, radius, type, and description.

To edit a stop, double-click it in the list and make the changes in the window that opens.

To delete a stop from the list, use the icon ![](images/drex_kak_dobavit_ostanovki_custom_7.png).

Once you add trips, the list shows all created trips and the number of stops in each of them.

Click the arrow ![](images/drex_kak_dobavit_ostanovki_custom_8.png) next to a trip to expand its list of stops.

![How to add stops](images/drex_kak_dobavit_ostanovki_screen_2.png)

Each stop entry has an arrow ![](images/drex_kak_dobavit_ostanovki_custom_9.png) — click it to open the menu and configure the route:

-   Forward / Back — change the order of the stop in the route
    
-   U-turn — specify that the vehicle turns around at this stop and starts moving in the opposite direction
    

![](images/drex_kak_dobavit_ostanovki_custom_10.png)

To delete a stop from a trip, right-click it in the list and select “Delete”.

![](images/drex_kak_dobavit_ostanovki_custom_11.png)

## How to link an RFID tag to a stop

A stop visit can be detected by an RFID tag. When the vehicle reads the tag linked to a stop, the system processes the received data as a visit to that stop within the assigned bus line.

Before linking, add and configure the necessary tags in the [“RFID tags”](../rfid-metki-2/kak-podgotovit-rfid-metki-k-rabote.html) module. The tag must be within the stop radius.

To link RFID tags:

1\. Create a stop or select an existing one

![](images/drex_kak_dobavit_ostanovki_custom_12.png)

2\. Click the tag icon ![](images/drex_kak_dobavit_ostanovki_custom_13.png) next to the stop

![How to add stops](images/drex_kak_dobavit_ostanovki_screen_3.png)

3\. In the “Stop RFID tags” window, find the tag you need by name or identifier

![](images/drex_kak_dobavit_ostanovki_custom_14.png)

4\. Check the box next to the tag

![](images/drex_kak_dobavit_ostanovki_custom_15.png)

5\. Select other tags if needed

6\. Click “Save”

Several RFID tags can be linked to one stop. In this case the system can process a visit when any of them is read. To show only the tags that are already linked, check the “Linked” box.

![How to add stops](images/drex_kak_dobavit_ostanovki_screen_4.png)

If the tag you need is not in the list, check that it has been added and configured in the [“RFID tags”](../rfid-metki-2/index.html) module. Also make sure the tag is within the stop radius.

After linking, [add the stop to a bus line](kak-sozdat-rejs.html), and then [assign this line to a vehicle](kak-privyazat-avtobus-k-rejsu.html). Only after all these steps are completed can the system match the read RFID tag to the stop and process its visit.
