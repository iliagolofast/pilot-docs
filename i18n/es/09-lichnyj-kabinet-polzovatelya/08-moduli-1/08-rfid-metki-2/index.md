---
title: "Etiquetas RFID"
---

El módulo «Etiquetas RFID» sirve para crear y gestionar las etiquetas RFID que se utilizan para la identificación automática de objetos en el sistema de monitoreo.

Las etiquetas ayudan al sistema a determinar con qué objeto interactuó el vehículo. Por ejemplo, con ellas se puede saber qué contenedor atendió un camión de basura o qué punto de control visitó un vehículo.

![](images/drex_rfid_metki_2_custom.png)

En el módulo usted puede:

— [añadir etiquetas RFID](kak-upravlyat-rfid-metkami.html#Как_добавить_RFID-метку) y [agruparlas](kak-upravlyat-rfid-metkami.html#Как_создать_группу_RFID-меток)

— [comprobar la hora de la última lectura](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_проверить_последнее_считывание)

— [ver la ubicación de la etiqueta en el mapa](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_показать_одну_метку_на_карте)

— [consultar el historial de lecturas](kak-proverit-mestopolozhenie-i-istoriyu-rfid-metki.html#Как_посмотреть_историю_RFID-метки)

## Cómo funcionan las etiquetas RFID

Para que funcione RFID se necesitan dos elementos:

— lector RFID: dispositivo instalado en el vehículo que detecta las etiquetas cercanas

— etiqueta RFID: dispositivo con un identificador único, instalado en un contenedor, remolque, equipo u otro objeto

Cuando una etiqueta entra en el alcance del lector:

1\. El lector RFID del vehículo detecta la etiqueta

2\. El lector obtiene el identificador único de la etiqueta y lo transmite a PILOT

3\. PILOT busca una etiqueta con ese identificador en el catálogo de etiquetas RFID

4\. Si la etiqueta se encuentra, el sistema actualiza los datos de su última lectura

5\. Si para la etiqueta o el objeto asociado hay acciones automáticas previstas, el sistema las ejecuta

## Dónde se usan las etiquetas RFID

### Asociación automática de remolques

La etiqueta RFID se instala en el remolque y el lector, en el tractor. Cuando el remolque entra en el alcance del lector, PILOT reconoce la etiqueta y puede asociar automáticamente el remolque al vehículo.

### Control de rutas

Las etiquetas RFID o BLE se instalan en puntos de control: paradas, almacenes, el recinto de la empresa y otros lugares. Cuando el vehículo se encuentra cerca de la etiqueta, PILOT registra la visita al punto de control.

### Control del servicio de contenedores

Las etiquetas RFID se instalan en los contenedores y los lectores, en los camiones de basura u otra maquinaria de servicio. Al leerse, PILOT guarda los datos del contenedor, la hora y el lugar del servicio, así como del vehículo que realizó el trabajo.

### Identificación de vehículos

Las etiquetas RFID ayudan a reconocer los vehículos al entrar en el recinto de la empresa, al pasar por puntos de control y al realizar operaciones de producción.

### Identificación de conductores

Se puede asignar una etiqueta RFID personal a un conductor. Tras la lectura, PILOT identificará al conductor y podrá asociarle el viaje, los eventos o los trabajos realizados.
