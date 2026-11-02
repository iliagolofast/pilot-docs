---
title: "Informe de actividad de los conductores"
---

Esta API obtiene información sobre la actividad de los conductores de los vehículos durante el período seleccionado. En la respuesta se indican los distintos modos de actividad (por ejemplo, conducción, trabajo, descanso).

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para realizar la solicitud, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = gettachodata — comando para obtener los datos del tacógrafo
    
-   agent\_id — identificador del vehículo o de varios vehículos, separados por comas
    
-   imei — identificador del dispositivo (alternativa a agent\_id)
    
-   ts — hora de inicio de la selección (Unix timestamp)
    
-   te — hora de fin de la selección (Unix timestamp)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=gettachodata&amp;ts=1624568400&amp;te=1624586400&amp;agent_id=120407,120646&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "С 220 СК 750": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Work": 4997,</div><div>&nbsp; &nbsp; &nbsp; "Drive": 248,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 1722,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9117</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "А 152 АК 790": {</div><div>&nbsp; &nbsp; "First driver": {</div><div>&nbsp; &nbsp; &nbsp; "Drive": 5436,</div><div>&nbsp; &nbsp; &nbsp; "Work": 1706,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "Second driver": {</div><div>&nbsp; &nbsp; &nbsp; "Driver available": 4995,</div><div>&nbsp; &nbsp; &nbsp; "Rest": 9084</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   número del vehículo
    
-   First driver / Second driver — datos de cada conductor
    
-   Drive — tiempo de conducción
    
-   Work — tiempo de trabajo
    
-   Rest — tiempo de descanso
    
-   Driver available — tiempo en que el conductor estuvo disponible para trabajar
