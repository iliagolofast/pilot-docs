---
title: "Configuración del sensor de combustible"
---

El sensor de combustible del sistema tiene muchos parámetros. Aquí veremos cómo configurarlo correctamente para obtener datos precisos y registrar bien los eventos de repostaje y drenaje de combustible.

![](images/drex_nastrojka_datchika_topliva_custom.png)

### Ajustes generales del sensor

-   Finalidad: tipo de sensor en el sistema
    
-   Tipo: principio de funcionamiento del sensor, por ejemplo, «Discreto»
    
-   Nombre: nombre interno del sensor que se muestra en la interfaz
    
-   Campo: entrada de hardware del rastreador a la que está conectado el sensor
    
-   Descripción: información adicional sobre el sensor
    
-   Unidades de medida: normalmente litros («л.»)
    
-   Fórmula de conversión: si es necesario corregir los datos
    
-   Etiquetas: marcas para buscar y filtrar los sensores con comodidad
    

### Detección de repostajes y drenajes de combustible

Para determinar correctamente los repostajes y drenajes de combustible, es necesario configurar bien en el sistema los parámetros de filtrado y los umbrales de activación. Esto permite excluir eventos falsos y aumentar la precisión de los datos.

-   Interruptor «Activo»: activa o desactiva el análisis de repostajes y drenajes mediante este sensor.
    
    Para los sensores de combustible: todos los sensores activados del objeto se suman primero para obtener el volumen total de combustible del vehículo y solo después se buscan los eventos en la suma. Si se desactiva, el sensor funciona como uno normal, sin búsqueda de repostajes ni drenajes.
    

### Drenaje por la línea de retorno

La función «Drenaje por la línea de retorno» ayuda a detectar robos ocultos a través de la línea de retorno, la tubería de combustible por la que el combustible no utilizado vuelve al depósito.

![](images/drex_nastrojka_datchika_topliva_custom_2.png)

Después de activar la función, el sistema analiza el consumo anómalo de combustible durante el movimiento, calcula el volumen del posible drenaje y marca en el mapa el lugar del evento.

### Umbrales de activación

-   Umbral de repostaje: aumento mínimo del nivel de combustible que el sistema considera un repostaje
    
-   Umbral de drenaje: disminución mínima del nivel de combustible que se registra como drenaje
    

Estos parámetros ayudan a:

— ignorar las fluctuaciones insignificantes del nivel de combustible

— excluir el ruido del sensor

— registrar solo los eventos reales

### Filtro por velocidad de desplazamiento

El filtro por velocidad se utiliza para excluir eventos falsos durante el movimiento.

Por ejemplo:

— el consumo de combustible en ruta no se detectará como drenaje

— las fluctuaciones del nivel de combustible no se considerarán repostaje

El sistema analiza la velocidad del objeto en el momento del evento y, según el modo seleccionado, puede ignorar los puntos con velocidad alta.

-   Velocidad máxima para la detección (búsqueda de eventos): velocidad en km/h por debajo de la cual el vehículo se considera detenido
    
-   Modo de velocidad: cómo comprobar exactamente la velocidad dentro del evento
    
    Opciones del modo de control de velocidad:
    

![](images/drex_nastrojka_datchika_topliva_custom_3.png)

-   Todos los puntos: todos los puntos del evento deben estar por debajo del umbral de velocidad establecido
    
-   Inicio: basta con que solo el primer punto del evento esté por debajo del umbral de velocidad
    
-   Cualquier punto: el evento se contabiliza si al menos un punto cumple la condición (por ejemplo, está en un estacionamiento)
    
-   Velocidad media: el sistema compara la velocidad media del evento con el umbral establecido
    
-   Desactivado: desactiva la comprobación de velocidad. En este modo los repostajes y drenajes se registran independientemente de la velocidad
    
-   Coeficiente: comprueba si hay suficientes puntos con velocidad inferior al umbral. Permite ajustar el filtrado con mayor precisión mediante parámetros adicionales:
    

— Proporción mínima de puntos lentos: determina el porcentaje de puntos del evento que deben estar a baja velocidad. Por ejemplo: el valor 0.5 significa no menos del 50 %

— Duración mínima del estacionamiento: establece el tiempo total durante el cual el objeto debe permanecer a baja velocidad

Este modo resuelve las situaciones en las que el inicio del repostaje o su «cola» coincidieron con un breve tramo de movimiento, pero en realidad el vehículo estuvo detenido la mayor parte del tiempo

### Filtro por velocidad de variación del combustible

Estos parámetros permiten distinguir los eventos reales del consumo natural de combustible.

-   Velocidad mínima de repostaje: velocidad mínima de aumento del nivel de combustible (l/h) para que el evento se considere un repostaje. Si el nivel de combustible aumenta demasiado despacio, el evento no se considera repostaje.
    
-   Velocidad mínima de drenaje: descenso mínimo del nivel (l/h) para que el evento se considere un drenaje. Si el combustible disminuye más despacio que el valor establecido, el evento se ignora.
    

### Sensibilidad al ruido del sensor

-   Coeficiente de suavizado: grado de suavizado del gráfico antes del análisis. Se utiliza cuando hay ruido en los datos del sensor de combustible.
    
    Cuanto mayor es el valor, más suave es el gráfico y menos saltos bruscos, causados a menudo por errores del sensor.
    

### Eliminación de eventos simétricos

Esta función ayuda a excluir del informe operaciones falsas en las que el repostaje y el drenaje se producen con volúmenes casi idénticos (por ejemplo, por la inclinación de la carretera o un fallo técnico).

-   Interruptor «Eliminar repostajes/drenajes simétricos»: activa la búsqueda de pares «drenaje → repostaje» o «repostaje → drenaje» con volúmenes muy cercanos
    
-   Diferencia máxima, %: diferencia admisible de volúmenes del par en porcentaje
    
-   Diferencia máxima, l: cuánto pueden diferir los volúmenes en litros.
    
-   Distancia máxima (intervalo entre eventos), h: en qué intervalo de tiempo los eventos se consideran un «par», por ejemplo, 12 horas.
    

<table><tbody><tr><td><span></span></td><td><div>Vea el vídeo de YouTube que muestra <a href="https://youtu.be/9YfvN5r7zGA"><span>cómo configurar el detector de repostajes y drenajes de combustible</span></a>.</div><div><div><a href="https://youtu.be/9YfvN5r7zGA" title="560_315">https://youtu.be/9YfvN5r7zGA</a></div></div></td></tr></tbody></table>
