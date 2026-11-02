---
title: "Informe total de trabajo"
---

El informe total de trabajo contiene indicadores de tiempo de la explotación de los objetos de monitoreo seleccionados en el período indicado. Con él puede comparar la duración del movimiento y de los estacionamientos, el tiempo de encendido y los períodos de mantenimiento, así como determinar el tiempo realmente trabajado.

![](images/drex_summarnyj_otchyet_po_rabote_custom.png)

### Qué se muestra en el informe

• Vehículo — nombre, matrícula o número de garaje del objeto de monitoreo

• Fecha — fecha y hora de inicio y fin del intervalo para el que se calculan los indicadores

• Información — datos adicionales sobre el objeto de monitoreo; si no se ha indicado información, el campo queda vacío

• Tiempo total — duración total del intervalo del informe correspondiente

• Duración del movimiento — tiempo total que el objeto estuvo en movimiento

• Tiempo de estacionamiento — duración total de los estacionamientos del objeto

• Encendido activado — tiempo total durante el cual se registró el encendido activado

• Encendido desactivado — tiempo total durante el cual el encendido estuvo desactivado

• Horario no laboral — parte del intervalo del informe que corresponde al horario no laboral según el [horario de trabajo del objeto](../../../moduli-1/kontrol-vremeni.html#Рабочее_время_объекта) configurado

• Tiempo de mantenimiento — duración de los períodos en que el objeto estuvo en mantenimiento

• Tiempo trabajado — tiempo dentro del horario de trabajo descontados los períodos de mantenimiento. Se calcula como la diferencia entre el tiempo total, el no laboral y el de mantenimiento

![](images/drex_summarnyj_otchyet_po_rabote_custom_2.png)

### Parámetro «Solo horario laboral»

Antes de generar el informe, puede activar el parámetro «Solo horario laboral». En ese caso, los indicadores se calculan solo dentro de los intervalos de trabajo establecidos en el horario del objeto.

El parámetro permite excluir del análisis las horas nocturnas, los fines de semana y otros intervalos no laborables.

![](images/drex_summarnyj_otchyet_po_rabote_custom_3.png)
