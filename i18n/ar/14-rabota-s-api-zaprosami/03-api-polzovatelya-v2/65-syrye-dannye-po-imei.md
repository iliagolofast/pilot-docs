---
title: "البيانات الخام بحسب IMEI"
---

تتيح واجهة API هذه الحصول على البيانات الخام للجهاز خلال فترة زمنية محددة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = ag\_events — أمر الحصول على النقاط الخام
    
-   imei — المعرّف الفريد للجهاز
    
-   ts — وقت بداية العينة (Unix timestamp)
    
-   te — وقت نهاية العينة (Unix timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=ag_events&amp;ts=1498201000&amp;te=1498201200&amp;imei=356307045913463&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;&nbsp; "code": 0,</div><div>&nbsp;&nbsp; "data": {</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201016": {"alt": 33, "lat": "47.2124", "lon": "39.6922", "sat": 15, "speed": 0, "ts": 1498201016},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201037": {"alt": 29, "lat": "47.2124", "lon": "39.6924", "sat": 15, "speed": 6, "ts": 1498201037},</div><div>&nbsp;&nbsp; &nbsp; &nbsp; "1498201097": {"alt": 31, "lat": "47.2128", "lon": "39.6933", "sat": 15, "speed": 0, "ts": 1498201097}</div><div>&nbsp;&nbsp; },</div><div>&nbsp;&nbsp; "msg": "OK",</div><div>&nbsp;&nbsp; "vehicle": {"agentid": 2914, "created_time": 1359797592, "current_mileage": 90224, "folder": "Sky Electronics", "imei": "356307045913463", "type": "Cow", "typeid": 31, "vehiclenumber": "IX35"}</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — نجاح)
    
-   msg — رسالة الخادم
    
-   data — كائن بالنقاط الخام، مفاتيحه هي timestamp النقاط، وقيمه:
    
-   lat — خط العرض
    
-   lon — خط الطول
    
-   alt — الارتفاع
    
-   sat — عدد الأقمار الصناعية
    
-   speed — السرعة
    
-   ts — وقت الحدث (Unix timestamp)
    
-   vehicle — معلومات عن الكائن:
    
-   agentid — معرّف الوكيل
    
-   created\_time — وقت إنشاء الكائن
    
-   current\_mileage — المسافة المقطوعة الحالية
    
-   folder — اسم المجلد/المجموعة
    
-   imei — معرّف الجهاز
    
-   type — نوع الكائن
    
-   typeid — معرّف نوع الكائن
    
-   vehiclenumber — رقم المركبة
