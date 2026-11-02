---
title: "كيفية العمل مع إشعارات Webhook"
---

Webhook هو طريقة لنقل بيانات الأحداث تلقائيًا من النظام إلى خدمة خارجية أو إلى الخادم الخاص بك.

على سبيل المثال، إذا تجاوزت المركبة السرعة المحددة، سيرسل النظام بنفسه طلبًا إلى العنوان الذي حددته ويمرّر إليه معلومات عن الحدث.

### كيف تعمل إشعارات Webhook

1\. تحدد عنوان URL الذي ستُرسَل إليه البيانات

2\. عند تفعيل الإشعار يرسل النظام طلب POST يحتوي على JSON

3\. يستقبل الخادم لديك البيانات ويعالجها بالطريقة التي تحتاجها

قبل البدء تأكد من أن:

— عنوان URL صحيح ومتاح

— الخادم يردّ بالرمز 200 (OK)

— إذا لم يرد الخادم أو أعاد خطأ، فسيُدرج العنوان مؤقتًا في القائمة السوداء

## كيفية إعداد Webhook

1\. انتقل إلى [إنشاء](kak-sozdat-uvedomlenie.html) الإشعار أو تعديله

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom.png)

2\. في قسم «النوع والاسم» اختر Webhook كطريقة للإرسال

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_2.png)

3\. لإعداد إشعارات Webhook، اضغط على حقل التعديل ![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_3.png) — ستُفتح نافذة Webhook Details التي تُحدَّد فيها معاملات إرسال البيانات.

سترى في نافذة Webhook Details ثلاثة حقول:

![كيفية العمل مع إشعارات Webhook](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen.png)

<table><tbody><tr><td><div><strong>1. URL</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

حدد العنوان الذي ستُرسَل إليه البيانات.

<table><tbody><tr><td><div><strong>2. Header (الترويسة)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

يُحدَّد هنا تنسيق البيانات المرسلة. القيمة المطلوبة مضبوطة افتراضيًا:

<table><tbody><tr><td><span></span></td><td><div>["ContentType: application/json"]</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>3. Body (متن الطلب)</strong></div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

هذه هي البيانات التي ستُرسَل. يُستخدم افتراضيًا القالب التالي:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": "%AGENTID%",</div><div>&nbsp;"vehiclenumber": "%VEHNUM%",</div><div>&nbsp;"ts": "%TS%",</div><div>&nbsp;"lat": "%LAT%",</div><div>&nbsp;"lon": "%LON%",</div><div>&nbsp;"speed": "%SPEED%",</div><div>&nbsp;"data": "%DATA%",</div><div>&nbsp;"zone": "%ZONE%",</div><div>&nbsp;"driver": "%DRIVER%"</div><div>}</div></td></tr></tbody></table>

<table><tbody><tr><td><div><strong>4. متغيرات متن الطلب</strong></div><div>يمكنك تعديل متن الطلب أو استكماله باستخدام&nbsp;المتغيرات المسموح بها&nbsp;من القائمة على اليمين.</div></td></tr><tr><td><div><a href="#top"></a></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>التزم بصيغة الكتابة —&nbsp;"value":&nbsp; "%VALUE%". إذا اختلّت الصياغة فلن يعمل Webhook.</div></td></tr></tbody></table>

**المتغيرات المسموح بها**

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span>&nbsp; المتغير</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ما الذي يمرّره</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ACCOUNTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID الحساب</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %AGENTID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID الكائن</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %VEHNUM%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; رقم المركبة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %TS%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; الطابع الزمني (timestamp)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATETIME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; التاريخ والوقت</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LAT%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خط العرض</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %LON%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; خط الطول</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; السرعة</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ODO%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; المسافة المقطوعة (حسب الحساس)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DATA%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; بيانات الإشعار</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; السياج الجغرافي</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_ID%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID أول سياج جغرافي</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %ZONE_NAME%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; اسم أول سياج جغرافي</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DRIVER%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; السائق</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %MAXSPEED%</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; السرعة القصوى (لإشعارات تجاوز السرعة)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %DUR%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; مدة التجاوز</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; %SPEEDLIMIT%&nbsp;</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; حد السرعة المحدد (مراقبة السرعة)</span></div></td></tr></tbody></table>

### كيفية إدراج قيمة الحساس

إذا كنت بحاجة إلى تمرير بيانات حساس معيّن:

1\. افتح تبويب [«الحساسات»](../../datchiki-1/dobavlenie-datchika.html#как_добавить_датчик)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_4.png)

![كيفية العمل مع إشعارات Webhook](images/drex_kak_rabotat_s_webhook_uvedomleniyami__screen_2.png)

2\. انسخ الاسم الدقيق للحساس

3\. ارجع إلى نافذة إعدادات Webhook وألصق في حقل Body متغيرًا بالصيغة: %اسم الحساس%. على سبيل المثال، إذا كان اسم الحساس Fuel sensor status، فاكتب %Fuel sensor status%.

### كيفية الحصول على البيانات الخام

يمكن تمرير البيانات مباشرة من الجهاز:

1\. انتقل إلى تبويب [«النقاط»](../../obekty-1/menyu-obekta.html#сырые_точки)

![](images/drex_kak_rabotat_s_webhook_uvedomleniyami__custom_5.png)

2\. ابحث عن المعامل في عمود «البيانات غير المعالجة»

3\. ألصقه في حقل Body في نافذة Webhook بالصيغة %اسم المعامل%. على سبيل المثال، إذا كان اسم المعامل Valid، فاكتب %Valid%.

## مثال على الطلب

عند تفعيل الإشعار ستصل إلى الخادم لديك بيانات بالشكل التالي تقريبًا:

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp;"agent_id": 4328,</div><div>&nbsp;"ts": 1545254055,</div><div>&nbsp;"data": ["У286НМ 67", "Parkingdur", "2", "1", "мм"]</div><div>}</div></td></tr></tbody></table>

تعتمد مجموعة البيانات على المتغيرات التي حددتها في متن الطلب وعلى نوع الإشعار الذي تم إعداده.
