# Build stage
FROM node:14 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

COPY .env .env

# Production stage
FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app .

# Switch to a non-root user (recommended for improved security)
RUN addgroup -g 1001 appuser && \
    adduser -D -u 1001 -G appuser appuser && \
    chown -R appuser:appuser /app

USER appuser

CMD ["npm", "start"]