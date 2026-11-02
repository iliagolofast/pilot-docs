---
title: "الأمان"
---

هذه الوظيفة مخصصة للشركاء فقط.

يوجد إعداد الأمان في لوحة المسؤول، في قسم الإعدادات.

**يمكن إعداد نوعين من التحقق:**

-   TOTP (باستخدام رمز QR)
    
-   التحقق عبر البريد الإلكتروني.
    

![](images/drex_bezopasnost_custom.png)

**مصادقة TOTP** هي "كلمة مرور لمرة واحدة تعتمد على الوقت"، وهي أحد أشكال المصادقة الثنائية.

وهي طريقة آمنة يستخدم فيها المستخدم، إضافةً إلى كلمة مروره العادية، كلمة مرور لمرة واحدة يولّدها كل 30 ثانية تطبيق المصادقة على جهازه المحمول.

**1\. كيفية إعداد مصادقة TOTP**:

نزّل تطبيق مصادقة.

ثبّت على جهازك المحمول تطبيقاً يولّد كلمات مرور لمرة واحدة، مثل Google Authentication أو Authy.

<table><tbody><tr><td><span></span></td><td><div><span><strong>Google Authentication</strong></span></div><div><span>لنظام&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=ru</span></div><div><span>لنظام iOS</span></div><div><span>https://apps.apple.com/ru/app/google-authenticator/id388497605</span></div><div>&nbsp;</div><div><span><strong>Microsoft Authentication</strong></span></div><div><span>&nbsp;لنظام&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.azure.authenticator&amp;hl=ru</span></div><div><span>لنظام iOS</span></div><div><span>https://apps.apple.com/us/app/microsoft-authenticator/id983156458</span></div><div>&nbsp;</div><div><span><strong>Authy</strong></span></div><div><span>لنظام&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.authy.authy&amp;hl=ru</span></div><div><span>لنظام iOS</span></div><div><span>https://apps.apple.com/us/app/twilio-authy/id494168017</span></div></td></tr></tbody></table>

**2\. امسح رمز QR.**

استخدم تطبيق المصادقة لمسح رمز QR الذي توفره الخدمة.

يربط ذلك حسابك بالتطبيق ويتيح توليد رموز فريدة.

![](images/drex_bezopasnost_custom_2.png)

**3\. أدخل الرمز الذي حصلت عليه.**

أدخل الرمز الحالي المعروض في التطبيق في حقل التأكيد على موقع الويب أو في التطبيق لإكمال العملية.

![](images/drex_bezopasnost_custom_3.png)

4. **كيفية استخدام مصادقة TOTP لتسجيل الدخول إلى النظام.**

\- أدخل اسم المستخدم وكلمة المرور. ابدأ بإدخال بياناتك.

\- افتح تطبيق المصادقة. على جهازك المحمول افتح التطبيق الذي استخدمته لإعداد **TOTP**.

\- أدخل كلمة المرور لمرة واحدة. انظر إلى كلمة المرور الحالية لمرة واحدة في التطبيق وأدخلها لإكمال عملية تسجيل الدخول إلى النظام.

5\. **مزايا استخدام TOTP.**

**الأمان**

حتى لو عرف شخص ما كلمة مرورك، فلن يتمكن من الوصول إلى حسابك دون كلمة المرور لمرة واحدة.

**سهولة الاستخدام**

لا يحتاج تطبيق المصادقة إلى اتصال بالإنترنت لتوليد الرمز.

**التوافق الواسع**

تدعم خدمات كثيرة **TOTP**، مما يتيح استخدام تطبيق واحد للوصول إلى حسابات مختلفة.

**المصادقة عبر البريد الإلكتروني**

لإجراء المصادقة عبر البريد الإلكتروني يجب:

-   إعداد SMTP في إعدادات الشريك.
    
-   إضافة التكوين **2FA\_EMAIL**.
    

![](images/drex_bezopasnost_custom_4.png)

![](images/drex_bezopasnost_custom_5.png)

بعد إدخال الإعدادات في تكوين الشريك، ستظهر نافذة إدخال الرمز في شاشة تسجيل الدخول الرئيسية بعد إدخال اسم المستخدم وكلمة المرور الخاصين بلوحة المسؤول.

تكوين الإعداد لتسجيل الدخول إلى واجهة المستخدم بالرمز الذي يُستلم من التطبيق.

![](images/drex_bezopasnost_custom_6.png)

شاشة تسجيل الدخول وإدخال الرمز.

استخدم البريد الإلكتروني ونافذة الإدخال.

![](images/drex_bezopasnost_custom_7.png)

المصادقة متعددة العوامل افتراضياً

في الجزء الإداري يجب إضافة مفتاح للشريك أو للحساب.

بعد ذلك سيُطلب من جميع مستخدمي هذا الحساب إضافة مصادقة TOTP إلى حساباتهم.

**TOTP = 1**

![](images/drex_bezopasnost_custom_8.png)
