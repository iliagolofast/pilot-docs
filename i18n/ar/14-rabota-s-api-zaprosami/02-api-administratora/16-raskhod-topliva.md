---
title: "استهلاك الوقود"
---

يحصل هذا API على بيانات استهلاك الوقود لمركبة معيّنة عن فترة زمنية محددة.

تُعاد معلومات عن التزود بالوقود والوقود المستهلك وعمليات تصريف الوقود وقراءات حساسات الوقود في بداية الفترة ونهايتها.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

-   cmd=fuel — أمر الحصول على بيانات الوقود
    
-   ts — تاريخ بداية العينة بصيغة Unix timestamp
    
-   te — تاريخ نهاية العينة بصيغة Unix timestamp
    
-   agentid — معرّف ID المركبة (agent\_id)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=fuel&amp;ts=1708981200&amp;te=1709154000&amp;agentid=6477&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "fill": 100,&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "fuel": 84, &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stale": 0,&nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; "stop": 43 &nbsp; &nbsp;</div><div>&nbsp; },</div><div>&nbsp; "msg": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز نتيجة الطلب (0 = طلب ناجح)
    
-   fill — كمية الوقود المعبأة خلال الفترة
    
-   fuel — كمية الوقود المستهلكة
    
-   stale — كمية الوقود المصرَّفة أو المفقودة
    
-   start — قراءة حساس الوقود في بداية الفترة
    
-   stop — قراءة حساس الوقود في نهاية الفترة
    
-   msg — رسالة نصية بنتيجة الطلب
