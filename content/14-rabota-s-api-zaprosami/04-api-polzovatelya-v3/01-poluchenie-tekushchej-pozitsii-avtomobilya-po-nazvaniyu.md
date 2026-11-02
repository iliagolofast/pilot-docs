---
title: "Получение текущей позиции автомобиля по названию"
source: poluchenie_tekushchej_pozitsii_avtomobilya_po_nazvaniyu.html
---

Метод возвращает последнюю сохранённую позицию автомобиля. Автомобиль определяется по его точному названию в PILOT.

Метод предназначен для интеграции с системами отслеживания перевозок, включая WIMT. В отличие от методов, использующих IMEI, в запросе передаётся название автомобиля — truckNo.

Интерактивное описание метода доступно в [Swagger — Track and Trace](https://pilot-swagger.pilot-gps.com/#/Vehicles/getVehicleTrackAndTrace)

## Как получить данные

### Метод

POST

### Адрес запроса

https://<server\_address>/api/v3/vehicles/track-and-trace

Замените <server\_address> адресом сервера PILOT.

### Авторизация

Для выполнения запроса используется стандартная авторизация API V3 с помощью Bearer token.

Передайте токен в заголовке Authorization:

Authorization: Bearer <access\_token>

Замените <access\_token> действующим токеном API V3.

### Заголовки запроса

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Заголовок</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Обязательный</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Authorization</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Bearer token для авторизации пользователя в API V3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; X-Node</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер узла пользователя. Используется для перенаправления запроса на нужный сервер</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Content-Type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Формат тела запроса. Укажите application/json</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Accept</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Нет</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Формат ответа. Рекомендуемое значение — application/json</span></div></td></tr></tbody></table>

Пример заголовков:

Authorization: Bearer <access\_token>

X-Node: 3

Content-Type: application/json

Accept: application/json

## Параметры запроса

Параметры передаются в теле запроса в формате JSON.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Параметр</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Тип</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Обязательный</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; shipmentNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Номер груза или перевозки. Метод принимает значение, но не сохраняет и не возвращает его</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название автомобиля в PILOT. Должно точно соответствовать значению vehiclenumber</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код страны, например ZA. В ответе возвращается без изменений</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; trackingFlag</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Да</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Состояние отслеживания, например START или STOP. В текущей версии значение принимается, но не сохраняется и не влияет на обработку запроса</span></div></td></tr></tbody></table>

## Поиск автомобиля

Метод ищет автомобиль по точному значению truckNo среди автомобилей, доступных авторизованному пользователю.

Переданное значение должно полностью совпадать с названием автомобиля — vehiclenumber — в PILOT. Учитывайте регистр символов, пробелы и специальные символы.

Например, если автомобиль называется KS51YPGP\_F, в запросе необходимо передать:

<table><tbody><tr><td><span></span></td><td><div>"truckNo": "KS51YPGP_F"</div></td></tr></tbody></table>

Если название не совпадает или у пользователя нет доступа к автомобилю, метод не вернёт его позицию.

### Пример запроса

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "trackingFlag": "START"</div><div>}</div></td></tr></tbody></table>

Пример запроса cURL:

<table><tbody><tr><td><span></span></td><td><div>curl --request POST \</div><div>&nbsp; --url "https://&lt;server_address&gt;/api/v3/vehicles/track-and-trace" \</div><div>&nbsp; --header "Authorization: Bearer &lt;access_token&gt;" \</div><div>&nbsp; --header "X-Node: 3" \</div><div>&nbsp; --header "Content-Type: application/json" \</div><div>&nbsp; --header "Accept: application/json" \</div><div>&nbsp; --data '{</div><div>&nbsp; &nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; &nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; &nbsp; "countryID": "ZA",</div><div>&nbsp; &nbsp; "trackingFlag": "START"</div><div>&nbsp; }'</div></td></tr></tbody></table>

### Ответ

Если запрос выполнен успешно, метод возвращает последнюю сохранённую GPS-позицию автомобиля, адрес, часовой пояс и название аккаунта.

Поля успешного ответа

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Поле</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Тип</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Описание</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код выполнения запроса. Значение 0 означает успешное выполнение</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; msg</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Результат выполнения запроса. При успешном выполнении возвращается OK</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; process_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время обработки запроса в секундах</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Код страны, полученный в запросе. Возвращается без изменений</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; timeZone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Часовой пояс в формате IANA, например Africa/Johannesburg</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название найденного автомобиля в PILOT</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; latitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Широта последней сохранённой GPS-позиции</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; longitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Долгота последней сохранённой GPS-позиции</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Название аккаунта, которому принадлежит автомобиль</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; streetName</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Адрес последней позиции, полученный с помощью обратного геокодирования</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lastRecordedOn</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Время регистрации последней GPS-позиции в формате Unix timestamp</span></div></td></tr></tbody></table>

Поля shipmentNo, trackingFlag и trackLink в ответе не возвращаются.

### Пример успешного ответа

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "process_time": 0.001,</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "timeZone": "Africa/Johannesburg",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "latitude": -26.2041,</div><div>&nbsp; "longitude": 28.0473,</div><div>&nbsp; "source": "Example Fleet",</div><div>&nbsp; "streetName": "Main Road, Johannesburg",</div><div>&nbsp; "lastRecordedOn": 1785142800</div><div>}</div></td></tr></tbody></table>

## Форматы времени

### Часовой пояс

Поле timeZone содержит идентификатор часового пояса из базы IANA:

<table><tbody><tr><td><span></span></td><td><div>"timeZone": "Africa/Johannesburg"</div></td></tr></tbody></table>

Идентификатор IANA определяет региональный часовой пояс и позволяет корректно учитывать его правила.

Фиксированное смещение, например UTC+02:00, метод не возвращает.

### Время последней позиции

Поле lastRecordedOn содержит время последней GPS-позиции в формате Unix timestamp:

<table><tbody><tr><td><span></span></td><td><div>"lastRecordedOn": 1785142800</div></td></tr></tbody></table>

Unix timestamp содержит количество секунд, прошедших с 1 января 1970 года, 00:00:00 UTC. Значение не зависит от часового пояса.

Чтобы отобразить дату и время пользователю, преобразуйте lastRecordedOn с учётом значения timeZone.

### Определение адреса

Поле streetName формируется с помощью обратного геокодирования: PILOT преобразует координаты последней позиции в текстовый адрес.

<table><tbody><tr><td><span></span></td><td><div>"streetName": "Main Road, Johannesburg"</div></td></tr></tbody></table>

Полнота и точность адреса зависят от доступных картографических данных.
