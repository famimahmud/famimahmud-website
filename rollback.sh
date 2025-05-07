#!/usr/bin/env bash
set -euo pipefail

site=/var/www/famimahmud.de
releases_dir="$site/releases"

# List releases sorted by time (latest last)
releases=($(ls -1 $releases_dir | sort))

if [ ${#releases[@]} -lt 2 ]; then
  echo "Not enough releases to roll back."
  exit 1
fi

# Get second-to-last release (previous deployment)
previous_release="${releases[-2]}"
echo "Rolling back to $previous_release"

sudo ln -sfn "$releases_dir/$previous_release" "$site/current"
sudo chown -R www-data:www-data "$releases_dir/$previous_release"

echo "Reloading Nginx"
sudo nginx -t && sudo systemctl reload nginx

echo "Rolled back to $previous_release"
