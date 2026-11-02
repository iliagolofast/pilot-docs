---
title: "Як підключити інтеграцію Velavu"
---

Інтеграція з Velavu налаштовується на рівні партнерського акаунта через параметри конфігурації.

<table><tbody><tr><td><span></span></td><td><div>Налаштування інтеграції доступне лише користувачам із правами головного адміністратора. Якщо у вас немає відповідного рівня доступу, зверніться до служби підтримки.</div></td></tr></tbody></table>

1\. У панелі адміністратора перейдіть до розділу «Партнери»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom.png)

2\. Двічі клацніть на вибраному партнері — відкриється його картка

3\. Перейдіть на вкладку «Конфігурація»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_2.png)

4\. Натисніть кнопку «Додати»

5\. У випадному списку виберіть ключ **Velavu**. У значення параметра вставте конфігурацію Velavu у форматі JSON.

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_3.png)

Приклад JSON-конфігурації Velavu

<table><tbody><tr><td><span></span></td><td><div><span>[</span></div><div><span>&nbsp;{</span></div><div><span>&nbsp;"broker": "iot.velavu.com",</span></div><div><span>&nbsp;"port": "8883",</span></div><div><span>&nbsp;"customer_id": "YOUR_CUSTOMER_ID",</span></div><div><span>&nbsp;"api_token": "YOUR_API_TOKEN",</span></div><div><span>&nbsp;"cert": "-----BEGIN CERTIFICATE-----\nYOUR_CERTIFICATE\n-----END CERTIFICATE-----",</span></div><div><span>&nbsp;"key": "-----BEGIN RSA PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END RSA PRIVATE KEY-----"</span></div><div><span>&nbsp;}</span></div><div><span>]</span></div></td></tr></tbody></table>

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Опис</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; broker</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Адреса MQTT-брокера Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; port</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Порт підключення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; customer_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID клієнта в системі Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; api_token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Токен доступу до API Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cert</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SSL-сертифікат для підключення</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; key</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Приватний ключ SSL</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Усі дані (customer_id, api_token, сертифікат і ключ) ви отримуєте з вашого акаунта Velavu.</div></td></tr></tbody></table>

6\. Збережіть конфігурацію. Після цього інтеграція буде доступна для акаунтів, які належать до цього партнера
