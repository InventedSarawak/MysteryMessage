# Use official Node.js image as the base image for the builder stage
FROM node:18 AS builder

# Set the working directory in the container (use root directory)
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if present)
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm with --legacy-peer-deps
RUN pnpm install

# Copy the rest of the application files (from the local machine into the container)
COPY . .

# Build the Next.js app using pnpm
RUN pnpm run build

# Production Stage
FROM node:18 AS production

# Set the working directory in the container (use root directory)
WORKDIR /app

# Install pnpm globally (for production use if needed)
RUN npm install -g pnpm

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next /app/.next/
COPY --from=builder /app/public /app/public/

# Install only production dependencies using pnpm
RUN pnpm install

# Expose the port for Next.js
EXPOSE 3000

# Start the application using pnpm
CMD ["pnpm", "start"]
