---
title: "Configuración de la retransmisión a Tripia"
source: nastrojka_retranslyatsii_tripia.html
---

Tripia es un protocolo de retransmisión de datos destinado a transmitir información telemática de los vehículos al sistema externo Tripia en formato JSON.

A través del protocolo Tripia se pueden transmitir:

— coordenadas y velocidad del vehículo

— datos de los viajes

— estado del vehículo

— datos de los sensores

— eventos GPS, ADAS y DMS

— datos del bus CAN

— información de identificación del conductor

La transmisión de datos se realiza en tiempo real.

## Cómo añadir una retransmisión

1\. Entre en el panel de administración

2\. Vaya a la pestaña «Máquinas»

3\. Busque el objeto necesario, haga clic con el botón derecho del ratón sobre él y seleccione «Retransmisión» en el menú

**![](images/drex_nastrojka_retranslyatsii_tripia_custom.png)**

4. En la ventana que se abre, pulse el botón de añadir retransmisión ![](images/drex_nastrojka_retranslyatsii_tripia_custom_2.png)

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_3.png)**

5\. En la ventana «Configuración» rellene los campos para configurar la retransmisión

### Parámetros de conexión

Al crear el endpoint, indique los siguientes parámetros:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Valor</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Formato</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tripia</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Host</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 64.225.12.166</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Puerto</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 3000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Protocolo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TCP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Formato de datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;JSON</span></div></td></tr></tbody></table>

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_4.png)**

### Periodicidad de la transmisión de datos

La transmisión de datos se realiza automáticamente:

— cada 30 segundos con el encendido activado

— cada 1 minuto con el encendido apagado

## Datos transmitidos

### Información del proveedor

Se transmiten los datos de la organización propietaria del transporte:

-   nombre del proveedor (Provider Name)
    
-   código del proveedor (Provider Code)
    

### Información del vehículo

Se transmiten:

-   identificador del vehículo
    
-   matrícula
    
-   datos del despachador
    

### Datos de registro del evento

Se transmiten:

-   hora del evento (Event Timestamp)
    
-   hora de envío de los datos (Sent Timestamp)
    

### Datos GPS

Se transmiten los principales parámetros de navegación:

-   latitud (Latitude)
    
-   longitud (Longitude)
    
-   velocidad (Speed)
    
-   rumbo (Heading)
    
-   altitud (Altitude)
    
-   número de satélites (Satellites)
    
-   HDOP
    
-   PDOP
    

### Datos de conexión

Se transmiten los parámetros de la red móvil:

-   nivel de señal
    
-   operador de telefonía (MCC/MNC)
    
-   tipo de conexión
    
-   Cell ID
    

### Estado del vehículo

Se transmiten:

-   encendido
    
-   movimiento
    
-   odómetro
    
-   horas de motor
    
-   tensión de la batería
    

### Eventos GPS

Se transmiten los siguientes eventos:

-   desconexión de la batería
    
-   inhibición de la señal (Jamming)
    
-   pérdida de satélites
    
-   remolcado del vehículo
    
-   pérdida de la señal de comunicación
    
-   recuperación de la señal de comunicación
    
-   aceleración brusca
    
-   giro brusco
    
-   frenada brusca
    
-   accidente (Crash)
    

### Datos de sensores GPS

Se admite la transmisión de datos de los siguientes sensores:

-   Sensores de temperatura
    
-   Sensores de puertas y del estado de la carrocería:
    
    — puerta del conductor
    
    — puerta del pasajero
    
    — puerta lateral de carga
    
    — puerta trasera de carga
    
    — capó del motor
    
-   Sensores adicionales:
    
    — botón de alarma (Panic Button)
    

### Telemetría

Se transmiten los indicadores de presencia de los siguientes subsistemas:

-   ADAS
    
-   DMS
    
-   Refrigerador
    
-   CAN Bus
    
-   Driver ID
    

### Eventos ADAS

Se transmiten los eventos del sistema de asistencia al conductor:

-   FCW (advertencia de colisión frontal)
    
-   LDW (control del carril de circulación)
    
-   LDWL
    
-   LDWR
    
-   PCW
    
-   PROX
    

### Eventos DMS

Se transmiten los eventos del sistema de control del conductor:

-   bloqueo
    
-   pérdida del rostro (Face Lost)
    
-   distracción
    
-   bostezos frecuentes
    
-   mirada hacia un lado
    
-   fumar
    
-   conversación por teléfono
    
-   somnolencia
    
-   ausencia del cinturón de seguridad
    

### Datos del bus CAN

Se transmiten:

-   nivel de combustible (%)
    
-   volumen de combustible (litros)
    
-   carga de combustible
    
-   consumo de combustible
    
-   velocidad
    
-   odómetro
    
-   horas de motor
    
-   estado de la puerta del conductor
    
-   estado de la puerta del pasajero
    

### Identificación del conductor (Driver ID)

Se transmiten:

-   tipo de identificador
    
-   código del identificador
    
-   ID del conductor
    
-   nombre del conductor
    

## Ejemplo de estructura del paquete transmitido

Al transmitir datos a Tripia, el sistema genera un paquete JSON que contiene información sobre el vehículo, la ubicación, los sensores, los eventos y la telemetría.

Ejemplo de estructura del paquete:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "provider": {</span></div><div><span>&nbsp; &nbsp; "name": "Providers Name",</span></div><div><span>&nbsp; &nbsp; "code": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dispatcher": {</span></div><div><span>&nbsp; &nbsp; "name": "Dispatcher Name",</span></div><div><span>&nbsp; &nbsp; "identifier": "1234abc",</span></div><div><span>&nbsp; &nbsp; "licensePlate": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "registry": {</span></div><div><span>&nbsp; &nbsp; "eventTimestamp": "2016-01-01T00:00:00Z",</span></div><div><span>&nbsp; &nbsp; "sentTimestamp": "2016-01-01T00:00:00Z"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gps": {</span></div><div><span>&nbsp; &nbsp; "latitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "longitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "speed": 100,</span></div><div><span>&nbsp; &nbsp; "heading": 123,</span></div><div><span>&nbsp; &nbsp; "altitude": 123,</span></div><div><span>&nbsp; &nbsp; "satellites": 12,</span></div><div><span>&nbsp; &nbsp; "hdop": 1.2,</span></div><div><span>&nbsp; &nbsp; "pdop": 1.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "connection": {</span></div><div><span>&nbsp; &nbsp; "signal": 85,</span></div><div><span>&nbsp; &nbsp; "operatorMCCMNC": "Entel",</span></div><div><span>&nbsp; &nbsp; "type": 2,</span></div><div><span>&nbsp; &nbsp; "cellID": 123456789</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; "ignition": 1,</span></div><div><span>&nbsp; &nbsp; "movement": 1,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "hourMeter": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "battery": 12.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsEvents": {</span></div><div><span>&nbsp; &nbsp; "batteryDisconnected": 0,</span></div><div><span>&nbsp; &nbsp; "jamming": 1,</span></div><div><span>&nbsp; &nbsp; "satellitesLost": 0,</span></div><div><span>&nbsp; &nbsp; "towedVehicule": 1,</span></div><div><span>&nbsp; &nbsp; "signalLost": 0,</span></div><div><span>&nbsp; &nbsp; "signalRecovered": 1,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driving": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshAcceleration": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshTurn": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshBraking": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "crash": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsSensors": {</span></div><div><span>&nbsp; &nbsp; "temperature1": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature2": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature3": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature4": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature5": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature6": 12.3,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 0,</span></div><div><span>&nbsp; &nbsp; "sideLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "rearLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "engineHood": 1,</span></div><div><span>&nbsp; &nbsp; "panicButton": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "telemetry": {</span></div><div><span>&nbsp; &nbsp; "adas": 0,</span></div><div><span>&nbsp; &nbsp; "dms": 1,</span></div><div><span>&nbsp; &nbsp; "reefer": 0,</span></div><div><span>&nbsp; &nbsp; "canbus": 1,</span></div><div><span>&nbsp; &nbsp; "driverid": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "adasEvents": {</span></div><div><span>&nbsp; &nbsp; "fcw": 1,</span></div><div><span>&nbsp; &nbsp; "ldw": 1,</span></div><div><span>&nbsp; &nbsp; "ldwl": 1,</span></div><div><span>&nbsp; &nbsp; "ldwr": 1,</span></div><div><span>&nbsp; &nbsp; "pcw": 1,</span></div><div><span>&nbsp; &nbsp; "prox": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dmsEvents": {</span></div><div><span>&nbsp; &nbsp; "blocked": 0,</span></div><div><span>&nbsp; &nbsp; "faceLost": 0,</span></div><div><span>&nbsp; &nbsp; "distraction": 0,</span></div><div><span>&nbsp; &nbsp; "frequentYawning": 0,</span></div><div><span>&nbsp; &nbsp; "lookingAside": 1,</span></div><div><span>&nbsp; &nbsp; "smoking": 0,</span></div><div><span>&nbsp; &nbsp; "calling": 1,</span></div><div><span>&nbsp; &nbsp; "drowsiness": 0,</span></div><div><span>&nbsp; &nbsp; "seatbelt": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "canbusData": {</span></div><div><span>&nbsp; &nbsp; "fuelPercent": 12,</span></div><div><span>&nbsp; &nbsp; "fuelLiters": 128,</span></div><div><span>&nbsp; &nbsp; "fuelLoad": 80,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "speed": 123,</span></div><div><span>&nbsp; &nbsp; "fuelConsumption": 11.12,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 1,</span></div><div><span>&nbsp; &nbsp; "engineHours": 12345678.9</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "driveridData": {</span></div><div><span>&nbsp; &nbsp; "type": 1,</span></div><div><span>&nbsp; &nbsp; "codeId": "123456789",</span></div><div><span>&nbsp; &nbsp; "driverName": "Nombre conductor",</span></div><div><span>&nbsp; &nbsp; "driverId": "123456789"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

El ejemplo se ofrece para conocer la estructura de los datos. La composición real de los campos depende del equipo conectado, de los ajustes de retransmisión y de los sensores disponibles del vehículo.
