# Docker 3-Tier Application

## Run
docker compose up --build

## Access
Frontend: http://localhost
API: http://localhost/api

## Explanation
- Backend retries DB connection if MySQL is not ready
- Nginx uses env variable BACKEND_URL
- Services communicate via Docker network

## Failure Scenario
If MySQL restarts:
- Backend retries connection
- Recovers automatically in few seconds
