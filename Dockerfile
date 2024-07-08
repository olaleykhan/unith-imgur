# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

# Base image for both dev and prod
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app
EXPOSE 3000

# Dependencies stage
FROM base as deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

# Development stage
FROM base as dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1
# Install development dependencies and use nodemon for hot-reloading
RUN npm install --include=dev
CMD ["npm", "run", "dev"]

# Production stage
FROM base as prod
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm ci --omit=dev
# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
CMD ["npm", "start"]
