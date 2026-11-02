---
title: "Trabajo con comandos Linux de los Atoms"
---

Este artículo describe los comandos principales de la API que permiten interactuar con sistemas Linux a través del panel de administración. Con estos comandos se pueden enviar, obtener, eliminar y consultar el historial de comandos para los [Atoms](../../lichnyj-kabinet-polzovatelya/moduli-1/atom.html).

## Cómo obtener los datos

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php

### Lista de comandos

-   cmd=atom\_get\_all: obtener la lista de comandos enviados
    
-   cmd=atom\_get\_commands: obtener la lista de plantillas de comandos
    
-   cmd=atom\_create\_command :  enviar un comando Linux
    
-   atom\_delete\_command: eliminar un comando Linux
    

## Obtención de la lista de comandos Linux enviados (historial de comandos)

Este comando permite obtener la lista de todos los comandos enviados al atom. El historial incluye el identificador del atom, el comando enviado y el estado de ejecución.

Método: GET

### Parámetros de la solicitud

-   cmd=atom\_get\_all: comando para obtener el historial
    
-   ident: identificador único del atom (por ejemplo, b0:44:6t:0d:a9:04)
    
-   node: número del nodo en el que se debe ejecutar el comando
    
    ### Ejemplo de solicitud
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_all&amp;ident=b0:44:6t:0d:a9:04&amp;node=1</div></td></tr></tbody></table>
    
    Respuesta
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 27899,</div><div>&nbsp; &nbsp; "agent_id": null,</div><div>&nbsp; &nbsp; "ident": "8v:f5:8c:01:13:70",</div><div>&nbsp; &nbsp; "script": "ls /root/",</div><div>&nbsp; &nbsp; "processed": null,</div><div>&nbsp; &nbsp; "ts": 1712138610,</div><div>&nbsp; &nbsp; "result": null</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Obtención de la lista de plantillas de comandos Linux

Este comando permite obtener la lista de plantillas de comandos Linux que pueden utilizarse para enviar al atom. Las plantillas contienen una descripción y el comando que se ejecutará en el dispositivo.

Método: GET

### Parámetros de la solicitud

-   cmd=atom\_get\_commands: comando para obtener las plantillas de comandos.
    
-   ident: identificador único del atom (por ejemplo, 80:c5:80:01:68:08).
    
-   node: número del nodo en el que se debe ejecutar el comando
    
    ### Ejemplo de solicitud
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_get_commands&amp;ident=80:c5:80:01:68:08&amp;node=1</div></td></tr></tbody></table>
    
    Respuesta
    
    <table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; {</div><div>&nbsp; &nbsp; "id": 36,</div><div>&nbsp; &nbsp; "command_name": "Список Видео",</div><div>&nbsp; &nbsp; "description": null,</div><div>&nbsp; &nbsp; "command": "ls -lsh /video/*.avi"</div><div>&nbsp; }</div><div>]</div></td></tr></tbody></table>
    

## Envío de un comando Linux

Con este comando se puede enviar un comando Linux al atom. El comando se añadirá a la cola y se ejecutará en el dispositivo.

Método: POST

### Parámetros de la solicitud

-   cmd=atom\_create\_command: comando para crear un nuevo comando.
    
-   ident: identificador único del atom.
    
-   script: script del comando (opcional).
    
-   node: número del nodo en el que se debe ejecutar el comando
    
    ### Ejemplo de solicitud
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_create_command&amp;ident=b1:42:67:00:00:fd&amp;node=1</div></td></tr></tbody></table>
    
    Respuesta
    

<table><tbody><tr><td><span></span></td><td><div>27917 (<span>ID del comando añadido a la cola)</span></div></td></tr></tbody></table>

## Eliminación de un comando Linux

Si el comando aún no se ha ejecutado, puede eliminarse de la cola con este método. La eliminación solo es posible antes de que el comando sea procesado.

Método: GET

### Parámetros de la solicitud

-   cmd=atom\_delete\_command: comando para eliminar
    
-   ident: identificador único del atom
    
-   command\_id: identificador del comando que se va a eliminar
    
-   node: número del nodo en el que se debe ejecutar el comando
    
    ### Ejemplo de solicitud
    
    <table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=atom_delete_command&amp;ident=b0:44:6f:0d:av:88&amp;command_id=27921</div></td></tr></tbody></table>
    
    Respuesta
    
    <table><tbody><tr><td><span></span></td><td><div>"Success delete"</div></td></tr></tbody></table>
    

### Códigos de error de la API

-   400 Bad request: formato de datos incorrecto o falta un parámetro obligatorio.
    
    Mensajes posibles:
    
-   {"error": "Missing ident param"}: falta el identificador del atom.
    
-   {"error": "Command already processed"}: el comando ya se ha ejecutado.
    
-   {"error": "Unknown macro: {Unknown macro}"}: macrocomando desconocido.
    
-   500 Internal server error: error interno del servidor
    

### Interacción con los comandos en la interfaz

En la interfaz de PILOT, la interacción con los atoms se realiza a través de la pestaña del panel de administración «Control de pasajeros → Autobuses», donde está disponible el comando «Interactuar».

![](images/drex_rabota_s_linux_komandami_atomov_custom.png)

Mediante esta función:

-   Se envían comandos (comandos Linux) al atom
    
-   Se puede consultar la lista de comandos disponibles (plantillas)
    
-   Se muestra el historial de todos los comandos enviados
    
-   Está disponible el resultado de la ejecución de cada comando
    

![](images/drex_rabota_s_linux_komandami_atomov_custom_2.png)
