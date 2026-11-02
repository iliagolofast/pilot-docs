---
title: "Cómo procesar un evento"
---

## Panel del módulo

Cuando se activa una notificación con un algoritmo vinculado, el evento aparece de inmediato en la interfaz, en el panel de trabajo del operador para el procesamiento de eventos.

El panel del «Centro de situación» (Control room) se encuentra en la parte inferior de la interfaz de la sección «Principal».

Para desplegar el panel, haga clic en la flecha ![](images/drex_kak_obrabotat_sobytie_custom.png).

![Cómo procesar un evento](images/drex_kak_obrabotat_sobytie_screen.png)

En el panel se muestra la lista de todos los eventos que llegaron por notificaciones y esperan la reacción del operador.

![Cómo procesar un evento](images/drex_kak_obrabotat_sobytie_screen_2.png)

### Parte superior

La parte superior del panel ayuda a encontrar los eventos necesarios.

Aquí están disponibles:

-   Grupos de eventos: filtro por tipo (velocidad, temperatura, geocerca, etc.)
    
-   Búsqueda ![](images/drex_kak_obrabotat_sobytie_custom_2.png): búsqueda por objeto o por texto del evento
    
-   Actualizar ![](images/drex_kak_obrabotat_sobytie_custom_3.png): actualiza la lista manualmente
    
-   Acciones adicionales ![](images/drex_kak_obrabotat_sobytie_custom_4.png):
    
    — Intervalo de procesamiento de eventos: tiempo durante el cual el evento se considera vigente y disponible para su procesamiento. Seleccione el intervalo necesario de la lista para determinar cuánto tiempo se mostrará el evento en la lista antes de pasar automáticamente al estado «sin procesar».
    
    — Page size: número de eventos que se muestran en una página
    

— Agrupación: reúne en una sola fila los eventos idénticos de un mismo objeto para mayor comodidad.

— Procesado: marque la casilla para mostrar los eventos procesados. De forma predeterminada solo se muestran los no procesados.

![](images/drex_kak_obrabotat_sobytie_custom_5.png)

### Tabla de eventos

Cada fila es un objeto con el evento actual o un grupo de eventos.

Columnas principales:

-   Fecha: hora del último evento
    
-   Objeto: nombre del objeto. Debajo puede mostrarse la dirección o la zona
    
-   Etapa: paso actual del algoritmo
    
-   Operador: quién tomó el evento para procesarlo
    
-   Evento:
    
-   [Grupo](kak-nastroit-parametry-sobytij.html#группы_событий) al que pertenece el evento
    
-   El círculo rojo con un número muestra cuántos eventos aún no se han procesado
    
-   Texto: descripción estándar del evento
    
-   Texto alternativo: descripción personalizada de la configuración de la notificación (si está definida)
    

![Cómo procesar un evento](images/drex_kak_obrabotat_sobytie_screen_3.png)

A la izquierda de la fila hay una flecha ![](images/drex_kak_obrabotat_sobytie_custom_6.png) que despliega la lista de todos los eventos dentro del grupo.

## Cómo iniciar el procesamiento de un evento

1\. Cuando se activa la notificación, el evento aparece en la lista del panel

2\. Haga clic en la fila: el evento se mostrará en el mapa

![](images/drex_kak_obrabotat_sobytie_custom_7.png)

3\. Despliegue la fila y seleccione el evento que necesite

4\. Haga clic en:

-   «Iniciar»: para procesar el evento
    
-   «Omitir»: si el evento no requiere procesamiento
    

## Ventana «Procesamiento del evento»

Después de hacer clic en «Iniciar» se abre la ventana de procesamiento paso a paso, que sigue la lógica de su algoritmo.

![](images/drex_kak_obrabotat_sobytie_custom_8.png)

En la parte superior:

-   ID del evento: número interno
    
-   Dirección: lugar del evento. Se puede copiar haciendo clic en ![](images/drex_kak_obrabotat_sobytie_custom_9.png)
    
-   Texto del evento: descripción
    
-   Información del evento: indicación para el operador procedente del algoritmo
    

Debajo:

-   Comentario: qué hizo el operador respecto al evento
    

Si el algoritmo contiene pasos adicionales, pueden aparecer:

-   listas de selección de motivo o estado
    
-   el botón «Siguiente paso»: paso al siguiente bloque del algoritmo
    

![](images/drex_kak_obrabotat_sobytie_custom_10.png)

## Finalización del procesamiento

En el último paso del algoritmo puede haber dos botones:

-   Sí: confirmación del evento (hubo infracción, se realizó la acción)
    
-   No: resultado alternativo (falsa alarma, no se requieren acciones)
    

![](images/drex_kak_obrabotat_sobytie_custom_11.png)

Después de la selección:

— el algoritmo finaliza

— el evento se considera procesado

— el resultado se guarda en el historial

Si el algoritmo no tiene bifurcación, en lugar de «Sí / No» habrá un botón «Finalizar».

![](images/drex_kak_obrabotat_sobytie_custom_12.png)

## Cómo trabajar con la ventana de procesamiento del evento

  ![Cómo procesar un evento](images/drex_kak_obrabotat_sobytie_screen_4.png)

En la ventana de procesamiento, haga clic en el icono del mapa ![](images/drex_kak_obrabotat_sobytie_custom_13.png): en la parte inferior se abrirá un mapa integrado.

En el mapa verá:

-   la posición del objeto en el momento del evento
    
-   el recorrido antes y después del evento
    
-   la dirección y las coordenadas
    

![](images/drex_kak_obrabotat_sobytie_custom_14.png)

Haga clic en el icono ![](images/drex_kak_obrabotat_sobytie_custom_15.png) de la ventana de procesamiento: se abrirá un panel adicional con datos detallados del objeto y del evento.

![](images/drex_kak_obrabotat_sobytie_custom_16.png)

Contiene tres bloques:

1\. Sensores

— valores de los sensores en el momento del evento

— valores actuales

2\. Eventos procesados

— fecha de los eventos anteriores de este objeto

— qué operadores los procesaron

— hora de procesamiento, grupo y texto del evento

3\. Información de la tarea

— número y estado de la tarea

— hora de los cambios de estado

— ruta y horas reales

En este panel el operador ve todo el contexto del evento sin salir de la ventana de procesamiento.
