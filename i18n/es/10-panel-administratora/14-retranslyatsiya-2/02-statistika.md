---
title: "Estadísticas"
source: statistika.html
---

En la pestaña Statistics se muestran las estadísticas de transmisión de datos y la información sobre posibles errores de retransmisión.

Para abrir las estadísticas, vaya a la sección «Retransmisión» → «Statistics».

![](images/drex_statistika_custom.png)

La página permite controlar el funcionamiento de la retransmisión, seguir el éxito de la transmisión de datos, analizar errores e identificar objetos o destinos de transmisión problemáticos.

![](images/drex_statistika_custom_2.png)

Las estadísticas se generan a partir de los datos del servicio de retransmisión y se muestran según los derechos del usuario actual.

El administrador puede ver las estadísticas globales de todo el sistema o las de endpoints concretos.

El usuario socio ve las estadísticas solo de sus endpoints y de los endpoints de los socios que están por debajo en su jerarquía.

### Modos de visualización de las estadísticas

Para el administrador está disponible el filtro Scope:

-   Global (Globalmente) — estadísticas de todo el sistema de retransmisión.
    
-   Endpoints (Endpoints) — estadísticas de destinos de transmisión de datos concretos.
    

![](images/drex_statistika_custom_3.png)

Los usuarios con el rol de socio trabajan solo en el modo Endpoints.

## Filtros de estadísticas

En la parte superior de la página se encuentran los filtros que permiten seleccionar los datos necesarios para el análisis.![](images/drex_statistika_custom_4.png)

### Scope (Ámbito de las estadísticas)

Define el origen de las estadísticas:

-   Global — estadísticas de todo el sistema;
    
-   Endpoints — estadísticas de endpoints concretos.
    

Solo disponible para administradores.

### Protocol (Protocolo)

Filtro por protocolo de transmisión de datos. Permite mostrar las estadísticas solo del protocolo seleccionado.

### Metric (Métrica)

Define qué eventos se mostrarán en los gráficos y las tablas.

Están disponibles los siguientes valores:

-   All metrics — todas las métricas
    
-   OK only — solo paquetes aceptados correctamente
    
-   Errors only — solo errores
    
-   Spooled only — solo paquetes puestos en cola
    
-   Dropped only — solo paquetes descartados
    

### Endpoint

Permite seleccionar un endpoint o un grupo de endpoints para analizar.

La lista de endpoints está agrupada por socios.

### Loop threshold/hour (Umbral de transmisión cíclica por hora)

Se utiliza para buscar objetos con un número sospechosamente grande de paquetes transmitidos.

Si el número de paquetes supera el umbral indicado, el objeto puede aparecer en la tabla Loop suspicion.

### Desde y hasta

Inicio y fin del período analizado.

La hora en los gráficos se muestra en la zona horaria local del usuario, en formato de 24 horas.

## Gráficos de estadísticas

En la parte superior de la página se muestran los gráficos que ayudan a evaluar rápidamente el estado de la retransmisión.

**![](images/drex_statistika_custom_5.png)**

### Traffic over time

Muestra la variación del número de paquetes a lo largo del tiempo.

El gráfico ayuda a determinar:

— los períodos de alta actividad

— los aumentos bruscos de carga

— los momentos en que aparecen errores

— los períodos sin transmisión de datos

### Outcome

Muestra la distribución de los resultados de la transmisión de datos.

En el gráfico se puede evaluar rápidamente:

— cuántos paquetes se aceptaron correctamente

— cuántos paquetes terminaron con error

— cuántos paquetes se pusieron en cola

— si hay problemas con la transmisión de datos

![](images/drex_statistika_custom_6.png)

### By protocol

Compara las estadísticas de los distintos protocolos de transmisión de datos.

El gráfico permite determinar:

— qué protocolo se utiliza con más frecuencia;

— en qué protocolo se producen más errores

— qué protocolos generan la mayor carga

### By endpoint

Compara las estadísticas entre endpoints.

En el gráfico se puede determinar rápidamente:

— los endpoints más activos

— los endpoints con un mayor número de errores

— los destinos de transmisión con mayor carga

Si se pulsa cualquier endpoint del gráfico By endpoint, el sistema automáticamente:

— seleccionará ese endpoint en el filtro

— actualizará el resto de los gráficos

— actualizará las tablas de estadísticas

— mostrará la información solo del endpoint seleccionado

![](images/drex_statistika_custom_7.png)

## Métricas

En las estadísticas se utilizan los siguientes indicadores.

### Accepted / Ack

Número de paquetes aceptados correctamente por el sistema externo. Cuanto mayor es este indicador, con más éxito funciona la retransmisión.

### Send

Número de intentos de envío de paquetes. Muestra el volumen total de transmisión de datos saliente.

### Errors

Número de errores de envío o de conexión. El aumento de este indicador suele indicar problemas de comunicación, de ajustes del endpoint o de disponibilidad del sistema externo.

### Spooled

Número de paquetes puestos en la cola de envío. Estos paquetes se enviarán más tarde, cuando la transmisión sea posible.

### Dropped

Número de paquetes que fueron descartados por el servicio y no se transmitirán.

### Queue

Tamaño actual de la cola del endpoint. Si el valor crece constantemente, puede indicar problemas con el envío de datos al sistema externo.

## Tablas de estadísticas

Debajo de los gráficos se encuentran las tablas con información.

![](images/drex_statistika_custom_8.png)

### Top endpoints

Lista de endpoints con el mayor número de paquetes transmitidos durante el período seleccionado.

Permite determinar rápidamente los destinos de transmisión de datos más activos.

### Recent endpoint errors

Lista de los últimos errores de retransmisión.

La tabla ayuda a comprender rápidamente la causa de los problemas de transmisión de datos y a identificar el endpoint en el que se produjo el error.

### Top vehicles for endpoint

Lista de objetos que generaron el mayor volumen de tráfico para el endpoint seleccionado.

Se utiliza para analizar la carga y buscar los objetos más activos.

![](images/drex_statistika_custom_9.png)

### Loop suspicion

Lista de objetos que superaron el umbral establecido de número de paquetes por hora.

Esta situación puede indicar una transmisión cíclica de datos, un error de configuración del equipo o un funcionamiento incorrecto de la integración.

Cuando aparezcan objetos en esta lista, se recomienda comprobar los ajustes de retransmisión y el origen de los datos.

![](images/drex_statistika_custom_10.png)
