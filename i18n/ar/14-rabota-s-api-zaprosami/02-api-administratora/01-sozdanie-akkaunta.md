---
title: "إنشاء حساب"
---

يُستخدم هذا API لإنشاء حساب جديد (عقد)، بما في ذلك معلومات الحساب وبيانات المستخدم (ومنها اسم المستخدم وكلمة المرور الخاصان بالمسؤول). بعد تنفيذ الطلب يُنشأ حساب بمعرّف ID فريد، ويُضاف أول مستخدم (المسؤول) باسم المستخدم وكلمة المرور المحددين.

## كيفية الحصول على البيانات

للحصول على البيانات استخدم العنوان: https://<server\_address>/ax/api.php?

### الطريقة

POST

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=accountadd — أمر إضافة حساب جديد
    
-   bill\_price — معرّف ID قائمة الأسعار (يجب الحصول عليه من الأمر pricelist).
    
-   inn — الرقم الضريبي (ИНН) للمؤسسة
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

المعاملات الاختيارية:

-   acc\_deposit — مبلغ الوديعة (الافتراضي 0)
    
-   acc\_type — نوع التسعير:
    
    — الافتراضي 1 — الدفع اللاحق
    
    — 2 — الدفع المسبق
    
    — 3 — الدفع اللاحق المخفف (مع حد للإيقاف)
    
-   org\_type — نوع المؤسسة
    
    — الافتراضي 1 — شخص اعتباري
    
    — 2 — شخص طبيعي
    
    — 3 — رجل أعمال فرد (ИП)
    
-   bill\_phone — هاتف المؤسسة
    
-   comment — تعليق على الحساب
    
-   code — رمز 1С
    
-   kpp — رمز КПП
    
-   block\_limit — حد الإيقاف للتسعير بالدفع اللاحق المخفف
    
-   modules — معرّفات ID الوحدات البرمجية المفعّلة مفصولة بفواصل (نحصل عليها من الأمر modlist)
    
-   bill\_email — البريد الإلكتروني للحساب
    
-   org\_name — اسم المؤسسة
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=accountadd&amp;bill_price=143&amp;bill_email=demo1@skyelectronics.ru&amp;org_name=PUP&amp;comment=lalala&amp;inn=123456789012&amp;acc_type=1&amp;org_type=1&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "id": "4018",</div><div>&nbsp; &nbsp; "login": "demo1@skyelectronics.ru",</div><div>&nbsp; &nbsp; "password": "blPs0S"</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — حالة الاستجابة
    
    — 0 — تمت العملية بنجاح
    
-   data — بيانات الحساب الجديد
    
-   id — المعرّف الفريد للحساب
    
-   login — اسم مستخدم المسؤول الذي أُنشئ ضمن هذا الحساب
    
-   password — كلمة مرور المسؤول
    
-   msg — رسالة بنتيجة تنفيذ العملية
