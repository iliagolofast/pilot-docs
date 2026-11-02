---
title: "Connecting the gas station directory"
---

This setting is available to technical support staff and administrators with access to the PILOT admin panel. If you do not have such access, contact technical support — specialists will help you connect the fuel networks you need.

Connected directories determine which fuel networks a user sees in the “Refuel types” list on the main map.

![](images/drex_podklyuchenie_spravochnika_azs_custom.png)

Before adding gas stations, prepare:

— the fuel network name

— the address and coordinates of the station, if it has not yet been added to the system

To connect, you need the directory identifiers from the database. Add only the gas stations required for the account to work, so that the “Refuel types” list shows relevant networks.

## How to connect a directory

1\. Open the contract card in the admin panel

2\. Go to the “Module settings” tab

3\. Select Fuel cards module

4\. Click “Add”

![](images/drex_podklyuchenie_spravochnika_azs_custom_2.png)

5\. In the key field, enter: types

6\. In the value field, enter the identifiers of the gas station directories you need as a list, for example: \[1,2,3\]

Use the actual directory identifiers from the database.

7\. Save the changes

After saving, the connected fuel networks appear in the user's “Refuel types” list. Networks not added to the types setting are not displayed in the list.
