---
title: "How to connect the module"
---

The module is connected by the system administrator or the servicing Partner.

<table><tbody><tr><td><span></span></td><td><div>If you have access to the admin panel, configure the module yourself using the instructions below. If you do not have access, contact your Partner or technical support.</div></td></tr></tbody></table>

To find fines, PILOT uses an integration with the ELPAS service. The service checks charges by the organization's details, vehicle data and driver's licenses.

### 1\. Enable the module

Enable the “Fines” module:

-   for the Partner
    
-   for the sub-Partner
    
-   for the Contract
    

![How to connect the module](images/drex_kak_podklyuchit_modul_screen.png)

The module must be enabled at all levels. If it is disabled at even one of them, the system will not be able to receive fine data.

### 2\. Add the ELPAS configuration

1\. Go to Contract settings → Configs

2\. Click “Add”

3\. In the “Key” field, enter fine\_api

4\. In the “Value” field, enter elpas

5\. Click “Save”

**![](images/drex_kak_podklyuchit_modul_custom.png)**

The configuration must be enabled for the Partner, the sub-Partner and the account. Only then will the system be able to receive fine data.

### 3\. Set up the tariff

The module is paid, so a tariff must be set up for it to work.

1\. Go to the Contract settings, “Services” tab

2\. Click “Add”

3\. In the list of services, select “Fines module”

4\. Select the tariff for the module

5\. Click “Save”

![](images/drex_kak_podklyuchit_modul_custom_2.png)

<table><tbody><tr><td><span></span></td><td><div>If you do not know which tariff to use, contact technical support.</div></td></tr></tbody></table>

### 4\. Fill in the organization's details

In the Contract card, enter:

-   TIN (ИНН)
    
-   KPP (КПП).
    

The ELPAS service searches by the combination of TIN and KPP, so both fields must be filled in.

![How to connect the module](images/drex_kak_podklyuchit_modul_screen_2.png)

### 5\. Fill in the vehicle data

For each vehicle you must enter the vehicle registration certificate (STS) number.

To do this:

1\. In the User account, open the Object card

2\. Go to the “Info” tab

3\. Enter the series and number of the vehicle registration certificate

**![How to connect the module](images/drex_kak_podklyuchit_modul_screen_3.png)**

4\. Save the changes

Repeat these steps for each vehicle.

Copy the series and number exactly as they appear in the certificate. Even one wrong digit can prevent the fine from being found and linked to the right Object.

![How to connect the module](images/drex_kak_podklyuchit_modul_screen_4.png)

### 6\. Fill in the Driver data

Open each Driver's card and enter the driver's license number.

**![How to connect the module](images/drex_kak_podklyuchit_modul_screen_5.png)**

Without the driver's license number, the ELPAS service will not be able to check fines issued to that Driver.

Four identifiers are used to search for fines:

TIN (ИНН) — identifies the organization that fines may be issued to

KPP (КПП) — clarifies the organization's data and is used together with the TIN

STS (СТС) — helps find fines for a specific vehicle

DL (ВУ) — helps find fines by driver's license

## When fines appear

After the setup is complete, wait for the next data update.

Every night, once a day, the system automatically contacts the ELPAS service, receives information about new fines and updates the list.

Each update loads fine data for the last 30 days.

If the service finds new fines, they will automatically appear in the User account after the update completes.

![](images/drex_kak_podklyuchit_modul_custom_3.png)
