---
title: "Creación de una cuenta"
---

Esta API se utiliza para crear una nueva cuenta (contrato), incluida la información de la cuenta y los datos del usuario (entre ellos el nombre de usuario y la contraseña del administrador). Tras ejecutar la solicitud se crea una cuenta con un ID único y se añade el primer usuario (administrador) con el nombre de usuario y la contraseña indicados.

## Cómo obtener los datos

Para obtener los datos utilice la dirección: https://<server\_address>/ax/api.php?

### Método

POST

### Parámetros de la solicitud

Parámetros obligatorios:

-   cmd=accountadd: comando para añadir una nueva cuenta
    
-   bill\_price: ID de la tarifa (debe obtenerse con el comando pricelist).
    
-   inn: INN de la organización
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Parámetros adicionales:

-   acc\_deposit: importe del depósito (por defecto 0)
    
-   acc\_type: tipo de tarificación:
    
    — por defecto 1: pospago
    
    — 2: prepago
    
    — 3: pospago lite (con umbral de desconexión)
    
-   org\_type: tipo de organización
    
    — por defecto 1: persona jurídica
    
    — 2: persona física
    
    — 3: empresario individual (IP)
    
-   bill\_phone: teléfono de la organización
    
-   comment: comentario sobre la cuenta
    
-   code: código de 1C
    
-   kpp: KPP
    
-   block\_limit: umbral de desconexión para la tarificación pospago lite
    
-   modules: ID de los módulos conectados, separados por comas (se obtienen con el comando modlist)
    
-   bill\_email: correo electrónico de la cuenta
    
-   org\_name: nombre de la organización
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=accountadd&amp;bill_price=143&amp;bill_email=demo1@skyelectronics.ru&amp;org_name=PUP&amp;comment=lalala&amp;inn=123456789012&amp;acc_type=1&amp;org_type=1&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": "4018",</div><div>&nbsp; &nbsp; "login": "demo1@skyelectronics.ru",</div><div>&nbsp; &nbsp; "password": "blPs0S"</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: estado de la respuesta
    
    — 0: la operación se realizó correctamente
    
-   data: datos de la nueva cuenta
    
-   id: identificador único de la cuenta
    
-   login: nombre de usuario del administrador creado en esta cuenta
    
-   password: contraseña del administrador
    
-   msg: mensaje con el resultado de la operación
