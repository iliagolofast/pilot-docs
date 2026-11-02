---
title: "إعداد المسجلات المرئية Jimi"
---

تُعدّ المسجلات المرئية Jimi بواسطة أوامر نصية. ما عليك سوى إرسال الأمر المطلوب إلى الجهاز، فيبدأ العمل بالطريقة التي تناسبك.

باستخدام هذه الأوامر يمكنك:

— توصيل المسجل بالخادم

— تحديد الجهة التي يُرسَل إليها الفيديو وبيانات الرحلات

— تفعيل البث المباشر عبر الإنترنت

— إعداد التحميل التلقائي للفيديو عند وقوع أحداث معينة

في هذه المقالة نستعرض الأوامر التي تساعدك على تشغيل الجهاز وإعداده بشكل صحيح.

## أوامر الإعداد الأساسية

### 1\. السماح بالاتصال بالخادم

<table><tbody><tr><td><span></span></td><td><div>COREKITSW,0</div></td></tr></tbody></table>

يتيح هذا الأمر للمسجل المرئي الاتصال بخادم الفيديو PILOT. أي أن الأمر يفعّل إمكانية عمل الجهاز مع المنصة.

### 2\. إعداد خادم القياس عن بُعد

<table><tbody><tr><td><span></span></td><td><div>SERVER,1,&lt;اسم النطاق&gt;,20056</div><div>أو</div><div>SERVER,0,&lt;عنوان IP&gt;,20056</div></td></tr></tbody></table>

هنا نحدد الخادم الذي سيُرسَل إليه القياس عن بُعد (بيانات الحركة والسرعة والأحداث).

-   1 — إذا كنت تستخدم اسم نطاق (على سبيل المثال: server.example.com)
    
-   0 — إذا كنت تتصل بعنوان IP (على سبيل المثال: 192.168.1.100)
    
-   20056 — منفذ الاتصال
    

### 3\. إعداد خادم تحميل الفيديو

<table><tbody><tr><td><span></span></td><td><div>UPLOAD,&lt;https://server_address/upload&gt;</div></td></tr></tbody></table>

عنوان الخادم الذي ستُرسَل إليه ملفات الفيديو، على سبيل المثال، عند التشغيل أو تحميل الأحداث.

### 4\. إعداد خادم البث المباشر

<table><tbody><tr><td><span></span></td><td><div>RSERVICE,&lt;rtmp://server_address/live&gt;</div></td></tr></tbody></table>

يحدد هذا الأمر خادم RTMP للبث المباشر للفيديو في الوقت الفعلي.

### 5\. إعداد خادم قائمة الملفات

<table><tbody><tr><td><span></span></td><td><div>FILELIST,&lt;https://server_address/filelist&gt;</div></td></tr></tbody></table>

العنوان الذي يرسل إليه المسجل قائمة التسجيلات المرئية المتاحة.

### 6\. التحميل التلقائي لفيديو الأحداث

<table><tbody><tr><td><span></span></td><td><div>UPLOADSW,&lt;A&gt;,&lt;B&gt;</div></td></tr></tbody></table>

باستخدام هذا الأمر يمكنك تحديد الأحداث التي يجب أن تؤدي إلى التحميل التلقائي لمقاطع الفيديو، والكاميرات التي ستُستخدم لذلك.

-   A — الحدث الذي سيُحمَّل الفيديو عند وقوعه. على سبيل المثال: CRASH (حادث)، SOS (زر الطوارئ)، OVERSPEED (تجاوز السرعة).
    
-   B — طريقة التحميل:
    

— OFF — تعطيل التحميل التلقائي

— ON — تحميل الفيديو من كلتا الكاميرتين (الأمامية والداخلية)

— 1 — تحميل الفيديو من الكاميرا الأمامية فقط

— 2 — تحميل الفيديو من الكاميرا الداخلية فقط

على سبيل المثال: UPLOADSW,CRASH,ON — عند وقوع الحدث «حادث» سيحمّل المسجل تلقائيًا الفيديو من كلتا الكاميرتين.

## قائمة الأحداث

يحتوي الجدول أدناه على جميع الأحداث التي يمكن للمسجل التعرف إليها. ويمكن استخدامها في الأمر UPLOADSW.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; №</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; رمز الحدث</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; المعنى</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الضغط على زر SOS</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CRASH</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حادث</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VIBRATE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اهتزاز / صدمة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OVERSPEED</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تجاوز السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDACC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تسارع حاد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 6</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDDEC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; فرملة حادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDTURN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; انعطاف حاد</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 8</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DRIVE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; وضع الحركة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 9</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; POWER</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تغيّر الطاقة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VOLTAGELOW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; جهد منخفض</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 11</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CLOSEEYES</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; إرهاق / إغلاق العينين</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 12</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; YAWN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; التثاؤب، علامة على الإرهاق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 13</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DISTRACTION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; انشغال السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 14</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SMOKING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; التدخين أثناء القيادة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 15</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; PHONECALLING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; استخدام الهاتف</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 16</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYOFF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; إيقاف المرحل</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 17</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYRECOVERY</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; استعادة المرحل</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 18</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; MISSINGFACE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لم يتم اكتشاف الوجه</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 19</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; NOSDCARD</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; لا توجد بطاقة SD</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SDCARDMOUNT</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; تم تركيب بطاقة SD</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 21</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OIL</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حدث حساس الزيت</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 22</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OILTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خطأ في الزيت</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 23</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TEMPTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ارتفاع حرارة المحرك</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 24</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خطأ UART</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 25</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; LANEDEPARTURE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الخروج من المسار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 26</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VEHICLETOOCLOSE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مركبة أخرى قريبة جدًا</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 27</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; FORWARDCOLLISION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خطر الاصطدام</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 28</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART_DOOR</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حساس الباب</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 29</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اكتشاف الوجه (AI)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خطأ في التعرف على الوجه</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 31</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اكتشاف حزام الأمان</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 32</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ANWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حزام الأمان غير مربوط</span></div></td></tr></tbody></table>
