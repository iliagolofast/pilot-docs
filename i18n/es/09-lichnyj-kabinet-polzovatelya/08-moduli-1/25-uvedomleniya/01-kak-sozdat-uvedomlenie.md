---
title: "Cómo crear una notificación"
---

Tras activar el módulo «Notificaciones», en los ajustes del contrato aparece una nueva pestaña «Notificaciones».

Mediante esta pestaña se pueden configurar los eventos en los que el sistema enviará notificaciones a los usuarios.

<table><tbody><tr><td><div>1. Vaya a <a href="../../nastrojki-dogovora-2/index.html" target="_blank"><span>«Ajustes del contrato»</span></a><span> y a</span>bra la pestaña «Notificaciones</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Cómo crear una notificación](images/drex_kak_sozdat_uvedomlenie_screen.png)

<table><tbody><tr><td><div>2. Haga clic en el botón <img alt="" src="images/drex_kak_sozdat_uvedomlenie_custom.png"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

3\. Se abrirá la ventana de configuración de la notificación

![Cómo crear una notificación](images/drex_kak_sozdat_uvedomlenie_screen_2.png)

## Parámetros principales de la notificación

<table><tbody><tr><td><div><strong>1. Plantilla</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Seleccione una plantilla de notificación si desea utilizar una configuración ya preparada.

![](images/drex_kak_sozdat_uvedomlenie_custom_2.png)

La plantilla se crea después de configurar la notificación: para ello rellene todos los parámetros y haga clic en [«Guardar como plantilla»](kak-sozdat-uvedomlenie.html#Сохранить_как_шаблон). Después se podrá utilizar de nuevo.

<table><tbody><tr><td><div><strong>2. Selección por objetos o etiquetas</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Indique a qué objetos se aplicará la notificación:

-   Por objetos: seleccione vehículos o equipos concretos
    
-   Por etiquetas (tags): utilice esta opción si necesita aplicar la notificación a un grupo de objetos a la vez
    

![](images/drex_kak_sozdat_uvedomlenie_custom_3.png)

<table><tbody><tr><td><div><strong>3. Tipo y nombre</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Establezca el nombre de la notificación: le ayudará a encontrarla rápidamente en la lista y a entender de qué evento se encarga.

![](images/drex_kak_sozdat_uvedomlenie_custom_4.png)

Seleccione la forma en que desea recibir las notificaciones:

-   SMS: mensaje al teléfono
    
-   Push: notificación en la aplicación móvil
    
-   Email: correo electrónico
    
-   Alert: [notificación emergente en la interfaz](kak-prosmatrivat-uvedomleniya.html) del sistema
    
-   Control Room: el evento se mostrará en el [«Centro de situación»](../situatsionnyj-tsentr-2/kak-obrabotat-sobytie.html)
    
-   [Webhook](kak-rabotat-s-webhook-uvedomleniyami.html): envío de datos a un servicio externo
    
-   Comando al dispositivo: envío de un comando al rastreador
    
-   Plantilla de comando: envío al dispositivo de un [comando por plantilla](../komandy-1.html) configurado previamente
    
-   Telegram: notificación mediante el [bot de Telegram](../../../mobilnye-prilozheniya/telegram-bot/index.html)
    

<table><tbody><tr><td><span></span></td><td><div>Para recibir notificaciones por correo electrónico, <a href="kak-nastroit-poluchenie-uvedomlenij.html" target="_blank"><span>confirme</span></a> previamente su dirección de correo en los ajustes personales.</div></td></tr></tbody></table>

Si es necesario, puede establecer un texto alternativo del mensaje: se enviará cuando se active la notificación.

Si tiene conectado el módulo «Centro de situación» (Control Room), estará disponible el botón [«Asociación de algoritmo»](../situatsionnyj-tsentr-2/kak-privyazat-algoritm-k-uvedomleniyu.html). Con él se pueden configurar escenarios automáticos de tratamiento de eventos, por ejemplo, definir la secuencia de acciones que se ejecutará cuando ocurra un evento determinado.

<table><tbody><tr><td><div><strong>4. Hora de la notificación</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

En el bloque «Hora de la notificación» se pueden establecer las condiciones en las que funcionará la notificación:

— seleccionar la zona horaria

— indicar los días de la semana

— establecer los intervalos de tiempo

![](images/drex_kak_sozdat_uvedomlenie_custom_5.png)

<table><tbody><tr><td><div><strong>5. Información adicional</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Marque los parámetros necesarios: se añadirán al texto de la notificación:

— velocidad de marcha

— conductor del objeto

— geocerca en la que se encuentra el objeto (si está conectado el módulo [«Geocercas»](../geozony-2/index.html))

— enlace al mapa (Google)

— enlace directo al evento

— dirección del evento

El enlace directo al evento abre el objeto directamente en el mapa desde la notificación. Tras acceder, verá la posición actual del objeto y sus parámetros principales.

![](images/drex_kak_sozdat_uvedomlenie_custom_6.png)

El enlace es válido durante un tiempo limitado, después del cual deja de estar disponible.

![](images/drex_kak_sozdat_uvedomlenie_custom_7.png)

<table><tbody><tr><td><div><strong>6. Tipos y condiciones de las notificaciones</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Al crear la notificación, seleccione en qué evento debe activarse.

![](images/drex_kak_sozdat_uvedomlenie_custom_8.png)

 Por ejemplo:

— exceso de velocidad

— activación de sensores

— estacionamiento o movimiento

— pérdida de conexión

— otros eventos del sistema

Para cada tipo de notificación se establecen sus propias condiciones de activación. Por ejemplo:

— umbral de velocidad

— duración del evento

Encontrará más información sobre los tipos y condiciones de las notificaciones en un [artículo](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html) aparte.

<table><tbody><tr><td><div><strong>7. Parámetros de geocercas</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Este ajuste está disponible si está conectado el módulo&nbsp;<a href="../geozony-2/index.html"><span>«Geocercas»</span></a>.</div></td></tr></tbody></table>

En los ajustes de la notificación puede indicar en qué geocercas debe activarse la notificación.

![](images/drex_kak_sozdat_uvedomlenie_custom_9.png)

Para ello, seleccione una o varias geocercas de la lista o marque todas a la vez con el botón ![](images/drex_kak_sozdat_uvedomlenie_custom_10.png).

A continuación, seleccione dónde exactamente debe activarse la notificación:

-   En todas partes: la notificación llegará independientemente de dónde se encuentre el objeto
    
-   En las zonas seleccionadas: la notificación llegará solo si el objeto se encuentra dentro de las geocercas marcadas
    
-   Fuera de las zonas seleccionadas: la notificación llegará solo si el objeto se encuentra fuera de las geocercas marcadas
    

<table><tbody><tr><td><div>Después de configurar todos los parámetros de la notificación, haga clic en «Guardar».</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![Cómo crear una notificación](images/drex_kak_sozdat_uvedomlenie_screen_3.png)

<table><tbody><tr><td><div>Si desea guardar la notificación configurada como plantilla para usarla después al configurar una nueva notificación, haga clic en «Guardar como plantilla».</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><div>Si activa el parámetro «Para todos los usuarios», la notificación se enviará a todos los usuarios de la cuenta.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Todas las notificaciones creadas se muestran en la pestaña «Notificaciones» de los «Ajustes del contrato». Cómo trabajar con esta pestaña se explica en el artículo [«Cómo trabajar con la lista de notificaciones»](kak-rabotat-so-spiskom-uvedomlenij.html).

![](images/drex_kak_sozdat_uvedomlenie_custom_11.png)

<table><tbody><tr><td><span></span></td><td><div>Vea un <a href="https://youtu.be/O4y0YhNp6b4"><span>ejemplo de configuración de notificaciones</span></a> en un breve vídeo de YouTube:</div><div><div><a href="https://youtu.be/O4y0YhNp6b4" title="560_315">https://youtu.be/O4y0YhNp6b4</a></div></div></td></tr></tbody></table>
