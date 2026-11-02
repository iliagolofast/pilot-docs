---
title: "Creación de una guía de transporte"
---

Esta API crea una nueva guía de transporte para el período de tiempo indicado.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=add\_waybill — comando para añadir una guía de transporte
    
-   ts — hora de inicio (Unix timestamp)
    
-   te — hora de fin (Unix timestamp)
    
-   agent\_id — identificador del agente
    
-   name — nombre de la guía de transporte
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;name=test+bill1&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "ts": 1596022528,</div><div>&nbsp; &nbsp; "te": 1596488400,</div><div>&nbsp; &nbsp; "agent_id": 44841,</div><div>&nbsp; &nbsp; "account_id": 3934,</div><div>&nbsp; &nbsp; "waybill": {</div><div>&nbsp; &nbsp; &nbsp; "name": "test bill1"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0 = correcto)
    
-   data — objeto con los datos de la guía de transporte creada
    
-   ts — hora de inicio de la guía de transporte
    
-   te — hora de fin de la guía de transporte
    
-   agent\_id — identificador del agente
    
-   account\_id — identificador de la cuenta
    
-   waybill.name — nombre de la guía de transporte
