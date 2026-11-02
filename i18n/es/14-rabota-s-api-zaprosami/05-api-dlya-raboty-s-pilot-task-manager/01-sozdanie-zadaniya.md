---
title: "Creación de una tarea"
---

Esta API sirve para crear tareas en el sistema para los contratos que tienen conectado el módulo [PTM](../../lichnyj-kabinet-polzovatelya/moduli-1/pilot-task-manager/index.html).

### Ruta base de la API 

<table><tbody><tr><td><span></span></td><td><div>/backend/public/api/task</div></td></tr></tbody></table>

### Dirección de la solicitud

Para realizar la solicitud, utilice el siguiente formato de dirección:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/api/task</div></td></tr></tbody></table>

### Acceso a la API

Para acceder a la API se utiliza la autenticación HTTP Basic. El nombre de usuario y la contraseña deben tener el siguiente formato:

<table><tbody><tr><td><span></span></td><td><div>логин_из_PILOT:пароль_из_PILOT</div></td></tr></tbody></table>

### Ejemplo de solicitud a la API

<table><tbody><tr><td><span></span></td><td><div>https://demo:demo@tasks.pilot-gps.com/backend/public/api/task/create_universal</div></td></tr></tbody></table>

### Formato de la respuesta de la API

La respuesta de la API está estandarizada y tiene el siguiente formato:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,&nbsp; // TRUE: solicitud correcta; FALSE: error</div><div>&nbsp; &nbsp; "msg": "OK",&nbsp; // Mensaje de error, si lo hay</div><div>&nbsp; &nbsp; "httpCode": 200,&nbsp; // Código de error</div><div>&nbsp; &nbsp; "data": [],&nbsp; // Datos de la respuesta, si los hay</div><div>&nbsp; &nbsp; "et": 0,&nbsp; // Tiempo de ejecución de la solicitud</div><div>&nbsp; &nbsp; "exceptionMsg": "Exception"&nbsp; // Mensaje de la excepción</div><div>}</div></td></tr></tbody></table>

Estados y códigos de error:

-   200 — La solicitud se ejecutó correctamente
    
-   400 — Faltan parámetros obligatorios
    
-   401 — Error de autorización: nombre de usuario o contraseña incorrectos
    
-   404 — No se encontró la ruta de la API
    
-   500 — Error en el servidor
    

### Cómo crear una tarea

Método de la solicitud: POST

Para crear una tarea con la plantilla Universal, es necesario enviar los parámetros. La plantilla Universal se crea automáticamente en el sistema; las plantillas adicionales deben configurarse previamente en la interfaz de PTM.

### Parámetros de la tarea para la plantilla Universal

Para una tarea con la plantilla Universal se utiliza el siguiente conjunto de parámetros:

1\. external\_id: Identificador externo de la tarea (cadena, NULL de forma predeterminada)

2\. vehicle\_plate: Número del vehículo (NULL de forma predeterminada). Si el número no existe en el sistema, se creará como vehículo contratado

3\. driver\_name: Nombre completo del conductor (NULL de forma predeterminada). Si no se indica, se usa el valor de vehicle\_plate. Si el conductor no existe en el sistema, se creará como conductor contratado

4\. type\_name: Tipo de tarea (Delivery de forma predeterminada). Si no existe ese tipo, se creará

5\. template\_name: Nombre de la plantilla de la tarea (Universal de forma predeterminada). Si la plantilla no existe, se creará

6\. time\_zone: Zona horaria, desfase respecto a UTC (número, tiempo en minutos respecto a UTC, NULL de forma predeterminada)

7\. time\_zone\_name: Nombre de la zona horaria (cadena, NULL de forma predeterminada)

8\. c\_begin\_time: Hora planificada de inicio de la tarea (número: marca de tiempo en segundos; la hora actual de forma predeterminada)

9\. c\_return\_time: Hora planificada de finalización de la tarea (número, NULL de forma predeterminada)

10\. route\_name: Nombre de la ruta (cadena, NULL de forma predeterminada)

11\. cargo: Nombre de la carga (cadena, NULL de forma predeterminada)

12\. temp\_min: Temperatura mínima (número, 2 °C de forma predeterminada)

13\. temp\_max: Temperatura máxima (número, 8 °C de forma predeterminada)

14\. description: Descripción de la tarea (cadena, NULL de forma predeterminada)

15\. addresses\_list (obligatorio): lista de direcciones o puntos de la ruta (cadenas con direcciones o coordenadas)

### Parámetros relacionados con la dirección de la ruta

La dirección de cada punto de la ruta puede complementarse con diversos parámetros con sufijos que describen las características de la ruta y los datos geográficos.

1\. addresses\_list: Lista de direcciones o puntos de la ruta (cadenas con direcciones o coordenadas).

2\. addresses\_list\_lat: Arreglo de latitudes de los puntos de la ruta. Si se indica, se usará para cada dirección

3\. addresses\_list\_lng: Arreglo de longitudes de los puntos de la ruta. Arreglo de números que indican la latitud de los puntos de la ruta

4\. addresses\_list\_date\_point: Arreglo de marcas de tiempo (segundos) que indican la hora planificada de llegada

5\. addresses\_list\_date\_point\_to: Arreglo de marcas de tiempo (segundos) que indican la hora planificada de salida. Se calcula automáticamente si no se indica

6\. addresses\_list\_time\_point: Arreglo con el tiempo de carga/descarga en cada punto de la ruta, en minutos

7\. addresses\_list\_redirect: Indicador de redirección de la dirección actual a la siguiente. Indica que la dirección se redirige a la siguiente de la ruta.

8\. addresses\_list\_geofence\_id: Identificadores de geocercas para cada punto de la ruta

9\. addresses\_list\_warehouse: Nombres de almacenes u objetos para cada punto de la ruta

10\. addresses\_list\_ticket: Arreglo de identificadores únicos de pedidos para cada punto de la ruta

11\. addresses\_list\_phones: Teléfonos de contacto para cada punto de la ruta

12\. addresses\_list\_schedule: Horario de trabajo para cada punto de la ruta

13\. addresses\_list\_vehicle\_volume: Volumen de carga en el vehículo

14\. addresses\_list\_trailer\_volume: Volumen de carga en el remolque

15\. addresses\_list\_action: Descripción de las acciones que se deben realizar en cada punto de la ruta

16\. addresses\_list\_agent\_id: Identificador del objeto del sistema PILOT, utilizado para contenedores de basura

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>fetch("https://tasks.pilot-gps.com/backend/public/api/task/create_universal", {</div><div>&nbsp; &nbsp; "headers": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Authorization": "Basic ZGVtbzpkZW1v", // codificación en base64 de "demo:demo"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Content-Type": "application/json"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "method": "POST",</div><div>&nbsp; &nbsp; "body": JSON.stringify({</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "external_id": "T-5677786754",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "vehicle_plate": "PT 125 AA 66",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type_name": "Delivery",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "template_name": "Universal",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone": -180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone_name": "Europe/Moscow",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_begin_time": 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_return_time": 1723238700,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "route_name": "My route",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "cargo": "Milk",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_min": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_max": 6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "description": "Test",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "215, улица Народного Ополчения, Ростов-на-Дону",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "47.227196,39.705228",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Client 2"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lat": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.234256,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.227196,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.216077</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lng": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706467,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.705228,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706928</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_date_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723234800,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723237800</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_time_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 20,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_rad_geo": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 40,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 30</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; })</div><div>});</div></td></tr></tbody></table>

### Ejemplo de respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "httpCode": 200,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 12563</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "et": 0.5612</div><div>}</div></td></tr></tbody></table>
