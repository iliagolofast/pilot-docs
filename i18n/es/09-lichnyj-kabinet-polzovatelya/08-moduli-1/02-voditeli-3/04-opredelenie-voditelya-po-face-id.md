---
title: "Identificación del conductor mediante Face ID"
---

Las cámaras Mettax pueden reconocer el rostro del conductor y transmitir su identificador a PILOT. Tras un reconocimiento correcto, PILOT asigna automáticamente el conductor al objeto con el mismo principio que se utiliza para las etiquetas iButton y RFID.

La función permite determinar quién conduce el vehículo cuando un mismo objeto es utilizado por varios conductores.

## Preparación de los conductores en el dispositivo

Primero es necesario registrar a los conductores en el dispositivo Mettax. Tras el registro, el dispositivo crea para cada conductor un identificador faceId.

<table><tbody><tr><td><span></span></td><td><div>El método para añadir conductores depende del modelo y de la configuración de la cámara. Si no sabe cómo registrar conductores en el dispositivo, comuníquese con el especialista que instaló o configuró la cámara.</div></td></tr></tbody></table>

Después de registrar al conductor, el dispositivo debe:

1\. Reconocer su rostro

2\. Transmitir a PILOT el faceId creado

3\. Transmitir el resultado del reconocimiento en el parámetro faceRecogn

El identificador faceId lo crea el dispositivo Mettax. El valor recibido del dispositivo se asocia [con la ficha](opredelenie-voditelya-po-face-id.html#Связывание_Face_ID_с_водителем) del conductor correspondiente en PILOT.

## Datos de reconocimiento

Al verificar el rostro, el dispositivo transmite a PILOT los siguientes parámetros:

-   faceId: identificador del conductor creado en el dispositivo
    
-   faceRecogn: resultado del reconocimiento
    
-   alarm: tipo de verificación realizada
    

El parámetro faceRecogn puede tomar los siguientes valores:

-   1: el rostro se reconoció correctamente
    
-   0: la verificación finalizó sin éxito
    
-   2: no se pudo detectar el rostro
    
-   3: la comparación finalizó con un error
    

Para la asignación automática del conductor es necesario que el dispositivo transmita faceRecogn=1.

La cámara puede transmitir los siguientes eventos de verificación:

-   alarm=647: verificación periódica del conductor
    
-   alarm=648: verificación del conductor al encender el motor
    

## Visualización de los datos en puntos sin procesar

Al verificar el rostro, la cámara Mettax transmite en los datos sin procesar del objeto los parámetros alarm, faceId y faceRecogn.

![](images/drex_opredelenie_voditelya_po_face_id_custom.png)

En la fila resaltada del ejemplo se muestran los siguientes valores:

<table><tbody><tr><td><span></span></td><td><div>alarm=647; faceId=1; faceRecogn=1;</div></td></tr></tbody></table>

Aquí:

-   alarm=647: la cámara realizó una verificación periódica del conductor
    
-   faceId=1: el dispositivo transmitió el identificador de conductor 1
    
-   faceRecogn=1: el rostro se reconoció correctamente
    

En las filas situadas más arriba, la cámara transmitió:

<table><tbody><tr><td><span></span></td><td><div>faceId=20210301001; faceRecogn=0;</div></td></tr></tbody></table>

El valor faceRecogn=0 indica que no se pudo reconocer el rostro.

En la fila con alarm=648, la verificación se inició al encender el motor. El valor faceRecogn=0 también significa que el rostro no se reconoció.

Para la asignación automática del conductor es necesario que en un mismo punto lleguen simultáneamente el identificador faceId y el resultado correcto faceRecogn=1. El valor faceId recibido debe coincidir con el valor del campo [iButton](opredelenie-voditelya-po-face-id.html) de la ficha del conductor.

## Configuración del sensor Face ID

Para que PILOT pueda utilizar el faceId recibido para identificar al conductor, es necesario crear en el objeto un sensor especial con el propósito iButton.

1\. Añada un nuevo sensor al objeto

2\. Indique los siguientes parámetros:

-   Propósito: iButton
    
-   Tipo: Especial
    
-   Nombre y descripción
    
-   Campo: por ejemplo, faceId
    
-   Fórmula de conversión: \*%faceRecogn%. Multiplica el valor de faceId por el resultado del reconocimiento. Con un reconocimiento correcto (faceRecogn=1), el valor de faceId no cambia y PILOT puede compararlo con el identificador de la ficha del conductor. Con otros valores, el resultado de la fórmula no coincide con el faceId original.
    
-   Valor máximo: valor que permita guardar los identificadores faceId utilizados
    

![](images/drex_opredelenie_voditelya_po_face_id_custom_2.png)

5\. Si es necesario, active «Cerrar la sesión del conductor al apagar el motor». Tras apagar el motor, el conductor asignado dejará de considerarse activo para el objeto

6\. Guarde el sensor

### Comprobación de la fórmula

Antes de guardar el sensor, compruebe la fórmula con datos de prueba.

1\. Haga clic en «Prueba» junto a la fórmula de conversión

![](images/drex_opredelenie_voditelya_po_face_id_custom_3.png)

2\. En la ventana que se abre, busque los parámetros faceid y faceRecogn

3\. En el parámetro faceid indique un identificador de conductor de prueba, por ejemplo: faceid=20210301001

El valor 20210301001 es un ejemplo de identificador faceId creado por el dispositivo Mettax.

4\. Reemplace el valor de faceRecogn insertado automáticamente por 1: faceRecogn=1. 

El parámetro faceRecogn=1 corresponde al reconocimiento facial correcto.

5\. Haga clic en Test

Si la comprobación es correcta, el resultado debe coincidir con el valor de faceid: Success: 20210301001

**![](images/drex_opredelenie_voditelya_po_face_id_custom_4.png)**

La fórmula \*%faceRecogn% multiplica faceid por el resultado del reconocimiento. Con faceRecogn=1 devuelve el identificador original del conductor. Con otros valores, el resultado de la fórmula no coincide con el faceId original.

Los valores de prueba insertados automáticamente no son datos del dispositivo. Antes de la comprobación, reemplace faceRecogn por uno de los valores admitidos por la cámara Mettax: 0, 1, 2 o 3.

## Asociación de Face ID con el conductor

Al registrar al conductor, el dispositivo Mettax crea para él un identificador único faceId. Para que PILOT pueda identificar automáticamente al conductor, este identificador debe indicarse en su ficha.

1\. Averigüe el identificador faceId que el dispositivo Mettax asignó al conductor

2\. Copie el valor de faceId

3\. Abra la ficha del conductor correspondiente en PILOT

4\. Vaya a la pestaña «Principal»

5\. Pegue el valor de faceId en el campo iButton

![Identificación del conductor mediante Face ID](images/drex_opredelenie_voditelya_po_face_id_screen.png)

6\. Guarde los cambios

El valor del campo iButton debe coincidir exactamente con el identificador faceId que transmite la cámara. Para cada conductor se utiliza un identificador distinto.

Tras un reconocimiento correcto, la cámara transmite faceId y faceRecogn=1. PILOT compara el faceId recibido con el valor del campo iButton y asigna el conductor correspondiente al objeto.
