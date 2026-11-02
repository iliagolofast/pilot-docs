---
title: "Lista de cuentas"
---

Esta API obtiene la lista de cuentas con la información principal: ID del contrato, nombre, saldo y número de vehículos.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=accountslist: comando para obtener la lista de cuentas
    
-   node: número del nodo en el que se debe ejecutar el comando
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=accountslist&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 10,</div><div>&nbsp; "org_name": "Test relaying",</div><div>&nbsp; "org_type": 2,</div><div>&nbsp; "balance": "0.00",</div><div>&nbsp; "acc_deposit": "40000.00",</div><div>&nbsp; "comment": null,</div><div>&nbsp; "inn": null,</div><div>&nbsp; "kpp": null,</div><div>&nbsp; "bill_email": "relay@mail.com",</div><div>&nbsp; "bill_phone": "43542554",</div><div>&nbsp; "hidden": 1,</div><div>&nbsp; "veh_count": 0</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   id: identificador único de la cuenta
    
-   org\_name: nombre de la organización o del contrato
    
-   org\_type: tipo de organización
    
-   balance: saldo actual del contrato
    
-   acc\_deposit: importe del depósito en el contrato
    
-   comment: comentario adicional sobre el contrato
    
-   inn: INN de la organización (número de identificación fiscal)
    
-   kpp: KPP de la organización (código de motivo de registro fiscal)
    
-   bill\_email: correo electrónico indicado para el envío de facturas o notificaciones de facturación
    
-   bill\_phone: teléfono de contacto para asuntos de facturación
    
-   hidden: indicador de cuenta eliminada: 0, la cuenta no está eliminada; 1, la cuenta está eliminada
    
-   veh\_count: número de vehículos asignados a este contrato
