---
title: "Consumo de combustible por CAN"
---

El informe «Consumo de combustible por CAN» muestra el consumo de combustible según los datos CAN en el período seleccionado. Con él puede comparar la cantidad de combustible consumido con el kilometraje del objeto y calcular el consumo medio por cada 100 km.

![](images/drex_raskhod_topliva_po_can_custom.png)

### Requisitos de configuración del sensor

Para que los datos se muestren en el informe, el objeto debe tener configurado un sensor de consumo de combustible por CAN.

En la configuración del sensor indique:

• Finalidad — Consumo de combustible

• Tipo — Discreto integral

• Guardar historial — la casilla debe estar activada

El sensor debe transmitir el valor acumulado del consumo de combustible. Para calcular el informe, el sistema toma el valor inicial y el final del día y calcula el consumo como la diferencia entre ambos.

Si el sensor está configurado con otra finalidad u otro tipo, o tiene desactivado el guardado del historial, es posible que los datos no aparezcan en el informe.

![](images/drex_raskhod_topliva_po_can_custom_2.png)

### Qué se muestra en el informe

• Objeto — nombre del objeto de monitoreo para el que se ha generado el informe

• Fecha — fecha para la que se muestran los datos

• Consumo — cantidad de combustible consumido en la fecha indicada

• Distancia — kilometraje del objeto en la fecha indicada

• Consumo de combustible — consumo medio de combustible por cada 100 km de recorrido

El consumo de combustible se calcula con la fórmula: (Consumo × 100 km) / Distancia

![](images/drex_raskhod_topliva_po_can_custom_3.png)
