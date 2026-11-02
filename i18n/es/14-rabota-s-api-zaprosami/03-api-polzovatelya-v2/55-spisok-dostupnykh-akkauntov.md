---
title: "Lista de cuentas disponibles"
---

Esta API se utiliza para obtener la lista de cuentas a las que tiene acceso el usuario actual.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET o POST

### Parámetros de la solicitud

-   cmd=get\_account\_map — comando de la API para obtener la lista de cuentas disponibles
    
-   node —  número del nodo en el que se ejecuta el comando
    

### Ejemplo de solicitud GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_map&amp;node=1</div></td></tr></tbody></table>

### Ejemplo de solicitud POST

Cuerpo de la solicitud (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_map"</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"account_id": 1005},</div><div>&nbsp; &nbsp; {"account_id": 1000}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de ejecución (0 significa operación correcta)
    
-   data — lista de cuentas disponibles para el usuario
    
-   account\_id — identificador de la cuenta (contrato)
