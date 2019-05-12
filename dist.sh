#!/usr/bin/env bash

docker pull electronuserland/builder:wine

docker run --rm -ti \
  --env WINEPREFIX="/root/.wine" \
  --env ELECTRON_CACHE="/root/.cache/electron" \
  --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
  -v ${PWD}:/project \
  -v ${PWD##*/}-node-modules:/project/node_modules \
  -v ~/.cache/electron:/root/.cache/electron \
  -v ~/.cache/electron-builder:/root/.cache/electron-builder \
  electronuserland/builder:wine /bin/bash -c "yarn install && yarn build && yarn dist"
