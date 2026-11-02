---
title: "دليل التكوينات"
---

في هذه المقالة نستعرض التكوينات المتاحة في النظام والغرض منها. 

**إضافة السيارات المسموح بها الجديدة إلى الإشعارات**

لكي تُضاف السيارات الجديدة المسموح بها إلى الإشعارات تلقائيًا، يجب ضبط هذا التكوين في الحساب الشخصي. هذه الوظيفة مخصصة للكائنات المربوطة (أي للكائنات من عقود أخرى).

<table><tbody><tr><td><span></span></td><td><div><span>التكوين </span><span><strong>Confirm adding vehicles to notifications</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom.png)

**إعداد إخفاء معلومات الجهاز**

<table><tbody><tr><td><span></span></td><td><div><span>التكوين&nbsp; <strong>hide_device</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_2.png)

**فترة مجانية للشريك**

مخصص للفترة التجريبية للنظام.

<table><tbody><tr><td><span></span></td><td><div><span>التكوين&nbsp; </span><span><strong>Partner Grace Period (days)</strong></span></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_3.png)

**إضافة عمود "العنوان" في شجرة الكائنات**

لعرض العنوان في تبويب «مباشر» يجب إضافة التكوين التالي إلى إعدادات العقد.

<table><tbody><tr><td><span></span></td><td><div><span>التكوين =&nbsp; </span><strong>Address in Online Tree</strong></div></td></tr></tbody></table>

![](images/drex_spravochnik_konfiguratsij_custom_4.png)

**حظر الشريك عند الرصيد السالب بعد انقضاء 5 أيام**

بشرط أن يكون نوع حساب الشريك دفعًا مسبقًا وأن يكون الرصيد أقل من الصفر أو مساويًا له (مع مراعاة الوديعة).

إذا كان الشريك داخل النظام، فسيظهر في لوحة المسؤول طوال 5 أيام، كل 3 ساعات، مربع حوار بتحذير.

**![](images/drex_spravochnik_konfiguratsij_custom_5.png)**

في اليوم الخامس، إذا كان الشريك داخل النظام، ستنتهي الجلسة تلقائيًا وينتقل الشريك إلى صفحة تسجيل الدخول.

لن يتمكن الشريك من الدخول إلى لوحة المسؤول.

![](images/drex_spravochnik_konfiguratsij_custom_6.png)

نافذة إضافة تنبيه.

بعد تعبئة الرصيد يدخل الشريك إلى النظام.

![](images/drex_spravochnik_konfiguratsij_custom_7.png)

 **سائق واحد**

ربط سائق واحد فقط بالكائن عند إنشاء سائق جديد أو عند تحديث سائق قديم.

<table><tbody><tr><td><span></span></td><td><div><span>التكوين <strong>single_driver = true </strong>للحساب.</span></div></td></tr></tbody></table>

عندما ننشئ سائقًا أو نحدّث سجلًا قديمًا ونربط السائق بالمركبة، أو إذا كان لهذه المركبة بالذات سائق مرتبط بالفعل، فإنه يلغي أولًا ربط السائق السابق تلقائيًا ثم يربط السائق الجديد.

![](images/drex_spravochnik_konfiguratsij_custom_8.png)

**عرض البث المرئي في تبويب جديد**

لعرض البث المرئي في تبويب جديد، يجب إضافة تكوين إلى العقد بالقيمة true في إعدادات الوحدة.

ولتعطيل التكوين يجب كتابة false.

-   فعّل وحدة CMS.
    
-   انتقل إلى تبويب إعدادات الوحدة.
    
-   أضف السجل **open\_in\_new\_tab**
    

![](images/drex_spravochnik_konfiguratsij_custom_9.png)

عند النقر على أيقونة الكاميرا في واجهة المستخدم يُفتح البث في تبويب جديد عبر الرابط.

عند النقر على أيقونة الكاميرا واختيار فترة التواريخ يظهر سجل التسجيل من كاميرات المراقبة.

![](images/drex_spravochnik_konfiguratsij_custom_10.png)

**إعادة العلامة التجارية للمصادقة الثنائية TOTP**

<table><tbody><tr><td><span></span></td><td><div><span>التكوين&nbsp; </span><span><strong>TOTP Label = name</strong></span></div></td></tr></tbody></table>

مخصص لتغيير اسم الشركة في الأيقونة عندما تصل العميل رموز الدخول إلى الحساب.

![](images/drex_spravochnik_konfiguratsij_custom_11.png)

![](images/drex_spravochnik_konfiguratsij_custom_12.png)

**ظهور جميع التعرفات**

<table><tbody><tr><td><span></span></td><td><div><span>التكوين&nbsp; </span><span><strong>Only private prices = 1</strong></span></div></td></tr></tbody></table>

 يمكن إخفاء التعرفات باستخدام التكوين في إعدادات الشريك.

![](images/drex_spravochnik_konfiguratsij_custom_13.png)

التكوين لهذه النافذة، والظهور في إعدادات العقد.

![](images/drex_spravochnik_konfiguratsij_custom_14.png)

**وحدة التحليلات (اللوحة) - تبويب البدء.**

التكوين مخصص لعرض لوحة التحليلات عند التحميل الأولي للواجهة.

<table><tbody><tr><td><span></span></td><td><div><span>التكوين&nbsp; </span><span><strong>Main Tab = dashboard</strong></span></div></td></tr></tbody></table>

**![](images/drex_spravochnik_konfiguratsij_custom_15.png)**

يظهر التبويب في واجهة المستخدم كتبويب البدء.

**![](images/drex_spravochnik_konfiguratsij_custom_16.png)**

<table><tbody><tr><td><span></span></td><td><div><span>التكوين = <strong>additional_fields</strong> لوحدة بطاقات الوقود&nbsp; في الحساب.</span></div><div>&nbsp;</div></td></tr></tbody></table>

الأعمدة مخفية افتراضيًا، ويمكن للمستخدم عرضها في تبويب المعاملات. وبحسب نوع حساب الوقود لديك قد تختلف الحقول لإعداد التكوين.

![](images/drex_spravochnik_konfiguratsij_custom_17.png)

<table><tbody><tr><td><span></span></td><td><div><span>التكوين<strong> Low Ballance Emails</strong> = </span><a href="mailto:s@pilot-telematics.com,"><span>s@pilot-telematics.com</span></a><span> (يمكن تحديد عدة عناوين)</span></div></td></tr></tbody></table>

التكوين مخصص لاختيار الحسابات التي يجب تلقي إشعارات انخفاض الرصيد بشأنها. حدّد في الإعدادات عناوين البريد الإلكتروني اللازمة للإشعارات.

![](images/drex_spravochnik_konfiguratsij_custom_18.png)

<table><tbody><tr><td><span></span></td><td><div><span>التكوين </span><span><strong>Maps</strong> =&nbsp;{"default": "Google Sat", "hidden":&nbsp;["OSM"]}</span></div></td></tr></tbody></table>

يتيح التكوين للعقد أو الشريك التحكم في ظهور الخرائط وتعيين الخريطة الافتراضية

(Yandex، Google، OSM).

![](images/drex_spravochnik_konfiguratsij_custom_19.png)

![](images/drex_spravochnik_konfiguratsij_custom_20.png)

<table><tbody><tr><td><span></span></td><td><div><span>التكوين <strong>Link to manual&nbsp; = </strong></span><a href="https://doc.pilot-gps.ru"><span>https://doc.pilot-gps.ru</span></a></div></td></tr></tbody></table>

يتيح التكوين للمستخدمين تحميل المواد التدريبية وأدلة المستخدم الخاصة بهم إلى النظام.

ستكون المستندات المحمّلة متاحة للعرض في أي وقت، مما يوفر وصولًا سهلًا إلى تعليمات وظائف Pilot.

يستطيع المستخدمون العثور بسهولة على المواد المطلوبة واستخدامها للحصول على معلومات ومساعدة حول مختلف جوانب العمل مع النظام.

![](images/drex_spravochnik_konfiguratsij_custom_21.png)

![](images/drex_spravochnik_konfiguratsij_custom_22.png)

<table><tbody><tr><td><span></span></td><td><div>التكوين <strong>Telegram bot</strong></div></td></tr></tbody></table>

لإضافة انتقال سريع إلى بوت Telegram عبر الحساب الشخصي للمستخدم، استخدم التكوين Telegram bot.

 في حقل القيمة أدخل عنوان البوت، على سبيل المثال: @PilotGpsBot.

![](images/drex_spravochnik_konfiguratsij_custom_23.png)

بعد الحفظ، سيظهر في الحساب الشخصي للمستخدم، في قائمة الإعدادات الإضافية، تبويب منفصل برابط للانتقال إلى بوت Telegram.

![](images/drex_spravochnik_konfiguratsij_custom_24.png)
