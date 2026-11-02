---
title: "Tipos de calidad de conducción"
---

Los tipos de calidad de conducción son las categorías de eventos que el sistema utiliza para clasificar las infracciones y generar los informes de «Ecoconducción».

Cada regla de calidad de conducción está asociada a un tipo de evento determinado. Cuando la regla se activa, el sistema registra un evento del tipo seleccionado.

Por ejemplo:

-   Acceleration: aceleración brusca
    
-   Braking: frenada brusca
    
-   Turn: giro brusco
    
-   Speed: exceso de velocidad
    
-   Seat Belt: infracción en el uso del cinturón de seguridad.
    

Los tipos de eventos se almacenan en un [catálogo](tipy-kachestva-vozhdeniya.html#Как_открыть_справочник_типов_качества_вождения) independiente.

Al crear o modificar una regla, el tipo deseado se selecciona de este catálogo en el campo «Tipo».

![Tipos de calidad de conducción](images/drex_tipy_kachestva_vozhdeniya_screen.png)

Si los tipos estándar no son suficientes, puede [crear los suyos propios](tipy-kachestva-vozhdeniya.html#Как_создать_новый_тип:). Tras crearlo, el nuevo tipo estará disponible al configurar las reglas.

## Cómo abrir el catálogo de tipos de calidad de conducción

1\. Abra la pestaña «Calidad de conducción»

2\. En la parte superior derecha de la ventana, busque las herramientas de gestión de los ajustes de «Ecoconducción»

![Tipos de calidad de conducción](images/drex_tipy_kachestva_vozhdeniya_screen_2.png)

3\. Haga clic en el botón «Tipos de calidad de conducción»

![Tipos de calidad de conducción](images/drex_tipy_kachestva_vozhdeniya_screen_3.png)

Se abrirá el catálogo de tipos de eventos.

![](images/drex_tipy_kachestva_vozhdeniya_custom.png)

Estos son los tipos que se utilizan al seleccionar el valor en la columna «Tipo» (Acceleration, Braking, Turn, Speed, Seat Belt)

![](images/drex_tipy_kachestva_vozhdeniya_custom_2.png)

## Cómo crear un nuevo tipo

1\. En el catálogo de tipos de eventos, haga clic en «Añadir» ![](images/drex_tipy_kachestva_vozhdeniya_custom_3.png)

2\. Indique el nombre del evento

![](images/drex_tipy_kachestva_vozhdeniya_custom_4.png)

3\. Haga clic en «Guardar».

Tras guardar, el sistema asignará automáticamente al nuevo tipo un identificador único (ID). El sistema lo utiliza para determinar de forma inequívoca el tipo de evento y no requiere configuración manual.

![](images/drex_tipy_kachestva_vozhdeniya_custom_5.png)

Para cambiar el nombre del tipo, haga doble clic en la fila, realice los cambios y guárdelos.

Para eliminar un tipo, use el botón «Eliminar» ![](images/drex_tipy_kachestva_vozhdeniya_custom_6.png).

<table><tbody><tr><td><span></span></td><td><div>Elimine los tipos solo si ya no se utilizan en las reglas. Si un tipo ya se está aplicando, primero sustitúyalo en las reglas existentes y después elimínelo.</div></td></tr></tbody></table>
