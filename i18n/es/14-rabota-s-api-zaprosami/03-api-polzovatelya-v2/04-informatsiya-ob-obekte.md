---
title: "Información de un objeto"
---

Esta API transmite información detallada sobre un vehículo concreto.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/CRIT/api.php?node=<node\_id>

### Parámetros de la solicitud

Para obtener los datos es necesario realizar una solicitud con autorización e indicando la función y el objeto:

-   Username: nombre de usuario
    
-   Password: contraseña
    
-   functionName=api\_objectdetails: comando para obtener los detalles del objeto
    
-   parameters: IMEI del objeto cuyos detalles se solicitan
    
-   node: número del nodo en el que se debe ejecutar el comando
    

El formato de los datos solicitados es un solo objeto de vehículo

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>POST https://&lt;server_address&gt;/api/CRIT/api.php?node=6</div><div>Content-Type: multipart/form-data</div><div>&nbsp;</div><div>Username=TestName</div><div>Password= 123456</div><div>functionName=api_objectdetails</div><div>parameters=352217706092097</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"IMEI": "352016704092097",</div><div>&nbsp;"PLATE": "5209 ",</div><div>&nbsp;"INSTALLATIONDATE": "Dec 06, 2023",</div><div>&nbsp;"NAME": "",</div><div>&nbsp;"LATITUDE": 29.7682433,</div><div>&nbsp;"LONGITUDE": 39.9979749</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve un objeto con información sobre el vehículo:

-   IMEI: identificador del rastreador instalado en el vehículo
    
-   PLATE :  matrícula del vehículo
    
-   INSTALLATIONDATE: fecha de instalación del rastreador en el vehículo
    
-   NAME: nombre del vehículo
    
-   LATITUDE: latitud actual de la ubicación del objeto
    
-   LONGITUDE: longitud actual de la ubicación del objeto
