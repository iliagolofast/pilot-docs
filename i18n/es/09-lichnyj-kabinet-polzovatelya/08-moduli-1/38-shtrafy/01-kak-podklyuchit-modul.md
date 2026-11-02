---
title: "Cómo conectar el módulo"
---

El módulo lo conecta el administrador del sistema o el socio de servicio.

<table><tbody><tr><td><span></span></td><td><div>Si tiene acceso al panel de administración, configure el módulo usted mismo siguiendo las instrucciones de abajo. Si no tiene acceso, póngase en contacto con su socio o con el soporte técnico.</div></td></tr></tbody></table>

Para buscar multas, PILOT utiliza la integración con el servicio ELPAS. El servicio comprueba los cargos según los datos de la organización, los datos de los vehículos y los permisos de conducir.

### 1\. Active el módulo

Active el módulo «Multas»:

-   para el socio
    
-   para el subsocio
    
-   para el contrato
    

![Cómo conectar el módulo](images/drex_kak_podklyuchit_modul_screen.png)

El módulo debe estar activado en todos los niveles. Si está desactivado en al menos uno de ellos, el sistema no podrá obtener información sobre las multas.

### 2\. Añada la configuración de ELPAS

1\. Vaya a Ajustes del contrato → Configs

2\. Pulse «Añadir»

3\. En el campo «Clave» indique fine\_api

4\. En el campo «Valor» indique elpas

5\. Pulse «Guardar»

**![](images/drex_kak_podklyuchit_modul_custom.png)**

La configuración debe estar activada para el socio, el subsocio y la cuenta. Solo entonces el sistema podrá obtener información sobre las multas.

### 3\. Configure la tarifa

El módulo es de pago, por lo que para su funcionamiento es necesario configurar una tarifa.

1\. Vaya a los ajustes del contrato, a la pestaña «Servicios»

2\. Pulse «Añadir»

3\. En la lista de servicios seleccione «Módulo de multas»

4\. Seleccione la tarifa del módulo

5\. Pulse «Guardar»

![](images/drex_kak_podklyuchit_modul_custom_2.png)

<table><tbody><tr><td><span></span></td><td><div>Si no sabe qué tarifa debe utilizar, póngase en contacto con el soporte técnico.</div></td></tr></tbody></table>

### 4\. Rellene los datos de la organización

En la ficha del contrato indique:

-   INN
    
-   KPP.
    

El servicio ELPAS realiza la búsqueda por la combinación de INN y KPP, por lo que es necesario rellenar ambos campos.

![Cómo conectar el módulo](images/drex_kak_podklyuchit_modul_screen_2.png)

### 5\. Rellene los datos de los vehículos

Para cada vehículo es necesario indicar el número del STS (certificado de registro del vehículo).

Para ello:

1\. En la cuenta de usuario, abra la ficha del objeto

2\. Vaya a la pestaña «Info»

3\. Indique la serie y el número del certificado de registro del vehículo

**![Cómo conectar el módulo](images/drex_kak_podklyuchit_modul_screen_3.png)**

4\. Guarde los cambios

Repita estos pasos para cada vehículo.

Copie la serie y el número exactamente como aparecen en el certificado. Incluso un solo dígito incorrecto puede impedir encontrar la multa y asociarla al objeto correcto.

![Cómo conectar el módulo](images/drex_kak_podklyuchit_modul_screen_4.png)

### 6\. Rellene los datos de los conductores

Abra la ficha de cada conductor e indique el número del permiso de conducir.

**![Cómo conectar el módulo](images/drex_kak_podklyuchit_modul_screen_5.png)**

Sin el número del permiso de conducir, el servicio ELPAS no podrá comprobar las multas impuestas a ese conductor.

Para buscar multas se utilizan cuatro identificadores:

INN: identifica la organización a la que pueden imponerse multas

KPP: precisa los datos de la organización y se utiliza junto con el INN

STS: ayuda a encontrar multas de un vehículo concreto

VU (permiso de conducir): ayuda a encontrar multas por el permiso de conducir

## Cuándo aparecen las multas

Una vez terminada la configuración, espere a la siguiente actualización de datos.

Cada noche, una vez al día, el sistema consulta automáticamente el servicio ELPAS, obtiene información sobre las multas nuevas y actualiza la lista.

En cada actualización se cargan los datos de las multas de los últimos 30 días.

Si el servicio detecta multas nuevas, aparecerán automáticamente en la cuenta de usuario al finalizar la actualización.

![](images/drex_kak_podklyuchit_modul_custom_3.png)
