---
title: "وقت توقف المركبات"
---

يعيد هذا API قائمة بفترات توقف المركبة عن الفترة الزمنية المحددة.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET

### معاملات الطلب

تُمرَّر المعاملات عبر سلسلة الطلب أو في جسم طلب POST:

-   cmd=get\_idle — أمر الحصول على فترات التوقف
    
-   time\_start — بداية الفترة (timestamp، unixtime)
    
-   time\_end — نهاية الفترة (timestamp، unixtime)
    
-   imei — IMEI جهاز المراقبة. إذا كان هناك عدة أجهزة فتُكتب مفصولة بفواصل: imei=887556,io9987,76573
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب API

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_idle&amp;time_start=16878956&amp;time_end=16878755&amp;imei=887556,io9987,76573&amp;node=1</div></td></tr></tbody></table>

### مثال على الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "2914": [</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": "1641814740", "idle_end": 1641814984},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641815547, "idle_end": 1641825619},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641827105, "idle_end": 1641893307},</div><div>&nbsp; &nbsp; &nbsp; {"idle_start": 1641893623, "idle_end": 1641898037}</div><div>&nbsp; &nbsp; &nbsp; // ... остальные записи ...</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; },</div><div>&nbsp; "message": "success"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة: 0 — نجاح، 1 — خطأ
    
-   data — قاموس مفاتيحه معرّفات المركبات وقيمه قوائم فترات التوقف:
    
-   idle\_start — وقت بداية التوقف (timestamp)
    
-   idle\_end — وقت نهاية التوقف (timestamp)
    
-   message — رسالة نصية بنتيجة الطلب
