---
title: "Requisitos del sistema para un servidor dedicado"
---

En este artículo se presentan los requisitos y las recomendaciones para implementar PILOT en la infraestructura dedicada de su organización.

La información está dirigida a administradores de sistemas, ingenieros e integradores que preparan la infraestructura y mantienen el funcionamiento del sistema.

## Selección de la configuración del servidor

La configuración depende de la carga esperada:

— el número de dispositivos conectados y la frecuencia de envío de mensajes

— el número de usuarios simultáneos

— los informes y las integraciones que se utilizan

— los plazos de conservación de los datos

— los módulos conectados

Los parámetros básicos sirven como punto de partida para la explotación en producción. No garantizan el rendimiento con cualquier carga.

## Configuración básica

La configuración inicial recomendada está dimensionada para un sistema de hasta 30 000 dispositivos conectados sin módulo de video:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Componente</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Recomendación</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Procesador</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Desde 8 núcleos físicos o vCPU dedicados de clase servidor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Memoria RAM</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Desde 64 GB</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Partición del sistema</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Desde 100 GB SSD</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Base de datos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Desde 2 TB NVMe o SSD de clase empresarial (enterprise SSD); para un servidor físico, RAID 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Copias de seguridad</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Almacenamiento independiente; el volumen se calcula según la política de conservación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Red</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Conexión estable con ancho de banda garantizado y baja pérdida de paquetes</span></div></td></tr></tbody></table>

Si los dispositivos transmiten datos cada 1 a 5 segundos, la carga sobre el procesador, la base de datos y los discos aumenta de forma considerable. Para este modo es necesario realizar pruebas de carga con antelación y prever un margen de recursos.

RAID aumenta la tolerancia de los discos a fallos, pero no sustituye la copia de seguridad.

## Almacenamiento de datos

Los eventos originales de los dispositivos se almacenan en la base de datos. Su plazo de conservación depende de la configuración del sistema y del espacio disponible en disco. Normalmente no debe superar los tres meses.

Al calcular el volumen de almacenamiento, tenga en cuenta:

-   el número de dispositivos y la frecuencia media de mensajes
    
-   el plazo de conservación de los eventos originales
    
-   el volumen del historial, de los recorridos y de los datos de informes
    
-   los archivos adjuntos, las fotografías y los archivos multimedia
    
-   el volumen y el plazo de conservación de las copias de seguridad
    

Calcule el volumen de almacenamiento para las copias de seguridad según el tamaño de una copia completa de la base de datos, el número de copias que se conservan y la compresión utilizada. Prevea un margen de al menos el 20 %. Un volumen fijo de 1 TB no es adecuado para todas las instalaciones.

## Separación de componentes

Con una carga alta se recomienda ubicar los componentes del sistema en servidores independientes.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Función del servidor</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Cuándo se requiere</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Configuración mínima recomendada</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor de aplicaciones</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Instalación básica</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 8 vCPU, 64 GB de RAM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor de base de datos (DBMS)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Normalmente se recomienda a partir de 5000 dispositivos o con una transmisión intensiva de datos telemáticos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 8 vCPU, 64 GB de RAM, desde 2 TB NVMe/SSD</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; PTM y “Logística”</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Con un gran número de tareas, rutas o cálculos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; La necesidad de un servidor independiente y su configuración se determinan después de evaluar la carga</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Servidor de video</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Si se utiliza el módulo de video</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Desde 16 vCPU, 128 GB de RAM, almacenamiento independiente</span></div></td></tr></tbody></table>

El servidor de base de datos debe estar en la misma red local protegida que el servidor de aplicaciones. PostgreSQL, Redis y Memcached no deben ser accesibles desde internet.

### Almacenamiento de video

El volumen del archivo de video depende del número de cámaras, de la tasa de bits media, de la duración de la grabación y del plazo de conservación.

Para una estimación preliminar, utilice la fórmula:

Volumen, TB = número de cámaras × tasa de bits media, Mbit/s × horas de grabación al día × días de conservación × 0,00045 × 1,3

El sistema operativo del servidor de video se elige teniendo en cuenta los requisitos del equipo y de sus controladores.

Para las instalaciones nuevas, utilice una edición compatible de Windows Server no anterior a Windows Server 2019. El soporte extendido de Windows Server 2019 está vigente hasta enero de 2029. Los plazos de soporte se publican en la página [Microsoft Lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2019).

## Sistema operativo y componentes de software

La plataforma compatible es Oracle Linux 8 x86\_64 o una imagen del sistema operativo acordada con el soporte técnico.

La instalación incluye:

-   Nginx
    
-   PHP-FPM y las extensiones de PHP necesarias
    
-   PostgreSQL
    
-   Redis
    
-   Memcached
    
-   SocketProxy y los controladores de mensajes de los dispositivos
    
-   tareas en segundo plano y herramientas de monitoreo
    

Las versiones exactas de los componentes se determinan por el paquete de instalación de cada versión de PILOT. No los actualice manualmente sin comprobar la compatibilidad ni acordar el horario de los trabajos.

### Entorno virtual

La implementación en un entorno virtual es compatible si se cumplen los requisitos de recursos:

-   los recursos del procesador y la memoria deben estar reservados
    
-   el subsistema de discos debe proporcionar el número necesario de operaciones de entrada/salida por segundo (IOPS)
    
-   no se permite una sobresuscripción significativa de los recursos de la máquina virtual: los recursos asignados deben estar respaldados por la infraestructura física
    

### Entorno de pruebas

Para un entorno de pruebas de hasta 100 dispositivos es suficiente la siguiente configuración:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Componente</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parámetros</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Procesador</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 4 vCPU</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Memoria RAM</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 8 GB de RAM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Almacenamiento</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 200 GB SSD</span></div></td></tr></tbody></table>

Este entorno no está destinado a la explotación en producción ni a pruebas de carga.

## Requisitos de red

Abra las conexiones entrantes solo cuando sea necesario.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Finalidad</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Protocolo y puerto</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Origen de la conexión</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Interfaz web y API</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; HTTPS, TCP 443</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Estaciones de trabajo de los usuarios e integraciones permitidas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Redirección a HTTPS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; HTTP, TCP 80</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Si es necesario</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Recepción de mensajes de los dispositivos</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Puertos TCP/UDP de los protocolos utilizados</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Dispositivos y redes de confianza</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Administración</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SSH, TCP 22</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Solo VPN, bastion-host o direcciones IP acordadas</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Monitoreo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Según la configuración del sistema de monitoreo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Solo direcciones permitidas</span></div></td></tr></tbody></table>

Los puertos de PostgreSQL, Redis y Memcached solo deben ser accesibles dentro del segmento de servidores.

Para las conexiones salientes, el servidor puede necesitar:

-   DNS y sincronización horaria NTP
    
-   acceso HTTPS a los repositorios del sistema operativo y a servicios externos
    
-   acceso SSH a gitlab.pilot-gps.com a través del puerto TCP 22122 para la instalación y las actualizaciones
    
-   acceso a los servicios de geocodificación, enrutamiento, mapas e integraciones que están conectados en el sistema
    

Configure las reglas de acceso a los servicios externos por nombres de dominio y puertos acordados, y no por direcciones IP estáticas: las direcciones de los servicios pueden cambiar.

Si no hay un servidor local de teselas de mapas, las estaciones de trabajo de los usuarios también necesitan acceso a los recursos cartográficos.

Durante la instalación, proporcione al servidor un acceso controlado a los repositorios y servicios necesarios. No se requiere acceso ilimitado a internet.

## Copia de seguridad y recuperación

Antes de poner el sistema en funcionamiento, defina la política de copias de seguridad. Debe incluir:

-   copia de seguridad de la base de datos
    
-   copia de seguridad de la configuración, los certificados y los ajustes de las integraciones
    
-   copia de seguridad independiente de los archivos multimedia y del archivo de video, si se utilizan
    
-   almacenamiento de las copias fuera del servidor principal
    
-   cifrado de las copias y restricción del acceso a ellas
    
-   comprobación periódica de la recuperación
    

La frecuencia de creación de las copias y su plazo de conservación se determinan según los requisitos del propietario del sistema:

-   RPO: período admisible de pérdida de datos en caso de fallo
    
-   RTO: tiempo admisible de recuperación del funcionamiento del sistema
    

La creación correcta de una copia de seguridad no confirma que sea apta para la recuperación. Realice periódicamente una recuperación de prueba y compruebe el resultado.

## Preparación para la puesta en servicio

Antes de iniciar el sistema es necesario:

1\. Configurar el certificado TLS para el nombre de dominio de producción

2\. Restringir el acceso mediante un cortafuegos: permitir solo las conexiones necesarias

3\. Cerrar el acceso directo a los componentes de servicio desde internet

4\. Configurar cuentas SSH personales con autenticación por claves

5\. Garantizar la sincronización horaria

6\. Configurar el monitoreo de la disponibilidad de los servicios, el espacio libre, la carga, las colas de procesamiento y los resultados de las copias de seguridad

7\. Acordar el horario de las actualizaciones y designar a los empleados responsables

## Acceso para el soporte técnico

Para el soporte técnico remoto se necesita un acceso SSH seguro a través de VPN o de un servidor de acceso intermedio (bastion-host).

Conceda el acceso solo a especialistas autorizados, por un tiempo limitado y con registro de las acciones.

## Qué preparar antes de la instalación

Para acordar la instalación, prepare:

-   Nombre de dominio, dirección IP estática y certificado TLS
    
-   Parámetros de la carga esperada y lista de los módulos que se utilizarán
    
-   Lista de los protocolos y puertos de los dispositivos
    
-   Reglas de red y direcciones para la administración
    
-   Información sobre el espacio asignado para la base de datos, las copias de seguridad y los archivos multimedia
    
-   Requisitos de RPO, RTO y plazos de conservación de los datos
    
-   Datos de contacto de los empleados responsables de la infraestructura y los accesos
    
-   Parámetros de monitoreo y canal para recibir las alertas
    

## Verificación después de la instalación

Después de la instalación se realiza la aceptación del sistema. Incluye la verificación de:

— la recepción de datos de los dispositivos

— la generación de informes

— el funcionamiento de las integraciones

— el funcionamiento del monitoreo

— la recuperación de prueba a partir de una copia de seguridad
