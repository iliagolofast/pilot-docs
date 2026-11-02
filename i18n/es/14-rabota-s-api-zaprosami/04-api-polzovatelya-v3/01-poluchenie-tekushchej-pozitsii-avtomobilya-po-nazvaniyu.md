---
title: "Obtención de la posición actual de un automóvil por su nombre"
---

El método devuelve la última posición guardada de un automóvil. El automóvil se identifica por su nombre exacto en PILOT.

El método está pensado para la integración con sistemas de seguimiento de transporte, incluido WIMT. A diferencia de los métodos que utilizan el IMEI, en la solicitud se envía el nombre del automóvil: truckNo.

La descripción interactiva del método está disponible en [Swagger — Track and Trace](https://pilot-swagger.pilot-gps.com/#/Vehicles/getVehicleTrackAndTrace)

## Cómo obtener los datos

### Método

POST

### Dirección de la solicitud

https://<server\_address>/api/v3/vehicles/track-and-trace

Sustituya <server\_address> por la dirección del servidor PILOT.

### Autorización

Para ejecutar la solicitud se utiliza la autorización estándar de la API V3 mediante un Bearer token.

Envíe el token en el encabezado Authorization:

Authorization: Bearer <access\_token>

Sustituya <access\_token> por un token válido de la API V3.

### Encabezados de la solicitud

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Encabezado</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Obligatorio</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Authorization</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Bearer token para la autorización del usuario en la API V3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; X-Node</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número del nodo del usuario. Se utiliza para redirigir la solicitud al servidor correspondiente</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Content-Type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Formato del cuerpo de la solicitud. Indique application/json</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Accept</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Formato de la respuesta. Valor recomendado: application/json</span></div></td></tr></tbody></table>

Ejemplo de encabezados:

Authorization: Bearer <access\_token>

X-Node: 3

Content-Type: application/json

Accept: application/json

## Parámetros de la solicitud

Los parámetros se envían en el cuerpo de la solicitud en formato JSON.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Tipo</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Obligatorio</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; shipmentNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de la carga o del transporte. El método acepta el valor, pero no lo guarda ni lo devuelve</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre del automóvil en PILOT. Debe coincidir exactamente con el valor de vehiclenumber</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Código del país, por ejemplo, ZA. Se devuelve sin cambios en la respuesta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; trackingFlag</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sí</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado del seguimiento, por ejemplo, START o STOP. En la versión actual el valor se acepta, pero no se guarda ni influye en el procesamiento de la solicitud</span></div></td></tr></tbody></table>

## Búsqueda del automóvil

El método busca el automóvil por el valor exacto de truckNo entre los automóviles disponibles para el usuario autorizado.

El valor enviado debe coincidir por completo con el nombre del automóvil (vehiclenumber) en PILOT. Tenga en cuenta las mayúsculas y minúsculas, los espacios y los caracteres especiales.

Por ejemplo, si el automóvil se llama KS51YPGP\_F, en la solicitud debe enviar:

<table><tbody><tr><td><span></span></td><td><div>"truckNo": "KS51YPGP_F"</div></td></tr></tbody></table>

Si el nombre no coincide o el usuario no tiene acceso al automóvil, el método no devolverá su posición.

### Ejemplo de solicitud

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "trackingFlag": "START"</div><div>}</div></td></tr></tbody></table>

Ejemplo de solicitud con cURL:

<table><tbody><tr><td><span></span></td><td><div>curl --request POST \</div><div>&nbsp; --url "https://&lt;server_address&gt;/api/v3/vehicles/track-and-trace" \</div><div>&nbsp; --header "Authorization: Bearer &lt;access_token&gt;" \</div><div>&nbsp; --header "X-Node: 3" \</div><div>&nbsp; --header "Content-Type: application/json" \</div><div>&nbsp; --header "Accept: application/json" \</div><div>&nbsp; --data '{</div><div>&nbsp; &nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; &nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; &nbsp; "countryID": "ZA",</div><div>&nbsp; &nbsp; "trackingFlag": "START"</div><div>&nbsp; }'</div></td></tr></tbody></table>

### Respuesta

Si la solicitud se ejecuta correctamente, el método devuelve la última posición GPS guardada del automóvil, la dirección, la zona horaria y el nombre de la cuenta.

Campos de la respuesta correcta

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Campo</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Tipo</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Código de ejecución de la solicitud. El valor 0 significa ejecución correcta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; msg</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Resultado de la ejecución de la solicitud. Si es correcta, se devuelve OK</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; process_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo de procesamiento de la solicitud en segundos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Código del país recibido en la solicitud. Se devuelve sin cambios</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; timeZone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Zona horaria en formato IANA, por ejemplo, Africa/Johannesburg</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre del automóvil encontrado en PILOT</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; latitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitud de la última posición GPS guardada</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; longitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitud de la última posición GPS guardada</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre de la cuenta a la que pertenece el automóvil</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; streetName</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dirección de la última posición, obtenida mediante geocodificación inversa</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lastRecordedOn</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Hora de registro de la última posición GPS en formato Unix timestamp</span></div></td></tr></tbody></table>

Los campos shipmentNo, trackingFlag y trackLink no se devuelven en la respuesta.

### Ejemplo de respuesta correcta

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "process_time": 0.001,</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "timeZone": "Africa/Johannesburg",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "latitude": -26.2041,</div><div>&nbsp; "longitude": 28.0473,</div><div>&nbsp; "source": "Example Fleet",</div><div>&nbsp; "streetName": "Main Road, Johannesburg",</div><div>&nbsp; "lastRecordedOn": 1785142800</div><div>}</div></td></tr></tbody></table>

## Formatos de hora

### Zona horaria

El campo timeZone contiene el identificador de la zona horaria de la base de datos IANA:

<table><tbody><tr><td><span></span></td><td><div>"timeZone": "Africa/Johannesburg"</div></td></tr></tbody></table>

El identificador IANA define la zona horaria regional y permite tener en cuenta correctamente sus reglas.

El método no devuelve un desfase fijo, por ejemplo, UTC+02:00.

### Hora de la última posición

El campo lastRecordedOn contiene la hora de la última posición GPS en formato Unix timestamp:

<table><tbody><tr><td><span></span></td><td><div>"lastRecordedOn": 1785142800</div></td></tr></tbody></table>

Unix timestamp es el número de segundos transcurridos desde el 1 de enero de 1970, 00:00:00 UTC. El valor no depende de la zona horaria.

Para mostrar la fecha y la hora al usuario, convierta lastRecordedOn teniendo en cuenta el valor de timeZone.

### Determinación de la dirección

El campo streetName se genera mediante geocodificación inversa: PILOT convierte las coordenadas de la última posición en una dirección de texto.

<table><tbody><tr><td><span></span></td><td><div>"streetName": "Main Road, Johannesburg"</div></td></tr></tbody></table>

La integridad y la precisión de la dirección dependen de los datos cartográficos disponibles.
