---
title: "Controladores de sensores"
---

Los controladores son herramientas que ayudan a convertir y procesar los datos sin procesar del sensor en valores comprensibles. En lugar de escribir cada vez fórmulas complejas para cada sensor, se puede crear un único controlador y utilizarlo donde sea necesario.

Supongamos que tiene un sensor de tensión de la red de a bordo del automóvil que transmite valores en milivoltios.

![](images/drex_obrabotchiki_datchikov_custom.png)

En los puntos sin procesar buscamos el valor del sensor: Vsource = 14592

![](images/drex_obrabotchiki_datchikov_custom_2.png)

Para ver las lecturas habituales del sensor en voltios, el valor debe dividirse entre 1000.

Podemos crear un controlador que después usaremos en otros sensores en los que haya que dividir el valor del sensor entre 1000.

## Cómo crear un controlador

-   En la ventana de sensores, busque la pestaña «Controladores»
    
-   En la pestaña, haga clic en «Añadir» ![](images/drex_obrabotchiki_datchikov_custom_3.png)
    

![](images/drex_obrabotchiki_datchikov_custom_4.png)

3\. Indique el nombre del controlador. Este nombre se utilizará después en el campo «Fórmula» de la ventana de configuración del sensor. El campo debe contener solo letras latinas, números y signos

4\. En el campo «Fórmula», escriba la fórmula que utilizará este controlador. Si en la fórmula indica el campo con los datos del sensor que transmite el sensor, utilice los símbolos [%%](primenenie-formul.html#экранирующие_символы) alrededor del nombre del campo, por ejemplo, %fuel\_1% o %value%

5\. Añada la descripción del controlador para saber para qué se utiliza

6\. Haga clic en «Guardar»

## Cómo configurar la tabla de calibración

En el controlador se puede configurar una tabla de calibración que el controlador tendrá en cuenta. Esta tabla ayuda a convertir las lecturas técnicas del sensor en valores comprensibles.

Para configurar la tabla de calibración:

-   Haga clic en el icono  ![](images/drex_obrabotchiki_datchikov_custom_5.png)
    
-   En la ventana de la tabla de calibración del controlador, haga clic en «Añadir» ![](images/drex_obrabotchiki_datchikov_custom_6.png)
    

3\. Introduzca el valor real y el valor que muestra el sensor

![](images/drex_obrabotchiki_datchikov_custom_7.png)

4\. Haga clic en «Guardar»

5\. Repita los pasos para todas las lecturas necesarias

6\. Haga clic en «Guardar» en la ventana de la tabla de calibración

![](images/drex_obrabotchiki_datchikov_custom_8.png)

 En la tabla de calibración, marque con casillas las funciones «Selección del valor más cercano» y «Prioridad de calibración».

-   La función «Selección del valor más cercano» es un método de redondeo al punto de calibración más cercano. Cuando el dispositivo recibe un valor que no coincide exactamente con los puntos registrados, debe calcular el resultado. Si la opción «Selección del valor más cercano» está activada, el dispositivo tomará el valor del punto más cercano de la tabla de calibración. Si está desactivada, calculará un valor intermedio teniendo en cuenta los puntos vecinos.
    
-   La función «Prioridad de calibración» determina el orden de procesamiento de los datos al calibrar el sensor. Se da prioridad a los datos de calibración sobre los de medición; es decir, el sistema siempre empieza comprobando la tabla de calibración y la utiliza como referencia primaria. El sistema comprueba primero si el valor está en la tabla de calibración. Si se encuentra el valor exacto, lo utiliza. Solo si no hay una coincidencia exacta aplica el algoritmo de cálculo estándar.
    

![](images/drex_obrabotchiki_datchikov_custom_9.png) ![](images/drex_obrabotchiki_datchikov_custom_10.png): utilice estos botones para  cargar una tabla de calibración ya preparada desde un archivo o guardarla en el equipo.

Para eliminar un valor de la tabla, haga clic en  ![](images/drex_obrabotchiki_datchikov_custom_11.png).

## Cómo aplicar un controlador

1\. Abra el sensor en el que desea aplicar el controlador

2\. En el campo «Fórmula», escriba el nombre del controlador. Primero indique el signo «=», después el nombre del propio controlador y, entre paréntesis y símbolos %%, el campo que transmite el sensor. Por ejemplo, =divide(%fuel\_1%)

3\. Compruebe el funcionamiento del controlador con el botón «[Prueba](primenenie-formul.html#тест_формулы)»

4\. Haga clic en «Guardar» en la ventana de configuración del sensor para que el controlador se aplique a este sensor

## Veamos ejemplos de aplicación de controladores

### Ejemplo 1. Cómo convertir los datos de un sensor con un controlador

Creemos un controlador:

-   Escribamos el nombre del controlador: divide
    

2\. En el campo «Fórmula» escribamos %value%/1000. 

value es el valor enviado por el sensor, que hay que dividir entre 1000.

3.  Añadamos la descripción del controlador: «División entre 1000»

4.  Guardemos el controlador

![](images/drex_obrabotchiki_datchikov_custom_12.png)

Apliquemos el controlador:

-   Vamos a la ventana de configuración del sensor en el que hay que aplicar el controlador.
    

2\. En el campo «Fórmula» indicamos el signo «=» y el nombre del controlador; entre paréntesis y símbolos %% indicamos el valor del campo del sensor de la red de a bordo: =divide(%Vsource%)

![](images/drex_obrabotchiki_datchikov_custom_13.png)

3\. Comprobamos el funcionamiento del controlador con el botón «Prueba»

4\. Hacemos clic en «Guardar» en la ventana de configuración del sensor

Comprobemos cómo se muestran las lecturas del sensor después de aplicar el controlador

En los puntos sin procesar, el valor del sensor de la red de a bordo es: Vsource = 12626

![](images/drex_obrabotchiki_datchikov_custom_14.png)

Después de procesarlo con la fórmula, la sugerencia del objeto muestra el valor real del sensor: 12,6 V.

![](images/drex_obrabotchiki_datchikov_custom_15.png)

En este ejemplo hemos mostrado cómo realizar una operación simple con un controlador. Pero también puede usar [fórmulas](primenenie-formul.html) más complejas para él, si es necesario.

Una vez creado el controlador, podrá aplicarlo a muchos sensores del mismo tipo sin preocuparse por posibles errores en las fórmulas.

### Ejemplo 2. Cómo obtener la suma y la media de dos sensores de nivel de combustible

Supongamos que tenemos dos sensores de nivel de combustible. Y necesitamos ver su nivel total y el nivel medio de combustible.

![](images/drex_obrabotchiki_datchikov_custom_16.png)

![](images/drex_obrabotchiki_datchikov_custom_17.png)

<table><tbody><tr><td><span></span></td><td><div>Ambos sensores deben entregar los valores en las mismas unidades y para cada sensor debe estar configurada su propia tabla de calibración.</div></td></tr></tbody></table>

Creamos los controladores para cada sensor:

Controlador para el sensor 1

-   Escribamos el nombre del controlador:  fuel\_nav\_1
    

2\. En el campo «Fórmula» escribamos  %t\_53lls1% :  copiamos el nombre del campo de la tarjeta del sensor de combustible 1

3.  Guardemos el controlador

Controlador para el sensor 2

-    Nombre del controlador: fuel\_nav\_2
    

2\. En el campo «Fórmula» escribamos  %lls2% :  copiamos el nombre del campo de la tarjeta del sensor de combustible 2

3.  Guardemos el controlador

![](images/drex_obrabotchiki_datchikov_custom_18.png)

A continuación, creemos el sensor de combustible total:

-   Indiquemos el nombre y la descripción del sensor:  Sensor de combustible total
    

![](images/drex_obrabotchiki_datchikov_custom_19.png)

2\. Seleccionemos el tipo de sensor:  Discreto

3\. En el campo indicamos el flujo de uno de los sensores existentes (por ejemplo, t\_53lls1): por él llegarán los puntos y se recalculará la fórmula

4\. En la fórmula escribimos =fuel\_nav\_1()+fuel\_nav\_2()

5\. Guardemos la tarjeta del sensor de combustible total

Después de esto, en los puntos sin procesar y en la sugerencia emergente del objeto (si activó la visualización) aparecerá el nivel total de combustible de los dos depósitos.

Creemos otro sensor, el de nivel medio de combustible:

-   Indiquemos el nombre y la descripción del sensor:  Sensor de combustible medio
    
    2\. Seleccionemos el tipo de sensor:  Discreto
    
    4\. En el campo indique el flujo de uno de los sensores (por ejemplo, t\_53lls1)
    
    5\. En la fórmula escribimos  =(fuel\_nav\_1()+fuel\_nav\_2())/2
    
    6\. Guardemos la tarjeta del sensor del valor medio de combustible
    

![](images/drex_obrabotchiki_datchikov_custom_20.png)

En los puntos sin procesar comprobamos los valores de los sensores creados.

![Controladores de sensores](images/drex_obrabotchiki_datchikov_screen.png)

De este modo, el objeto tendrá cuatro sensores: «Sensor de combustible 1», «Sensor de combustible 2», «Sensor de combustible total» y «Sensor de combustible medio».

 ![](images/drex_obrabotchiki_datchikov_custom_21.png)

Con esta misma lógica se pueden procesar los datos de los sensores de temperatura.
