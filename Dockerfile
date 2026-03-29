# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json (or bun.lock)
COPY package*.json ./
# If using bun, copy bun.lock as well
COPY bun.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM nginx:stable-alpine

# Copy the build output from the build stage to the nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
