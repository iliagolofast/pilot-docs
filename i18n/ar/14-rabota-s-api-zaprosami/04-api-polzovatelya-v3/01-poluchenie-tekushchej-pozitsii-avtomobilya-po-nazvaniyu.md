---
title: "الحصول على الموقع الحالي للسيارة بحسب الاسم"
---

تعيد هذه الطريقة آخر موقع محفوظ للسيارة. تُحدَّد السيارة بحسب اسمها الدقيق في PILOT.

الطريقة مخصصة للتكامل مع أنظمة تتبع عمليات النقل، بما فيها WIMT. وعلى خلاف الطرق التي تستخدم IMEI، يُمرَّر في الطلب اسم السيارة — truckNo.

الوصف التفاعلي للطريقة متاح في [Swagger — Track and Trace](https://pilot-swagger.pilot-gps.com/#/Vehicles/getVehicleTrackAndTrace)

## كيفية الحصول على البيانات

### الطريقة

POST

### عنوان الطلب

https://<server\_address>/api/v3/vehicles/track-and-trace

استبدل <server\_address> بعنوان خادم PILOT.

### التفويض

لتنفيذ الطلب يُستخدم التفويض القياسي لواجهة API V3 بواسطة Bearer token.

مرّر الرمز المميز في الرأس Authorization:

Authorization: Bearer <access\_token>

استبدل <access\_token> برمز مميز صالح لواجهة API V3.

### رؤوس الطلب

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الرأس</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; إلزامي</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Authorization</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Bearer token لتفويض المستخدم في API V3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; X-Node</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم عقدة المستخدم. يُستخدم لإعادة توجيه الطلب إلى الخادم المطلوب</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Content-Type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تنسيق نص الطلب. حدد application/json</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Accept</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تنسيق الاستجابة. القيمة الموصى بها — application/json</span></div></td></tr></tbody></table>

مثال على الرؤوس:

Authorization: Bearer <access\_token>

X-Node: 3

Content-Type: application/json

Accept: application/json

## معلمات الطلب

تُمرَّر المعلمات في نص الطلب بصيغة JSON.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعلمة</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; النوع</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; إلزامي</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; shipmentNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم الشحنة أو عملية النقل. تقبل الطريقة القيمة ولكنها لا تحفظها ولا تعيدها</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم السيارة في PILOT. يجب أن يتطابق تمامًا مع قيمة vehiclenumber</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رمز البلد، على سبيل المثال ZA. يُعاد في الاستجابة دون تغيير</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; trackingFlag</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نعم</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة التتبع، على سبيل المثال START أو STOP. في الإصدار الحالي تُقبل القيمة ولكنها لا تُحفظ ولا تؤثر في معالجة الطلب</span></div></td></tr></tbody></table>

## البحث عن السيارة

تبحث الطريقة عن السيارة بحسب القيمة الدقيقة لـ truckNo بين السيارات المتاحة للمستخدم المفوَّض.

يجب أن تتطابق القيمة المُمرَّرة تمامًا مع اسم السيارة — vehiclenumber — في PILOT. راعِ حالة الأحرف والمسافات والرموز الخاصة.

على سبيل المثال، إذا كان اسم السيارة KS51YPGP\_F، فيجب تمرير ما يلي في الطلب:

<table><tbody><tr><td><span></span></td><td><div>"truckNo": "KS51YPGP_F"</div></td></tr></tbody></table>

إذا لم يتطابق الاسم أو لم يكن لدى المستخدم صلاحية الوصول إلى السيارة، فلن تعيد الطريقة موقعها.

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "trackingFlag": "START"</div><div>}</div></td></tr></tbody></table>

مثال على طلب cURL:

<table><tbody><tr><td><span></span></td><td><div>curl --request POST \</div><div>&nbsp; --url "https://&lt;server_address&gt;/api/v3/vehicles/track-and-trace" \</div><div>&nbsp; --header "Authorization: Bearer &lt;access_token&gt;" \</div><div>&nbsp; --header "X-Node: 3" \</div><div>&nbsp; --header "Content-Type: application/json" \</div><div>&nbsp; --header "Accept: application/json" \</div><div>&nbsp; --data '{</div><div>&nbsp; &nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; &nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; &nbsp; "countryID": "ZA",</div><div>&nbsp; &nbsp; "trackingFlag": "START"</div><div>&nbsp; }'</div></td></tr></tbody></table>

### الاستجابة

عند نجاح الطلب، تعيد الطريقة آخر موقع GPS محفوظ للسيارة والعنوان والمنطقة الزمنية واسم الحساب.

حقول الاستجابة الناجحة

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الحقل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; النوع</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رمز تنفيذ الطلب. تعني القيمة 0 أن التنفيذ تم بنجاح</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; msg</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نتيجة تنفيذ الطلب. عند النجاح تُعاد القيمة OK</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; process_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مدة معالجة الطلب بالثواني</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رمز البلد المستلم في الطلب. يُعاد دون تغيير</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; timeZone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المنطقة الزمنية بصيغة IANA، على سبيل المثال Africa/Johannesburg</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم السيارة التي عُثر عليها في PILOT</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; latitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خط عرض آخر موقع GPS محفوظ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; longitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خط طول آخر موقع GPS محفوظ</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم الحساب الذي تتبعه السيارة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; streetName</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عنوان آخر موقع، تم الحصول عليه بواسطة الترميز الجغرافي العكسي</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lastRecordedOn</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وقت تسجيل آخر موقع GPS بصيغة Unix timestamp</span></div></td></tr></tbody></table>

لا تُعاد الحقول shipmentNo وtrackingFlag وtrackLink في الاستجابة.

### مثال على استجابة ناجحة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "process_time": 0.001,</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "timeZone": "Africa/Johannesburg",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "latitude": -26.2041,</div><div>&nbsp; "longitude": 28.0473,</div><div>&nbsp; "source": "Example Fleet",</div><div>&nbsp; "streetName": "Main Road, Johannesburg",</div><div>&nbsp; "lastRecordedOn": 1785142800</div><div>}</div></td></tr></tbody></table>

## تنسيقات الوقت

### المنطقة الزمنية

يحتوي الحقل timeZone على معرّف المنطقة الزمنية من قاعدة بيانات IANA:

<table><tbody><tr><td><span></span></td><td><div>"timeZone": "Africa/Johannesburg"</div></td></tr></tbody></table>

يحدد معرّف IANA المنطقة الزمنية الإقليمية ويتيح مراعاة قواعدها بشكل صحيح.

لا تعيد الطريقة فرق توقيت ثابتًا، مثل UTC+02:00.

### وقت آخر موقع

يحتوي الحقل lastRecordedOn على وقت آخر موقع GPS بصيغة Unix timestamp:

<table><tbody><tr><td><span></span></td><td><div>"lastRecordedOn": 1785142800</div></td></tr></tbody></table>

يمثل Unix timestamp عدد الثواني المنقضية منذ 1 يناير 1970، الساعة 00:00:00 بالتوقيت العالمي المنسق (UTC). ولا تعتمد القيمة على المنطقة الزمنية.

لعرض التاريخ والوقت للمستخدم، حوّل lastRecordedOn مع مراعاة قيمة timeZone.

### تحديد العنوان

يتكوّن الحقل streetName بواسطة الترميز الجغرافي العكسي: يحوّل PILOT إحداثيات آخر موقع إلى عنوان نصي.

<table><tbody><tr><td><span></span></td><td><div>"streetName": "Main Road, Johannesburg"</div></td></tr></tbody></table>

يعتمد اكتمال العنوان ودقته على بيانات الخرائط المتاحة.
