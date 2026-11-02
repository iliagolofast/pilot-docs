---
title: "Edición de un vehículo"
---

Esta API se utiliza para editar los datos de un vehículo. Se puede modificar la información del vehículo, incluidos el tipo, el modelo, la matrícula, el VIN, el año de fabricación, la potencia del motor, el kilometraje inicial y las horas de motor, así como la asignación a una carpeta, a un conductor o a una subdivisión.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

Obligatorios:

-   cmd=vehedit: comando para modificar la información del vehículo
    
-   agentid: identificador del vehículo, o imei: ID único del dispositivo
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Adicionales:

-   type: tipo de vehículo, el ID se toma del comando vehtypelist
    
-   veh\_number: nombre mostrado o matrícula del vehículo
    
-   veh\_type: tipo de vehículo personalizado (cadena de texto)
    
-   folder\_id: carpeta en la que se coloca el objeto; si la carpeta no existe, se crea automáticamente. Por defecto, la carpeta raíz
    
-   model: modelo del vehículo
    
-   initial\_motor\_hours: horas de motor iniciales
    
-   driver\_id: ID del conductor
    
-   initial\_mileage: kilometraje inicial (por defecto 0)
    
-   year: año de fabricación del vehículo (por defecto 1900)
    
-   vin: VIN del vehículo
    
-   engine\_horse: potencia del motor
    
-   organization: organización
    
-   column: columna
    
-   subdivision: subdivisión
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehedit&amp;agentid=144&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"Success": "The vehicle data has been changed"</div><div>}</div></td></tr></tbody></table>
