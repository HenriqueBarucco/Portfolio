FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install next@13.1.7-canary.7
COPY . .
EXPOSE 3000
CMD [ "npx", "next", "dev" ]