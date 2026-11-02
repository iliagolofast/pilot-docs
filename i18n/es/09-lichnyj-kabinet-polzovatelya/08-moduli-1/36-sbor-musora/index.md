---
title: "Recogida de residuos"
---

**Finalidad del módulo**

-   En los contenedores se instalan sensores que avisan a la plataforma PILOT de que el contenedor se ha llenado hasta el nivel del sensor.
    
-   El sensor se instala a una altura de aproximadamente el 80 % del depósito completo, para que quede tiempo para que llegue el camión de recogida.
    
-   El operador de la empresa de recogida de residuos ve en la plataforma PILOT, en tiempo real, que el nivel de llenado de varios contenedores se acerca al límite superior y crea una tarea para construir la ruta óptima y recoger antes esos contenedores a punto de desbordarse.
    
-   El conductor del camión recibe en la aplicación la tarea de recoger determinados contenedores y la ruta óptima hasta ellos.
    
-   El operador ve la ejecución de la tarea en línea, en tiempo real.
    

En caso de una situación de emergencia, por ejemplo un incendio en un contenedor, el operador también recibe en la plataforma PILOT una notificación (así como por SMS, push o correo electrónico, según el método que le resulte más cómodo) sobre el incidente y la necesidad de actuar.

Además, en la plataforma PILOT se puede configurar de antemano un escenario de respuesta ante situaciones de emergencia

(incendio en un contenedor, accidente del camión de recogida, salida del vehículo de la ruta) y entonces cualquier operador de la empresa de servicio de recogida de residuos sabrá qué hacer cuando se produzca una u otra situación.

-   Este módulo no tiene un icono propio y su funcionamiento se basa en dos módulos conectados.
    
     El módulo Logística y el módulo PTM.
    
-   El módulo también funciona con uno solo de estos módulos, pero se recomienda utilizar a la vez los dos mencionados.
    
-   La configuración del módulo se muestra en el menú contextual solo para el tipo contenedor de residuos.
    

![](images/drex_sbor_musora_custom.png)

![](images/drex_sbor_musora_custom_2.png)

**Crear una tarea para PTM.**

Para crear una tarea, es necesario seleccionar **Сreate a task in PTM**.

Las tareas de recogida de residuos solo se pueden crear desde el **menú contextual del objeto contenedor.**

Si el módulo Logística está conectado, estará disponible el nombre del cliente.

De forma predeterminada se establece la hora actual, que se puede cambiar, por ejemplo, a un período futuro.

La hora planificada indicada se tendrá en cuenta al ejecutar la tarea.

![](images/drex_sbor_musora_custom_3.png)

Si necesita seleccionar más contenedores para un mismo vehículo, seleccione el primero y el último contenedor manteniendo pulsada la tecla **shift.**

![](images/drex_sbor_musora_custom_4.png)

Después, los datos sobre la ejecución de la tarea de recogida de residuos se pueden consultar en el módulo PTM.

En este caso, el módulo PTM está previsto para consultar tareas, no para crearlas.

![](images/drex_sbor_musora_custom_5.png)

**Crear una tarea para Logística**

 Para crear tareas, es necesario seleccionar el segundo menú **Create a task in Logistic**.

![](images/drex_sbor_musora_custom_6.png)

Es importante tener en cuenta que el módulo Logística toma en cuenta los ajustes del horario de trabajo del objeto y los ajustes de funcionamiento del almacén.

Configuración de la hora planificada de recogida de residuos.

![](images/drex_sbor_musora_custom_7.png)

En los objetos también se deben rellenar los parámetros para Logística.

![](images/drex_sbor_musora_custom_8.png)

No está prevista la creación de tareas en Logística; la tarea de recogida de residuos se crea solo desde el menú contextual, como se muestra arriba.

Las tareas creadas se pueden encontrar mediante el filtro de fechas.

![](images/drex_sbor_musora_custom_9.png)

 Ventana para crear la dirección del vertedero en el módulo Logística.

![](images/drex_sbor_musora_custom_10.png)

El avance de las solicitudes se muestra en la columna Estado.

![](images/drex_sbor_musora_custom_11.png)
