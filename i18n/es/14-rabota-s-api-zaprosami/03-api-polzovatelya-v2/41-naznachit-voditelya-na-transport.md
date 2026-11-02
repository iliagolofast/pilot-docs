---
title: "Asignar un conductor a un vehículo"
---

Esta API asigna un conductor a un vehículo concreto mediante su identificador (IMEI) y una etiqueta (llave).

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=linkdriver — comando de la API que asigna el conductor
    
-   imei — identificador único del vehículo en el sistema
    
-   driver — nombre completo del conductor
    
-   driverkey— número de llave (etiqueta) del conductor
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=linkdriver&amp;imei=548545218454&amp;driver=ADAS+driver&amp;driverkey=89185717259&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "data": [],</div><div>&nbsp; &nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: correcto; cualquier otro valor: error)
    
-   data — datos adicionales (en este caso, un arreglo vacío)
    
-   message — mensaje de texto del servidor (por ejemplo, “success”)
