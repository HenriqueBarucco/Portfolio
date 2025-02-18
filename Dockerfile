FROM node:22.3.0-alpine AS build

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm build

FROM node:22.3.0-alpine AS production

WORKDIR /app

RUN npm i -g pnpm

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next ./.next

COPY --from=build /app/next.config.js ./

COPY --from=build /app/public ./public

EXPOSE 3000

ENV TZ=America/Sao_Paulo

CMD ["pnpm", "start"]