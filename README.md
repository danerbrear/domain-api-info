# Overview

This project is a node.js api to get information on your IP address or your domain.

The project contains different services that are separated into individual Docker images:
- Handler
- Reverse DNS
- Geolocation IP information

<br><br>

# Prerequisites

1. You must have the Docker CLI installed

    If not, follow the steps in [this link](https://docs.docker.com/engine/install/) to install Docker.
    
2. Generate a free IPStack access key [here](https://ipstack.com/signup/free) to get geolocation information.

<br><br>

# Start the Docker containers (workers)

From the root directory of the project, run `npm run start-containers`

Note: To see all active containers, run `docker ps`

<br><br>

# Usage

### `GET '/'`

| Parameter | Type          | Description                                                                                                                                                                                                                                                                                                                                              |
|-----------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ip`      | string        | IP address you would like information for.                                                                                                                                                                                                                                                                                                               |
| `options` | Array<string> | An array of options of which services to include for the request. Defaults to all services.<br><br>Available options:<br><br>`r`: Reverse DNS<br>`g`: IPStack Geolocation Information<br><br>Be sure to specify options in the query string in the format of the following url example:<br>`http://localhost:8083?ip=64.233.191.255&options=r&options=g` |

<br>

#### Notes

If you do not specify options or include the `g` option in your request, you must include an IPStack access key in your `X-Api-Key` header. You can generate an IPStack access key [here](https://ipstack.com/signup/free).

<br><br>

# CI/CD

When the master branch in the Github origin repository detects a change, there is a Github Actions workflow in place that builds the container in the production environment and pushes the image to Docker Hub.