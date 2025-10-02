# Contributing to Full-Stack React/Node.js Template

Thank you for contributing to this open-source template! This project aims to simplify full-stack development with React, Node.js, and MongoDB while serving as a learning tool for GitHub and full-stack workflows. Follow these steps to contribute.

## How to Contribute
1. **Fork the Repository**:
   - Go to `https://github.com/your-username/full-stack-react-node-template` and click **Fork**.
2. **Create a Codespace**:
   - Click **Code > Codespaces > Create codespace on main**.
3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   - Use descriptive names (e.g., `feature/add-auth`, `bugfix/fix-cors`).
4. **Make Changes**:
   - Edit files (e.g., `frontend/src/App.js` for React, `backend/server.js` for Express).
   - Test: Run `./start.sh` and verify at `https://<your-codespace>-3000.app.github.dev/`.
5. **Commit Changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
   - Use conventional commits (e.g., `feat`, `fix`, `docs`).
6. **Push and Create a Pull Request**:
   ```bash
   git push origin feature/your-feature-name
   ```
   - Open a PR on GitHub to the `main` branch with a clear title and description.
7. **Address Feedback**:
   - Make requested changes and push to the same branch.
8. **Sync Your Fork**:
   ```bash
   git remote add upstream https://github.com/original-owner/full-stack-react-node-template.git
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
   ```

## Testing
- **Frontend**: Check `https://<your-codespace>-3000.app.github.dev/` and test routes (`/`, `/about`).
- **Backend**: Test endpoints with `curl http://localhost:5000/api/hello` or `curl http://localhost:5000/api/users`.
- **MongoDB**: Verify database connectivity with `docker exec -it $(docker ps -q -f name=mongodb) mongosh myapp`.

## Code Style
- Follow existing patterns in `frontend/src/App.js` (React) and `backend/server.js` (Express).
- Use Tailwind CSS for frontend styling.
- Write clear, commented code.

## Reporting Issues
- Use the **Issues** tab for bugs or feature requests.
- Provide steps to reproduce, expected behavior, and screenshots (if applicable).

## Questions?
Post in the **Discussions** tab for help or ideas!