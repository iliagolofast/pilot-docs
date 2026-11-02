---
title: "احتساب حركة الركاب"
---

تُستخدم واجهة API هذه للحصول على بيانات حركة الركاب في وسائل النقل المزوّدة بنظام الكمساري الآلي (autoconductor).

باستخدامها يمكنك:

— معرفة عدد الركاب الذين صعدوا ونزلوا في كل محطة

 — الحصول على إحداثيات المحطات ووقت الحدث ومعرّف الفيديو (إذا كان النظام يدعم تسجيل الفيديو)

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd= pass\_counter — أمر استدعاء API
    
-   ts — وقت بداية العينة بصيغة Unix timestamp
    
-   te — وقت نهاية العينة بصيغة Unix timestamp
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

إضافةً إلى ذلك:

-   imei — IMEI للمركبة المزوّدة بالكمساري الآلي. وإذا لم يُحدد، فستشمل العينة جميع المركبات المزوّدة بهذه الأجهزة
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=pass_counter&amp;ts=1554670800&amp;te=1554757200&amp;imei=963852741159753&amp;node=1</div></td></tr></tbody></table>

### الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "36571": {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 36571,</div><div>&nbsp; &nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9346",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.8981",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554696995,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 13</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "busline_id": 1371,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "door_id": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "54.9238",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "51.9098",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_in": 4,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "p_out": 0,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1554697232,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "video_id": 14</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; "vehiclenumber": "autoconductor"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز التنفيذ (0 = نجاح)
    
-   msg — رسالة الحالة (على سبيل المثال، OK)
    
-   data — الكائن الرئيسي الذي يحتوي على بيانات حركة الركاب.
    
-   agent\_id — معرّف المركبة في النظام
    
-   vehiclenumber — الرقم الداخلي للمركبة أو اسم الجهاز (على سبيل المثال، autoconductor)
    
-   stops — مصفوفة المحطات مع بيانات حركة الركاب
    
-   busline\_id — معرّف المسار
    
-   door\_id — رقم الباب الذي سُجلت عبره حركة الركاب
    
-   lat — خط عرض المحطة
    
-   lon — خط طول المحطة
    
-   p\_in — عدد الركاب الذين صعدوا
    
-   p\_out — عدد الركاب الذين نزلوا
    
-   ts — وقت الحدث (Unix timestamp)
    
-   video\_id — معرّف تسجيل الفيديو المرتبط بالحدث (إن وُجد)
