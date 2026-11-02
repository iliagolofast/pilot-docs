---
title: "Cómo configurar los comandos de control"
---

Para que los botones «Abrir» y «Cerrar» funcionen en la aplicación, es necesario configurar las plantillas de comandos arm y disarm en el sistema PILOT.

![Cómo configurar los comandos de control](images/drex_kak_nastroit_komandy_upravleniya_screen.png)

Las plantillas de comandos se configuran en el sistema PILOT:

1\. Abra la cuenta de usuario

2\. Vaya a la sección «Principal»

3\. Pulse el icono «Comandos»

![Cómo configurar los comandos de control](images/drex_kak_nastroit_komandy_upravleniya_screen_2.png)

3\. Se abrirá una ventana en la que se pueden crear plantillas de comandos.

![](images/drex_kak_nastroit_komandy_upravleniya_custom.png)

## Cómo crear una plantilla de comando

1\. Pulse «Añadir comando»

![Cómo configurar los comandos de control](images/drex_kak_nastroit_komandy_upravleniya_screen_3.png)

2\. Seleccione el objeto para el que se crea el comando

3\. Pulse ![](images/drex_kak_nastroit_komandy_upravleniya_custom_2.png)

![](images/drex_kak_nastroit_komandy_upravleniya_custom_3.png)

3\. Indique los parámetros:

-   Tipo de comando: GRPS
    
-   Clase de comando: SMS\_VIA\_GPRS
    

![](images/drex_kak_nastroit_komandy_upravleniya_custom_4.png)

4\. En el campo «SMS» introduzca el texto del comando, por ejemplo: setdigout 0 — desactivar la vigilancia

![](images/drex_kak_nastroit_komandy_upravleniya_custom_5.png)

5\. Si es necesario, active la casilla hex, si el comando debe enviarse en formato HEX

6\. Pulse «Guardar como plantilla» y asigne un nombre

![](images/drex_kak_nastroit_komandy_upravleniya_custom_6.png)

Los nombres de las plantillas deben indicarse exactamente así:

-   arm — activar la vigilancia
    
-   disarm — desactivar la vigilancia
    
-   get\_beacon\_ids — obtener la lista de etiquetas
    
    Los nombres se escriben en minúsculas. La aplicación encuentra y ejecuta los comandos precisamente por estos nombres.
    

## Ejemplos de comandos

Activar la vigilancia — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Dispositivo</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Plantilla de comando</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Desactivar la vigilancia — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Dispositivo</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Plantilla de comando</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>

Obtener la lista de etiquetas — get\_beacon\_ids

Comando para obtener la lista de etiquetas Bluetooth registradas en el dispositivo.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Dispositivo</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Plantilla de comando</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; getparam 1600;1601;1602;1603;1604;1605;1606;1607;1608;1609;1610</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Para que los comandos funcionen correctamente:</div><div>— el dispositivo debe estar en la red</div><div>— en el sistema debe estar configurado un sensor de vigilancia, necesario para que la aplicación pueda mostrar el estado actual de la vigilancia</div></td></tr></tbody></table>

Tras configurar las plantillas, los botones «Cerrar» y «Abrir» pasarán a estar activos y podrá controlar el vehículo desde la pantalla «Estado del vehículo».
