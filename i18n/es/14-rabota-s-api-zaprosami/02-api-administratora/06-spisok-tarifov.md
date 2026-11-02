---
title: "Lista de tarifas"
---

Con esta API obtendrá la lista de tarifas disponibles para la cuenta, con información sobre la moneda, el precio y la descripción.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos utilice la dirección: https://<server\_address>/backend/api.php?

### Parámetros de la solicitud

-   cmd=pricelist :  comando para obtener la lista de tarifas
    
-   node: número del nodo en el que se debe ejecutar el comando
    
    Adicionalmente:
    
-   coden (opcional): código de moneda:
    
    — numérico (por ejemplo, 840 para USD, 810 para RUB)
    
    — alfabético (por ejemplo, USD o RUR)
    

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=pricelist&amp;coden=840&amp;node=1</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 143,</div><div>&nbsp; &nbsp; &nbsp; "code": "840",</div><div>&nbsp; &nbsp; &nbsp; "currency": 2,</div><div>&nbsp; &nbsp; &nbsp; "descr": "3 dollars per property per month",</div><div>&nbsp; &nbsp; &nbsp; "name": "US dollar",</div><div>&nbsp; &nbsp; &nbsp; "price": "3.00"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

Como respuesta a la solicitud de la API se devuelve:

-   code: código de ejecución de la solicitud (0, correcta)
    
-   data: arreglo de tarifas:
    
-   id: identificador único de la tarifa
    
-   code: código de moneda (numérico)
    
-   currency: identificador interno de la moneda
    
-   descr: descripción de la tarifa
    
-   name: nombre de la tarifa (por ejemplo, "US dollar")
    
-   price: costo de la tarifa en la moneda indicada
    
-   message: mensaje de texto con el resultado de la solicitud
