#!/usr/bin/env bash
# Convert all raster photos under public/ to WebP and drop the originals.
# Skips icons/social images (favicon, apple-touch, og-image) which need legacy formats.
# Usage: scripts/migrate-to-webp.sh [quality=90]
set -euo pipefail

cd "$(dirname "$0")/.."
QUALITY="${1:-90}"

if ! command -v cwebp >/dev/null 2>&1; then
	echo "cwebp not found. Install it with: brew install webp" >&2
	exit 1
fi

count=0
while IFS= read -r -d '' f; do
	out="${f%.*}.webp"
	cwebp -quiet -q "$QUALITY" "$f" -o "$out"
	rm -f "$f"
	echo "→ ${out#public/}"
	count=$((count + 1))
done < <(
	find public -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) \
		! -iname 'favicon*' ! -iname 'apple-touch-icon*' ! -iname 'og-image*' -print0
)

echo "Converted ${count} file(s) to WebP (quality ${QUALITY})."
