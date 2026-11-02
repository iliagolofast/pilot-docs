---
title: "Configuración de la retransmisión a RNIS"
source: nastrojka_retranslyatsii_v_rnis.html
---

Para configurar la transmisión de datos de los objetos de monitorización al Sistema Regional Unificado de Navegación e Información (RNIS) de Moscú, siga estos pasos:

### 1\. Configuración de la retransmisión en el sistema de monitorización PILOT

1\. Entre en el panel de administración

2\. Vaya a la pestaña «Máquinas»

3\. Busque el objeto necesario, haga clic con el botón derecho del ratón sobre él y seleccione «Retransmisión» en el menú

**![](images/drex_nastrojka_retranslyatsii_v_rnis_custom.png)**

4. En la ventana que se abre, pulse el botón de añadir retransmisión ![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_2.png)

**![Configuración de la retransmisión a RNIS](images/drex_nastrojka_retranslyatsii_v_rnis_screen.png)**

5\. En la ventana «Configuración» rellene los campos para configurar la retransmisión a RNIS:

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_3.png)

Utilice los siguientes parámetros:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Campo</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Descripción</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Valor</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Host</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Dirección del host para enviar los datos (IP o nombre de dominio)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; data.rnis.mos.ru — dirección del servidor receptor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Puerto</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Puerto al que se envían los datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 4444 — puerto para conectarse al servidor de RNIS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Formato</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Formato de retransmisión</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> EGTS — protocolo de transmisión de datos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Identificador externo del dispositivo (normalmente IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>Introduzca los últimos 8 dígitos del IMEI del dispositivo.</span></div><div><span>Por ejemplo, si el IMEI del dispositivo es 4901542<span>03237518</span>, introduzca en el campo del identificador externo 03237518</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Activado</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Estado de actividad de la retransmisión</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Es obligatorio marcar la casilla</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Parámetros adicionales en formato JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; {"skip_auth": true} — configuración estándar para la conexión</span></div></td></tr></tbody></table>

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_4.png)

### 2\. Registro del terminal en la cuenta de usuario de RNIS

1\. Vaya a la cuenta de usuario de RNIS en el sitio mos.ru.

2\. Al añadir el terminal telemático del vehículo, indique los siguientes parámetros:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Parámetro en RNIS</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Valor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Protocolo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; EGTS_O</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Parámetro de importancia crítica. Corresponde al formato EGTS,</span></div><div><span>&nbsp;donde el identificador se transmite en el campo OID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Identificador</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; XXXXXXXX</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;El mismo número que el identificador externo&nbsp;en&nbsp;el sistema PILOT (los últimos 8 dígitos del IMEI). Por ejemplo, si el IMEI del dispositivo es 4901542<span>03237518</span>, introduzca en el campo del identificador externo 03237518</span></div></td></tr></tbody></table>

Esquema de una integración correcta de PILOT y RNIS

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;RNIS</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Formato: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Protocolo: EGTS_O</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;ID externo: 03237518</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador: 03237518</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Los últimos 8 dígitos del IMEI del dispositivo deben coincidir tanto en el sistema PILOT como en el sistema RNIS. Por ejemplo, si&nbsp;en&nbsp;PILOT se indica 03237518, en RNIS este mismo identificador debe transmitirse en el campo OID.</div></td></tr></tbody></table>

Al registrarse en RNIS, es necesario proporcionar al operador los siguientes datos:

-   Para identificar el vehículo se transmiten los últimos 8 dígitos del IMEI en el campo OID
    
-   Tipo de protocolo — en RNIS debe seleccionarse para su conexión el tipo EGTS\_O
    
    <table><tbody><tr><td><span></span></td><td><div>Para evitar errores y garantizar la transmisión correcta de los datos, es importante que los ajustes y el identificador indicados en PILOT coincidan exactamente con los utilizados en RNIS.</div><ul><li><div>El identificador externo del objeto en el sistema PILOT (los últimos 8 dígitos del IMEI del dispositivo) debe transmitirse&nbsp;a&nbsp;RNIS en el campo OID (en el marco del protocolo EGTS_O).</div></li><li><div>El protocolo de transmisión de datos en ambos sistemas debe ser el mismo: EGTS en el sistema PILOT y EGTS_O en RNIS.</div></li></ul></td></tr></tbody></table>
    

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;RNIS</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Protocolo: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Protocolo: EGTS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;ID externo: (últimos 8 dígitos del IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de conexión: EGTS_O</span></div></td></tr></tbody></table>
