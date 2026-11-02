---
title: "Cómo trabajar con las notificaciones Webhook"
---

Webhook es una forma de transmitir automáticamente datos sobre eventos desde el sistema a un servicio externo o a su servidor.

Por ejemplo, si un vehículo superó la velocidad, el sistema enviará por sí mismo una solicitud a la dirección que usted indique y transmitirá la información del evento.

### Cómo funcionan las notificaciones Webhook

1\. Usted indica una URL: la dirección a la que se enviarán los datos

2\. Cuando se activa la notificación, el sistema envía una solicitud POST con JSON

3\. Su servidor recibe los datos y los procesa como necesite

Antes de empezar, asegúrese de que:

— la URL es correcta y está accesible

— el servidor responde con el código 200 (OK)

— si el servidor no responde o devuelve un error, la dirección pasará temporalmente a la lista negra

## Cómo configurar un Webhook

1\. Vaya a la [creación](kak-sozdat-uvedomlenie.html) o edición de una notificación

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom.png)

2\. En el bloque «Tipo y nombre» seleccione el método de envío Webhook

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_2.png)

3\. Para configurar las notificaciones Webhook, haga clic en el campo de edición ![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_3.png): se abrirá la ventana Webhook Details, donde se definen los parámetros de envío de datos.

En la ventana Webhook Details verá tres campos:

![Cómo trabajar con las notificaciones Webhook](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen.png)

<table><tbody><tr><td><div><strong>1. URL</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Indique la dirección a la que se enviarán los datos.

<table><tbody><tr><td><div><strong>2. Header (Encabezado)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Aquí se indica el formato de los datos transmitidos. De forma predeterminada ya está establecido el valor necesario:

<table><tbody><tr><td><span></span></td><td><div>["ContentType: application/json"]</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>3. Body (Cuerpo de la solicitud)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

Son los datos que se enviarán. De forma predeterminada se usa la siguiente plantilla:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": "%AGENTID%",</div><div>&nbsp;"vehiclenumber": "%VEHNUM%",</div><div>&nbsp;"ts": "%TS%",</div><div>&nbsp;"lat": "%LAT%",</div><div>&nbsp;"lon": "%LON%",</div><div>&nbsp;"speed": "%SPEED%",</div><div>&nbsp;"data": "%DATA%",</div><div>&nbsp;"zone": "%ZONE%",</div><div>&nbsp;"driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>4. Variables para el cuerpo de la solicitud</strong></div><div>Puede modificar o ampliar el cuerpo de la solicitud usando&nbsp;las variables permitidas&nbsp;de la lista de la derecha.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Respete el formato de escritura:&nbsp;"value":&nbsp; "%VALUE%". Si se infringe la sintaxis, el Webhook no funcionará.</div></td></tr></tbody></table>

**Variables permitidas**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Variable</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Qué transmite</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID de la cuenta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID del objeto</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Matrícula del vehículo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Marca de tiempo (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fecha y hora</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitud</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitud</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Kilometraje (según el sensor)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Datos de la notificación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Geocerca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID de la primera geocerca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Nombre de la primera geocerca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Conductor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Velocidad máxima (para notificaciones de exceso)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Duración del exceso</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Límite de velocidad establecido (Control de velocidad)</span></div></td></tr></tbody></table>

### Cómo insertar el valor de un sensor

Si necesita transmitir los datos de un sensor concreto:

1\. Abra la pestaña [«Sensores»](../../datchiki-1/dobavlenie-datchika.html#как_добавить_датчик)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_4.png)

![Cómo trabajar con las notificaciones Webhook](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen_2.png)

2\. Copie el nombre exacto del sensor

3\. Vuelva a la ventana de ajustes del Webhook e inserte en el campo Body la variable con el formato: %Nombre del sensor%. Por ejemplo, si el sensor se llama Fuel sensor status, escriba %Fuel sensor status%.

### Cómo obtener datos sin procesar

Puede transmitir datos directamente desde el dispositivo:

1\. Vaya a la pestaña [«Puntos»](../../obekty-1/menyu-obekta.html#сырые_точки)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_5.png)

2\. Busque el parámetro en la columna «Datos sin procesar»

3\. Insértelo en el campo Body de la ventana Webhook con el formato %Nombre del parámetro%. Por ejemplo, si el parámetro se llama Valid, escriba %Valid%.

## Ejemplo de solicitud

Cuando se active la notificación, a su servidor llegarán datos con un aspecto aproximado al siguiente:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": 4328,</div><div>&nbsp;"ts": 1545254055,</div><div>&nbsp;"data": ["У286НМ 67", "Parkingdur", "2", "1", "мм"]</div><div>}</div></td></tr></tbody></table>

El conjunto de datos depende de las variables que haya indicado en el cuerpo de la solicitud y del tipo de notificación configurado.
