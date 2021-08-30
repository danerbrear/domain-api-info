# Overview

This project is a node.js api to get information on your IP address or your domain.

The project contains different services that are separated into individual Docker container images:
- Handler
- Reverse DNS

## Prerequisites

1. You must have the Docker CLI installed

If not, follow the steps in [this link](https://docs.docker.com/engine/install/) to install Docker.

## Start the Docker containers (workers)

From the root directory of the project, run `npm run start-containers`

Note: To see all active containers, run `docker ps`

## CI/CD

When the master branch in the Github origin repository detects a change, there is a Github Actions workflow in place that builds the container in the production environment and pushes the image to Docker Hub.