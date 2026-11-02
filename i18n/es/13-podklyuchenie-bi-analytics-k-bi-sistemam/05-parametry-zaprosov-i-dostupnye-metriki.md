---
title: "Parámetros de las solicitudes y métricas disponibles"
---

Al realizar solicitudes a BI Analytics API es necesario especificar los parámetros que determinan qué datos obtener y en qué formato devolverlos.

Además de los parámetros de la solicitud, es necesario elegir las métricas, es decir, los indicadores que se incluirán en el resultado. Son ellas las que determinan qué datos devolverá la API, por ejemplo, kilometraje, consumo de combustible, número de viajes o infracciones de conducción ecológica.

## Parámetros principales de la solicitud

Los parámetros de la solicitud determinan la fuente de datos, la forma de agruparlos y las condiciones adicionales de selección.

### source

El campo source determina con qué datos se genera la selección.

Valores disponibles:

-   vehicle: datos de vehículos
    
-   driver: datos de conductores
    

### group\_by

El campo group\_by determina cómo se agrupa el resultado.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Valor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Qué muestra</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Ejemplo de estructura de la respuesta</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; total</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Suma de todos los vehículos o conductores durante el período</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "metric": 123 }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Suma de todos los vehículos o conductores por cada día</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { "20260301": { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cada fuente, total del período</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "metric": 123 } }</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source_day</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cada fuente, cada día</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; { source_id: { "20260301": { "metric": 123 } } }</span></div></td></tr></tbody></table>

### ACCOUNT\_ID

El parámetro ACCOUNT\_ID permite limitar la exportación a los datos de un solo contrato.

Si la solicitud incluye el nombre de usuario y la contraseña de una cuenta de socio, sin ACCOUNT\_ID el sistema exporta todos los vehículos de todos los contratos disponibles para ese socio.

Si se indica ACCOUNT\_ID en la solicitud, solo se cargarán los objetos del contrato seleccionado.

## Métricas disponibles

Las métricas determinan qué indicadores devolverá la API. Se transmiten en el parámetro metrics en forma de lista.

Por ejemplo:

<table><tbody><tr><td><span></span></td><td><div><span>metrics = [</span></div><div><span>&nbsp; &nbsp; "veh_driving_dist",</span></div><div><span>&nbsp; &nbsp; "veh_fuel_cons",</span></div><div><span>&nbsp; &nbsp; "average_speed"</span></div><div><span>]</span></div></td></tr></tbody></table>

A continuación se muestra la lista de métricas compatibles.

### Vehículos: general

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de viajes</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Kilometraje (km)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo en movimiento</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo de estacionamiento</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_ignition_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo con el encendido activado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo de ralentí</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_motor_hours</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Horas de motor</span></div></td></tr></tbody></table>

### Vehículos: combustible

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Consumo de combustible</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Combustible repostado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Combustible drenado</span></div></td></tr></tbody></table>

### Vehículos: infracciones

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por conducción ecológica</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de infracciones de conducción ecológica</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por aceleraciones bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de aceleraciones bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por frenadas bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de frenadas bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por giros bruscos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de giros bruscos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por exceso de velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de excesos de velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por no usar el cinturón de seguridad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de infracciones de cinturón</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por ralentí</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_idle_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de infracciones de ralentí</span></div></td></tr></tbody></table>

### Vehículos: costos

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_fuel_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Costo de combustible por km</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_service_cost_per_kilometer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Costo de mantenimiento por km</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_amount_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Gastos totales</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;cost_of_using</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Costo de uso</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;average_speed</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Velocidad media</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh_cars_counter</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de vehículos</span></div></td></tr></tbody></table>

### Conductores

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_trips_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de viajes</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_dist</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Kilometraje (km)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_driving_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo en movimiento</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_parking_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tiempo de estacionamiento</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_cons</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Consumo de combustible</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_filled</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Combustible repostado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_fuel_drained</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Combustible drenado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por conducción ecológica</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_eco_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de infracciones de conducción ecológica</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por aceleraciones bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_acc_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de aceleraciones bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por frenadas bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_braking_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de frenadas bruscas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por giros bruscos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_turn_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de giros bruscos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por exceso de velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_speed_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de excesos de velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_fine</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Penalización por no usar el cinturón de seguridad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; drv_belt_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número de infracciones de cinturón</span></div></td></tr></tbody></table>

### Métricas para tipos individuales de eventos eco

Para obtener datos de tipos individuales de eventos de [Conducción ecológica](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/index.html) se utilizan métricas con el siguiente formato:

-   eco\_{N}\_fine — — número de puntos de penalización por tipo de evento
    
-   eco\_{N}\_cnt— número de eventos registrados de este tipo
    

Aquí N es el identificador (ID) del tipo de evento de calidad de conducción.

Cada tipo de evento tiene su propio ID único, que el sistema asigna automáticamente al crearlo. Este identificador se utiliza en la API para formar los nombres de las métricas.

Por ejemplo, en el [catálogo de tipos](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения) de calidad de conducción, los eventos estándar pueden tener los siguientes identificadores:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ID</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Tipo de evento</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Turn</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Seat Belt</span></div></td></tr></tbody></table>

![](images/drex_parametry_zaprosov_i_dostupnye_metriki_custom.png)

Si en el sistema [se han creado tipos de eventos propios](../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:), también se les asignan automáticamente ID únicos.

Al formar la solicitud, en lugar de N debe indicarse el ID del tipo de evento deseado.

### Ejemplos

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetro</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Qué devuelve</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_1_fine / eco_1_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Puntos de penalización y número de eventos Acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_2_fine / eco_2_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Puntos de penalización y número de eventos Braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; eco_4_fine / eco_4_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Puntos de penalización y número de eventos Speed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;eco_5_fine / eco_5_cnt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Puntos de penalización y número de eventos Seat Belt</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Los identificadores de los tipos de eventos pueden consultarse <a href="../lichnyj-kabinet-polzovatelya/moduli-1/ehkodrajving-kachestvo-vozhdeniya/tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения"><span>en el catálogo «Tipos de calidad de conducción»</span></a>. El valor se muestra en la columna ID. Al crear un nuevo tipo, el sistema le asigna automáticamente un identificador único, que luego se utiliza en las métricas de BI Analytics API.</div></td></tr></tbody></table>
