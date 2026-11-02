---
title: "Lista de informes"
---

Esta API obtiene la lista de todos los informes disponibles en la cuenta, con sus identificadores, nombres y los grupos a los que pertenecen.

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/api/api.php?

### Método de la solicitud

GET o POST

### Parámetros de la solicitud

-   cmd=reports\_list: comando para obtener la lista de informes
    
-   node: número del nodo en el que se ejecuta el comando
    

### Ejemplo de solicitud GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=reports_list&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "id": 266, "name": "Административные действия", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 258, "name": "Заблокированные пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 263, "name": "Созданы пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 261, "name": "Отключенная учетная запись пользователя", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 265, "name": "Отключенные пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 267, "name": "Неудачные попытки входа", "group": "Администратор" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   data: arreglo de informes, donde cada informe contiene:
    
-   id: identificador único del informe
    
-   name: nombre del informe
    
-   group: grupo al que pertenece el informe
