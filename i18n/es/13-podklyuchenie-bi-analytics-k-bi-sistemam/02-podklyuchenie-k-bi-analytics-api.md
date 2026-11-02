---
title: "Conexión a la API de BI Analytics"
---

Para conectarse a la API de BI Analytics es necesario obtener los datos de autorización y configurar correctamente los parámetros de conexión.

Para la conexión necesitará:

— usuario y contraseña de la cuenta de socio

— dirección del servidor en el que funciona su cuenta

Una vez preparados estos datos, podrá utilizar la API de BI Analytics para conectarse a Power BI o a cualquier otro sistema de BI que admita el trabajo con REST API.

## Dónde obtener el usuario y la contraseña

Para conectarse a la API de BI Analytics se necesitan el usuario y la contraseña de la cuenta de socio.

Utilice los mismos datos que se le entregaron al registrar la cuenta de socio. Son el mismo usuario y la misma contraseña que se utilizan para acceder al panel de administración.

Si tiene acceso con derechos de administrador principal, puede consultar estos datos en la ficha de la cuenta de socio, en la pestaña «Configuración básica»:

-   Usuario: utilícelo como username
    
-   Contraseña: utilícela como password
    

![Conexión a la API de BI Analytics](images/drex_podklyuchenie_k_bi_analytics_api_screen.png)

## Cómo elegir la dirección del servidor

Para conectarse a la API de BI Analytics, en la solicitud es necesario indicar la dirección del servidor en el parámetro BaseUrl. Utilice el servidor en el que funciona su cuenta.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Servidor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Dirección</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Finalidad</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Production</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor principal</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Arabia Saudita</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://ksa.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor regional para Arabia Saudita</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; África</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://pilot-gps.africa</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor regional para África</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Blade</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://blade.pilot-gps.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor Blade</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Iglit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; https://gps.iglit.tech</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor Iglit</span></div></td></tr></tbody></table>

En la solicitud indique la URL que necesite, por ejemplo,

<table><tbody><tr><td><span></span></td><td><div>BaseUrl = "https://ksa.pilot-gps.com",</div></td></tr></tbody></table>
