---
title: "Configuración de la retransmisión a la plataforma WMS"
---

Veamos cómo configurar la integración que transmite los datos de los rastreadores GPS del sistema PILOT a la plataforma externa WMS mediante el protocolo «Municipalidad de Riad».

La configuración consta de dos etapas:

1\. Configuración de la retransmisión en el panel de administración de PILOT

2\. Configuración de los sensores de los objetos

### 1\. Configuración de la retransmisión en el panel de administración

1\. Acceda al panel de administración

2\. Vaya a la pestaña «Vehículos»

3\. Busque el objeto que necesite, haga clic derecho sobre él y seleccione «Retransmisión» en el menú

**![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom.png)**

4. En la ventana que se abre, pulse el botón para añadir una retransmisión ![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_2.png)

**![Configuración de la retransmisión a la plataforma WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen.png)**

5\. En la ventana «Configuración», rellene los campos para configurar la retransmisión:

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_3.png)

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Campo</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Descripción</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Valor</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Host</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Dirección del host para el envío de datos (IP o nombre de dominio)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span>Por ejemplo, admin-dev-wms.iotsquared.io&nbsp;(el host se indica en el protocolo)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Puerto</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Puerto al que se envían los datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;443</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Formato</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Formato de retransmisión</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>RIYADH municipality — seleccione de la lista desplegable</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Identificador externo del dispositivo (normalmente el IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Introduzca el&nbsp;IMEI&nbsp;del dispositivo&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Ruta</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Ruta de la solicitud, que contiene el x-token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; /api/v1/integrations/http/${httpid}&nbsp;(donde ${httpid} es el x-token)</span></div><div><span>&nbsp; Por ejemplo, /api/v1/integrations/http/32fc9bec-967839-467890-56a0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;USPW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Nombre de usuario y contraseña, si se requiere autorización</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Zona horaria</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Huso horario</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;UTC</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Límite de velocidad</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Límite de velocidad</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Activada</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Estado de actividad de la retransmisión</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Marque la casilla</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Parámetros adicionales en formato JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Indique el nombre del socio</span></div></td></tr></tbody></table>

Ejemplo de configuración

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_4.png)

### 2\. Configuración de sensores

Para una integración correcta con WMS, el objeto debe tener instalados los siguientes sensores obligatorios:

— sensor de antena GPS

— sensor de kilometraje CAN

— sensor especial de peso (Weight)

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_5.png)

Para que el dispositivo Teltonika transmita el kilometraje CAN (lecturas del odómetro), es necesario activar este parámetro mediante un comando.

1\. Acceda al panel de administración

2\. Vaya a la pestaña «Vehículos»

3\. Busque el objeto que necesite, haga clic derecho sobre él y seleccione «Comandos» en el menú

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_6.png)

4.  En la ventana «Comandos», seleccione un comando de la lista desplegable

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_7.png)

5\. Indique los parámetros del comando y pulse el botón «Enviar»

![Configuración de la retransmisión a la plataforma WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen_2.png)

1 — Indicar los parámetros del comando

2 — Abrir la lista de comandos

-   setparam 50160:1 — activar la transmisión de datos del odómetro
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_8.png)

Si necesita establecer un valor inicial de kilometraje, es decir, que no parta de cero:

-   setparam 11807:\[valor\]— establecer el kilometraje sin partir de cero
    
    Por ejemplo, setparam 11807:2729, donde 2729 es el valor inicial del odómetro en kilómetros
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_9.png)

Estos comandos configuran el dispositivo Teltonika para recibir los datos de kilometraje a través del bus CAN del vehículo. Una vez configurado, el kilometraje se transmitirá automáticamente al sistema.
