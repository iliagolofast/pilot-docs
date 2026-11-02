---
title: "الحصول على تقرير"
---

يُنشئ هذا API تقريرًا عن المركبات أو السائقين أو المناطق أو العملاء أو الوسوم عن الفترة الزمنية المحددة مع إمكانية ضبط المحتوى بالتفصيل.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET أو POST

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=get\_report — أمر الحصول على التقرير
    
-   report\_type — نوع التقرير ([معرّف رقمي](spisok-otchyetov-2.html#идентификатор_отчёта_для_апи))
    
-   start — بداية الفترة (Unix timestamp)
    
-   stop — نهاية الفترة (Unix timestamp)
    
-   veh\_id — معرّفات المركبات (مفصولة بفواصل)
    
-   explode — تقسيم البيانات بحسب: 1 — الأيام، 2 — الأسابيع، 3 — دون تقسيم
    
-   group — تجميع البيانات: 1 — بحسب الأيام، 2 — بحسب الكائنات، 3 — بحسب المناطق، 4 — بحسب السائقين، 5 — بحسب العملاء، 6 — بحسب المجموعات، 7 — بحسب الوسوم
    
-   format — صيغة التقرير: json أو pdf أو xls
    
-   tz — المنطقة الزمنية المستخدمة لتكوين التواريخ والأوقات في التقرير. حدّد معرّف منطقة زمنية صالحًا بحسب IANA، مثل Africa/Johannesburg. إذا مُرِّرت منطقة زمنية غير معروفة أو غير صحيحة فإن API يعيد خطأ.
    

المعاملات الاختيارية:

-   drivers\_id — قائمة معرّفات ID السائقين
    
-   zones\_id — قائمة معرّفات ID السياجات الجغرافية
    
-   fillings — تضمين بيانات التعبئة
    
-   stales — تضمين عمليات التصريف
    
-   speed — تضمين السرعة
    
-   rashod — تضمين استهلاك الوقود
    
-   stops — تضمين التوقفات
    
-   run — تضمين عمليات تشغيل المركبات
    
-   contr\_time / type — الوقت المرجعي
    
-   tags — قائمة معرّفات ID الوسوم
    
-   template — معرّف ID قالب التقرير
    
-   outside\_zones — تضمين المناطق الخارجية
    
-   work\_hours — مراعاة ساعات العمل فقط
    
-   fuel — تضمين الوقود
    
-   vehicle\_not\_moving\_time — وقت التوقف للتقرير
    
-   vehicles\_has\_covered\_km — المسافة المقطوعة للمركبة
    
-   notifications — قائمة معرّفات ID الإشعارات
    

### مثال على طلب GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_report&amp;report_type=1&amp;start=1724623200&amp;stop=1724709600&amp;veh_id=1234,5678&amp;explode=1&amp;group=2</div><div>&amp;format=json&amp;tz=Africa/Johannesburg&amp;node=1</div></td></tr></tbody></table>

### مثال على طلب POST

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_report",</div><div>&nbsp; &nbsp; "report_type": 1,</div><div>&nbsp; &nbsp; "start": 1724623200,</div><div>&nbsp; &nbsp; "stop": 1724709600,</div><div>&nbsp; &nbsp; "veh_id": "1234,5678",</div><div>&nbsp; &nbsp; "explode": 1,</div><div>&nbsp; &nbsp; "group": 2,</div><div>&nbsp; &nbsp; "format": "json",</div><div>&nbsp; &nbsp; "tz": "Africa/Johannesburg"</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "1234",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 125.5,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 15.2,</div><div>&nbsp; &nbsp; &nbsp; "stops": 5,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 60</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "veh_id": "5678",</div><div>&nbsp; &nbsp; &nbsp; "date": "2025-09-22",</div><div>&nbsp; &nbsp; &nbsp; "distance": 98.3,</div><div>&nbsp; &nbsp; &nbsp; "fuel_consumption": 12.7,</div><div>&nbsp; &nbsp; &nbsp; "stops": 4,</div><div>&nbsp; &nbsp; &nbsp; "speed_avg": 55</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم
    
-   data — مصفوفة بيانات التقرير
    
-   veh\_id — معرّف المركبة
    
-   date — تاريخ سجل التقرير
    
-   distance — المسافة المقطوعة (كم)
    
-   fuel\_consumption — استهلاك الوقود
    
-   stops — عدد التوقفات
    
-   speed\_avg — متوسط السرعة
