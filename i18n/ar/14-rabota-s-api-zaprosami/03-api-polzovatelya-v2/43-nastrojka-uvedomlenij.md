---
title: "إعداد الإشعارات"
---

واجهة API هذه مخصصة لإنشاء إعدادات الإشعارات في PILOT والحصول عليها وتعديلها وحذفها.  وهي ليست واجهة لإرسال الإشعارات، بل لتحديد الشروط التي ستُفعَّل عندها الإشعارات في النظام مستقبلًا.

## الطرق

POST, GET, PUT, DELETE

### عنوان الطلب

للحصول على البيانات، استخدم العنوان:  https://<address>/api/ptm/notification.php

<address\> — عنوان الموقع

## POST 

تنشئ إعدادًا جديدًا للإشعار.

نص الطلب إلزامي.

### الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php</div></td></tr></tbody></table>

### مثال على نص الطلب

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 0,</div><div>&nbsp; "agent_id": 123,</div><div>&nbsp; "type": "speed",</div><div>&nbsp; "geozones": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "name": "Превышение скорости в зоне склада",</div><div>&nbsp; "email": true,</div><div>&nbsp; "emails_list": [</div><div>&nbsp; &nbsp; "dispatcher@example.com",</div><div>&nbsp; &nbsp; "manager@example.com"</div><div>&nbsp; ],</div><div>&nbsp; "sms": true,</div><div>&nbsp; "phones_list": [</div><div>&nbsp; &nbsp; "+79001234567",</div><div>&nbsp; &nbsp; "+79007654321"</div><div>&nbsp; ],</div><div>&nbsp; "message_text": "Внимание! Превышение скорости в зоне склада.",</div><div>&nbsp; "webhook": true,</div><div>&nbsp; "webhook_url": "https://yourdomain.com/webhook-handler",</div><div>&nbsp; "ts": 1680000000,</div><div>&nbsp; "te": 1710000000,</div><div>&nbsp; "timezone": 3,</div><div>&nbsp; "zone_rule": "in",</div><div>&nbsp; "speed_rule": "&gt;",</div><div>&nbsp; "speed_value": 80,</div><div>&nbsp; "speed_time": 15,</div><div>&nbsp; "speed_time_units": "ss",</div><div>&nbsp; "ignition_rule": "on",</div><div>&nbsp; "geozones_rule": "in",</div><div>&nbsp; "break_duration": 0,</div><div>&nbsp; "break_time_units": "ss",</div><div>&nbsp; "tag_name": "грузовик",</div><div>&nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; "temperature_value": 30,</div><div>&nbsp; "temperature_time": 0,</div><div>&nbsp; "disconnect_time": 0,</div><div>&nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; "odometer_value": 100000,</div><div>&nbsp; "odometer_period": "abs"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

### مثال على الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "Уведомление успешно создано",</div><div>&nbsp; "method": "POST",</div><div>&nbsp; "notification": {</div><div>&nbsp; &nbsp; "id": 123,</div><div>&nbsp; &nbsp; "agent_id": 123,</div><div>&nbsp; &nbsp; "type": "speed",</div><div>&nbsp; &nbsp; "geozones": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "name": "Превышение скорости в зоне склада",</div><div>&nbsp; &nbsp; "email": true,</div><div>&nbsp; &nbsp; "emails_list": [</div><div>&nbsp; &nbsp; &nbsp; "dispatcher@example.com",</div><div>&nbsp; &nbsp; &nbsp; "manager@example.com"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "sms": true,</div><div>&nbsp; &nbsp; "phones_list": [</div><div>&nbsp; &nbsp; &nbsp; "+79001234567",</div><div>&nbsp; &nbsp; &nbsp; "+79007654321"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "message_text": "Внимание! Превышение скорости в зоне склада.",</div><div>&nbsp; &nbsp; "webhook": true,</div><div>&nbsp; &nbsp; "webhook_url": "https://yourdomain.com/webhook-handler",</div><div>&nbsp; &nbsp; "ts": 1680000000,</div><div>&nbsp; &nbsp; "te": 1710000000,</div><div>&nbsp; &nbsp; "timezone": 3,</div><div>&nbsp; &nbsp; "zone_rule": "in",</div><div>&nbsp; &nbsp; "speed_rule": "&gt;",</div><div>&nbsp; &nbsp; "speed_value": 80,</div><div>&nbsp; &nbsp; "speed_time": 15,</div><div>&nbsp; &nbsp; "speed_time_units": "ss",</div><div>&nbsp; &nbsp; "ignition_rule": "on",</div><div>&nbsp; &nbsp; "geozones_rule": "in",</div><div>&nbsp; &nbsp; "break_duration": 0,</div><div>&nbsp; &nbsp; "break_time_units": "ss",</div><div>&nbsp; &nbsp; "tag_name": "грузовик",</div><div>&nbsp; &nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; &nbsp; "temperature_value": 30,</div><div>&nbsp; &nbsp; "temperature_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; &nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; &nbsp; "odometer_value": 100000,</div><div>&nbsp; &nbsp; "odometer_period": "abs"</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

## GET

تحصل على إعداد الإشعار بحسب المعرّف ID.

معلمات الطلب:

-   id (إلزامي) — معرّف الإشعار ID
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php?id=123</div></td></tr></tbody></table>

### مثال على الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "Уведомление получено",</div><div>&nbsp; "method": "GET",</div><div>&nbsp; "notification": {</div><div>&nbsp; &nbsp; "id": 123,</div><div>&nbsp; &nbsp; "agent_id": 123,</div><div>&nbsp; &nbsp; "type": "speed",</div><div>&nbsp; &nbsp; "geozones": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "name": "Превышение скорости в зоне склада",</div><div>&nbsp; &nbsp; "email": true,</div><div>&nbsp; &nbsp; "emails_list": [</div><div>&nbsp; &nbsp; &nbsp; "dispatcher@example.com",</div><div>&nbsp; &nbsp; &nbsp; "manager@example.com"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "sms": true,</div><div>&nbsp; &nbsp; "phones_list": [</div><div>&nbsp; &nbsp; &nbsp; "+79001234567",</div><div>&nbsp; &nbsp; &nbsp; "+79007654321"</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "message_text": "Внимание! Превышение скорости в зоне склада.",</div><div>&nbsp; &nbsp; "webhook": true,</div><div>&nbsp; &nbsp; "webhook_url": "https://yourdomain.com/webhook-handler",</div><div>&nbsp; &nbsp; "ts": 1680000000,</div><div>&nbsp; &nbsp; "te": 1710000000,</div><div>&nbsp; &nbsp; "timezone": 3,</div><div>&nbsp; &nbsp; "zone_rule": "in",</div><div>&nbsp; &nbsp; "speed_rule": "&gt;",</div><div>&nbsp; &nbsp; "speed_value": 80,</div><div>&nbsp; &nbsp; "speed_time": 15,</div><div>&nbsp; &nbsp; "speed_time_units": "ss",</div><div>&nbsp; &nbsp; "ignition_rule": "on",</div><div>&nbsp; &nbsp; "geozones_rule": "in",</div><div>&nbsp; &nbsp; "break_duration": 0,</div><div>&nbsp; &nbsp; "break_time_units": "ss",</div><div>&nbsp; &nbsp; "tag_name": "грузовик",</div><div>&nbsp; &nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; &nbsp; "temperature_value": 30,</div><div>&nbsp; &nbsp; "temperature_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; &nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; &nbsp; "odometer_value": 100000,</div><div>&nbsp; &nbsp; "odometer_period": "abs"</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

##  PUT 

تحدّث إعداد إشعار موجود.

### الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php</div></td></tr></tbody></table>

### مثال على نص الطلب

تنسيق JSON نفسه المستخدم عند الإنشاء (POST)، ولكن بالقيم المحدّثة والمعرّف id المطلوب.

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "id": 123,</div><div>&nbsp; "agent_id": 123,</div><div>&nbsp; "type": "speed",</div><div>&nbsp; "geozones": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ],</div><div>&nbsp; "name": "Обновлённое уведомление",</div><div>&nbsp; "email": true,</div><div>&nbsp; "emails_list": ["alerts@example.com"],</div><div>&nbsp; "sms": false,</div><div>&nbsp; "phones_list": [],</div><div>&nbsp; "message_text": "Обновлённое сообщение о превышении скорости",</div><div>&nbsp; "webhook": false,</div><div>&nbsp; "webhook_url": "",</div><div>&nbsp; "ts": 1680000000,</div><div>&nbsp; "te": 1720000000,</div><div>&nbsp; "timezone": 3,</div><div>&nbsp; "zone_rule": "in",</div><div>&nbsp; "speed_rule": "&gt;",</div><div>&nbsp; "speed_value": 90,</div><div>&nbsp; "speed_time": 10,</div><div>&nbsp; "speed_time_units": "ss",</div><div>&nbsp; "ignition_rule": "off",</div><div>&nbsp; "geozones_rule": "in",</div><div>&nbsp; "break_duration": 0,</div><div>&nbsp; "break_time_units": "ss",</div><div>&nbsp; "tag_name": "фургон",</div><div>&nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; "temperature_value": 35,</div><div>&nbsp; "temperature_time": 0,</div><div>&nbsp; "disconnect_time": 0,</div><div>&nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; "odometer_value": 120000,</div><div>&nbsp; "odometer_period": "abs"</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

### مثال على الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "Уведомление успешно обновлено",</div><div>&nbsp; "method": "PUT",</div><div>&nbsp; "notification": {</div><div>&nbsp; &nbsp; "id": 123,</div><div>&nbsp; &nbsp; "agent_id": 123,</div><div>&nbsp; &nbsp; "type": "speed",</div><div>&nbsp; &nbsp; "geozones": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "name": "Склад",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "zonetype": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "points": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7558, 37.6173],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7560, 37.6180],</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [55.7565, 37.6170]</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "name": "Обновлённое уведомление",</div><div>&nbsp; &nbsp; "email": true,</div><div>&nbsp; &nbsp; "emails_list": ["alerts@example.com"],</div><div>&nbsp; &nbsp; "sms": false,</div><div>&nbsp; &nbsp; "phones_list": [],</div><div>&nbsp; &nbsp; "message_text": "Обновлённое сообщение о превышении скорости",</div><div>&nbsp; &nbsp; "webhook": false,</div><div>&nbsp; &nbsp; "webhook_url": "",</div><div>&nbsp; &nbsp; "ts": 1680000000,</div><div>&nbsp; &nbsp; "te": 1720000000,</div><div>&nbsp; &nbsp; "timezone": 3,</div><div>&nbsp; &nbsp; "zone_rule": "in",</div><div>&nbsp; &nbsp; "speed_rule": "&gt;",</div><div>&nbsp; &nbsp; "speed_value": 90,</div><div>&nbsp; &nbsp; "speed_time": 10,</div><div>&nbsp; &nbsp; "speed_time_units": "ss",</div><div>&nbsp; &nbsp; "ignition_rule": "off",</div><div>&nbsp; &nbsp; "geozones_rule": "in",</div><div>&nbsp; &nbsp; "break_duration": 0,</div><div>&nbsp; &nbsp; "break_time_units": "ss",</div><div>&nbsp; &nbsp; "tag_name": "фургон",</div><div>&nbsp; &nbsp; "temperature_rule": "&gt;",</div><div>&nbsp; &nbsp; "temperature_value": 35,</div><div>&nbsp; &nbsp; "temperature_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time": 0,</div><div>&nbsp; &nbsp; "disconnect_time_units": "ss",</div><div>&nbsp; &nbsp; "odometer_rule": "&gt;",</div><div>&nbsp; &nbsp; "odometer_value": 120000,</div><div>&nbsp; &nbsp; "odometer_period": "abs"</div><div>&nbsp; }</div><div>}</div><div>&nbsp;</div></td></tr></tbody></table>

##  DELETE 

تحذف إشعارًا واحدًا أو أكثر.

معلمات الطلب :

-   id (اختياري) — معرّف إشعار محدد
    
-   agent\_id (اختياري) — إذا تم تمريره، تُحذف جميع الإشعارات الخاصة بالوكيل المحدد
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php?id=123</div></td></tr></tbody></table>

يمكن أيضًا حذف جميع الإشعارات بحسب agent\_id:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/ptm/notification.php?agent_id=456</div></td></tr></tbody></table>

### الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "count": 1 // количество удалённых уведомлений</div><div>}</div></td></tr></tbody></table>

### وصف حقول إعدادات الإشعارات

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; الحقل</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الوصف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; معرّف الإشعار ID</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; agent_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; معرّف الوكيل (الجهاز/المركبة)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع الإشعار (speed،&nbsp;temperature،&nbsp;ignition، وغيرها)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; geozones</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مصفوفة السياجات الجغرافية التي ينطبق عليها الإشعار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم الإشعار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; email</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تفعيل الإرسال عبر البريد الإلكتروني</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; emails_list</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قائمة عناوين البريد الإلكتروني</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; sms</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تفعيل إشعارات SMS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; phones_list</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قائمة أرقام الهواتف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; webhook_url</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; عنوان URL الخاص بـ webhook</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; webhook</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تفعيل إرسال webhook</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; message_text</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نص الإشعار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ts,&nbsp;te</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الإطار الزمني لسريان الإشعار (Unix timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; timezone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; فرق التوقيت (على سبيل المثال،&nbsp;+3)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; zone_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قاعدة المنطقة (in،&nbsp;out)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; شرط السرعة (&gt;،&nbsp;&lt;،&nbsp;=)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قيمة السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مدة تجاوز السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; speed_time_units</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وحدات الزمن (ss،&nbsp;mm،&nbsp;hh)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; ignition_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حالة الإشعال (on،&nbsp;off)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; geozones_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; السلوك في السياجات الجغرافية (in،&nbsp;out)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; شرط درجة الحرارة (&gt;،&nbsp;&lt;)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; قيمة درجة الحرارة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; temperature_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مدة تجاوز درجة الحرارة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; disconnect_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مدة انقطاع اتصال الجهاز</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; disconnect_time_units</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وحدات زمن الانقطاع</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; odometer_rule</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; شرط المسافة المقطوعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; odometer_value</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المسافة المقطوعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; odometer_period</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; نوع احتساب المسافة المقطوعة (abs،&nbsp;rel)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; tag_name</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وسم الكائن (على سبيل المثال، «شاحنة»)</span></div></td></tr></tbody></table>
