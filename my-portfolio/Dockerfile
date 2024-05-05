# Use an official Node.js runtime as the base image
FROM node:alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install Python and necessary build dependencies
RUN apk add --no-cache python3 make g++

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env .env

# Build the application
RUN npm run build

# Production stage
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built files from the builder stage to the production stage
COPY --from=builder /app .

# Run the production server
CMD ["npm", "start"]
