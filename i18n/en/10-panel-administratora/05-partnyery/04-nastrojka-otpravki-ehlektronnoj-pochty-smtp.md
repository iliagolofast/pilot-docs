---
title: "Setting up e-mail sending (SMTP)"
---

### How to configure SMTP:

-   # In the admin panel, go to the “Partners” section
    

![](images/drex_nastrojka_otpravki_ehlektronnoj_pochty__smtp__custom.png)

2\. Double-click the selected Partner — a window with settings opens. Select the SMPT tab.

<table><tbody><tr><td><span></span></td><td><div>The tab is available to Partners only.</div></td></tr></tbody></table>

The SMTP tab is intended for configuring e-mail sending through an external SMTP server.

![](images/drex_nastrojka_otpravki_ehlektronnoj_pochty__smtp__custom_2.png)

This is where you specify the parameters of the mail server through which the system will send Notifications, invoices and other e-mails.

Setup parameters

• SMTP Host — the SMTP server address

• SMTP Port — the SMTP server port

• SMTP Login — the login for authorization on the mail server

• SMTP Passw — the password for authorization

• SMTP Email — the e-mail address on whose behalf e-mails will be sent

• SMTP security — selection of the connection type (no encryption, SSL, TLS — depending on the server settings)

Please check the entered data carefully — the delivery of e-mails depends on the correctness of these settings.

## Checking the SMTP server

After entering the parameters, you can run a connection check.

The system uses the SMTP (Simple Mail Transfer Protocol) protocol to test the connection and authorization.

The check is performed as follows:

1\. The system gets the SMTP server address from the request and checks whether it is specified

2\. It gets the connection port. If no port is set, the standard port 25 is used

3\. An SMTP client instance is created, and the connection timeout and debug level are configured

4\. An attempt to connect to the server is made:

— if SSL is selected, the prefix ssl:// is automatically added to the address

— when connecting over SSL, certificate verification is temporarily disabled

5\. After a successful connection, the EHLO command (the extended SMTP greeting command) is sent

6\. The system gets the list of ESMTP extensions supported by the server

7\. If TLS mode is selected and the server supports STARTTLS, the system:

— initiates a secure connection

— sends the EHLO command again

8\. If the server supports authentication, a sign-in attempt is made using the specified login and password

### Error handling

If an error occurs at any stage:

— the information is written to the error log

— HTTP code 400 is returned

— an error message is output in JSON format

Regardless of the result of the check, the connection is closed properly with the QUIT command.

Finally, the function returns the connection parameters and the result of the check.

This procedure helps make sure that the server is available, supports the selected encryption type and accepts the specified credentials.

If the check fails, we recommend double-checking the server address, port, security type and sign-in data.
