---
title: "إضافة عملية تزود بالوقود بالبطاقة"
---

يضيف هذا API سجلًّا عن استهلاك الوقود بالبطاقة، بما فيه معلومات عن كمية الوقود والتكلفة والمكان والسائق.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

لتنفيذ الطلب استخدم العنوان: https://<server\_address>/api/api.php?

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=add\_fuel\_transaction — أمر إضافة معاملة
    
-   card\_num — رقم البطاقة الوقودية
    
-   operation — نوع العملية (مثل refill)
    
-   unixtimestamp — وقت المعاملة بصيغة Unix timestamp
    
-   place — مكان إجراء العملية
    
-   azs — اسم محطة الوقود
    
-   liters — عدد لترات الوقود
    
-   fuel — نوع الوقود
    
-   price — السعر قبل الخصم
    
-   sum — المبلغ قبل الخصم
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

المعاملات الاختيارية:

-   priceg — السعر بعد الخصم
    
-   sumg — المبلغ بعد الخصم
    
-   driver — الاسم الكامل للسائق
    
-   lat — خط عرض مكان المعاملة
    
-   lon — خط طول مكان المعاملة
    
-   info — معلومات إضافية
    
-   internal\_id — المعرّف الداخلي للمعاملة
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=add_fuel_transaction&amp;node=1</div></td></tr></tbody></table>

مثال على جسم الطلب (JSON):

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "card_num": "1234567890123456",</div><div>&nbsp; "operation": "refill",</div><div>&nbsp; "unixtimestamp": 1695000000,</div><div>&nbsp; "place": "Main street 12",</div><div>&nbsp; "azs": "WOG",</div><div>&nbsp; "liters": 50,</div><div>&nbsp; "fuel": "Diesel",</div><div>&nbsp; "price": 55.0,</div><div>&nbsp; "sum": 2750.0,</div><div>&nbsp; "driver": "Ivan Ivanov"</div><div>}</div></td></tr></tbody></table>

الاستجابة

{

  "code": 0,

  "msg": "OK"

}

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — عملية ناجحة)
    
-   msg — رسالة الخادم بنتيجة الإجراء
