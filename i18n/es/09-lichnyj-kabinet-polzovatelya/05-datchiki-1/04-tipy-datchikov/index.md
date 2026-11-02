---
title: "Tipos de sensores"
---

En este artículo veremos qué tipos de sensores existen en el sistema PILOT, para qué se utilizan y qué parámetros hay que configurar para que algunos de ellos funcionen correctamente.

— [qué tipos de sensores existen](index.html#Типы_датчиков) y cómo funcionan

— [cómo elegir la finalidad del sensor y su tipo](index.html#Типы_датчиков_по_принципу_работы)

— [cómo configurar el sensor de combustible](index.html#Как_настроить_датчик_топлива)

## Tipos de sensores

El tipo de sensor determina qué parámetros controla en el sistema de monitoreo. Veamos con más detalle qué tipos de sensores existen y para qué se utilizan en PILOT.

Al añadir un sensor, primero seleccione su finalidad. El tipo se determina automáticamente, pero si es necesario se puede cambiar.

![Tipos de sensores](images/drex_tipy_datchikov_screen.png)

1 — Finalidad del sensor

2 — Tipo de sensor

## Tipos de sensores según su principio de funcionamiento

### Sensores de texto

Muestran el estado del dispositivo con palabras.

Por ejemplo, el sensor de cerradura, en lugar de códigos técnicos, mostrará mensajes: «Cerradura abierta», «Cerradura cerrada».

### Sensores discretos

Transmiten los datos tal como los envió el dispositivo. Para obtener un valor exacto, estos datos se pueden convertir mediante [tablas de calibración](../dobavlenie-datchika.html#тарировочная_таблица) o [fórmulas](../primenenie-formul.html).

En los sensores discretos se puede activar la función de avisos. Cuando cambie el estado del sensor, el sistema enviará notificaciones por correo electrónico o SMS.

### Sensores de impulsos

Cuentan el número de impulsos entre lecturas. 

Por ejemplo, el sensor de horas de motor, que registra el número de impulsos para calcular el tiempo de funcionamiento del equipo.

### Sensores de dos posiciones

Registran dos estados del objeto: activado y desactivado, o abierto y cerrado.

El sistema determina su estado según el rango de valores: si la lectura queda entre el mínimo y el máximo establecidos, el sensor se considera activado; en caso contrario, desactivado. 

### Sensores discretos integrales

Funcionan según el principio de los discretos, pero además acumulan los valores recibidos.

Por ejemplo, el sensor puede contar el número total de eventos: cuántas veces se arrancó el motor o se abrieron las puertas de la caja durante un turno.

### Sensores de impulsos integrales

Equivalente a los sensores de impulsos, pero con la función de acumular el número total de impulsos.

Por ejemplo, los sensores pueden contar el número total de impulsos para analizar el funcionamiento del equipo a largo plazo: el tiempo total de funcionamiento del motor durante un mes o el kilometraje total de la maquinaria durante un trimestre.

### Sensores de dos posiciones inversos

Funcionan igual que los de dos posiciones, pero muestran el estado en orden inverso.

Por ejemplo, se necesita que la alarma se active cuando se abre una puerta sin autorización. Un sensor normal puede no activarse debido a las particularidades de la conexión, mientras que el sensor inverso «invierte» la señal: si la puerta está abierta, el sensor muestra «cerrada»; si está cerrada, muestra «abierta», para garantizar que se active la alarma. Así, el sensor protege al sistema frente a errores.

### Sensores multiposición

Se utilizan para registrar lecturas que pueden tomar varios valores. Los valores se interpretan a partir de la tabla de calibración. Por ejemplo, sensores de temperatura, humedad o presión.

### Sensores compuestos

Combinan los datos de varios sensores.

Por ejemplo, la combinación de los datos del sensor de combustible y del sensor de horas de motor para calcular el consumo de combustible por unidad de tiempo.

### Sensores especiales

Estos sensores están diseñados para recopilar información muy especializada.

Por ejemplo, un sensor RFID puede reconocer objetos y personas, un sensor GPS determina la ubicación exacta, un sensor del bus CAN recopila los parámetros técnicos del automóvil y un contador de personas cuenta el número de visitantes en un local.

## Tabla de sensores

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>Finalidad del sensor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>Principio de funcionamiento</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de encendido</span></div></td><td colspan="1" rowspan="1"><div><span>De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>El sensor se utiliza para supervisar el funcionamiento del motor y contabilizar el tiempo de funcionamiento del vehículo. Cuando el motor funciona, el sensor muestra el valor = 1; cuando está apagado, el valor = 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><a href="nastrojka-datchika-topliva.html"><span><span>Sensor de combustible</span></span></a></div></td><td colspan="1" rowspan="1"><div><span>Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Supervisa el nivel de combustible en el depósito.</span></div><div><span>Para saber cómo configurar el sensor de combustible, lea </span><a href="index.html#Как_настроить_датчик_топлива"><span><span>más abajo</span></span></a></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de funcionamiento del equipo especial</span></div></td><td colspan="1" rowspan="1"><div><span>De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>Recopila datos sobre el inicio y el fin del funcionamiento del equipo. Tiene dos estados: activado, el sensor muestra el valor = 1, y desactivado = 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de carga de la batería</span></div></td><td colspan="1" rowspan="1"><div><span>Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Supervisa el estado de la batería y registra los niveles de carga</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de antena GPS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>Determina la presencia o ausencia de señal GPS. Tiene dos estados: activado, el sensor muestra el valor = 1, o desactivado = 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de temperatura</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Controla la temperatura de la carga, por ejemplo, en camiones frigoríficos, o del entorno. Es imprescindible establecer los valores mínimo y máximo de temperatura con los que se activará el sensor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Botón SOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>S</span><span>ensor cuyo valor distinto de cero permite marcar el mensaje como de alarma. Hay que establecer el valor mínimo y máximo para que se active el sensor</span><span></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Estado de bloqueo del motor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>Muestra el estado actual del mecanismo: bloqueado&nbsp; o desbloqueado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Kilometraje por CAN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Supervisa la distancia que ha recorrido el vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de volumen de líquido</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Controla el nivel de líquido en un recipiente</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Flujo de pasajeros</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Compuesto</span></div></td><td colspan="1" rowspan="1"><div><span>Determina el número de pasajeros que entran y salen y la dirección de su movimiento</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Consumo de combustible</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De impulsos</span></div></td><td colspan="1" rowspan="1"><div><span>Mide la cantidad de combustible consumido mediante impulsos. Cuando un volumen determinado de combustible pasa por el sensor, este emite una señal eléctrica. Para medir correctamente el consumo, hay que configurar el parámetro «Impulsos por litro», que indica cuántos impulsos genera el sensor cuando pasa un litro de combustible</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>iButton</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Especial</span></div></td><td colspan="1" rowspan="1"><div><span>Se utiliza para identificar a los conductores mediante iButton, una llave electrónica compacta con un chip integrado. Al entrar en contacto con el lector, la llave transmite su número único, con el que PILOT identifica al conductor.</span></div><div><span>La finalidad iButton también se puede utilizar </span><a href="../../moduli-1/voditeli-3/opredelenie-voditelya-po-face-id.html"><span>para identificar al conductor mediante la cámara Mettax</span></a></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Acelerómetro</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Determina el cambio de velocidad y la dirección del movimiento. Registra la aceleración en los ejes X, Y, Z y detecta colisiones.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Tipo de combustible</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multiposición</span></div></td><td colspan="1" rowspan="1"><div><span>Se aplica para controlar el consumo de varios tipos de combustible, por ejemplo, gas o gasolina.</span></div><div><span>Cómo detecta este sensor un repostaje:</span></div><div><span>1. Detección del repostaje</span></div><div><span>El sensor supervisa constantemente el nivel de combustible y registra las lecturas.</span></div><ul><li><div><span>El sistema toma 5 mediciones consecutivas del nivel de combustible</span></div></li><li><div><span>Compara la diferencia entre la primera y la última medición</span></div></li><li><div><span>Si la diferencia entre ellas es mayor que el valor establecido, el sistema lo considera un repostaje. Este valor se define en los ajustes del sensor.</span></div></li></ul><div><span>2. Inicio del repostaje</span></div><div><span>Cuando el sistema detecta un repostaje, analiza los datos de los últimos 20 minutos. Busca el punto de medición con el nivel de combustible más bajo en ese intervalo de tiempo. El sistema considera ese punto el inicio del repostaje.</span></div><div><span>3. Fin del repostaje</span></div><div><span>El sistema entiende que el repostaje ha terminado:</span></div><ul><li><div><span>Si cinco mediciones seguidas muestran el mismo nivel de combustible, el vehículo se ha repostado y permanece detenido</span></div></li><li><div><span>Si la siguiente medición muestra menos combustible que la anterior, el vehículo se ha repostado y ha reanudado la marcha</span></div></li><li><div><span>Si la señal se pierde durante una hora, el sistema considera que se ha cortado la alimentación del vehículo, por ejemplo, que se ha apagado el encendido, lo que también puede significar el fin del repostaje</span></div></li></ul><div><span>El drenaje de combustible se detecta igual que el repostaje, solo que en lugar de un aumento del nivel de combustible, el sistema registra su disminución brusca.</span></div><div><span>El sistema determina un repostaje o un drenaje comparando el nivel de combustible en varios puntos. Si los datos llegan con demasiada frecuencia, aumente el número de puntos en los ajustes del sensor para evitar falsas activaciones. Si llegan con demasiada poca frecuencia, redúzcalo.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Velocidad de rotación</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Mide el número de revoluciones del motor o de otros mecanismos giratorios. Se utiliza, por ejemplo, para controlar el régimen del motor, el tambor de una hormigonera u otro equipo. El resultado de las mediciones se muestra en revoluciones por minuto (RPM)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de horas de motor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Lee el número de impulsos entre lecturas para registrar el tiempo de funcionamiento del equipo. Se utiliza para contabilizar el tiempo de funcionamiento del motor u otros dispositivos</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de carga o descarga de la hormigonera</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>Se aplica para supervisar la carga y descarga de materiales en maquinaria de construcción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Lector RFID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Especial</span></div></td><td colspan="1" rowspan="1"><div><span>Se utiliza para leer etiquetas RFID y reconocer objetos o usuarios.</span></div><div><span>La etiqueta RFID&nbsp;es&nbsp;una etiqueta electrónica o chip que almacena un código único para identificar un objeto o una persona. Funciona como un pase electrónico sin contacto</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de humedad</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Se utiliza para supervisar el nivel de humedad, por ejemplo, en instalaciones frigoríficas, almacenes y otros lugares donde es importante mantener el nivel de humedad necesario. Muestra simplemente un número, por ejemplo, 60 %, o un rango de humedad admisible, por ejemplo, norma 40-60 %</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de peso</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Discreto</span></div></td><td colspan="1" rowspan="1"><div><span>Se aplica para medir la carga del vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Cerradura</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De texto</span></div></td><td colspan="1" rowspan="1"><div><span>Envía la contraseña para desbloquear la cerradura. Cuando se active, aparecerá en el menú del objeto una nueva opción: «Abrir cerradura»</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor Sleep</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>Envía una señal de que el dispositivo pasa al modo de suspensión. Cuando llega el momento de pasar al modo de suspensión, el dispositivo envía un último mensaje con&nbsp; el número del evento y después deja de transmitir datos por completo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Sensor de seguridad</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>Puede encontrarse&nbsp; en dos estados: «activado» o «desactivado». Por ejemplo, un sensor de este tipo controla la apertura de una puerta o ventana ante una posible intrusión</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Conexión de la batería</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; De dos posiciones</span></div></td><td colspan="1" rowspan="1"><div><span>Determina si la batería está conectada o no</span></div></td></tr><tr><td colspan="1" rowspan="1"><div>&nbsp;</div><div><a href="nastrojka-otnositelnogo-odometra.html"><span><span>Odómetro relativo</span></span></a></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; De impulsos</span></div></td><td colspan="1" rowspan="1"><div><span>Sensor para calcular el kilometraje a partir de los datos del velocímetro u otro equipo conectado. Tiene en cuenta la distancia recorrida cuando los datos GPS/GLONASS no están disponibles o no son suficientemente precisos.</span></div><div><span>El terminal cuenta los impulsos entre los envíos de mensajes, y PILOT suma los valores recibidos y los convierte en distancia.</span></div><div><span>Para configurarlo, indique el número de impulsos por kilómetro. El valor se determina por separado para cada vehículo, ya que depende del equipo instalado. Por ejemplo, si 1000 impulsos corresponden a un kilómetro, indique el valor 1000 en el campo «Impulsos por kilómetro»</span></div></td></tr></tbody></table>
