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
