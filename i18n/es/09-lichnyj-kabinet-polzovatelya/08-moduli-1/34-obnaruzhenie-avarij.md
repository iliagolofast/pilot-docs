---
title: "Detección de accidentes"
---

El módulo de detección de accidentes muestra y procesa los eventos de tipo «accidente» que llegan del vehículo.

### Componentes del módulo

-   Ajustes de notificaciones: activación del tipo de notificación «Detección de accidente» en los «Ajustes del contrato»
    
-   Visualización de eventos en el historial: los eventos de accidente se guardan en el historial y se muestran en el mapa y en los gráficos
    

## Cómo activar las notificaciones

1\. Vaya a los «Ajustes del contrato»

2\. Abra la pestaña «Notificaciones»

![](images/drex_obnaruzhenie_avarij_custom.png)

3\. Pulse ![](images/drex_obnaruzhenie_avarij_custom_2.png)

4\. En la lista de tipos de notificaciones, active «Detección de accidente»

![](images/drex_obnaruzhenie_avarij_custom_3.png)  
5\. Pulse «Guardar»

Una vez activada, el sistema supervisará la llegada de etiquetas Crash del vehículo y enviará notificaciones

### Cómo funciona el envío de notificaciones

Cuando el vehículo envía una señal de accidente (etiqueta Crash), el sistema la comprueba:

— si se pueden descifrar los datos (Crash\_id), verá los detalles en la notificación

— si no es posible descifrarlos, recibirá el mensaje estándar: "Crash detected!"

<table><tbody><tr><td><span></span></td><td><div>Tras un accidente, el dispositivo puede enviar la misma etiqueta Crash muchas veces. Para que no reciba un flujo de notificaciones idénticas:</div><div>1. El sistema reacciona solo a&nbsp;la primera señal&nbsp;y envía la notificación</div><div>2. Las señales repetidas se ignoran hasta que llegue el primer punto «limpio» sin etiqueta de accidente</div><div>3. Si después llega de nuevo una etiqueta Crash, recibirá una nueva notificación</div><div>De este modo, por cada accidente recibe una sola notificación, y no un flujo de repeticiones.</div></td></tr></tbody></table>

##  Historial de accidentes

Para buscar y ver un evento de accidente:

-   Vaya a la sección [«Historial»](../istoriya/index.html)
    

<table><tbody><tr><td><span></span></td><td><div>Para que los eventos de accidente se muestren en el <span>«Historial»</span>, actívelos en «Ajustes del contrato» → pestaña «Mapa y geocodificación» → sección «<a href="../nastrojki-dogovora-2/karta-i-geokoding.html#отображение_событий"><span>Visualización de eventos en el mapa</span></a>» → evento «Detección de accidente»</div><div><img alt="" src="images/drex_obnaruzhenie_avarij_custom_4.png" data-full-src="drex_obnaruzhenie_avarij_custom_4.png" data-full-width="1200" data-full-height="540"></div></td></tr></tbody></table>

2\. Seleccione las fechas del presunto accidente

3\. Seleccione los recorridos del historial

4\. Abra la pestaña «Eventos» en el «Historial»

![](images/drex_obnaruzhenie_avarij_custom_5.png)

5\. Busque la dirección del evento en el mapa: estará marcada con un marcador

![](images/drex_obnaruzhenie_avarij_custom_6.png)

6\. Pulse el marcador para ver el gráfico del evento

![](images/drex_obnaruzhenie_avarij_custom_7.png)

### Qué muestra el gráfico

El gráfico muestra cómo cambiaron las cargas sobre el automóvil durante el accidente. Los datos proceden del acelerómetro, un dispositivo que registra las aceleraciones y los cambios bruscos de movimiento.

El gráfico tiene tres líneas:

-   Azul (X): movimientos del automóvil hacia delante y hacia atrás (por ejemplo, aceleración, frenada brusca o impacto frontal).
    
-   Violeta (Y): movimientos hacia la derecha y hacia la izquierda (por ejemplo, impacto lateral o giro brusco).
    
-   Verde (Z): movimientos hacia arriba y hacia abajo (por ejemplo, golpe contra un obstáculo, un bache o un impacto desde abajo).
    

Los picos y caídas bruscos corresponden al momento del impacto. Pueden utilizarse para ver el carácter de la colisión: frontal, lateral o combinada.

-   Eje Y (vertical): muestra la fuerza de aceleración / desaceleración (en unidades convencionales del acelerómetro)
    
-   Eje X (horizontal): tiempo (en milisegundos)
    
    ### Qué se ve en el gráfico
    

![](images/drex_obnaruzhenie_avarij_custom_8.png)

En este ejemplo, antes del accidente las líneas oscilan alrededor de 0: el automóvil circula con regularidad, sin aceleraciones bruscas.

En el centro hay una caída brusca hacia abajo (X azul e Y violeta): es el momento de la colisión, una frenada fuerte con un componente de desplazamiento lateral.

Después del impacto las líneas vuelven cerca de cero, pero queda una pequeña «ondulación»: son las oscilaciones posteriores a la colisión.
