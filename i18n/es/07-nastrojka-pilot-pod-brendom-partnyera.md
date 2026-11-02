---
title: "Configuración de PILOT con la marca del socio"
---

PILOT puede utilizarse con la marca de su empresa, con un dominio propio y un diseño corporativo. Para prepararse para el lanzamiento necesitará lo siguiente:

— nombre de dominio

— acceso a la configuración de DNS

— certificado SSL/TLS

— logotipo y materiales corporativos

— datos de contacto del empleado que aprobará el diseño final

Si su empresa cuenta con un administrador de TI, le recomendamos que participe en la configuración de DNS y en la preparación del certificado SSL/TLS.

## 1\. Prepare el nombre de dominio

Elija el dominio con el que sus clientes abrirán la plataforma. Por ejemplo: app.company.com o company.com. Registre el dominio en un registrador de nombres de dominio acreditado.

El dominio debe estar registrado a nombre de su empresa. Para conservar el acceso a su gestión, le recomendamos:

-   registrar el dominio mediante una cuenta corporativa
    
-   activar la autenticación de dos factores
    
-   mantener actualizada la dirección de correo electrónico de la cuenta
    
-   activar la renovación automática del dominio
    

No registre el dominio mediante la cuenta personal de un empleado, de un contratista o de un tercero, ya que el acceso a ella podría perderse más adelante.

### Qué enviar al soporte técnico de PILOT

Indique el nombre de dominio exacto que desea utilizar.

El soporte técnico de PILOT le informará a qué dirección IP debe apuntar el dominio y qué registros DNS adicionales se necesitarán, si hacen falta.

## 2\. Configure la conexión del dominio con PILOT

Después de recibir la dirección IP del soporte técnico de PILOT, modifique la configuración de DNS de su dominio. Normalmente está disponible en el panel del registrador del dominio o del proveedor de DNS.

### Qué debe hacer

1\. Abra la configuración de DNS del dominio

2\. Cree o modifique un registro de tipo A

3\. Rellene el campo Name / Host («Nombre / Host»):

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;&nbsp; Dirección de la plataforma</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Valor del campo</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Dominio principal, por ejemplo company.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; @</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;Subdominio, por ejemplo app.company.com</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; app</span></div></td></tr></tbody></table>

4\. En el campo **Value / IP Address** («Valor / Dirección IP») indique la dirección IP recibida del soporte técnico de PILOT

5\. Compruebe si existen otros registros A o AAAA para el mismo dominio o subdominio. Si apuntan a otro servidor, es posible que deba eliminarlos

6\. Guarde los cambios

No elimine registros DNS si no está seguro de su finalidad. Pueden ser necesarios para el funcionamiento del correo electrónico, la verificación de la propiedad del dominio u otros servicios.

Si utiliza una CDN, un proxy o un servicio de protección de aplicaciones web WAF, por ejemplo Cloudflare, active el proxy para el nuevo dominio o subdominio solo después de acordarlo con el soporte técnico de PILOT.

Los cambios de DNS pueden aplicarse en unos minutos o tardar hasta 24 horas.

### Qué enviar al soporte técnico de PILOT

Envíe una de estas opciones:

— una captura de pantalla de los registros DNS

— una copia en texto de los registros que ha configurado

El soporte técnico de PILOT comprobará si el dominio está configurado correctamente.

## 3\. Prepare el certificado SSL/TLS

El certificado SSL/TLS es necesario para el acceso seguro a la plataforma mediante HTTPS.

El certificado debe cubrir cada nombre de dominio con el que los usuarios abrirán la plataforma. Por ejemplo, si deben funcionar ambas direcciones, company.com y www.company.com, el certificado debe incluir los dos nombres.

Para ello puede utilizar:

-   un único certificado con ambos nombres en el campo SAN, la lista de nombres alternativos
    
-   certificados independientes, si así se ha acordado con el soporte técnico de PILOT
    

Si no ha trabajado antes con certificados SSL/TLS, traslade esta sección a su administrador de TI, a su proveedor de hosting o al proveedor del certificado.

### 1) Acuerde los parámetros del certificado

Antes de comprar el certificado, acuerde con el soporte técnico de PILOT los nombres de dominio necesarios y los parámetros del CSR, la solicitud de emisión del certificado.

### 2) Adquiera el certificado

Adquiera un certificado SSL/TLS de confianza pública a una autoridad de certificación fiable o a uno de sus distribuidores autorizados. Los navegadores reconocen un certificado de confianza pública como fiable.

Puede utilizar los siguientes tipos de certificados:

-   **DV**: con validación de la propiedad del dominio
    
-   **OV**: con validación de la organización
    
-   **EV**: con validación extendida de la organización
    

Si no tiene requisitos especiales, normalmente basta con un certificado DV.

### 3) Cree el CSR y la clave privada

Al solicitar el certificado, normalmente hay que crear:

-   **CSR (Certificate Signing Request)**: solicitud de emisión del certificado
    
-   **clave privada**
    

<table><tbody><tr><td><span></span></td><td><div>Guarde la clave privada en un lugar seguro. Si la pierde, la autoridad de certificación no podrá recuperarla.</div></td></tr></tbody></table>

### 4) Confirme la propiedad del dominio

La autoridad de certificación puede proponerle confirmar la propiedad del dominio de una de estas maneras:

-   añadir un registro DNS
    
-   subir un archivo al sitio web
    
-   realizar la confirmación por correo electrónico
    

Si se requiere confirmación mediante DNS, el soporte técnico de PILOT le ayudará a realizar este paso si es necesario.

### 5) Descargue los archivos del certificado

Una vez emitido el certificado, descargue el conjunto completo de sus archivos.

### Qué enviar al soporte técnico de PILOT

Envíe los archivos en formato PEM/Base64. Normalmente estos archivos tienen las extensiones .pem, .crt o .cer.

Por lo general, se necesita el siguiente conjunto:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Archivo</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Qué contiene</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Certificado del servidor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Certificado emitido para su dominio</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Certificados intermedios / cadena de certificados</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Todos los certificados intermedios de las autoridades de certificación en el orden proporcionado por la autoridad de certificación</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Certificado raíz</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Certificado de la autoridad de certificación raíz que corresponde a la cadena de certificados</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Clave privada</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Clave creada junto con la solicitud CSR</span></div></td></tr></tbody></table>

Si la autoridad de certificación proporciona todos los archivos en un solo archivo comprimido, puede enviar el archivo original y explicar la finalidad de cada archivo.

Si el certificado raíz no está incluido en el conjunto, descárguelo del repositorio oficial de su autoridad de certificación.

Antes de enviar los archivos, asegúrese de que:

— el certificado está emitido para el dominio acordado

— incluye todos los nombres de dominio necesarios

— la clave privada corresponde al certificado

No se puede utilizar un certificado emitido para otro dominio o que no contenga el nombre necesario en el campo SAN.

<table><tbody><tr><td><span></span></td><td><div>La clave privada es información confidencial. No la envíe por un canal público no protegido. Utilice un método de transferencia seguro acordado con el soporte técnico de PILOT.</div></td></tr></tbody></table>

## 4\. Envíe los materiales corporativos

Envíe el manual de marca actual en formato PDF, si lo tiene, y los archivos originales de los materiales corporativos.

Conviene incluir en el conjunto:

-   el logotipo en formato vectorial: SVG, AI o EPS
    
-   el logotipo en formato PNG con fondo transparente
    
-   las variantes del logotipo para fondo claro y oscuro
    
-   los colores corporativos
    
-   los requisitos de tamaño mínimo del logotipo y de espacio libre a su alrededor
    
-   el favicon, el icono del sitio web
    
-   los iconos de la aplicación móvil, si son necesarios
    
-   los datos de contacto del empleado que aprobará el diseño final
    

### Si no hay manual de marca

Puede preparar los materiales sin un manual de marca. En ese caso, envíe como mínimo:

-   el logotipo
    
-   los principales colores corporativos
    
-   el nombre de la empresa o del producto que desea utilizar
    
-   el favicon, si lo tiene
    
-   los datos de contacto del empleado responsable de aprobar el diseño
    

El soporte técnico de PILOT le informará si se necesitan materiales adicionales.

## 5\. Acuerde el lanzamiento

Después de recibir los materiales, el soporte técnico de PILOT comprobará:

-   el nombre de dominio
    
-   la configuración de DNS
    
-   los archivos del certificado SSL/TLS
    
-   los materiales corporativos

Según el resultado de la comprobación, el soporte técnico confirmará si todo está listo para configurar la plataforma con su marca. Si faltan datos o archivos, se le indicará qué debe completar o corregir.

Una vez finalizada la comprobación, el soporte técnico de PILOT realizará la configuración y acordará con usted la fecha de lanzamiento.

Después de acordar la configuración, avise con antelación al soporte técnico de PILOT si planea:

— modificar los registros DNS utilizados para conectar la plataforma

—  volver a emitir o sustituir el certificado SSL/TLS
