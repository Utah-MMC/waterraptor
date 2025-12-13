const fs = require('fs');
const path = require('path');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.avif']);
const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const outputFile = path.join(process.cwd(), 'public', 'gallery-list.json');
const ASSET_VERSION = process.env.ASSET_VERSION || String(Date.now());

const sanitizeAlt = (name) => {
  return name
    .replace(path.extname(name), '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
};

try {
  // Check if directory exists
  if (!fs.existsSync(publicImagesDir)) {
    console.warn(`Images directory not found: ${publicImagesDir}`);
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    process.exit(0);
  }

  // Only read top-level files to avoid large subdirectories
  const files = fs.readdirSync(publicImagesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .map((file) => ({
      name: file,
      url: `/images/${encodeURIComponent(file)}?v=${encodeURIComponent(ASSET_VERSION)}`,
      alt: sanitizeAlt(file),
    }));

  fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
  console.log(`✓ Generated gallery list with ${files.length} images`);
} catch (error) {
  console.error('✗ Failed to generate gallery list:', error.message);
  // Write empty array as fallback
  try {
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    console.log('✓ Created empty gallery list as fallback');
  } catch (writeError) {
    console.error('✗ Failed to write fallback file:', writeError.message);
    process.exit(1);
  }
}
