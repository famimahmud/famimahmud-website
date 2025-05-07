#!/usr/bin/env bash
set -euo pipefail

site=/var/www/famimahmud.de
builddir=$HOME/code/famimahmud-website/build   # or dist if you use Vite
timestamp=$(date +%Y-%m-%d-%H%M%S)
release=$site/releases/$timestamp

echo "Creating release $release"
sudo mkdir -p "$release"
sudo rsync -a --delete "$builddir"/ "$release"/

echo "Switching live symlink"
sudo ln -sfn "$release" "$site/current"
sudo chown -R www-data:www-data "$release"

echo "Reloading Nginx"
sudo nginx -t && sudo systemctl reload nginx
echo "✓ Deployed $timestamp"

