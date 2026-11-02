---
title: "معلومات عن المستخدم"
---

تحصل واجهة API هذه على بيانات مستخدم بحسب user\_id الخاص به.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET أو POST

### معلمات الطلب

-   cmd=get\_user — أمر API للحصول على معلومات عن المستخدم
    
-   user\_id — معرّف المستخدم المطلوب الحصول على معلوماته
    
-   node — رقم العقدة التي يُنفَّذ عليها الأمر
    

### مثال على طلب GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_user&amp;user_id=19&amp;node=1</div></td></tr></tbody></table>

### مثال على طلب POST

نص الطلب (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_user",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "Success",</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 19,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "roleid": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "msisdn": "123123",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "email": "testTOTP@testTOTP.com",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "dasd",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "account_id": 1000,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lang": "en",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "parent_id": 2</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 = عملية ناجحة)
    
-   msg — رسالة الخادم
    
-   data — كائن يحتوي على معلومات عن المستخدم:
    
-   id — معرّف المستخدم
    
-   roleid — دور المستخدم (0 — Admin، 1 — User)
    
-   info — معلومات إضافية عن المستخدم
    
-   msisdn — رقم الهاتف
    
-   email — البريد الإلكتروني للمستخدم
    
-   name — اسم المستخدم
    
-   account\_id — معرّف الحساب الذي يتبع له المستخدم
    
-   lang — لغة واجهة المستخدم
    
-   parent\_id — معرّف المستخدم الأب (إن وُجد)
