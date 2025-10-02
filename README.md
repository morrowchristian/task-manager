# Full-Stack React/Node.js Template

A template for building full-stack apps with React, Node.js/Express, and MongoDB in GitHub Codespaces.

## Quick Start

1. Create a Codespace: Click **Code > Codespaces > Create codespace on main**.
2. Run the app:
   ```bash
   ./start.sh
3. Open
- Frontend: https://<your-codespace>-3000.app.github.dev/
- Backend: https://<your-codespace>-5000.app.github.dev/api/hello 

## Features

- Frontend: React with Tailwind CSS and React Router.
- Backend: Express with hot reloading (nodemon) and MongoDB.
- Docker: Pre-configured with docker-compose.yml for consistent environments.

## Extending the App

- Add React Components: Edit frontend/src/App.js or add new files in frontend/src.
- Add Backend Routes: Modify backend/server.js (see /api/test example).
- Use MongoDB: Query the myapp database via the /api/users endpoint.

## Community

Join the conversation in our [Discussions](https://github.com/morrowchristian/fullstack-react-node-template/discussions)!

## Troubleshooting

- Check logs: docker-compose logs frontend or docker-compose logs backend.
- Rebuild: docker-compose down && ./start.sh.