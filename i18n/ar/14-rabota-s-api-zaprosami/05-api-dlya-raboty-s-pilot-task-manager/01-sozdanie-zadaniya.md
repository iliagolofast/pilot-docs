---
title: "إنشاء مهمة"
---

واجهة API هذه مخصصة لإنشاء المهام في النظام للعقود التي تم تفعيل وحدة [PTM](../../lichnyj-kabinet-polzovatelya/moduli-1/pilot-task-manager/index.html) فيها.

### المسار الأساسي لـ API 

<table><tbody><tr><td><span></span></td><td><div>/backend/public/api/task</div></td></tr></tbody></table>

### عنوان الطلب

لتنفيذ الطلب، استخدم صيغة العنوان التالية:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/api/task</div></td></tr></tbody></table>

### الوصول إلى API

للوصول إلى API تُستخدم مصادقة HTTP Basic. يجب أن يكون اسم الدخول وكلمة المرور بالصيغة التالية:

<table><tbody><tr><td><span></span></td><td><div>اسم_الدخول_في_PILOT:كلمة_المرور_في_PILOT</div></td></tr></tbody></table>

### مثال على طلب API

<table><tbody><tr><td><span></span></td><td><div>https://demo:demo@tasks.pilot-gps.com/backend/public/api/task/create_universal</div></td></tr></tbody></table>

### تنسيق استجابة API

استجابة API موحّدة ولها التنسيق التالي:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,&nbsp; // TRUE - успешный запрос, FALSE - ошибка</div><div>&nbsp; &nbsp; "msg": "OK",&nbsp; // Сообщение об ошибке, если она есть</div><div>&nbsp; &nbsp; "httpCode": 200,&nbsp; // Код ошибки</div><div>&nbsp; &nbsp; "data": [],&nbsp; // Данные ответа, если они есть</div><div>&nbsp; &nbsp; "et": 0,&nbsp; // Время выполнения запроса</div><div>&nbsp; &nbsp; "exceptionMsg": "Exception"&nbsp; // Сообщение об исключении</div><div>}</div></td></tr></tbody></table>

الحالات ورموز الأخطاء:

-   200 — تم تنفيذ الطلب بنجاح
    
-   400 — المعلمات الإلزامية مفقودة
    
-   401 — خطأ في التفويض: اسم الدخول أو كلمة المرور غير صحيحة
    
-   404 — لم يتم العثور على مسار API
    
-   500 — خطأ في الخادم
    

### كيفية إنشاء مهمة

طريقة الطلب: POST

لإنشاء مهمة بقالب Universal يجب تمرير المعلمات. يُنشأ قالب Universal تلقائيًا في النظام، أما القوالب الإضافية فيجب إعدادها مسبقًا في واجهة PTM.

### معلمات المهمة لقالب Universal

تُستخدم مجموعة المعلمات التالية للمهمة بقالب Universal:

1\. external\_id: المعرّف الخارجي للمهمة (سلسلة نصية، القيمة الافتراضية NULL)

2\. vehicle\_plate: رقم المركبة (القيمة الافتراضية NULL). إذا لم يكن الرقم موجودًا في النظام، فسيُنشأ كمركبة مستأجرة

3\. driver\_name: الاسم الكامل للسائق (القيمة الافتراضية NULL). وإذا لم يُحدد، تُستخدم القيمة من vehicle\_plate. وإذا لم يكن السائق موجودًا في النظام، فسيُنشأ كسائق مستأجر

4\. type\_name: نوع المهمة (القيمة الافتراضية Delivery). وإذا لم يوجد هذا النوع، فسيُنشأ

5\. template\_name: اسم قالب المهمة (القيمة الافتراضية Universal). وإذا لم يوجد القالب، فسيُنشأ

6\. time\_zone: المنطقة الزمنية، أي فرق التوقيت عن UTC (رقم، الوقت بالدقائق عن UTC، القيمة الافتراضية NULL)

7\. time\_zone\_name: اسم المنطقة الزمنية (سلسلة نصية، القيمة الافتراضية NULL)

8\. c\_begin\_time: الوقت المخطط لبداية المهمة (رقم — طابع زمني بالثواني، القيمة الافتراضية الوقت الحالي)

9\. c\_return\_time: الوقت المخطط لانتهاء المهمة (رقم، القيمة الافتراضية NULL)

10\. route\_name: اسم المسار (سلسلة نصية، القيمة الافتراضية NULL)

11\. cargo: اسم الحمولة (سلسلة نصية، القيمة الافتراضية NULL)

12\. temp\_min: الحد الأدنى لدرجة الحرارة (رقم، القيمة الافتراضية 2°C)

13\. temp\_max: الحد الأقصى لدرجة الحرارة (رقم، القيمة الافتراضية 8°C)

14\. description: وصف المهمة (سلسلة نصية، القيمة الافتراضية NULL)

15\. addresses\_list (إلزامي): قائمة العناوين أو نقاط المسار (سلاسل نصية بالعناوين أو الإحداثيات)

### المعلمات المتعلقة بعنوان المسار

يمكن استكمال عنوان كل نقطة من نقاط المسار بمعلمات مختلفة ذات لواحق، تصف خصائص المسار والبيانات الجغرافية.

1\. addresses\_list: قائمة العناوين أو نقاط المسار (سلاسل نصية بالعناوين أو الإحداثيات).

2\. addresses\_list\_lat: مصفوفة خطوط العرض لنقاط المسار. إذا كانت محددة، فستُستخدم لكل عنوان

3\. addresses\_list\_lng: مصفوفة خطوط الطول لنقاط المسار. مصفوفة أرقام تمثل خطوط العرض لنقاط المسار

4\. addresses\_list\_date\_point: مصفوفة طوابع زمنية (ثوانٍ) تحدد الوقت المخطط للوصول

5\. addresses\_list\_date\_point\_to: مصفوفة طوابع زمنية (ثوانٍ) تحدد الوقت المخطط للمغادرة. تُحسب تلقائيًا إذا لم تُحدد

6\. addresses\_list\_time\_point: مصفوفة مدد التحميل/التفريغ عند نقطة المسار بالدقائق

7\. addresses\_list\_redirect: علامة إعادة توجيه العنوان الحالي إلى العنوان التالي. تشير إلى أن العنوان يُعاد توجيهه إلى العنوان التالي في المسار.

8\. addresses\_list\_geofence\_id: معرّفات السياجات الجغرافية لكل نقطة من نقاط المسار

9\. addresses\_list\_warehouse: أسماء المستودعات أو الكائنات لكل نقطة من نقاط المسار

10\. addresses\_list\_ticket: مصفوفة المعرّفات الفريدة للطلبات لكل نقطة من نقاط المسار

11\. addresses\_list\_phones: أرقام هواتف الاتصال لكل نقطة من نقاط المسار

12\. addresses\_list\_schedule: جدول العمل لكل نقطة من نقاط المسار

13\. addresses\_list\_vehicle\_volume: حجم الحمولة في المركبة

14\. addresses\_list\_trailer\_volume: حجم الحمولة في المقطورة

15\. addresses\_list\_action: وصف الإجراءات المطلوب تنفيذها عند كل نقطة من نقاط المسار

16\. addresses\_list\_agent\_id: معرّف الكائن من نظام PILOT، ويُستخدم لحاويات القمامة

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>fetch("https://tasks.pilot-gps.com/backend/public/api/task/create_universal", {</div><div>&nbsp; &nbsp; "headers": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Authorization": "Basic ZGVtbzpkZW1v", // base64 кодирование "demo:demo"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "Content-Type": "application/json"</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "method": "POST",</div><div>&nbsp; &nbsp; "body": JSON.stringify({</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "external_id": "T-5677786754",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "vehicle_plate": "PT 125 AA 66",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "driver_name": null,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "type_name": "Delivery",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "template_name": "Universal",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone": -180,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "time_zone_name": "Europe/Moscow",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_begin_time": 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "c_return_time": 1723238700,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "route_name": "My route",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "cargo": "Milk",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_min": 2,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "temp_max": 6,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "description": "Test",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "215, улица Народного Ополчения, Ростов-на-Дону",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "47.227196,39.705228",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Client 2"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lat": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.234256,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.227196,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 47.216077</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_lng": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706467,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.705228,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39.706928</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_date_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723233360,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723234800,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1723237800</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_time_point": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 20,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "addresses_list_rad_geo": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 40,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 30</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; })</div><div>});</div></td></tr></tbody></table>

### مثال على استجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "success": true,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "httpCode": 200,</div><div>&nbsp; &nbsp; "data": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": 12563</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; "et": 0.5612</div><div>}</div></td></tr></tbody></table>
