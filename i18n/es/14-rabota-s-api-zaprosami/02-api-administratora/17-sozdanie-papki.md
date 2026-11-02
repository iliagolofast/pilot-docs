---
title: "Creación de una carpeta"
---

Esta API se utiliza para crear una nueva carpeta en el sistema. Se pueden indicar la carpeta principal, el nombre de la nueva carpeta y los derechos de acceso de los usuarios.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

Obligatorios:

-   cmd=addfolder: comando para crear una carpeta
    
-   account\_id: ID del contrato
    
-   parent\_id: ID de la carpeta principal
    
-   folder\_name: nombre de la carpeta que se crea
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Adicionales:

-   users: lista de ID de usuarios separados por comas a los que se deben conceder derechos sobre esta carpeta
    
-   El valor users=admins concede derechos a todos los usuarios del contrato con el rol de administrador
    
    Si el parámetro no se indica o está vacío, los derechos se copian de la carpeta principal
    

### Ejemplos de solicitudes

Derechos sobre la carpeta para todos los administradores:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=admins&amp;node=1</div></td></tr></tbody></table>

Derechos sobre la carpeta para usuarios concretos:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=123,212,432&amp;node=1</div></td></tr></tbody></table>

La carpeta se crea con los derechos de la carpeta principal (por defecto):

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Создана новая папка my_folder с идентификатором 27330"</div><div>}</div></td></tr></tbody></table>
