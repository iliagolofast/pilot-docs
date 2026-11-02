---
title: "إرسال أمر إلى كائن"
---

يرسل هذا API أمرًا إلى المركبة باستخدام قالب أمر أُنشئ مسبقًا في الوحدة البرمجية [«الأوامر»](../../lichnyj-kabinet-polzovatelya/moduli-1/komandy-1.html).

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=send\_command — أمر إرسال أمر إلى المركبة
    
-   agent\_id — معرّف الوكيل (المركبة)
    
-   template\_name — اسم قالب الأمر (يُنشأ في الوحدة البرمجية «الأوامر»)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها (اختياري)
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=send_command&amp;agent_id=139849&amp;template_name=test123&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": null,</div><div>&nbsp; "command_id": 3989</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم بنتيجة الإجراء
    
-   command\_id — معرّف الأمر المرسل
