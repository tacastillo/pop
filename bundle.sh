#!/bin/bash
# manage bundling of scss and assets, then throws it into the dist directory

DIST_DIR_ASSETS=./dist/pop/assets

npm run bundle-styles
mkdir $DIST_DIR_ASSETS
cp -R ./projects/pop/src/lib/styles/assets/* $DIST_DIR_ASSETS
