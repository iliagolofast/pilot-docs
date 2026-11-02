---
title: "System requirements for a standalone server"
---

This article describes the requirements and recommendations for deploying PILOT on your organization's dedicated infrastructure.

The information is intended for system administrators, engineers and integrators who prepare the infrastructure and keep the system running.

## Choosing the server configuration

The configuration depends on the expected load:

— the number of connected devices and the message transmission frequency

— the number of concurrent users

— the reports and integrations used

— data retention periods

— connected modules

The baseline parameters are a starting point for production use. They do not guarantee performance under any load.

## Baseline configuration

The recommended starting configuration is designed for a system with up to 30,000 connected devices without the video module:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Component</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Recommendation</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Processor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; From 8 physical cores or dedicated server-class vCPUs</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; RAM</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; From 64 GB</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; System partition</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; From 100 GB SSD</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Database</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; From 2 TB NVMe or enterprise-class SSD; for a physical server — RAID 10</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Backups</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Separate storage; the capacity is calculated according to the retention policy</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Network</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Stable connection with guaranteed bandwidth and low packet loss</span></div></td></tr></tbody></table>

If devices transmit data every 1–5 seconds, the load on the processor, database and disks increases significantly. For this mode, run load testing in advance and provide a reserve of resources.

RAID increases disk fault tolerance but does not replace backups.

## Data storage

Raw events from devices are stored in the database. The retention period is determined by the system settings and the available disk space. It should normally not exceed three months.

When calculating the storage capacity, take into account:

-   the number of devices and the average message frequency
    
-   the retention period of raw events
    
-   the volume of history, tracks and report data
    
-   attachments, photos and media files
    
-   the size and retention period of backups
    

Calculate the backup storage capacity based on the size of a full database copy, the number of copies kept and the compression used. Provide a reserve of at least 20%. A fixed capacity of 1 TB is not suitable for every installation.

## Separating components

Under high load, it is recommended to place the system components on separate servers.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Server role</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; When required</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Minimum recommended configuration</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Application server</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Baseline installation</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 8 vCPU, 64 GB RAM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Database server</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Usually recommended from 5000 devices or with intensive telematics data transmission</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 8 vCPU, 64 GB RAM, from 2 TB NVMe/SSD</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; PTM and “Logistics”</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; With a large number of tasks, routes or calculations</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; The need for a separate server and its configuration are determined after the load is assessed</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Video server</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; When the video module is used</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; From 16 vCPU, 128 GB RAM, separate storage</span></div></td></tr></tbody></table>

The database server must be in the same protected local network as the application server. PostgreSQL, Redis and Memcached must not be accessible from the Internet.

### Video storage

The size of the video archive depends on the number of cameras, the average bitrate, the recording duration and the retention period.

For a preliminary estimate, use the formula:

Capacity, TB = number of cameras × average bitrate, Mbit/s × hours of recording per day × retention days × 0.00045 × 1.3

Choose the operating system of the video server taking into account the requirements of the hardware and its drivers.

For new installations, use a supported edition of Windows Server, Windows Server 2019 or later. Extended support for Windows Server 2019 lasts until January 2029. Support dates are published on the [Microsoft Lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2019) page.

## Operating system and software components

The supported platform is Oracle Linux 8 x86\_64 or an operating system image agreed with technical support.

The installation includes:

-   Nginx
    
-   PHP-FPM and the required PHP extensions
    
-   PostgreSQL
    
-   Redis
    
-   Memcached
    
-   SocketProxy and device message handlers
    
-   background jobs and monitoring tools
    

The exact component versions are determined by the installation package of the specific PILOT release. Do not update them manually without checking compatibility and agreeing on the time of the work.

### Virtual environment

Deployment in a virtual environment is supported provided that the resource requirements are met:

-   CPU resources and memory must be reserved
    
-   the disk subsystem must provide the required number of input/output operations per second — IOPS
    
-   significant overcommitment of virtual machine resources is not allowed: the allocated resources must be backed by physical infrastructure
    

### Test environment

For a test environment with up to 100 devices, the following configuration is sufficient:

<table><colgroup><col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Component</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Parameters</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Processor</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 4 vCPU</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; RAM</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 8 GB RAM</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Storage</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; 200 GB SSD</span></div></td></tr></tbody></table>

Such an environment is not intended for production use or load testing.

## Network requirements

Open incoming connections only when necessary.

<table><colgroup><col> <col> <col></colgroup><tbody><tr><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Purpose</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Protocol and port</strong></span></div></td><td colspan="1" rowspan="1"><div><span><strong>&nbsp; Connection source</strong></span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Web interface and API</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; HTTPS, TCP 443</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; User workstations and permitted integrations</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Redirect to HTTPS</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; HTTP, TCP 80</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; If necessary</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Receiving device messages</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; TCP/UDP ports of the protocols in use</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Devices and trusted networks</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Administration</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; SSH, TCP 22</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; VPN, bastion host or agreed IP addresses only</span></div></td></tr><tr><td colspan="1" rowspan="1"><div><span>&nbsp; Monitoring</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; According to the monitoring system settings</span></div></td><td colspan="1" rowspan="1"><div><span>&nbsp; Permitted addresses only</span></div></td></tr></tbody></table>

The PostgreSQL, Redis and Memcached ports must be accessible only within the server segment.

For outgoing connections, the server may need:

-   DNS and NTP time synchronization
    
-   HTTPS access to operating system repositories and external services
    
-   SSH access to gitlab.pilot-gps.com via TCP port 22122 for installation and updates
    
-   access to the geocoding, routing, map and integration services connected in the system
    

Configure access rules for external services by domain names and agreed ports rather than by static IP addresses: service addresses may change.

If a local map tile server is not deployed, user workstations also need access to the map resources.

For the duration of the installation, give the server controlled access to the required repositories and services. Unrestricted Internet access is not required.

## Backup and recovery

Before putting the system into operation, define a backup policy. It should include:

-   database backup
    
-   backup of the configuration, certificates and integration settings
    
-   separate backup of media files and the video archive, if they are used
    
-   storing copies outside the main server
    
-   encrypting copies and restricting access to them
    
-   regular recovery testing
    

The backup frequency and retention period are determined according to the requirements of the system owner:

-   RPO — the acceptable period of data loss in case of failure
    
-   RTO — the acceptable time to restore the system
    

A successfully created backup does not prove that it is suitable for recovery. Periodically perform test recovery and check the result.

## Preparing for operation

Before starting the system, you need to:

1\. Set up a TLS certificate for the production domain name

2\. Restrict access with a firewall: allow only the necessary connections

3\. Close direct access to service components from the Internet

4\. Set up personal SSH accounts with key-based authentication

5\. Ensure time synchronization

6\. Set up monitoring of service availability, free space, load, processing queues and backup results

7\. Agree on the time for updates and appoint responsible employees

## Access for technical support

Remote technical support requires secure SSH access via VPN or an intermediate access server — a bastion host.

Grant access only to authorized specialists, for a limited time and with action logging.

## What to prepare before installation

To agree on the installation, prepare:

-   Domain name, static IP address and TLS certificate
    
-   Expected load parameters and the list of modules used
    
-   The list of device protocols and ports
    
-   Network rules and addresses for administration
    
-   Information about the space allocated for the database, backups and media files
    
-   Requirements for RPO, RTO and data retention periods
    
-   Contacts of the employees responsible for the infrastructure and access
    
-   Monitoring parameters and the channel for receiving alerts
    

## Post-installation check

After installation, the system is accepted. It includes checking:

— receiving data from devices

— generating reports

— operation of integrations

— operation of monitoring

— test recovery from a backup
