---
title: "Lista de equipos"
---

Esta API se utiliza para obtener la lista de todos los tipos de equipos (modelos de dispositivos) que se utilizan en el contrato, con indicación del fabricante.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=vehmodellist: comando para obtener la lista de modelos de equipos
    
-   node: número del nodo en el que se debe ejecutar el comando
    
    ### Ejemplo de solicitud
    

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehmodellist&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 Lite GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de ejecución de la solicitud (0, correcta)
    
-   data: arreglo de modelos de equipos:
    
-   identifier: identificador único del modelo
    
-   name: nombre del modelo de equipo
    
-   supplier: fabricante del equipo
    
-   message: mensaje de texto con el resultado de la solicitud
