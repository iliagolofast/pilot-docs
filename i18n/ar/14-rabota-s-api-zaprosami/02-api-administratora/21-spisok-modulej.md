---
title: "قائمة الوحدات البرمجية"
---

باستخدام هذا API احصل على القائمة الكاملة بالوحدات البرمجية المتاحة في العقد مع معرّفاتها ووصفها.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/ax/api.php?

### معاملات الطلب

-   cmd=modlist — أمر الحصول على قائمة الوحدات البرمجية
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=modlist&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "код": 0,</div><div>&nbsp; "данные": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль топливных карт",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 7,</div><div>&nbsp; &nbsp; &nbsp; "имя": "топливо"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль блокировки двигателя",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 8,</div><div>&nbsp; &nbsp; &nbsp; "имя": "блок"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "descr": "Модуль уведомлений",</div><div>&nbsp; &nbsp; &nbsp; "идентификатор": 27,</div><div>&nbsp; &nbsp; &nbsp; "имя": "уведомление"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "сообщение": "ОК"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   код — رمز تنفيذ الطلب (0 — نجاح)
    
-   данные — مصفوفة كائنات الوحدات البرمجية:
    
-   descr — وصف الوحدة البرمجية
    
-   идентификатор — معرّف ID الوحدة البرمجية الفريد
    
-   имя — الاسم النظامي للوحدة البرمجية
    
-   сообщение — رسالة نصية بنتيجة الطلب
