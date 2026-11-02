---
title: "Cómo activar la vigilancia de un objeto"
---

Para activar la vigilancia de un objeto, este debe tener configurado un [sensor de seguridad](../../lichnyj-kabinet-polzovatelya/datchiki-1/tipy-datchikov/index.html). Si el sensor está configurado, en el menú del objeto aparecerá la opción «Activar vigilancia».

# ![](images/drex_kak_postavit_obekt_na_okhranu_custom.png)   ![](images/drex_kak_postavit_obekt_na_okhranu_custom_2.png)

Además, para que la función opere, en el sistema deben estar creadas plantillas de comandos con los nombres arm y disarm. [Configúrelas](kak-postavit-obekt-na-okhranu.html#Как_настроить_шаблоны_команд) con antelación en la interfaz web y aparecerán los comandos para activar la vigilancia:

-   Arm: activar la vigilancia
    
-   Disarm: desactivar la vigilancia
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_3.png)  ![](images/drex_kak_postavit_obekt_na_okhranu_custom_4.png)

Al cambiar el estado de vigilancia, junto al objeto en la lista aparecerá el icono correspondiente:

![](images/drex_kak_postavit_obekt_na_okhranu_custom_5.png) — objeto con vigilancia activada

![](images/drex_kak_postavit_obekt_na_okhranu_custom_6.png) — objeto con vigilancia desactivada

![Cómo activar la vigilancia de un objeto](images/drex_kak_postavit_obekt_na_okhranu_screen.png)  ![Cómo activar la vigilancia de un objeto](images/drex_kak_postavit_obekt_na_okhranu_screen_2.png)

## Cómo configurar las plantillas de comandos

Las plantillas de comandos se configuran en la interfaz web de PILOT:

1\. Abra la cuenta de usuario

2\. Vaya a la sección «Principal»

3\. Pulse el icono «Comandos»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_7.png)

3\. Se abrirá una ventana en la que se pueden crear plantillas de comandos.

![](images/drex_kak_postavit_obekt_na_okhranu_custom_8.png)

### Cómo crear una plantilla de comando

1\. Pulse «Añadir comando»

![](images/drex_kak_postavit_obekt_na_okhranu_custom_9.png)

2\. Seleccione el objeto para el que se crea el comando

3\. Pulse ![](images/drex_kak_postavit_obekt_na_okhranu_custom_10.png)

![](images/drex_kak_postavit_obekt_na_okhranu_custom_11.png)

3\. Indique los parámetros:

-   Tipo de comando: GRPS
    
-   Clase de comando: SMS\_VIA\_GPRS
    

![](images/drex_kak_postavit_obekt_na_okhranu_custom_12.png)

4\. En el campo «SMS» introduzca el texto del comando, por ejemplo: setdigout 0 — desactivar la vigilancia

![](images/drex_kak_postavit_obekt_na_okhranu_custom_13.png)

5\. Si es necesario, active la casilla hex, si el comando debe enviarse en formato HEX

6\. Pulse «Guardar como plantilla» y asigne un nombre

![](images/drex_kak_postavit_obekt_na_okhranu_custom_14.png)

Los nombres de las plantillas deben indicarse exactamente así:

-   arm — activar la vigilancia
    
-   disarm — desactivar la vigilancia
    
    Los nombres se escriben en minúsculas. La aplicación encuentra y ejecuta los comandos precisamente por estos nombres.
    

## Ejemplos de comandos

Activar la vigilancia — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Dispositivo</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Plantilla de comando</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

Desactivar la vigilancia — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Dispositivo</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>Plantilla de comando</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>
