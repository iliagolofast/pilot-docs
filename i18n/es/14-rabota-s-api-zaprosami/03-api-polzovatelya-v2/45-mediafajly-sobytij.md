---
title: "Archivos multimedia de eventos"
---

Esta API se utiliza para obtener los archivos multimedia de los objetos seleccionados durante el período indicado. Con ella puede obtener enlaces a las fotos y los videos relacionados con eventos, incluidos los de ADAS y DMS.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

-   cmd=get\_media — comando para obtener archivos multimedia
    
-   agent\_id — identificador de un objeto o identificadores de varios objetos, separados por comas
    
-   start — hora de inicio de la selección en formato Unix timestamp
    
-   stop — hora de fin de la selección en formato Unix timestamp
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_media&amp;agent_id=1234,5678&amp;start=1724623200&amp;stop=1724709600</div></td></tr></tbody></table>

En respuesta a una solicitud correcta de la API se devuelve información sobre los archivos multimedia de los objetos seleccionados durante el período indicado, junto con enlaces para verlos. Al abrir el enlace, la imagen o el video relacionado con el evento se muestra en el navegador.
