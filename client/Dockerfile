FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn dev

# Use this if you want to deploy in some enviroment
# RUN yarn build

EXPOSE 3000

# Use this if you want to deploy in some enviroment
# CMD ["yarn", "serve"]