---
title: "Configuration reference"
---

In this article we will look at the configurations available in the system and their purpose. 

**Adding new allowed vehicles to Notifications**

For new allowed vehicles to be added to Notifications automatically, you need to set this configuration in the User account. This function is intended for mapped Objects

(that is, for Objects from other Contracts).

<table><tbody><tr><td><span></span></td><td><div><span>Configuration </span><span><strong>Confirm adding vehicles to notifications</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom.png)

**Hiding device information**

<table><tbody><tr><td><span></span></td><td><div><span>Configuration&nbsp; <strong>hide_device</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_2.png)

**Free period for a Partner**

Intended for the system trial period.

<table><tbody><tr><td><span></span></td><td><div><span>Configuration&nbsp; </span><span><strong>Partner Grace Period (days)</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_3.png)

**Adding the "Address" column to the Object tree**

To display the address on the Online tab, add the following configuration to the Contract settings.

<table><tbody><tr><td><span></span></td><td><div><span>Configuration =&nbsp; </span><strong>Address in Online Tree</strong></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_4.png)

**Blocking a Partner with a negative balance after 5 days**

Provided that the Partner's account type is prepayment and the balance is less than or equal to zero (taking the deposit into account).

If the Partner is in the system, then for 5 days, every 3 hours, a warning dialog box will appear in the admin panel.

**![](images/drex_spravochnik_konfiguratsij_custom_5.png)**

On the 5th day, if the Partner is in the system, the session will be ended automatically and the Partner will be redirected to the login page.

The Partner will not be able to log in to the admin panel.

![](images/drex_spravochnik_konfiguratsij_custom_6.png)

The add alert window.

After the balance is topped up, the Partner can log in.

![](images/drex_spravochnik_konfiguratsij_custom_7.png)

 **Single driver**

Link only one Driver to an Object when creating a new Driver or updating an existing one.

<table><tbody><tr><td><span></span></td><td><div><span>Configuration <strong>single_driver = true </strong>for the account.</span></div></td></tr></tbody></table>

When we create a Driver or update an existing record and link the Driver to a vehicle, or if this particular vehicle already has a linked Driver, the system first automatically unlinks the previous Driver and then links the new Driver.

![](images/drex_spravochnik_konfiguratsij_custom_8.png)

**Displaying the video stream in a new tab**

To display the video stream in a new tab, add a config with the value true to the Contract, in the module settings.

To deactivate the configuration, enter false.

-   Activate the CMS module.
    
-   Go to the module settings tab.
    
-   Add the entry **open\_in\_new\_tab**
    

![](images/drex_spravochnik_konfiguratsij_custom_9.png)

When you click the camera icon in the User interface, the stream opens in a new tab via a link.

When you click the camera icon and select a date period, the recording history from the surveillance cameras appears.

![](images/drex_spravochnik_konfiguratsij_custom_10.png)

**Rebranding for TOTP two-factor authentication**

<table><tbody><tr><td><span></span></td><td><div><span>Configuration&nbsp; </span><span><strong>TOTP Label = name</strong></span></div></td></tr></tbody></table>

Intended for changing the company name in the icon when the client receives codes to sign in to the account.

![](images/drex_spravochnik_konfiguratsij_custom_11.png)

![](images/drex_spravochnik_konfiguratsij_custom_12.png)

**Visibility of all tariffs**

<table><tbody><tr><td><span></span></td><td><div><span>Configuration&nbsp; </span><span><strong>Only private prices = 1</strong></span></div></td></tr></tbody></table>

 Tariffs can be hidden using the configuration in the Partner settings.

![](images/drex_spravochnik_konfiguratsij_custom_13.png)

The configuration for this window, visibility in the Contract settings.

![](images/drex_spravochnik_konfiguratsij_custom_14.png)

**Analytics module (Dashboard) - start tab.**

The configuration is intended to display the Analytics Dashboard when the interface first loads.

<table><tbody><tr><td><span></span></td><td><div><span>Configuration&nbsp; </span><span><strong>Main Tab = dashboard</strong></span></div></td></tr></tbody></table>

**![](images/drex_spravochnik_konfiguratsij_custom_15.png)**

The tab is displayed as the start tab in the User interface.

**![](images/drex_spravochnik_konfiguratsij_custom_16.png)**

<table><tbody><tr><td><span></span></td><td><div><span>Configuration = <strong>additional_fields</strong> for the fuel cards module&nbsp; in the account.</span></div><div>&nbsp;</div></td></tr></tbody></table>

By default the columns are hidden, and the User can display them on the Transactions tab. Depending on the type of your fuel account, the fields for configuration setup may differ.

![](images/drex_spravochnik_konfiguratsij_custom_17.png)

<table><tbody><tr><td><span></span></td><td><div><span>Configuration<strong> Low Ballance Emails</strong> = </span><a href="mailto:s@pilot-telematics.com,"><span>s@pilot-telematics.com</span></a><span> (several addresses can be specified)</span></div></td></tr></tbody></table>

The configuration is intended for selecting the accounts for which low balance Notifications should be received. Specify the necessary e-mail addresses for Notifications in the settings.

![](images/drex_spravochnik_konfiguratsij_custom_18.png)

<table><tbody><tr><td><span></span></td><td><div><span>Configuration </span><span><strong>Maps</strong> =&nbsp;{"default": "Google Sat", "hidden":&nbsp;["OSM"]}</span></div></td></tr></tbody></table>

A configuration for a Contract or Partner lets you manage the visibility of Maps and set the default Map

(Yandex, Google, OSM).

![](images/drex_spravochnik_konfiguratsij_custom_19.png)

![](images/drex_spravochnik_konfiguratsij_custom_20.png)

<table><tbody><tr><td><span></span></td><td><div><span>Configuration <strong>Link to manual&nbsp; = </strong></span><a href="https://doc.pilot-gps.ru"><span>https://doc.pilot-gps.ru</span></a></div></td></tr></tbody></table>

The configuration lets Users upload their own training materials and user manuals to the system.

The uploaded documents will be available for viewing at any time, which provides convenient access to instructions on Pilot features.

Users can easily find the materials they need and use them to get information and help on various aspects of working with the system.

![](images/drex_spravochnik_konfiguratsij_custom_21.png)

![](images/drex_spravochnik_konfiguratsij_custom_22.png)

<table><tbody><tr><td><span></span></td><td><div>Configuration <strong>Telegram bot</strong></div></td></tr></tbody></table>

To add a quick link to the Telegram bot through the User account, use the Telegram bot configuration.

 In the value field, enter the bot address, for example: @PilotGpsBot.

![](images/drex_spravochnik_konfiguratsij_custom_23.png)

After saving, a separate tab with a link to the Telegram bot will appear in the User account, in the additional settings menu.

![](images/drex_spravochnik_konfiguratsij_custom_24.png)
