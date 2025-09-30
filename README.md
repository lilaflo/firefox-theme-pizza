# Pizza Ingredients Firefox Theme

A delicious pizza-themed Firefox theme that brings a sleek dark grey and white color scheme to your browser.

## Installation

1. Open Firefox
2. Type `about:debugging` in the address bar
3. Click "This Firefox" on the left sidebar
4. Click "Load Temporary Add-on"
5. Navigate to and select the `manifest.json` file from this theme

## Features

- Dark grey frame and toolbar
- White text for optimal contrast
- Clean and modern dark theme
- Easy on the eyes

## Development

This theme uses Firefox's built-in theming system. The colors are defined in the `manifest.json` file.

### Building

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the theme package:
   ```bash
   npm run build
   ```

This creates `cheese-theme.xpi` which can be installed permanently in Firefox.

## Attribution

<a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by Freepik - Flaticon</a>

## License

MIT License
