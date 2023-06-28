#!/bin/sh

# create builded source
npm run build
# copy required files into dist folder
cp package.json dist
cp Dockerfile dist

# copy dev environment variables
cp .env.dev dist/.env

# copy production environment variables
# cp .env dist/.env

# build docker image
docker build ./dist -t enqinhlc/example-api

# delete running container
docker rm --force example-api


# create private network for containers
docker network create example-api-network

# run docker image for postgres
docker run --name example-api-postgres --network example-api-network -e POSTGRES_USER=user -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=db -p 5432:5432 -d postgres:14

# run docker image on 80 local, 4000 container port
docker run --name example-api --network example-api-network --link example-api-postgres  -p 80:4000 -d enqinhlc/example-api