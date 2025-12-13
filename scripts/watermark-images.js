/**
 * Script to add Water Raptor claw trademark watermark to all images
 * This script processes images in the public/images directory and adds
 * the claw SVG as a watermark/tag overlay
 * 
 * Requires: npm install sharp
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Error: sharp package is required but not installed.');
  console.error('   Please run: npm install sharp');
  process.exit(1);
}

// Configuration
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const CLAW_SVG_PATH = path.join(__dirname, '..', 'public', 'images', 'graphics', 'clawssss.svg');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'watermarked');
const WATERMARK_OPACITY = 0.15; // 15% opacity for watermark
const WATERMARK_SIZE_RATIO = 0.15; // 15% of image size
const WATERMARK_POSITION = 'bottom-right'; // Position: 'bottom-right', 'bottom-left', 'top-right', 'top-left', 'center'
const WATERMARK_PADDING = 20; // Padding from edges in pixels

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Get all image files recursively
 */
function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['watermarked', 'graphics', 'logo'].includes(file)) {
        getAllImages(filePath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

/**
 * Calculate watermark position for sharp composite
 */
function getWatermarkPosition(imgWidth, imgHeight, watermarkWidth, watermarkHeight, position) {
  switch (position) {
    case 'bottom-right':
      return {
        left: imgWidth - watermarkWidth - WATERMARK_PADDING,
        top: imgHeight - watermarkHeight - WATERMARK_PADDING
      };
    case 'bottom-left':
      return {
        left: WATERMARK_PADDING,
        top: imgHeight - watermarkHeight - WATERMARK_PADDING
      };
    case 'top-right':
      return {
        left: imgWidth - watermarkWidth - WATERMARK_PADDING,
        top: WATERMARK_PADDING
      };
    case 'top-left':
      return {
        left: WATERMARK_PADDING,
        top: WATERMARK_PADDING
      };
    case 'center':
      return {
        left: Math.floor((imgWidth - watermarkWidth) / 2),
        top: Math.floor((imgHeight - watermarkHeight) / 2)
      };
    default:
      return {
        left: imgWidth - watermarkWidth - WATERMARK_PADDING,
        top: imgHeight - watermarkHeight - WATERMARK_PADDING
      };
  }
}

/**
 * Watermark a single image using sharp
 */
async function watermarkImage(imagePath, outputPath) {
  try {
    console.log(`Processing: ${path.basename(imagePath)}`);
    
    // Get image metadata
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    const { width, height } = metadata;
    
    // Calculate watermark size
    const watermarkSize = Math.min(width, height) * WATERMARK_SIZE_RATIO;
    
    // Load and resize the claw SVG
    const watermark = sharp(CLAW_SVG_PATH)
      .resize(Math.round(watermarkSize), null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    
    const watermarkMetadata = await watermark.metadata();
    const watermarkWidth = watermarkMetadata.width;
    const watermarkHeight = watermarkMetadata.height;
    
    // Calculate position
    const position = getWatermarkPosition(width, height, watermarkWidth, watermarkHeight, WATERMARK_POSITION);
    
    // Get watermark with alpha channel and apply opacity
    // We'll create a semi-transparent watermark by extracting channels and modifying alpha
    const watermarkRaw = await watermark
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Modify alpha channel to apply opacity
    const pixels = watermarkRaw.data;
    for (let i = 3; i < pixels.length; i += 4) {
      pixels[i] = Math.round(pixels[i] * WATERMARK_OPACITY);
    }
    
    // Create new buffer with modified alpha
    const watermarkWithOpacity = await sharp(Buffer.from(pixels), {
      raw: {
        width: watermarkRaw.info.width,
        height: watermarkRaw.info.height,
        channels: 4
      }
    })
      .png()
      .toBuffer();
    
    // Composite the watermark onto the image
    const watermarked = await image
      .composite([{
        input: watermarkWithOpacity,
        left: position.left,
        top: position.top,
        blend: 'over'
      }])
      .toBuffer();
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Save the watermarked image
    await sharp(watermarked).toFile(outputPath);
    console.log(`✓ Watermarked: ${path.basename(outputPath)}`);
    
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error.message);
    throw error;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🎨 Starting image watermarking process...\n');
  
  // Check if claw SVG exists
  if (!fs.existsSync(CLAW_SVG_PATH)) {
    console.error(`❌ Claw SVG not found at: ${CLAW_SVG_PATH}`);
    console.error('Please ensure the claw SVG file exists before running this script.');
    process.exit(1);
  }
  
  // Get all images
  console.log('📂 Scanning for images...');
  const images = getAllImages(IMAGES_DIR);
  console.log(`Found ${images.length} images to process\n`);
  
  if (images.length === 0) {
    console.log('No images found to watermark.');
    return;
  }
  
  // Process each image
  let processed = 0;
  let failed = 0;
  
  for (const imagePath of images) {
    try {
      // Create output path maintaining directory structure
      const relativePath = path.relative(IMAGES_DIR, imagePath);
      const outputPath = path.join(OUTPUT_DIR, relativePath);
      
      await watermarkImage(imagePath, outputPath);
      processed++;
    } catch (error) {
      console.error(`Failed to process ${imagePath}:`, error.message);
      failed++;
    }
  }
  
  console.log(`\n✨ Watermarking complete!`);
  console.log(`   ✅ Processed: ${processed} images`);
  if (failed > 0) {
    console.log(`   ❌ Failed: ${failed} images`);
  }
  console.log(`   📁 Output directory: ${OUTPUT_DIR}`);
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

