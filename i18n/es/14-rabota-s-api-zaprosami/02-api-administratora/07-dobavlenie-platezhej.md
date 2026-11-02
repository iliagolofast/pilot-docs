---
title: "Registro de pagos"
---

Esta API se utiliza para añadir información sobre los pagos de un contrato. Se pueden indicar el importe, la fecha, el ID del pago en el sistema externo y la descripción.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/ax/api.php?

### Parámetros de la solicitud

Obligatorios:

-   cmd=payment: comando para añadir un pago
    
-   inn: INN del contrato (identificador único)
    
-   sum: importe del pago (formato dd.dd)
    
-   id: ID del pago en el sistema externo
    
-   date: fecha del pago (formato DDMMYYYY)
    
-   descr: descripción del pago (cadena de texto), por ejemplo: «pago por conexión»
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=payment&amp;inn=123123123&amp;sum=10.00&amp;id=124&amp;date=04042016&amp;descr=test%20payment&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Payment inserted successfully",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "payment_id": 124,</div><div>&nbsp; &nbsp; "inn": "123123123",</div><div>&nbsp; &nbsp; "sum": 10.00,</div><div>&nbsp; &nbsp; "date": "04042016",</div><div>&nbsp; &nbsp; "descr": "test payment"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>
