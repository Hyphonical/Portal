# Stage 1: Base image for all subsequent stages, using a minimal Node.js environment
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Enable corepack to manage package managers like pnpm.
RUN corepack enable

# ---

# Stage 2: The build stage, where we install dependencies and build the application.
FROM base AS build
WORKDIR /app
# Copy all project files to the container.
COPY . .
# Copy lock files to leverage caching.
COPY package.json pnpm-lock.yaml ./
# Run pnpm install with a cache mount for faster builds.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# Set environment to production to optimize the build.
ENV NODE_ENV=production
# Build the application for production.
RUN pnpm run build

# ---

# Stage 3: The final, production-ready stage for deployment.
FROM base AS dokploy
WORKDIR /app
ENV NODE_ENV=production

# Install curl in the final stage for health checks or other tasks.
RUN apk add --no-cache curl

# Copy the built production files from the 'build' stage.
COPY --from=build /app/.output ./.output

# Copy only the package.json and install only the production dependencies.
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=build /app/node_modules ./node_modules
# Install production dependencies only, ignoring scripts for security.
RUN pnpm install --production --ignore-scripts --frozen-lockfile

# Expose the port the application will run on.
ENV PORT=3000
EXPOSE 3000
# Define the command to start the application.
CMD ["pnpm", "start"]