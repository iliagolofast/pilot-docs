---
title: "Getting the current vehicle position by name"
---

The method returns the last saved position of a vehicle. The vehicle is identified by its exact name in PILOT.

The method is intended for integration with shipment tracking systems, including WIMT. Unlike methods that use IMEI, the request passes the vehicle name — truckNo.

An interactive description of the method is available in [Swagger — Track and Trace](https://pilot-swagger.pilot-gps.com/#/Vehicles/getVehicleTrackAndTrace)

## How to get the data

### Method

POST

### Request URL

https://<server\_address>/api/v3/vehicles/track-and-trace

Replace <server\_address> with the address of your PILOT server.

### Authorization

The request uses standard API V3 authorization with a Bearer token.

Pass the token in the Authorization header:

Authorization: Bearer <access\_token>

Replace <access\_token> with a valid API V3 token.

### Request headers

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Header</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Required</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Authorization</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Bearer token for user authorization in API V3</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; X-Node</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; User node number. Used to route the request to the right server</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Content-Type</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Request body format. Specify application/json</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Accept</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Response format. Recommended value — application/json</span></div></td></tr></tbody></table>

Example headers:

Authorization: Bearer <access\_token>

X-Node: 3

Content-Type: application/json

Accept: application/json

## Request parameters

Parameters are passed in the request body in JSON format.

<table><colgroup><col> <col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameter</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Type</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Required</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; shipmentNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Shipment or freight number. The method accepts the value but does not store or return it</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vehicle name in PILOT. Must exactly match the vehiclenumber value</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Country code, for example ZA. Returned in the response unchanged</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; trackingFlag</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yes</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Tracking state, for example START or STOP. In the current version the value is accepted but not stored and does not affect request processing</span></div></td></tr></tbody></table>

## Vehicle lookup

The method looks up a vehicle by the exact truckNo value among the vehicles available to the authorized user.

The passed value must fully match the vehicle name — vehiclenumber — in PILOT. Take into account letter case, spaces and special characters.

For example, if the vehicle is named KS51YPGP\_F, the request must pass:

<table><tbody><tr><td><span></span></td><td><div>"truckNo": "KS51YPGP_F"</div></td></tr></tbody></table>

If the name does not match or the user has no access to the vehicle, the method will not return its position.

### Example request

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "trackingFlag": "START"</div><div>}</div></td></tr></tbody></table>

Example cURL request:

<table><tbody><tr><td><span></span></td><td><div>curl --request POST \</div><div>&nbsp; --url "https://&lt;server_address&gt;/api/v3/vehicles/track-and-trace" \</div><div>&nbsp; --header "Authorization: Bearer &lt;access_token&gt;" \</div><div>&nbsp; --header "X-Node: 3" \</div><div>&nbsp; --header "Content-Type: application/json" \</div><div>&nbsp; --header "Accept: application/json" \</div><div>&nbsp; --data '{</div><div>&nbsp; &nbsp; "shipmentNo": "SHIPMENT-123",</div><div>&nbsp; &nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; &nbsp; "countryID": "ZA",</div><div>&nbsp; &nbsp; "trackingFlag": "START"</div><div>&nbsp; }'</div></td></tr></tbody></table>

### Response

If the request succeeds, the method returns the last saved GPS position of the vehicle, the address, the time zone and the account name.

Successful response fields

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Field</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Type</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Description</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; code</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Request execution code. A value of 0 means successful execution</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; msg</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Request result. OK is returned on success</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; process_time</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Request processing time in seconds</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; countryID</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Country code received in the request. Returned unchanged</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; timeZone</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Time zone in IANA format, for example Africa/Johannesburg</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; truckNo</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Name of the found vehicle in PILOT</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; latitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Latitude of the last saved GPS position</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; longitude</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Number</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Longitude of the last saved GPS position</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; source</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Name of the account the vehicle belongs to</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; streetName</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; String</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Address of the last position, obtained by reverse geocoding</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; lastRecordedOn</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Integer</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Time of the last GPS position in Unix timestamp format</span></div></td></tr></tbody></table>

The shipmentNo, trackingFlag and trackLink fields are not returned in the response.

### Example successful response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "code": 0,</div><div>&nbsp; "msg": "OK",</div><div>&nbsp; "process_time": 0.001,</div><div>&nbsp; "countryID": "ZA",</div><div>&nbsp; "timeZone": "Africa/Johannesburg",</div><div>&nbsp; "truckNo": "KS51YPGP_F",</div><div>&nbsp; "latitude": -26.2041,</div><div>&nbsp; "longitude": 28.0473,</div><div>&nbsp; "source": "Example Fleet",</div><div>&nbsp; "streetName": "Main Road, Johannesburg",</div><div>&nbsp; "lastRecordedOn": 1785142800</div><div>}</div></td></tr></tbody></table>

## Time formats

### Time zone

The timeZone field contains a time zone identifier from the IANA database:

<table><tbody><tr><td><span></span></td><td><div>"timeZone": "Africa/Johannesburg"</div></td></tr></tbody></table>

The IANA identifier defines a regional time zone and allows its rules to be applied correctly.

The method does not return a fixed offset, such as UTC+02:00.

### Time of the last position

The lastRecordedOn field contains the time of the last GPS position in Unix timestamp format:

<table><tbody><tr><td><span></span></td><td><div>"lastRecordedOn": 1785142800</div></td></tr></tbody></table>

A Unix timestamp is the number of seconds that have passed since January 1, 1970, 00:00:00 UTC. The value does not depend on the time zone.

To show the date and time to a user, convert lastRecordedOn taking the timeZone value into account.

### Address determination

The streetName field is produced by reverse geocoding: PILOT converts the coordinates of the last position into a text address.

<table><tbody><tr><td><span></span></td><td><div>"streetName": "Main Road, Johannesburg"</div></td></tr></tbody></table>

The completeness and accuracy of the address depend on the available map data.
