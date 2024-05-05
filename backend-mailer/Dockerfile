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

CMD ["npm", "start"]