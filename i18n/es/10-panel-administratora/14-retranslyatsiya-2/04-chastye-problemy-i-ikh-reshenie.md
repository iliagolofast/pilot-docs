---
title: "Problemas frecuentes y cómo resolverlos"
---

### No hay datos en el sistema externo

Si los datos no aparecen en el sistema externo, compruebe:

— si el endpoint está activado

— si la retransmisión del objeto está activada

— si el External ID está rellenado correctamente

— si los ajustes del endpoint son correctos (host, puerto, formato, ruta)

— si los datos de autorización (Uspw) son correctos

— si hay errores en la pestaña [Statistics](statistika.html)

— si la cola (Queue) no está creciendo

### El nuevo objeto no se conectó automáticamente

Compruebe:

—  si la regla [Auto add](endpoints.html#Как_настроить_Auto_Add) está activada para el contrato del objeto

—  si el objeto se creó después de configurar la regla

—  si el endpoint está activado

—  si el objeto pertenece al contrato para el que está configurada la regla Auto add

—  si el usuario tiene [derechos](index.html#Права_доступа) sobre ese contrato

### Queue crece

Si el indicador [Queue](statistika.html#Queue) aumenta, significa que los paquetes se acumulan en la cola y no se pueden enviar.

Normalmente ocurre si:

— el servidor externo no está disponible

— se han indicado parámetros de conexión incorrectos

— la parte receptora rechaza la conexión

Compruebe los ajustes Host, Port, Uspw, la disponibilidad del sistema externo y los últimos errores en la pestaña [Statistics](statistika.html).

### Aumenta el número de errores (Err)

Si el indicador [Err](statistika.html#Errors) aumenta, compruebe:

— la disponibilidad del sistema externo

— que los parámetros de autorización sean correctos

— que el protocolo de transmisión de datos seleccionado sea el adecuado

— los ajustes del horario

— las restricciones o requisitos de la parte receptora

### Hay Send, pero no hay Ack

Si el indicador [Send](statistika.html#Send) crece y [Ack](statistika.html#Ack) permanece en cero, significa que el sistema envía datos pero no recibe confirmación de recepción.

Compruebe:

— los ajustes del protocolo

— External ID

— Json config

— los datos de autorización

— los mensajes de error en la pestaña Statistics

### No se muestra la estadística

Posibles causas:

— todavía no ha habido transmisión de datos por el endpoint

— se ha seleccionado un período de visualización demasiado corto

— el endpoint se creó hace poco

— la estadística todavía no ha tenido tiempo de generarse

## Recomendaciones de uso

-   Cree un endpoint independiente para cada sistema externo
    
-   Configure [Auto add](endpoints.html#Как_настроить_Auto_Add) si todos los nuevos objetos del contrato deben transmitir datos automáticamente a un mismo sistema
    
-   Antes de eliminar un endpoint, compruebe el número de objetos conectados
    
-   Si surgen problemas, abra primero la pestaña [Statistics](statistika.html) y compruebe los indicadores Queue, Err, Send y Ack
