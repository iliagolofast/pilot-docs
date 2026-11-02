---
title: "تقرير BRAG لسلامة القيادة (BRAG Report)"
---

يُستخدم تقرير BRAG Report لتقييم سلامة القيادة وتوزيع السائقين على فئات BRAG. وقد أُعدّ التقرير بما يراعي متطلبات QatarEnergy لأنظمة مراقبة المركبات IVMS.

يحلّل النظام المخالفات المسجَّلة: تجاوز السرعة، والتسارع والكبح والانعطاف الحاد، ومخالفات استخدام حزام الأمان. وبحسب النتائج يُمنح كل سائق نشط تقييمًا نهائيًا وفئة لونية.

قبل إنشاء التقرير يجب اختيار الفترة والمركبات أو مجموعة المركبات. ويشمل الحساب السائقين الذين وردت بياناتهم خلال الفترة المحددة.

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom.png)

### معلومات عامة

في أعلى التقرير تُعرض:

-   Contractor — اسم المقاول
    
-   Project — اسم المشروع
    
-   القسم — القسم الذي أُنشئ له التقرير
    
-   فترة التقرير — بداية الفترة المحلَّلة ونهايتها
    
-   Generated — تاريخ ووقت إنشاء التقرير
    
-   نوع التقرير — نوع التقرير، مثل Weekly/Monthly
    

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_2.png)

### Fleet Overview

تتضمّن كتلة Fleet Overview معلومات عامة عن أسطول المركبات:

-   Total Vehicles — العدد الإجمالي للمركبات المحددة
    
-   Active Drivers — عدد السائقين الذين سُجّل نشاطهم خلال الفترة المحددة
    
-   Total Distance (km) — إجمالي المسافة المقطوعة للمركبات بالكيلومترات
    
-   المدة الإجمالية — إجمالي مدة عمل المركبات
    

قد يقل عدد السائقين النشطين عن عدد المركبات: إذ لا يدخل في توزيع BRAG إلا السائقون الذين استلم النظام بياناتهم اللازمة.

### BRAG Performance Distribution

تعرض كتلة BRAG Performance Distribution توزيع السائقين النشطين على أربع فئات. ويُعرض لكل فئة عدد السائقين ونسبتهم من إجمالي السائقين النشطين:

-   BLUE — Outstanding — أداء قيادة ممتاز
    
-   GREEN — Acceptable — أداء مقبول
    
-   AMBER — Attention Required — أداء يتطلب الانتباه
    
-   RED — Action Required — يلزم اتخاذ إجراءات
    

يُستخدم لون الفئة أيضًا لتمييز اسم السائق في الجدول التفصيلي:

-   الأزرق — فئة BLUE
    
-   الأخضر — فئة GREEN
    

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_3.png)

-   الأصفر — فئة AMBER
    
-   الأحمر — فئة RED
    

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_4.png)

كلما ارتفع التقييم النهائي وزاد عدد المخالفات، احتاج أسلوب القيادة إلى مزيد من الاهتمام.

### Fleet Performance Summary

تتضمّن كتلة Fleet Performance Summary مؤشرات إجمالية للأسطول المحدد:

-   Fleet Average Score — متوسط التقييم النهائي للسائقين
    
-   Total events — العدد الإجمالي للأحداث والمخالفات المسجَّلة
    
-   Events per 100 km — عدد الأحداث في المتوسط لكل 100 كم من المسافة المقطوعة. يتيح هذا المؤشر مقارنة نتائج السائقين والأقسام ذات المسافات المختلفة.
    

### Individual Driver Performance

تعرض كتلة Individual Driver Performance النتائج التفصيلية لكل سائق.

يُعرض في الجدول:

-   Driver ID — معرّف السائق
    
-   Driver Name — اسم السائق
    
-   المدة HH:MM:SS — إجمالي مدة عمل السائق
    
-   المسافة (km) — المسافة المقطوعة
    
-   Overspeed 120 kph — عدد أحداث تجاوز السرعة في فئة 120 كم/س
    
-   Overspeed 100 kph — عدد أحداث تجاوز السرعة في فئة 100–119 كم/س
    
-   Overspeed 80 kph — عدد أحداث تجاوز السرعة في فئة 80–99 كم/س
    
-   Overspeed 60 kph — عدد أحداث تجاوز السرعة في فئة 60–79 كم/س
    
-   Overspeed 40 kph — عدد أحداث تجاوز السرعة في فئة 40–59 كم/س
    
-   Overspeed 30 kph — عدد أحداث تجاوز السرعة في فئة 30–39 كم/س
    
-   Accel حاد — عدد حالات التسارع الحاد
    
-   كبح حاد — عدد حالات الكبح الحاد
    
-   Cornering حاد — عدد حالات الانعطاف الحاد
    
-   Seatbelt مخالفة — عدد مخالفات استخدام حزام الأمان
    
-   السائق Score — التقييم النهائي للسائق الذي تُحدَّد على أساسه فئة BRAG الخاصة به
    

## تجهيز البيانات للتقرير

تصل بيانات المخالفات إلى التقرير من [الإشعارات](../../../moduli-1/uvedomleniya/index.html) المُعدّة للمركبات. لذلك يجب قبل استخدام التقرير [إنشاء الإشعارات اللازمة](../../../moduli-1/uvedomleniya/kak-sozdat-uvedomlenie.html) وتعيينها للمركبات المناسبة.

تحدّد الخوارزمية نوع الحدث من اسم الإشعار. ويجب أن تطابق الأسماء القالب المعتمد تمامًا:

-   BRAG Harsh Braking
    
-   BRAG Harsh Acceleration
    
-   BRAG Harsh Cornering
    
-   BRAG Overspeed
    
-   BRAG Overspeed 30-39
    
-   BRAG Overspeed 40-59
    
-   BRAG Overspeed 60-79
    
-   BRAG Overspeed 80-99
    
-   BRAG Overspeed 100-119
    
-   BRAG Overspeed 120
    
-   BRAG Seatbelt Violation
    

![تقرير BRAG لسلامة القيادة (BRAG Report)](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__screen.png)

يجب تعيين الإشعارات للمركبات التي ينبغي احتساب بياناتها في التقرير.

![](images/drex_otchyet_brag_po_bezopasnosti_vozhdeniya__brag_report__custom_5.png)

إذا غُيّر اسم الإشعار أو كان الإشعار غير موجود أو عُيّن لمركبة غير مناسبة، فقد لا تتعرف الخوارزمية على الحدث. وفي هذه الحالة لن تظهر المخالفة في التقرير، وقد تُحسب المؤشرات النهائية بشكل غير صحيح.
