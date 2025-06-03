FROM node:18-alpine AS builder
WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm ci

COPY . .

# Build
RUN npm run build

# Run
FROM nginx:alpine
COPY --from=builder /app/dist/ab-soccer/browser/* /usr/share/nginx/html/
COPY --from=builder /app/.docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
