# Build Stage
FROM node:22-slim AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .
ARG SITE_URL
ENV SITE_URL=${SITE_URL}
ARG DIRECTUS_URL
ENV DIRECTUS_URL=${DIRECTUS_URL}
RUN pnpm run build

# Runtime Stage
FROM nginx:1.25-alpine AS runtime

# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Add curl for healthchecks
RUN apk add --no-cache curl

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
