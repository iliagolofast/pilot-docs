---
title: "تشغيل الأجهزة"
---

تتيح واجهة API هذه الحصول على بيانات تشغيل حساسات المركبة خلال فترة مختارة.

باستخدامها يمكنك:

— تتبع فترات تشغيل/تفعيل الحساسات (على سبيل المثال، الإشعال وتشغيل الأجهزة).

— الحصول على معلومات الموقع عند تفعيل الحساس.

— تحليل سلوك الأجهزة وتشغيل المركبة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=sensors — أمر الحصول على بيانات تشغيل الحساسات
    
-   imei — معرّف المركبة في النظام
    
-   start — وقت بداية العينة (Unix timestamp)
    
-   stop — وقت نهاية العينة (Unix timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=sensors&amp;imei=356307046690011&amp;start=1404637430&amp;stop=1404645198&amp;node=1</div></td></tr></tbody></table>

الاستجابة

يُمثَّل كل حساس بكائن، يكون مفتاحه معرّف الحساس في النظام:

<table><tbody><tr><td><span></span></td><td><div>"sensors": {</div><div>&nbsp; &nbsp; "9175": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "fieldname": "DIS1",&nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "info": "Датчик зажигания", &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 9175,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "work": {&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404637430": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404637430,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404637834,&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3825",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0031",&nbsp; &nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "Россия, Астраханская область, Наримановский район, Николаевское шоссе, 1б" // Адрес</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "1404638577": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1404638577,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1404639841,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "46.3625",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "48.0478",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": "RU, Астрахань, улица Савушкина"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // ... следующие периоды работы датчика</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   fieldname — اسم حقل الحساس في النظام (على سبيل المثال، DIS1)
    
-   info — اسم الحساس في النظام (على سبيل المثال، «حساس الإشعال»)
    
-   id — معرّف الحساس في النظام
    
-   work — كائن بفترات تشغيل الحساس، ومفاتيحه هي أوقات التفعيل (ts)
    
-   ts — وقت تفعيل الحساس (Unix timestamp)
    
-   te — وقت إيقاف الحساس (Unix timestamp)
    
-   lat — خط العرض لحظة التفعيل
    
-   lon — خط الطول لحظة التفعيل
    
-   place — العنوان أو الموقع لحظة تفعيل الحساس
