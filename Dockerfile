# Phase 1: Build-Umgebung
FROM node:20-alpine AS build

# Installiere die Build-Abhängigkeiten und libvips
RUN apk add --no-cache build-base python3 libvips-dev

# Setzt das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiert die pnpm-Konfigurationsdateien
COPY package.json pnpm-lock.yaml ./

# Installiert die Abhängigkeiten
RUN pnpm install --frozen-lockfile

# Kopiert den Rest des Quellcodes
COPY . .

# Führt den Build-Befehl aus
RUN pnpm run build

# Phase 2: Produktions-Umgebung
FROM node:20-alpine AS dokploy

# Installiere nur die notwendige Laufzeit-Abhängigkeit libvips
RUN apk add --no-cache libvips

# Setzt das Arbeitsverzeichnis und die Umgebung
WORKDIR /app
ENV NODE_ENV=production

# Kopiert die Nuxt-Build-Dateien aus dem .output-Ordner
COPY --from=build /app/.output ./

# Kopiert die Package-Dateien
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml

EXPOSE 3000
CMD ["pnpm", "start"]