---
title: "Setting up Jimi video recorders"
---

Jimi video recorders are configured with text commands. You simply send the device the command you need, and it starts working the way you want.

With these commands, you can:

— connect the recorder to the server

— specify where to send video and trip data

— enable online streaming

— set up automatic video upload for certain events

In this article, we will go through the commands that will help you start and properly configure the device.

## Main setup commands

### 1\. Allowing the server connection

<table><tbody><tr><td><span></span></td><td><div>COREKITSW,0</div></td></tr></tbody></table>

This command allows the video recorder to connect to the PILOT video server. In other words, it enables the device to work with the platform.

### 2\. Setting up the telemetry server

<table><tbody><tr><td><span></span></td><td><div>SERVER,1,&lt;domain name&gt;,20056</div><div>or</div><div>SERVER,0,&lt;IP address&gt;,20056</div></td></tr></tbody></table>

Here you specify the server to which telemetry (movement, speed and event data) will be sent.

-   1 — if you use a domain name (for example: server.example.com)
    
-   0 — if you connect by IP address (for example: 192.168.1.100)
    
-   20056— communication port
    

### 3\. Setting up the server for video upload

<table><tbody><tr><td><span></span></td><td><div>UPLOAD,&lt;https://server_address/upload&gt;</div></td></tr></tbody></table>

The address of the server to which video files will be sent, for example, during playback or event upload.

### 4\. Setting up the server for online streaming

<table><tbody><tr><td><span></span></td><td><div>RSERVICE,&lt;rtmp://server_address/live&gt;</div></td></tr></tbody></table>

This command sets the RTMP server for live real-time video streaming.

### 5\. Setting up the server for the file list

<table><tbody><tr><td><span></span></td><td><div>FILELIST,&lt;https://server_address/filelist&gt;</div></td></tr></tbody></table>

The address to which the recorder sends the list of available video recordings.

### 6\. Automatic upload of event videos

<table><tbody><tr><td><span></span></td><td><div>UPLOADSW,&lt;A&gt;,&lt;B&gt;</div></td></tr></tbody></table>

This command lets you specify which events should trigger automatic video upload and which cameras to use.

-   A — the event that triggers video upload. For example: CRASH (crash), SOS (panic button), OVERSPEED (speeding).
    
-   B — upload mode:
    

— OFF — disable automatic upload

— ON — upload video from both cameras (front and interior)

— 1 — upload video from the front camera only

— 2 — upload video from the interior camera only

For example: UPLOADSW,CRASH,ON — when the “Crash” event is triggered, the recorder automatically uploads video from both cameras.

## List of events

The table below lists all the events the recorder can recognize. You can use them in the UPLOADSW command.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; №</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Event code</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Meaning</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 1</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SOS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SOS button pressed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 2</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CRASH</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Crash</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 3</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VIBRATE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Vibration / impact</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 4</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OVERSPEED</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Speeding</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 5</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDACC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh acceleration</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 6</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDDEC</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh braking</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 7</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RAPIDTURN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Harsh turn</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 8</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DRIVE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driving mode</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 9</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; POWER</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Power change</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 10</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VOLTAGELOW</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Low voltage</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 11</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; CLOSEEYES</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Fatigue / closed eyes</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 12</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; YAWN</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Yawning, a sign of fatigue</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 13</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; DISTRACTION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Driver distracted</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 14</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SMOKING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Smoking while driving</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 15</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; PHONECALLING</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Phone use</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 16</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYOFF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Relay off</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 17</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; RELAYRECOVERY</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Relay restored</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 18</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; MISSINGFACE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Face not detected</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 19</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; NOSDCARD</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; No SD card</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 20</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SDCARDMOUNT</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SD card inserted</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 21</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OIL</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Oil sensor event</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 22</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; OILTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Oil error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 23</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TEMPTO</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Engine overheating</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 24</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 25</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; LANEDEPARTURE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Lane departure</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 26</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VEHICLETOOCLOSE</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Another vehicle too close</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 27</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; FORWARDCOLLISION</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Collision risk</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 28</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; UART_DOOR</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Door sensor</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 29</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Face detection (AI)</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 30</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AFIF</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Face recognition error</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 31</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; AWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Seat belt detection</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; 32</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; ANWSB</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Seat belt not fastened</span></div></td></tr></tbody></table>
