#!/bin/bash

# Create a temporary directory for packaging
TEMP_DIR=$(mktemp -d)
THEME_NAME="cheese-theme"

# Copy theme files directly to temp directory
cp manifest.json "$TEMP_DIR/"
cp pizza.png "$TEMP_DIR/"
cp README.md "$TEMP_DIR/"

# Create the XPI file
cd "$TEMP_DIR"
zip -r "$THEME_NAME.xpi" .

# Move the XPI file to the current directory
mv "$THEME_NAME.xpi" "$OLDPWD/"

# Clean up
cd "$OLDPWD"
rm -rf "$TEMP_DIR"

echo "Theme package created: $THEME_NAME.xpi"
echo "To install the theme permanently:"
echo "1. Open Firefox"
echo "2. Go to about:addons"
echo "3. Click the gear icon and select 'Install Add-on From File...'"
echo "4. Select the $THEME_NAME.xpi file" 