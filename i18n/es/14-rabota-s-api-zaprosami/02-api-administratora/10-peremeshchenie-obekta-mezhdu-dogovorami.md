---
title: "Traslado de un objeto entre contratos"
---

Esta API se utiliza para trasladar un vehículo entre cuentas.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

Para obtener los datos necesarios, añada parámetros a la dirección de la solicitud. Los parámetros se indican después del signo de interrogación «?» y se separan con el signo «&».

-   cmd = veh\_move\_account: comando para trasladar objetos a otra cuenta
    
-   vehicle\_id: identificador del vehículo que se debe trasladar a la cuenta
    
-   account\_id: número de la nueva cuenta
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/backend/api.php?cmd</span>=veh_move_account&amp;vehicle_id=23&amp;account_id=1005&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{"code": 1, "msg": "Success move vehicle 23 to account 1005"}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado:
    

— 1: la operación se realizó correctamente

— 0: error al realizar la operación

-   msg: mensaje con la descripción en texto del resultado de la operación
