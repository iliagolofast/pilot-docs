---
title: "Configuraciones JSON adicionales de retransmisión"
---

Algunos protocolos de retransmisión admiten parámetros de configuración adicionales mediante el campo Json config. Con la configuración JSON puede modificar la composición de los datos transmitidos, utilizar valores de sensores ya procesados, cambiar el nombre de los campos, filtrar paquetes y configurar escenarios especiales de transmisión de datos.

Los parámetros admitidos dependen del protocolo de retransmisión seleccionado.

La configuración JSON se indica en el campo Json config al crear o editar una retransmisión.

![Configuraciones JSON adicionales de retransmisión](images/drex_dopolnitelnye_json_konfiguratsii_retranslyatsij_screen.png)

## Wialon Retranslator

### Transmisión de valores procesados de sensores

Permite transmitir a la retransmisión los valores de los sensores después de su procesamiento en el sistema PILOT.

Por ejemplo, se puede transmitir el valor del sensor de nivel de combustible ya con la calibración aplicada.

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "fuel_1": 135785,</span></div><div><span>&nbsp; &nbsp; "NameSensor": 228</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — lista de sensores cuyos valores deben tomarse de los sensores configurados del objeto
    
-   fuel\_1 — nombre del parámetro que se transmitirá a la retransmisión
    
-   135785 — ID del sensor del objeto en el sistema
    

El ID del sensor se puede consultar en la configuración de sensores del objeto.

Particularidades:

-   Para que los sensores de nivel de combustible funcionen correctamente, debe estar configurada la calibración.
    
-   Los valores que quedan fuera del rango de calibración se transmiten sin procesar.
    
-   Por ejemplo, en lugar de litros puede transmitirse el valor sin procesar 65530.
    

### Filtrado y procesamiento de sensores

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_use": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1370805,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1370806</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2",</span></div><div><span>&nbsp; &nbsp; "temp_01": "temp1"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; },</span></div><div><span>&nbsp; &nbsp; "temp_2": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 100,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

-   sensors\_use — permite utilizar los valores de los sensores indicados del objeto.
    
-   tags\_rewrite — permite cambiar el nombre de los parámetros antes de enviarlos.
    

Ejemplo:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temp_2": "temp2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

En este caso, el parámetro temp\_2 se enviará como temp2.

-   sensors\_filter — permite filtrar los valores de los sensores.
    

Parámetros admitidos:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tipo de datos. Actualmente se admite int</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor mínimo permitido</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor máximo permitido</span></div></td></tr></tbody></table>

Ejemplo:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_filter": {</span></div><div><span>&nbsp; &nbsp; "temp_1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 130,</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

El filtrado funciona para sensores que transmiten valores enteros.

-   sensors\_notuse — permite excluir sensores de la transmisión.
    

Ejemplo:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "sensors_notuse": {</span></div><div><span>&nbsp; &nbsp; "temp_1": 1,</span></div><div><span>&nbsp; &nbsp; "temp_2": 1</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Esta configuración excluirá los sensores indicados de los datos enviados.

<table><tbody><tr><td><span></span></td><td><div>La configuración de sensores realizada en el sistema PILOT no afecta a la retransmisión mediante este mecanismo. Todos los parámetros de transmisión deben definirse en Json config.</div></td></tr></tbody></table>

## Filtrado de paquetes

Permite no enviar los paquetes que cumplen determinadas condiciones.

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

-   packet\_filter — no envía el paquete si el parámetro indicado tiene el valor especificado.
    

Ejemplo:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "packet_filter": {</span></div><div><span>&nbsp; &nbsp; "Valid": "0"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Si el parámetro Valid es igual a 0, el paquete no se enviará.

Se pueden indicar varias condiciones.

-   keys\_to\_skip — no envía el paquete si contiene la clave indicada.
    

Ejemplo:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "keys_to_skip": [</span></div><div><span>&nbsp; &nbsp; "HardVersion"</span></div><div><span>&nbsp; ]</span></div><div><span>}</span></div></td></tr></tbody></table>

Si el paquete contiene el campo HardVersion, se omitirá.

Se pueden indicar varias claves.

## Wialon IPS y Wialon IPS v2

### Cambio de nombre de parámetros

Permite sustituir el nombre del parámetro antes de enviarlo.

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

En este ejemplo, el parámetro Vsourse se enviará como pwr\_ext.

### Transmisión de IButton en el cuerpo del paquete

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "IButton": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "tcp_box"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Principio de funcionamiento

Si para el parámetro IButton se indica el tipo tcp\_box, el valor del identificador se transmitirá en el cuerpo del paquete. Si el parámetro no existe, IButton no se añadirá al paquete y se transmitirá un valor vacío.

Esta configuración se utiliza para transmitir el identificador del conductor fuera del bloque estándar de parámetros.

### Bloque inputs

Permite generar entradas adicionales a partir de los valores de los sensores.

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "value": false,</span></div><div><span>&nbsp; &nbsp; &nbsp; "myval": false</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

### Parámetros del bloque inputs

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor mínimo permitido</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor máximo permitido</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; value</span></div></td><td colspan="1" rowspan="1"><div><span>Si se indica true, en el paquete se transmitirá el valor real del sensor. Si el parámetro no existe o se indica false, se utiliza la lógica estándar de formación del paquete</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; myval</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Permite sustituir el valor del sensor por un valor propio cuando se cumple la condición</span></div></td></tr></tbody></table>

**Ejemplo de configuración simplificada**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "inputs": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "max": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "min": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "DIN1": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "DIN1",</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Si el valor del sensor está en el rango de 1 a 1, en el paquete se transmitirá el valor 1.

El mecanismo se utiliza para duplicar el estado de los sensores en forma de bits.

Por ejemplo, para transmitir el estado de las puertas mediante el bloque inputs.

## Wialon Retranslator, Galileo y EGTS

### Cambio de nombre de campos

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0",</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Permite sustituir los nombres de los campos antes de enviarlos.

Por ejemplo:

-   temperature → galileo\_temp\_0
    
-   digital → galileo\_in\_2
    

### Almacenamiento de registros de retransmisión

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "save_data_for_report": "1"</span></div><div><span>}</span></div></td></tr></tbody></table>

Activa el almacenamiento de los datos de retransmisión para la posterior generación de informes y diagnóstico

### Generación de datos de temperatura

**Ejemplo**

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "temperature_data_generator": {</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2",</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

Esta configuración se utiliza para escenarios especiales.

Cuando se cumple la condición establecida, el sistema puede generar automáticamente los valores de los sensores de temperatura.

### Parámetros

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; DOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sensor controlado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; closed_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Valor con el que se cumple la condición</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_sensors</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lista de sensores de temperatura</span></div></td></tr></tbody></table>

Esta funcionalidad está implementada para escenarios especiales de integración y se utiliza únicamente cuando existen los requisitos correspondientes por parte del sistema receptor.
