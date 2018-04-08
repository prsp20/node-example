FROM node:8.7-alpine

# Create app directory
WORKDIR /app

COPY ./lib  /app
COPY package.json yarn.lock ./
COPY resources/ ./resources/

RUN yarn install --production=true

EXPOSE 8000

CMD [ "node", "server.js"]
