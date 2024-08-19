#!/bin/bash
data="Sitemap: https://www$DEPLOY_ENV.dedoai.org/sitemap.xml"
echo "$data" >> ./themes/dedoai/layouts/robots.txt
