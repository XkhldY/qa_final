# --------- Stage 0: Build React frontend ---------
FROM node:18-alpine AS frontend-build

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm ci --silent

COPY frontend ./
RUN npm run build

# --------- Stage 1: Build Flask backend and assemble app ---------
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Copy React build artefacts into Flask's static serving directory
# For Vite, build output is in /frontend/dist; for CRA, it's /frontend/build
COPY --from=frontend-build /frontend/dist ./react-build

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5500

EXPOSE 5500

CMD ["flask", "run", "--host=0.0.0.0", "--port=5500"]
