---
title: "أوزان ECO"
---

تحدد أوزان ECO (معاملات الأهمية) مدى تأثير أنواع المخالفات المختلفة في التقييم النهائي لجودة القيادة.

![](images/drex_ehko_vesa_custom.png)

عندما يسجّل النظام حدثًا من أحداث جودة القيادة، فإنه يحتسب نقاط جزاء. وعند حساب التقييم النهائي تُراعى هذه النقاط باستخدام أوزان ECO.

كلما زاد وزن ECO، زاد تأثير المخالفات من هذا النوع في التقييم النهائي لجودة القيادة.

<table><tbody><tr><td><span></span></td><td><div>لا يؤثر تغيير أوزان ECO في تسجيل الأحداث ولا في عدد نقاط الجزاء المحتسبة. يتغير فقط تأثيرها في التقييم النهائي في تقارير Eco Driving.</div></td></tr></tbody></table>

تُطبَّق إعدادات أوزان ECO على الحساب بأكمله وتُستخدم عند إنشاء تقارير Eco Driving.

## المؤشرات

تُستخدم في النظام المؤشرات التالية.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المؤشر</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; ماذا يعني</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Speeding</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تجاوز السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Excess Idle</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; التشغيل الطويل للمحرك على وضع الخمول</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Brake</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الفرملة المفاجئة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Accel</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; التسارع المفاجئ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh Corner</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المنعطف الحاد</span></div></td></tr></tbody></table>

![](images/drex_ehko_vesa_custom.png)

يُعرض لكل مؤشر:

-   المعامل الرقمي — القيمة التي يستخدمها النظام عند حساب نقاط الجزاء
    
-   المنزلق — يتيح تغيير أهمية نوع المخالفة المقابل
    
-   النسبة المئوية — تبيّن مساهمة هذا النوع من المخالفات في التقييم النهائي
    

يجب أن يكون مجموع جميع الأوزان 100%.

### مثال

إذا زدت وزن ECO للمؤشر Speeding، فسيؤثر تجاوز السرعة في التقييم النهائي لجودة القيادة أكثر من باقي أنواع المخالفات. أما الأحداث نفسها ونقاط الجزاء المحتسبة فلن تتغير.

## كيفية ضبط أوزان ECO

1\. افتح نافذة «أوزان ECO للقيادة» ![](images/drex_ehko_vesa_custom_2.png)

![أوزان ECO](images/drex_ehko_vesa_screen.png)

2\. غيّر القيم بواسطة المنزلقات

![](images/drex_ehko_vesa_custom_3.png)

3\. تأكد من أن مجموع جميع أوزان ECO يساوي 100%

4\. اضغط «حفظ» لتطبيق القيم الحالية لأوزان ECO. ستُحفظ كإعدادات عاملة يستخدمها النظام عند حساب جودة القيادة

غالبًا ما تُغيَّر أوزان Harsh Brake وHarsh Accel إذا لزم تعزيز تأثير المناورات المفاجئة في التقييم النهائي لجودة القيادة أو تخفيفه.

تتوفر في أسفل نافذة أوزان ECO أوامر إضافية:

-   Update Defaults (حفظ القيم الافتراضية) — يحفظ القيم الحالية كقيم افتراضية
    
-   Load Defaults (تحميل القيم الافتراضية) — يحمّل القيم الافتراضية المحفوظة سابقًا
    
-   Reset Defaults (استعادة القيم الافتراضية القياسية) — يعيد إعدادات النظام القياسية:
    

 — Speeding — 58.3%

 — Excess Idle — 10.4%

 — Harsh Brake — 6.9%

 — Harsh Accel — 13.9%

 — Harsh Corner — 10.4%
