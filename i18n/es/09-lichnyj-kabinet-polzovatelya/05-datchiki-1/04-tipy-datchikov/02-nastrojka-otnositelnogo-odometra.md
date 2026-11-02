---
title: "Configuración del odómetro relativo"
---

El sensor «Odómetro relativo» calcula el kilometraje del objeto a partir del número de impulsos transmitidos por el terminal. Es adecuado para equipos que cuentan los impulsos antes de enviar el paquete de datos y, después del envío, empiezan un nuevo recuento.

PILOT suma los valores de los mensajes recibidos y los convierte en kilómetros. Para el cálculo se utiliza el coeficiente «Impulsos por kilómetro».

Configure el sensor por separado para cada objeto: el número de impulsos por kilómetro depende del vehículo y del equipo instalado.

![](images/drex_nastrojka_otnositelnogo_odometra_custom.png)

Antes de configurar, asegúrese de que:

— el terminal transmite el número de impulsos en un campo aparte

— cada valor contiene el número de impulsos contados desde el envío del paquete anterior

— se conoce el número de impulsos que corresponde a un kilómetro de recorrido

Si el terminal transmite un contador total que aumenta continuamente, el sensor «Odómetro relativo» de tipo «De impulsos» no es adecuado para esos datos.

## Cómo añadir el sensor

-   Añada un nuevo sensor al objeto
    
    3\. En el campo «Finalidad», seleccione «Odómetro relativo».
    
    4\. Asegúrese de que en el campo «Tipo» figure el valor «De impulsos»
    
    5\. En el campo «Nombre», indique un nombre descriptivo del sensor, por ejemplo «Odómetro relativo»
    
    6\. En el campo «Campo», indique el parámetro en el que el terminal transmite el número de impulsos
    
    7\. Si es necesario, complete la «Fórmula de conversión». Si el terminal transmite el número de impulsos ya listo y no se requiere ninguna conversión adicional, deje el campo vacío
    
    8\. En el campo «Impulsos por kilómetro», indique el número de impulsos que corresponde a un kilómetro de recorrido
    

![Configuración del odómetro relativo](images/drex_nastrojka_otnositelnogo_odometra_screen.png)

9\. Si es necesario, active «Filtrar valores» para excluir las lecturas incorrectas

10\. Haga clic en «Guardar»

Después de guardar, PILOT empezará a sumar los valores del campo seleccionado y a calcular el kilometraje teniendo en cuenta el número establecido de impulsos por kilómetro.

## Cálculo del kilometraje por impulsos

Un impulso es una señal que el terminal recibe del equipo conectado cuando el vehículo se desplaza. Cuanto mayor es la distancia que recorre el vehículo, más impulsos registra el terminal.

En cada paquete, el terminal transmite el número de impulsos acumulados desde el envío del paquete anterior. PILOT suma estos valores durante el período seleccionado y calcula el kilometraje con la fórmula: **Kilometraje, km = suma de impulsos ÷ número de impulsos por kilómetro**

Por ejemplo, en los ajustes del sensor se indican 1000 impulsos por kilómetro. Durante un viaje, el terminal transmitió tres valores: 200, 350 y 450.

Primero PILOT suma los impulsos: 200 + 350 + 450 = 1000 impulsos

Después calcula el kilometraje: 1000 ÷ 1000 = 1 km

El valor del campo «Impulsos por kilómetro» debe ser mayor que cero. Cuanto más preciso sea el coeficiente indicado, más preciso será el kilometraje calculado.

## Cómo determinar el número de impulsos por kilómetro

Si no conoce el coeficiente, determínelo mediante un viaje de control:

1\. Registre las lecturas iniciales del kilometraje y del contador de impulsos

2\. Recorra la distancia de control. Para obtener un resultado más preciso, es mejor elegir un tramo suficientemente largo, por ejemplo, 10 kilómetros

3\. Determine el número total de impulsos recibidos durante el viaje

4\. Divida el número de impulsos entre la distancia recorrida: **Impulsos por kilómetro = número de impulsos ÷ distancia, km**

Por ejemplo, en 10 kilómetros el terminal transmitió 12 500 impulsos: 12 500 ÷ 10 = 1250 impulsos por kilómetro

Indique 1250 en el campo «Impulsos por kilómetro».

Después de la calibración, realice otro viaje de control y compare el kilometraje calculado con el real. Si los valores difieren, ajuste el coeficiente.

## Comprobación del cálculo

Compare el kilometraje calculado con el kilometraje real del vehículo en el tramo de control.

Si los valores difieren:

— compruebe si se ha seleccionado correctamente el campo con el número de impulsos

— asegúrese de que el terminal empieza un nuevo recuento después de enviar cada paquete

— corrija el valor de «Impulsos por kilómetro»

— compruebe que los datos recibidos estén completos

Si una parte de los paquetes no llegó a PILOT, el kilometraje calculado puede ser menor que el real.
