#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { createWriteStream } = require('fs');
const archiver = require('archiver');

const THEME_NAME = 'cheese-theme';
const OUTPUT_FILE = `${THEME_NAME}.xpi`;

// Files to include in the package
const files = ['manifest.json', 'pizza.png', 'README.md'];

// Create output stream
const output = createWriteStream(OUTPUT_FILE);
const archive = archiver('zip', {
  zlib: { level: 9 }
});

// Listen for archive events
output.on('close', () => {
  console.log(`Theme package created: ${OUTPUT_FILE}`);
  console.log(`Total bytes: ${archive.pointer()}`);
  console.log('\nTo install the theme permanently:');
  console.log('1. Open Firefox');
  console.log('2. Go to about:addons');
  console.log('3. Click the gear icon and select "Install Add-on From File..."');
  console.log(`4. Select the ${OUTPUT_FILE} file`);
});

archive.on('error', (err) => {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files to the archive
files.forEach(file => {
  if (fs.existsSync(file)) {
    archive.file(file, { name: file });
  } else {
    console.warn(`Warning: ${file} not found, skipping...`);
  }
});

// Finalize the archive
archive.finalize();