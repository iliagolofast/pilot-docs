---
title: "Configuración de las reglas de calidad de conducción"
---

Las reglas de calidad de conducción determinan qué acciones del conductor considerará el sistema infracciones y cómo se tendrán en cuenta al evaluar la calidad de conducción.

Cada regla controla un parámetro determinado que llega del dispositivo instalado en el vehículo, por ejemplo, la velocidad, la aceleración o la duración del ralentí. Si el valor cumple las condiciones establecidas, el sistema registra un evento de calidad de conducción.

Para cada regla se puede configurar:

— el parámetro que se debe controlar

— las condiciones de registro del evento

— el tipo de evento

— el mensaje que se muestra en los informes

— el número y el método de asignación de puntos de penalización

Puede crear cualquier número de reglas y configurarlas según las características del vehículo, del equipo instalado y los requisitos de la empresa.

## Cómo abrir los ajustes de calidad de conducción

1\. En la cuenta de usuario, haga doble clic en el vehículo deseado de la lista de objetos

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom.png)

2\. En la ficha del objeto, abra la pestaña «Calidad de conducción»

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_2.png)

En esta pestaña se pueden crear y modificar las reglas con las que el sistema detecta las infracciones.

## Reglas de control

En el centro de la ventana se encuentra la tabla de reglas. Cada fila es una regla independiente con la que el sistema analiza los datos que llegan del dispositivo. Si el valor cumple las condiciones establecidas, el sistema registra un evento de calidad de conducción.

Puede crear cualquier número de reglas y configurarlas según las características de su vehículo y de su equipo.

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_3.png)

### Parámetros de la regla

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Columna</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Campo</span></div></td><td colspan="1" rowspan="1"><div><span>Sensor o parámetro que se controlará. Por ejemplo, velocidad, aceleración, encendido u otro parámetro que llegue del dispositivo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Fórmula</span></div></td><td colspan="1" rowspan="1"><div><span>Expresión matemática o lógica adicional para procesar el valor antes de la comprobación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo</span></div></td><td colspan="1" rowspan="1"><div><span>Tipo del evento de calidad de conducción que se registrará cuando se cumpla la condición. El sistema utiliza el tipo para clasificar el evento y calcular los indicadores de «Ecoconducción». Se pueden usar los </span><a href="tipy-kachestva-vozhdeniya.html"><span><span>tipos</span></span></a><span> integrados o crear los propios</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Mensaje</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Texto que se mostrará en los informes al registrarse el evento. Por ejemplo: Harsh Braking o Speeding</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Mín.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor mínimo a partir del cual la regla empieza a activarse</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Máx.</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor máximo con el que el evento todavía se considera infracción. Por ejemplo, si indica el rango 132–250 km/h, la infracción se registrará cuando la velocidad esté dentro de ese rango</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Periodo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Intervalo en segundos durante el cual varias activaciones idénticas se consideran un solo evento. Por ejemplo, si para el ralentí indica 600 segundos, una nueva infracción se registrará solo 10 minutos después de la anterior</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de puntos de penalización que se asignan por el evento. Puede ser 0: en ese caso el evento se registrará, pero sin asignar puntos de penalización</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de penalización</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><a href="nastrojka-pravil-kachestva-vozhdeniya.html#Типы_штрафов"><span>Método de cálculo</span></a><span> de los puntos de penalización</span></div></td></tr></tbody></table>

### Tipos principales de control

En los informes de «Ecoconducción» se utilizan con más frecuencia cuatro tipos principales de eventos:

-   Aceleración: aceleración brusca del vehículo
    
-   Frenada: frenada brusca
    
-   Giro: maniobra brusca al tomar una curva
    
-   Velocidad: superación del umbral de velocidad establecido
    

Si es necesario, puede crear [sus propios tipos de eventos](tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:).

### Tipos de penalización

Para cada regla se puede elegir uno de tres métodos de asignación de puntos de penalización.

**Simple**

Se asigna un número fijo de puntos, indicado en el campo «Penalización».

Por ejemplo, si la penalización es 5, en cada infracción se asignarán 5 puntos.

**Ponderación**

La penalización se calcula teniendo en cuenta la gravedad de la infracción. Cuanto más supera la infracción el umbral establecido, mayor es el número final de puntos de penalización.

Este tipo se utiliza cuando es necesario tener en cuenta no solo el hecho de la infracción, sino también su gravedad.

**Multiplicador**

El número de puntos se calcula con la fórmula: Valor de la infracción × Penalización

Por ejemplo:

-   valor de la infracción: 5
    
-   penalización: 2
    

El número final de puntos de penalización será 10.

Este modo es cómodo de usar si el tamaño de la penalización debe depender de la magnitud de la infracción.

## Cómo crear una regla

Puede crear por sí mismo cualquier número de reglas de control.

Para ello:

1\. En la pestaña «Calidad de conducción», haga clic en el botón «Añadir regla» ![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_4.png)

![Configuración de las reglas de calidad de conducción](images/drex_nastrojka_pravil_kachestva_vozhdeniya_screen.png)

2\. En la tabla aparecerá una nueva fila

3\. Rellene los parámetros de la regla

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_5.png)

Indique:

1\. Campo: sensor o parámetro que se debe controlar

2\. Fórmula, si es necesario

3\. Tipo de evento: seleccione de la lista. Si no encuentra el tipo que necesita, puede [crearlo por sí mismo](tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:)

4\. Mensaje que se mostrará en los informes

5\. Valores mínimo y máximo que definen el rango en el que el evento se considera infracción

6\. Periodo de agrupación de eventos repetidos

7\. Tamaño de la penalización y tipo de penalización

Tras rellenar los parámetros, haga clic en «Guardar».

![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_6.png)

Tras guardar, la regla empezará a utilizarse en el procesamiento de los datos que llegan del dispositivo.

Para modificar una regla, cambie los parámetros necesarios en los campos correspondientes de la fila de la regla.

Para eliminar una regla, haga clic en el icono ![](images/drex_nastrojka_pravil_kachestva_vozhdeniya_custom_7.png) en la fila de la regla deseada y después guarde los cambios.

## Penalizaciones adicionales

En la parte inferior de la ventana se encuentran los ajustes de penalizaciones que se aplican independientemente de cada regla.

Están disponibles los siguientes parámetros:

-   Penalización por entrar en una geocerca prohibida: se asigna cuando el vehículo entra en una geocerca prohibida
    
-   Penalización por conductor no autorizado: se asigna si el vehículo lo conduce un conductor al que no se le permite trabajar con este objeto
    
-   Penalización por exceso de velocidad por minuto / unidad: puntos adicionales por superar el límite de velocidad establecido
    

Introduzca los valores necesarios y guarde los ajustes.

![Configuración de las reglas de calidad de conducción](images/drex_nastrojka_pravil_kachestva_vozhdeniya_screen_2.png)
