---
title: "Tacógrafo"
---

El módulo «Tacógrafo» ayuda a supervisar y analizar el trabajo de los conductores a partir de los datos del equipo. Todos los datos llegan directamente del tacógrafo y no se pueden modificar manualmente.

Con el módulo puede seguir los estados de actividad de los conductores: conducción, descanso, trabajo y espera.

A partir de los datos de actividad usted puede:

-   saber qué carga de trabajo tiene cada conductor
    
-   comprobar si se cumple el régimen de trabajo y descanso
    
-   analizar cómo se ha cumplido realmente el horario
    

## Cómo configurar los datos para trabajar con el módulo

1\. Vaya al panel de administración, a la pestaña «Máquinas», y busque el objeto con el que trabaja el tacógrafo

2\. Haga clic con el botón derecho del ratón en el objeto seleccionado; se abrirá el menú contextual

3\. Seleccione «Editar» en el menú

![](images/drex_takhograf_2_custom.png)

4\. En la ventana de ajustes del objeto que se abre, seleccione la pestaña «Configuración».

5\. Añada la configuración del módulo con el botón  ![](images/drex_takhograf_2_custom_2.png) y pulse «Guardar»

![](images/drex_takhograf_2_custom_3.png)

## Qué sensores se necesitan

Para que el módulo muestre información fiable, en la ficha del objeto deben estar añadidos determinados sensores:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Finalidad del sensor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Qué muestra</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; &nbsp; Ejemplo de configuración del sensor</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Estado del conductor</span></div></td><td colspan="1" rowspan="1"><div><span>Posición del conmutador de modo del conductor: conducción, descanso, trabajo, espera</span></div></td><td colspan="1" rowspan="1"><div><span><img alt="" src="images/drex_takhograf_2_custom_4.png" data-full-src="drex_takhograf_2_custom_4.png" data-full-width="1012" data-full-height="740"></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de la tarjeta</span></div></td><td colspan="1" rowspan="1"><div><span>Estado de la tarjeta del conductor en la ranura (insertada o no, en uso o no)</span></div></td><td colspan="1" rowspan="1"><div><span><img alt="" src="images/drex_takhograf_2_custom_5.png" data-full-src="drex_takhograf_2_custom_5.png" data-full-width="1012" data-full-height="739"></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Modo del tacógrafo</span></div></td><td colspan="1" rowspan="1"><div><span>Cambios en los estados de funcionamiento del tacógrafo</span></div></td><td colspan="1" rowspan="1"><div><span><img alt="" src="images/drex_takhograf_2_custom_6.png" data-full-src="drex_takhograf_2_custom_6.png" data-full-width="1012" data-full-height="744"></span></div></td></tr></tbody></table>

Para más información sobre cómo añadir sensores, consulte la sección [«Sensores»](../datchiki-1/dobavlenie-datchika.html)

## Cómo ver los datos del tacógrafo

1\. En la cuenta de usuario, vaya a la sección «Tacógrafo»

2\. Seleccione el objeto que desea analizar

3\. Indique el período en el calendario: los días u horas de los que necesita los datos

4\. Pulse «Buscar»

 ![](images/drex_takhograf_2_custom_7.png)

5\. Verá un resumen de actividad: cuándo el conductor condujo, descansó, esperó o trabajó. Los datos se muestran como un informe interactivo y visual sobre el régimen de trabajo y descanso de los conductores durante el período seleccionado, desglosado por días y semanas.

![](images/drex_takhograf_2_custom_8.png)

## Cómo funciona el sistema internamente

El módulo recibe los datos directamente del tacógrafo. Son datos técnicos «en bruto» que el sistema convierte en estados comprensibles. Con estos datos se calculan los estados de actividad de los conductores: conducción, descanso y trabajo.

![](images/drex_takhograf_2_custom_9.png)

### Cómo interpretar los datos del tacógrafo

Veamos con más detalle las tablas con los datos recibidos directamente de la interfaz digital del tacógrafo, por ejemplo, a través del bus CAN u otro canal de transmisión de datos.

 Estos datos son procesados por el sistema de monitorización y ayudan a determinar:

-   Qué tarjeta de conductor estaba instalada (Tabla 1)
    
-   Qué estado tiene cada uno de los conductores (si descansa, trabaja o conduce el vehículo) y el estado actual de la tarjeta en cada ranura (Tabla 2)
    

Estos parámetros se forman como códigos y valores de bits, por lo que, para interpretarlos correctamente, debe encargarse de ello el sistema o un especialista durante la configuración del equipo.

A continuación se muestra la interpretación de estos datos según la especificación del tacógrafo.

Tabla 1

Esta tabla describe la estructura del paquete que transmite el número de identificación de la tarjeta del conductor instalada en el tacógrafo:

0x02 – tarjeta del conductor 1 o 2. El número de la tarjeta depende del tipo de evento en el que se genera este paquete.

Los códigos de los eventos para los que se genera el paquete ayudan a determinar con precisión qué tarjeta se instaló y en qué situación.

![](images/drex_takhograf_2_custom_10.png)

Tabla 2

La tabla describe un byte de datos de la interfaz del tacógrafo con el identificador ID: 98.

Este byte contiene información comprimida sobre los siguientes parámetros:

-   Actividad de cada uno de los conductores: descanso, disponibilidad para trabajar, conducción del vehículo, etc.
    
-   Estado de las ranuras de tarjeta: si hay una tarjeta instalada o no, si está autorizada o no.
    

El byte se divide en campos de bits: 8 bits en total, divididos en 4 grupos de 2 bits, cada uno de los cuales corresponde a un parámetro concreto.

![](images/drex_takhograf_2_custom_11.png)

La información de este byte ayuda a:

-   Conectar equipos externos al tacógrafo
    
-   Obtener datos precisos sobre la actividad de los conductores
    
-   Configurar el sistema para que entienda qué está haciendo exactamente el conductor
    

Por ejemplo: si el valor de los bits 0–1 es 3, el conductor n.º 1 está conduciendo el vehículo.

Además, con estos datos suelen construirse tablas de calibración. Sirven para convertir los números «en bruto» del byte de datos del tacógrafo en estados comprensibles. En lugar de ver valores «en bruto» como 2 o 3, verá «Descanso» o «Tarjeta autorizada».

 Un byte (8 bits) se divide en cuatro pares de bits: cada 2 bits corresponden a un estado:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Bits (posiciones)</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Valores</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 0–1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Actividad del conductor 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2–3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Ranura de la tarjeta del conductor 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4–5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Actividad del conductor 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 6–7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;Ranura de la tarjeta del conductor 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;0,&nbsp;1,&nbsp;2,&nbsp;3</span></div></td></tr></tbody></table>

Por ello, debe configurar tablas de calibración para convertir los valores en la actividad del conductor y el estado de la tarjeta, comprensibles para el usuario.

### Ejemplos de tablas de calibración

 Tabla de calibración «Estado del conductor». Esta tabla se utiliza para interpretar los bits 0–1 y 4–5 (actividades de los conductores).

![](images/drex_takhograf_2_custom_12.png)

Tabla de calibración «Estado de la tarjeta». Esta tabla se utiliza para los parámetros 2–3 y 6–7 (estado de las tarjetas del conductor).

![](images/drex_takhograf_2_custom_13.png)

Para saber cómo configurar una tabla de calibración, lea [aquí](../datchiki-1/dobavlenie-datchika.html#тарировочная_таблица).

## Dónde ver los informes del tacógrafo

El módulo genera un [informe de actividad de los conductores](../otchyety-1/tipy-otchyetov/takhograf-1/otchet-po-aktivnosti.html), que ayuda a controlar:

— los períodos en los que el conductor está al volante

— el tiempo de descanso, espera y trabajo

— el trabajo sin tarjeta o con una tarjeta no autorizada

— los intervalos de tiempo de cada conductor
