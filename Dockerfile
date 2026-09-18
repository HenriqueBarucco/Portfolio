FROM node:26.9.0-alpine AS build

WORKDIR /app

RUN npm install --global pnpm@12.4.2

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:26.9.0-alpine AS production

WORKDIR /app

RUN npm install --global pnpm@12.4.2

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=build /app/.next ./.next

COPY --from=build /app/next.config.js ./

COPY --from=build /app/public ./public

EXPOSE 3000

ENV TZ=America/Sao_Paulo

CMD ["pnpm", "start"]
