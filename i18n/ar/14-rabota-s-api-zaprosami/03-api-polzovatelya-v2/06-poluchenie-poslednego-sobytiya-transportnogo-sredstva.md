---
title: "الحصول على آخر حدث للمركبة"
---

هذا API مخصص للحصول على آخر حدث للمركبة خلال الـ 24 ساعة الماضية.

تدعم هذه الطريقة ربط الحسابات: يمكن للمستخدم الحصول على حدث مركبة من حساب مرتبط إذا كان لديه حق الوصول إلى هذه المركبة.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:

https://<server\_address>/api/v3/events/live

استبدل <server\_address> بعنوان خادم PILOT.

### معاملات الطلب

أضف إلى عنوان الطلب المعامل:

-   agent\_id — معرّف المركبة في PILOT.
    

يجب أن تكون المركبة متاحة للمستخدم المصادَق عليه.

## مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>GET https://&lt;server_address&gt;/api/v3/events/live?agent_id=2000</div><div>Authorization: Bearer &lt;token&gt;</div><div>X-Node: 0</div></td></tr></tbody></table>

### الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "events": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "Cotract Number": 1102,</div><div>&nbsp; &nbsp; &nbsp; "Company Name": "Boooch Test",</div><div>&nbsp; &nbsp; &nbsp; "AgentId": 2000,</div><div>&nbsp; &nbsp; &nbsp; "VehicleID": "10-14262 Sunny",</div><div>&nbsp; &nbsp; &nbsp; "Road Type": "Blacktop",</div><div>&nbsp; &nbsp; &nbsp; "EventID": 4531206,</div><div>&nbsp; &nbsp; &nbsp; "Event Type": 103,</div><div>&nbsp; &nbsp; &nbsp; "Event Message": "SpeedN|110|&gt;|112|10|ss|17",</div><div>&nbsp; &nbsp; &nbsp; "Event Start Time": 1785746496,</div><div>&nbsp; &nbsp; &nbsp; "Event Start Speed": null,</div><div>&nbsp; &nbsp; &nbsp; "Event Start location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lat": "25.164997",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "lon": "55.235535"</div><div>&nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; "Event End Time": null,</div><div>&nbsp; &nbsp; &nbsp; "Event duration": null</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "process_time": 0.0222</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز تنفيذ الطلب. تعني القيمة 0 نجاح التنفيذ
    
-   msg — نتيجة تنفيذ الطلب
    
-   events — مصفوفة الأحداث التي تم العثور عليها
    
-   process\_time — زمن معالجة الطلب بالثواني
    

تحتوي مصفوفة events على:

-   Cotract Number — معرّف الحساب الذي تتبع له المركبة
    
-   Company Name — اسم الحساب
    
-   AgentId — معرّف المركبة في PILOT
    
-   VehicleID — اسم المركبة
    
-   Road Type — نوع سطح الطريق. في الإصدار الحالي يُعاد Blacktop
    
-   EventID — معرّف الحدث
    
-   Event Type — نوع الحدث
    
-   Event Message — نص الحدث
    
-   Event Start Time — وقت بداية الحدث بصيغة Unix timestamp
    
-   Event Start Speed — السرعة لحظة بداية الحدث. إذا لم تتوفر البيانات يُعاد null
    
-   Event Start location — إحداثيات المركبة لحظة بداية الحدث:
    
-   lat — خط العرض
    
-   lon — خط الطول
    
-   Event End Time — وقت انتهاء الحدث بصيغة Unix timestamp. إذا لم تتوفر البيانات يُعاد null
    
-   Event duration — مدة الحدث بالثواني. تُحسب كالفرق بين وقت الانتهاء ووقت بداية الحدث. إذا كانت إحدى القيمتين مفقودة يُعاد null
