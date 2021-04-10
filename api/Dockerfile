FROM node:14.14.0-alpine

WORKDIR '/app'


COPY ./package.json .
RUN npm install 

COPY . .


RUN npx run migrate
CMD ["npm","run","start"]