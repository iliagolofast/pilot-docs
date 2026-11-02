---
title: "Obtención de la lista de objetos"
---

Esta API transmite información sobre los vehículos, incluida su ubicación actual.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Parámetros de la solicitud

Para obtener los datos es necesario realizar una solicitud con autorización e indicando la función:

-   Username: nombre de usuario
    
-   Password: contraseña
    
-   functionName=api\_objectlist: comando para obtener la lista de objetos
    
-   node: número del nodo en el que se debe ejecutar el comando
    

El formato de los datos solicitados es un arreglo de objetos de vehículos.

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectlist</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"IMEI": "352016703961657",</div><div>&nbsp;"PLATE": "6561",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 25.9131066,</div><div>&nbsp;"LONGITUDE": 46.4645949</div><div>&nbsp;}</div><div>]</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve un arreglo de objetos de vehículos. Cada objeto contiene:

-   IMEI: identificador del rastreador instalado en el vehículo
    
-   PLATE: matrícula del vehículo
    
-   NAME: nombre del vehículo
    
-   LATITUDE: latitud actual de la ubicación del objeto
    
-   LONGITUDE: longitud actual de la ubicación del objeto
