---
title: "حساب المسار ووقت الوصول"
---

تُنشئ واجهة API هذه مسارًا بين نقطتين وتحصل على توقع لوقت الوصول بحسب نوع وسيلة النقل المختار.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

لتنفيذ الطلب، استخدم العنوان: https://<server\_address>/api/api.php?

### معلمات الطلب

-   cmd = route — أمر إنشاء المسار
    
-   mode — نوع وسيلة النقل، وهو أحد ما يلي:
    
-   bicycle — دراجة هوائية
    
-   bus — حافلة
    
-   car — سيارة
    
-   pedestrian — مشاة
    
-   scooter — سكوتر
    
-   taxi — سيارة أجرة
    
-   truck — مركبة شحن
    
-   origin — إحداثيات نقطة الانطلاق (lat,long)
    
-   destination — إحداثيات نقطة الوصول (lat,long)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على طلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=route&amp;mode=bus&amp;origin=47.211908,39.613767&amp;destination=47.201699,39.668183&amp;node=1</div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "data": {</div><div>&nbsp; &nbsp; "routes": [</div><div>&nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "id": "79de74af-5040-441a-ab7a-62d3d9f7a4b4",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; "sections": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "id": "2cc5fff7-fd4f-43ac-bcda-00d662207c63",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "vehicle",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "departure": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2023-02-22T09:40:07+03:00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "place",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.2119,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.61372</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "originalLocation": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.211908,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.613767</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "arrival": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2023-02-22T09:52:32+03:00",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "place": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "place",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "location": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.2017113,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.668221</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "originalLocation": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": 47.201699,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "long": 39.668183</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "summary": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "duration": 745,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "length": 5452,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "baseDuration": 530</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "transport": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mode": "bus"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>&nbsp; }</div><div>}</div></td></tr></tbody></table>

عند إرسال طلب API تُعاد القيم التالية:

-   code — رمز النتيجة (0 = نجاح)
    
-   routes — قائمة المسارات التي تم إنشاؤها
    
-   sections — مقاطع المسار مع بياناتها:
    
-   departure / arrival — وقت وإحداثيات بداية المسار ونهايته
    
-   summary — معلومات عن مدة المسار وطوله
    
-   transport.mode — نوع وسيلة النقل المختار
