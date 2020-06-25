---
title: ICAP Overview
id: icap-overview
---

## ICAP Introduction

The Internet Content Adaptation Protocol (ICAP) is defined in [RFC 3507](https://tools.ietf.org/html/rfc3507). 

The protocol is aimed at providing simple object-based content vectoring for HTTP services. ICAP is, in essence, a lightweight protocol for executing a "remote procedure call" on HTTP messages. It allows ICAP clients to pass HTTP messages to ICAP servers for some sort of transformation or other processing ("adaptation"). The server executes its transformation service on messages and sends back responses to the client, usually with modified messages. Typically, the adapted messages are either HTTP requests or HTTP responses. 

## Terminology

The following definitions are a sub-set of the terminlogy used in the RFC. They are provided here as a convienience to the reader.
*client*: A program that establishes connections for the purpose of sending requests.

*origin server*: The server on which a given resource resides or is to be created.

*surrogate*: A gateway co-located with an origin server, or at a different point in the network, delegated the authority to operate on behalf of, and typically working in close co-operation with, one or more origin servers. 

*ICAP Resource*: Similar to an HTTP resource, but the URI refers to an ICAP service that performs adaptations of HTTP messages.

*ICAP Server*: Similar to an HTTP server, except that the application services ICAP requests.

*ICAP Client*: A program that establishes connections to ICAP servers for the purpose of sending requests. An ICAP client is often, but not always, a surrogate acting on behalf of a user.

## Request Modification

In a "request modification" the ICAP Client sends an HTTP Request to an ICAP Server. 

![Basic Request Modification Sequence](/img/icap/icap_reqmod_sequence.png)

1. The request is sent from the client to the surrogate, for an object on the origin server.
1. The ICAP Client in the surrogate sends a REQMOD messages the ICAP Server.
1. The ICAP Server uses the service specified in the URI to process incoming request.
    - The ICAP Resource will leave the Request body unchanged OR
    - The ICAP Resource will modify the Request body OR
    - The ICAP Resource will return an error.
1. The ICAP Client submits the request to the Origin Server.
1. The origin server processes the request and returns a response.
1. The ICAP Client passes the response back to the client.

More detail is available in the RFC.

## Service Location

The ICAP URLs follow a similiar structure as HTTP resouce locators.
```
ICAP_URI = Scheme ":" Net_Path [ "?" Query ]
Scheme = "icap"
Net_Path = "//" Authority [ Abs_Path ]
Authority = [ userinfo "@" ] host [ ":" port ]
```
As an example
```
icap://icap.net/service?mode=translate&lang=french
```
In this example the `host` is `icap.net` and the ICAP Resource being located is call `service`. The URL also includes two query arguments, defining values for `mode` and `lang`.

## References

Hypertext Transfer Protocol (HTTP/1.1) [RFC 2616](https://tools.ietf.org/html/rfc2616) 

Internet Content Adaptation Protocol (ICAP) [RFC 3507](https://tools.ietf.org/html/rfc3507)
