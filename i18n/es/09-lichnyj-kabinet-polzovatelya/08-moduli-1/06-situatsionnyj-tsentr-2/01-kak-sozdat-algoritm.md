---
title: "Cómo crear un algoritmo"
---

El módulo «Centro de situación» ayuda al sistema a reaccionar automáticamente ante los eventos. Para ello se utilizan algoritmos de procesamiento de eventos: secuencias de acciones predefinidas que se ejecutan cuando se cumplen determinadas condiciones.

Por ejemplo, puede configurar el sistema para que:

— ante un exceso de velocidad o de temperatura, avise de inmediato al operador y marque el evento como crítico

— ante una parada prolongada, cree una tarea para el despachador y envíe un recordatorio al conductor

— al entrar en la geocerca del cliente, registre la hora de llegada y envíe un SMS al cliente

## Creación de un algoritmo

-   Vaya a la sección «Algoritmos» en el menú superior de la interfaz
    

![](images/drex_kak_sozdat_algoritm_custom.png)

2\. Cree un nuevo algoritmo

En la pestaña «Lista», haga clic en el botón «Añadir» ![](images/drex_kak_sozdat_algoritm_custom_2.png). Se abrirá el área de trabajo del constructor

![](images/drex_kak_sozdat_algoritm_custom_3.png)

3\. Construya el algoritmo con bloques

En el área de trabajo puede arrastrar bloques y organizarlos para formar un escenario.

Cada bloque es un paso independiente que el sistema ejecuta cuando se activa el evento.

Bloques disponibles:

-   Bloque inicial: punto de inicio del algoritmo
    
-   Texto: salida de un mensaje o comentario
    
-   Comando: acción del sistema (por ejemplo, el envío de una notificación)
    
-   Plantilla de comando: acción predefinida para reutilizar
    
-   Webhook: envío de una solicitud HTTP a un sistema externo. El bloque permite transmitir los datos del evento a un servicio de terceros, por ejemplo, un CRM, un sistema de despacho o una aplicación corporativa
    
-   Condición: comprobación lógica (por ejemplo, si la temperatura supera el umbral)
    
-   Selección: bifurcación con varias opciones de acción
    
-   Fin: finalización del algoritmo
    

También pueden estar disponibles bloques adicionales, según la configuración del sistema.

4\. Coloque los bloques y conéctelos

Normalmente el algoritmo comienza con el «Bloque inicial», a continuación van las comprobaciones de condiciones y las acciones, y termina con el bloque «Fin».

![](images/drex_kak_sozdat_algoritm_custom_4.png)

Conecte los bloques entre sí arrastrando ramas entre ellos.

![](images/drex_kak_sozdat_algoritm_custom_5.png)

Por ejemplo, desde el bloque «Condición» hasta el bloque «Texto» se configuran las ramas:

-   «Sí»: si se cumple la condición
    

![](images/drex_kak_sozdat_algoritm_custom_6.png)

![](images/drex_kak_sozdat_algoritm_custom_7.png)

-   «No»: si no se cumple la condición
    

![](images/drex_kak_sozdat_algoritm_custom_8.png)

El bloque Webhook debe colocarse en la rama en la que se necesite enviar datos al sistema externo. Si la solicitud debe enviarse con cualquier resultado de la comprobación, añada un bloque Webhook independiente en ambas ramas.

En esta etapa solo se define la estructura del algoritmo. Los valores de los parámetros (condiciones, textos de los mensajes, parámetros de las solicitudes y otros ajustes) se indican más tarde, al vincular el algoritmo a una notificación.

![](images/drex_kak_sozdat_algoritm_custom_9.png)

5\. Guarde el algoritmo

Cuando el esquema esté listo, haga clic en «Aceptar».

![](images/drex_kak_sozdat_algoritm_custom_10.png)

En la ventana que aparece, indique el nombre del algoritmo y haga clic en «OK». El algoritmo se guardará en la lista y quedará disponible para su uso.

![](images/drex_kak_sozdat_algoritm_custom_11.png)

### Ejemplo de un algoritmo sencillo

Tarea: registrar un evento si la temperatura de la carga supera el valor permitido.

Cómo construir el algoritmo:

1\. Añada el «Bloque inicial»

2\. Añada el bloque «Condición»: será el encargado de comprobar que la temperatura es superior a la normal

El parámetro «Temperatura» y el umbral se definen más tarde, al vincularlo a la notificación.

3\. Desde el bloque «Condición», coloque bloques «Texto» y trace hacia ellos las ramas «Sí» y «No»

4\. Finalice el algoritmo con el bloque «Fin» y asegúrese de que todos los bloques estén conectados

![](images/drex_kak_sozdat_algoritm_custom_12.png)

Este es un algoritmo básico que se puede utilizar como base para el procesamiento automático de eventos.

El algoritmo creado por sí solo todavía no se ejecuta. Para que empiece a funcionar, es necesario vincularlo a una notificación.

Cómo hacerlo se explica en el siguiente [artículo](kak-privyazat-algoritm-k-uvedomleniyu.html).
