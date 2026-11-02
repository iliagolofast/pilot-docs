---
title: "إعداد إعادة البث إلى RNIS"
---

لإعداد نقل البيانات من كائنات المراقبة إلى النظام الإقليمي الموحد للملاحة والمعلومات (RNIS, РНИС) في موسكو، نفّذ الخطوات التالية:

### 1\. إعداد إعادة البث في نظام المراقبة PILOT

1\. ادخل إلى لوحة الإدارة

2\. انتقل إلى تبويب «المركبات»

3\. ابحث عن الكائن المطلوب وانقر عليه بزر الفأرة الأيمن واختر من القائمة «إعادة البث»

**![](images/drex_nastrojka_retranslyatsii_v_rnis_custom.png)**

4. في النافذة التي ستفتح، انقر زر إضافة إعادة البث ![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_2.png)

**![إعداد إعادة البث إلى RNIS](images/drex_nastrojka_retranslyatsii_v_rnis_screen.png)**

5\. في نافذة «التكوين» املأ حقول إعداد إعادة البث إلى RNIS:

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_3.png)

استخدم المعاملات التالية:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الحقل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الوصف</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;القيمة</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;المضيف</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;عنوان المضيف لإرسال البيانات (IP أو اسم نطاق)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; data.rnis.mos.ru — عنوان الخادم المستقبِل</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;المنفذ</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;المنفذ الذي تُرسل إليه البيانات</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 4444 — منفذ الاتصال بخادم RNIS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;الصيغة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;صيغة إعادة البث</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;</span><span> EGTS — بروتوكول نقل البيانات</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;المعرّف الخارجي للجهاز (عادةً IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>أدخل آخر 8 أرقام من IMEI الجهاز.</span></div><div><span>على سبيل المثال، إذا كان IMEI الجهاز 4901542<span>03237518</span>، فأدخل في حقل المعرّف الخارجي 03237518</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;مفعّل</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;حالة نشاط إعادة البث</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ضع علامة بالتأكيد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;json config</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;معاملات إضافية بصيغة JSON</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; {"skip_auth": true} — التكوين القياسي للاتصال</span></div></td></tr></tbody></table>

![](images/drex_nastrojka_retranslyatsii_v_rnis_custom_4.png)

### 2\. تسجيل الجهاز الطرفي في الحساب الشخصي في RNIS

1\. انتقل إلى الحساب الشخصي في RNIS على موقع mos.ru.

2\. عند إضافة جهاز تليماتي طرفي للمركبة، حدّد المعاملات التالية:

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp;المعامل في RNIS</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;القيمة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;البروتوكول</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; EGTS_O</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;معامل بالغ الأهمية. يوافق صيغة EGTS،</span></div><div><span>&nbsp;حيث يُنقل المعرّف في الحقل OID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;المعرّف</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; XXXXXXXX</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;الرقم نفسه الذي في المعرّف الخارجي&nbsp;في&nbsp;نظام PILOT (آخر 8 أرقام من IMEI). على سبيل المثال، إذا كان IMEI الجهاز 4901542<span>03237518</span>، فأدخل في حقل المعرّف الخارجي 03237518</span></div></td></tr></tbody></table>

مخطط التكامل الناجح بين PILOT وRNIS

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;RNIS</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;الصيغة: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; البروتوكول: EGTS_O</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID: 03237518</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف: 03237518</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>يجب أن تتطابق آخر 8 أرقام من IMEI الجهاز في نظامي PILOT وRNIS معًا. على سبيل المثال، إذا كان&nbsp;في&nbsp;PILOT محددًا 03237518، فيجب نقل المعرّف نفسه في RNIS في الحقل OID.</div></td></tr></tbody></table>

عند التسجيل في RNIS يجب تزويد المشغّل بالبيانات التالية:

-   لتعريف المركبة تُنقل آخر 8 أرقام من IMEI في الحقل OID
    
-   نوع البروتوكول — يجب اختيار النوع EGTS\_O لاتصالك في RNIS
    
    <table><tbody><tr><td><span></span></td><td><div>لتجنب الأخطاء وضمان نقل البيانات بشكل صحيح، من المهم أن تتطابق الإعدادات والمعرّف المحددان في PILOT تمامًا مع ما يُستخدم في RNIS.</div><ul><li><div>يجب نقل المعرّف الخارجي للكائن في نظام PILOT (آخر 8 أرقام من IMEI الجهاز) إلى&nbsp;RNIS&nbsp;في الحقل OID (ضمن بروتوكول EGTS_O).</div></li><li><div>يجب أن يكون بروتوكول نقل البيانات في النظامين واحدًا: EGTS في نظام PILOT وEGTS_O في RNIS.</div></li></ul></td></tr></tbody></table>
    

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; PILOT</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp;RNIS</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;البروتوكول: EGTS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; البروتوكول: EGTS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp;External ID: (آخر 8 أرقام من IMEI)</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع الاتصال: EGTS_O</span></div></td></tr></tbody></table>
