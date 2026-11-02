---
title: "Actualizar la lista de contratos del usuario"
---

Esta API permite asignar a un usuario el acceso a determinados contratos.

Por ejemplo, si un socio tiene varios contratos en el sistema, el administrador puede elegir a cuáles tendrá acceso un usuario concreto.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

POST

### Parámetros de la solicitud

-   cmd=update\_user\_accounts\_map — comando para cambiar la lista de contratos disponibles
    
-   accounts — lista de identificadores de contratos, separados por comas
    
    <table><tbody><tr><td><span></span></td><td><div>Los contratos (accounts) deben pertenecer al mismo socio al que pertenece el usuario.</div></td></tr></tbody></table>
    
-   user\_id — identificador del usuario al que se asigna el acceso
    
-   node — número del nodo en el que se ejecuta el comando
    
    <table><tbody><tr><td><span></span></td><td><div>Si en el sistema el socio del usuario es 0 → no es posible asignar contratos (<a href="../../panel-administratora/administrator/account-mapping.html"><span>mapeo</span></a> no funciona).</div></td></tr></tbody></table>
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_accounts_map",</div><div>&nbsp; &nbsp; "accounts": "1005",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: operación correcta)
    
-   msg — mensaje del servidor
