---
title: "Adición de un repostaje con tarjeta"
---

Esta API añade un registro de consumo de combustible con tarjeta, incluida la información sobre la cantidad de combustible, el costo, el lugar y el conductor.

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

Para ejecutar la solicitud utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

Obligatorios:

-   cmd=add\_fuel\_transaction: comando para añadir una transacción
    
-   card\_num: número de la tarjeta de combustible
    
-   operation: tipo de operación (por ejemplo, refill)
    
-   unixtimestamp: hora de la transacción en formato Unix timestamp
    
-   place: lugar donde se realizó la operación
    
-   azs: nombre de la gasolinera
    
-   liters: cantidad de litros de combustible
    
-   fuel: tipo de combustible
    
-   price: precio sin descuento
    
-   sum: importe sin descuento
    
-   node: número del nodo en el que se debe ejecutar el comando
    

Opcionales:

-   priceg: precio con descuento
    
-   sumg: importe con descuento
    
-   driver: nombre completo del conductor
    
-   lat: latitud del lugar de la transacción
    
-   lon: longitud del lugar de la transacción
    
-   info: información adicional
    
-   internal\_id: identificador interno de la transacción
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_fuel_transaction&amp;node=1</div></td></tr></tbody></table>

Ejemplo del cuerpo de la solicitud (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "card_num": "1234567890123456",</div><div>&nbsp; "operation": "refill",</div><div>&nbsp; "unixtimestamp": 1695000000,</div><div>&nbsp; "place": "Main street 12",</div><div>&nbsp; "azs": "WOG",</div><div>&nbsp; "liters": 50,</div><div>&nbsp; "fuel": "Diesel",</div><div>&nbsp; "price": 55.0,</div><div>&nbsp; "sum": 2750.0,</div><div>&nbsp; "driver": "Ivan Ivanov"</div><div>}</div></td></tr></tbody></table>

Respuesta

{

  "code": 0,

  "msg": "OK"

}

Como respuesta a la solicitud de la API se devuelve:

-   code: código de resultado (0, operación correcta)
    
-   msg: mensaje del servidor sobre el resultado de la acción
