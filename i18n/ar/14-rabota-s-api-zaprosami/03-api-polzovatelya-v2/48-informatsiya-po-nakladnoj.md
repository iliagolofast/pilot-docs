---
title: "معلومات عن بوليصة النقل"
---

تتيح واجهة API هذه الحصول على بيانات بوليصة النقل خلال فترة محددة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = get\_waybill — أمر الحصول على بوالص النقل
    
-   ts — وقت بداية العينة (Unix timestamp)
    
-   agent\_id — معرّف الوكيل
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_waybill&amp;ts=1596022528&amp;agent_id=44841&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "ts": 1596022528,</div><div>&nbsp; &nbsp; &nbsp; "te": 1596488400,</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 44841,</div><div>&nbsp; &nbsp; &nbsp; "account_id": 3934,</div><div>&nbsp; &nbsp; &nbsp; "waybill": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "test bill1"</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 = نجاح)
    
-   data — مصفوفة بمعلومات بوالص النقل:
    
-   ts — وقت بداية بوليصة النقل
    
-   te — وقت انتهاء بوليصة النقل
    
-   agent\_id — معرّف الوكيل
    
-   account\_id — معرّف الحساب
    
-   waybill — كائن يحتوي على بيانات بوليصة النقل:
    
-   name — اسم بوليصة النقل
