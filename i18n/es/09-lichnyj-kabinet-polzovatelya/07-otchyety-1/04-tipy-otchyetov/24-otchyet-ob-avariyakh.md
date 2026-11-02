---
title: "Informe de accidentes"
---

El informe está disponible si el módulo [«Detección de accidentes»](../../moduli-1/obnaruzhenie-avarij.html) está habilitado. Le ayuda a analizar en detalle qué le ocurrió al vehículo: cuándo y dónde se produjo el incidente, a qué velocidad circulaba el vehículo, en qué dirección fue el impacto y qué viajes hubo en ese período.

![](images/drex_otchyet_ob_avariyakh_custom.png)

En la parte superior del informe se recoge la información principal sobre el evento:

-   Período del informe — fechas para las que se ha generado el informe
    
-   Matrícula (número de garaje) — identificador del vehículo
    
-   Crash (Tipo de evento) — descripción del evento, en este caso, un accidente
    
-   Hora — hora exacta del incidente
    
-   Tipo de dispositivo — nombre del dispositivo del que llegaron los datos
    
-   Coordenadas — punto del mapa donde se produjo el evento (se puede abrir el lugar en el mapa).
    

![](images/drex_otchyet_ob_avariyakh_custom_2.png)

### Gráfico de aceleraciones (Accelerometer Graph)

En la parte central del informe hay un gráfico que muestra qué fuerzas actuaron sobre el vehículo en el momento del accidente:

-   Eje X (línea azul) — movimiento hacia delante/atrás (aceleración, frenada, impacto frontal)
    
-   Eje Y (línea morada) — movimiento a la derecha/izquierda (giro, impacto lateral)
    
-   Eje Z (línea verde) — movimiento hacia arriba/abajo (bache, choque con un obstáculo)
    
-   Línea roja — velocidad del vehículo
    

Los saltos o caídas bruscos en el gráfico indican el momento de la colisión.

### Esquema del vehículo

Junto al gráfico se muestra un modelo del vehículo con una flecha roja que indica la dirección del impacto durante el accidente.

### Viajes y estacionamientos

En la parte inferior del informe se presenta la lista de viajes y estacionamientos del vehículo en el período seleccionado.

La tabla muestra:

-   Estado — movimiento o estacionamiento
    
-   Inicio / Fin — hora de inicio y finalización del viaje o estacionamiento
    
-   Velocidad máxima — velocidad más alta durante el viaje
    
-   Duración — cuánto duró el viaje o estacionamiento
    
-   Distancia (km) — kilometraje total de este viaje
    
-   Inicio / Parada — dirección de inicio y de fin del viaje
    
-   Coordenadas — coordenadas GPS exactas
    
    <table><tbody><tr><td><span></span></td><td><div>Después de un accidente, el dispositivo puede enviar varias veces las etiquetas «Crash». En el informe se considera que, si entre esas señales ha pasado más de un minuto, se trata ya de un nuevo evento de accidente. Por eso, para un mismo vehículo puede haber varios registros en el informe.</div></td></tr></tbody></table>
    
    Si hace clic en la fila de un accidente concreto, el sistema intentará cargar el recorrido del vehículo en ese tiempo y mostrarlo en el mapa (panel superior). Si no hay datos del recorrido, el mapa simplemente no cambiará.
    

![](images/drex_otchyet_ob_avariyakh_custom_3.png)
