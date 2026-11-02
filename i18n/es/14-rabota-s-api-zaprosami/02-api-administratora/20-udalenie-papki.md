---
title: "Eliminación de una carpeta"
---

Esta API elimina la carpeta indicada y traslada todos los vehículos que contiene a la carpeta raíz.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=deletefolder: comando para eliminar una carpeta
    
-   folder\_id: identificador de la carpeta que se debe eliminar
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=deletefolder&amp;folder_id=545&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Папка успешно удалена"</div><div>}</div></td></tr></tbody></table>
