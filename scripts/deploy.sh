#!/usr/bin/env bash
GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO:-$(node -e 'process.stdout.write(require("./package.json").repository)')}

if [ "$TRAVIS" = "true" ]
then
  # git need this, on Travis-CI nobody is defined
  git config --global user.name "Easybird from Travis" && \
  git config --global user.email "easybird85@gmail.com"
fi

# Move other necessary files to dist folder
cp ./.travis.yml dist

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy static site" && \
git push --force "${GIT_DEPLOY_REPO}" master:master