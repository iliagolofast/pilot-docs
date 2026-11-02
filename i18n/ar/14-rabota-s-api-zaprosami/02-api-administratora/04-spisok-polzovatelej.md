---
title: "قائمة المستخدمين"
---

يُستخدم هذا API للحصول على قائمة مستخدمي حساب معيّن مع المعلومات الأساسية عن كل مستخدم.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

-   cmd=users — أمر الحصول على قائمة المستخدمين
    
-   accountid — معرّف ID الحساب الذي يُطلب مستخدموه
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=users&amp;accountid=56832</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"data": [</div><div>&nbsp;{</div><div>&nbsp;"id": 88977,</div><div>&nbsp;"name": "valera_test",</div><div>&nbsp;"login": "valera17totsenko@gmail.com",</div><div>&nbsp;"passwd": "123456",</div><div>&nbsp;"info": null,</div><div>&nbsp;"email": "valera17totsenko@gmail.com",</div><div>&nbsp;"lang": "en",</div><div>&nbsp;"roleid": 0</div><div>&nbsp;}</div><div>&nbsp;],</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   id — معرّف ID المستخدم
    
-   name — الاسم المعروض
    
-   login — اسم المستخدم
    
-   passwd — كلمة المرور
    
-   info — معلومات إضافية عن المستخدم
    
-   email — عنوان البريد الإلكتروني
    
-   lang — لغة واجهة المستخدم
    
-   roleid — معرّف ID الدور
