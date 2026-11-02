---
title: "Configuración de Jimi JC181/JC182/JC450/JC451/JC371"
---

Para que los videograbadores Jimi (JC181, JC182, JC450, JC451, JC371) se conecten al servidor PILOT y transmitan datos y video, es necesario enviarles varios comandos.

Los comandos se pueden enviar al dispositivo por SMS o mediante un servidor de gestión remota (según cómo esté configurado el dispositivo).

A continuación se muestran ejemplos de comandos para configurar la conexión a PILOT.

### 1\. Configuración del servidor

<table><tbody><tr><td><span></span></td><td><div>SERVER,video.pilot-gps.com,6608,NA,NA,NA,NA#</div></td></tr></tbody></table>

Este comando indica al dispositivo adónde debe enviar los datos.

-   video.pilot-gps.com — servidor PILOT
    
-   6608 — puerto
    
-   NA — se escribe si el parámetro no tiene valor (el espacio vacío debe rellenarse obligatoriamente con NA).
    

### 2\. Configuración del APN

<table><tbody><tr><td><span></span></td><td><div>APN,internet,,,,,,,,,mtn,,mtn,,,,,,,</div></td></tr></tbody></table>

Este comando configura el punto de acceso de la tarjeta SIM para que el dispositivo pueda conectarse a internet.

-   internet — nombre del punto de acceso (APN)
    
-   mtn — nombre de usuario
    
-   mtn — contraseña
    

### 3\. Configuración del identificador del dispositivo

<table><tbody><tr><td><span></span></td><td><div>BCD,1#</div></td></tr></tbody></table>

Este comando determina qué identificador utilizará el dispositivo:

-   1 = los últimos 12 dígitos del IMEI
    

### 4\. Configuración de la zona horaria

<table><tbody><tr><td><span></span></td><td><div>TIMEZONE,±hh:mm</div></td></tr></tbody></table>

Este comando establece la zona horaria del dispositivo, para que la hora de los eventos en el servidor coincida con la hora local real.

Por ejemplo, la hora de Moscú es UTC+03:00: TIMEZONE,+03:00

### 5\. Reinicio del dispositivo

<table><tbody><tr><td><span></span></td><td><div>REBOOT</div></td></tr></tbody></table>

 Después de realizar todos los ajustes, es necesario reiniciar el dispositivo para que se apliquen los nuevos parámetros.
