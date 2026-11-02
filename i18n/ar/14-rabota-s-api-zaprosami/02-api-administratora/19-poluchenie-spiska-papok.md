---
title: "الحصول على قائمة المجلدات"
---

يُستخدم هذا API للحصول على قائمة المجلدات. وتُعاد في الاستجابة قائمة بمعرّفات ID المجلدات الفريدة وأسمائها ومجلداتها الأب.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=getfolders — أمر الحصول على قائمة المجلدات
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

المعاملات الاختيارية:

-   account\_id — معرّف ID الحساب الذي يُراد الحصول على قائمة مجلداته
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=getfolders&amp;account_id=3925&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "9793": {"name": "АС-Капитал", "parent": "Колонна №1"},</div><div>&nbsp; "11462": {"name": "Ленэнерго", "parent": "Колонна №1"},</div><div>&nbsp; "12551": {"name": "Вектор", "parent": "test123"},</div><div>&nbsp; "16453": {"name": "test_alex", "parent": "1april"},</div><div>&nbsp; "18492": {"name": "31Novfolder", "parent": "Колонна №1"}</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   المفتاح (مثل "9793") — معرّف ID المجلد الفريد
    
-   name — اسم المجلد
    
-   parent — المجلد الأب الذي يتبع له المجلد الحالي
