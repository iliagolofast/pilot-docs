---
title: "Asociación de una etiqueta RFID a una geocerca"
---

A una geocerca se le puede asociar una etiqueta RFID estacionaria. PILOT tiene en cuenta su lectura al determinar la visita y registra el evento incluso si las coordenadas GPS del objeto son temporalmente imprecisas.

La gestión de etiquetas RFID está disponible si:

— usted tiene derechos de administrador

—  para la cuenta está conectado el [módulo de etiquetas RFID](../rfid-metki-2/index.html)

— la geocerca pertenece a la cuenta y está disponible para su edición

## Cómo preparar la etiqueta RFID

Antes de asociarla, añada la etiqueta RFID al sistema:

1\. Abra la sección «Principal» y vaya a la pestaña «Etiquetas RFID»

2\. Cree una [nueva](../rfid-metki-2/kak-podgotovit-rfid-metki-k-rabote.html) etiqueta o edite una existente

![](images/drex_privyazka_rfid_metki_k_geozone_custom.png)

3\. Indique el ID de la etiqueta. Debe coincidir con el identificador que transmite el lector RFID

![Asociación de una etiqueta RFID a una geocerca](images/drex_privyazka_rfid_metki_k_geozone_screen.png)

4\. Indique la latitud y la longitud. Las coordenadas de la etiqueta deben estar dentro de la geocerca a la que desea asociarla

5\. Active el parámetro «Etiqueta fija»

![Asociación de una etiqueta RFID a una geocerca](images/drex_privyazka_rfid_metki_k_geozone_screen_2.png)

6\. Haga clic en «Guardar»

Si las coordenadas de la etiqueta están fuera de la geocerca, PILOT no permitirá realizar la asociación. En ese caso, compruebe las coordenadas de la etiqueta o los límites de la geocerca.

## Cómo asociar una etiqueta RFID

-   Abra la sección «Principal» y vaya a la pestaña «Geocercas»
    

2\. Marque la casilla junto a la geocerca deseada para mostrarla en el mapa

![](images/drex_privyazka_rfid_metki_k_geozone_custom_2.png)

3\. Asegúrese de que la etiqueta RFID esté dentro de la geocerca

![](images/drex_privyazka_rfid_metki_k_geozone_custom_3.png)

4\. Haga clic con el botón derecho del ratón en la geocerca y seleccione «Gestión de etiquetas RFID»

![](images/drex_privyazka_rfid_metki_k_geozone_custom_4.png)

5\. Busque la etiqueta deseada y márquela en la columna de asociación.

Para buscar una etiqueta por nombre o identificador, utilice el campo «Búsqueda».

![](images/drex_privyazka_rfid_metki_k_geozone_custom_5.png)

Para mostrar solo las etiquetas ya asociadas a la geocerca seleccionada, haga clic en «Asociadas»

![Asociación de una etiqueta RFID a una geocerca](images/drex_privyazka_rfid_metki_k_geozone_screen_3.png)

6\. Haga clic en «Guardar»

La etiqueta RFID quedará asociada a la geocerca. Si las coordenadas de la etiqueta están fuera de ella, PILOT no permitirá realizar la asociación.

## Cómo se determina la visita

Cuando un objeto detecta la etiqueta RFID asociada a la geocerca, PILOT tiene en cuenta esta lectura independientemente de las coordenadas GPS actuales. Por ello, la visita puede registrarse incluso si, según los datos del GPS, el objeto está fuera de la geocerca.

La visita a una geocerca es el período entre la entrada y la salida, y no cada lectura individual de la etiqueta.

La salida se registra cuando se cumplen ambas condiciones:

— el objeto ya no detecta la etiqueta RFID asociada

— según los datos del GPS, el objeto está fuera de la geocerca

Por ello, varias lecturas de la etiqueta RFID no siempre crean varias visitas. Por ejemplo, si el objeto se alejó de la etiqueta y luego la detectó de nuevo, pero según el GPS permaneció todo el tiempo dentro de la geocerca, la visita en curso no finaliza.

## Cómo ver los datos de la etiqueta en el mapa

Haga clic en la etiqueta RFID en el mapa para abrir la información emergente.

![](images/drex_privyazka_rfid_metki_k_geozone_custom_6.png)

En la información emergente se muestran:

-   fecha y hora de la última lectura
    
-   nombre de la etiqueta
    
-   identificador de la etiqueta
    
-   coordenadas
    
-   dirección
    

En el encabezado de la información emergente se muestra el objeto que detectó la etiqueta RFID por última vez. Si la etiqueta aún no se ha leído nunca, no hay datos del objeto.
