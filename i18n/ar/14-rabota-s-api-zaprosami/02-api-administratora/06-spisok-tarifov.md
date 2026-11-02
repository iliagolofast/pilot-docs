---
title: "قائمة التعرفات"
---

باستخدام هذا API احصل على قائمة التعرفات المتاحة للحساب مع معلومات العملة والسعر والوصف.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

-   cmd=pricelist —  أمر الحصول على قائمة التعرفات
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    
    إضافةً إلى ذلك:
    
-   coden (اختياري) — رمز العملة:
    
    — رقمي (مثل 840 للدولار USD، و810 للروبل RUB)
    
    — حرفي (مثل USD أو RUR)
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=pricelist&amp;coden=840&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "id": 143,</div><div>&nbsp; &nbsp; &nbsp; "code": "840",</div><div>&nbsp; &nbsp; &nbsp; "currency": 2,</div><div>&nbsp; &nbsp; &nbsp; "descr": "3 dollars per property per month",</div><div>&nbsp; &nbsp; &nbsp; "name": "US dollar",</div><div>&nbsp; &nbsp; &nbsp; "price": "3.00"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "message": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز تنفيذ الطلب (0 — نجاح)
    
-   data — مصفوفة التعرفات:
    
-   id — المعرّف الفريد للتعرفة
    
-   code — رمز العملة (رقمي)
    
-   currency — المعرّف الداخلي للعملة
    
-   descr — وصف التعرفة
    
-   name — اسم التعرفة (مثل "US dollar")
    
-   price — سعر التعرفة بالعملة المحددة
    
-   message — رسالة نصية بنتيجة الطلب
