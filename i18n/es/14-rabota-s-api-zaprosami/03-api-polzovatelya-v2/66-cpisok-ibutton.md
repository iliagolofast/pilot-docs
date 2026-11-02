---
title: "Lista de iButton"
---

Esta API obtiene la lista de iButton asignados a un vehículo durante el período de tiempo indicado.

iButton es un pequeño dispositivo electrónico (etiqueta) que se utiliza para identificar conductores u objetos. Suele emplearse para el control de acceso, el registro del tiempo de trabajo o para registrar el inicio y el fin del trabajo con un vehículo.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=take\_ibutton\_list — comando de la API; en este caso
    
-   ts — fecha de inicio del período (Unix timestamp)
    
-   te — fecha de fin del período (Unix timestamp)
    
-   agentId — identificador del vehículo
    
-   node — número del nodo en el que debe ejecutarse el comando
    

Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=take_ibutton_list&amp;ts=1643662800&amp;te=1645045200&amp;AgentID=79673<span>&amp;node=1</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "data": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000000",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ibutton": "ae00001000000001",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1643680128</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: correcto)
    
-   msg — mensaje del servidor (por ejemplo, "OK")
    
-   data — arreglo con la información de los iButton:
    
-   ibutton — identificador único del iButton
    
-   ts — hora de registro del iButton (Unix timestamp)
