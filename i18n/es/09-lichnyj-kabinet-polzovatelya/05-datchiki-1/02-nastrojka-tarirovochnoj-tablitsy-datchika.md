---
title: "Configuración de la tabla de calibración del sensor"
---

En PILOT hay dos tipos de tabla de calibración: la tabla de calibración con gráfico y la tabla de calibración con estados de texto. La tabla de calibración solo se puede editar después de guardar el nuevo sensor.

La tabla de calibración es una tabla de correspondencias que convierte las lecturas técnicas del sensor en valores comprensibles.

Veamos un ejemplo de uso de la tabla de calibración para un sensor de nivel de combustible

Supongamos que tenemos un depósito de combustible de forma no estándar, por lo que su volumen no puede expresarse mediante una dependencia simple del nivel de combustible.

Instalamos en él un sensor de nivel de combustible que funciona con el principio reostático. No mide directamente el volumen de combustible, sino que modifica su resistencia eléctrica según el nivel del líquido. Como resultado, el sensor entrega los datos en ohmios y no en litros.  El rango de resistencia del sensor va de 10 a 180 ohmios. Para determinar correctamente el nivel de combustible en el depósito, es necesario realizar la calibración y crear una tabla de correspondencias.

Calibración del depósito:

1\. Vaciamos por completo el depósito y registramos el valor mínimo de resistencia del sensor

2\. Después añadimos combustible por porciones, por ejemplo, de 10 litros, y anotamos las lecturas de resistencia

3\. Registramos las lecturas del sensor después de cada llenado

4\. Repetimos el proceso hasta llenar por completo el depósito

5\. Creamos la tabla de calibración: la correspondencia entre el nivel de combustible en litros y la resistencia del sensor en ohmios

Ejemplo de tabla de calibración para un depósito de 100 litros

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Nivel de combustible, l</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Resistencia del sensor, Ω</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 180</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 160</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 140</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 120</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 40</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 100</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 50</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 80</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 60</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 60</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 70</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 50</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 80</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 40</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 90</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 100</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td></tr></tbody></table>

Cuando el sensor transmite, por ejemplo, 100 ohmios, el sistema entiende por la tabla de calibración que en el depósito hay aproximadamente 40 litros de combustible. Si el sensor transmite 110 ohmios, el sistema calcula que el nivel de combustible es de aproximadamente 35 litros.

## Tabla de calibración con gráfico 

Tipo de tabla de calibración en la que las lecturas del sensor se convierten en valores reales mediante un gráfico de dependencia. En el eje X se indican las lecturas del sensor y en el eje Y, los valores reales de la magnitud medida. Entre los puntos obtenidos se traza un gráfico que determina el valor real para la lectura del sensor. Este tipo de tabla de calibración se aplica con frecuencia a sensores de nivel de combustible, peso, temperatura y humedad.

**![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom.png)**

### Cómo crear la tabla

Puede configurar la tabla en la ventana de parámetros del sensor o cargar una ya preparada desde un archivo. La tabla configurada se puede guardar en un archivo y utilizar para otros sensores similares.

![Configuración de la tabla de calibración del sensor](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_screen.png)

Para abrir la tabla de calibración, haga clic en «Editar».

<table><tbody><tr><td><div><h3>Editar la tabla</h3></div><div><img alt="1. " src="images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_control_1.png" data-full-src="drex_nastrojka_tarirovochnoj_tablitsy_datchika_control_1.png" data-full-width="188" data-full-height="33"></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_2.png)

Cómo añadir valores a la tabla:

-   Haga clic en «Añadir»  ![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_3.png)
    

2\. Introduzca la cantidad real de combustible y el valor que muestra el sensor

3\. Haga clic en «Guardar»

4\. Repita los pasos para todas las lecturas necesarias

Ejemplo de tabla completada

**![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom.png)**

## Tabla de calibración con estados de texto

Este tipo de tabla de calibración se utiliza para sensores multiposición y convierte los valores numéricos del sensor en estados comprensibles para el usuario.

![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_4.png)

Veamos un ejemplo de uso de una tabla de este tipo

Por ejemplo, tenemos un sensor multiposición de la antena GPS que muestra el nivel de la señal. El receptor GPS mide la intensidad de la señal en dBm, con valores que normalmente se sitúan entre -160 dBm y -120 dBm.

En la tabla convertimos los valores técnicos que envía el sensor en estados comprensibles: «Sin señal», «Señal débil», «Señal media», «Señal buena».

Cuando el sensor envía un valor, por ejemplo, -135 dBm,  el sistema encuentra la correspondencia en la tabla y la convierte en un estado de texto: «Señal débil». El estado de texto se refleja en la [sugerencia emergente](../obekty-1/dopolnitelnaya-informatsiya-ob-obekte.html) del objeto y en los [informes](../otchyety-1/index.html).

Una tabla de calibración de este tipo puede utilizarse para distintos parámetros;  por ejemplo, se pueden definir rangos de valores para medir la temperatura: «Frío», de 0 a 10 °C; «Templado», de 10 a 25 °C; «Caluroso», de 25 °C en adelante;  o mostrar la carga de la batería no en porcentaje, sino con los estados «Baja», «Media», «Completa».

Cómo añadir una tabla de calibración para sensores multiposición:

-   Abra la ventana de parámetros del sensor
    
-   En la sección «Tabla de calibración», haga clic en «Editar»
    
-   En la ventana de la tabla de calibración, haga clic en «Añadir»![](images/drex_nastrojka_tarirovochnoj_tablitsy_datchika_custom_3.png)
    
-   Complete las columnas con los valores mínimo y máximo del sensor,
    
-   Establezca los estados de texto en la columna «Semántica»
    
-   Seleccione el icono y el color Background del estado.  El color del estado se utiliza en los gráficos y [en el historial](../istoriya/kak-rabotat-s-istoriej.html#трек_по_датчику) al construir el recorrido.
    
-   Haga clic en «Guardar»
