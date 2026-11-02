---
title: "Calidad de datos (Data quality)"
---

El informe «Calidad de datos» sirve para comprobar la calidad de los datos telemáticos recibidos de los objetos de monitoreo en el período seleccionado. Con él puede detectar la ausencia y los retrasos de datos, las interrupciones entre paquetes, los problemas de GPS, los saltos bruscos de coordenadas y otras desviaciones.

El informe ayuda a evaluar en qué medida los datos recibidos son adecuados para trazar recorridos, calcular el kilometraje, procesar las lecturas de los sensores y realizar los recálculos posteriores. Tiene en cuenta no solo la falta de conexión con el objeto, sino también la calidad de los datos ya recibidos.

Los indicadores se calculan por separado para cada objeto y para cada día del período seleccionado.

![](images/drex_kachestvo_dannykh__data_quality__custom.png)

### Qué se analiza

Al evaluar la calidad de los datos, el sistema comprueba:

— el retraso en la llegada de los paquetes al servidor

— los intervalos entre paquetes consecutivos

— los saltos bruscos de coordenadas

— la calidad de la señal GPS, incluido el número de satélites y el valor de HDOP

— los paquetes no válidos y los paquetes sin coordenadas

— los paquetes con marcas de tiempo idénticas

— el exceso de la velocidad máxima establecida para el objeto

### Qué se muestra en el informe

-   Objeto — nombre o número del objeto de monitoreo

-   Inicio — comienzo del período analizado

-   Fin — final del período analizado

-   Puntuación — evaluación final de la calidad de los datos en una escala de 0 a 100. Cuanto mayor es el valor, mejor es la calidad de los datos

-   Estado — estado final de la calidad de los datos:

    -   ok— los datos cumplen los requisitos establecidos

    -   warning— se detectaron desviaciones que requieren atención

    -   bad— se detectaron problemas importantes en la calidad de los datos

    -   no\_data— no hay datos del período analizado

-   Puntos — número de paquetes telemáticos recibidos en el período

-   Problemas — número total de desviaciones detectadas

-   Delay max — retraso máximo en la llegada de un paquete al servidor

-   Gaps — número de interrupciones significativas entre paquetes consecutivos

-   Longest gap — duración de la interrupción más larga

-   GPS problems — número de problemas relacionados con un número insuficiente de satélites o con un valor de HDOP superior al admisible

-   Coord jumps — número de saltos bruscos de coordenadas detectados

![](images/drex_kachestvo_dannykh__data_quality__custom_2.png)

### Valores umbral

Para el análisis se utilizan los intervalos admisibles de transmisión de datos, los retrasos, las interrupciones, la velocidad de cambio de las coordenadas y otros valores umbral. Pueden configurarse de forma individual para cada objeto.

Si algunos parámetros no están definidos, el sistema utiliza los valores predeterminados y los ajustes existentes del objeto, incluidos el número mínimo de satélites, el HDOP máximo, la velocidad máxima y el tiempo admisible sin conexión.
