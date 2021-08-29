# reverseDnsContainer

FROM node:14.15.4 as base

# Create app directory
WORKDIR /usr/src/appdoc

# Install app dependencies
COPY package*.json ./

FROM base as test
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

FROM base as prod
RUN npm ci --production
COPY . .
CMD [ "node", "dist/server.js" ]