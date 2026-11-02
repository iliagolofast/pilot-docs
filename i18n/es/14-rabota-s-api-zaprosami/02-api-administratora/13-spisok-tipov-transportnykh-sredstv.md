---
title: "Lista de tipos de vehículos"
---

Utilice esta API para obtener la lista de todos los tipos de vehículos de un contrato.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=vehtypelist: comando para obtener la lista de tipos de vehículos
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehtypelist&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "Car"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "Truck"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 3,</div><div>&nbsp; &nbsp; &nbsp; "name": "Passenger"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 4,</div><div>&nbsp; &nbsp; &nbsp; "name": "Agrimotor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de ejecución de la solicitud (0, correcta)
    
-   data: arreglo de tipos de vehículos:
    
-   identifier: identificador único del tipo de vehículo
    
-   name: nombre del tipo de vehículo
    
-   message: mensaje de texto con el resultado de la solicitud
