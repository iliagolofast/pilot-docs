---
title: "Historial de visitas a geocercas"
---

Esta API obtiene información sobre cuándo los objetos visitaron determinadas geocercas durante el período de tiempo indicado.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=ag\_geozones — comando de la API para obtener el historial de geocercas
    
-   start — fecha de inicio del período (Unix timestamp)
    
-   stop — fecha de fin del período (Unix timestamp)
    
-   imei — identificador del vehículo. Se pueden indicar varios, separados por comas
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud para un vehículo

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635<span>&amp;node=1</span></div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

### Ejemplo de solicitud para varios vehículos

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_geozones&amp;start=1606770000&amp;stop=1608584399&amp;imei=865291046424635,867481037184458</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "865291046424635": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606805707,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606808500</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1606865643,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1606868103</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "867481037184458": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1607949101,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1607956478</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "group": "Общие",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonename": "База Голицыно",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "ts": 1608012176,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "te": 1608041334</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de resultado (0: correcto)
    
-   msg — mensaje del servidor (por ejemplo, "OK")
    
-   data — información sobre las visitas a geocercas
    
-   Si es un solo objeto, data es un arreglo de visitas
    
-   Si son varios objetos, data es un objeto cuyas claves son los IMEI de los vehículos y cuyos valores son arreglos de visitas
    
-   group— grupo de la geocerca
    
-   zonename— nombre de la geocerca
    
-   ts— hora de entrada a la geocerca (Unix timestamp)
    
-   te— hora de salida de la geocerca (Unix timestamp)
