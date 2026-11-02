---
title: "Teltonika FOTA. Conexión al sistema"
---

El sistema tiene implementada la integración con FOTA de la empresa Teltonika.

Esta integración permite configurar los dispositivos Teltonika desde la interfaz del sistema PILOT.

Esta función puede activarse tanto para un socio como para una cuenta (contrato) concreta.

**Activación de Teltonika FOTA WEB en** PILOT

Para gestionar de forma remota la configuración de los dispositivos Teltonika desde la plataforma PILOT es necesario activar la integración; para ello siga estos pasos.

<table><tbody><tr><td><span></span></td><td><div><span>1. Inicie sesión con su cuenta en Teltonika FOTA WEB <strong>(</strong></span><a href="https://fm.teltonika.lt/"><span><strong>https://fm.teltonika.lt</strong></span></a><span><strong>)</strong></span></div><div><span>2. Genere y copie la API Key.</span></div></td></tr></tbody></table>

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom.png)

3.Introduzca un nombre cualquiera para el API Token y pulse el botón Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_2.png)

4\. Introduzca un nombre cualquiera para el API Token y pulse el botón Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_3.png)

5\. Copie el valor del token generado.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_4.png)

Abra los ajustes de su cuenta en el panel de administración y añada allí un nuevo registro

Abra la sección "Configuración" y añada la clave **fotaTokens**.

Formato y valor de la clave fotaTokens: {"<Name>":"<Key>","<Name1>":"<Key1>","<NameN>":"<KeyN>"}

<Name> - nombre cualquiera

<Key> - API Key obtenida en la interfaz de Teltonika FOTA

Puede indicar más de una clave separadas por comas.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_5.png)
