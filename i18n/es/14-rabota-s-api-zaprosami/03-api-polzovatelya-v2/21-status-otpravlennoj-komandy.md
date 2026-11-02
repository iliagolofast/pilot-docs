---
title: "Estado de un comando enviado"
---

Esta API obtiene el estado de un [comando](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html) complejo, incluido el estado general y el estado o la respuesta de todos los objetos y comandos que forman parte del comando complejo.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=get\_command\_status: comando para solicitar el estado
    
-   command\_id: identificador del comando complejo
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_command_status&amp;command_id=3989&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "message": "",</div><div>&nbsp; "detailed_status": {</div><div>&nbsp; &nbsp; "43207": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Ver: 03.25.15_88 GPS: AXN_3.80_3333 Hw: FMB010 Mod: 3 IMEI: 352094083043221 Init: 2024-3-30 12:29 Uptime: 505289 MAC: 001E428490AF SPC: 0 (0) AXL: 0 OBD :0 BL:0,2 BT:3"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type": "GPRS",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "status": "accepted",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "response": "Data channel: 1 GPRS: 1 Phone: 0 SIM: 0 OP: 25001 Signal: 4 New SMS: 0 Roaming: 0 SMSFull: 0 LAC: 10 Cell ID: 11522 NetType: 1 FwUpd: -65536"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "general_status": "completed",</div><div>&nbsp; "version": "7.2.0"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   message: mensaje del servidor sobre el resultado
    
-   detailed\_status: arreglo asociativo con información detallada de cada agente
    
-   clave del arreglo (por ejemplo, 43207): identificador del agente
    
-   type: tipo de canal de transmisión de datos
    
-   status: estado de ejecución del comando (accepted, executed, etc.)
    
-   response: respuesta de texto del dispositivo
    
-   general\_status: estado general del comando complejo (pending, completed, failed)
    
-   version: versión del sistema
