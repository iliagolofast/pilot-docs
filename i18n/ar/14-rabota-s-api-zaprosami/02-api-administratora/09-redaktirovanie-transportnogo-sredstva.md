---
title: "تعديل مركبة"
---

يُستخدم هذا API لتعديل بيانات المركبة. يمكنك تغيير معلومات المركبة، بما فيها النوع والطراز ورقم اللوحة وVIN وسنة الصنع وقدرة المحرك والمسافة المقطوعة الأولية وساعات تشغيل المحرك، وكذلك الربط بمجلد أو سائق أو قسم.

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/backend/api.php?

### معاملات الطلب

المعاملات الإلزامية:

-   cmd=vehedit — أمر تغيير معلومات المركبة
    
-   agentid— معرّف المركبة أو imei — المعرّف الفريد للجهاز
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

المعاملات الاختيارية:

-   type — نوع المركبة، يؤخذ معرّف ID من الأمر vehtypelist
    
-   veh\_number — الاسم المعروض/رقم لوحة المركبة
    
-   veh\_type — نوع المركبة المخصص (سلسلة نصية)
    
-   folder\_id — المجلد الذي يوضع فيه الكائن؛ وإذا لم يكن المجلد موجودًا فيُنشأ تلقائيًا. الافتراضي — المجلد الجذر
    
-   model — طراز المركبة
    
-   initial\_motor\_hours — ساعات تشغيل المحرك الأولية
    
-   driver\_id — معرّف ID السائق
    
-   initial\_mileage — المسافة المقطوعة الأولية (الافتراضي 0)
    
-   year — سنة صنع المركبة (الافتراضي 1900)
    
-   vin — رقم VIN للمركبة
    
-   engine\_horse — قدرة المحرك
    
-   organization — المؤسسة
    
-   column — الرتل
    
-   subdivision — القسم
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php?cmd=vehedit&amp;agentid=144&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"Success": "The vehicle data has been changed"</div><div>}</div></td></tr></tbody></table>
