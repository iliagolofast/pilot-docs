---
title: "Waybills"
---

This API is used to get information about waybills for a given period.

With it, you can:

— get the list of tasks for each agent

— view planned and actual execution times

— find out execution statuses and details for route points

## How to get the data

### Method

GET

### Request URL

To get the data, use the URL: https://tasks.<server\_address>/backend/public/get\_waybill\_for\_pilot

### Request parameters

from\_ts — start of the selection (Unix timestamp, example: 1536181200)

to\_ts — end of the selection (Unix timestamp, example: 1538773200)

agents — list of agent identifiers, separated by commas (for example: 13128,13130,...)

### Example request

<table><tbody><tr><td><span></span></td><td><div>https://&lt;server_address&gt;/backend/public/get_waybill_for_pilot?from_ts=1536181200&amp;to_ts=1538773200&amp;agents=13128,13130,21055</div></td></tr></tbody></table>

Response

<table><tbody><tr><td><span></span></td><td><div>{</div><div>&nbsp; "success": true,</div><div>&nbsp; "msg": "",</div><div>&nbsp; "items": [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; "agent_id": 13128,</div><div>&nbsp; &nbsp; &nbsp; "c_begin_time": "1536200000",</div><div>&nbsp; &nbsp; &nbsp; "c_end_time": "1536210000",</div><div>&nbsp; &nbsp; &nbsp; "c_information": "{\"route\":\"Маршрут №54\",\"driver\":\"Иванов И.И.\"}",</div><div>&nbsp; &nbsp; &nbsp; "c_initiator": "Диспетчер",</div><div>&nbsp; &nbsp; &nbsp; "c_progress_time": "1536200500",</div><div>&nbsp; &nbsp; &nbsp; "c_running_time": "1536200300",</div><div>&nbsp; &nbsp; &nbsp; "c_status_id": 2,</div><div>&nbsp; &nbsp; &nbsp; "c_status_name": "Выполнено",</div><div>&nbsp; &nbsp; &nbsp; "id": 98765,</div><div>&nbsp; &nbsp; &nbsp; "points_info": [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "point_id": 1,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lat": "55.7558",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "lon": "37.6173",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "visited_at": "1536200600"</div><div>&nbsp; &nbsp; &nbsp; &nbsp; }</div><div>&nbsp; &nbsp; &nbsp; ]</div><div>&nbsp; &nbsp; }</div><div>&nbsp; ]</div><div>}</div></td></tr></tbody></table>

The API response contains:

-   success — execution result (true — success, false — error)
    
-   msg — error message (if any)
    
-   items — array of task data
    

For each task:

agent\_id — agent identifier

c\_begin\_time — planned task start time

c\_end\_time — actual task completion time

c\_information — string with additional task information (JSON, depends on the template)

c\_initiator — requester (who created the task)

c\_progress\_time — actual time of visiting the first point

c\_running\_time — actual time of departure to perform the task

c\_status\_id — task status identifier

c\_status\_name — task status description

id — task identifier in the PTM system

points\_info — array of information about the visited route points
