---
title: "Cómo preparar las etiquetas RFID para el trabajo"
---

Antes de empezar, instale el lector RFID, conéctelo al rastreador y configure la transmisión de identificadores a PILOT.

### 1\. Instale el equipo

1\. Instale el lector RFID en el vehículo o en otra máquina

2\. Conecte el lector al rastreador que transmite los datos a PILOT

3\. Instale las etiquetas RFID en los objetos que deban reconocerse. Las etiquetas pueden instalarse, por ejemplo, en contenedores, remolques, equipos, puntos de control y objetos fijos o móviles

### 2\. Configure el lector RFID en PILOT

1\. [Añada un sensor RFID](../../datchiki-1/dobavlenie-datchika.html) a los sensores del objeto

![Cómo preparar las etiquetas RFID para el trabajo](images/drex_kak_podgotovit_rfid_metki_k_rabote_screen.png)

2\. Seleccione el campo del dispositivo en el que el lector transmite el identificador de la etiqueta

![Cómo preparar las etiquetas RFID para el trabajo](images/drex_kak_podgotovit_rfid_metki_k_rabote_screen_2.png)

3\. Guarde los ajustes

Después de la configuración, PILOT empezará a recibir los identificadores del equipo y a buscar los registros correspondientes en el catálogo de etiquetas RFID.

![](images/drex_kak_podgotovit_rfid_metki_k_rabote_custom.png)

Si el lector transmite un identificador que no está en el catálogo de etiquetas RFID, el sistema no podrá asociarlo con un registro existente. Dicha etiqueta puede mostrarse como **Unknown**.

![](images/drex_kak_podgotovit_rfid_metki_k_rabote_custom_2.png)

Una vez que se añada al sistema una etiqueta RFID con el identificador correspondiente, PILOT la reconocerá correctamente en las siguientes lecturas.

4\. Añada al catálogo las etiquetas RFID que se utilizan en sus objetos.

Para cada etiqueta indique su ID único y los demás parámetros necesarios. Después de guardar, PILOT podrá asociar los identificadores recibidos del lector con las etiquetas creadas. Encontrará instrucciones detalladas en el artículo [«Cómo gestionar las etiquetas RFID»](kak-upravlyat-rfid-metkami.html).

## RFID en la ficha del objeto

En la ficha del objeto hay un campo RFID. En él puede indicar el identificador de la etiqueta asociada a este objeto.

Por ejemplo, si el objeto de monitoreo es un contenedor con una etiqueta RFID, indique en el campo el identificador de la etiqueta instalada. PILOT utiliza estos datos al trabajar con el módulo RFID y al generar [informes](../../otchyety-1/tipy-otchyetov/metki/index.html).

![Cómo preparar las etiquetas RFID para el trabajo](images/drex_kak_podgotovit_rfid_metki_k_rabote_screen_3.png)
