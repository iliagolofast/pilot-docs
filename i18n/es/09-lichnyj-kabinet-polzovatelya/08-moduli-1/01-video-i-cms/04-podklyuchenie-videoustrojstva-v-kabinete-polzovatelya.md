---
title: "Conexión de un dispositivo de video en la cuenta de usuario"
---

Una vez que el administrador haya [configurado los módulos](nastrojka-modulej-v-paneli-administratora.html) «Video» y «CMS» en el panel de administración, el usuario debe crear un objeto y configurar las cámaras.

## Creación de un objeto

1\. Inicie sesión en la cuenta de usuario

2\. Vaya a la sección «Principal»

3\. Haga clic en «Crear objeto» ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom.png)

![Conexión de un dispositivo de video en la cuenta de usuario](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen.png)

4\. Complete los datos en la [ficha del objeto](../../obekty-1/kartochka-obekta/index.html):

-   Número del vehículo o nombre del objeto
    
-   Número de ID del dispositivo
    
    5\. En el campo «Tipo de dispositivo» seleccione:
    
-   CMS, si tiene un dispositivo CMS
    
-   Howen, si tiene un dispositivo Howen
    
-   u otros
    

![Conexión de un dispositivo de video en la cuenta de usuario](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen_2.png)

1 — Tipo de dispositivo

2 — Plantilla. Para CMS el sistema ya incluye plantillas globales predefinidas (ajustes para una conexión rápida)

Para los demás dispositivos no hay plantillas, por lo que simplemente seleccione el tipo de dispositivo.

6\. Haga clic en «Guardar»: los ajustes se aplicarán y el objeto aparecerá en la lista.

## Configuración de las cámaras del objeto

Después de guardar el objeto, debe indicar cuántas cámaras están conectadas y cómo funcionarán.

1\. Abra la ficha del objeto: haga doble clic sobre el objeto en la lista

2\. Vaya a la pestaña «Video»

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_2.png)

3\. Haga clic en «Añadir cámara» ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_3.png)

4\. Indique:

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_4.png)

-   Nombre de la cámara
    
-   Tipo de dispositivo
    
-   Número de canal
    
    Si marca la casilla Main stream, la cámara transmitirá video en alta calidad (imagen nítida, más detalles), pero el consumo de tráfico de Internet será mayor.
    

Si no marca la casilla, se utilizará el sub-flujo: la calidad de imagen será menor, pero el tráfico se consumirá de forma más económica.

5\. Haga clic en «Guardar»

6\. Repita el procedimiento para todas las cámaras que desee añadir

## Conexión de un dispositivo de video adicional

En el sistema PILOT es posible añadir a un objeto un dispositivo de video adicional si ya tiene uno principal (por ejemplo, Teltonika).

Por ejemplo, esto es necesario en los casos en que:

-   Teltonika recopila la telemetría (velocidad, recorridos, sensores),
    
-   y CMS o Howen se encarga del video.
    

De este modo, un mismo objeto puede trabajar simultáneamente con datos GPS y con flujo de video.

### Adición de un dispositivo adicional

1\. Abra la ficha del objeto

![Conexión de un dispositivo de video en la cuenta de usuario](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_screen_3.png)

2\. Vaya al campo «IMEI adicional» y haga clic en ![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_5.png)

3\. En la ventana que se abre, haga clic en el botón «Añadir»

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_6.png)

4\. En la lista, seleccione el tipo de dispositivo

5\. Al añadir el dispositivo puede seleccionar los parámetros:

![](images/drex_podklyuchenie_videoustrojstva_v_kabinete_polzovatelya_custom_7.png)

-   Ignorar coordenadas
    
    Las coordenadas del dispositivo de video adicional no se tendrán en cuenta, ya que el dispositivo principal ya transmite las coordenadas.
    
-   Ignorar Retrans
    
    Se desactivará la retransmisión de datos del dispositivo adicional, para que los datos no se dupliquen ni interfieran con la telemática principal.
    

6\. Haga clic en «Guardar» y no olvide guardar también los cambios en la ficha del objeto.
