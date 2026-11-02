---
title: "Teltonika FOTA. Connecting to the system"
---

The system includes an integration with Teltonika FOTA.

This integration lets you configure Teltonika devices from the PILOT system interface.

This function can be activated both for a Partner and for an individual account (Contract).

**Activating Teltonika FOTA WEB in** PILOT

To remotely manage the configuration of Teltonika devices from the PILOT platform, you need to activate the integration. To do this, follow these steps.

<table><tbody><tr><td><span></span></td><td><div><span>1. Log in to your account in Teltonika FOTA WEB <strong>(</strong></span><a href="https://fm.teltonika.lt/"><span><strong>https://fm.teltonika.lt</strong></span></a><span><strong>)</strong></span></div><div><span>2. Generate and copy the API Key.</span></div></td></tr></tbody></table>

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom.png)

3.Enter any name for the API Token and click the Create button.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_2.png)

4\. Enter any name for the API Token and click the Create button.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_3.png)

5\. Copy the generated token value.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_4.png)

Open your account settings in the admin panel and add a new entry there

Open the "Configuration" section and add the key **fotaTokens**.

Format and value of the fotaTokens key: {"<Name>":"<Key>","<Name1>":"<Key1>","<NameN>":"<KeyN>"}

<Name> - any name

<Key> - the API Key obtained in the Teltonika FOTA interface

You can specify more than one key, separated by commas.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_5.png)
