---
title: "قائمة التقارير"
---

يحصل هذا API على قائمة بجميع التقارير المتاحة في الحساب مع معرّفاتها وأسمائها والمجموعات التي تتبع لها.

## كيفية الحصول على البيانات

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### طريقة الطلب

GET أو POST

### معاملات الطلب

-   cmd=reports\_list — أمر الحصول على قائمة التقارير
    
-   node — رقم العقدة التي يُنفَّذ عليها الأمر
    

### مثال على طلب GET

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=reports_list&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; { "id": 266, "name": "Административные действия", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 258, "name": "Заблокированные пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 263, "name": "Созданы пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 261, "name": "Отключенная учетная запись пользователя", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 265, "name": "Отключенные пользователи", "group": "Администратор" },</div><div>&nbsp; &nbsp; { "id": 267, "name": "Неудачные попытки входа", "group": "Администратор" }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   data — مصفوفة التقارير، حيث يحتوي كل تقرير على:
    
-   id — المعرّف الفريد للتقرير
    
-   name — اسم التقرير
    
-   group — المجموعة التي يتبع لها التقرير
