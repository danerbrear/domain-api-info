# Overview

This project is a node.js api to get information on your IP address or your domain.

## Run a container image locally
1. `cd` into a project file with a `package.json` file in its directory
2. run `npm run start-docker`

## Run and debug with Chrome

1. `cd` into a project file with a `package.json` file in its directory
2. Run `docker-compose -f docker-compose.dev.yml up --build` to build and start the docker image.
3. In a new chrome tab, go to `about:inspect`. Select the link, "Open dedicated DevTools for Node", to see a console for all active connections.

## Run tests

`npm test`