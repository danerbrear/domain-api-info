# handlerContainer

FROM node:14-alpine as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

FROM base as test
# RUN apk add --no-cache bash
# SHELL [ "/bin/bash", "-c"]
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

FROM base as prod
RUN npm ci --production
COPY . .
CMD [ "node", "dist/server.js" ]
