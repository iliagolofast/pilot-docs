---
title: "Enlace para el seguimiento de un objeto"
---

Esta API obtiene un enlace temporal para seguir un objeto en el mapa, con activación y desactivación según las geocercas indicadas.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección:  https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=get\_temp\_link: comando de la API para obtener un enlace temporal
    
-   imei: identificador del objeto (vehículo) en el sistema
    
-   startgeo: geocerca para activar el enlace
    
-   stopgeo: geocerca para desactivar el enlace
    
-   max\_duration: tiempo máximo de vigencia del enlace en minutos (por defecto 24 horas)
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_temp_link&amp;imei=356307045913463&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API&amp;max_duration=800</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/monitor_token.php?token=1f87a19c068ad47f3f769dc151527794&amp;lang=en&amp;zoom=10&amp;startgeo=Rostov test API&amp;stopgeo=Rostov exit test API</div></td></tr></tbody></table>

Como respuesta se devuelve un enlace directo al mapa con un token temporal. El enlace tiene en cuenta las geocercas de activación (startgeo) y de desactivación (stopgeo) indicadas
