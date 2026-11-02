---
title: "قائمة السائقين"
---

واجهة API هذه مخصصة للحصول على معلومات عن السائقين المسجلين في الحساب. وباستخدامها يمكنك الحصول على بيانات كل سائق، بما فيها الاسم الكامل ومعلومات الاتصال والوصف وصلاحيات الوصول والمعرّفات.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = drivers\_list — أمر الحصول على قائمة السائقين
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=drivers_list&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 317,</div><div>&nbsp; &nbsp; &nbsp; "name": "Ivan Ivanov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #3",</div><div>&nbsp; &nbsp; &nbsp; "phone": "798345546",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": "",</div><div>&nbsp; &nbsp; &nbsp; "access": []</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 1122,</div><div>&nbsp; &nbsp; &nbsp; "name": "Andrey Petrov",</div><div>&nbsp; &nbsp; &nbsp; "code": "",</div><div>&nbsp; &nbsp; &nbsp; "description": "Driver #1",</div><div>&nbsp; &nbsp; &nbsp; "phone": "+525531696255",</div><div>&nbsp; &nbsp; &nbsp; "license": "",</div><div>&nbsp; &nbsp; &nbsp; "email": null,</div><div>&nbsp; &nbsp; &nbsp; "access": [1122]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   id — معرّف السائق
    
-   name — الاسم الكامل للسائق
    
-   code — رمز السائق (إن وُجد)
    
-   description — وصف السائق
    
-   phone — رقم الهاتف
    
-   license — بيانات رخصة القيادة
    
-   email — عنوان البريد الإلكتروني
    
-   access — قائمة معرّفات الموارد أو الكائنات التي يملك السائق صلاحية الوصول إليها
