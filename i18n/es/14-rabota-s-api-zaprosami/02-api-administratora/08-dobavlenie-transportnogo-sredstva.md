---
title: "Adición de un vehículo"
---

Para añadir un objeto a un contrato, utilice esta API.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

Para obtener los datos necesarios, añada parámetros a la dirección de la solicitud. Los parámetros se indican después del signo de interrogación «?» y se separan con el signo «&».

Obligatorios:

-   cmd = vehadd: comando para añadir un vehículo
    
-   account\_id: número del contrato en el sistema
    
-   vehmodel: modelo del dispositivo de monitoreo. El ID del modelo se toma de la respuesta del comando vehmodellist
    
-   imei: número único del dispositivo de monitoreo
    
-   type: tipo de vehículo. El ID del tipo de vehículo se toma de la respuesta del comando vehtypelist. Si el tipo necesario no está en la lista, puede indicar un nuevo ID
    
-   name: matrícula o nombre del vehículo
    
-   msisdn: número de la SIM principal del dispositivo
    
-   msisdn2: número de la segunda SIM del dispositivo
    
-   mac: dirección MAC, identificador del dispositivo de control de pasajeros.  Si se indica el parámetro mac, el sistema creará automáticamente un registro del objeto en la pestaña «Autobuses» del panel de administración. 
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Adicionales:

-   folder: nombre de la carpeta a la que se añade el vehículo. Si la carpeta indicada no existe, se creará. Si no se indica ninguna carpeta, el vehículo se añadirá a la lista general, es decir, a la carpeta raíz
    
-   info: información adicional sobre el vehículo
    
-   summer\_fuel: consumo de combustible en verano
    
-   winter\_fuel: consumo de combustible en invierno
    
-   fuel\_type: tipo de combustible utilizado . 50: diésel, 80-92-95-98: gasolina, 100: gas. Si no se indica el parámetro, el sistema establecerá diésel automáticamente
    
-   lost\_connection\_time: tiempo tras el cual se registra la pérdida de conexión (en segundos)
    
-   time\_zone: zona horaria del vehículo. Por defecto se establece Europe/Moscow
    
-   initial\_motor\_hours: lectura inicial de horas de motor
    
-   driver\_id: identificador del conductor
    
-   initial\_mileage: kilometraje inicial del vehículo. Si no se indica, se cuenta desde cero
    
-   speed\_limit: velocidad máxima permitida. Si no se indica, el control de velocidad está desactivado
    
-   minsat: número mínimo de satélites. Por defecto está establecido 4
    
-   maxhdop: HDOP máximo. Por defecto está establecido 21
    
-   mintime: tiempo mínimo de estacionamiento para dividir los recorridos. Por defecto está establecido 3600 segundos
    
-   maxspeed: velocidad máxima posible. Por defecto está establecida 250
    
-   minspeed: velocidad mínima para detectar el inicio del movimiento. Por defecto está establecida 10 km/h
    
-   minparking: tiempo mínimo de estacionamiento en la ruta. Por defecto está establecido 300 segundos
    
-   model: marca y modelo del vehículo
    
-   year: año de fabricación del vehículo. Si no se indica el año de fabricación, por defecto se considerará el año 1900
    
-   vin: número de identificación del vehículo
    
-   engine\_horse: potencia del motor
    
-   organization: nombre de la organización propietaria
    
-   column: número de columna
    
-   subdivision: subdivisión
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/backend/api.php?cmd=vehadd&amp;account_id=4019&amp;type=1&amp;name=testveh&amp;imei=80987898789987&amp;vehmodel=13&amp;msisdn=7903&amp;node=1</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp;"code": 0,</span></div><div><span>&nbsp;"msg": "OK",</span></div><div><span>&nbsp;"agent_id": "20518",</span></div><div><span>&nbsp;"veh_id": "18994"</span></div><div><span>}</span></div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de respuesta que indica cómo se procesó la solicitud
    
-   msg: mensaje con la descripción en texto del resultado de la operación
    
-   agent\_id: identificador del agente que procesó la solicitud
    
-   veh\_id: identificador del vehículo al que se refiere esta respuesta
