---
title: "Bloqueo del motor"
---

El módulo de bloqueo del motor permite controlar de forma remota el bloqueo y desbloqueo del vehículo a través del sistema.

<table><tbody><tr><td><span></span></td><td><div>Para que la función opere, el automóvil debe tener instalado un relé de bloqueo especial.</div></td></tr></tbody></table>

## Cómo conectar el módulo

La configuración se realiza en el panel de administración, a nivel de contrato.

1\. Abra la ficha del contrato

2\. Con el botón derecho del ratón abra el menú del contrato y seleccione «Editar»

![](images/drex_blokirovka_dvigatelya_custom.png)

3\. Vaya a la pestaña «Módulos»

4\. Active el módulo de bloqueo del motor

![Bloqueo del motor](images/drex_blokirovka_dvigatelya_screen.png)

4\. Guarde los cambios

## Configuración de comandos

El módulo se puede asociar a cualquiera de sus plantillas de comandos:

1\. En el panel de administración vaya a la ficha del contrato

2\. Vaya a la pestaña «Configuración de módulos»

**![](images/drex_blokirovka_dvigatelya_custom_2.png)**

3\. Seleccione el módulo de bloqueo del motor

4\. En el bloque «Configuraciones» añada una configuración:

-   arm\_template\_id: ID de la plantilla de comando para bloquear el motor
    
-   disarm\_template\_id: ID de la plantilla de comando para desbloquear el motor
    

En el campo «Valor» indique el ID de la plantilla de comando creada.

5\. Guarde la configuración del contrato

Después:

— al hacer clic en «Bloquear», el sistema enviará el comando de la plantilla arm\_template\_id

— al hacer clic en «Desbloquear», el comando de la plantilla disarm\_template\_id

## Cómo bloquear o desbloquear el motor

1\. En la cuenta de usuario seleccione el objeto deseado

2\. Abra el menú contextual del objeto con el botón derecho del ratón

3\. Seleccione «Bloquear» o «Desbloquear»

![](images/drex_blokirovka_dvigatelya_custom_3.png)

![](images/drex_blokirovka_dvigatelya_custom_4.png)

4\. Introduzca la contraseña del contrato para confirmar y haga clic en el botón correspondiente

![](images/drex_blokirovka_dvigatelya_custom_5.png)

![](images/drex_blokirovka_dvigatelya_custom_6.png)

Tras la confirmación, el comando se enviará al dispositivo.

Para la confirmación se utiliza la contraseña maestra del contrato, indicada en su ficha.

![Bloqueo del motor](images/drex_blokirovka_dvigatelya_screen_2.png)
