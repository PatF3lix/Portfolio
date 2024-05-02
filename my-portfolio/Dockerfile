# Build stage
FROM node:alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

COPY .env .env

# Production stage
FROM node:alpine

WORKDIR /app

COPY --from=builder /app .

CMD ["npm", "start"]
