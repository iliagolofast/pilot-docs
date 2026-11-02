---
title: "User settings"
---

The “Settings” tab specifies the account data, login parameters, and the history period available to the user.

![](images/drex_nastrojki_polzovatelya_custom.png)

## Main settings

![](images/drex_nastrojki_polzovatelya_custom_2.png)

Fill in the user data. Required fields are outlined in red:

-   Login: the name the user enters to log in to PILOT
    
-   Password: the password for logging in. To create or change it, click the edit icon ![](images/drex_nastrojki_polzovatelya_custom_3.png) in the field
    
-   Name: the employee's name or another clear name for the account
    
-   Type: determines the access level:
    
-   Administrator: can add users and objects, work with drivers, and manage the rights of the contract's users
    
-   User: works with the objects and functions assigned to them. The available capabilities are determined by their rights
    
-   Information: additional details about the employee. Fill in this field if necessary
    
-   Email: the e-mail address. Click the send icon ![](images/drex_nastrojki_polzovatelya_custom_4.png) in the field to send the user an e-mail with a link to log in to PILOT
    
-   Mobile phone: the employee's contact number
    

## Additional settings

-   Number of login attempts (The number of possible login attempts): specify the allowed number of authorization attempts. The parameter limits repeated login attempts with incorrect credentials. A value of 0 turns off attempt counting.
    
-   Number of days to store history: specify the period for which historical data is available to the user, including when building reports:
    
-   0: use the standard period of 365 days
    
-   a positive number: keep history for the specified number of days
    
-   −1: do not keep history
    

The maximum period is determined by the contract configuration [Users default parameters](../../../../panel-administratora/partnyery/kak-dobavit-konfiguratsiyu-k-partnyeru.html#__Users_default_parameters). It is added by a user with access to the admin panel. If you need to increase the available period, contact the administrator or technical support.

![](images/drex_nastrojki_polzovatelya_custom_5.png)

For example, a value of 730 in the max\_days\_available\_history parameter lets you give the contract's users access to two years of history. After the configuration is applied, the “Number of days to store history” field is filled in with the set number of days.

![](images/drex_nastrojki_polzovatelya_custom_6.png)

After filling in the fields, click “Save”. Then go to the other tabs of the card to assign objects, tags, and the necessary access rights to the user.
