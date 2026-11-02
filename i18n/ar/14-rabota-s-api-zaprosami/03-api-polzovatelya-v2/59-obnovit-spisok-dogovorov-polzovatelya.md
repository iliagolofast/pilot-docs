---
title: "تحديث قائمة عقود المستخدم"
---

تتيح واجهة API هذه منح المستخدم صلاحية الوصول إلى عقود محددة.

على سبيل المثال، إذا كان لدى الشريك عدة عقود في النظام، فيمكن للمسؤول اختيار العقود التي سيتمكن مستخدم معين من الوصول إليها.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

POST

### معلمات الطلب

-   cmd=update\_user\_accounts\_map — أمر تغيير قائمة العقود المتاحة
    
-   accounts — قائمة معرّفات العقود مفصولة بفواصل
    
    <table><tbody><tr><td><span></span></td><td><div>يجب أن تتبع العقود (accounts) الشريكَ نفسه الذي يتبعه المستخدم.</div></td></tr></tbody></table>
    
-   user\_id — معرّف المستخدم الذي تُمنح له صلاحية الوصول
    
-   node — رقم العقدة التي يُنفَّذ عليها الأمر
    
    <table><tbody><tr><td><span></span></td><td><div>إذا كانت قيمة الشريك للمستخدم في النظام تساوي 0 → يتعذر إسناد العقود (<a href="../../panel-administratora/administrator/account-mapping.html"><span>الربط</span></a> لا يعمل).</div></td></tr></tbody></table>
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "update_user_accounts_map",</div><div>&nbsp; &nbsp; "accounts": "1005",</div><div>&nbsp; &nbsp; "user_id": 19</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Success"</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم
