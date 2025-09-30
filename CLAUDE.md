# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Firefox browser theme extension called "Pizza Ingredients". It's a simple static theme that applies dark grey/white color scheme with a pizza background image to the Firefox browser interface.

## Project Structure

- `manifest.json` - Firefox theme manifest (manifest_version 2) defining colors, images, and properties
- `pizza.png` - Background image used for the theme
- `build.js` - Node.js build script that packages the theme into an XPI file
- `package.json` - Node.js project configuration with build script
- `cheese-theme.xpi` - The packaged extension file ready for distribution

## Key Commands

**Install dependencies:**
```bash
npm install
```

**Build/Package the theme:**
```bash
npm run build
```
This creates `cheese-theme.xpi` by zipping manifest.json, pizza.png, and README.md using the archiver library.

**Test in Firefox (temporary installation):**
1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" → "Load Temporary Add-on"
3. Select the `manifest.json` file

**Install packaged XPI permanently:**
1. Open Firefox and navigate to `about:addons`
2. Click gear icon → "Install Add-on From File..."
3. Select the `cheese-theme.xpi` file

## Theme Configuration

All theme styling is defined in `manifest.json` under the `theme` object:
- `colors` - Defines frame, toolbar, and text colors (hex values)
- `images` - References `pizza.png` for theme_frame and additional_backgrounds
- `properties` - Controls background alignment and tiling behavior

To modify the theme appearance, edit the color values or replace pizza.png with a different image.