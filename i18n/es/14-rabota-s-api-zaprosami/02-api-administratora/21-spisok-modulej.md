---
title: "Lista de módulos"
---

Con esta API obtendrá la lista completa de los módulos disponibles en el contrato, con sus identificadores y descripción.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/ax/api.php?

### Parámetros de la solicitud

-   cmd=modlist: comando para obtener la lista de módulos
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=modlist&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "код": 0,</div><div>&nbsp; "данные": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль топливных карт",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 7,</div><div>&nbsp; &nbsp; &nbsp; "имя": "топливо"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль блокировки двигателя",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 8,</div><div>&nbsp; &nbsp; &nbsp; "имя": "блок"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль уведомлений",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 27,</div><div>&nbsp; &nbsp; &nbsp; "имя": "уведомление"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "сообщение": "ОК"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   código: código de ejecución de la solicitud (0, correcta)
    
-   данные: arreglo de objetos con los módulos:
    
-   descr: descripción del módulo
    
-   идентификатор: ID único del módulo
    
-   имя: nombre de sistema del módulo
    
-   сообщение: mensaje de texto con el resultado de la solicitud
