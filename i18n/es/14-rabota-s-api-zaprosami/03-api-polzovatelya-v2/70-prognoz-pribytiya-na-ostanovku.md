---
title: "Previsión de llegada a una parada"
---

Esta API obtiene la hora de llegada prevista de autobuses, trolebuses y microbuses a la parada indicada.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd = stationForecast — comando para obtener la previsión de llegada
    
-   stopid — identificador de la parada (se toma de la [interfaz](../../lichnyj-kabinet-polzovatelya/moduli-1/rejsy-2/kak-dobavit-ostanovki.html) de PILOT)
    
-   node — número del nodo en el que debe ejecutarse el comando
    

Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=stationForecast&amp;stopid=7400&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "curent_stop": 1,</div><div>&nbsp; &nbsp; "line_id": 1371,</div><div>&nbsp; &nbsp; "line_name": "№ 17 С. КАЛЬФА - ПЛ. СУВОРОВА - УЛ. ГЕНЕРАЛА ЖИДИЛОВА",</div><div>&nbsp; &nbsp; "line_num": "17",</div><div>&nbsp; &nbsp; "line_type": "A",</div><div>&nbsp; &nbsp; "this_stop": 32,</div><div>&nbsp; &nbsp; "time": 4065,</div><div>&nbsp; &nbsp; "vehicle": "BUS FLIGHT",</div><div>&nbsp; &nbsp; "vehid": 48854</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>

La respuesta a la solicitud de la API es un arreglo de objetos con las previsiones para cada ruta que pasa por esta parada:

-   curent\_stop — número de orden, dentro de la ruta, de la parada en la que se encuentra el vehículo en este momento
    
-   line\_id — ID de la ruta
    
-   line\_name — nombre completo de la ruta
    
-   line\_num — número de la ruta
    
-   line\_type — tipo de ruta: 'A', autobús; 'T', trolebús; 'M', microbús
    
-   this\_stop — número de orden de esta parada dentro de la ruta
    
-   time — hora de llegada prevista a esta parada, en segundos
    
-   vehicle — matrícula del vehículo
    
-   vehid — ID del vehículo
