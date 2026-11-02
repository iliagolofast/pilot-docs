---
title: "إنشاء مجلد"
---

يُستخدم هذا API لإنشاء مجلد جديد في النظام. يمكنك تحديد المجلد الأب واسم المجلد الجديد وكذلك صلاحيات الوصول للمستخدمين.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=addfolder — أمر إنشاء مجلد
    
-   account\_id — معرّف ID العقد
    
-   parent\_id — معرّف ID المجلد الأب
    
-   folder\_name — اسم المجلد الذي يُنشأ
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

المعاملات الاختيارية:

-   users — قائمة معرّفات ID المستخدمين مفصولة بفواصل، الذين يجب منحهم صلاحيات على هذا المجلد
    
-   القيمة users=admins — تمنح الصلاحيات لجميع مستخدمي العقد الذين لهم دور مسؤول
    
    إذا لم يُحدَّد المعامل أو كان فارغًا — تُنسخ الصلاحيات من المجلد الأب
    

### أمثلة على الطلبات

صلاحيات المجلد لجميع المسؤولين:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=admins&amp;node=1</div></td></tr></tbody></table>

صلاحيات المجلد لمستخدمين محددين:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;users=123,212,432&amp;node=1</div></td></tr></tbody></table>

يُنشأ المجلد بصلاحيات المجلد الأب (افتراضيًا):

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=addfolder&amp;account_id=5654&amp;parent_id=654&amp;folder_name=my_folder&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": "Создана новая папка my_folder с идентификатором 27330"</div><div>}</div></td></tr></tbody></table>
