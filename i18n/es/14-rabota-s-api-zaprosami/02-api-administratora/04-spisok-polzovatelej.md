---
title: "Lista de usuarios"
---

Esta API se utiliza para obtener la lista de usuarios de una cuenta concreta con la información principal de cada usuario.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=users: comando para obtener la lista de usuarios
    
-   accountid: ID de la cuenta cuyos usuarios se solicitan
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=users&amp;accountid=56832</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"data": [</div><div>&nbsp;{</div><div>&nbsp;"id": 88977,</div><div>&nbsp;"name": "valera_test",</div><div>&nbsp;"login": "valera17totsenko@gmail.com",</div><div>&nbsp;"passwd": "123456",</div><div>&nbsp;"info": null,</div><div>&nbsp;"email": "valera17totsenko@gmail.com",</div><div>&nbsp;"lang": "en",</div><div>&nbsp;"roleid": 0</div><div>&nbsp;}</div><div>&nbsp;],</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   id: ID del usuario
    
-   name: nombre mostrado
    
-   login: nombre de usuario
    
-   passwd: contraseña
    
-   info: información adicional sobre el usuario
    
-   email: dirección de correo electrónico
    
-   lang: idioma de la interfaz del usuario
    
-   roleid: ID del rol
