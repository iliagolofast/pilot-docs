---
title: "Cómo conectar la integración con Velavu"
---

La integración con Velavu se configura a nivel de la cuenta de socio mediante parámetros de configuración.

<table><tbody><tr><td><span></span></td><td><div>La configuración de la integración solo está disponible para usuarios con derechos de administrador principal. Si no tiene el nivel de acceso correspondiente, comuníquese con el servicio de soporte.</div></td></tr></tbody></table>

1\. En el panel de administración, vaya a la sección «Socios»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom.png)

2\. Haga doble clic en el socio seleccionado: se abrirá su ficha

3\. Vaya a la pestaña «Configuración»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_2.png)

4\. Haga clic en el botón «Añadir»

5\. En la lista desplegable seleccione la clave **Velavu**. En el valor del parámetro pegue la configuración de Velavu en formato JSON.

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_3.png)

Ejemplo de configuración JSON de Velavu

<table><tbody><tr><td><span></span></td><td><div><span>[</span></div><div><span>&nbsp;{</span></div><div><span>&nbsp;"broker": "iot.velavu.com",</span></div><div><span>&nbsp;"port": "8883",</span></div><div><span>&nbsp;"customer_id": "YOUR_CUSTOMER_ID",</span></div><div><span>&nbsp;"api_token": "YOUR_API_TOKEN",</span></div><div><span>&nbsp;"cert": "-----BEGIN CERTIFICATE-----\nYOUR_CERTIFICATE\n-----END CERTIFICATE-----",</span></div><div><span>&nbsp;"key": "-----BEGIN RSA PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END RSA PRIVATE KEY-----"</span></div><div><span>&nbsp;}</span></div><div><span>]</span></div></td></tr></tbody></table>

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; broker</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dirección del broker MQTT de Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; port</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Puerto de conexión</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; customer_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID del cliente en el sistema Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; api_token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Token de acceso a la API de Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cert</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Certificado SSL para la conexión</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; key</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Clave privada SSL</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Todos los datos (customer_id, api_token, certificado y clave) los obtiene de su cuenta de Velavu.</div></td></tr></tbody></table>

6\. Guarde la configuración. Después de esto, la integración estará disponible para las cuentas que pertenezcan a este socio
