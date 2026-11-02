---
title: "أحداث الكائن"
---

تعيد واجهة API هذه أحداث المركبات في الوقت الفعلي، بما في ذلك معلومات عن العقد والشركة والسائق والسرعة وموقع بداية الحدث.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd=live\_events — أمر الحصول على الأحداث في الوقت الفعلي
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=live_events&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "1264": {</div><div>&nbsp; &nbsp; "Contract Number": "CONTRACT ID",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "LEK",</div><div>&nbsp; &nbsp; "Vehicle Owner": "SUB-CONTRACTOR",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "5174 WA",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 18262972,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881932",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.185841",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.213230"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; },</div><div>&nbsp; "1123": {</div><div>&nbsp; &nbsp; "Contract Number": "",</div><div>&nbsp; &nbsp; "Company Name": "Al Turki Enterprises",</div><div>&nbsp; &nbsp; "Base Location": "",</div><div>&nbsp; &nbsp; "Vehicle Owner": "",</div><div>&nbsp; &nbsp; "ID": 1680881937,</div><div>&nbsp; &nbsp; "EventID, EventType": 0,</div><div>&nbsp; &nbsp; "VehicleID": "6076MB",</div><div>&nbsp; &nbsp; "Asset Category": "Light",</div><div>&nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; "DriverID": 0,</div><div>&nbsp; &nbsp; "Event Start Time": "1680881413",</div><div>&nbsp; &nbsp; "Event Start Speed": 0,</div><div>&nbsp; &nbsp; "Event Start Location": {</div><div>&nbsp; &nbsp; &nbsp; "lat": "18.188658",</div><div>&nbsp; &nbsp; &nbsp; "lon": "55.206314"</div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   مفتاح الكائن (1264، 1123) — المعرّف الفريد للحدث
    
-   Contract Number — رقم العقد
    
-   Company Name — اسم الشركة
    
-   Base Location — موقع القاعدة التي تتبع لها المركبة
    
-   Vehicle Owner — مالك المركبة
    
-   ID — المعرّف الداخلي للحدث
    
-   EventID, EventType — معرّف الحدث ونوعه
    
-   VehicleID — رقم لوحة المركبة أو معرّفها
    
-   Asset Category — فئة المركبة
    
-   Road Type — نوع الطريق
    
-   DriverID — معرّف السائق
    
-   Event Start Time — وقت بداية الحدث (Unix timestamp)
    
-   Event Start Speed — السرعة لحظة بداية الحدث
    
-   Event Start Location — إحداثيات بداية الحدث (lat, lon)
