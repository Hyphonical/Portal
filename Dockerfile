# Phase 1: Base-Image für beide Stufen
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Phase 2: Build-Stufe
FROM base AS build
WORKDIR /app
COPY . .
COPY package.json pnpm-lock.yaml ./
# Führe pnpm install und den Build aus
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
ENV NODE_ENV=production
RUN pnpm run build

# Phase 3: Produktions-Stufe
FROM base AS dokploy
WORKDIR /app
ENV NODE_ENV=production

# Kopiere die produktionsfertigen Dateien aus der Build-Stufe // test
COPY --from=build /app/.output ./.output

# Kopiere nur die package.json und installiere nur die produktions-abhängigkeiten
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=build /app/node_modules ./node_modules
RUN pnpm install --production --ignore-scripts --frozen-lockfile

ENV PORT=3000
EXPOSE 3000
CMD ["pnpm", "start"]
