---
title: "الاستيراد من Wialon"
---

لنقل البيانات من نظام Wialon استخدم الوحدة «الاستيراد من Wialon». يجري نقل البيانات عبر معالج الترحيل: اختر الكائنات المطلوبة وانقلها إلى PILOT.

<table><tbody><tr><td><span></span></td><td><div>قبل نقل البيانات تأكد من أن حسابك في Wialon يملك صلاحيات التصدير، أي الوصول&nbsp;إلى&nbsp;وظيفة Import/Export. وإذا لم تتوفر هذه الصلاحيات، فلن تتمكن وحدة «الاستيراد من Wialon» من تصدير الكائنات.</div></td></tr></tbody></table>

![الاستيراد من Wialon](images/drex_import_iz_wialon_screen.png)

<table><tbody><tr><td><span></span></td><td><div>لفهم عملية العمل مع معالج الترحيل ونقل البيانات من Wialon إلى PILOT بشكل مرئي، شاهد الفيديو <a href="https://youtu.be/TMAA7MX-EQU"><span>«كيفية نقل البيانات من Wialon إلى PILOT»</span></a>.</div><div><div><a href="https://youtu.be/TMAA7MX-EQU" title="560_315">https://youtu.be/TMAA7MX-EQU</a></div></div></td></tr></tbody></table>

## كيفية نقل البيانات:

1\. فعّل الوحدة «الاستيراد من Wialon» في لوحة المسؤول. بعد ذلك سيظهر زر «الاستيراد من Wialon» في تبويب «الأساسية»

![الاستيراد من Wialon](images/drex_import_iz_wialon_screen_2.png)

2\. انقر على الزر ![](images/drex_import_iz_wialon_custom.png)

3\. ستفتح نافذة معالج الترحيل، وهي مقسمة إلى جزأين:

على اليسار: قائمة مهام الترحيل

على اليمين: قائمة كائنات Wialon التي سيجري نقلها

![الاستيراد من Wialon](images/drex_import_iz_wialon_screen_3.png)

4\. أنشئ مهمة ترحيل جديدة:

1) انقر الزر «إضافة مهمة» ![](images/drex_import_iz_wialon_custom_2.png)

2) في النافذة التي ستظهر، املأ الحقول:

![الاستيراد من Wialon](images/drex_import_iz_wialon_screen_4.png)

-   اسم مستخدم Wialon  — اسم المستخدم الخاص بك في Wialon
    
-   كلمة مرور Wialon — كلمة المرور الخاصة بك في Wialon
    

3) انقر الزر «تحميل الكائنات من Wialon»

4) ستظهر في الأسفل قائمة بالكائنات التي يمكن نقلها. ضع علامة على الكائنات التي تريد استيرادها.

<table><tbody><tr><td><span></span></td><td><div>الكائنات التي تحمل علامة&nbsp;processed&nbsp;سبق اختيارها في مهام أخرى ولا يمكن اختيارها.</div></td></tr></tbody></table>

![](images/drex_import_iz_wialon_custom_3.png)

5) انقر «حفظ»

5\. ستظهر المهمة الجديدة في القائمة على اليسار في نافذة معالج الترحيل. ستكون جميع حالاتها فارغة، أي أن المهمة لم تُشغَّل بعد.

![الاستيراد من Wialon](images/drex_import_iz_wialon_screen_5.png)

6\. لبدء نقل البيانات، انقر على المهمة في القائمة ثم انقر «تشغيل المهمة» ![](images/drex_import_iz_wialon_custom_4.png)

<table><tbody><tr><td><span></span></td><td><div>بعد التشغيل لن يمكن تعديل المهمة.</div></td></tr></tbody></table>

7\. بعد تشغيل المهمة سيبدأ نقل البيانات تلقائيًا

ستتحدث حالات المراحل في نافذة معالج الترحيل، وعادةً لا يستغرق ذلك أكثر من دقيقة.

انتظر اكتمال العملية: سترى كيف تتغير الحالات وتظهر بيانات جديدة.

![الاستيراد من Wialon](images/drex_import_iz_wialon_screen_6.png)

لمتابعة عملية الترحيل ورؤية الحالات الحالية، انقر الزر «تحديث» ![](images/drex_import_iz_wialon_custom_5.png).

في هذا المثال، بعد تنفيذ المهمة ذات المعرّف id: 322، نُقل كائن Wialon الوحيد إلى PILOT بنجاح تام.

![](images/drex_import_iz_wialon_custom_6.png)

## مراحل الترحيل

تُعرض لكل كائن مراحل الترحيل:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المرحلة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تم تشغيل المهمة. بدأ الترحيل وشرع النظام في تنفيذ المهمة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; auth</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المصادقة في Wialon API. يتصل النظام بـ Wialon للحصول على إمكانية الوصول إلى البيانات</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wlp</span></div></td><td colspan="1" rowspan="1"><div><span>تصدير معاملات الكائنات.</span></div><div><span>تُصدَّر المعاملات الأساسية للكائنات من Wialon (عدد ملفات معاملات كائنات Wialon المعالجة بنجاح / العدد الإجمالي لكائنات Wialon في هذه المهمة)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; wln</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تصدير أحداث الكائنات.</span></div><div><span>&nbsp; تُصدَّر أحداث الكائنات من Wialon (عدد ملفات أحداث كائنات Wialon المعالجة بنجاح / العدد الإجمالي لكائنات Wialon في هذه المهمة)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; veh</span></div></td><td colspan="1" rowspan="1"><div><span>إنشاء الكائنات في PILOT</span></div><div><span>(عدد كائنات PILOT المنشأة بنجاح / العدد الإجمالي لكائنات Wialon في هذه المهمة)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sns</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; استيراد الحساسات. نقل بيانات الحساسات المركّبة على الكائنات</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; evt</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; استيراد الأحداث. تُستورد جميع الأحداث المرتبطة بالكائنات (مثل تجاوز السرعة والتزود بالوقود والإنذارات)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rc</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; إعادة حساب البيانات:</span></div><div><span>&nbsp; rc1 — المسارات:&nbsp;إعادة حساب الرحلات ومسارات الحركة</span></div><div><span>&nbsp; rc2 — الحساسات الثنائية: إعادة حساب بيانات الحساسات ذات الحالتين (مثل تشغيل/إيقاف)</span></div><div><span>&nbsp; rc3 — الحساسات: إعادة حساب البيانات لجميع الحساسات</span></div><div><span>&nbsp; rc4 — عداد المسافة: إعادة حساب المسافة المقطوعة</span></div><div><span>&nbsp; rc5 — eco: إعادة حساب بيانات أسلوب القيادة (eco-driving)</span></div><div><span>&nbsp; r6 — الحساسات المتعددة:&nbsp;إعادة حساب بيانات الحساسات المعقدة (متعددة القنوات)</span></div></td></tr></tbody></table>

## حالات مراحل الترحيل

يمكن أن تكون قيم حقول الحالة كما يلي:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; القيمة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; فارغ</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لم تُنفَّذ مرحلة الترحيل</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_7.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; انتهت المرحلة بنجاح</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; <img alt="" src="images/drex_import_iz_wialon_custom_8.png"></span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; انتهت المرحلة بأخطاء</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1001</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رمز خطأ Wialon API</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; no data</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رسالة خطأ Wialon API (لا توجد بيانات)</span></div></td></tr></tbody></table>
