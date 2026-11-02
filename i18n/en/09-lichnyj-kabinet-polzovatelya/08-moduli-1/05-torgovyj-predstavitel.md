---
title: "Sales representative"
---

The “Sales representative” module, also known as “Counterparties”, is used to record and analyze sales representatives’ visits to counterparties.

Counterparties are clients, companies, or retail outlets that your company works with.

![](drex_torgovyj_predstavitel_custom.png)

In this article you will learn:

— [How to upload a list of counterparties](torgovyj-predstavitel.html#Как_загрузить_список_контрагентов)

— [How to work with the list of counterparties](torgovyj-predstavitel.html#Как_работать_со_списком_контрагентов)

— [How to add a sales representative](torgovyj-predstavitel.html#Как_добавить_торгового_представителя)

— [What a universal sales representative is](torgovyj-predstavitel.html#Что_такое_универсальный_торговый_представитель)

— [How to view a sales representative’s counterparties](torgovyj-predstavitel.html#Как_посмотреть_контрагентов_торгового_представителя)

— [How to recalculate visit statistics](torgovyj-predstavitel.html#Как_пересчитать_статистику_посещений)

## How to upload a list of counterparties

The list of counterparties is uploaded to the system from a file. This is usually done by the technical support service at the client’s request.

<table><tbody><tr><td><span></span></td><td><div>The upload uses the<span> </span>page: <a href="https://&lt;server_address&gt;/ax/mod_tp_upload_utf8.php"><span>https://&lt;server_address&gt;/ax/mod_tp_upload_utf8.php</span></a></div><div>where &lt;server_address&gt; is the address of your server</div></td></tr></tbody></table>

 1. Open the upload page

Enter the login and password of the account into which you need to upload counterparties.

2\. Prepare the file

The file must be in CSV format. It specifies:

— the counterparty identifier

— the link to the sales representative or vehicle (if used)

— the counterparty group

— the address of the point (required)

— coordinates

![](drex_torgovyj_predstavitel_custom_2.png)

 3. Upload the file

1) Click “Choose file”

2) Select the prepared CSV file

3) Click “Submit”

The system uploads the data, and the counterparties appear in the “Main” section on the “Counterparties” tab.

![](drex_torgovyj_predstavitel_custom.png)

## How to work with the list of counterparties

![Sales representative](drex_torgovyj_predstavitel_screen.png)

On the “Counterparties” tab you can view the list of clients, search for the points you need, and display them on the map.

Tools for working with the list are available at the top of the window:

-   Search: helps you find a counterparty by name or address. Start typing a name and the list is filtered automatically.
    

Additional actions are in the upper-right part of the list:

![](drex_torgovyj_predstavitel_custom_3.png) Export: exports the current list of counterparties to a file

![](drex_torgovyj_predstavitel_custom_4.png) Clear map: removes counterparty markers from the map

![](drex_torgovyj_predstavitel_custom_5.png) Show on map: displays counterparties on the map

![](drex_torgovyj_predstavitel_custom_6.png) Refresh: refreshes the list and loads current data

## How to add a sales representative

If you need to add a sales representative to the system:

1\. Go to the “Main” section. Open the “Online” tab

![Sales representative](drex_torgovyj_predstavitel_screen_2.png)

 2. Click “Add object” ![](drex_torgovyj_predstavitel_custom_7.png)

 3. Fill in the main parameters in the object card

![Sales representative](drex_torgovyj_predstavitel_screen_3.png)

Specify the required data:

1 — Vehicle number

2 — Device ID

3 — Device type

 4. Specify the group

Select the group the object will belong to.

![Sales representative](drex_torgovyj_predstavitel_screen_4.png)

If there is no such group, create it in advance. This group usually contains the sales representatives’ objects.

![](drex_torgovyj_predstavitel_custom_8.png)

 5. In the object card, enter the sales representative’s ID.

![Sales representative](drex_torgovyj_predstavitel_screen_5.png)

### Universal sales representative

By default, reports include only the counterparties assigned to the sales representative.

If a sales representative can visit any points, not only the assigned ones, you need to enable the “Universal SR” option

In this case, reports will include visits to all counterparties, regardless of assignment.

![Sales representative](drex_torgovyj_predstavitel_screen_6.png)

 6. Save the object

After saving, the sales representative appears in the list.

![](drex_torgovyj_predstavitel_custom_9.png)

## How to view a sales representative’s counterparties

To see the list of counterparties of a specific sales representative:

1\. Right-click the sales representative you need to open the context menu

2\. Select “Counterparties”

![](drex_torgovyj_predstavitel_custom_10.png)

The window that opens shows a list of all points assigned to the counterparty.

![](drex_torgovyj_predstavitel_custom_11.png)

In the window, select the counterparty you need; it is displayed on the map.

If you need to clear the map, click the “Clear map” button![](drex_torgovyj_predstavitel_custom_12.png).

The “Recalculate for” button updates counterparty visit statistics for the selected period. If the data has changed or you need to recalculate routes and visits, use this button.

![Sales representative](drex_torgovyj_predstavitel_screen_7.png)

### How to run a recalculation

1\. Enter the number of days for which to update the data (for example, 2 or 7 days).

2\. Click the ▶ button

3\. The system analyzes the sales representative’s trips for the specified period and updates the information about counterparty visits and routes

When finished, a window with brief statistics appears:

![](drex_torgovyj_predstavitel_custom_13.png)

-   From date: the period for which the recalculation was run
    
-   Total: how many counterparties were counted
    
-   Visits: how many visits were recorded
    
-   Execution time: how long the calculation took
    

Click OK to close the window.
