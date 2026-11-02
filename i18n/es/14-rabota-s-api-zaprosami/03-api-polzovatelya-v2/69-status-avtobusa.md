---
title: "Estado del autobús"
---

Esta API devuelve el estado actual del autobús: la ruta, la parada actual y la siguiente, así como la información de la propia ruta (número, tarifa, intervalo de circulación, etc.).

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=currentBusState — comando para obtener el estado del autobús
    
-   vehnum — número del autobús
    
-   node — número del nodo en el que debe ejecutarse el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=currentBusState&amp;vehnum=А%20086%20КХ%20116%20RUS&amp;node=1</div></td></tr></tbody></table>

**Respuesta**

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "lines": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1086,</div><div>&nbsp; &nbsp; &nbsp; "name": "1А",</div><div>&nbsp; &nbsp; &nbsp; "number": "1А",</div><div>&nbsp; &nbsp; &nbsp; "bidirectional": 1,</div><div>&nbsp; &nbsp; &nbsp; "description": "1А",</div><div>&nbsp; &nbsp; &nbsp; "active": 1,</div><div>&nbsp; &nbsp; &nbsp; "price": "25.00",</div><div>&nbsp; &nbsp; &nbsp; "interval": 10,</div><div>&nbsp; &nbsp; &nbsp; "folder": null,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_id": 0,</div><div>&nbsp; &nbsp; &nbsp; "currentstop_order": 0,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_id": 5217,</div><div>&nbsp; &nbsp; &nbsp; "nextstop_order": 48</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   id — ID de la ruta
    
-   name — nombre de la ruta
    
-   number — número de la ruta
    
-   bidirectional — indicador de bidireccionalidad (1: sí; 0: no)
    
-   active — indicador de actividad de la ruta (1: activa)
    
-   price — tarifa del viaje
    
-   interval — intervalo de circulación en minutos
    
-   currentstop\_id — ID de la parada en la que se encuentra el autobús en este momento
    
-   currentstop\_order — número de orden de la parada actual
    
-   nextstop\_id — ID de la siguiente parada
    
-   nextstop\_order — número de orden de la siguiente parada
