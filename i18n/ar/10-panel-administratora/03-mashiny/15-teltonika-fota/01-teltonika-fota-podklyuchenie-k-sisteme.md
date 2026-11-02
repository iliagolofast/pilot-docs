---
title: "Teltonika FOTA. الاتصال بالنظام"
---

يوفر النظام تكاملًا مع FOTA من شركة Teltonika.

يتيح هذا التكامل ضبط أجهزة Teltonika من واجهة نظام PILOT.

يمكن تفعيل هذه الوظيفة للشريك وكذلك لحساب بعينه (عقد).

**تفعيل Teltonika FOTA WEB في** PILOT

للإدارة عن بُعد لتكوين أجهزة Teltonika من منصة PILOT يجب تفعيل التكامل، ولهذا نفّذ الخطوات التالية.

<table><tbody><tr><td><span></span></td><td><div><span>1. سجّل الدخول بحسابك في Teltonika FOTA WEB <strong>(</strong></span><a href="https://fm.teltonika.lt/"><span><strong>https://fm.teltonika.lt</strong></span></a><span><strong>)</strong></span></div><div><span>2. أنشئ API Key وانسخه.</span></div></td></tr></tbody></table>

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom.png)

3.أدخل اسمًا اختياريًا لـ API Token وانقر الزر Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_2.png)

4\. أدخل اسمًا اختياريًا لـ API Token وانقر الزر Create.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_3.png)

5\. انسخ قيمة token التي تم إنشاؤها.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_4.png)

افتح إعدادات حسابك في لوحة المسؤول وأضف فيها سجلًا جديدًا

افتح قسم "التكوين" وأضف المفتاح **fotaTokens**.

صيغة المفتاح fotaTokens وقيمته: {"<Name>":"<Key>","<Name1>":"<Key1>","<NameN>":"<KeyN>"}

<Name> - اسم اختياري

<Key> - API Key الذي تم الحصول عليه في واجهة Teltonika FOTA

يمكنك تحديد أكثر من مفتاح مفصولة بفواصل.

![](images/drex_teltonika_fota__podklyuchenie_k_sisteme_custom_5.png)
