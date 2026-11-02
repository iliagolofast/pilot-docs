---
title: "Directorio de configuraciones"
---

En este artículo veremos las configuraciones disponibles en el sistema y su finalidad. 

**Añadir nuevos automóviles permitidos a las notificaciones**

Para que los nuevos automóviles permitidos se añadan automáticamente a las notificaciones, es necesario establecer esta configuración en la cuenta de usuario. Esta función está pensada para objetos de mapeo

(es decir, objetos de otros contratos).

<table><tbody><tr><td><span></span></td><td><div><span>Configuración </span><span><strong>Confirm adding vehicles to notifications</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom.png)

**Ajuste para ocultar la información del dispositivo**

<table><tbody><tr><td><span></span></td><td><div><span>Configuración&nbsp; <strong>hide_device</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_2.png)

**Período gratuito para el socio**

Está pensado para el período de prueba del sistema.

<table><tbody><tr><td><span></span></td><td><div><span>Configuración&nbsp; </span><span><strong>Partner Grace Period (days)</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_3.png)

**Añadir la columna "Dirección" en el árbol de objetos**

Para mostrar la dirección en la pestaña En línea, debe añadir la siguiente configuración en los ajustes del contrato.

<table><tbody><tr><td><span></span></td><td><div><span>Configuración =&nbsp; </span><strong>Address in Online Tree</strong></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_4.png)

**Bloqueo del socio con saldo negativo tras 5 días**

Siempre que el socio tenga el tipo de cuenta prepago y el saldo sea menor o igual a cero (teniendo en cuenta el depósito).

Si el socio está en el sistema, durante 5 días, cada 3 horas, aparecerá en el panel de administración un cuadro de diálogo con una advertencia.

**![](images/drex_spravochnik_konfiguratsij_custom_5.png)**

El 5.º día, si el socio está en el sistema, la sesión se cerrará automáticamente y el socio será redirigido a la página de inicio de sesión.

El socio no podrá entrar en el panel de administración.

![](images/drex_spravochnik_konfiguratsij_custom_6.png)

Ventana para añadir una alerta.

Después de recargar el saldo, el socio puede acceder al sistema.

![](images/drex_spravochnik_konfiguratsij_custom_7.png)

 **Un solo conductor**

Vincular un solo conductor al objeto al crear un nuevo conductor o al actualizar uno existente.

<table><tbody><tr><td><span></span></td><td><div><span>Configuración <strong>single_driver = true </strong>para la cuenta.</span></div></td></tr></tbody></table>

Cuando creamos un conductor o actualizamos un registro existente y vinculamos el conductor a un vehículo, o si ese vehículo concreto ya tiene un conductor vinculado, primero se desvincula automáticamente el conductor anterior y después se vincula el nuevo.

![](images/drex_spravochnik_konfiguratsij_custom_8.png)

**Mostrar la transmisión de vídeo en una pestaña nueva**

Para mostrar la transmisión de vídeo en una pestaña nueva, es necesario añadir al contrato una configuración con el valor true, en los ajustes del módulo.

Para desactivar la configuración, hay que escribir false.

-   Active el módulo CMS.
    
-   Vaya a la pestaña de ajustes del módulo.
    
-   Añada el registro **open\_in\_new\_tab**
    

![](images/drex_spravochnik_konfiguratsij_custom_9.png)

Al pulsar el icono de cámara en la interfaz de usuario, la transmisión se abre en una pestaña nueva mediante el enlace.

Al pulsar el icono de cámara y seleccionar un período de fechas, aparecerá el historial de grabación de las cámaras de vigilancia.

![](images/drex_spravochnik_konfiguratsij_custom_10.png)

**Marca blanca para la autenticación de dos factores TOTP**

<table><tbody><tr><td><span></span></td><td><div><span>Configuración&nbsp; </span><span><strong>TOTP Label = name</strong></span></div></td></tr></tbody></table>

Sirve para cambiar el nombre de la empresa en el icono cuando al cliente le llegan los códigos para iniciar sesión en la cuenta.

![](images/drex_spravochnik_konfiguratsij_custom_11.png)

![](images/drex_spravochnik_konfiguratsij_custom_12.png)

**Visibilidad de todas las tarifas**

<table><tbody><tr><td><span></span></td><td><div><span>Configuración&nbsp; </span><span><strong>Only private prices = 1</strong></span></div></td></tr></tbody></table>

 Las tarifas se pueden ocultar mediante la configuración en los ajustes del socio.

![](images/drex_spravochnik_konfiguratsij_custom_13.png)

Configuración para esta ventana, visibilidad en los ajustes del contrato.

![](images/drex_spravochnik_konfiguratsij_custom_14.png)

**Módulo de Analítica (Panel): pestaña de inicio.**

La configuración sirve para mostrar el Panel de Analítica al cargar la interfaz por primera vez.

<table><tbody><tr><td><span></span></td><td><div><span>Configuración&nbsp; </span><span><strong>Main Tab = dashboard</strong></span></div></td></tr></tbody></table>

**![](images/drex_spravochnik_konfiguratsij_custom_15.png)**

La pestaña se muestra en la interfaz de usuario como pestaña de inicio.

**![](images/drex_spravochnik_konfiguratsij_custom_16.png)**

<table><tbody><tr><td><span></span></td><td><div><span>Configuración = <strong>additional_fields</strong> para el módulo de tarjetas de combustible&nbsp; en la cuenta.</span></div><div>&nbsp;</div></td></tr></tbody></table>

De forma predeterminada las columnas están ocultas y el usuario puede mostrarlas en la pestaña de transacciones. Según el tipo de su cuenta de combustible, los campos para configurar pueden ser distintos.

![](images/drex_spravochnik_konfiguratsij_custom_17.png)

<table><tbody><tr><td><span></span></td><td><div><span>Configuración<strong> Low Ballance Emails</strong> = </span><a href="mailto:s@pilot-telematics.com,"><span>s@pilot-telematics.com</span></a><span> (se pueden indicar varias direcciones)</span></div></td></tr></tbody></table>

La configuración sirve para elegir las cuentas de las que se deben recibir notificaciones de saldo bajo. Indique en los ajustes las direcciones de correo electrónico necesarias para las notificaciones.

![](images/drex_spravochnik_konfiguratsij_custom_18.png)

<table><tbody><tr><td><span></span></td><td><div><span>Configuración </span><span><strong>Maps</strong> =&nbsp;{"default": "Google Sat", "hidden":&nbsp;["OSM"]}</span></div></td></tr></tbody></table>

La configuración para un contrato o un socio permite gestionar la visibilidad de los mapas y establecer el mapa predeterminado

(Yandex, Google, OSM).

![](images/drex_spravochnik_konfiguratsij_custom_19.png)

![](images/drex_spravochnik_konfiguratsij_custom_20.png)

<table><tbody><tr><td><span></span></td><td><div><span>Configuración <strong>Link to manual&nbsp; = </strong></span><a href="https://doc.pilot-gps.ru"><span>https://doc.pilot-gps.ru</span></a></div></td></tr></tbody></table>

La configuración permite a los usuarios cargar en el sistema sus propios materiales de formación y manuales de usuario.

Los documentos cargados estarán disponibles para su consulta en cualquier momento, lo que proporciona un acceso cómodo a las instrucciones sobre las funciones de Pilot.

Los usuarios pueden encontrar fácilmente los materiales necesarios y utilizarlos para obtener información y ayuda sobre los distintos aspectos del trabajo con el sistema.

![](images/drex_spravochnik_konfiguratsij_custom_21.png)

![](images/drex_spravochnik_konfiguratsij_custom_22.png)

<table><tbody><tr><td><span></span></td><td><div>Configuración <strong>Telegram bot</strong></div></td></tr></tbody></table>

Para añadir un acceso rápido al bot de Telegram desde la cuenta de usuario, utilice la configuración Telegram bot.

 En el campo de valor indique la dirección del bot, por ejemplo: @PilotGpsBot.

![](images/drex_spravochnik_konfiguratsij_custom_23.png)

Después de guardar, en la cuenta de usuario, en el menú de ajustes adicionales, aparecerá una pestaña independiente con un enlace para acceder al bot de Telegram.

![](images/drex_spravochnik_konfiguratsij_custom_24.png)
