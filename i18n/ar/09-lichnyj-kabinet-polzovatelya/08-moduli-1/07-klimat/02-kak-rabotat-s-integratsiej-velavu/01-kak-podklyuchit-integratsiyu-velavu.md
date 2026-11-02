---
title: "كيفية ربط تكامل Velavu"
---

يُضبط التكامل مع Velavu على مستوى حساب الشريك عبر معاملات التهيئة.

<table><tbody><tr><td><span></span></td><td><div>ضبط التكامل متاح فقط للمستخدمين الذين لديهم صلاحيات المسؤول الرئيسي. إذا لم يكن لديك مستوى الوصول المناسب، فتواصل مع خدمة الدعم.</div></td></tr></tbody></table>

1\. في لوحة المسؤول انتقل إلى قسم «الشركاء»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom.png)

2\. انقر نقراً مزدوجاً على الشريك المطلوب — ستُفتح بطاقته

3\. انتقل إلى علامة التبويب «التهيئة»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_2.png)

4\. انقر الزر «إضافة»

5\. في القائمة المنسدلة اختر المفتاح **Velavu**. في قيمة المعامل الصق تهيئة Velavu بصيغة JSON.

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_3.png)

مثال على تهيئة JSON لـ Velavu

<table><tbody><tr><td><span></span></td><td><div><span>[</span></div><div><span>&nbsp;{</span></div><div><span>&nbsp;"broker": "iot.velavu.com",</span></div><div><span>&nbsp;"port": "8883",</span></div><div><span>&nbsp;"customer_id": "YOUR_CUSTOMER_ID",</span></div><div><span>&nbsp;"api_token": "YOUR_API_TOKEN",</span></div><div><span>&nbsp;"cert": "-----BEGIN CERTIFICATE-----\nYOUR_CERTIFICATE\n-----END CERTIFICATE-----",</span></div><div><span>&nbsp;"key": "-----BEGIN RSA PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END RSA PRIVATE KEY-----"</span></div><div><span>&nbsp;}</span></div><div><span>]</span></div></td></tr></tbody></table>

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>المعامل</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>الوصف</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>broker</span></div></td><td colspan="1" rowspan="1"><div><span>عنوان وسيط MQTT الخاص بـ Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>port</span></div></td><td colspan="1" rowspan="1"><div><span>منفذ الاتصال</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>customer_id</span></div></td><td colspan="1" rowspan="1"><div><span>معرّف العميل في نظام Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>api_token</span></div></td><td colspan="1" rowspan="1"><div><span>رمز الوصول إلى API الخاص بـ Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>cert</span></div></td><td colspan="1" rowspan="1"><div><span>شهادة SSL للاتصال</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>key</span></div></td><td colspan="1" rowspan="1"><div><span>المفتاح الخاص لـ SSL</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>تحصل على جميع البيانات (customer_id وapi_token والشهادة والمفتاح) من حسابك في Velavu.</div></td></tr></tbody></table>

6\. احفظ التهيئة. بعد ذلك يصبح التكامل متاحاً للحسابات التابعة لهذا الشريك
