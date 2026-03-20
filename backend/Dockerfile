FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

USER node

CMD ["node", "app.js"]
