# Use a named base stage for common operations
FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./

# Deps stage to install production dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
RUN npm ci --production

# Builder stage to build the React application
FROM base AS builder
COPY . .
RUN npm install
RUN npm run build

# Runner stage to serve the React application
FROM base AS runner

# Setup non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs --ingroup nodejs

# Copy over built assets and production dependencies
COPY --from=builder /app/build ./build
COPY --from=deps /app/node_modules ./node_modules

# Use non-root user
USER nodejs

# Typically, React apps are served on port 3000 in development, but for serving static files, 
# you might use something like serve: `npx serve -s build`
# Ensure you have the 'serve' package installed as a dependency or adjust the CMD accordingly.
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
