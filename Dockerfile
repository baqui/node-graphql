FROM node:10
WORKDIR /graphql
COPY package.json /graphql
RUN npm install -g nodemon
RUN yarn
COPY . /graphql
CMD nodemon -L graphql-structure/starter.js
EXPOSE 4000
