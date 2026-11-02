---
title: "تقرير حالات التوقف والاصطفاف"
---

يحصل هذا API على معلومات عن حالات توقف المركبة واصطفافها عن الفترة المحددة. يمكنك معرفة الإحداثيات والمدة وكذلك عنوان مكان التوقف أو الاصطفاف.

## كيفية الحصول على البيانات

### الطريقة

GET

### عنوان الطلب

للحصول على البيانات استخدم العنوان:  https://<server\_address>/api/api.php?

### معاملات الطلب

-   cmd=runstops — أمر API للحصول على تقرير حالات التوقف والاصطفاف
    
-   imei — معرّف المركبة في النظام
    
-   start — وقت بداية العينة (Unix timestamp)
    
-   stop — وقت نهاية العينة (Unix timestamp)
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الطلب

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=runstops&amp;start=1676840400&amp;stop=1676926800&amp;imei=16518<span>&amp;node=1</span></div></td></tr></tbody></table>

الاستجابة

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; &nbsp; "code": 0,</div><div>&nbsp; &nbsp; "msg": "OK",</div><div>&nbsp; &nbsp; "stops": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676840400,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676873376,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 32976,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.733388",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "61.051853",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Р-351",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Белоярский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "624053",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676875342,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676880065,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 4723,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.893278",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "60.770452",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Екатеринбургская кольцевая автомобильная дорога",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Берёзовский городской округ",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623703",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; "parkings": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ts": 1676887881,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "te": 1676889637,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dur": 1756,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "56.781017",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "58.40189",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "address": {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "road": "Подъезд к д. Зобнина от км 216+740 а/д «г. Пермь — г. Екатеринбург»",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "county": "Achitsky District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "state": "Sverdlovsk Oblast",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "region": "Ural Federal District",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "postcode": "623235",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country": "Russia",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "country_code": "ru"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; ]</div><div>}</div></td></tr></tbody></table>

تعيد استجابة طلب API ما يلي:

-   code — رمز النتيجة (0 — نجاح)
    
-   msg — رسالة الخادم (مثل "OK")
    
-   stops — مصفوفة بيانات حالات التوقف:
    
-   ts — وقت بداية التوقف (Unix timestamp)
    
-   te — وقت نهاية التوقف (Unix timestamp)
    
-   dur — مدة التوقف بالثواني
    
-   lat — خط عرض النقطة
    
-   lon — خط طول النقطة
    
-   address — معلومات عن عنوان التوقف (الشارع والحي والمنطقة والإقليم والرمز البريدي والبلد ورمز البلد)
    
-   parkings — مصفوفة بيانات حالات الاصطفاف (بحقول مماثلة لحقول stops)
