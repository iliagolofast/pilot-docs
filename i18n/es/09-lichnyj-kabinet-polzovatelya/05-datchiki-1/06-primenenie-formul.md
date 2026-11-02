---
title: "Uso de fórmulas"
---

La fórmula de conversión es una expresión matemática que se aplica a los datos recibidos del sensor.

Para qué aplicar una fórmula:

-   Para corregir las lecturas del sensor; por ejemplo, la fórmula permite corregir imprecisiones en las lecturas de los sensores
    
-   Para convertir los datos sin procesar del sensor en magnitudes físicas reales. Por ejemplo, el sensor entrega números de 0 a 1000 y la fórmula los convierte en los litros reales de combustible del depósito
    
-   Para convertir unidades de medida; por ejemplo, de kilómetros a millas o de litros a galones
    
-   Para combinar datos; por ejemplo, la fórmula puede aplicar valores de distintos sensores para obtener nuevos indicadores
    

En la ventana de configuración del sensor, la fórmula se aplica en un campo especial

![Uso de fórmulas](images/drex_primenenie_formul_screen.png)

<table><tbody><tr><td><span></span></td><td><div>La fórmula se aplica a los datos inmediatamente después de recibirlos del sensor, antes de&nbsp;usar la tabla de <a href="dobavlenie-datchika.html#тарировочная_таблица"><span>calibración</span></a>.</div></td></tr></tbody></table>

La fórmula debe comenzar con uno de los siguientes signos:

• signos aritméticos: +, -, \*, /

• signo de igualdad: =

En la fórmula se pueden utilizar:

• operaciones matemáticas: suma (+), resta (-), multiplicación (\*), división (/)

• paréntesis ( ) para indicar el orden de las operaciones

## Fórmulas simples

Se utilizan para operaciones simples, como multiplicar, dividir, sumar y restar. El valor original del sensor se sustituye automáticamente en la fórmula.

Veamos un ejemplo de aplicación de una fórmula

Supongamos que tenemos un sensor de carga de la batería que transmite el valor en milivoltios. En los puntos sin procesar buscamos el valor del sensor: Vsource = 9246.

![](images/drex_primenenie_formul_custom.png)

Para mostrar el valor habitual del sensor en voltios, hay que dividir el valor sin procesar entre 1000. En la ventana de configuración del sensor, en el campo «Fórmula», escribimos la fórmula: /1000.

El valor final del sensor se calculará con la fórmula Vbattery/1000:

-   El sistema toma el valor actual del sensor en los puntos sin procesar
    

2\. Divide ese valor entre 1000

3\. El resultado obtenido se convierte en el nuevo valor del sensor

![](images/drex_primenenie_formul_custom_2.png)

El valor final del sensor de la batería en voltios se mostrará en la sugerencia emergente del objeto: 9,25 V.

![](images/drex_primenenie_formul_custom_3.png)

### Ejemplos de fórmulas simples

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Fórmula</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Resultado</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multiplicar el valor original por 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/1000</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dividir el valor original entre 1000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; /25.5+7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dividir el valor entre 25.5 y sumarle 7</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; /100+(7*3-2)*4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ejemplo más complejo con paréntesis</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>En las fórmulas, los decimales se escriben con punto, no con coma. Por ejemplo: 25.4, 1.75</div></td></tr></tbody></table>

## Variables en la fórmula

En la fórmula se pueden sustituir datos de los campos de los sensores y variables estándar.

Todos los valores que se sustituyen en la fórmula se encierran entre símbolos %%

Variables estándar que se utilizan en la fórmula:

%S% — velocidad

%A% — altitud

%D% — dirección

%P% o %satsinview% — número de satélites

%ts% — hora del paquete actual

%ts1% — hora del paquete anterior

La hora se utiliza en formato Unixtimestamp: el número de segundos transcurridos desde el 1 de enero de 1970.

%value% — valor del sensor actual

Todos los demás valores se toman directamente de los nombres del paquete de datos de puntos sin procesar que envía el sensor.

![](images/drex_primenenie_formul_custom_4.png)

Por ejemplo:

%Vbattarey% — valor del sensor de carga de la batería

%GSM% — valor del nivel de señal de la red móvil

%HDOP% — disminución de la precisión en el plano horizontal

Encierre el nombre del parámetro necesario entre %%, y al calcular la fórmula se sustituirá por el valor correspondiente del paquete de datos.

### Ejemplos de fórmulas con sustitución de variables

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Fórmula</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Resultado</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; *%GSM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multiplicar el valor original por los datos del campo GSM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;/%HDOP%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dividir el valor original entre los datos del campo HDOP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts1%-%ts%</span></div></td><td colspan="1" rowspan="1"><div><span>Obtener la diferencia de tiempo entre el paquete actual y el anterior</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; %ts%/86400</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Convertir el tiempo de segundos a días</span></div></td></tr></tbody></table>

## Fórmulas complejas

Las fórmulas complejas siempre empiezan con el signo =. En estas fórmulas el valor original del sensor no se utiliza automáticamente. Si necesita usar el valor original, debe indicarlo mediante %value%.

Estas fórmulas permiten realizar operaciones más complejas, incluido el uso de variables, paréntesis y funciones matemáticas.

### Ejemplos de fórmulas complejas

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;Fórmula</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Resultado</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =%value%*2+10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Multiplicar el valor actual del sensor por 5 y sumarle 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;=%S%*3.6+%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Convertir la velocidad a km/h y sumar el valor original</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; </span><span>=</span><span>(%DIN1%+%DIN2%)/%value%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Dividir la suma de las entradas digitales entre el valor original</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; =7/%value%</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Dividir el número&nbsp;7&nbsp;entre&nbsp;el valor original del sensor</span></div></td></tr></tbody></table>

## Operadores condicionales

Los operadores condicionales son una forma de definir una lógica de selección en la fórmula. Permiten que la fórmula tome valores distintos según se cumpla o no una condición determinada. Es similar a una consulta: «Si la condición es verdadera, haz una cosa; si no, haz otra».

### El operador condicional se escribe así

condición ? valor\_si\_sí : valor\_si\_no

Esta expresión se puede explicar así:

— condición: es la expresión que se comprueba, por ejemplo, la temperatura es mayor que 30

— valor\_si\_sí: es el valor que se devuelve si la condición es verdadera

— valor\_si\_no: es el valor que se devuelve si la condición es falsa

### Operadores de comparación

En las condiciones se pueden utilizar los siguientes operadores:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>Operador</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Significado</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ==</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; igual a</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> comprueba la igualdad exacta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; !=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; distinto de</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; comprueba la desigualdad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; mayor que</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; comprueba si el valor de la izquierda es mayor que el de la derecha</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &lt;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; menor que</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; comprueba si el valor de la izquierda es menor que el de la derecha</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; &gt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; mayor o igual que</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; comprueba si el valor de la izquierda es mayor o igual que el de la derecha</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &lt;=</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; menor o igual que</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; comprueba si el valor de la izquierda es menor o igual que el de la derecha</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; &amp;&amp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; y</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; comprueba que todas las condiciones son verdaderas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; ||</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; o</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; comprueba que al menos una condición es verdadera</span></div></td></tr></tbody></table>

### Ejemplo 1

Supongamos que tenemos el campo del sensor de entrada digital DIN1 y queremos establecer la condición:

-   Si DIN1 es igual a 1, el resultado será 22
    
-   Si DIN1 no es igual a 1, el resultado será 33
    

La fórmula será así: =(%DIN1% == 1) ? 22 : 33

El sistema comprueba la condición: %DIN1% == 1 (si el valor de DIN1 es igual al número 1). Si la condición es verdadera, se devuelve 22. Si la condición es falsa, se devuelve 33.

### Ejemplo 2

Supongamos que tenemos el campo del sensor de temperatura temp y queremos establecer la condición:

-   Si la temperatura es mayor que 30, el resultado será: temperatura \* 10.
    
-   Si la temperatura es menor o igual que 30, el resultado será: temperatura \* 20.
    

La fórmula será así: =(%temp% > 30) ? %temp% \* 10 : %temp% \* 20.

El sistema comprueba la condición: %temp% > 30 (si la temperatura es mayor que 30). Si la condición es verdadera, se devuelve temperatura \* 10. Si la condición es falsa, se devuelve temperatura \* 20.

### Ejemplo 3

Supongamos que tenemos un sensor de temperatura con el campo temp y un sensor de humedad humidity, y queremos establecer la siguiente condición:

-   Si la temperatura es mayor que 25 Y la humedad es menor que 60 %, el resultado será 100
    
-   En caso contrario, el resultado será 50
    

La fórmula será así: =(%temp% > 25 && %humidity% < 60) ? 100 : 50

%temp% > 25 es la primera condición (la temperatura es mayor que 25), %humidity% < 60 es la segunda condición (la humedad es menor que 60 %). El operador && significa que deben cumplirse ambas condiciones. El sistema comprueba las condiciones y, si ambas son verdaderas, se devuelve 100; si al menos una condición es falsa, se devuelve 50.

## Funciones PHP

Las funciones PHP son herramientas predefinidas del lenguaje de programación PHP para procesar, convertir y dar formato a datos.  Con las [funciones PHP](https://www.php.net/manual/ru/ref.math.php) puede aplicar conversiones complejas simplemente indicando en la fórmula el nombre de la función y el valor.

Todo lo que tiene que hacer:

1\. Escribir el nombre de la función en la fórmula

2\. Indicar entre paréntesis el valor que desea convertir

3\. Y el sistema tomará automáticamente sus datos, los procesará del modo necesario y mostrará el resultado

Por ejemplo, si escribe round (45.78) en la fórmula, obtendrá el número redondeado 46.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Funciones</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Ejemplo</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; substr</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Extrae una parte de una cadena</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =substr('%Data%', x, y): devuelve «y» caracteres del valor Data a partir de la posición «x»</span></div><div><span>&nbsp;&nbsp; =substr('%FIELD%', 1, 2): devuelve 2 caracteres del valor FIELD a partir de la posición 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; round</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Redondea un número</span></div></td><td colspan="1" rowspan="1"><div><span>=round(%AIN1%/1000): divide el valor AIN1 entre 1000 y redondea el resultado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hexdec</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Convierte un número hexadecimal en decimal</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hexdec('%Param%'), si Param=0A, la función devolverá el valor 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; dechex</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;<span> Convierte un número decimal en hexadecimal</span></div></td><td colspan="1" rowspan="1"><div>&nbsp; =<span>dechex('%Param%'), si Param=255, la función convertirá 255 en 'FF'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; decbin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Convierte un número decimal en binario</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>=decbin('%Param%'), si Param=10, la función devolverá 1010&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; hex2bin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>Convierte una notación hexadecimal en datos binarios</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =hex2bin ('%Param%'), si Param=4142, la función devolverá la representación binaria</span></div><div><span>&nbsp; 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; strrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Invierte una cadena</span></div></td><td colspan="1" rowspan="1"><div><span>=strrev('%value%'), si value=0123d848010000e5, la función convertirá el valor &nbsp; &nbsp; &nbsp;</span></div><div><span>5е000010848d3210</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; bytesrev</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Invierte los bytes hexadecimales</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =bytesrev('%value%'), value=0123d848010000e5, la función convertirá el valor</span></div><div><span>&nbsp; e500000148d82301</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; explode</span></div></td><td colspan="1" rowspan="1"><div>&nbsp;</div><div><span><strong>&nbsp;</strong></span><span> Divide una cadena en partes según el separador indicado y devuelve un array de cadenas</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>=explode(',','%value%')[2]</span></div><div><span>Supongamos que el sensor transmite una cadena de valores separados por comas: 90.5,3450,112,43,215</span></div><div><span>La fórmula&nbsp;=explode(',','%value%')[2]&nbsp;en este caso toma las lecturas actuales del sensor y las divide en un array: '90.5', '3450', '112', '43', '215', y después extrae el elemento con índice 2 —&nbsp;'112'</span></div><div><span>Un array de cadenas&nbsp;es&nbsp; una lista de cadenas individuales, numeradas a partir de cero.</span></div><div><span>','&nbsp;es el separador, en este caso la coma. La cadena se dividirá por este carácter.</span></div><div><span>'%value%'&nbsp;es la cadena que se debe dividir.</span></div><div><span>[2]&nbsp;: los corchetes se utilizan para acceder a un elemento del array. [2] significa «dame el tercer elemento», ya que la numeración empieza en 0.</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; max</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Compara varios valores y devuelve el mayor</span></div></td><td colspan="1" rowspan="1"><div><span>=max('%value%', 90), si value=85, la función devolverá 90</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; min</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Devuelve el valor menor</span></div></td><td colspan="1" rowspan="1"><div><span>=min('%value%', 90), si value=85, la función devolverá 85</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; abs</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Devuelve el valor absoluto de un número</span></div></td><td colspan="1" rowspan="1"><div><span>=abs('%value%'), si value = -15, la función devuelve 15</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; str_replace</span></div></td><td colspan="1" rowspan="1"><div><span>Sustituye unos caracteres o palabras por otros</span></div><div>&nbsp;</div></td><td colspan="1" rowspan="1"><div><span>str_replace(search, replace, subject)</span></div><ul><li><div><span>search: lo que se busca</span></div></li><li><div><span>replace: por qué se sustituye</span></div></li><li><div><span>subject: dónde se busca (cadena)</span></div></li></ul><div><span>&nbsp;Por ejemplo, necesitamos sustituir las comas por puntos en los números</span></div><div><span>=str_replace(",", ".",'%value%'), si value = 1,234,567, la función mostrará 1.234.567</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sqrt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calcula la raíz cuadrada</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sqrt('%value%'), si value = 25 , la función devuelve el valor 5</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; pow</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Eleva un número a una potencia</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =pow('%value%', 3), si value =2, la función devuelve 8 (es decir, 2³)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calcula el seno de un ángulo (en radianes)&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =sin('%value%'), si value= 1.57, el valor final ≈ 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calcula el coseno de un ángulo (en radianes)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =cos('%value%'), si value = 0, el valor final es 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; asin</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calcula el arcoseno (en radianes)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =asin('%value%'), si value=1, la función devuelve 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; acos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Calcula el arcocoseno (en radianes)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =acos('%value%'), si value= 0, la función devuelve 1.57</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; number_format</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Da formato a un número con separadores</span><span></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; =number_format(1234.56, 2, ',', ' '), la función devolverá 1 234,56</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Devuelve la hora actual en formato UNIX, en segundos desde el 1 de enero de 1970</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =time('2023-12-20 12:00:00')</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; array_sum</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Suma todos los números de un array</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =array_sum([1,2,3,4]): la función devuelve 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; pack</span></div></td><td colspan="1" rowspan="1"><div><span>Empaqueta datos en formato binario</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =pack('H*', '4142'): empaqueta en datos binarios 'AB'</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; unpack</span></div></td><td colspan="1" rowspan="1"><div><span>Desempaqueta datos binarios</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;&nbsp; =unpack('H*', 'AB')[1]: devuelve '4142'</span></div></td></tr></tbody></table>

### Ejemplos de conversiones complejas

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Descripción</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Ejemplo</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>Conversión de un número sin signo a un número con signo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=((%BLE_T1%&gt;3000)?((%BLE_T1%-65535)/100):(%BLE_T1%/100))&nbsp;</span></div><div>&nbsp;</div><ul><li><div><span>Si el número es mayor que 3000, se le resta 65535 y se divide entre 100</span></div></li><li><div><span>Si es menor o igual que 3000, se divide entre 100</span></div><div><span>Esta fórmula se utiliza con frecuencia en sensores de temperatura, donde los valores negativos se codifican como números positivos grandes.</span></div></li></ul></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Conversión de una secuencia de bytes</span></div><div><span>&nbsp; (little endian a big endian)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;=strtoupper(substr(unpack('H*',strrev(hex2bin(%value%)))[1],2,12))&nbsp;—&nbsp;1500000124286b01&nbsp;→&nbsp;6B2824010000</span></div><ul><li><div><span>hex2bin(%value%): convierte la cadena hex en datos binarios</span></div></li><li><div><span>strrev(...): invierte los bytes</span></div></li><li><div><span>unpack('H*', ...): convierte de nuevo a hex</span></div></li><li><div><span>substr(..., 2, 12): toma la parte necesaria de la cadena</span></div></li><li><div><span>strtoupper(...): convierte a mayúsculas</span></div></li></ul></td></tr></tbody></table>

## División entre cero

Cuando la fórmula contiene una división, tenga cuidado con el divisor, el número entre el que se divide. Si el divisor es igual a cero, se producirá un error, ya que la división entre cero es matemáticamente imposible.

Por ejemplo, la fórmula =1000/%DIN1% provocará un error si el valor del sensor DIN1 es igual a 0 o no está definido.

En ese caso, utilice un operador condicional para comprobar el divisor: =(%DIN1%==0) ? 0 : 1000/%DIN1%. El sistema comprobará la condición:  %DIN1% == 0 (si el valor de DIN1 es igual a cero). Si la condición es verdadera, el resultado será 0. Si la condición es falsa, se dividirá 1000 entre el valor de DIN1.

## Cómo comprobar el funcionamiento de la fórmula

<table><tbody><tr><td><span></span></td><td><div>Cuando aplique una fórmula, asegúrese de que convierte correctamente los datos.</div></td></tr></tbody></table>

Comprobamos el funcionamiento de la fórmula con el botón «Prueba»:

![Uso de fórmulas](images/drex_primenenie_formul_screen_2.png)

-   Haga clic en el botón «Prueba» en el campo «Fórmula».
    
-   El sistema mostrará los valores que se pueden utilizar para comprobar la fórmula indicada en el controlador. Puede seleccionar valores predefinidos o introducir los suyos.
    
    3\. Después haga clic de nuevo en el botón «Prueba» y el sistema mostrará el resultado de aplicar la fórmula: correcto o incorrecto.
    

![](images/drex_primenenie_formul_custom_5.png)

## Dónde más se aplican las fórmulas

Las fórmulas de PILOT se pueden usar no solo para procesar los datos de los sensores. Puede aplicar fórmulas en la [«Tarjeta del objeto»](../obekty-1/kartochka-obekta/index.html#Формула_в_карточке_объекта) o al trabajar con el módulo [«Notificaciones»](../moduli-1/uvedomleniya/index.html). El principio de funcionamiento es el mismo en todos los casos: las mismas reglas de escritura y las mismas operaciones matemáticas.
