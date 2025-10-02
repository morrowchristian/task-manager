#!/bin/bash
echo "Starting Full-Stack React/Node.js Template..."
echo "Installing backend dependencies..."
cd backend && npm install
echo "Installing frontend dependencies..."
cd ../frontend && npm install
echo "Starting services with Docker Compose..."
cd .. && docker-compose up --build