---
title: "PILOT Extensions"
---

PILOT Extensions es una herramienta que permite a los desarrolladores ampliar la funcionalidad del sistema de monitoreo PILOT. Con ella se pueden añadir nuevas funciones, integrar servicios externos y adaptar la plataforma a tareas específicas.

PILOT Extensions es adecuado para:

— desarrolladores e integradores que desean adaptar el sistema a tareas concretas del negocio y conectar servicios externos.

— empresas que necesitan más funcionalidad que la que ofrece la versión estándar, por ejemplo, creación de informes personalizados, integración con otros sistemas o configuración de interfaces y visualizaciones

— equipos que desean desarrollar y probar rápidamente nuevas ideas, creando prototipos y extensiones mínimas viables (MVP) para su posterior iteración

— organizaciones para las que son importantes la flexibilidad y la posibilidad de ampliar la plataforma, de modo que pueda adaptarse a los cambios y crecer junto con el negocio

### Dónde encontrar documentación y ejemplos

Todo el material para empezar a trabajar con PILOT Extensions se encuentra en el repositorio oficial de GitHub:

-   [Repositorio de PILOT Extensions](https://github.com/pilot-telematics/pilot_extensions)
    
-   [Guía de inicio rápido en ruso](https://github.com/pilot-telematics/pilot_extensions/blob/main/README_RU.md)
    
-   [Guía de inicio rápido en inglés](https://github.com/pilot-telematics/pilot_extensions/blob/main/README.md)
    
-   [Ejemplos de uso e instrucciones para trabajar con ChatGPT en la generación de código](https://github.com/pilot-telematics/pilot_extensions/tree/main/docs/ChatGPT_Prompts)
    
-   [Documentación de la API para trabajar con mapas y marcadores](https://github.com/pilot-telematics/pilot_extensions/tree/main/docs)
    

### Cómo empezar

1\. Acceda al [repositorio de PILOT Extensions](https://github.com/pilot-telematics/pilot_extensions) en GitHub

2\. Consulte la guía de instalación y configuración en el archivo README

3\. Seleccione la plantilla o el ejemplo adecuado para su extensión: en la carpeta docs encontrará ejemplos e instrucciones

4\. Implemente su lógica

5\. Integre la extensión en la interfaz de PILOT, como se describe en la documentación del repositorio

<table><tbody><tr><td><span></span></td><td><div>Para explicar de forma visual el proceso de creación de extensiones con PILOT Extensions hemos preparado el vídeo <a href="https://youtu.be/Gw1SdHo-kxM?si=mDjEIpw-oaqCc7EK "><span>«Cómo crear su propia aplicación con PILOT Extensions»</span></a>.&nbsp;</div><div>En él mostramos cómo, con ayuda de la inteligencia artificial, generar código automáticamente, conectar datos de PILOT, trabajar con la API e integrar la extensión en la interfaz del sistema.</div><div><div><a href="https://youtu.be/Gw1SdHo-kxM?si=mDjEIpw-oaqCc7EK " title="560_315">https://youtu.be/Gw1SdHo-kxM?si=mDjEIpw-oaqCc7EK</a></div></div></td></tr></tbody></table>

## Cómo se ven las extensiones de PILOT en la interfaz

Si para su cuenta hay extensiones disponibles, puede abrir su lista desde el menú de acciones adicionales:

1\. Pulse ![](images/drex_pilot_extensions__custom.png) en la esquina superior derecha

2\. En la lista desplegable seleccione «Extensiones»

![](images/drex_pilot_extensions__custom_2.png)

Después se abrirá una ventana con la lista de extensiones disponibles.

### Lista de extensiones

La ventana «Extensiones» muestra todas las extensiones disponibles para su cuenta.

![](images/drex_pilot_extensions__custom_3.png)

La lista se muestra en forma de tarjetas. Para cada extensión normalmente se indican:

-   icono de la extensión
    
-   nombre
    
-   autor
    
-   descripción breve
    
-   interruptor de activación
    
-   botón ![](images/drex_pilot_extensions__custom_4.png) con la información sobre la extensión
    

Si hay muchas extensiones, puede usar la barra de búsqueda ![](images/drex_pilot_extensions__custom_5.png) situada en la parte superior de la ventana para encontrar rápidamente la que necesite.

### Cómo activar o desactivar una extensión

A la izquierda de cada extensión hay un interruptor.

![](images/drex_pilot_extensions__custom_6.png) Si el interruptor está activado, la extensión está activa para el usuario

![](images/drex_pilot_extensions__custom_7.png) Si el interruptor está desactivado, la extensión no está disponible en la interfaz

Una vez activada, la extensión puede:

-   aparecer como una nueva opción de menú
    
-   abrirse como un módulo independiente
    
-   añadir nuevos elementos de interfaz o acciones en el sistema
    

### Información sobre la extensión

A la derecha de cada extensión hay un botón 

### ![](images/drex_pilot_extensions__custom_4.png).

![PILOT Extensions ](images/drex_pilot_extensions__screen.png)

Si lo pulsa, se abrirá una página con información sobre la extensión.

![](images/drex_pilot_extensions__custom_8.png)

### Extensiones no publicadas

En la esquina superior derecha de la ventana de extensiones se encuentra la opción Show drafts.

![PILOT Extensions ](images/drex_pilot_extensions__screen_2.png)

Al activarla, en la lista se muestran no solo las extensiones publicadas, sino también las versiones draft, es decir, las extensiones que aún no se han lanzado.

Draft es una versión preliminar de la extensión que se encuentra en desarrollo, pruebas o perfeccionamiento.

Esta opción se utiliza, por ejemplo, si necesita comprobar una extensión antes de su publicación o probar una nueva función.

<table><tbody><tr><td><span></span></td><td><div>La opción&nbsp;Show drafts&nbsp;solo está disponible para los administradores.</div></td></tr></tbody></table>

### Ejemplo de extensión

Un ejemplo de extensión es Airports List. Es un módulo que muestra la lista de aeropuertos y su ubicación en el mapa.

Una vez activada la extensión:

-   en la interfaz aparece una nueva sección
    
-   se abre una pantalla con la lista de aeropuertos
    
-   al lado se muestra un mapa
    
-   al seleccionar una fila de la lista se puede ver de inmediato el aeropuerto en el mapa
    

Una extensión de este tipo añade al sistema una nueva herramienta de trabajo, y no solo un ajuste independiente.

![](images/drex_pilot_extensions__custom_9.png)
