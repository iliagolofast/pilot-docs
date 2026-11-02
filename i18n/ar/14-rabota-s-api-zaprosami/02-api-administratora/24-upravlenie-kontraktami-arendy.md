---
title: "إدارة عقود الإيجار"
---

يوفّر هذا API إمكانات لإدارة عقود إيجار المركبات. وباستخدامه يمكنك بدء الإيجار وتحديثه وإيقافه، وكذلك المصادقة وإنشاء الرموز المميزة للتفويض.

## التفويض

لاستخدام API يجب إجراء المصادقة باستخدام رمز Bearer.

### الحصول على رمز التفويض

قبل إرسال الطلبات يجب الحصول على رمز عبر إنشائه باستخدام اسم المستخدم وكلمة المرور الخاصين بلوحة المسؤول.

### مثال على التفويض

طلب إنشاء رمز:

<table><tbody><tr><td><span></span></td><td><div><span>curl --location --request GET 'https://</span>&lt;admin_address&gt;<span>/backend/app/contracts.php' \</span></div><div><span>--header 'Content-Type: application/json' \</span></div><div><span>--data-raw '{</span></div><div><span>&nbsp; &nbsp; "cmd": "generate_token",</span></div><div><span>&nbsp; &nbsp; "login": "YOUR_LOGIN_FOR_ADMIN_PANEL",</span></div><div><span>&nbsp; &nbsp; "password": "YOUR_PASSWORD_FOR_ADMIN_PANEL"</span></div><div><span>}'</span></div></td></tr></tbody></table>

مثال على الاستجابة:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "0",</div><div>&nbsp; &nbsp; "message": "007898667a1b5711682399ea38a84f61"</div><div>}</div></td></tr></tbody></table>

ستحصل في الاستجابة على الرمز. استخدمه في الترويسة Authorization في الطلبات اللاحقة.

مثال على الترويسة:

<table><tbody><tr><td><span></span></td><td><div>Authorization: Bearer 007898667a1b5711682399ea38a84f61</div></td></tr></tbody></table>

## الأوامر الأساسية

لتنفيذ العمليات يجب تحديد المعامل cmd الذي يحدد العملية التي تريد تنفيذها.

-   generate\_token — الحصول على رمز التفويض
    
-   start — بدء إيجار المركبة
    
-   update — تحديث بيانات الإيجار
    
-   stop — إيقاف إيجار المركبة
    

## معاملات الطلب

تُمرَّر جميع المعاملات بصيغة JSON

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المعامل</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; النوع</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; إلزامي</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mva</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المعرّف الرقمي للمركبة المستأجرة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ra</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم عقد الإيجار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; plate_number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم لوحة المركبة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم السائق مستأجر المركبة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_phone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; هاتف السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_passport</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; جواز سفر السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_address</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عنوان السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم رخصة القيادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_license_exp</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تاريخ انتهاء صلاحية الرخصة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_email</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; البريد الإلكتروني للسائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_birth_date</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تاريخ ميلاد السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_sex</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الجنس (m أو f)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_country</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; بلد السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; driver_rating</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تقييم السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوقت المتوقع لبدء الإيجار (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_expected</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوقت المتوقع لانتهاء الإيجار (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوقت الفعلي لبدء الإيجار (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; te_real</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوقت الفعلي للانتهاء (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; start_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مكان بدء الإيجار (بخط العرض وخط الطول أو سلسلة العنوان — lat وlon وaddress)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; end_location</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; object</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مكان انتهاء الإيجار (lat أو lon أو address)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; rate_code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رمز تعرفة الإيجار بموجب العقد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; car_group_charged</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; فئة المركبة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; checkout_branch</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; فرع التسليم</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; mileage_limit</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; int</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حد المسافة المقطوعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; </span><span>cid</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; string</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; معرّف العميل، السائق مستأجر المركبة</span></div></td></tr></tbody></table>

## أمثلة على الطلبات

### بدء الإيجار

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Content-Type: application/json' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "start",</div><div>&nbsp; &nbsp; "mva": 111,</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "ts_expected": 1644927600,</div><div>&nbsp; &nbsp; "te_expected": 1644981600,</div><div>&nbsp; &nbsp; "start_location": { "lat": 40.712776, "lon": -74.005974 },</div><div>&nbsp; &nbsp; "car_group_charged": "Economy"</div><div>}'</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1233",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

تُعاد في الاستجابة:

code — رمز الاستجابة

odo — قراءة عداد المسافة

message — رسالة نصية بنتيجة الطلب

### تحديث الإيجار

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer 007898667a1b5711682399ea38a84f61' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "update",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "plate_number": "ABC123",</div><div>&nbsp; &nbsp; "driver_name": "John Doe",</div><div>&nbsp; &nbsp; "driver_phone": "123-456-7890",</div><div>&nbsp; &nbsp; "mileage_limit": 2000</div><div>}'</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### إيقاف الإيجار

<table><tbody><tr><td><span></span></td><td><div>curl --location --request POST 'https://&lt;admin_address&gt;/backend/app/contracts.php' \</div><div>--header 'Authorization: Bearer YOUR_TOKEN' \</div><div>--header 'Content-Type: application/json' \</div><div>--data-raw '{</div><div>&nbsp; &nbsp; "cmd": "stop",</div><div>&nbsp; &nbsp; "ra": 67890,</div><div>&nbsp; &nbsp; "driver_rating": 4,</div><div>&nbsp; &nbsp; "end_location": {"address": "Ilino 2c"}</div><div>}'</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "odo": "1208607",</div><div>&nbsp; &nbsp; "message": "Success"</div><div>}</div></td></tr></tbody></table>

### رموز الاستجابة والأخطاء

0 — العملية ناجحة

1 — المركبة غير موجودة

2 — لا توجد تغييرات للتحديث

3 — عقد الإيجار غير موجود

4 — خطأ في المصادقة

5 — خطأ غير معروف

6 — لا توجد صلاحيات لتنفيذ العملية

7 — وحدة العقود البرمجية غير مفعّلة

8 — رقم عقد الإيجار هذا مستخدم بالفعل من حساب آخر

9 — المركبة مستأجرة من حساب آخر

10 — المركبة غير مستأجرة

11 — طلب غير صحيح

12 — معامل الموقع غير صحيح

13 — رقم عقد الإيجار هذا مستخدم من وكيل آخر

14 — تم تمرير جواز السفر لكن لم يُحدَّد اسم السائق

15 — تم تمرير اسم السائق لكن لم يُحدَّد جواز السفر

16 — لم يتم العثور على السائق بحسب البيانات المقدمة

17 — بيانات السائق لا تطابق البيانات المحفوظة سابقًا

18 — عقد الإيجار بهذا الرقم غير موجود

19 — عقد الإيجار هذا منتهٍ بالفعل

20 — المركبة مستأجرة بالفعل

21 — السائق محدد بشكل غير صحيح

22 — تم إغلاق العقد القائم وإنشاء عقد جديد

500 — خطأ داخلي في الخادم
