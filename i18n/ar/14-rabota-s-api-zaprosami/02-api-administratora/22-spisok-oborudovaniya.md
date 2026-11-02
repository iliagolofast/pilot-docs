---
title: "قائمة الأجهزة"
---

يُستخدم هذا API للحصول على قائمة بجميع أنواع الأجهزة (طرازات الأجهزة) المستخدمة في العقد مع ذكر الشركة المصنّعة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

-   cmd=vehmodellist — أمر الحصول على قائمة طرازات الأجهزة
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    
    ### مثال على الطلب
    

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehmodellist&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 1,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "identifier": 2,</div><div>&nbsp; &nbsp; &nbsp; "name": "ASC-6 Lite GPS/GLONASS",</div><div>&nbsp; &nbsp; &nbsp; "supplier": "APK COM"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز تنفيذ الطلب (0 — نجاح)
    
-   data — مصفوفة طرازات الأجهزة:
    
-   identifier — المعرّف الفريد للطراز
    
-   name — اسم طراز الجهاز
    
-   supplier — الشركة المصنّعة للجهاز
    
-   message — رسالة نصية بنتيجة الطلب
