---
title: "Etisalat"
---

**Etisalat SIM** — شرائح SIM والخدمات المرتبطة بها التي تقدمها Etisalat، إحدى أكبر شركات الاتصالات في الشرق الأوسط وإفريقيا وآسيا.

**منصة Jasper،** منصة للتحكم في شرائح SIM لاتصالات M2M وإدارتها. تتيح استخدام معاملات إعداد متنوعة والحصول على سجل كامل للاتصالات بين الأجهزة في الوقت الفعلي. تُقدَّم البيانات بصيغة رقمية ورسومية. وهي مركز تحكم موحد متاح عن بُعد في أي وقت مناسب.

نذكّر بأن M2M (machine-to-machine) حل مصمم لضمان تبادل البيانات اللاسلكي بين الأجهزة المختلفة (أجهزة الصراف الآلي، والأجهزة الطرفية، وأنظمة الحماية، والحساسات وغيرها) ومركز تحكم موحد.

**التوصيل**

لإعداد التكامل يجب كتابة الإعداد في تكوين نموذج الشريك.

<table><tbody><tr><td><span></span></td><td><div><span>التكوين</span></div><div><span><strong>&nbsp;{"username": "xxxx","api_key": "72e4b70e-0429-44fb-9d9a-63xxxxx592a8","account_id": "10003xxxx"}</strong></span></div><div>&nbsp;</div></td></tr></tbody></table>

![](images/drex_etisalat_custom.png)

انتقل إلى قسم شرائح SIM لإدارتها.

![](images/drex_etisalat_custom_2.png)

نافذة إدارة شريحة SIM.

![](images/drex_etisalat_custom_3.png)

كل المعلومات التي يمكن الحصول عليها عن شريحة SIM.

**قائمة الإجراءات:**

الانتقال إلى المركبة.

![](images/drex_etisalat_custom_4.png)

إدارة حالة شريحة SIM.

يمكن تغيير حالة SIM بالنقر المزدوج.

![](images/drex_etisalat_custom_5.png)

username - اسم المستخدم في لوحة إدارة etisalat

api\_key - يُنشأ هنا 

[https://etisalat.jasperwireless.ae/provision/ui/help/help.html](https://etisalat.jasperwireless.ae/provision/ui/help/help.html)

account\_id - هو معرّف الحساب في etisalat، يمكن الاطلاع عليه هنا

[https://etisalat.jasperwireless.ae/provision/ui/admin/accts/acctDetails.html?acctId=100031607](https://etisalat.jasperwireless.ae/provision/ui/admin/accts/acctDetails.html?acctId=100031607)

![](images/drex_etisalat_custom_6.png)

**إرسال رسالة SMS**

يمكن إرسال رسالة SMS بحجم أقل من 320 حرفًا.

![](images/drex_etisalat_custom_7.png)

**تحديد نوع الحد.**

DEFAULT. لا يمكن للجهاز تجاوز حد البيانات.

TEMPORARY\_OVERRIDE. يمكن للجهاز استخدام أي حجم من البيانات حتى نهاية دورة الفوترة الحالية، وبعدها يبدأ مركز التحكم في تطبيق حد البيانات المحدد في خطة التعرفة.

PERMANENT\_OVERRIDE. يمكن للجهاز استخدام أي حجم من البيانات بغض النظر عن حد البيانات المحدد في خطة التعرفة.

![](images/drex_etisalat_custom_8.png)

للحصول على معلومات إضافية حول هذه الإعدادات، يرجى التواصل مع خدمة الدعم الفني.
