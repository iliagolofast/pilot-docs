---
title: "Envío de un comando a un objeto"
---

Esta API envía un comando a un vehículo utilizando una plantilla de comando creada previamente en el módulo [«Comandos»](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html).

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=send\_command: comando para enviar un comando al vehículo
    
-   agent\_id: identificador del agente (vehículo)
    
-   template\_name: nombre de la plantilla de comando (se crea en el módulo «Comandos»)
    
-   node: número del nodo en el que se debe ejecutar el comando (opcional)
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=send_command&amp;agent_id=139849&amp;template_name=test123&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": null,</div><div>&nbsp; "command_id": 3989</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor sobre el resultado de la acción
    
-   command\_id: identificador del comando enviado
