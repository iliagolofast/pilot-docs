---
title: "كيفية إعداد أوامر التحكم"
---

لكي يعمل الزران «فتح» و«إغلاق» في التطبيق، يجب إعداد قالبَي الأمر arm وdisarm في نظام PILOT.

![كيفية إعداد أوامر التحكم](images/drex_kak_nastroit_komandy_upravleniya_screen.png)

تُعدّ قوالب الأوامر في نظام PILOT:

1\. افتح الحساب الشخصي للمستخدم

2\. انتقل إلى قسم «الرئيسية»

3\. اضغط على أيقونة «الأوامر»

![كيفية إعداد أوامر التحكم](images/drex_kak_nastroit_komandy_upravleniya_screen_2.png)

3\. ستُفتح نافذة يمكن فيها إنشاء قوالب الأوامر.

![](images/drex_kak_nastroit_komandy_upravleniya_custom.png)

## كيفية إنشاء قالب أمر

1\. اضغط «إضافة أمر»

![كيفية إعداد أوامر التحكم](images/drex_kak_nastroit_komandy_upravleniya_screen_3.png)

2\. اختر الكائن الذي يُنشأ الأمر له

3\. اضغط ![](images/drex_kak_nastroit_komandy_upravleniya_custom_2.png)

![](images/drex_kak_nastroit_komandy_upravleniya_custom_3.png)

3\. حدّد المعلمات:

-   نوع الأمر — GRPS
    
-   صنف الأمر — SMS\_VIA\_GPRS
    

![](images/drex_kak_nastroit_komandy_upravleniya_custom_4.png)

4\. في حقل «SMS» أدخل نص الأمر، مثلاً: setdigout 0 — إلغاء الحراسة

![](images/drex_kak_nastroit_komandy_upravleniya_custom_5.png)

5\. عند الحاجة فعّل خانة hex إذا كان يجب إرسال الأمر بتنسيق HEX

6\. اضغط «حفظ كقالب» وأدخل الاسم

![](images/drex_kak_nastroit_komandy_upravleniya_custom_6.png)

يجب تحديد أسماء القوالب بدقة:

-   arm — تفعيل الحراسة
    
-   disarm — إلغاء الحراسة
    
-   get\_beacon\_ids — الحصول على قائمة العلامات
    
    تُكتب الأسماء بأحرف صغيرة. ومن خلال هذه الأسماء بالتحديد يجد التطبيق الأوامر وينفذها.
    

## أمثلة على الأوامر

تفعيل الحراسة — arm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>الجهاز</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>قالب الأمر</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 1</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 0</span></div></td></tr></tbody></table>

إلغاء الحراسة — disarm

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>الجهاز</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>قالب الأمر</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; setdigout 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Adm 333</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; BLEOUTPUT 1</span></div></td></tr></tbody></table>

الحصول على قائمة العلامات — get\_beacon\_ids

أمر للحصول على قائمة علامات Bluetooth المسجَّلة على الجهاز.

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>الجهاز</strong></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; <strong>قالب الأمر</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Teltonika</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; getparam 1600;1601;1602;1603;1604;1605;1606;1607;1608;1609;1610</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>لكي تعمل الأوامر بشكل صحيح:</div><div>— يجب أن يكون الجهاز متصلاً بالشبكة</div><div>— يجب إعداد حساس الحراسة في النظام — فهو لازم ليتمكن التطبيق من عرض حالة الحراسة الحالية</div></td></tr></tbody></table>

بعد إعداد القوالب سيصبح الزران «إغلاق» و«فتح» نشطين وستتمكن من التحكم بالسيارة من شاشة «حالة السيارة».
