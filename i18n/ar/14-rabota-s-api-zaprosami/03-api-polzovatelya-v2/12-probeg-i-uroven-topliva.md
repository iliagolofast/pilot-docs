---
title: "المسافة المقطوعة ومستوى الوقود"
---

يحصل هذا API على معلومات عن المسافة المقطوعة للمركبة ومستوى الوقود في لحظة زمنية محددة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=istatus — أمر API للحصول على الحالة
    
-   imei — معرّف الكائن في PILOT
    
-   unixtimestamp — اللحظة الزمنية بصيغة Unix timestamp
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=istatus&amp;unixtimestamp=1408840780&amp;imei=356495042533101<span>&amp;node=1</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "код": 0,</div><div>&nbsp; &nbsp; "сообщение": "ОК",</div><div>&nbsp; &nbsp; "общий_пробег": 0,</div><div>&nbsp; &nbsp; "total_run_by_can": 0,</div><div>&nbsp; &nbsp; "моточасы": 0,</div><div>&nbsp; &nbsp; "топливные_датчики": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150325,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "t_53lls1",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик топлива 2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "идентификатор": 150326,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "имя поля": "lls2",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "топливо": 0</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "топливо": 0,</div><div>&nbsp; &nbsp; "unixtimestamp": 1408840780</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   общий\_пробег — إجمالي المسافة المقطوعة للمركبة في اللحظة الزمنية (كم)
    
-   total\_run\_by\_can — المسافة المقطوعة بحسب بيانات ناقل CAN (كم)
    
-   моточасы — ساعات تشغيل المحرك بالثواني
    
-   топливо — كمية الوقود في الخزان في اللحظة الزمنية (لتر)
    
-   топливные\_датчики — مصفوفة بيانات كل حساس وقود إذا كان هناك عدة حساسات:
    
-   info — وصف الحساس
    
-   идентификатор — معرّف ID الحساس الفريد
    
-   имя поля — الاسم النظامي للحساس
    
-   топливо — مستوى الوقود بحسب هذا الحساس (لتر)
    
-   unixtimestamp — اللحظة الزمنية التي أُعيدت لها البيانات (Unix timestamp)
