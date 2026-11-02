---
title: "نقل كائن بين العقود"
---

يُستخدم هذا API لنقل مركبة بين الحسابات.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

للحصول على البيانات المطلوبة أضف معاملات إلى عنوان الطلب. تُكتب المعاملات بعد علامة الاستفهام «?» وتُفصل بينها بالعلامة «&».

-   cmd = veh\_move\_account — أمر نقل الكائنات إلى حساب آخر
    
-   vehicle\_id — معرّف المركبة التي يجب نقلها إلى الحساب
    
-   account\_id — رقم الحساب الجديد
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div><span>https://</span>&lt;server_address&gt;<span>/backend/api.php?cmd</span>=veh_move_account&amp;vehicle_id=23&amp;account_id=1005&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{"code": 1, "msg": "Success move vehicle 23 to account 1005"}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة:
    

— 1 — تم تنفيذ العملية بنجاح

— 0 — خطأ أثناء تنفيذ العملية

-   msg — رسالة بوصف نصي لنتيجة العملية
