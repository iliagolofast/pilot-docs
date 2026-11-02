---
title: "Eliminación de una guía de transporte"
---

Esta API elimina una guía de transporte existente del período de tiempo indicado.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=remove\_waybill — comando para eliminar una guía de transporte
    
-   ts — hora de inicio (Unix timestamp)
    
-   te — hora de fin (Unix timestamp)
    
-   agent\_id — identificador del agente
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=remove_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": 1</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code— código de resultado (0 = correcto)
    
-   data— resultado de la eliminación (1 = eliminada correctamente)
