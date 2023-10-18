#!/bin/bash

# Exit the script if any command fails
set -e

# Source the configuration file
source .local_config/config.cfg

# Build the Angular project
ng build --prod --base-href "https://$GITHUB_USERNAME.github.io/$REPO_NAME/"

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/nova-nex-tech-site
