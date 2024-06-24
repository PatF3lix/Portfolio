# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

COPY .env .env

# Production stage
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

# Use a non-root user for security
RUN addgroup -g 1001 appuser && \
    adduser -D -u 1001 -G appuser appuser && \
    chown -R appuser:appuser /app
	
USER appuser

CMD ["npm", "start"]
