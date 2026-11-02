---
title: "قائمة عقود الإيجار"
---

تنقل واجهة API هذه معلومات عن عقود الإيجار من وحدة Rent Car (AVIS): العقود المفتوحة والمحجوزة والمغلقة. وتُعاد لكل عقد بيانات المستأجر ونقطتي بداية الإيجار ونهايته والتواريخ المخططة للتسليم والإرجاع، إضافةً إلى أرقام العقود والسيارة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

للحصول على البيانات المطلوبة، أضف المعلمات التالية إلى عنوان الطلب:

-   cmd=rentcar\_contracts — أمر الحصول على قائمة عقود الإيجار.
    
-   status — حالة العقود المطلوب الحصول عليها. يمكن تمرير حالة واحدة أو عدة حالات مفصولة بفواصل:
    
-   open — العقود المفتوحة (الإيجار نشط حاليًا)
    
-   booked — العقود المحجوزة (حجز، ولم يبدأ الإيجار بعد)
    
-   closed — العقود المغلقة (انتهى الإيجار)
    

تنسيق البيانات المطلوبة هو مصفوفة عقود الإيجار.

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=rentcar_contracts&amp;status=open,booked,closed</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"code": 0,</div><div>&nbsp;"msg": "OK",</div><div>&nbsp;"list": [</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "Dubai"</div><div>&nbsp;},</div><div>&nbsp;"mva": "12312",</div><div>&nbsp;"ra": "16",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "Private house"</div><div>&nbsp;},</div><div>&nbsp;{</div><div>&nbsp;"driver_name": "Тестовый арендатор",</div><div>&nbsp;"driver_phone": "905074521698",</div><div>&nbsp;"end_location": {</div><div>&nbsp;"title": "rgergrr"</div><div>&nbsp;},</div><div>&nbsp;"start_location": {</div><div>&nbsp;"title": "erterter"</div><div>&nbsp;},</div><div>&nbsp;"mva": "2222",</div><div>&nbsp;"ra": "17",</div><div>&nbsp;"te_expected": 1775901540,</div><div>&nbsp;"ts_expected": 1775812680,</div><div>&nbsp;"plate_number": "ABC-123"</div><div>&nbsp;}</div><div>&nbsp;]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز الحالة (0 — نجاح)
    
-   msg — رسالة الحالة (OK — تم تنفيذ الطلب بنجاح)
    
-   list — مصفوفة عقود الإيجار، ويحتوي كل منها على:
    
-   driver\_name — اسم المستأجر (السائق) المسجّل عليه العقد
    
-   driver\_phone — هاتف الاتصال بالمستأجر
    
-   start\_location — نقطة بداية الإيجار (تسليم السيارة):
    
-   title — اسم/عنوان نقطة التسليم
    
-   end\_location — نقطة نهاية الإيجار (إرجاع السيارة):
    
-   title — اسم/عنوان نقطة الإرجاع
    
-   mva — رقم عقد الإيجار (Master Vehicle Agreement)
    
-   ra — رقم الحجز / اتفاقية الإيجار (Rental Agreement)
    
-   ts\_expected — الوقت المخطط لبداية الإيجار (Unix timestamp)
    
-   te\_expected — الوقت المخطط لنهاية الإيجار (Unix timestamp)
    
-   plate\_number — رقم لوحة السيارة بموجب العقد
