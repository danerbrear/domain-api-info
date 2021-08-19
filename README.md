# Overview

This project is a node.js api to get information on your IP address or your domain.

The project contains different services that are separated into individual Docker container images:
- Handler

## Run a container image locally
1. `cd` into a project file with a `package.json` file in its directory
2. run `npm run start-docker`

## Run and debug with Chrome

3. First run the container image. In a new chrome tab, go to `about:inspect`. Select the link, "Open dedicated DevTools for Node", to see a console for all active connections.

## Run tests

To test in the container: First run the container image, then execute `npm run docker-test`.

To test the server locally: First run the container image, then execute `npm test`

## CI/CD

When the master branch in the Github origin repository detects a change, there is a Github Actions workflow in place that builds the container in the production environment and pushes the image to Docker Hub.