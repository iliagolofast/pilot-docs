---
title: "Hojas de ruta"
---

Esta API se utiliza para obtener información sobre las hojas de ruta (waybill) durante el período indicado.

Con ella puede:

— obtener la lista de tareas por cada agente

— consultar los tiempos de ejecución planificados y reales

— conocer los estados de ejecución y los detalles de los puntos de la ruta

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://tasks.<server\_address>/backend/public/get\_waybill\_for\_pilot

### Parámetros de la solicitud

from\_ts — hora de inicio de la selección (Unix timestamp, ejemplo: 1536181200)

to\_ts — hora de fin de la selección (Unix timestamp, ejemplo: 1538773200)

agents — lista de identificadores de agentes separados por comas (por ejemplo: 13128,13130,...)

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/get_waybill_for_pilot?from_ts=1536181200&amp;to_ts=1538773200&amp;agents=13128,13130,21055</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "",</div><div>&nbsp; "items": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 13128,</div><div>&nbsp; &nbsp; &nbsp; "c_begin_time": "1536200000",</div><div>&nbsp; &nbsp; &nbsp; "c_end_time": "1536210000",</div><div>&nbsp; &nbsp; &nbsp; "c_information": "{\"route\":\"Маршрут №54\",\"driver\":\"Иванов И.И.\"}",</div><div>&nbsp; &nbsp; &nbsp; "c_initiator": "Диспетчер",</div><div>&nbsp; &nbsp; &nbsp; "c_progress_time": "1536200500",</div><div>&nbsp; &nbsp; &nbsp; "c_running_time": "1536200300",</div><div>&nbsp; &nbsp; &nbsp; "c_status_id": 2,</div><div>&nbsp; &nbsp; &nbsp; "c_status_name": "Выполнено",</div><div>&nbsp; &nbsp; &nbsp; "id": 98765,</div><div>&nbsp; &nbsp; &nbsp; "points_info": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "point_id": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.7558",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "37.6173",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "visited_at": "1536200600"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   success — resultado de la ejecución (true: correcto; false: error)
    
-   msg — mensaje de error (si existe)
    
-   items — arreglo de datos de las tareas
    

Para cada tarea:

agent\_id — identificador del agente

c\_begin\_time — hora planificada de inicio de la tarea

c\_end\_time — hora real de finalización de la tarea

c\_information — cadena con información adicional sobre la tarea (JSON, depende de la plantilla)

c\_initiator — solicitante (quien creó la tarea)

c\_progress\_time — hora real de visita al primer punto

c\_running\_time — hora real de salida para realizar la tarea

c\_status\_id — identificador del estado de la tarea

c\_status\_name — descripción del estado de la tarea

id — identificador de la tarea en el sistema PTM

points\_info — arreglo de información sobre los puntos visitados de la ruta
