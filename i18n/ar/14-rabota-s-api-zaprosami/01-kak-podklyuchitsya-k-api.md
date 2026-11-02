---
title: "كيفية الاتصال بـ API"
---

في هذا المقال نشرح كيفية المصادقة وتنفيذ طلب إلى API. بعد ذلك ستتمكن من إرسال الأوامر إلى الخادم واستلام البيانات منه.

### عنوان API

تُرسل جميع الطلبات إلى العنوان:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php</div></td></tr></tbody></table>

<server\_address> — هو عنوان الخادم أو المضيف الذي يعمل عليه PILOT.

على سبيل المثال:

-   للمستخدمين: https://pilot-gps.com/api/api.php
    
-   للمسؤولين: https://admin.pilot-gps.com/ax/api.php
    

قد يوجد API في «مجلدات» مختلفة من المشروع، وينعكس ذلك في عنوان الطلب، مثلًا:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/api.php</div><div>https://&lt;server_address&gt;/ax/api.php</div></td></tr></tbody></table>

المجلدات (api وbackend وax وغيرها) ليست سوى بنية المشروع. وهي توضح مجموعة الأوامر التي تتعامل معها. استخدم دائمًا المسار الكامل للمجلد المذكور في أمر API المعيّن، وإلا فلن ينجح الطلب.

### نوع المصادقة

يُستخدم Basic Auth للاتصال بـ API.

في API العادي (للمستخدم) استخدم لتسجيل الدخول اسم المستخدم وكلمة المرور الخاصين بحسابك.

وللعمل مع API المسؤول استخدم اسم المستخدم وكلمة المرور الخاصين بالمسؤول.

### شكل الطلب

الصيغة العامة للطلب كما يلي:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;</div></td></tr></tbody></table>

-   cmd — الأمر الذي تريد تنفيذه
    
-   node — رقم العقدة التي يجب تنفيذ الأمر عليها
    

### مثال على الاستجابة

سيعيد الخادم استجابة لطلبك بصيغة JSON:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; ...البيانات المطلوبة...</div><div>}</div></td></tr></tbody></table>

-   code = 0 — تمت العملية بنجاح
    
-   code = 1 — حدث خطأ
    
-   msg — رسالة من الخادم (مثل "OK" أو وصف الخطأ)
    

إذا كان العمل بصيغة XML أنسب لك، فأضف إلى الطلب المعامل out=xml وستصلك النتيجة بصيغة XML.

مثال على الطلب:

<table><tbody><tr><td><span></span></td><td><div>https://&lt;address&gt;/api/api.php?cmd=&lt;command&gt;&amp;node=&lt;node_num&gt;&amp;out=xml</div></td></tr></tbody></table>

ستكون الاستجابة في هذه الحالة كما يلي:

<table><tbody><tr><td><span></span></td><td><div>&lt;response&gt;</div><div>&nbsp; &lt;code&gt;0&lt;/code&gt;</div><div>&nbsp; &lt;msg&gt;OK&lt;/msg&gt;</div><div>&nbsp; ...البيانات المطلوبة...</div><div>&lt;/response&gt;</div></td></tr></tbody></table>

إذا كنت قد بدأت للتو التعرّف على API، فنوصي بقراءة مقال [«العمل مع طلبات API»](index.html) أولًا لفهم ما هي الأوامر والمعاملات وصيغ البيانات.
