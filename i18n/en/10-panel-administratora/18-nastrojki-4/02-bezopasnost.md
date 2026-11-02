---
title: "Security"
---

This function is available to partners only.

Security settings are located in the admin panel, in the settings section.

**Two types of verification can be set up:**

-   TOTP (via QR code)
    
-   Verification by e-mail.
    

![](images/drex_bezopasnost_custom.png)

**TOTP authentication** is a “time-based one-time password” and is a form of two-factor authentication.

It is a secure method in which, in addition to their standard password, the user enters a one-time password generated every 30 seconds by an authentication app on the user’s mobile device.

**1\. How to set up** **TOTP authentication**:

Download an authentication app.

Install an app that generates one-time passwords, such as Google Authenticator or Authy, on your mobile device.

<table><tbody><tr><td><span></span></td><td><div><span><strong>Google Authentication</strong></span></div><div><span>for&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=ru</span></div><div><span>for iOS</span></div><div><span>https://apps.apple.com/ru/app/google-authenticator/id388497605</span></div><div>&nbsp;</div><div><span><strong>Microsoft Authentication</strong></span></div><div><span>&nbsp;for&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.azure.authenticator&amp;hl=ru</span></div><div><span>for iOS</span></div><div><span>https://apps.apple.com/us/app/microsoft-authenticator/id983156458</span></div><div>&nbsp;</div><div><span><strong>Authy</strong></span></div><div><span>for&nbsp; &nbsp; Android</span></div><div><span>https://play.google.com/store/apps/details?id=com.authy.authy&amp;hl=ru</span></div><div><span>for iOS</span></div><div><span>https://apps.apple.com/us/app/twilio-authy/id494168017</span></div></td></tr></tbody></table>

**2\. Scan the QR code.**

Use the authentication app to scan the QR code provided by the service.

This links your account to the app and lets it generate unique codes.

![](images/drex_bezopasnost_custom_2.png)

**3\. Enter the code you received.**

Enter the current code shown in the app into the confirmation field on the web site or in the application to complete the process.

![](images/drex_bezopasnost_custom_3.png)

4. **How to use TOTP authentication to log in.**

\- Enter your user name and password. Start by entering your credentials.

\- Open the authentication app. On your mobile device, open the app you used to set up **TOTP**.

\- Enter the one-time password. Look at the current one-time password in the app and enter it to complete the login process.

5\. **Benefits of using TOTP.**

**Security**

Even if someone knows your password, they cannot access your account without the one-time password.

**Convenience**

The authentication app does not need an internet connection to generate the code.

**Versatility**

Many services support **TOTP**, so you can use a single app to access different accounts.

**E-mail authentication**

To authenticate by e-mail, you need to:

-   Set up SMTP in the partner settings.
    
-   Add the **2FA\_EMAIL** configuration.
    

![](images/drex_bezopasnost_custom_4.png)

![](images/drex_bezopasnost_custom_5.png)

After the settings are added to the partner configuration, a code entry window appears on the main login screen once you enter the login and password for the admin panel.

Configuration for logging in to the user interface with a code received from the app.

![](images/drex_bezopasnost_custom_6.png)

Login and code entry screen.

Use your e-mail and the entry window.

![](images/drex_bezopasnost_custom_7.png)

Multi-factor authentication by default

In the admin part, add a key for the partner or account.

All users of this account will then be prompted to add TOTP authorization to their accounts.

**TOTP = 1**

![](images/drex_bezopasnost_custom_8.png)
