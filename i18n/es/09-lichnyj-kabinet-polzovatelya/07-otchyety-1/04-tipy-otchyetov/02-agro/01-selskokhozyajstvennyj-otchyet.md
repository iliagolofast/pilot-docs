---
title: "Informe agrícola"
---

El informe agrícola contiene datos sobre el trabajo de los objetos de monitoreo seleccionados y de los implementos remolcados en los campos durante el período indicado. Con él puede determinar la duración y la distancia de los trabajos realizados, calcular la superficie trabajada y analizar el consumo de combustible o de fluido de trabajo.

Los datos se agrupan por objetos, remolques y zonas. Para cada zona se muestran los períodos de trabajo individuales, y en la fila «Total por zona», los valores acumulados.

### Qué se muestra en el informe

• Inicio — fecha y hora de inicio del trabajo en la zona

• Fin — fecha y hora de finalización del trabajo

• Duración — duración del período de trabajo correspondiente

• Distancia — distancia recorrida por el objeto durante el trabajo

• Ancho — ancho de trabajo del remolque o del equipo en una pasada

• Superficie trabajada — superficie calculada a partir de la distancia recorrida y del ancho de trabajo del equipo

• Consumo de combustible — volumen de combustible consumido en el período correspondiente

• Consumo de combustible/ha — consumo de combustible por hectárea de superficie trabajada

• Ubicación inicial — dirección de inicio del trabajo

• Ubicación final — dirección de finalización del trabajo

En la fila «Total por zona» se muestran los valores acumulados de todos los períodos de trabajo en la zona correspondiente:

• duración total del trabajo

• distancia total recorrida

• superficie total trabajada

• consumo total de combustible o de fluido de trabajo

![](images/drex_selskokhozyajstvennyj_otchyet_custom.png)

### Selección del remolque

Antes de generar el informe, puede seleccionar el remolque con el que trabajó el objeto.

![](images/drex_selskokhozyajstvennyj_otchyet_custom_2.png)

Al pulsar el botón «Generar informe» se abre la ventana «Parámetros del informe», que muestra:

• Remolque — el implemento remolcado seleccionado

• Ancho — ancho de trabajo del equipo utilizado para calcular la superficie trabajada

![](images/drex_selskokhozyajstvennyj_otchyet_custom_3.png)

Si es necesario, puede cambiar el ancho antes de generar el informe. Tras la confirmación, el sistema recalculará la superficie trabajada con el valor indicado.

### Ajustes del informe

De forma predeterminada, el informe muestra los indicadores de consumo de combustible.

Con el botón «Ajustes del informe» puede seleccionar el tipo de consumo:

• Consumo de combustible (Fuel Consumption) — muestra el volumen de combustible consumido y el consumo por hectárea

• Consumo de fluido (Fluid Consumption) — muestra el volumen de fluido de trabajo consumido y el consumo por hectárea

![](images/drex_selskokhozyajstvennyj_otchyet_custom_4.png)

### Preparación del informe

El informe agrícola está disponible cuando se han conectado y configurado dos módulos:

• [Geocercas](../geozony-1/index.html) — se utiliza para crear y definir los límites de los campos trabajados

• [Remolques](../../../moduli-1/pritsepy.html) — se utiliza para registrar el equipo agrícola, vincularlo a los objetos de monitoreo y establecer el ancho de trabajo

El informe se genera cuando el vehículo se encuentra dentro de la geocerca del campo y tiene conectado un remolque con el parámetro «Agro» activado. Si los módulos no están conectados o están mal configurados, los datos de superficie trabajada no se muestran en el informe.
