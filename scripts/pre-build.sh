#!/bin/bash

echo "Sitemap: https://www$DEPLOY_ENV.dedoai.org/sitemap.xml" >> ./static/robots.txt

echo "
# Recaptcha
[recaptcha]
key = \"$RECAPTCHA_KEY\"" >> ./config/_default/params.toml

echo "
# Apis
[apis]
basePath = \"$API_BASE_PATH\"" >> ./config/_default/params.toml
