#!/bin/bash

# Convert HEIC images to JPG format
# This script converts all HEIC files in the images directory to JPG

echo "Converting HEIC images to JPG format..."

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo "Windows: choco install imagemagick"
    echo "macOS: brew install imagemagick"
    echo "Linux: sudo apt-get install imagemagick"
    exit 1
fi

# Navigate to the images directory
cd "public/products/halo/images"

# Convert all HEIC files to JPG
for file in *.HEIC; do
    if [ -f "$file" ]; then
        # Get filename without extension
        filename="${file%.*}"
        echo "Converting $file to ${filename}.jpg"

        # Convert HEIC to JPG with quality optimization
        magick "$file" -quality 85 "${filename}.jpg"

        # Optional: Remove original HEIC file after conversion
        # rm "$file"
    fi
done

echo "Conversion complete!"
echo "You can now update the image paths in your code to use .jpg instead of .HEIC"
