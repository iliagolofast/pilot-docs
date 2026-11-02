---
title: "Agro"
---

El módulo agrícola es una combinación de dos módulos.

El módulo Geocercas y el módulo Remolques.

-   Añadir un nuevo remolque +.
    
-   Rellenar los campos.
    
-   Guardar.
    
    ![](images/drex_agro__custom.png)
    
    ![](images/drex_agro__custom_2.png)
    
-   **Nombre del remolque**: nombre del remolque.
    
-   **Tipo**: lista de tipos de remolques.
    
-   **Ancho**: cuando utilizamos equipos agrícolas, por ejemplo una horca, podemos definir su ancho y, con este tamaño, calcular qué superficie se ha trabajado en el campo. Fórmula de cálculo: distancia \* ancho del remolque / 10 000 = ha.
    
-   **Grupo**\: estructura de grupos de la flota para agrupar remolques.
    
-   **RFID**: si utilizamos etiquetas RFID, podemos automatizar el acoplamiento y desacoplar automáticamente los remolques instalando sensores en los objetos y, de forma similar a los Ibuttons para conductores, crear un sensor que detecte la etiqueta RFID del remolque y lo acople o desacople.
    
-   **Descripción**: cualquier información adicional sobre el remolque.
    
-   **Exclusividad**: si marcamos la exclusividad, cada remolque solo puede estar vinculado a un objeto a la vez; es decir, si vinculamos el mismo remolque a otro objeto, se desvinculará del anterior, o si ese objeto se usa para enlazar con otro remolque, se desvinculará del primero.
    
-   **Agricultura**: como se explicó antes, esto debe activar el remolque para el módulo agrícola.
    
-   **Enviar alertas**: si marcamos esta casilla, recibiremos alertas en la plataforma PILOT cuando el remolque se vincule o desvincule de algún objeto.
    
-   **Acceso a vehículos**: podemos restringir el acceso a los vehículos a los que puede acoplarse el remolque.
    
-   **Árbol de objetos**: todos los objetos que el usuario tiene derecho a gestionar y que, al seleccionarlos, se enlazan con el objeto actual.
    
-   **Mostrar historial**: podemos consultar el historial de este remolque y, si es necesario, modificarlo.
    
-   **Recálculo de datos**: disponible en el panel de administración de la parte Pilot con el tipo Agricultura.
    
    **Mostrar remolque**
    
    ![](images/drex_agro__custom_3.png)
    
    **Historial del remolque**
    
-   Seleccione el remolque.
    
-   Seleccione el menú historial.
    

![](images/drex_agro__custom_4.png)

![](images/drex_agro__custom_5.png)

**Historial del recorrido**

Si todo está configurado correctamente, el módulo agrícola agregará los datos cuando el objeto esté dentro de un campo de trabajo con un remolque agrícola acoplado.

Cuando los viajes han terminado, podemos usar el módulo de historial para reproducir los datos del historial agrícola.

Marque la casilla de agricultura.

![](images/drex_agro__custom_6.png)

Si hay datos, para cada campo podemos ver el historial de viajes con el ancho de vía (ajustes del ancho del remolque) y la distancia y el área recorridas calculadas:

![](images/drex_agro__custom_7.png)

El informe de este módulo está en la sección [Informes](../otchyety-1/tipy-otchyetov/agro/index.html).
