---
title: "Tipos de notificaciones y condiciones de activación"
---

Al crear una notificación, usted selecciona el tipo de evento que supervisará el sistema y configura sus condiciones de activación.

Son precisamente las condiciones las que determinan cuándo se enviará la notificación, por ejemplo, ante un exceso de velocidad, un estacionamiento prolongado o un cambio en las lecturas de un sensor.

![Tipos de notificaciones y condiciones de activación](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_screen.png)

A continuación se presentan todos los tipos de notificaciones disponibles.

**Movimiento y ruta**

-   [Velocidad](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Скорость)
    
-   [Movimiento](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Движение)
    
-   [Estacionamiento](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Стоянка)
    
-   [Kilometraje](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Пробег)
    
-   [Rutas](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Маршруты)
    
-   [Planificador](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Планировщик)
    

**Sistema y estado del dispositivo**

-   [Pérdida de conexión](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Потеря_связи)
    
-   [Problemas con el dispositivo](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Проблемы_с_устройством)
    

**Sensores y eventos**

-   [Eventos de sensores](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#События_датчиков)
    
-   [Funcionamiento del encendido](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Работа_зажигания)
    
-   [Evento de encendido](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Событие_зажигания)
    
-   [Funcionamiento del sensor](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Работа_датчика)
    
-   [Cambio del valor del sensor](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Изменение_значения_датчика)
    
-   [Eventos multisensor](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Мультисенсорные_события)
    
-   [Evento complejo de sensor](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Комплексное_событие_датчика)
    
-   [Fallos de sensores](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Неисправности_датчиков)
    

**Indicadores**

-   [Temperatura](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Температура)
    
-   [Humedad](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Влажность)
    
-   [Presión](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Давление)
    
-   [Nivel de combustible](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Уровень_топлива)
    
-   [Repostajes y drenajes de combustible](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Заправки_и_сливы_топлива)
    
    **Geolocalización y eventos del objeto**
    
-   [Geocercas](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Геозоны)
    
-   [Aproximación a un objeto](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Приближение_к_объекту)
    

**Escenarios avanzados**

-   [Fórmula](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Формула)
    
-   [Archivos multimedia del evento](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Медиафайлы_события)
    
-   [Duplicación de iButton](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Дублирование_iButton)
    
-   [Bloqueo por exceso de límites](tipy-uvedomlenij-i-usloviya-srabatyvaniya.html#Блокировка_за_превышение_лимитов)
    

## Cómo configurar las condiciones

1\. Seleccione el tipo de notificación

El tipo de notificación determina qué evento concreto supervisa el sistema, por ejemplo, un exceso de velocidad, un estacionamiento o la activación de un sensor.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom.png)

2\. Defina los parámetros, por ejemplo, el umbral de velocidad o la duración

3\. Si es necesario, añada condiciones adicionales

Para añadir una condición más, haga clic en el botón ![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_2.png)

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_3.png)

Para eliminarla, use el botón ![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_4.png)

También puede cambiar el orden de las condiciones con las flechas ![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_5.png)

Si la notificación tiene varias condiciones, entre ellas puede elegir una regla lógica:

-   Y: la notificación se activará si se cumplen todas las condiciones a la vez
    
-   O: la notificación se activará si se cumple al menos una de las condiciones
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_6.png)

## Tipos principales de notificaciones

### Velocidad

La notificación se activa si la velocidad del objeto cumple la condición establecida.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_7.png)

Se pueden definir las siguientes condiciones:

Si la velocidad es:

— mayor que el valor indicado

— menor que el valor indicado

— igual al valor indicado

También puede indicar el tiempo durante el cual debe cumplirse la condición:

— segundos

— minutos

— horas

— kilómetros recorridos

Para las notificaciones de tipo «Velocidad» se puede definir un intervalo de repetición. Así se evita recibir un gran número de notificaciones idénticas.

Por ejemplo: si la velocidad supera los 60 km/h durante más de 60 segundos, el sistema enviará una notificación. La siguiente notificación aparecerá solo después del intervalo establecido (por ejemplo, 5 minutos), si el exceso de velocidad continúa.

### Eventos de encendido

El tipo de notificación «Eventos de encendido» se utiliza para recibir mensajes cuando cambia el estado del encendido de un objeto.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_8.png)

Condiciones disponibles:

-   Act.: la notificación llegará cuando se active el encendido
    
-   Desact.: la notificación llegará cuando se desactive el encendido
    
-   Act. y desact.: la notificación llegará en ambos eventos
    
-   Se mueve sin el sensor activado: la notificación llegará si el objeto ha empezado a moverse pero el sensor de encendido no está activado
    

Si es necesario, puede activar la opción «Disparador de fallo». Ayuda a detectar errores repetitivos o un funcionamiento inestable del sensor.

Si la opción está activada, se habilitan campos adicionales:

-   Número de errores: cuántas veces debe repetirse el error para que se active la notificación
    
-   Tiempo de restablecimiento: después de cuántos minutos se restablecerá el contador de errores
    

### Funcionamiento del encendido

Este tipo de notificación permite controlar durante cuánto tiempo un objeto permanece con el encendido activado o desactivado.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_9.png)

Tras seleccionar este tipo, es necesario definir la condición de activación de la notificación:

-   Más de: la notificación llegará si el encendido permanece activado o desactivado durante más tiempo que el valor indicado. Indique el número que define la duración de la condición y seleccione la unidad de medida: segundos, minutos, horas, kilómetros recorridos
    
-   Duración de la pausa: ajuste que permite tener en cuenta solo aquellos eventos entre los que hubo una pausa de la duración establecida. Para la pausa también es necesario indicar el valor y la unidad de medida
    

### Eventos de sensores

El tipo de notificación «Eventos de sensores» permite recibir notificaciones cuando cambia el estado del sensor seleccionado.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_10.png)

Condiciones disponibles:

-   Act.: la notificación llegará cuando el sensor pase al estado «activado»
    
-   Desact.: la notificación llegará cuando el sensor pase al estado «desactivado»
    
-   Act. y desact.: la notificación llegará ante cualquier cambio de estado del sensor
    
-   Se mueve sin el sensor activado: la notificación llegará si el objeto ha empezado a moverse pero el sensor seleccionado no está activado.
    

Si es necesario, puede activar la opción «Disparador de fallo». Ayuda a detectar errores repetitivos o un funcionamiento inestable del sensor.

Si la opción está activada, se habilitan campos adicionales:

-   Número de errores: cuántas veces debe repetirse el error para que se active la notificación
    
-   Tiempo de restablecimiento: después de cuántos minutos se restablecerá el contador de errores
    
-   Grupos de sensores: seleccione el grupo de sensores al que se aplicará la condición.
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_11.png)

### Funcionamiento del sensor

Con este tipo de notificación puede controlar cómo cambia el valor del sensor y durante cuánto tiempo permanece en un estado determinado.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_12.png)

Tras seleccionar el tipo, defina las condiciones:

• Sin cambios durante más de: la notificación se activará si el valor del sensor no cambia durante más tiempo que el indicado. Es necesario indicar un valor numérico y una unidad de medida.

• Más de: la notificación se activará si el sensor permanece en un estado determinado, o su valor supera la condición, durante más tiempo que el indicado. También es necesario definir el valor y la unidad de medida.

• Duración de la pausa: ajuste que determina qué interrupción en el funcionamiento del sensor se considera suficiente para dar por finalizado el evento actual.

• Grupos de sensores: seleccione el grupo de sensores al que se aplicará la condición.

Si el sensor con la etiqueta indicada está activado, el sistema empieza a contar la duración de su funcionamiento. Cuando la duración alcanza el valor de «Más de», se genera el evento y se envía la notificación.

Después de enviar la notificación, no se envían notificaciones repetidas por el mismo evento mientras el sensor funcione de forma continua.

Si el sensor se desactiva, el sistema empieza a contar la duración de la pausa. Si el sensor se vuelve a activar antes de que transcurra el tiempo de «Duración de la pausa», el evento se considera en curso y no se crea una nueva notificación.

Si el sensor permaneció desactivado al menos el tiempo indicado en «Duración de la pausa», el evento actual finaliza. El siguiente periodo de activación del sensor se considerará un evento nuevo.

Por ejemplo: si «Más de» = 10 minutos y «Duración de la pausa» = 2 horas, la notificación se enviará tras 10 minutos de funcionamiento del sensor. La notificación repetida aparecerá solo después de que el sensor se desactive durante al menos 2 horas, vuelva a activarse y funcione más de 10 minutos.

### Cambio del valor del sensor

El tipo de notificación «Cambio del valor del sensor» permite supervisar cuánto ha cambiado el valor del sensor seleccionado durante un periodo determinado.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_13.png)

Tras seleccionar este tipo, es necesario definir la condición de activación de la notificación:

-   Diferencia mayor que: indique un valor numérico, es decir, cuánto debe cambiar el valor del sensor para que se active la notificación. Por ejemplo: 5, si el valor cambia en más de 5 unidades.
    

Si activa la opción «en valor absoluto |x|», el sistema tendrá en cuenta el cambio en cualquier sentido, tanto el aumento como la disminución.

-   Durante el periodo: indique el intervalo de tiempo durante el cual se analiza el cambio; defina un número y seleccione la unidad de medida (segundos, minutos)
    
-   Grupos de sensores: seleccione el grupo de sensores al que se aplicará la condición.
    

### Eventos multisensor

El tipo de notificación «Eventos multisensor» se utiliza para sensores que funcionan según una tabla de estados (por ejemplo, el estado del equipo, el modo de funcionamiento del dispositivo o las posiciones de un conmutador).

Un sensor de este tipo puede tener varios valores posibles, y la notificación se activará cuando cambie su estado.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_14.png)

A continuación, configure las condiciones:

-   Solo cambios: si activa esta opción, la notificación llegará solo cuando cambie el valor del sensor
    
-   Ignorar valores fuera de la tabla: si activa este ajuste, el sistema tendrá en cuenta solo los valores indicados en la tabla del sensor. Todos los demás valores (no descritos en la tabla) se ignorarán y no se enviarán notificaciones por ellos
    
-   Grupos de sensores: seleccione el grupo de sensores al que se aplicará la condición
    

### Evento complejo de sensor

El tipo de notificación «Evento complejo de sensor» permite configurar una sola notificación para varios eventos de sensores a la vez.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_15.png)

Seleccione los grupos de sensores a los que se aplicará la condición.

El campo «Tiempo de restablecimiento» define el periodo después del cual el sistema pone a cero el estado del evento.

### Fallos de sensores

El tipo de notificación «Fallos de sensores» está diseñado para detectar posibles problemas en el funcionamiento de los sensores y controlar que funcionen correctamente.

Esta notificación también funciona como indicador de fallo:

— al detectarse un fallo, junto al estado del objeto se muestra un indicador amarillo

— cuando el sensor pasa al estado de fallo crítico, se muestra un indicador rojo

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_16.png)

Puede activar una o varias condiciones a la vez:

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_17.png)

-   Fuera de la tabla de calibración: la notificación llega si el valor del sensor sale de los límites de la tabla de calibración durante el intervalo de tiempo establecido
    
-   Sin cambios: la notificación llega si el valor del sensor no cambia durante el tiempo indicado
    
-   Número de cambios: la notificación llega si el número de cambios del valor del sensor es mayor o menor que el umbral establecido durante el intervalo de tiempo indicado.
    

Adicionalmente se puede tener en cuenta:

-   Geofence enter: los cambios del sensor se tendrán en cuenta solo al entrar en la geocerca
    
-   Geofence exit: los cambios del sensor se tendrán en cuenta solo al salir de la geocerca
    
-   Regla adicional: permite definir una condición adicional para determinar el fallo. Es necesario indicar:
    

— el nombre del campo del sensor

— la condición: >, <, =

— el valor

Se permite el uso de [procesadores](../../datchiki-1/obrabotchiki-datchikov.html) y [fórmulas](../../datchiki-1/primenenie-formul.html).

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_18.png)

-   Ajustes del disparador de fallo: si el fallo se repite varias veces, el sensor puede pasar al estado de fallo crítico.
    

En los ajustes del disparador se define:

— Número de errores: cuántos fallos deben producirse para que el sensor pase al estado de fallo crítico

— Tiempo de restablecimiento (min): periodo sin errores tras el cual el estado de fallo se retirará automáticamente

-   Reglas de restablecimiento del disparador: cuánto tiempo debe permanecer el objeto estacionado o circular sin errores para que el estado de fallo se retire automáticamente. Se pueden configurar las condiciones en las que se restablecerá el disparador:
    

— tiempo de estacionamiento (en minutos)

— tiempo de movimiento (en minutos)

— si es necesario, definir una fórmula

-   Grupos de sensores: seleccione el grupo de sensores al que se aplicará la condición
    

### Problemas con el dispositivo

El tipo de notificación «Problemas con el dispositivo» está diseñado para detectar el funcionamiento incorrecto del rastreador o errores en la transmisión de datos.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_19.png)

Se pueden activar una o varias condiciones a la vez:

-   Cambio de coordenadas sin velocidad (Coords change without speed): la notificación se activa si las coordenadas del objeto cambian pero la velocidad es cero. Es necesario indicar el umbral y la unidad de medida
    
-   Velocidad sin cambio de coordenadas (Speed without changing coords): la notificación se activa si el dispositivo transmite velocidad pero las coordenadas permanecen iguales
    
-   Cambio de coordenadas: la notificación llega ante un cambio brusco o anómalo de las coordenadas. Se pueden definir los parámetros a partir de los cuales el evento se considerará un problema.
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_20.png)

-   Regla adicional: permite definir una condición adicional para determinar el fallo. Es necesario indicar:
    

— el nombre del campo del sensor

— la condición: >, <, =

— el valor

-   Ajustes del disparador de fallo: si el problema se produce varias veces, el dispositivo puede pasar al estado de fallo crítico. En los ajustes del disparador se define:
    

— Número de errores: cuántas veces debe repetirse el problema

— Tiempo de restablecimiento (min): después de cuántos minutos sin errores se retirará el estado de fallo

-   Reglas de restablecimiento del disparador: se pueden configurar las condiciones en las que se restablecerá el disparador:
    

— tiempo de estacionamiento (en minutos)

— tiempo de movimiento (en minutos)

— si es necesario, definir una fórmula

### Presión

El tipo de notificación «Presión» se utiliza para controlar las lecturas de los sensores de presión. La notificación se activa si el valor de la presión cumple la condición establecida.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_21.png)

Tras seleccionar este tipo, es necesario definir la condición de activación de la notificación:

• Condición: seleccione cómo debe comparar el sistema el valor de la presión:

— Mayor que: la notificación se activará si la presión es mayor que el valor indicado

— Igual a: la notificación se activará si la presión es igual al valor indicado

— Menor que: la notificación se activará si la presión es menor que el valor indicado

• Valor: indique el valor numérico de la presión con el que se comparará la lectura del sensor

• Más de: indique durante cuánto tiempo debe cumplirse la condición para que se active la notificación. Es necesario definir un número y seleccionar la unidad de medida:

— segundos

— minutos

— horas

— kilómetros recorridos

• Intervalo de repetición: define la pausa entre notificaciones idénticas si la condición sigue cumpliéndose

Por ejemplo: si la presión es inferior al valor establecido durante más de 10 segundos, la notificación se enviará una vez. La siguiente notificación aparecerá solo después del intervalo indicado, si la condición sigue cumpliéndose.

• Grupos de sensores: seleccione el grupo de sensores al que se aplicará la condición

### Temperatura

Este tipo de notificación se utiliza para controlar la temperatura mediante el sensor seleccionado, por ejemplo, en un camión frigorífico, un motor u otro equipo.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_22.png)

A continuación, configure las condiciones:

-   Si la temperatura: define la regla principal con la que el sistema comparará las lecturas del sensor con el valor indicado en grados Celsius (°C). Opciones disponibles:
    
    — Mayor que: la notificación se activará si la temperatura supera el valor indicado
    
    — Igual a: la notificación se activará si la temperatura es exactamente igual al valor indicado
    
    — Menor que: la notificación se activará si la temperatura desciende por debajo del valor indicado
    
    — Fuera del rango: la notificación se activará si la temperatura sale del rango establecido (por ejemplo, si es inferior a +2 °C o superior a +8 °C)
    
-   Más de: permite definir la duración mínima durante la cual debe cumplirse la condición para que se active la notificación. Esto ayuda a filtrar las fluctuaciones breves e insignificantes (por ejemplo, al abrir la puerta del camión frigorífico). En el campo «Unidades» puede elegir en qué se mide esta duración: segundos, minutos, horas.
    
-   Sin cambios durante más de: es una condición independiente que ayuda a detectar posibles fallos del sensor cuando sus lecturas se «congelan» en un solo valor. La notificación se activará si la temperatura no cambia durante más tiempo que el periodo indicado.
    
-   Grupos de sensores: seleccione a qué sensores de temperatura concretos se aplicará esta regla
    

### Humedad

El tipo de notificación «Humedad» se utiliza para controlar la humedad mediante el sensor seleccionado, por ejemplo, en el compartimento de carga o en un camión frigorífico.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_23.png)

Tras seleccionar el tipo, defina las condiciones:

-   Si la humedad:
    

— Mayor que: la notificación se activará si la humedad es superior al valor indicado

— Menor que: la notificación se activará si la humedad es inferior al valor indicado

— Igual a: la notificación se activará si la humedad es igual al valor indicado

— Fuera del rango en: la notificación se activará si la humedad se desvía del rango establecido en el valor indicado

-   Indique el valor numérico de la humedad con el que el sistema comparará las lecturas del sensor. El valor se define en porcentaje (%).
    
-   Más de: indique durante cuánto tiempo debe cumplirse la condición para que se active la notificación:
    

— Segundos: la condición se cumple durante más del número de segundos indicado

— Minutos: la condición se cumple durante más del número de minutos indicado

— Horas: la condición se cumple durante más del número de horas indicado

-   Sin cambios durante más de: este ajuste permite controlar las situaciones en las que la humedad no cambia durante el tiempo establecido. La notificación se activará si el valor de la humedad permanece sin cambios durante más tiempo que el periodo indicado
    

### Pérdida de conexión

El tipo de notificación «Pérdida de conexión» se utiliza para controlar la pérdida de conexión con el objeto. La notificación se activa si el dispositivo no envía datos durante el tiempo o la distancia establecidos.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_24.png)

Tras seleccionar este tipo, es necesario definir la condición de activación de la notificación:

-   Más de: indique cuánto tiempo debe durar la pérdida de conexión para que se active la notificación:
    

— Segundos: la notificación se activará si la pérdida de conexión dura más del número de segundos indicado

— Minutos: la notificación se activará si la pérdida de conexión dura más del número de minutos indicado

— Horas: la notificación se activará si la pérdida de conexión dura más del número de horas indicado

— Kilómetros: la notificación se activará si el objeto ha recorrido la distancia indicada sin conexión

### Kilometraje

El tipo de notificación «Kilometraje» se utiliza para controlar el kilometraje del objeto según el odómetro. Permite recibir notificaciones si el kilometraje es mayor o menor que el valor establecido durante el periodo seleccionado.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_25.png)

Tras seleccionar el tipo, defina las condiciones:

-   Si el kilometraje:
    

— Mayor que: la notificación se activará si el kilometraje del objeto es superior al valor indicado

 — Menor que: la notificación se activará si el kilometraje del objeto es inferior al valor indicado

— Límite mensual superado: la notificación se activará si el kilometraje del mes ha superado el valor establecido

-   Unidades: indique el valor numérico del kilometraje con el que el sistema comparará los datos del odómetro. El valor se define en kilómetros.
    
-   Periodo: seleccione el periodo durante el cual se comprobará la condición:
    

— Total: la condición se comprueba durante todo el periodo posterior a la creación de la notificación

— Por mes: la condición se comprueba dentro del mes en curso

— Por día: la condición se comprueba dentro del día en curso

### Movimiento

El tipo de notificación «Movimiento» se utiliza para controlar el movimiento del objeto. La notificación se activa si el objeto está en movimiento durante más tiempo del establecido o recorre la distancia indicada.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_26.png)

Configure las condiciones:

-   Más de: indique durante cuánto tiempo debe estar el objeto en movimiento para que se active la notificación. Es necesario definir un número y seleccionar la unidad de medida:
    

— Segundos: la notificación se activará si el movimiento dura más del número de segundos indicado

— Minutos: la notificación se activará si el movimiento dura más del número de minutos indicado

— Horas: la notificación se activará si el movimiento dura más del número de horas indicado

— Kilómetros: la notificación se activará si el objeto ha recorrido en movimiento más de la distancia indicada

-   Duración de la pausa: este ajuste permite tener en cuenta solo aquellos eventos de movimiento entre los que hubo una pausa de la duración establecida. Si la pausa entre dos tramos de movimiento es menor que el valor indicado, el sistema los considerará un solo movimiento continuo. Por ejemplo, si indica una pausa de 10 segundos, una parada de menos de 10 segundos no interrumpirá el evento de movimiento.
    

### Estacionamiento

El tipo de notificación «Estacionamiento» se utiliza para controlar las paradas del objeto. La notificación se activa si el objeto permanece sin moverse durante más tiempo del establecido.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_27.png)

Tras seleccionar este tipo, es necesario definir la condición de activación de la notificación:

-   Más de: indique durante cuánto tiempo debe permanecer el objeto sin moverse para que se active la notificación:
    

— Segundos: la notificación se activará si el estacionamiento dura más del número de segundos indicado

— Minutos: la notificación se activará si el estacionamiento dura más del número de minutos indicado

— Horas: la notificación se activará si el estacionamiento dura más del número de horas indicado

### Geocercas

El tipo de notificación «Geocercas» se utiliza para controlar los eventos relacionados con las geocercas. Permite recibir notificaciones cuando el objeto entra en una geocerca, sale de ella, se detiene dentro de ella o la atraviesa sin detenerse.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_28.png)

Condiciones disponibles:

-   Entrada: la notificación se activará cuando el objeto entre en la geocerca seleccionada
    
-   Salida: la notificación se activará cuando el objeto salga de la geocerca seleccionada
    
-   Entrada+Salida: la notificación llegará tanto al entrar como al salir de la geocerca
    
-   Parada en la geocerca: la notificación se activará si el objeto se detiene dentro de la geocerca
    
-   Sin parada en la geocerca: la notificación se activará si el objeto entra en la geocerca, no se detiene en ella y después sale
    
-   Vel. mín.: para las condiciones relacionadas con la parada o la ausencia de parada se puede indicar una velocidad mínima. Este parámetro ayuda a determinar si el objeto se considera en movimiento o detenido dentro de la geocerca
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_29.png)

### Nivel de combustible

El tipo de notificación «Nivel de combustible» se utiliza para controlar el nivel de combustible mediante el sensor seleccionado en el objeto. La notificación se activa si el nivel de combustible cumple la condición establecida.

Tras seleccionar este tipo, es necesario definir la condición de activación de la notificación:

-   Si el nivel de combustible:
    

— Mayor que: la notificación se activará si el nivel de combustible es superior al valor indicado

— Menor que: la notificación se activará si el nivel de combustible es inferior al valor indicado

— Igual a: la notificación se activará si el nivel de combustible es igual al valor indicado

-   Unidades: indique el valor numérico del nivel de combustible con el que el sistema comparará las lecturas del sensor
    

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_30.png)

### Repostajes y drenajes de combustible

El tipo de notificación «Repostajes y drenajes de combustible» (Fuel Refuelings & Drainings) se utiliza para controlar los eventos relacionados con el cambio del nivel de combustible. Permite recibir notificaciones sobre repostajes y drenajes de combustible en el objeto.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_31.png)

Tras seleccionar este tipo, es necesario marcar con qué eventos debe activarse la notificación:

• Repostajes: la notificación se activará cuando el sistema registre un repostaje de combustible

• Drenajes: la notificación se activará cuando el sistema registre un drenaje de combustible

• Inicio del repostaje: la notificación se activará en el momento en que comience el repostaje

• Inicio del drenaje: la notificación se activará en el momento en que comience el drenaje de combustible

### Aproximación a un objeto

El tipo de notificación «Aproximación a un objeto» se utiliza para controlar la situación en la que un objeto se aproxima a otro a una distancia determinada.

En este tipo de notificación, un objeto se considera una geocerca móvil, y el sistema supervisa cuándo otro objeto entra en esa zona o sale de ella.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_32.png)

Tras seleccionar este tipo, es necesario definir la condición de activación de la notificación:

Si la distancia al objeto es:

-   Menor que: indique la distancia a la que se considera que el objeto está cerca de otro objeto. El valor se define en metros.
    
-   Más de: indique durante cuánto tiempo debe permanecer el objeto en el área de acción de otro objeto para que se active la notificación. El valor se define en segundos.
    
-   Entrar: si activa esta opción, la notificación se activará cuando el objeto entre en el área de acción de otro objeto
    
-   Salir: si activa esta opción, la notificación se activará cuando el objeto salga del área de acción de otro objeto
    
-   Objetos: en la lista debe seleccionar los objetos para los que se supervisará la aproximación
    

El sistema compara los objetos de la lista y determina cuándo un objeto se encuentra a la distancia establecida de otro. En este caso, el objeto al que se produce la aproximación se considera una geocerca móvil. Por ejemplo, si un automóvil de la lista seleccionada se acerca a otro objeto a menos de 100 metros y permanece cerca durante más de 30 segundos, el sistema enviará una notificación.

### Fórmula

El tipo de notificación «Fórmula» se utiliza para comprobar una condición personalizada definida en forma de fórmula. La notificación se activa si el resultado de la fórmula es true o false.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_33.png)

En el campo «Fórmula» debe indicar la expresión que se va a comprobar. En ella se pueden usar campos de datos sin procesar, valores de sensores, procesadores y fórmulas.

La notificación se activará si el resultado de la comprobación es igual a:

• true: la condición se cumple

• false: la condición no se cumple

### Bloqueo por exceso de límites

El tipo de notificación «Bloqueo por exceso de límites» se utiliza para enviar una notificación si el objeto ha sido bloqueado por infringir los límites establecidos.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_34.png)

Si el sistema registra un bloqueo de este tipo, la notificación se enviará por el canal seleccionado.

Tras seleccionar este tipo, debe indicar el método de entrega de la notificación, por ejemplo:

• Email

• SMS

• Webhook

• Telegram

• Push

Si se selecciona Email, las notificaciones llegarán a la dirección de correo electrónico indicada.

Este tipo de notificación se aplica automáticamente a todos los objetos existentes y también a todos los objetos nuevos que se creen después de configurarla.

### Planificador

El tipo de notificación «Planificador» se utiliza para controlar el movimiento del objeto en horario laboral y no laboral, de acuerdo con sus ajustes del [horario de trabajo](../kontrol-vremeni.html#Рабочее_время_объекта).

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_35.png)

Tras seleccionar este tipo, defina las condiciones de activación de la notificación:

• En el horario asignado: la notificación se activará si el objeto se mueve dentro del horario laboral establecido

• Fuera del horario planificado: la notificación se activará si el objeto se mueve fuera del horario laboral establecido

-   Más de: indique durante cuánto tiempo debe estar el objeto en movimiento para que se active la notificación
    
-   Duración de la pausa: este ajuste permite tener en cuenta las pausas entre eventos de movimiento. Si la pausa es menor que el valor indicado, el sistema considerará el movimiento continuo. Por ejemplo: si indica una pausa de 10 segundos, una parada breve de menos de 10 segundos no interrumpirá el evento de movimiento.
    

### Archivos multimedia del evento

El tipo de notificación «Archivos multimedia del evento» se utiliza para enviar una notificación cuando el dispositivo carga correctamente en el servidor de almacenamiento un archivo multimedia asociado a un evento registrado. Esta notificación no se activa en el momento del evento, sino solo después de que el archivo se haya transferido y guardado correctamente en el servidor.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_36.png)

Por ejemplo, la notificación puede enviarse cuando el dispositivo carga una fotografía de la infracción, un fragmento de vídeo del evento, una imagen de la cabina del conductor, de la situación en la carretera u otro archivo creado tras registrarse el evento.

Esta notificación se puede usar para eventos relacionados con infracciones y avisos de ADAS / DMS, por ejemplo, distracción del conductor, uso del teléfono, fumar al volante, cansancio, riesgo de colisión, salida del carril o frenada brusca.

El parámetro «Intervalo de repetición» permite definir la pausa entre notificaciones idénticas si el dispositivo carga varios archivos multimedia seguidos por el mismo evento.

### Duplicación de iButton

El tipo de notificación «Duplicación de iButton» se utiliza para detectar situaciones en las que el mismo iButton se registra en más de un vehículo durante un periodo de tiempo determinado.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_37.png)

Esta notificación ayuda a detectar una identificación errónea del conductor. Por ejemplo, si el conductor usó el mismo iButton en un automóvil y después en otro, el sistema puede considerar que el conductor se cambió a otro objeto y actualizar la vinculación. Como resultado, los datos de viajes, conductores e informes pueden volverse incorrectos.

Tras seleccionar este tipo, es necesario definir la condición:

-   Durante el periodo: indique el tiempo durante el cual el sistema comprobará si el mismo iButton se ha utilizado en más de un objeto. La notificación se activará si el mismo iButton se detecta en varios objetos dentro del tiempo indicado.
    

Para que este tipo de notificación funcione correctamente, es necesario:

— que en los objetos esté configurado el sensor iButton

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_38.png)

— que se utilice el [módulo de conductores](../voditeli-3/index.html)

— que la notificación esté vinculada a los objetos que se desea controlar

### Rutas

El tipo de notificación «Rutas» se utiliza para controlar los eventos de las rutas que ya están asignadas al objeto. En los ajustes de esta notificación se selecciona por qué eventos de ruta se desea recibir notificaciones.

![](images/drex_tipy_uvedomlenij_i_usloviya_srabatyvaniya_custom_39.png)

Tras [vincular el vehículo a la ruta](../marshruty-3/kak-privyazat-marshrut-k-obektu.html), el sistema empieza a comparar los viajes del objeto con la ruta asignada:

— registra la entrada y la salida de la ruta

— tiene en cuenta el paso por los puntos de control

— incluye los viajes en los informes de rutas

En los ajustes de la notificación de este tipo se define por qué eventos de ruta deben enviarse notificaciones:

-   En la zona de parada: la notificación se activa cuando el objeto está en la zona de un punto de control o de una parada. El radio de dicha zona se define [al configurar la ruta](../marshruty-3/kak-sozdat-marshrut.html#Параметры_маршурута) en el mapa.
    
-   Fuera de la zona de parada: la notificación se activa cuando el objeto sale de la zona de un punto de control o de una parada. El límite de la zona también viene determinado por el radio definido al editar la ruta
    
-   Entrada a la ruta: la notificación se activa cuando el objeto entra en los límites de la ruta. Los límites de la ruta se determinan por su anchura, configurada en el mapa
    
-   Salida de la ruta: la notificación se activa cuando el objeto sale de los límites de la ruta.
