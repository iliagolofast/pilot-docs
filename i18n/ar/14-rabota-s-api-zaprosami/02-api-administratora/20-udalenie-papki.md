---
title: "حذف مجلد"
---

يحذف هذا API المجلد المحدد وينقل جميع المركبات التي فيه إلى المجلد الجذر.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

-   cmd=deletefolder — أمر حذف المجلد
    
-   folder\_id— معرّف المجلد المراد حذفه
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=deletefolder&amp;folder_id=545&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Папка успешно удалена"</div><div>}</div></td></tr></tbody></table>
