---
title: "قائمة الحسابات"
---

يحصل هذا API على قائمة الحسابات مع المعلومات الأساسية: معرّف ID العقد والاسم والرصيد وعدد المركبات.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

-   cmd=accountslist — أمر الحصول على قائمة الحسابات
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=accountslist&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 10,</div><div>&nbsp; "org_name": "Test relaying",</div><div>&nbsp; "org_type": 2,</div><div>&nbsp; "balance": "0.00",</div><div>&nbsp; "acc_deposit": "40000.00",</div><div>&nbsp; "comment": null,</div><div>&nbsp; "inn": null,</div><div>&nbsp; "kpp": null,</div><div>&nbsp; "bill_email": "relay@mail.com",</div><div>&nbsp; "bill_phone": "43542554",</div><div>&nbsp; "hidden": 1,</div><div>&nbsp; "veh_count": 0</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   id — المعرّف الفريد للحساب
    
-   org\_name — اسم المؤسسة أو العقد
    
-   org\_type — نوع المؤسسة
    
-   balance — الرصيد الحالي للعقد
    
-   acc\_deposit — مبلغ الوديعة في العقد
    
-   comment — تعليق إضافي على العقد
    
-   inn — الرقم الضريبي (ИНН) للمؤسسة (رقم تعريف دافع الضرائب)
    
-   kpp — رمز КПП للمؤسسة (رمز سبب التسجيل الضريبي)
    
-   bill\_email — البريد الإلكتروني المحدد لإصدار الفواتير أو إشعارات الفوترة
    
-   bill\_phone — هاتف التواصل بشأن الفوترة
    
-   hidden — علامة الحساب المحذوف: 0 — الحساب غير محذوف، 1 — الحساب محذوف
    
-   veh\_count — عدد المركبات المرتبطة بهذا العقد
