---
title: "Retransmisión"
---

La sección «Retransmisión» sirve para transmitir los datos de los objetos de monitoreo a sistemas externos.

Por ejemplo, los datos pueden transmitirse a:

— plataformas urbanas

— servicios de integración

— sistemas de monitoreo, como Wialon

— servidores que funcionan con el protocolo EGTS

— REST API

— otros sistemas externos que reciben datos telemáticos

El trabajo con la retransmisión se basa en el siguiente principio:

1\. Cree un destino de transmisión de datos (endpoint)

2\. Indique los parámetros de conexión al sistema externo

3\. Conecte a este endpoint uno o varios objetos

A partir de ese momento, el sistema comenzará a transmitir automáticamente los datos de los objetos seleccionados al sistema externo.

Este enfoque permite configurar la conexión una sola vez y usarla para cualquier cantidad de objetos, sin volver a introducir la dirección del servidor, el puerto, los parámetros de autorización ni otros ajustes.

![](images/drex_retranslyatsiya_2_custom.png)

La sección «Retransmisión» consta de tres pestañas:

-   Endpoints — destinos de transmisión de datos a sistemas externos. Aquí se configuran los parámetros de conexión al sistema externo: dirección del servidor, puerto, protocolo, datos de autorización y otros parámetros.
    
-   Statistics — estadísticas de transmisión de datos, información sobre errores y estado de la transmisión. Aquí puede comprobar si hay errores, ver el número de paquetes enviados y recibidos, evaluar el estado de las colas y verificar que los datos llegan correctamente al sistema externo.
    
-   Objects — objetos conectados a la retransmisión. A un mismo endpoint se puede conectar cualquier cantidad de objetos. Si es necesario, un objeto puede desconectarse de la retransmisión o conectarse a otro endpoint.
    

## Conceptos básicos de la retransmisión

A continuación se describen los términos principales que se utilizan en la sección.

### Endpoint

— es el destino de transmisión de datos a un sistema externo.

En el endpoint se indican los parámetros de conexión:

-   dirección del servidor
    
-   puerto
    
-   protocolo de transmisión de datos
    
-   ruta, si se requiere
    
-   parámetros de autorización
    
-   ajustes adicionales
    

Un mismo endpoint puede ser utilizado por varios objetos a la vez. Por ejemplo, si todos los objetos deben transmitir datos a una misma cuenta de Wialon, basta con crear un endpoint y conectarle los objetos necesarios.

Un objeto es un vehículo, dispositivo o cualquier otro objeto de monitoreo cuyos datos se transmiten a través del endpoint seleccionado. Cada objeto puede tener sus propios parámetros de retransmisión, por ejemplo, un identificador externo o el horario de transmisión de datos.

### Socio

— es el contrato de socio al que pertenece el endpoint.

Según los derechos de acceso, el usuario puede trabajar solo con sus propios endpoints o ver también los endpoints de los socios subordinados.

### Contrato

— contrato del usuario final al que pertenece el objeto de monitoreo

### Adición automática de objetos (Auto add

) — esta función permite conectar automáticamente al endpoint los nuevos objetos del contrato seleccionado. Por ejemplo, todos los objetos de un cliente deben transmitir datos al mismo sistema externo. Una vez configurada la regla, cada nuevo objeto creado en el contrato seleccionado se conectará automáticamente al endpoint sin acciones adicionales del usuario.

### ID externo (External ID)

— identificador del objeto en el sistema externo. Por defecto, como External ID suele utilizarse el IMEI del dispositivo, aunque puede cambiarse si es necesario.

El sistema externo utiliza este identificador para reconocer el objeto y asociar los datos recibidos.

### Uspw

— datos de autorización para la transmisión de datos al sistema externo. Según el protocolo utilizado, aquí pueden almacenarse el inicio de sesión, la contraseña, un token u otros parámetros de acceso. Si el protocolo requiere parámetros de autorización adicionales, se indican en el campo Json config.

## Derechos de acceso

Los datos y acciones disponibles dependen del rol del usuario en el panel de administración.

### Administrador

El administrador tiene acceso completo a la sección y puede:

— ver todos los endpoints

— gestionar todos los objetos de retransmisión

— crear, modificar y eliminar endpoints

— ver las estadísticas generales de todas las retransmisiones

— trabajar con endpoints de prueba

### Usuario

El usuario socio ve únicamente los datos que pertenecen a su estructura de socios.

Tiene disponible:

— sus propios endpoints

— los endpoints de socios subordinados

— los objetos de los contratos incluidos en la rama de socios disponible

— las estadísticas de los endpoints disponibles

El socio no puede ver ni modificar datos pertenecientes a otras estructuras de socios
