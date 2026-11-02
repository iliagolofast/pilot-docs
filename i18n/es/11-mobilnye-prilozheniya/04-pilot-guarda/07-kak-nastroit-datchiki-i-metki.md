---
title: "Cómo configurar sensores y etiquetas"
---

La aplicación PILOT Guarda puede mostrar información detallada sobre el estado del vehículo: carga de la batería, nivel de combustible, temperatura y otros parámetros.

Para que estos datos aparezcan en la aplicación, es necesario hacer previamente lo siguiente:

— [configurar los sensores](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) en el sistema PILOT

— asignarles [etiquetas](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html) (tags)

La etiqueta (tag) es un nombre único que se asigna a un sensor en el sistema de monitoreo. Gracias a las etiquetas, la aplicación entiende qué sensor se encarga de qué y muestra correctamente la información en la pantalla.

## Qué sensores se pueden conectar

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Tag</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Qué muestra</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_main_battery</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Carga de la batería del vehículo. Por lo general, es la tensión de alimentación en el dispositivo de monitoreo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_lock_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de bloqueo del motor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_fuel_level</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nivel de combustible</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Temperatura del motor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_flat_cable_fault_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de avería del cable plano</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_temperature</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Temperatura en el habitáculo del vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_on_board_humidity</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Humedad en el habitáculo del vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_1_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de la salida 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_2_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de la salida 2</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_output_3_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado de la salida 3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; garm_engine_status</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estado del contacto</span></div></td></tr></tbody></table>

## Cómo configurar los sensores

Los sensores se configuran en el sistema PILOT:

1\. Abra la cuenta de usuario

2\. Seleccione el objeto que necesite. Haga clic derecho para abrir el menú del objeto

3\. Vaya a la pestaña «Sensores»

![](images/drex_kak_nastroit_datchiki_i_metki_custom.png)

4\. [Cree un nuevo sensor](../../lichnyj-kabinet-polzovatelya/datchiki-1/dobavlenie-datchika.html) o abra uno existente

![](images/drex_kak_nastroit_datchiki_i_metki_custom_2.png)

5\. Indique la etiqueta (tag) que necesite de la lista anterior

Es precisamente por la etiqueta como la aplicación entiende qué datos debe mostrar en la pantalla «Estado del vehículo».

Por ejemplo:

— si al sensor de temperatura se le asigna la etiqueta garm\_on\_board\_temperature, en la aplicación se mostrará la temperatura en el habitáculo del vehículo

![](images/drex_kak_nastroit_datchiki_i_metki_custom_3.png)

— si al sensor de alimentación externa se le asigna la etiqueta garm\_main\_battery, en la aplicación se mostrará la carga de la batería del vehículo

![](images/drex_kak_nastroit_datchiki_i_metki_custom_4.png)

— si al sensor de contacto se le asigna la etiqueta garm\_engine\_status, en la aplicación se mostrará el estado del motor: encendido o apagado

![](images/drex_kak_nastroit_datchiki_i_metki_custom_5.png)

Si la etiqueta que necesita no está en la lista, primero [créela](../../lichnyj-kabinet-polzovatelya/datchiki-1/metki-datchikov.html) y después asígnela al sensor.

![](images/drex_kak_nastroit_datchiki_i_metki_custom_6.png)

6\. Guarde los cambios

Después, los datos del sensor comenzarán a mostrarse en la aplicación móvil, en la pantalla «Estado del vehículo».

![Cómo configurar sensores y etiquetas](images/drex_kak_nastroit_datchiki_i_metki_screen.png)

<table><tbody><tr><td><div><span>1 — Tensión de la batería del vehículo</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div><span>2 — Estado del contacto</span></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Cómo configurar sensores y etiquetas](images/drex_kak_nastroit_datchiki_i_metki_screen_2.png)

<table><tbody><tr><td><div>1 — Nivel actual de combustible en el depósito</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>2 — Temperatura en el habitáculo</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Qué otros parámetros pueden mostrarse en la aplicación en el resumen del vehículo:

-   Saldo: estado de la tarjeta SIM del dispositivo de monitoreo
    
-   Temperatura: temperatura del motor
    
-   Estado de las puertas: abiertas o cerradas
    
-   Estado de los faros: encendidos o apagados
    
-   Estado de la vigilancia: activada o desactivada
