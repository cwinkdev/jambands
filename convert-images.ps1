# PowerShell script to convert HEIC images to JPG format
# This script converts all HEIC files in the images directory to JPG

Write-Host "Converting HEIC images to JPG format..." -ForegroundColor Green

# Check if ImageMagick is installed
try {
    magick -version | Out-Null
} catch {
    Write-Host "ImageMagick is not installed. Please install it first:" -ForegroundColor Red
    Write-Host "Windows: choco install imagemagick" -ForegroundColor Yellow
    Write-Host "Or download from: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    exit 1
}

# Navigate to the images directory
$imagesPath = "public\products\halo\images"
if (Test-Path $imagesPath) {
    Set-Location $imagesPath
} else {
    Write-Host "Images directory not found: $imagesPath" -ForegroundColor Red
    exit 1
}

# Get all HEIC files
$heicFiles = Get-ChildItem -Filter "*.HEIC"

if ($heicFiles.Count -eq 0) {
    Write-Host "No HEIC files found in the directory." -ForegroundColor Yellow
    exit 0
}

# Convert each HEIC file to JPG
foreach ($file in $heicFiles) {
    $filename = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $jpgPath = "$filename.jpg"

    Write-Host "Converting $($file.Name) to $jpgPath" -ForegroundColor Cyan

    try {
        # Convert HEIC to JPG with quality optimization
        magick $file.Name -quality 85 $jpgPath

        Write-Host "✓ Successfully converted $($file.Name)" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed to convert $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nConversion complete!" -ForegroundColor Green
Write-Host "You can now update the image paths in your code to use .jpg instead of .HEIC" -ForegroundColor Yellow
