---
title: "تغيير اسم مجلد"
---

باستخدام هذا API يمكنك تغيير اسم مجلد موجود. لذلك يجب إرسال طلب بمعاملات تحدد المجلد المراد تغيير اسمه والاسم الجديد له.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php

### الطريقة

 POST

### معاملات الطلب

-   cmd=editfoldername — أمر تغيير اسم المجلد
    
-   folder\_id — معرّف المجلد المراد تغيير اسمه
    
-   new\_folder\_name  — الاسم الجديد للمجلد
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=editfoldername&amp;folder_id=454545&amp;new_folder_name=testname&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Имя папки успешно обновлено"</div><div>}</div></td></tr></tbody></table>
