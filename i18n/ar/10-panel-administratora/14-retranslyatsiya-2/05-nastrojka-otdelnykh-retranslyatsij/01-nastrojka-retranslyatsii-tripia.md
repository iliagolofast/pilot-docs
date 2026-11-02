---
title: "إعداد إعادة بث Tripia"
---

Tripia بروتوكول لإعادة بث البيانات مخصص لنقل المعلومات التليماتية عن المركبات إلى نظام Tripia الخارجي بصيغة JSON.

عبر بروتوكول Tripia يمكن نقل:

— إحداثيات المركبة وسرعتها

— بيانات الرحلات

— حالة المركبة

— بيانات الحساسات

— أحداث GPS وADAS وDMS

— بيانات ناقل CAN

— معلومات تعريف السائق

يجري نقل البيانات في الوقت الفعلي.

## كيفية إضافة إعادة بث

1\. ادخل إلى لوحة الإدارة

2\. انتقل إلى تبويب «المركبات»

3\. ابحث عن الكائن المطلوب وانقر عليه بزر الفأرة الأيمن واختر من القائمة «إعادة البث»

**![](images/drex_nastrojka_retranslyatsii_tripia_custom.png)**

4. في النافذة التي ستفتح، انقر زر إضافة إعادة البث ![](images/drex_nastrojka_retranslyatsii_tripia_custom_2.png)

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_3.png)**

5\. في نافذة «التكوين» املأ حقول إعداد إعادة البث

### معاملات الاتصال

عند إنشاء endpoint حدّد المعاملات التالية:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; القيمة</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; الصيغة</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tripia</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المضيف</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 64.225.12.166</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المنفذ</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 3000</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; البروتوكول</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TCP</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; صيغة البيانات</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp;JSON</span></div></td></tr></tbody></table>

**![](images/drex_nastrojka_retranslyatsii_tripia_custom_4.png)**

### دورية نقل البيانات

يجري نقل البيانات تلقائيًا:

— كل 30 ثانية عند تشغيل الإشعال

— كل 1 دقيقة عند إيقاف الإشعال

## البيانات المنقولة

### معلومات المزوّد

تُنقل بيانات المؤسسة مالكة المركبات:

-   اسم المزوّد (Provider Name)
    
-   رمز المزوّد (Provider Code)
    

### معلومات المركبة

يُنقل:

-   معرّف المركبة
    
-   رقم اللوحة الحكومي
    
-   بيانات المرسِل (Dispatcher)
    

### بيانات تسجيل الحدث

يُنقل:

-   وقت الحدث (Event Timestamp)
    
-   وقت إرسال البيانات (Sent Timestamp)
    

### بيانات GPS

تُنقل معاملات الملاحة الأساسية:

-   خط العرض (Latitude)
    
-   خط الطول (Longitude)
    
-   السرعة (Speed)
    
-   اتجاه الحركة (Heading)
    
-   الارتفاع (Altitude)
    
-   عدد الأقمار الصناعية (Satellites)
    
-   HDOP
    
-   PDOP
    

### بيانات الاتصال

تُنقل معاملات شبكة الجوال:

-   مستوى الإشارة
    
-   مشغّل الاتصالات (MCC/MNC)
    
-   نوع الاتصال
    
-   Cell ID
    

### حالة المركبة

يُنقل:

-   الإشعال
    
-   الحركة
    
-   عداد المسافة
    
-   ساعات تشغيل المحرك
    
-   جهد البطارية
    

### أحداث GPS

تُنقل الأحداث التالية:

-   فصل البطارية
    
-   التشويش على الإشارة (Jamming)
    
-   فقدان الأقمار الصناعية
    
-   سحب المركبة
    
-   فقدان إشارة الاتصال
    
-   استعادة إشارة الاتصال
    
-   التسارع الحاد
    
-   المنعطف الحاد
    
-   الكبح الحاد
    
-   حادث (Crash)
    

### بيانات حساسات GPS

يُدعم نقل بيانات الحساسات التالية:

-   حساسات الحرارة
    
-   حساسات الأبواب وحالة الهيكل:
    
    — باب السائق
    
    — باب الراكب
    
    — باب الحمولة الجانبي
    
    — باب الحمولة الخلفي
    
    — غطاء المحرك
    
-   حساسات إضافية:
    
    — زر الإنذار (Panic Button)
    

### القياس عن بُعد

تُنقل علامات وجود الأنظمة الفرعية التالية:

-   ADAS
    
-   DMS
    
-   المبرِّد (Reefer)
    
-   CAN Bus
    
-   Driver ID
    

### أحداث ADAS

تُنقل أحداث نظام مساعدة السائق:

-   FCW (تحذير من الاصطدام الأمامي)
    
-   LDW (التحكم في المسار)
    
-   LDWL
    
-   LDWR
    
-   PCW
    
-   PROX
    

### أحداث DMS

تُنقل أحداث نظام مراقبة السائق:

-   الحجب
    
-   فقدان الوجه (Face Lost)
    
-   تشتت الانتباه
    
-   التثاؤب المتكرر
    
-   النظر إلى الجانب
    
-   التدخين
    
-   التحدث بالهاتف
    
-   النعاس
    
-   عدم ربط حزام الأمان
    

### بيانات ناقل CAN

يُنقل:

-   مستوى الوقود (%)
    
-   حجم الوقود (لترات)
    
-   تحميل الوقود
    
-   استهلاك الوقود
    
-   السرعة
    
-   عداد المسافة
    
-   ساعات تشغيل المحرك
    
-   حالة باب السائق
    
-   حالة باب الراكب
    

### تعريف السائق (Driver ID)

يُنقل:

-   نوع المعرّف
    
-   رمز المعرّف
    
-   ID السائق
    
-   اسم السائق
    

## مثال على بنية الحزمة المنقولة

عند نقل البيانات إلى Tripia يُنشئ النظام حزمة JSON تحتوي على معلومات عن المركبة والموقع والحساسات والأحداث والقياس عن بُعد.

مثال على بنية الحزمة:

<table><tbody><tr><td><span></span></td><td><div><span>{</span></div><div><span>&nbsp; "provider": {</span></div><div><span>&nbsp; &nbsp; "name": "Providers Name",</span></div><div><span>&nbsp; &nbsp; "code": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dispatcher": {</span></div><div><span>&nbsp; &nbsp; "name": "Dispatcher Name",</span></div><div><span>&nbsp; &nbsp; "identifier": "1234abc",</span></div><div><span>&nbsp; &nbsp; "licensePlate": "1234abc"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "registry": {</span></div><div><span>&nbsp; &nbsp; "eventTimestamp": "2016-01-01T00:00:00Z",</span></div><div><span>&nbsp; &nbsp; "sentTimestamp": "2016-01-01T00:00:00Z"</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gps": {</span></div><div><span>&nbsp; &nbsp; "latitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "longitude": 123.456789,</span></div><div><span>&nbsp; &nbsp; "speed": 100,</span></div><div><span>&nbsp; &nbsp; "heading": 123,</span></div><div><span>&nbsp; &nbsp; "altitude": 123,</span></div><div><span>&nbsp; &nbsp; "satellites": 12,</span></div><div><span>&nbsp; &nbsp; "hdop": 1.2,</span></div><div><span>&nbsp; &nbsp; "pdop": 1.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "connection": {</span></div><div><span>&nbsp; &nbsp; "signal": 85,</span></div><div><span>&nbsp; &nbsp; "operatorMCCMNC": "Entel",</span></div><div><span>&nbsp; &nbsp; "type": 2,</span></div><div><span>&nbsp; &nbsp; "cellID": 123456789</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "status": {</span></div><div><span>&nbsp; &nbsp; "ignition": 1,</span></div><div><span>&nbsp; &nbsp; "movement": 1,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "hourMeter": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "battery": 12.2</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsEvents": {</span></div><div><span>&nbsp; &nbsp; "batteryDisconnected": 0,</span></div><div><span>&nbsp; &nbsp; "jamming": 1,</span></div><div><span>&nbsp; &nbsp; "satellitesLost": 0,</span></div><div><span>&nbsp; &nbsp; "towedVehicule": 1,</span></div><div><span>&nbsp; &nbsp; "signalLost": 0,</span></div><div><span>&nbsp; &nbsp; "signalRecovered": 1,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driving": {</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshAcceleration": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshTurn": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "harshBraking": 1,</span></div><div><span>&nbsp; &nbsp; &nbsp; "crash": 1</span></div><div><span>&nbsp; &nbsp; }</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "gpsSensors": {</span></div><div><span>&nbsp; &nbsp; "temperature1": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature2": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature3": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature4": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature5": 12.3,</span></div><div><span>&nbsp; &nbsp; "temperature6": 12.3,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 0,</span></div><div><span>&nbsp; &nbsp; "sideLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "rearLoadingDoor": 0,</span></div><div><span>&nbsp; &nbsp; "engineHood": 1,</span></div><div><span>&nbsp; &nbsp; "panicButton": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "telemetry": {</span></div><div><span>&nbsp; &nbsp; "adas": 0,</span></div><div><span>&nbsp; &nbsp; "dms": 1,</span></div><div><span>&nbsp; &nbsp; "reefer": 0,</span></div><div><span>&nbsp; &nbsp; "canbus": 1,</span></div><div><span>&nbsp; &nbsp; "driverid": 0</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "adasEvents": {</span></div><div><span>&nbsp; &nbsp; "fcw": 1,</span></div><div><span>&nbsp; &nbsp; "ldw": 1,</span></div><div><span>&nbsp; &nbsp; "ldwl": 1,</span></div><div><span>&nbsp; &nbsp; "ldwr": 1,</span></div><div><span>&nbsp; &nbsp; "pcw": 1,</span></div><div><span>&nbsp; &nbsp; "prox": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "dmsEvents": {</span></div><div><span>&nbsp; &nbsp; "blocked": 0,</span></div><div><span>&nbsp; &nbsp; "faceLost": 0,</span></div><div><span>&nbsp; &nbsp; "distraction": 0,</span></div><div><span>&nbsp; &nbsp; "frequentYawning": 0,</span></div><div><span>&nbsp; &nbsp; "lookingAside": 1,</span></div><div><span>&nbsp; &nbsp; "smoking": 0,</span></div><div><span>&nbsp; &nbsp; "calling": 1,</span></div><div><span>&nbsp; &nbsp; "drowsiness": 0,</span></div><div><span>&nbsp; &nbsp; "seatbelt": 1</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "canbusData": {</span></div><div><span>&nbsp; &nbsp; "fuelPercent": 12,</span></div><div><span>&nbsp; &nbsp; "fuelLiters": 128,</span></div><div><span>&nbsp; &nbsp; "fuelLoad": 80,</span></div><div><span>&nbsp; &nbsp; "odometer": 12345678.9,</span></div><div><span>&nbsp; &nbsp; "speed": 123,</span></div><div><span>&nbsp; &nbsp; "fuelConsumption": 11.12,</span></div><div>&nbsp;</div><div><span>&nbsp; &nbsp; "driverDoor": 0,</span></div><div><span>&nbsp; &nbsp; "copilotDoor": 1,</span></div><div><span>&nbsp; &nbsp; "engineHours": 12345678.9</span></div><div><span>&nbsp; },</span></div><div>&nbsp;</div><div><span>&nbsp; "driveridData": {</span></div><div><span>&nbsp; &nbsp; "type": 1,</span></div><div><span>&nbsp; &nbsp; "codeId": "123456789",</span></div><div><span>&nbsp; &nbsp; "driverName": "Nombre conductor",</span></div><div><span>&nbsp; &nbsp; "driverId": "123456789"</span></div><div><span>&nbsp; }</span></div><div><span>}</span></div></td></tr></tbody></table>

المثال مقدَّم للتعرف على بنية البيانات. ويتوقف التكوين الفعلي للحقول على الأجهزة المتصلة وإعدادات إعادة البث والحساسات المتاحة للمركبة.
