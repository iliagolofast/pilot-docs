---
title: "Lista de contratos de alquiler"
---

Esta API proporciona información sobre los contratos de alquiler del módulo Rent Car (AVIS): contratos abiertos, reservados y cerrados. Para cada contrato se devuelven los datos del arrendatario, los puntos de inicio y fin del alquiler, las fechas previstas de entrega y devolución, así como los números del contrato y del automóvil.

## Cómo obtener los datos

### Método

GET

### Dirección de la solicitud

Para obtener los datos, utilice la dirección: https://<server\_address>/api/api.php?

### Parámetros de la solicitud

Para obtener los datos necesarios, añada a la dirección de la solicitud los siguientes parámetros:

-   cmd=rentcar\_contracts — comando para obtener la lista de contratos de alquiler.
    
-   status — estado de los contratos que se desea obtener. Se puede indicar un estado o varios, separados por comas:
    
-   open — contratos abiertos (el alquiler está activo actualmente)
    
-   booked — contratos reservados (reserva; el alquiler aún no ha comenzado)
    
-   closed — contratos cerrados (el alquiler ha finalizado)
    

El formato de los datos solicitados es un arreglo de contratos de alquiler.

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rentcar_contracts&amp;status=open,booked,closed</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"list": [</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"mva": "12312",</div><div>&nbsp;"ra": "16",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "Private house"</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "rgergrr"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "erterter"</div><div>&nbsp;},</div><div>&nbsp;"mva": "2222",</div><div>&nbsp;"ra": "17",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "ABC-123"</div><div>&nbsp;}</div><div>&nbsp;]</div><div>}</div></td></tr></tbody></table>

La respuesta a la solicitud de la API contiene:

-   code — código de estado (0: correcto)
    
-   msg — mensaje de estado (OK: la solicitud se ejecutó correctamente)
    
-   list — arreglo de contratos de alquiler, cada uno de los cuales contiene:
    
-   driver\_name — nombre del arrendatario (conductor) a cuyo nombre está el contrato
    
-   driver\_phone — teléfono de contacto del arrendatario
    
-   start\_location — punto de inicio del alquiler (entrega del automóvil):
    
-   title — nombre/dirección del punto de entrega
    
-   end\_location — punto de fin del alquiler (devolución del automóvil):
    
-   title — nombre/dirección del punto de devolución
    
-   mva — número del contrato de alquiler (Master Vehicle Agreement)
    
-   ra — número de la reserva / del acuerdo de alquiler (Rental Agreement)
    
-   ts\_expected — hora prevista de inicio del alquiler (Unix timestamp)
    
-   te\_expected — hora prevista de fin del alquiler (Unix timestamp)
    
-   plate\_number — matrícula del automóvil según el contrato
