---
title: "Как подключить интеграцию Velavu"
source: kak_podklyuchit_integratsiyu_velavu.html
---

Интеграция с Velavu настраивается на уровне партнёрского аккаунта через параметры конфигурации.

<table><tbody><tr><td><span></span></td><td><div>Настройка интеграции доступна только пользователям с правами главного администратора. Если у вас нет соответствующего уровня доступа, обратитесь в службу поддержки.</div></td></tr></tbody></table>

1\. В панели администратора перейдите в раздел «Партнёры»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom.png)

2\. Дважды кликните на выбранного партнера — откроется его карточка

3\. Перейдите на вкладку «Конфигурация»

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_2.png)

4\. Нажмите кнопку «Добавить»

5\. В раскрывающемся списке выберите ключ **Velavu**. В значении параметра вставьте конфигурацию Velavu в формате JSON.

![](images/drex_kak_podklyuchit_integratsiyu_velavu_custom_3.png)

Пример JSON-конфигурации Velavu

<table><tbody><tr><td><span></span></td><td><div><span>[</span></div><div><span>&nbsp;{</span></div><div><span>&nbsp;"broker": "iot.velavu.com",</span></div><div><span>&nbsp;"port": "8883",</span></div><div><span>&nbsp;"customer_id": "YOUR_CUSTOMER_ID",</span></div><div><span>&nbsp;"api_token": "YOUR_API_TOKEN",</span></div><div><span>&nbsp;"cert": "-----BEGIN CERTIFICATE-----\nYOUR_CERTIFICATE\n-----END CERTIFICATE-----",</span></div><div><span>&nbsp;"key": "-----BEGIN RSA PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END RSA PRIVATE KEY-----"</span></div><div><span>&nbsp;}</span></div><div><span>]</span></div></td></tr></tbody></table>

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; broker</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Адрес MQTT-брокера Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; port</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Порт подключения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; customer_id</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ID клиента в системе Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; api_token</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Токен доступа к API Velavu</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; cert</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SSL-сертификат для подключения</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; key</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Приватный ключ SSL</span></div></td></tr></tbody></table>

<table><tbody><tr><td><span></span></td><td><div>Все данные (customer_id, api_token, сертификат и ключ) вы получаете из вашего аккаунта Velavu.</div></td></tr></tbody></table>

6\. Сохраните конфигурацию. После этого интеграция будет доступна для аккаунтов, которые относятся к этому партнёру
