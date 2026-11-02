---
title: "إعداد إعادة الإرسال إلى منصة WMS"
---

سنشرح كيفية إعداد التكامل الذي ينقل بيانات أجهزة التتبع GPS من نظام PILOT إلى منصة WMS الخارجية عبر بروتوكول «بلدية الرياض».

يتكون الإعداد من مرحلتين:

1\. إعداد إعادة الإرسال في لوحة المسؤول في PILOT

2\. إعداد حساسات الكائنات

### 1\. إعداد إعادة الإرسال في لوحة المسؤول

1\. افتح لوحة المسؤول

2\. انتقل إلى علامة التبويب «الآليات»

3\. ابحث عن الكائن المطلوب، وانقر عليه بزر الفأرة الأيمن، ثم اختر من القائمة «إعادة الإرسال»

**![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom.png)**

4. في النافذة التي ستظهر، اضغط على زر إضافة إعادة إرسال ![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_2.png)

**![إعداد إعادة الإرسال إلى منصة WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen.png)**

5\. في نافذة «التكوين» املأ حقول إعداد إعادة الإرسال:

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_3.png)

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الحقل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الوصف</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;القيمة</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;المضيف</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;عنوان المضيف لإرسال البيانات (IP أو اسم نطاق)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span>مثلاً: admin-dev-wms.iotsquared.io&nbsp;(المضيف محدد في البروتوكول)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;المنفذ</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;المنفذ الذي تُرسل إليه البيانات</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;443</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;التنسيق</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;تنسيق إعادة الإرسال</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>RIYADH municipality — اختره من القائمة المنسدلة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;المعرّف الخارجي للجهاز (عادةً IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;أدخل&nbsp;IMEI&nbsp;الجهاز&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;المسار</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;مسار الطلب الذي يحتوي على x-token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; /api/v1/integrations/http/${httpid}&nbsp;(حيث ${httpid} هو x-token)</span></div><div><span>&nbsp; مثلاً: /api/v1/integrations/http/32fc9bec-967839-467890-56a0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;USPW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;اسم المستخدم وكلمة المرور إذا كانت المصادقة مطلوبة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;المنطقة الزمنية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;المنطقة الزمنية</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;UTC</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;حد السرعة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;حد السرعة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 0</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;مفعّل</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;حالة تفعيل إعادة الإرسال</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ضع علامة الاختيار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;معلمات إضافية بتنسيق JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; أدخل اسم الشريك</span></div></td></tr></tbody></table>

مثال على التكوين

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_4.png)

### 2\. إعداد الحساسات

للتكامل الصحيح مع WMS يجب تركيب الحساسات الإلزامية التالية على الكائن:

— حساس هوائي GPS

— حساس المسافة المقطوعة CAN

— حساس وزن خاص (Weight)

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_5.png)

لكي يرسل جهاز Teltonika المسافة المقطوعة عبر CAN (قراءات عداد المسافات)، يجب تفعيل هذه المعلمة باستخدام أمر.

1\. افتح لوحة المسؤول

2\. انتقل إلى علامة التبويب «الآليات»

3\. ابحث عن الكائن المطلوب، وانقر عليه بزر الفأرة الأيمن، ثم اختر من القائمة «الأوامر»

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_6.png)

4.  في نافذة «الأوامر» اختر أمراً من القائمة المنسدلة

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_7.png)

5\. حدّد معلمات الأمر واضغط على زر «إرسال»

![إعداد إعادة الإرسال إلى منصة WMS](images/drex_nastrojka_retranslyatsii_na_platformu_wms_screen_2.png)

1 — حدّد معلمات الأمر

2 — افتح قائمة الأوامر

-   setparam 50160:1 — تفعيل إرسال بيانات عداد المسافات
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_8.png)

إذا لزم ضبط قيمة ابتدائية للمسافة المقطوعة، أي ألا تبدأ من الصفر:

-   setparam 11807:\[القيمة\]— ضبط المسافة المقطوعة بحيث لا تبدأ من الصفر
    
    مثلاً: setparam 11807:2729، حيث 2729 هي القيمة الابتدائية لعداد المسافات بالكيلومترات
    

![](images/drex_nastrojka_retranslyatsii_na_platformu_wms_custom_9.png)

تضبط هذه الأوامر جهاز Teltonika على استقبال بيانات المسافة المقطوعة عبر ناقل CAN في السيارة. وبعد الإعداد ستُرسل المسافة المقطوعة إلى النظام تلقائياً.
