---
title: "ECO-pesos"
---

Los ECO-pesos (coeficientes de importancia) determinan cuánto influyen los distintos tipos de infracciones en la evaluación final de la calidad de conducción.

![](images/drex_ehko_vesa_custom.png)

Cuando el sistema registra un evento de calidad de conducción, asigna puntos de penalización. Al calcular la evaluación final, estos puntos se tienen en cuenta utilizando los ECO-pesos.

Cuanto mayor es el ECO-peso, más influyen las infracciones de ese tipo en la evaluación final de la calidad de conducción.

<table><tbody><tr><td><span></span></td><td><div>Cambiar los ECO-pesos no afecta al registro de eventos ni al número de puntos de penalización asignados. Solo cambia su influencia en la evaluación final de los informes Eco Driving.</div></td></tr></tbody></table>

Los ajustes de ECO-pesos se aplican a toda la cuenta y se utilizan al generar los informes Eco Driving.

## Indicadores

En el sistema se utilizan los siguientes indicadores.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Indicador</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Qué significa</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Speeding</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Exceso de velocidad</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Excess Idle</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Ralentí prolongado del motor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Brake</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Frenada brusca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Accel</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Aceleración brusca</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Corner</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Giro brusco</span></div></td></tr></tbody></table>

![](images/drex_ehko_vesa_custom.png)

Para cada indicador se muestran:

-   Coeficiente numérico: valor que el sistema utiliza al calcular los puntos de penalización
    
-   Control deslizante: permite cambiar la importancia del tipo de infracción correspondiente
    
-   Porcentaje: muestra la contribución de este tipo de infracciones a la evaluación final
    

La suma total de todos los pesos debe ser del 100 %.

### Ejemplo

Si aumenta el ECO-peso de Speeding, el exceso de velocidad influirá más en la evaluación final de la calidad de conducción que los demás tipos de infracciones. Los eventos en sí y los puntos de penalización asignados no cambiarán.

## Cómo configurar los ECO-pesos

1\. Abra la ventana «ECO-pesos para la conducción» ![](images/drex_ehko_vesa_custom_2.png)

![ECO-pesos](images/drex_ehko_vesa_screen.png)

2\. Cambie los valores con los controles deslizantes

![](images/drex_ehko_vesa_custom_3.png)

3\. Asegúrese de que la suma de todos los ECO-pesos sea del 100 %

4\. Haga clic en «Guardar» para aplicar los valores actuales de los ECO-pesos. Se guardarán como ajustes de trabajo que el sistema utilizará al calcular la calidad de conducción

Con más frecuencia se modifican los pesos de Harsh Brake y Harsh Accel, si es necesario aumentar o reducir la influencia de las maniobras bruscas en la evaluación final de la calidad de conducción.

En la parte inferior de la ventana de ECO-pesos hay comandos adicionales:

-   Update Defaults (Guardar valores predeterminados): guarda los valores actuales como valores predeterminados
    
-   Load Defaults (Cargar valores predeterminados): carga los valores predeterminados guardados previamente
    
-   Reset Defaults (Restaurar los valores predeterminados estándar): devuelve los ajustes estándar del sistema:
    

 — Speeding: 58.3 %

 — Excess Idle: 10.4 %

 — Harsh Brake: 6.9 %

 — Harsh Accel: 13.9 %

 — Harsh Corner: 10.4 %
