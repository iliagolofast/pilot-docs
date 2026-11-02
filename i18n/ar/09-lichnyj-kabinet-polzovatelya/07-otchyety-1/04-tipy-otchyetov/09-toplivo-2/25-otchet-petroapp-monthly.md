---
title: "تقرير PetroApp Monthly"
---

المهمة الأساسية للتقرير هي حساب الفروق في استهلاك الوقود مقارنة بمؤشرات المصنّع.

**PetroApp Monthly** - يُبنى التقرير حسب الأشهر فقط.

**يحتوي التقرير على:**

-   **Mileage** - المسافة المقطوعة لحظة إجراء المعاملة.
    
-   **Transaction** - معرّف المعاملة (ID).
    
-   **Fuel price** \- التكلفة.
    
-   **Quantity** - الحجم باللترات.
    
-   **Effective mileage (KM)** - إجمالي المسافة المقطوعة خلال الفترة، ويُحسب بالصيغة "مسافة آخر معاملة" ناقص "مسافة أول معاملة".
    
-   **Effective consumption (Liters)** - مجموع جميع اللترات من المعاملات.
    

![](images/drex_otchet_petroapp_monthly__custom.png)

 لا تظهر في التقرير إلا المعاملات التي تليها معاملات أخرى.

مثلاً، المعاملات:

1\. 07.03.2021 - 20 لتراً

2\. 08.03.2021 - 30 لتراً

3\. 09.03.2021 - 25 لتراً

4\. 10.03.2021 - 40 لتراً

لا يظهر في التقرير إلا 1 و2 و3.

<table><tbody><tr><td><span></span></td><td><div><span>Average factory consumption (L/100KM)&nbsp;- مؤشر المصنّع. يؤخذ من إعدادات الكائن.</span></div><div><span>Consumption result&nbsp;- الفرق بالنسبة المئوية.</span></div><div><span>Effective consumption Rate (L/100KM)&nbsp;- حساب الاستهلاك لكل 100 كم.</span></div></td></tr></tbody></table>

النسخة المختصرة من تقرير **PetroApp Monthly**   مع البيانات الإجمالية.

![](images/drex_otchet_petroapp_monthly__custom_2.png)

ولكي يعمل التقرير بشكل صحيح، يلزم أيضاً التأكد من أن سعة الخزان تتوافق مع السيارة واستهلاكها للوقود.

![](images/drex_otchet_petroapp_monthly__custom_3.png)
