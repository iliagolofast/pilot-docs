---
title: "Cómo vincular un algoritmo a una notificación"
---

En este artículo explicamos cómo configurar el funcionamiento de los algoritmos mediante notificaciones.

Aprenderá:

— [cómo vincular un algoritmo a una notificación para que se ejecute automáticamente cuando se produzcan eventos](kak-privyazat-algoritm-k-uvedomleniyu.html#автоматическое_срабатывание_алгоритма)

— [cómo crear una notificación con un algoritmo para la generación manual de eventos](kak-privyazat-algoritm-k-uvedomleniyu.html#ручная_генерация_события)

Para que el algoritmo empiece a funcionar y a reaccionar ante los eventos, es necesario vincularlo a una notificación.

<table><tbody><tr><td><span></span></td><td><div>Para que la vinculación funcione, el contrato debe tener conectado el módulo <a href="../uvedomleniya/index.html"><span>«Notificaciones»</span></a>.</div></td></tr></tbody></table>

## Vinculación de un algoritmo a un evento

Este algoritmo se ejecutará automáticamente cuando se cumplan las condiciones y llegará al «Centro de situación».

1\. En la barra superior, haga clic en el icono ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom.png)y abra «Configuración del contrato». Vaya a la pestaña «Notificaciones».

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. Haga clic en «Añadir» ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) para crear una nueva notificación

3\. Vincule el algoritmo

1) En la ventana de configuración de la notificación, haga clic en «Vinculación de algoritmo»

![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen.png)

2) En la lista, seleccione el algoritmo que necesite

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

3) Haga clic en el algoritmo: se abrirá su esquema con los bloques

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_5.png)

4\. Configure los bloques del algoritmo

1) Haga doble clic en el bloque que necesite

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2) Complete el texto y seleccione las etiquetas de los eventos

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_7.png)

3) Haga clic en «OK»

### Cómo crear una etiqueta para un bloque

Las etiquetas ayudan a entender rápidamente la esencia del evento y a destacarlo visualmente en la lista.

Si no existe la etiqueta que necesita:

1\. En el campo «Etiqueta», haga clic en ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2\. En la ventana de etiquetas, haga clic en ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) para añadir una nueva etiqueta a la lista

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_8.png)

3\. Indique el nombre de la etiqueta y seleccione el color

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_9.png)

4\. Guarde: la etiqueta aparecerá en la lista y quedará disponible para su selección

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_10.png)

### Configuración del bloque Webhook

El bloque Webhook transmite la información del evento desde PILOT a un sistema externo, por ejemplo, un CRM, un sistema de despacho o una aplicación corporativa. La solicitud se envía cuando la ejecución del algoritmo llega a este bloque. Encontrará más información sobre el principio de funcionamiento y la configuración de las notificaciones Webhook [en este artículo](../uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html).

Si el algoritmo utiliza un bloque Webhook:

1\. Seleccione el bloque Webhook en el esquema

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_11.png)

2\. Haga doble clic en él: se abrirá su configuración

3\. Haga clic en el icono de edición junto al nombre del bloque ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_12.png)

![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_2.png)

4\. Complete los parámetros en la ventana Webhook Details

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_13.png)

**URL**

Indique la dirección del sistema externo a la que PILOT debe enviar los datos. La dirección debe obtenerla del administrador o del desarrollador del sistema receptor.

**Header (Encabezado)**

Indique los encabezados de la solicitud. De forma predeterminada se utiliza la transmisión de datos en formato JSON:

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; "ContentType: application/json"</div><div>]</div></td></tr></tbody></table>

Modifique los encabezados únicamente si el sistema receptor requiere otro formato de datos o parámetros adicionales.

**Body (Cuerpo de la solicitud)**

Indique los datos que se deben transmitir. De forma predeterminada se utiliza la siguiente plantilla:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "agent_id": "%AGENTID%",</div><div>&nbsp; "vehiclenumber": "%VEHNUM%",</div><div>&nbsp; "ts": "%TS%",</div><div>&nbsp; "lat": "%LAT%",</div><div>&nbsp; "lon": "%LON%",</div><div>&nbsp; "speed": "%SPEED%",</div><div>&nbsp; "data": "%DATA%",</div><div>&nbsp; "zone": "%ZONE%",</div><div>&nbsp; "driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

En lugar de las variables encerradas entre signos %, el sistema inserta automáticamente la información del evento. Por ejemplo, en lugar de %SPEED% se transmitirá la velocidad del objeto, y en lugar de %VEHNUM%, el número del vehículo.

El cuerpo de la solicitud se puede modificar: eliminar los campos innecesarios, añadir campos propios o utilizar otras variables disponibles.

Mantenga un formato JSON correcto:

"название\_поля": "%ПЕРЕМЕННАЯ%"

Si la estructura del JSON o la escritura de una variable contiene un error, es posible que el sistema externo no reciba o no procese la solicitud.

**Variables admitidas**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Variable</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Qué transmite</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID de la cuenta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID del objeto</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Número del vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Marca de tiempo (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fecha y hora</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitud</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitud</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Kilometraje (según el sensor)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Datos de la notificación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Geocerca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID de la primera geocerca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre de la primera geocerca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Velocidad máxima (para notificaciones de exceso)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Duración del exceso</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Límite de velocidad establecido (Control de velocidad)</span></div></td></tr></tbody></table>

El conjunto de variables disponibles puede depender del tipo de notificación. Por ejemplo, las variables %MAXSPEED%, %DUR% y %SPEEDLIMIT% están destinadas a las notificaciones de exceso de velocidad.

Después de completar los parámetros, haga clic en «Guardar» y luego confirme la configuración del bloque con el botón «OK». Si en distintas ramas del algoritmo se utilizan diferentes bloques Webhook, configure cada uno de ellos por separado.

### Configuración de la ventana de procesamiento del evento

Puede configurar el aspecto que tendrá para el operador la [ventana de procesamiento del evento](kak-obrabotat-sobytie.html#Окно_«Обработка_события»):

-   En la ventana de vinculación del algoritmo, haga clic en «Ajustes»
    

![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_3.png)

2\. Haga clic en ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) para añadir elementos:

![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_4.png)  
Qué se puede configurar:

-   Tipo de elemento: tipo de bloque (por ejemplo, plaintext: texto normal)
    
-   Encabezado: nombre del bloque
    
-   Texto: información para el operador
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_14.png)

Por ejemplo:

1\. Añada una fila de tipo plaintext

2\. En el campo «Encabezado», escriba de qué bloque se trata (por ejemplo: «Información del evento»)

3\. En el campo «Texto», añada la información que el operador debe ver (por ejemplo: «Compruebe la temperatura en la caja y comuníquese con el conductor»).

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_15.png)

Para añadir una sección con información sobre el vehículo, haga clic en el icono del automóvil. Aparecerá un nuevo bloque de tipo vehicle, en el que se pueden configurar el encabezado y el texto.

![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_5.png)

1 — Añadir información del vehículo. Para añadir una sección con los datos del conductor, haga clic en el icono de la licencia de conducir. Aparecerá un nuevo bloque de tipo driver. En este bloque se pueden definir el encabezado y el texto.

2 — Añadir información del conductor

Después de configurarlo, haga clic en «OK»: el operador verá el formulario exactamente con este aspecto al procesar el evento.

## Finalización de la configuración de la notificación

-   En la ventana «Configuración de notificaciones» indique:
    
-   Nombre de la notificación
    
-   Objeto
    
-   Tipo de notificación: Control room (GARM)
    

-   [Grupo](kak-nastroit-parametry-sobytij.html#группы_событий)
    
-   Condiciones de la notificación (por ejemplo, el parámetro «Temperatura» y su umbral)
    

**![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_6.png)**

2\. Haga clic en «Guardar»

**![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_16.png)**

3\. La notificación con el algoritmo vinculado aparecerá en la lista y llegará al «Centro de situación» cuando se cumplan las condiciones

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_17.png)

## Algoritmo para la generación manual de eventos

La generación manual es necesaria cuando el evento no llega automáticamente, por ejemplo, en situaciones excepcionales, pruebas o cuando el operador registra un evento manualmente.

### Cómo crear una notificación para la generación manual

1\. Abra la [«Configuración del contrato»](../../nastrojki-dogovora-2/index.html) y seleccione la pestaña «Notificaciones»

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. En la pestaña «Notificaciones», haga clic en ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

3\. En la configuración de la notificación, indique:

![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_7.png)

1 — Tipo de notificación «Centro de situación» (GARM)

2 — Notificación solo para generación manual

-   Objeto
    
-   Nombre de la notificación
    
-   Tipo de notificación: Centro de situación (GARM)
    
-   Grupo
    
-   La casilla «Solo para generación manual»
    
    4\. Haga clic en «Vinculación de algoritmo»
    
    5\. En la ventana de algoritmos que se abre, seleccione el que desee vincular a la notificación y haga clic en «OK»
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

5\. Guarde la notificación

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_18.png)

### Cómo generar un evento manualmente

1\. Seleccione el objeto en la lista principal

2\. Haga clic derecho sobre él y seleccione «Generar evento»

![Cómo vincular un algoritmo a una notificación](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_8.png)

3\. Seleccione el tipo de notificación para la generación manual e introduzca el texto del evento

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_19.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_20.png)

4\. El evento aparecerá en el [panel](kak-obrabotat-sobytie.html#Панель_Control_room) «Centro de situación» y se procesará según el algoritmo
