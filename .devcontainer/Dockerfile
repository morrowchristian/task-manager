FROM node:20-bullseye

# Install basic dev tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Expose ports (React: 3000, Express: 5000)
EXPOSE 3000 5000