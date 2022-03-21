FROM node:16.9.1-alpine3.14
# Create app directory
WORKDIR /usr/src/app


RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake

COPY package.json ./

RUN npm install -g npm
RUN npm install canvas
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]
