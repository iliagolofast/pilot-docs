---
title: "العمل مع المسارات المعتمدة"
---

يساعد هذا API في العمل مع المسارات المعتمدة للمركبات: تحديد الفترات والحصول على المسارات واستخدام مشغّل المسارات.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

تُمرَّر المعاملات عبر سلسلة الطلب بالطريقة POST أو GET بحسب الأمر.

للحصول على البيانات المطلوبة أضف معاملات إلى عنوان الطلب. تُكتب المعاملات بعد علامة الاستفهام «?» وتُفصل بينها بالعلامة «&».

-   cmd=set\_approved\_tracks — أمر تحديد الفترات المعتمدة
    
-   cmd=get\_approved\_tracks — أمر الحصول على المسارات المعتمدة
    
-   veh — رقم لوحة المركبة أو معرّفها
    
-   ts — بداية الفترة (timestamp)
    
-   te — نهاية الفترة (timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### تحديد الفترات المعتمدة

مثال على طلب API

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/api/api.php?cmd=set_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=1537952400&amp;node=1</span></div></td></tr></tbody></table>

استجابة API

<table><tbody><tr><td><span></span></td><td><div>{"code":0,"msg":"ОК обновлено"}</div></td></tr></tbody></table>

### الحصول على المسارات المعتمدة

مثال على طلب API

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;admin_address&gt;<span>/api/api.php?cmd=get_approved_tracks&amp;veh=Р852ОВ77&amp;ts=1537945200&amp;te=153795 2400&amp;node=1</span></div></td></tr></tbody></table>

استجابة API

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code":0,</div><div>&nbsp; "data":{</div><div>&nbsp; &nbsp; "approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":2.8051348330013,"ts":1537948809,"te":1537949431,"max_speed":"59","avg_speed":26}</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "not_approved":[</div><div>&nbsp; &nbsp; &nbsp; {"length":1.8650025635569,"ts":1537945206,"te":1537946030,"max_speed":"40","avg_speed":12},</div><div>&nbsp; &nbsp; &nbsp; {"length":4.1987356239849,"ts":1537948298,"te":1537948798,"max_speed":"65","avg_speed":37}</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   approved — قائمة المسارات المعتمدة
    
-   not\_approved — قائمة المسارات التي لم تُعتمد
    
-   length — طول المسار بالكيلومترات
    
-   ts — وقت بداية المسار (timestamp)
    
-   te — وقت نهاية المسار (timestamp)
    
-   max\_speed — السرعة القصوى على المسار
    
-   avg\_speed — متوسط السرعة
    

### مشغّل المسارات

مشغّل المسارات هو خدمة ويب تتيح استعراض مسارات المركبات بصريًا. وخلافًا لـ API المعتاد، فإنه يعيد مباشرةً صفحة جاهزة تتضمن الخريطة والمسار، وليس JSON أو XML.

رابط عرض المسار:

<table><tbody><tr><td><span></span></td><td><div><span>http://</span>&lt;server_address&gt;<span>/api/track_player.php?login=demo&amp;pass=demo&amp;ts=1536933600&amp;te=1536940800&amp;veh=в848ае199&amp;lang=ru&amp;node=1</span></div></td></tr></tbody></table>

يمكنك استخدام عنوان URL هذا كقيمة iframe src لعرض المسار في الصفحة.
