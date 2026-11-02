---
title: "Estado de todos los objetos de la cuenta"
---

Esta API proporciona la lista de todos los vehículos asociados a una cuenta determinada, con su estado actual.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=vehicles: comando para obtener la lista de vehículos
    
-   account\_id: ID de la cuenta cuya lista de objetos se necesita
    
-   node: número del nodo en el que se debe ejecutar el comando
    
    Parámetros adicionales:
    
-   is\_show\_deleted: mostrar los vehículos eliminados (0, mostrar solo los vehículos activos; 1, mostrar todos los vehículos, incluidos los eliminados)
    

El formato de los datos solicitados es un arreglo de datos de vehículos.

### Ejemplo de solicitud

Visualización de los objetos eliminados:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehicles&amp;account_id=2238&amp;is_show_deleted=1&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehicles&amp;account_id=2238&amp;is_show_deleted=1&amp;node=1</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

active: estado de actividad del objeto: 1, activo; 0, inactivo

deleted: indica si el objeto fue eliminado: 0, no eliminado; 1, eliminado

agentid: número único del dispositivo

configuration: nombre de la configuración del equipo GPS (por ejemplo, Teltonika FM1100)

current\_mileage: kilometraje del vehículo, km

dir: dirección de movimiento

driver\_name: nombre del conductor (si está asignado)

driver\_phone: teléfono del conductor

folder: nombre de la carpeta o categoría en el sistema

lat: latitud geográfica de la última posición

lon: longitud geográfica de la última posición

model: modelo del vehículo

msisdn: número de la SIM del rastreador

on: encendido (1, activado; 0, desactivado)

partner\_price: precio para el socio

price: precio de venta al público

sats: número de satélites con los que se ha establecido contacto

speed: velocidad actual, km/h

ts: marca de tiempo (timestamp, UNIX time) de la última actualización de la posición

type: tipo de objeto

uniqid: identificador único del dispositivo (normalmente el IMEI)

vehiclenumber: matrícula del vehículo
