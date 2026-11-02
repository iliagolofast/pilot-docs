---
title: "Kilometraje dentro de geocercas"
---

Esta API obtiene información sobre el kilometraje de los vehículos dentro de las geocercas indicadas durante el período de tiempo seleccionado.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = zones\_mileage — comando para obtener el kilometraje en geocercas
    
-   ts — hora de inicio de la selección (Unix timestamp)
    
-   te — hora de fin de la selección (Unix timestamp)
    
-   imei — lista de IMEI de objetos separados por comas
    
-   zones — lista de nombres de geocercas separados por comas (parámetro opcional; si no se indica, se devuelve el kilometraje de todas las zonas)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=zones_mileage&amp;ts=1596229200&amp;te=1597006800&amp;imei=867857035056105,123123123&amp;zones=Симферополь,Белогорск,Судак&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "ts":"1596229200",</div><div>&nbsp; "te":"1597006800",</div><div>&nbsp; "data":{</div><div>&nbsp;&nbsp; &nbsp; "867857035056105":[</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Симферополь",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":88308,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":259.84</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"За пределами города",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":21564,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":283.47</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Белогорск",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":704,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":10.77</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "zone":"Судак",</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration":1332,</div><div>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mileage":11.45</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp;&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   zone — nombre de la geocerca
    
-   duration — tiempo que el objeto permaneció en la zona, en segundos
    
-   mileage — distancia recorrida en kilómetros dentro de esa zona
