---
title: "قائمة المناطق الزمنية"
---

تعيد واجهة API هذه قائمة بالمناطق الزمنية المتاحة التي يمكن استخدامها عند إعداد المستخدم أو الكائن.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET أو POST

### معلمات الطلب

-   cmd=get\_time\_zones — أمر الحصول على قائمة المناطق الزمنية
    
-   node — رقم العقدة التي يُنفَّذ عليها الأمر
    

### مثال على طلب GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_time_zones&amp;node=1</div></td></tr></tbody></table>

### مثال على طلب POST

نص الطلب (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_time_zones"</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "text": "Africa/Abidjan" },</div><div>&nbsp; &nbsp; { "text": "Africa/Accra" },</div><div>&nbsp; &nbsp; { "text": "Africa/Addis Ababa" },</div><div>&nbsp; &nbsp; { "text": "Africa/Algeria" },</div><div>&nbsp; &nbsp; { "text": "Africa/Asmara" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bamako" },</div><div>&nbsp; &nbsp; { "text": "Africa/Bangui" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 = عملية ناجحة)
    
-   data — قائمة المناطق الزمنية المتاحة
    
-   text — اسم المنطقة الزمنية بصيغة Region/City
