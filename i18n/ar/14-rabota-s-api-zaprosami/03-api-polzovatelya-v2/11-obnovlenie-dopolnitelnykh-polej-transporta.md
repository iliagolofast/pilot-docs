---
title: "تحديث الحقول الإضافية للمركبة"
---

يغيّر هذا API قيم [الحقول الإضافية](../../panel-administratora/dogovor/redaktor-polej-transportnogo-sredstva.html) للمركبة بطلب واحد بحسب agent\_id أو imei. يمكن تغيير جميع الحقول دفعة واحدة أو بعضها، وعدد الحقول غير محدود.

### الطريقة

POST

### عنوان الطلب

للحصول على البيانات استخدم العنوان: https://<server\_address>/api/api.php

### الترويسات

Content-Type: application/json

Authorization: Basic <your\_credentials>

### معاملات الطلب

-   cmd=agent\_update\_custom\_fields — أمر API
    
-   agent\_id — معرّف المركبة (إذا لم تستخدم imei).
    
-   imei — IMEI جهاز المركبة (إذا لم تستخدم agent\_id).
    
-   custom\_fields — كائن بأزواج مفتاح-قيمة لتحديث الحقول الإضافية
    

في custom\_fields يمكن تحديد أي عدد من الحقول، مثل extra\_field1 وextra\_field2 و… extra\_fieldN (بشرط أن تكون هذه الحقول منشأة في الحساب). يمكن أن تكون قيم الحقول أرقامًا أو سلاسل نصية أو قيمًا منطقية

### مثال على الطلب

تحديث عدة حقول بحسب agent\_id:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"agent_id": 30547,</div><div>"custom_fields": {</div><div>"extra_field1": "Путевой лист №123",</div><div>"extra_field2": "2025-11-01",</div><div>"extra_field7": "+79000000000"</div><div>}</div><div>}'</div></td></tr></tbody></table>

التحديث بحسب imei:

<table><tbody><tr><td><span></span></td><td><div>curl --location '<span>https://</span>&lt;server_address&gt;<span>/api/api.php</span>'</div><div>--header 'Content-Type: application/json'</div><div>--header 'Authorization: Basic dGVzdDExMUB0ZXN0LnJ1OkRlbW9fMjAyMg==' \'</div><div>--data '{</div><div>"cmd": "agent_update_custom_fields",</div><div>"imei": "359339099999999",</div><div>"custom_fields": {</div><div>"extra_field3": "Пропуск №A12345",</div><div>"extra_field4": "2025-12-31"</div><div>}</div><div>}'</div></td></tr></tbody></table>

### مثال على الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>"code": 1,</div><div>"msg": "OK"</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز التنفيذ: 1 — نجاح، 0 — خطأ
    
-   msg — وصف نصي للنتيجة (مثل "OK" أو رسالة الخطأ)
