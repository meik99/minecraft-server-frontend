#!/usr/bin/env bash
name="meik99/minecraft-server-frontend"
tag="$(date +'%d.%m.%y-%H.%M')"

ng build --prod

if docker build -f Dockerfile -t "${name}:${tag}" -t "${name}:latest" .
then
  docker push "${name}:${tag}" && \
  docker push "${name}:latest"
fi
