---
title: "Configuración de los videograbadores Jimi"
---

Los videograbadores Jimi se configuran mediante comandos de texto. Basta con enviar al dispositivo el comando necesario y este empieza a funcionar como usted lo necesita.

Con estos comandos puede:

— conectar el grabador al servidor

— indicar adónde enviar el video y los datos de los viajes

— activar la transmisión en línea

— configurar la carga automática de video en determinados eventos

En este artículo se describen los comandos que le ayudarán a poner en marcha y configurar correctamente el dispositivo.

## Comandos básicos de configuración

### 1\. Permiso de conexión al servidor

<table><tbody><tr><td><span></span></td><td><div>COREKITSW,0</div></td></tr></tbody></table>

Este comando permite que el videograbador se conecte al servidor de video de PILOT. Es decir, el comando activa la posibilidad de que el dispositivo funcione con la plataforma.

### 2\. Configuración del servidor de telemetría

<table><tbody><tr><td><span></span></td><td><div>SERVER,1,&lt;доменное имя&gt;,20056</div><div>или</div><div>SERVER,0,&lt;IP-адрес&gt;,20056</div></td></tr></tbody></table>

Aquí se indica el servidor al que se enviará la telemetría (datos de movimiento, velocidad y eventos).

-   1 — si utiliza un nombre de dominio (por ejemplo: server.example.com)
    
-   0 — si se conecta mediante una dirección IP (por ejemplo: 192.168.1.100)
    
-   20056— puerto de comunicación
    

### 3\. Configuración del servidor de carga de video

<table><tbody><tr><td><span></span></td><td><div>UPLOAD,&lt;https://server_address/upload&gt;</div></td></tr></tbody></table>

Dirección del servidor al que se enviarán los archivos de video, por ejemplo, al reproducir o cargar eventos.

### 4\. Configuración del servidor de transmisión en línea

<table><tbody><tr><td><span></span></td><td><div>RSERVICE,&lt;rtmp://server_address/live&gt;</div></td></tr></tbody></table>

Con este comando se establece el servidor RTMP para la transmisión de video en directo en tiempo real.

### 5\. Configuración del servidor de la lista de archivos

<table><tbody><tr><td><span></span></td><td><div>FILELIST,&lt;https://server_address/filelist&gt;</div></td></tr></tbody></table>

Dirección a la que el grabador envía la lista de grabaciones de video disponibles.

### 6\. Carga automática de videos de eventos

<table><tbody><tr><td><span></span></td><td><div>UPLOADSW,&lt;A&gt;,&lt;B&gt;</div></td></tr></tbody></table>

Con este comando puede indicar qué eventos deben provocar la carga automática de videos y qué cámaras se deben usar para ello.

-   A — evento en el que se cargará el video. Por ejemplo: CRASH (accidente), SOS (botón de emergencia), OVERSPEED (exceso de velocidad).
    
-   B — método de carga:
    

— OFF — desactivar la carga automática

— ON — cargar el video de ambas cámaras (frontal e interior)

— 1 — cargar solo el video de la cámara frontal

— 2 — cargar solo el video de la cámara interior

Por ejemplo: UPLOADSW,CRASH,ON: cuando se activa el evento “Accidente”, el grabador carga automáticamente el video de ambas cámaras.

## Lista de eventos

A continuación se muestra una tabla con todos los eventos que puede reconocer el grabador. Se pueden utilizar en el comando UPLOADSW.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; №</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Código del evento</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Significado</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Pulsación del botón SOS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CRASH</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Accidente</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VIBRATE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vibración / golpe</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OVERSPEED</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Exceso de velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDACC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Aceleración brusca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 6</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDDEC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Frenada brusca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDTURN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Giro brusco</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 8</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DRIVE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Modo de conducción</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 9</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; POWER</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cambio de alimentación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VOLTAGELOW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Voltaje bajo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 11</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CLOSEEYES</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fatiga / ojos cerrados</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 12</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; YAWN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Bostezo, señal de fatiga</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 13</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DISTRACTION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; El conductor se distrajo</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 14</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SMOKING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fumar al volante</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 15</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; PHONECALLING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Uso del teléfono</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 16</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYOFF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Relé desactivado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 17</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYRECOVERY</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Relé restablecido</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 18</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; MISSINGFACE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Rostro no detectado</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 19</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; NOSDCARD</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sin tarjeta SD</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SDCARDMOUNT</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tarjeta SD instalada</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 21</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OIL</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Evento del sensor de aceite</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 22</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OILTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Error de aceite</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 23</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TEMPTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sobrecalentamiento del motor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 24</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Error de UART</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 25</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; LANEDEPARTURE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Salida del carril</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 26</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VEHICLETOOCLOSE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Otro vehículo demasiado cerca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 27</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; FORWARDCOLLISION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Riesgo de colisión</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 28</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART_DOOR</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sensor de puerta</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 29</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Detección de rostro (AI)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Error de reconocimiento facial</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 31</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Detección del cinturón de seguridad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 32</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ANWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Cinturón no abrochado</span></div></td></tr></tbody></table>
