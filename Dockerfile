FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx nuxi generate

EXPOSE 3000

CMD ["npx", "serve", ".output/public"]
