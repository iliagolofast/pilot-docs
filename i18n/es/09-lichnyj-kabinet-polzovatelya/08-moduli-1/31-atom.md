---
title: "Atom"
---

El módulo «Atom» crea una conexión de red con los autoconductores de los vehículos y abre el acceso remoto a su sistema de archivos.

Funciones principales del módulo:

-   Monitorización del estado de los autoconductores en tiempo real
    
-   Carga remota de grabaciones de vídeo de las cámaras de los videograbadores
    
-   Carga de archivos de las cámaras de conteo de pasajeros
    
-   Obtención de información de diagnóstico sobre el funcionamiento de los dispositivos
    

## Monitorización del estado de los autoconductores

Al trabajar con el módulo «Atom», en la lista de objetos se muestra información sobre el estado de los autoconductores:

-   Estado de la conexión: el icono muestra si el autoconductor está encendido ![](images/drex_atom_custom.png) o apagado ![](images/drex_atom_custom_2.png). Así ve de inmediato si el dispositivo está disponible para trabajar.
    

<table><tbody><tr><td><span></span></td><td><div>Después de enviar comandos al autoconductor, estos se procesarán solo cuando el objeto aparezca en la red. Si ve que el dispositivo está desconectado, los comandos se pondrán en cola y se ejecutarán en cuanto el dispositivo se conecte a la red.</div></td></tr></tbody></table>

![](images/drex_atom_custom_3.png)

-   Columnas adicionales en la lista de objetos para la monitorización de los dispositivos:
    

1 — Atom IP: muestra la dirección IP del autoconductor

2 — Atom Update: muestra información sobre la última actualización del dispositivo

3 — Atom status: estado de la conexión del autoconductor

![Atom](images/drex_atom_screen.png)

Para saber cómo configurar las columnas de la tabla de objetos, consulte [aquí](../obekty-1/spisok-obektov.html#Настройка_списка_объекта).

![](images/drex_atom_custom_4.png)

-   La sugerencia emergente con información sobre Atom contiene:
    

— la dirección IP de Atom

— el estado de la alimentación

— el estado actual del dispositivo

![](images/drex_atom_custom_5.png)

## Carga y descarga de archivos del autoconductor

### Cómo cargar archivos:

-   En el menú principal, vaya a la sección «Atom»
    
    2\. Seleccione de la lista un objeto, que contiene la siguiente información:
    
-   Agent ID: identificador del objeto
    
-   Objeto: nombre del objeto
    
-   Licencia: licencia asignada al objeto
    
-   MAC: dirección MAC del objeto
    
-   Válido hasta: periodo de validez de la licencia del autoconductor
    
-   Comentario: comentario del usuario
    

![](images/drex_atom_custom_6.png)

3\. Tras seleccionar el objeto, vaya al sistema de archivos.

![Atom](images/drex_atom_screen_2.png)

En el sistema de archivos se muestran los archivos disponibles del objeto con la siguiente información:

-   Carpeta: ubicación del archivo en la jerarquía de carpetas
    
-   Nombre del archivo: denominación del archivo
    
-   Tamaño: tamaño del archivo
    
-   Fecha: fecha de creación del archivo
    
    Tipos de archivos de vídeo disponibles:
    
-   Archivos de /mnt/VREG: grabaciones de los videograbadores
    
-   Archivos de /Video/: grabaciones de las cámaras de conteo de pasajeros
    
    4\. Busque los archivos que desea cargar en el servidor.
    
     Para buscar, seleccione la carpeta deseada en la lista desplegable y establezca la fecha de creación del archivo con el calendario.
    

![](images/drex_atom_custom_7.png)

5\. Marque los archivos necesarios con las casillas situadas junto a ellos.

![Atom](images/drex_atom_screen_3.png)

6\. Haga clic en el botón «Añadir los seleccionados a la cola de carga» ![](images/drex_atom_custom_8.png).

En el sistema de archivos use dos botones para obtener información actualizada:

Botón «Actualizar» ![](images/drex_atom_custom_9.png): haga clic en este botón para actualizar toda la lista de carpetas y archivos. Úselo si se ha conectado al dispositivo y desea ver la estructura de carpetas actual, o si se han realizado cambios en el sistema de archivos.

Botón «Actualizar información de los archivos» ![](images/drex_atom_custom_10.png): haga clic en este botón para actualizar los datos de los archivos (tamaño, fecha de creación) de la carpeta actual sin recargar toda la estructura. Úselo si necesita ver información actualizada de los archivos de la carpeta seleccionada.

### Cómo descargar archivos:

-   Vaya a la pestaña «Archivos cargados», donde se muestran los archivos que ya se han cargado de Atom al servidor.
    

![](images/drex_atom_custom_11.png)

2\. En esta pestaña verá la lista de archivos con la siguiente información:

-   Agent ID: agente del que se cargó el archivo
    
-   Objeto: objeto de origen del archivo
    
-   Hora: hora de carga del archivo
    
-   Nombre: nombre del archivo
    
-   Tamaño: tamaño del archivo cargado
    
    3\. Para descargar el archivo deseado en su dispositivo, haga clic en el icono de descarga junto a ese archivo.
