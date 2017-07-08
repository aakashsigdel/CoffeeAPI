# create a file named Dockerfile
FROM node:boron

ENV NPM_CONFIG_LOGLEVEL info

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 8080

CMD ["npm", "start"]
