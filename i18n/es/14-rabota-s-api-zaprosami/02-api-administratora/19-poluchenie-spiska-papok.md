---
title: "Obtención de la lista de carpetas"
---

Esta API se utiliza para obtener la lista de carpetas. La respuesta devuelve una lista con los ID únicos de las carpetas, sus nombres y sus carpetas principales.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

Obligatorios:

-   cmd=getfolders: comando para obtener la lista de carpetas
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Adicionales:

-   account\_id: ID de la cuenta cuya lista de carpetas se necesita
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=getfolders&amp;account_id=3925&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "9793": {"name": "АС-Капитал", "parent": "Колонна №1"},</div><div>&nbsp; "11462": {"name": "Ленэнерго", "parent": "Колонна №1"},</div><div>&nbsp; "12551": {"name": "Вектор", "parent": "test123"},</div><div>&nbsp; "16453": {"name": "test_alex", "parent": "1april"},</div><div>&nbsp; "18492": {"name": "31Novfolder", "parent": "Колонна №1"}</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   clave (por ejemplo, "9793"): ID único de la carpeta
    
-   name: nombre de la carpeta
    
-   parent: carpeta principal a la que pertenece la carpeta actual
