---
title: "إضافة الدفعات"
---

يُستخدم هذا API لإضافة معلومات عن دفعات العقد. يمكنك تحديد المبلغ والتاريخ ومعرّف ID الدفعة في النظام الخارجي والوصف.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/ax/api.php?

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=payment — أمر إضافة دفعة
    
-   inn — الرقم الضريبي (ИНН) للعقد (معرّف فريد)
    
-   sum — مبلغ الدفعة (الصيغة dd.dd)
    
-   id — معرّف ID الدفعة في النظام الخارجي
    
-   date — تاريخ الدفعة (الصيغة DDMMYYYY)
    
-   descr — وصف الدفعة (سلسلة نصية)، مثل: «دفعة مقابل التوصيل»
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/ax/api.php?cmd=payment&amp;inn=123123123&amp;sum=10.00&amp;id=124&amp;date=04042016&amp;descr=test%20payment&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "Payment inserted successfully",</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "payment_id": 124,</div><div>&nbsp; &nbsp; "inn": "123123123",</div><div>&nbsp; &nbsp; "sum": 10.00,</div><div>&nbsp; &nbsp; "date": "04042016",</div><div>&nbsp; &nbsp; "descr": "test payment"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>
