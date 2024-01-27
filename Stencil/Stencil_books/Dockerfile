FROM node:lts
WORKDIR /app
COPY . .
RUN node --version
RUN npm install
EXPOSE 3333

CMD [ "npm","start" ]