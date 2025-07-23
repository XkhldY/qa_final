# Duo Task

This is a minimal full-stack app:  
- **Backend:** Flask (serves `/api/hello`, plus static React frontend)
- **Frontend:** React (Vite, in `/frontend/`), fetches `/api/hello` on load and displays the greeting.

## Running

The solution runs as a single container.  
Build and run:

```bash
docker build -t duo-flask-react .
docker run -e YOUR_NAME="Alice" -p 5500:5500 duo-flask-react
```
Navigate to [http://localhost:5500](http://localhost:5500) to see the React UI.

### Continuous Integration / Deployment

GitHub Actions will automatically lint, build, and (optionally) publish the Docker image on every push and pull request to `main`:

- **Lint & build**:  
  - Checks out code, sets up Python 3.11, installs backend requirements, runs Flake8 on `app.py`
  - Sets up Node 18, installs frontend dependencies, runs `npm run build` to ensure React compiles
  - Builds the multi-stage Docker image as per the Dockerfile

- **DockerHub push**:  
  - On direct pushes to `main`, if the repository secrets `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` are set, the image is pushed to Docker Hub as `${DOCKERHUB_USERNAME}/duo-flask-react:$SHORT_SHA`.
  - For PRs and other branches, the Docker push step is skipped.

**Required secrets:**
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN` (DockerHub Personal Access Token with `write:repo`/`push` permission)

See `.github/workflows/ci.yml` for full details.

## Developing the React frontend

```bash
cd frontend
npm install
npm run dev
# open http://localhost:5173 (proxy to Flask’s /api/hello if Flask is running on port 5500)
```
To apply changes to the production build, run `npm run build` and rebuild the Docker image.

## Environment

Set the environment variable `YOUR_NAME` to your name to have the app display your name in its welcome message. Otherwise, it will refer to you as "friend".

## NGINX/Reverse Proxy

The `nginx.conf` file can be used to configure an NGINX container to run as a reverse proxy to the Flask app container, effectively making the Flask application accessible on port `80`. You will need to know how to configure networks in Docker in order to achieve this.
