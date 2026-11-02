---
title: "IMEI según el número del vehículo"
---

Esta API se utiliza para determinar el IMEI del dispositivo instalado en un vehículo a partir de su número.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=get\_imei — comando de la API
    
-   vehnum — número del vehículo
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_imei&amp;vehnum=IX35&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "imei": "356307045913463"</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0 = correcto)
    
-   msg — mensaje del servidor
    
-   imei — IMEI del dispositivo instalado en el vehículo
