---
title: "Retransmission"
---

The “Retransmission” section is used to send monitoring object data to external systems.

For example, data can be sent to:

— city platforms

— integration services

— monitoring systems such as Wialon

— servers that work over the EGTS protocol

— REST API

— other external systems that accept telematics data

Retransmission works as follows:

1\. Create a data transmission destination (endpoint)

2\. Specify the connection parameters for the external system

3\. Connect one or more objects to this endpoint

After that, the system automatically starts sending the data of the selected objects to the external system.

This approach lets you set up a connection once and use it for any number of objects, without re-entering the server address, port, authorization parameters and other settings.

![](images/drex_retranslyatsiya_2_custom.png)

The “Retransmission” section consists of three tabs:

-   Endpoints — destinations for data transmission to external systems. This is where you configure the connection parameters for the external system: server address, port, protocol, authorization data and other parameters.
    
-   Statistics — data transmission statistics, error information and transmission status. Here you can check for errors, see the number of sent and received packets, assess the state of the queues and make sure that data is reaching the external system successfully.
    
-   Objects — objects connected to retransmission. Any number of objects can be connected to one endpoint. If necessary, you can disconnect an object from retransmission or connect it to another endpoint.
    

## Key retransmission concepts

Below are the main terms used in this section.

### Endpoint

— a destination for data transmission to an external system.

An endpoint specifies the connection parameters:

-   server address
    
-   port
    
-   data transmission protocol
    
-   path, if required
    
-   authorization parameters
    
-   additional settings
    

One endpoint can be used by several objects at once. For example, if all objects must send data to the same Wialon account, it is enough to create one endpoint and connect the required objects to it.

An object is a vehicle, device or any other monitoring object whose data is sent through the selected endpoint. Each object can have its own retransmission parameters, such as an external identifier or a data transmission schedule.

### Partner

— the partner contract that the endpoint belongs to.

Depending on access rights, a user can work only with their own endpoints or can also see the endpoints of child partners.

### Contract

— the end-user contract that the monitoring object belongs to

### Auto-add objects (Auto add

) — this function lets you automatically connect new objects of the selected contract to an endpoint. For example, all of a customer’s objects must send data to the same external system. After the rule is set up, every new object created in the selected contract is connected to the endpoint automatically, with no extra user action.

### External ID

— the object’s identifier in the external system. By default, the device IMEI is usually used as the External ID, but you can change it if necessary.

The external system uses this identifier to recognize the object and match the data it receives.

### Uspw

— authorization data for sending data to the external system. Depending on the protocol, this may store a login, password, token or other access parameters. If the protocol requires additional authorization parameters, they are specified in the Json config field.

## Access rights

The available data and actions depend on the user’s role in the admin panel.

### Administrator

An administrator has full access to the section and can:

— view all endpoints

— manage all retransmission objects

— create, edit and delete endpoints

— view overall statistics for all retransmissions

— work with test endpoints

### User

A partner user sees only the data that belongs to their partner structure.

They have access to:

— their own endpoints

— endpoints of child partners

— objects of contracts that belong to the accessible partner branch

— statistics for the available endpoints

A partner cannot view or change data that belongs to other partner structures
