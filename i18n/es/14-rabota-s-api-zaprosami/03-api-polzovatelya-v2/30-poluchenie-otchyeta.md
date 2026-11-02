---
title: "Obtención de un informe"
---

Esta API genera un informe de vehículos, conductores, zonas, clientes o etiquetas durante el período de tiempo seleccionado, con posibilidad de configurar el contenido en detalle.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET o POST

### Parámetros de la solicitud

Obligatorios:

-   cmd=get\_report: comando para obtener el informe
    
-   report\_type: tipo de informe (numérico, [identificador](spisok-otchyetov-2.html#идентификатор_отчёта_для_апи))
    
-   start: inicio del período (Unix timestamp)
    
-   stop: fin del período (Unix timestamp)
    
-   veh\_id: identificadores de los vehículos (separados por comas)
    
-   explode: división de los datos por: 1, días; 2, semanas; 3, no dividir
    
-   group: agrupación de los datos: 1, por días; 2, por objetos; 3, por zonas; 4, por conductores; 5, por clientes; 6, por grupos; 7, por etiquetas
    
-   format: formato del informe: json, pdf, xls
    
-   tz :  zona horaria utilizada para generar las fechas y horas del informe. Indique un identificador de zona horaria IANA válido, por ejemplo Africa/Johannesburg. Si se transmite una zona horaria desconocida o incorrecta, la API devuelve un error.
    

Adicionales:

-   drivers\_id: lista de ID de conductores
    
-   zones\_id: lista de ID de geocercas
    
-   fillings: incluir datos de repostajes
    
-   stales: incluir drenajes
    
-   speed: incluir velocidad
    
-   rashod: incluir consumo de combustible
    
-   stops: incluir paradas
    
-   run: incluir arranques de los vehículos
    
-   contr\_time / type: hora de control
    
-   tags: lista de ID de etiquetas
    
-   template: ID de la plantilla del informe
    
-   outside\_zones: incluir zonas externas
    
-   work\_hours: tener en cuenta solo las horas laborables
    
-   fuel: incluir combustible
    
-   vehicle\_not\_moving\_time: tiempo de inactividad para el informe
    
-   vehicles\_has\_covered\_km: kilometraje del vehículo
    
-   notifications: lista de ID de notificaciones
    

### Ejemplo de solicitud GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_report&amp;report_type=1&amp;start=1724623200&amp;stop=1724709600&amp;veh_id=1234,5678&amp;explode=1&amp;group=2</div><div>&amp;format=json&amp;tz=Africa/Johannesburg&amp;node=1</div></td></tr></tbody></table>

### Ejemplo de solicitud POST

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_report",</div><div>&nbsp; &nbsp; "report_type": 1,</div><div>&nbsp; &nbsp; "start": 1724623200,</div><div>&nbsp; &nbsp; "stop": 1724709600,</div><div>&nbsp; &nbsp; "veh_id": "1234,5678",</div><div>&nbsp; &nbsp; "explode": 1,</div><div>&nbsp; &nbsp; "group": 2,</div><div>&nbsp; &nbsp; "format": "json",</div><div>&nbsp; &nbsp; "tz": "Africa/Johannesburg"</div><div>}</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "1234",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 125.5,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 15.2,</div><div>&nbsp; &nbsp; &nbsp; "stops": 5,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 60</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "5678",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 98.3,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 12.7,</div><div>&nbsp; &nbsp; &nbsp; "stops": 4,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 55</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor
    
-   data: arreglo de datos del informe
    
-   veh\_id: identificador del vehículo
    
-   date: fecha del registro del informe
    
-   distance: distancia recorrida (km)
    
-   fuel\_consumption: consumo de combustible
    
-   stops: número de paradas
    
-   speed\_avg: velocidad media
