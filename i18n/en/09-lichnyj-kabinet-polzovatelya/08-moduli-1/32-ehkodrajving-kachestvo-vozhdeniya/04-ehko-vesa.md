---
title: "ECO weights"
---

ECO weights (importance coefficients) define how strongly different types of violations affect the overall driving quality score.

![](images/drex_ehko_vesa_custom.png)

When the system records a driving quality event, it assigns penalty points. When the overall score is calculated, these points are taken into account using ECO weights.

The higher the ECO weight, the more strongly violations of this type affect the overall driving quality score.

<table><tbody><tr><td><span></span></td><td><div>Changing ECO weights does not affect event recording or the number of penalty points assigned. Only their influence on the overall score in Eco Driving reports changes.</div></td></tr></tbody></table>

ECO weight settings apply to the whole account and are used when generating Eco Driving reports.

## Indicators

The system uses the following indicators.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Indicator</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Meaning</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Speeding</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Exceeding the speed limit</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Excess Idle</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Prolonged engine idling</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Brake</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Accel</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sharp acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Corner</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Sharp turn</span></div></td></tr></tbody></table>

![](images/drex_ehko_vesa_custom.png)

The following are shown for each indicator:

-   Numeric coefficient — the value the system uses when calculating penalty points
    
-   Slider — lets you change the importance of the corresponding violation type
    
-   Percentage — shows the contribution of this violation type to the overall score
    

The total sum of all weights must be 100%.

### Example

If you increase the ECO weight for Speeding, speeding affects the overall driving quality score more than the other violation types. The events themselves and the assigned penalty points do not change.

## How to set up ECO weights

1\. Open the “ECO weights for driving” window ![](images/drex_ehko_vesa_custom_2.png)

![ECO weights](images/drex_ehko_vesa_screen.png)

2\. Change the values with the sliders

![](images/drex_ehko_vesa_custom_3.png)

3\. Make sure the sum of all ECO weights is 100%

4\. Click “Save” to apply the current ECO weight values. They are saved as working settings that the system will use when calculating driving quality

The weights most often changed are Harsh Brake and Harsh Accel, when you need to increase or reduce the influence of sharp maneuvers on the overall driving quality score.

Additional commands are available at the bottom of the eco weights window:

-   Update Defaults (Save as defaults) — saves the current values as defaults
    
-   Load Defaults (Load defaults) — loads previously saved defaults
    
-   Reset Defaults (Restore standard defaults) — returns the standard system settings:
    

 — Speeding — 58.3%

 — Excess Idle — 10.4%

 — Harsh Brake — 6.9%

 — Harsh Accel — 13.9%

 — Harsh Corner — 10.4%
