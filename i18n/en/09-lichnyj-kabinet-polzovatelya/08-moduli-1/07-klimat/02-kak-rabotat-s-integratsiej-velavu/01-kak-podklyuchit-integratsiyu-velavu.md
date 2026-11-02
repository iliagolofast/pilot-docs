---
title: "How to connect the Velavu integration"
---

The Velavu integration is configured at the partner account level through configuration parameters.

<table><tbody><tr><td><span></span></td><td><div>Integration setup is available only to users with main administrator rights. If you do not have the appropriate access level, contact support.</div></td></tr></tbody></table>

1\. In the admin panel, go to the “Partners” section

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom.png)

2\. Double-click the partner you need; the partner card opens

3\. Go to the “Configuration” tab

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_2.png)

4\. Click the “Add” button

5\. In the drop-down list, select the **Velavu** key. In the parameter value, paste the Velavu configuration in JSON format.

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_3.png)

Example of a Velavu JSON configuration

<table><tbody><tr><td><span></span></td><td><div><span>[</span></div><div><span>&nbsp;{</span></div><div><span>&nbsp;"broker": "iot.velavu.com",</span></div><div><span>&nbsp;"port": "8883",</span></div><div><span>&nbsp;"customer_id": "YOUR_CUSTOMER_ID",</span></div><div><span>&nbsp;"api_token": "YOUR_API_TOKEN",</span></div><div><span>&nbsp;"cert": "-----BEGIN CERTIFICATE-----\nYOUR_CERTIFICATE\n-----END CERTIFICATE-----",</span></div><div><span>&nbsp;"key": "-----BEGIN RSA PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END RSA PRIVATE KEY-----"</span></div><div><span>&nbsp;}</span></div><div><span>]</span></div></td></tr></tbody></table>

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; broker</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Velavu MQTT broker address</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; port</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Connection port</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; customer_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Customer ID in the Velavu system</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; api_token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Velavu API access token</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cert</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SSL certificate for the connection</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; key</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SSL private key</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>You obtain all the data (customer_id, api_token, certificate, and key) from your Velavu account.</div></td></tr></tbody></table>

6\. Save the configuration. After that, the integration becomes available for the accounts that belong to this partner
