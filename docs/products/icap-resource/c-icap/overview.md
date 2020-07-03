---
title: C-ICAP Project
id: c-icap-project-overview
---

## C-ICAP Project Overview
C-ICAP is an implementation of an ICAP Server. It is an open-sourced project written in C, available in Source Forge. The source code has been copied at version [r1392](https://sourceforge.net/p/c-icap/code/1392/) and submitted into [GitHub](https://github.com/filetrust/c-icap).

## Build and Installation
The project build mechanism uses the GNU Autotool tools: autoconf and automake.All the necessary instructions to build and install the product from the source code are detailed in the [README.md file](https://github.com/filetrust/c-icap/blob/master/README.md).

## Structure
The C-ICAP project provides a plug-in interface that supports the implementation of ICAP Resources. Each ICAP Resouce is implemented as a library that the C-ICAP Server is configured to load.

The framework requires that each ICAP Resouce implements a `ci_service_module_t` object that defines a set of function pointers that handle event generated by the ICAP Server when processing ICAP Requests. These functions will be called by c-icap as follows:
- When a new request arrives for this service then the `ci_service_module::mod_init_request_data` is called.
- When the icap client sends preview data then the `ci_service_module::mod_check_preview_handler` is called.
  - If this function return CI_MOD_ALLOW204 the ICAP transaction stops here and the corresponding HTTP is forwarded unchanged.
  - If this function return CI_MOD_CONTINUE the ICAP client will send the rest body data, if any exists.
- When he client starts sends more data then the `ci_service_module::mod_service_io` is called multiple times until the client has send all the body data. The service can start to send data using this function to the client before all incoming data has been received.
- When the client finishes sending body data the `ci_service_module::mod_end_of_data_handler` is called

In addition to these event handlers the service is defined with
- A service name
- A short description
- Specification of service type (Request modification, Response modification, or both)
- An array which contains the definitions of configuration parameters used by the service, loaded from disk at startup.

## Deployment
The deployment location is defined in the build phase, the path is passed in as an argument when calling the `./configure` script. The standard location used in the `Readme.md` file is `/usr/local/c-icap`.

During installation, the specified deployment folder is populated with a set of sub-folders.

| Path           | Usage          |
| :------------- | :------------- |
| `./bin`      | All executables, including test applications |
| `./etc`      | Configuration files (.conf) for ICAP Server and ICAP Resources |
| `./include/c_icap` | Header files for C-ICAP libraries  |
| `./lib` | Shared libraries for ICAP Server  |
| `./lib/c_icap` | Shared libraries for ICAP Resources  |
| `./share/c_icap/templates` | ICAP Resouce Templates files  |
| `./var/log` | Debug log files  |


## Integration

Each ICAP Resource has an associated .conf file. This is used to inform the ICAP Server about the ICAP Resource, and define its configuration.

Within the ICAP Resource's .conf file, the `Service` configuration item is used to specify the resource's service name, and the name of the library file in which the functionality is provided.
> The service name used in the .conf file should match that used in the `ci_service_module_t`.

For a resource to be loaded by the ICAP Server, the resource's .conf file must be included into the ICAP Service .conf file, `icap.conf`. Multiple ICAP Resources may be included byt the ICAP SErver configuration.

## Local Testing

The C-ICAP project provides a test client application that can be used to carry out validation of the ICAP Server configuration, and that of its ICAP Resources.
```
./c-icap-client -h
Usage :
./c-icap-client [-V ] [-VV ] [-i icap_servername] [-p port] [-s service] [-f filename] [-o filename] [-method method] [-req url] [-resp url] [-d level] [-noreshdr ] [-nopreview ] [-no204 ] [-206 ] [-x xheader] [-hx xheader] [-rhx xheader] [-w preview] [-v ]

-V                      : Print version and exits
-VV                     : Print version and build informations and exits
-i icap_servername      : The icap server name
-p port                 : The server port
-s service              : The service name
-f filename             : Send this file to the icap server. Default is to send an options request
-o filename             : Save output to this file. Default is to send to stdout
-method method          : Use 'method' as method of the request modification
-req url                : Send a request modification instead of response modification
-resp url               : Send a responce modification request with request url the 'url'
-d level                : debug level info to stdout
-noreshdr               : Do not send reshdr headers
-nopreview              : Do not send preview data
-no204                  : Do not allow204 outside preview
-206                    : Support allow206
-x xheader              : Include xheader in icap request headers
-hx xheader             : Include xheader in http request headers
-rhx xheader            : Include xheader in http response headers
-w preview              : Sets the maximum preview data size
-v                      : Print response headers
```





