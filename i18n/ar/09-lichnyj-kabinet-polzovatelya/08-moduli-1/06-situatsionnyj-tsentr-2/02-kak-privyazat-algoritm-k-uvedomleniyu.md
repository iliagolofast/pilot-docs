---
title: "كيفية ربط خوارزمية بإشعار"
---

سنشرح في هذه المقالة كيفية ضبط عمل الخوارزميات عبر الإشعارات.

ستتعرف على:

— [كيفية ربط خوارزمية بإشعار لكي تعمل تلقائياً عند وقوع الأحداث](kak-privyazat-algoritm-k-uvedomleniyu.html#автоматическое_срабатывание_алгоритма)

— [كيفية إنشاء إشعار بخوارزمية لإنشاء الأحداث يدوياً](kak-privyazat-algoritm-k-uvedomleniyu.html#ручная_генерация_события)

لكي تبدأ الخوارزمية العمل وتستجيب للأحداث، يجب ربطها بإشعار.

<table><tbody><tr><td><span></span></td><td><div>لكي يعمل الربط، يجب أن تكون الوحدة البرمجية <a href="../uvedomleniya/index.html"><span>«الإشعارات»</span></a> مفعّلة في العقد.</div></td></tr></tbody></table>

## ربط خوارزمية بحدث

ستعمل هذه الخوارزمية تلقائياً عند تحقق الشروط وتصل إلى «مركز الموقف».

1\. في الشريط العلوي انقر الأيقونة ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom.png)وافتح «إعدادات العقد». انتقل إلى علامة التبويب «الإشعارات».

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. انقر «إضافة» ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) لإنشاء إشعار جديد

3\. اربط الخوارزمية

1) في نافذة إعدادات الإشعار انقر «ربط الخوارزمية»

![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen.png)

2) في القائمة اختر الخوارزمية المطلوبة

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

3) انقر الخوارزمية — سيظهر مخططها مع الكتل

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_5.png)

4\. اضبط كتل الخوارزمية

1) انقر نقراً مزدوجاً على الكتلة المطلوبة

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2) املأ النص واختر وسوم الأحداث

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_7.png)

3) انقر «موافق»

### كيفية إنشاء وسم للكتلة

تساعد الوسوم على فهم جوهر الحدث بسرعة وتمييزه بصرياً في القائمة.

إذا لم يكن الوسم المطلوب موجوداً:

1\. في حقل «الوسم» انقر ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_6.png)

2\. في نافذة الوسوم انقر ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) لإضافة وسم جديد إلى القائمة

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_8.png)

3\. اكتب اسم الوسم واختر اللون

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_9.png)

4\. احفظ — سيظهر الوسم في القائمة ويصبح متاحاً للاختيار

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_10.png)

### ضبط كتلة Webhook

تنقل كتلة Webhook معلومات الحدث من PILOT إلى نظام خارجي، مثلاً إلى CRM أو نظام الإرسال أو تطبيق المؤسسة. يُرسل الطلب عندما يصل تنفيذ الخوارزمية إلى هذه الكتلة. اقرأ المزيد عن مبدأ العمل وضبط إشعارات Webhook [في هذه المقالة](../uvedomleniya/kak-rabotat-s-webhook-uvedomleniyami.html).

إذا كانت الخوارزمية تستخدم كتلة Webhook:

1\. اختر كتلة Webhook على المخطط

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_11.png)

2\. انقر عليها نقراً مزدوجاً — ستُفتح إعداداتها

3\. انقر أيقونة التحرير بجانب اسم الكتلة ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_12.png)

![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_2.png)

4\. املأ المعاملات في النافذة Webhook Details

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_13.png)

**URL**

حدّد عنوان النظام الخارجي الذي يجب على PILOT إرسال البيانات إليه. يجب الحصول على العنوان من مسؤول النظام المستقبِل أو مطوّره.

**Header (العنوان)**

حدّد ترويسات الطلب. افتراضياً يُستخدم نقل البيانات بصيغة JSON:

<table><tbody><tr><td><span></span></td><td><div>[</div><div>&nbsp; "ContentType: application/json"</div><div>]</div></td></tr></tbody></table>

غيّر الترويسات فقط إذا كان النظام المستقبِل يتطلب صيغة بيانات أخرى أو معاملات إضافية.

**Body (متن الطلب)**

حدّد البيانات التي يجب نقلها. افتراضياً يُستخدم القالب التالي:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "agent_id": "%AGENTID%",</div><div>&nbsp; "vehiclenumber": "%VEHNUM%",</div><div>&nbsp; "ts": "%TS%",</div><div>&nbsp; "lat": "%LAT%",</div><div>&nbsp; "lon": "%LON%",</div><div>&nbsp; "speed": "%SPEED%",</div><div>&nbsp; "data": "%DATA%",</div><div>&nbsp; "zone": "%ZONE%",</div><div>&nbsp; "driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

يستبدل النظام تلقائياً المتغيرات المحاطة بعلامات % ببيانات من الحدث. فمثلاً بدلاً من %SPEED% ستُنقل سرعة الكائن، وبدلاً من %VEHNUM% — رقم المركبة.

يمكن تغيير متن الطلب: حذف الحقول غير الضرورية، أو إضافة حقولك الخاصة، أو استخدام متغيرات أخرى متاحة.

حافظ على صيغة JSON الصحيحة:

"اسم\_الحقل": "%المتغير%"

إذا كان في بنية JSON أو في كتابة المتغير خطأ، فقد لا يستلم النظام الخارجي الطلب أو لا يعالجه.

**المتغيرات المسموح بها**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>المتغير</span></div></td><td colspan="1" rowspan="1"><div><span>ما ينقله</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>معرّف الحساب (ID)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>معرّف الكائن (ID)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>رقم السيارة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%TS%</span></div></td><td colspan="1" rowspan="1"><div><span>الطابع الزمني (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>التاريخ والوقت</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>خط العرض</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%LON%</span></div></td><td colspan="1" rowspan="1"><div><span>خط الطول</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>المسافة المقطوعة (حسب الحساس)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>بيانات الإشعار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>السياج الجغرافي</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>معرّف أول سياج جغرافي (ID)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>اسم أول سياج جغرافي</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>السرعة القصوى (لإشعارات التجاوز)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>مدة التجاوز</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>%SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>حد السرعة المحدد (التحكم في السرعة)</span></div></td></tr></tbody></table>

قد تعتمد مجموعة المتغيرات المتاحة على نوع الإشعار. مثلاً المتغيرات %MAXSPEED% و%DUR% و%SPEEDLIMIT% مخصصة لإشعارات تجاوز السرعة.

بعد ملء المعاملات انقر «حفظ»، ثم أكّد ضبط الكتلة بالزر «موافق». وإذا كانت فروع الخوارزمية المختلفة تستخدم كتل Webhook مختلفة، فاضبط كل واحدة منها على حدة.

### ضبط نافذة معالجة الحدث

يمكنك ضبط شكل [نافذة معالجة الحدث](kak-obrabotat-sobytie.html#Окно_«Обработка_события») للمشغّل:

-   في نافذة ربط الخوارزمية انقر «الإعدادات»
    

![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_3.png)

2\. انقر ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png) لإضافة العناصر:

![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_4.png)  
ما يمكن ضبطه:

-   نوع العنصر — نوع الكتلة (مثلاً plaintext — نص عادي)
    
-   العنوان — اسم الكتلة
    
-   النص — معلومات للمشغّل
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_14.png)

مثلاً:

1\. أضف سطراً من النوع plaintext

2\. في حقل «العنوان» اكتب ما هي هذه الكتلة (مثلاً: «معلومات الحدث»)

3\. في حقل «النص» أضف المعلومات التي يجب أن يراها المشغّل (مثلاً: «تحقق من درجة الحرارة في صندوق الحمولة وتواصل مع السائق»).

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_15.png)

لإضافة قسم بمعلومات عن المركبة، انقر أيقونة السيارة. ستظهر كتلة جديدة من النوع vehicle يمكنك فيها ضبط العنوان والنص.

![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_5.png)

1 — إضافة معلومات المركبة. لإضافة قسم ببيانات السائق، انقر أيقونة رخصة القيادة. ستظهر كتلة جديدة من النوع driver. يمكنك في هذه الكتلة تحديد العنوان والنص.

2 — إضافة معلومات السائق

بعد الضبط انقر «موافق» — وسيرى المشغّل النموذج بهذا الشكل بالضبط عند معالجة الحدث.

## إنهاء ضبط الإشعار

-   في نافذة «ضبط الإشعارات» حدّد:
    
-   اسم الإشعار
    
-   الكائن
    
-   نوع الإشعار — Control room (GARM)
    

-   [المجموعة](kak-nastroit-parametry-sobytij.html#группы_событий)
    
-   شروط الإشعار (مثلاً المعامل «درجة الحرارة» وحدّه)
    

**![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_6.png)**

2\. انقر «حفظ»

**![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_16.png)**

3\. سيظهر الإشعار المرتبط بالخوارزمية في القائمة ويصل إلى «مركز الموقف» عند تحقق الشروط

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_17.png)

## خوارزمية لإنشاء الحدث يدوياً

يلزم الإنشاء اليدوي عندما لا يصل الحدث تلقائياً — مثلاً في الحالات الطارئة أو للاختبار أو لتسجيل المشغّل الحدث يدوياً.

### كيفية إنشاء إشعار للإنشاء اليدوي

1\. افتح  [«إعدادات العقد»](../../nastrojki-dogovora-2/index.html) واختر علامة التبويب «الإشعارات»

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_2.png)

2\. في علامة التبويب «الإشعارات» انقر ![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_3.png)

3\. في إعدادات الإشعار حدّد:

![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_7.png)

1 — نوع الإشعار «مركز الموقف» (GARM)

2 — إشعار للإنشاء اليدوي فقط

-   الكائن
    
-   اسم الإشعار
    
-   نوع الإشعار — مركز الموقف (GARM)
    
-   المجموعة
    
-   علامة الاختيار «للإنشاء اليدوي فقط»
    
    4\. انقر «ربط الخوارزمية»
    
    5\. في نافذة الخوارزميات التي تُفتح اختر الخوارزمية التي تريد ربطها بالإشعار وانقر «موافق»
    

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_4.png)

5\. احفظ الإشعار

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_18.png)

### كيفية إنشاء حدث يدوياً

1\. اختر الكائن في القائمة الرئيسية

2\. انقر عليه بزر الماوس الأيمن واختر «إنشاء حدث»

![كيفية ربط خوارزمية بإشعار](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_screen_8.png)

3\. اختر نوع الإشعار للإنشاء اليدوي واكتب نص الحدث

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_19.png)

![](images/drex_kak_privyazat_algoritm_k_uvedomleniyu_custom_20.png)

4\. سيظهر الحدث على [لوحة](kak-obrabotat-sobytie.html#Панель_Control_room) «مركز الموقف» وسيُعالج وفق الخوارزمية
