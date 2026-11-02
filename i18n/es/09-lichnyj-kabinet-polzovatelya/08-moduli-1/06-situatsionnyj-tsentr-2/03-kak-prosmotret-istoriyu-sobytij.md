---
title: "Cómo consultar el historial de eventos"
---

El historial de eventos ayuda a entender qué ocurrió, en qué objeto y cómo reaccionó exactamente el sistema.

Para consultar el historial de eventos:

1\. Vaya a la sección «Algoritmos» en el menú superior y seleccione la pestaña «Historial»

![Cómo consultar el historial de eventos](images/drex_kak_prosmotret_istoriyu_sobytij_screen.png)

2.  Indique la fecha o el intervalo de fechas y haga clic en «Buscar»: debajo aparecerá la lista de eventos

![Cómo consultar el historial de eventos](images/drex_kak_prosmotret_istoriyu_sobytij_screen_2.png)

Si necesita guardar el historial en archivos, utilice los botones:

1 — ![](images/drex_kak_prosmotret_istoriyu_sobytij_custom.png)Guardar el historial en PDF

2 — ![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_2.png) Guardar el historial en XLSX

Si necesita mostrar solo los eventos sin procesar, marque la casilla «Sin procesar»

![Cómo consultar el historial de eventos](images/drex_kak_prosmotret_istoriyu_sobytij_screen.png)

3\. Haga clic en la flecha ![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_3.png)junto al evento para ver los detalles

![Cómo consultar el historial de eventos](images/drex_kak_prosmotret_istoriyu_sobytij_screen_3.png)

En el evento se muestran:

-   Fecha y hora del evento 
    
-   Objeto en el que se produjo
    
-   Grupo al que pertenece este evento
    
-   Texto del evento 
    
-   Operador: usuario que procesó o confirmó el evento
    
-   Fecha de procesamiento: cuándo procesó realmente el evento el operador
    
    ## Esquema del algoritmo
    

A la derecha de la lista de eventos se muestra el esquema del algoritmo que se ejecutó para el evento seleccionado.

En el esquema se muestran:

-   bloques del algoritmo: pasos que ejecuta el sistema
    
-   ramas del algoritmo: posibles variantes de desarrollo del escenario
    

El esquema ayuda a entender qué pasos realizó el sistema y por qué camino pasó el algoritmo al procesar el evento.

![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_4.png)

Ejemplo de esquema:

![](images/drex_kak_prosmotret_istoriyu_sobytij_custom_5.png)

En este algoritmo se reflejan los bloques:

-   Start: inicio del algoritmo, momento en que se produce el evento
    
-   Condition: comprobación de una condición. Por ejemplo: «velocidad > 90 km/h durante más de 10 segundos».
    
    De la condición salen dos ramas:
    
    Yes: la condición se cumplió
    
    No: la condición no se cumplió
    
-   bloques Text / Comando: acciones del sistema
    
-   End: finalización del procesamiento del evento
    
    La línea azul muestra el camino que recorrió el algoritmo. Por ejemplo: Start → Condition → (Yes) → Text → End.
    
    Las líneas grises son las ramas que no se activaron en este evento.
