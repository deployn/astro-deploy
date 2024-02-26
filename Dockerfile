FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM build-deps AS build
COPY . .

ARG SITE_URL
ENV SITE_URL=${SITE_URL}

RUN pnpm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
