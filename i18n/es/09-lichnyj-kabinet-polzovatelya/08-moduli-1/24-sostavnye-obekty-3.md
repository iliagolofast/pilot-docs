---
title: "Objetos compuestos"
---

El módulo «Objetos compuestos» sirve para agrupar varios objetos de combustible y sensores en un único objeto lógico y supervisarlos como un sistema unificado de control de combustible.

Ayuda a construir un esquema claro del movimiento del combustible, desde la fuente y el almacenamiento hasta el suministro, y a calcular correctamente las entradas, los consumos y los saldos.

![](images/drex_sostavnye_obekty_3_custom.png)

El módulo será útil en los siguientes escenarios:

— si se utiliza un camión cisterna con varias secciones

— si hay una gasolinera estacionaria o un depósito de combustible

— si es necesario contabilizar la recepción, el almacenamiento y el suministro de combustible dentro de un mismo esquema

En el módulo usted puede:

— [crear](sostavnye-obekty-3.html#Как_добавить_элементы_в_составной_объект) y configurar objetos compuestos

— [añadirles](sostavnye-obekty-3.html#Как_добавить_элементы_в_составной_объект) elementos (objetos) y sensores

— usarlos en los [informes](sostavnye-obekty-3.html) y en el monitoreo para los cálculos de combustible

## Cómo crear un objeto compuesto

1.  Antes de crear un objeto compuesto, asegúrese de que en el sistema ya estén configurados:

— los objetos necesarios (vehículos, cisternas y otros elementos que formarán parte del esquema)

— los sensores correspondientes

Todos los [objetos](../obekty-1/kak-dobavit-obekt-1.html) y [sensores](../datchiki-1/dobavlenie-datchika.html) deben estar añadidos y configurados correctamente de antemano; solo entonces se pueden agrupar en un objeto compuesto.

2\. Vaya a «Principal» → «Objetos compuestos»

![Objetos compuestos](images/drex_sostavnye_obekty_3_screen.png)

3\. Haga clic en el botón para añadir un objeto ![](images/drex_sostavnye_obekty_3_custom_2.png)

4\. Indique el nombre del objeto compuesto

![](images/drex_sostavnye_obekty_3_custom_3.png)

5\. Aparecerá en la lista de la pestaña «Objetos compuestos»

![Objetos compuestos](images/drex_sostavnye_obekty_3_screen_2.png)

## Cómo añadir elementos a un objeto compuesto

1\. Abra el objeto compuesto creado

2\. Haga clic en el botón para añadir un elemento

![Objetos compuestos](images/drex_sostavnye_obekty_3_screen_3.png)

3\. Indique:

![Objetos compuestos](images/drex_sostavnye_obekty_3_screen_4.png)

— objeto: elemento del objeto compuesto (seleccione de la lista)

— sensor (seleccione de la lista de sensores del objeto)

— fecha

— tipo de elemento: su función en el esquema de combustible:

-   Cisterna: depósito para almacenar combustible, por ejemplo, una sección de un camión cisterna, un depósito estacionario o el depósito de un generador.
    
-   Caudalímetro de entrada: cuenta el volumen de combustible que entra en el sistema, por ejemplo, la recepción en un depósito de combustible, el llenado de una cisterna estacionaria o el registro de la entrada antes del almacenamiento.
    
-   Caudalímetro: cuenta el volumen de combustible que sale de la cisterna, por ejemplo, el repostaje de vehículos, el despacho de combustible a clientes o el suministro de combustible a equipos.
    
-   Cisterna de entrada: fuente externa de combustible, por ejemplo, un gran depósito externo del proveedor.
    

![](images/drex_sostavnye_obekty_3_custom_4.png)

4\. Haga clic en «Guardar»

El elemento pasará a formar parte del objeto compuesto y aparecerá en la lista. Haga clic en él: se mostrará en el esquema.

![](images/drex_sostavnye_obekty_3_custom_5.png)

Añada todos los elementos necesarios.

![](images/drex_sostavnye_obekty_3_custom_6.png)

## Configuración del esquema

En la parte inferior de la ventana se encuentra el bloque del esquema.

![](images/drex_sostavnye_obekty_3_custom_6.png)

1\. Arrastre los elementos con el ratón a la posición deseada

2\. Conéctelos con flechas, de la entrada a la salida

3\. Haga clic en «Guardar» bajo el esquema

![](images/drex_sostavnye_obekty_3_custom_7.png)

Después, el sistema utilizará este esquema en los cálculos y los informes de combustible.

![](images/drex_sostavnye_obekty_3_custom.png)

## Trabajo con la lista de objetos compuestos

![Objetos compuestos](images/drex_sostavnye_obekty_3_screen_5.png)

1 — Filtro en la lista de objetos

2 — Búsqueda

Si la lista es grande, puede:

 — usar el filtro

— utilizar el campo «Búsqueda»

Para actualizar la lista, utilice el botón ![](images/drex_sostavnye_obekty_3_custom_8.png).

Para crear un nuevo objeto compuesto, haga clic en ![](images/drex_sostavnye_obekty_3_custom_9.png) .

Para eliminar un elemento o todo el objeto compuesto, haga clic en el botón de eliminar ![](images/drex_sostavnye_obekty_3_custom_10.png) junto a él en la lista.

Para editar un objeto, haga doble clic en él en la lista: se abrirá la ventana de edición.
