---
title: "Retransmisión"
---

**Ajustes de retransmisión del objeto de monitorización.**

1\. Seleccione el objeto de monitorización.

2\. Seleccione "Retransmisión" en el menú contextual.

![](images/drex_retranslyatsiya_1_custom.png)

![](images/drex_retranslyatsiya_1_custom_2.png)

-   **Host -** dirección del host para retransmitir los datos mediante el protocolo indicado (como dirección IP o nombre de dominio).
    
-   **Port -** puerto al que se retransmiten los datos mediante el protocolo indicado.
    
-   **Format** - formato de retransmisión (seleccione de la lista desplegable).
    
-   **External id -** identificador de retransmisión del objeto de monitorización (normalmente se utiliza un bloque del imei, los últimos dígitos del imei).
    
-   **Ruta -** al utilizar un nombre de dominio, este campo contiene parámetros adicionales.
    
-   **USPW -** si se requiere identificación, este campo contendrá el nombre de usuario y la contraseña.
    
-   **Time zone -** zona horaria en formato GMT de la lista desplegable.
    
-   **Límite de velocidad -** campo para indicar la velocidad máxima de transmisión de datos.
    
-   **Activado -** botón para activar la retransmisión.
    
-   **Json config** - configuración adicional para ajustar la retransmisión en formato json (por ejemplo, para mostrar parámetros de distintos sensores).
    
-   **Comentario -** información adicional sobre la retransmisión.
    
    ![](images/drex_retranslyatsiya_1_custom_3.png)
    

<table><tbody><tr><td><span></span></td><td><div><span><strong>Implementación para “Wialon retrains”, “galileo”, “egts”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "tags_rewrite": {</span></div><div><span>&nbsp; &nbsp; "temperature": "galileo_temp_0", &nbsp; //sustituimos el nombre del campo "temperature" de los datos en bruto,</span></div><div><span>&nbsp; &nbsp; "digital": "galileo_in_2" &nbsp; //por el valor "galileo_temp_0",</span></div><div><span>&nbsp; },&nbsp; &nbsp; // y lo enviamos a la retransmisión&nbsp;</span></div><div><span>&nbsp;</span></div><div><span>&nbsp; "save_data_for_report": "1",&nbsp; &nbsp; //guardamos los registros de la retransmisión para el informe</span></div><div><span>&nbsp; &nbsp; "temperature_data_generator": {&nbsp; &nbsp; //según el estado del sensor de puerta&nbsp; "DOS" =0</span></div><div><span>&nbsp; &nbsp; "DOS": "galileo_in_2", &nbsp; &nbsp; //generar un valor aleatorio de 4 a 8 para el campo "temperature_sensors".&nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; "closed_value": 0,&nbsp; &nbsp; //implementado para una solicitud concreta</span></div><div><span>&nbsp; &nbsp; "temperature_sensors": [</span></div><div><span>&nbsp; &nbsp; &nbsp; "galileo_temp_0"</span></div><div><span>&nbsp; &nbsp; ]</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div><div>&nbsp;</div><div><span><strong>Implementación para “Wialon&nbsp; ips” y “Wialon ipsv2”</strong></span></div><div><span>{</span></div><div><span>&nbsp; "params": {</span></div><div><span>&nbsp; &nbsp; "Vsourse": { &nbsp; //sustituimos el nombre del campo "Vsourse" de los datos en bruto</span></div><div><span>&nbsp; &nbsp; &nbsp; "name": "pwr_ext",&nbsp; //por el valor "pwr_ext" y lo enviamos mediante la retransmisión&nbsp; &nbsp; &nbsp;</span></div><div><span>&nbsp; &nbsp; &nbsp; "type": "int"</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

**Retransmisión masiva para objetos.**

**Seleccione varios objetos en la pestaña Máquinas.**

-   Pulse el botón "Retransmisión".
    
-   Añada los parámetros.
    
-   Introduzca un único imei y, después de añadirlo, en la interfaz de usuario cambie este parámetro en cada objeto por el real.
    

**![](images/drex_retranslyatsiya_1_custom_4.png)**

**![](images/drex_retranslyatsiya_1_custom_5.png)**

**![](images/drex_retranslyatsiya_1_custom_6.png)**
