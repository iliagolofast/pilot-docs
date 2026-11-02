---
title: "قائمة الحسابات المتاحة"
---

تُستخدم واجهة API هذه للحصول على قائمة الحسابات التي يملك المستخدم الحالي صلاحية الوصول إليها.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET أو POST

### معلمات الطلب

-   cmd=get\_account\_map — أمر API للحصول على قائمة الحسابات المتاحة
    
-   node —  رقم العقدة التي يُنفَّذ عليها الأمر
    

### مثال على طلب GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=get_account_map&amp;node=1</div></td></tr></tbody></table>

### مثال على طلب POST

نص الطلب (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "cmd": "get_account_map"</div><div>}</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {"account_id": 1005},</div><div>&nbsp; &nbsp; {"account_id": 1000}</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز التنفيذ (0 يعني عملية ناجحة)
    
-   data — قائمة الحسابات المتاحة للمستخدم
    
-   account\_id — معرّف الحساب (العقد)
