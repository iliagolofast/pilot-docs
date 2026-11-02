---
title: "أوراق الطريق"
---

تُستخدم واجهة API هذه للحصول على معلومات عن أوراق الطريق (waybill) خلال فترة محددة.

باستخدامها يمكنك:

— الحصول على قائمة المهام لكل وكيل

— الاطلاع على أوقات التنفيذ المخططة والفعلية

— معرفة حالات التنفيذ وتفاصيل نقاط المسار

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات، استخدم العنوان: https://tasks.<server\_address>/backend/public/get\_waybill\_for\_pilot

### معلمات الطلب

from\_ts — وقت بداية العينة (Unix timestamp، مثال: 1536181200)

to\_ts — وقت نهاية العينة (Unix timestamp، مثال: 1538773200)

agents — قائمة معرّفات الوكلاء مفصولة بفواصل (على سبيل المثال: 13128,13130,...)

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/get_waybill_for_pilot?from_ts=1536181200&amp;to_ts=1538773200&amp;agents=13128,13130,21055</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "",</div><div>&nbsp; "items": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 13128,</div><div>&nbsp; &nbsp; &nbsp; "c_begin_time": "1536200000",</div><div>&nbsp; &nbsp; &nbsp; "c_end_time": "1536210000",</div><div>&nbsp; &nbsp; &nbsp; "c_information": "{\"route\":\"Маршрут №54\",\"driver\":\"Иванов И.И.\"}",</div><div>&nbsp; &nbsp; &nbsp; "c_initiator": "Диспетчер",</div><div>&nbsp; &nbsp; &nbsp; "c_progress_time": "1536200500",</div><div>&nbsp; &nbsp; &nbsp; "c_running_time": "1536200300",</div><div>&nbsp; &nbsp; &nbsp; "c_status_id": 2,</div><div>&nbsp; &nbsp; &nbsp; "c_status_name": "Выполнено",</div><div>&nbsp; &nbsp; &nbsp; "id": 98765,</div><div>&nbsp; &nbsp; &nbsp; "points_info": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "point_id": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.7558",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "37.6173",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "visited_at": "1536200600"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   success — نتيجة التنفيذ (true — نجاح، false — خطأ)
    
-   msg — رسالة الخطأ (إن وُجدت)
    
-   items — مصفوفة بيانات المهام
    

لكل مهمة:

agent\_id — معرّف الوكيل

c\_begin\_time — الوقت المخطط لبدء تنفيذ المهمة

c\_end\_time — الوقت الفعلي لإنهاء المهمة

c\_information — سلسلة نصية بمعلومات إضافية عن المهمة (JSON، وتعتمد على القالب)

c\_initiator — مقدّم الطلب (من أنشأ المهمة)

c\_progress\_time — الوقت الفعلي لزيارة النقطة الأولى

c\_running\_time — الوقت الفعلي للانطلاق لتنفيذ المهمة

c\_status\_id — معرّف حالة المهمة

c\_status\_name — وصف حالة المهمة

id — معرّف المهمة في نظام PTM

points\_info — مصفوفة معلومات عن نقاط المسار التي تمت زيارتها
