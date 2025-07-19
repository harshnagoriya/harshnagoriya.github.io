#!/bin/bash

# Create build directory if it doesn't exist
mkdir -p build/assets/css

# Concatenate all CSS files into one
cat assets/css/style.css \
    assets/css/aws-theme.css \
    assets/css/aws-components.css \
    assets/css/aws-style.css \
    assets/css/color-fixes.css > build/assets/css/styles.combined.css

# Minify CSS (requires csso-cli to be installed: npm install -g csso-cli)
if command -v csso &> /dev/null; then
    csso build/assets/css/styles.combined.css -o build/assets/css/styles.min.css
    echo "CSS minified successfully"
else
    echo "csso-cli not found. Install with: npm install -g csso-cli"
    cp build/assets/css/styles.combined.css build/assets/css/styles.min.css
fi

echo "Build completed. Optimized CSS is in build/assets/css/styles.min.css"