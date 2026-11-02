---
title: "إنشاء بوليصة نقل"
---

تنشئ واجهة API هذه بوليصة نقل جديدة لفترة زمنية محددة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=add\_waybill — أمر إضافة بوليصة نقل
    
-   ts — وقت البداية (Unix timestamp)
    
-   te — وقت الانتهاء (Unix timestamp)
    
-   agent\_id — معرّف الوكيل
    
-   name — اسم بوليصة النقل
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_waybill&amp;ts=1596022528&amp;te=1596488400&amp;agent_id=44841&amp;name=test+bill1&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "ts": 1596022528,</div><div>&nbsp; &nbsp; "te": 1596488400,</div><div>&nbsp; &nbsp; "agent_id": 44841,</div><div>&nbsp; &nbsp; "account_id": 3934,</div><div>&nbsp; &nbsp; "waybill": {</div><div>&nbsp; &nbsp; &nbsp; "name": "test bill1"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 = نجاح)
    
-   data — كائن يحتوي على بيانات بوليصة النقل المنشأة
    
-   ts — وقت بداية بوليصة النقل
    
-   te — وقت انتهاء بوليصة النقل
    
-   agent\_id — معرّف الوكيل
    
-   account\_id — معرّف الحساب
    
-   waybill.name — اسم بوليصة النقل
