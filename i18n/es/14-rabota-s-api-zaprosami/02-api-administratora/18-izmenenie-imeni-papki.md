---
title: "Cambio del nombre de una carpeta"
---

Con esta API puede cambiar el nombre de una carpeta existente. Para ello, envíe una solicitud con los parámetros que indican la carpeta cuyo nombre se debe cambiar y el nuevo nombre.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php

### Método

 POST

### Parámetros de la solicitud

-   cmd=editfoldername: comando para cambiar el nombre de la carpeta
    
-   folder\_id: identificador de la carpeta cuyo nombre se debe cambiar
    
-   new\_folder\_name  : nuevo nombre de la carpeta
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=editfoldername&amp;folder_id=454545&amp;new_folder_name=testname&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Имя папки успешно обновлено"</div><div>}</div></td></tr></tbody></table>
