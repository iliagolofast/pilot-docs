---
title: "Visualización de gasolineras en el mapa"
---

En el mapa principal de PILOT se pueden ver las gasolineras de las redes de combustible conectadas. Puede ver la ubicación de las estaciones de servicio y comprobar cuáles están cerca de los objetos.

Las coordenadas de las gasolineras añadidas también se utilizan [al comprobar las operaciones](tranzaktsii.html#Проверка_совпадения_координат) con tarjetas de combustible. PILOT compara la ubicación del objeto durante la operación con la ubicación de la gasolinera indicada.

![](images/drex_otobrazhenie_azs_na_karte_custom.png)

## Cómo mostrar las gasolineras

1\. Abra la lista «Tipos de repostaje» en el mapa

2\. Marque las casillas junto a las redes de combustible deseadas

En el mapa aparecerán las gasolineras de las redes seleccionadas ![](images/drex_otobrazhenie_azs_na_karte_custom_2.png). Para ocultar las estaciones de una red determinada, desmarque la casilla correspondiente.

![](images/drex_otobrazhenie_azs_na_karte_custom_3.png)

En la lista solo se muestran las redes de combustible [conectadas para la cuenta](podklyuchenie-spravochnika-azs.html). Si la red o la gasolinera que necesita no está, póngase en contacto con el soporte técnico.

Para añadir una gasolinera, prepare:

— el nombre de la red de combustible

— la dirección

— la latitud y la longitud

El soporte técnico comprobará los datos y añadirá la gasolinera al sistema.

## Comprobación de coordenadas al realizar una operación

Después de añadir la gasolinera, sus coordenadas se tendrán en cuenta al comprobar las transacciones. Para ver el resultado:

1\. Vaya al módulo «Tarjetas de combustible»

2\. Abra la pestaña «Transacciones»

3\. Seleccione la operación deseada en la lista

4\. Consulte el campo [«Coincidencia de coordenadas»](tranzaktsii.html#Проверка_совпадения_координат) en los detalles de la operación:

-   estado verde «Coincidencia»: el objeto se encontraba a no más de 100 metros de las coordenadas guardadas de la gasolinera
    
-   estado rojo «Sin coincidencia»: el objeto se encontraba a más de 100 metros de las coordenadas guardadas de la gasolinera
    

![](images/drex_otobrazhenie_azs_na_karte_custom_4.png)

Si las coordenadas de la gasolinera aún no se han añadido, PILOT no podrá realizar correctamente la comprobación. En ese caso, póngase en contacto con el soporte técnico y facilite la dirección, la latitud y la longitud de la estación.
