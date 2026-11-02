---
title: "Gestión de contratos de alquiler"
---

Esta API ofrece funciones para gestionar los contratos de alquiler de vehículos. Con ella se puede iniciar, actualizar y detener un alquiler, así como autenticarse y generar tokens de autorización.

## Autorización

Para utilizar la API es necesario autenticarse mediante un token Bearer.

### Obtención de un token de autorización

Antes de enviar solicitudes es necesario obtener un token, generándolo con el nombre de usuario y la contraseña del panel de administración.

### Ejemplo de autorización

Solicitud para generar el token:

<table><tbody><tr><td><span></span></td><td><div><span>curl --location --request GET 'https://</span>&lt;admin_address&gt;<span>/backend/app/contracts.php' \</span></div><div><span>--header 'Content-Type: application/json' \</span></div><div><span>--data-raw '{</span></div><div><span>&nbsp; &nbsp; "cmd": "generate_token",</span></div><div><span>&nbsp; &nbsp; "login": "YOUR_LOGIN_FOR_ADMIN_PANEL",</span></div><div><span>&nbsp; &nbsp; "password": "YOUR_PASSWORD_FOR_ADMIN_PANEL"</span></div><div><span>}'</span></div></td></tr></tbody></table>

Ejemplo de respuesta:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "0",</div><div>&nbsp; &nbsp; "message": "007898667a1b5711682399ea38a84f61"</div><div>}</div></td></tr></tbody></table>

En la respuesta recibirá un token. Utilícelo en el encabezado Authorization en las solicitudes posteriores.

Ejemplo de encabezado:

<table><tbody><tr><td><span></span></td><td><div>Authorization: Bearer 007898667a1b5711682399ea38a84f61</div></td></tr></tbody></table>

## Comandos principales

Para realizar operaciones es necesario indicar el parámetro cmd, que determina qué operación desea ejecutar.

-   generate\_token: obtener un token de autorización
    
-   start: iniciar el alquiler de un automóvil
    
-   update: actualizar los datos del alquiler
    
-   stop: detener el alquiler de un automóvil
    

## Parámetros de la solicitud

Todos los parámetros se transmiten en formato JSON

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Parámetro</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Obligatorio</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Descripción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mva</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador numérico del vehículo alquilado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ra</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número del contrato de alquiler</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; plate_number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Matrícula del automóvil</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre del conductor que alquila el vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_phone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Teléfono del conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_passport</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Pasaporte del conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_address</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dirección del conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de licencia de conducir</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fecha de vencimiento de la licencia</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_email</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Correo electrónico del conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_birth_date</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fecha de nacimiento del conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_sex</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sexo (m o f)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_country</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; País del conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calificación del conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora prevista de inicio del alquiler (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora prevista de finalización del alquiler (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora real de inicio del alquiler (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora real de finalización (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lugar de inicio del alquiler (con latitud, longitud o dirección: lat, lon, address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; end_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lugar de finalización del alquiler (lat, lon o address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rate_code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Código de la tarifa de alquiler según el contrato</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; car_group_charged</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Grupo del automóvil</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; checkout_branch</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sucursal de entrega</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mileage_limit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Límite de kilometraje</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>cid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Identificador del cliente, es decir, del conductor que alquila el vehículo</span></div></td></tr></tbody></table>

## Ejemplos de solicitudes

### Inicio del alquiler

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Content-Type: application/json' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "start",</div><div>&nbsp; &nbsp; "mva": 111,</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "ts_expected": 1644927600,</div><div>&nbsp; &nbsp; "te_expected": 1644981600,</div><div>&nbsp; &nbsp; "start_location": { "lat": 40.712776, "lon": -74.005974 },</div><div>&nbsp; &nbsp; "car_group_charged": "Economy"</div><div>}'</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1233",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

Como respuesta se devuelve:

code: código de respuesta

odo: valor del odómetro

message: mensaje de texto con el resultado de la solicitud

### Actualización del alquiler

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "update",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "mileage_limit": 2000</div><div>}'</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Detención del alquiler

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer YOUR_TOKEN' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "stop",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "driver_rating": 4,</div><div>&nbsp; &nbsp; "end_location": {"address": "Ilino 2c"}</div><div>}'</div></td></tr></tbody></table>

Respuesta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### Códigos de respuesta y de error

0: operación correcta

1: automóvil no encontrado

2: no hay cambios que actualizar

3: contrato de alquiler no encontrado

4: error de autenticación

5: error desconocido

6: no hay derechos para realizar la operación

7: el módulo de contratos no está activo

8: este número de contrato de alquiler ya lo utiliza otra cuenta

9: el automóvil está alquilado por otra cuenta

10: el automóvil no está alquilado

11: solicitud incorrecta

12: parámetro de ubicación incorrecto

13: este número de contrato de alquiler lo utiliza otro agente

14: se transmitió el pasaporte, pero no se indicó el nombre del conductor

15: se transmitió el nombre del conductor, pero no se indicó el pasaporte

16: no se encontró al conductor con los datos proporcionados

17: los datos del conductor no coinciden con los guardados anteriormente

18: no se encontró un contrato de alquiler con este número

19: este contrato de alquiler ya ha finalizado

20: el automóvil ya está alquilado

21: conductor indicado incorrectamente

22: el contrato existente se cerró y se creó uno nuevo

500: error interno del servidor
