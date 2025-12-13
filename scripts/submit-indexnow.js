/**
 * Script to submit all sitemap URLs to IndexNow after build
 * This script is run automatically after the build process
 */

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow';
const INDEXNOW_KEY = '69c9c1b879bf4d9eb64c378372a36a08';
const BASE_URL = 'https://waterraptor.com';

async function submitToIndexNow(urls) {
  try {
    const payload = {
      host: new URL(BASE_URL).hostname,
      key: INDEXNOW_KEY,
      urlList: urls,
    };

    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      return { success: true };
    }

    const errorText = await response.text();
    return { success: false, error: `${response.status} - ${errorText}` };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function getSitemapUrls() {
  const fs = require('fs');
  const path = require('path');
  
  try {
    const candidates = [
      // Legacy/static sitemap (if present)
      path.join(__dirname, '..', 'public', 'sitemap.xml'),
      // Some builds may emit a physical sitemap artifact
      path.join(__dirname, '..', '.next', 'server', 'app', 'sitemap.xml'),
      path.join(__dirname, '..', '.next', 'server', 'sitemap.xml'),
    ];

    for (let i = 0; i < candidates.length; i++) {
      const sitemapPath = candidates[i];
      if (!fs.existsSync(sitemapPath)) continue;

      const stat = fs.statSync(sitemapPath);
      if (!stat.isFile()) continue;

      const xml = fs.readFileSync(sitemapPath, 'utf8');
      const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
      const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
      if (urls.length > 0) return urls;
    }

    // Fallback: Try to fetch from live site (for post-deployment scenarios)
    try {
      const sitemapUrl = `${BASE_URL}/sitemap.xml`;
      const response = await fetch(sitemapUrl, { 
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      
      if (response.ok) {
        const xml = await response.text();
        const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
        const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
        if (urls.length > 0) {
          return urls;
        }
      }
    } catch (fetchError) {
      // If fetch fails, continue
      console.log('Could not fetch from live site, sitemap may not be available yet.');
    }

    // Last resort: return empty array
    console.warn('⚠️  Could not find sitemap. URLs will need to be submitted manually via API or webhook.');
    return [];
  } catch (error) {
    console.error('Error getting sitemap URLs:', error instanceof Error ? error.message : error);
    return [];
  }
}

async function main() {
  console.log('🚀 Starting IndexNow submission...');
  
  // Get URLs from sitemap
  const urls = await getSitemapUrls();
  
  if (urls.length === 0) {
    console.warn('⚠️  No URLs found in sitemap. Skipping IndexNow submission.');
    process.exit(0);
  }

  console.log(`📋 Found ${urls.length} URLs in sitemap`);

  // Submit in batches of 100
  const batchSize = 100;
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    console.log(`📤 Submitting batch ${Math.floor(i / batchSize) + 1} (${batch.length} URLs)...`);
    
    const result = await submitToIndexNow(batch);
    
    if (result.success) {
      successCount += batch.length;
      console.log(`✅ Successfully submitted batch ${Math.floor(i / batchSize) + 1}`);
    } else {
      errorCount += batch.length;
      console.error(`❌ Failed to submit batch ${Math.floor(i / batchSize) + 1}:`, result.error);
    }

    // Small delay between batches
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log('\n📊 Submission Summary:');
  console.log(`   ✅ Success: ${successCount} URLs`);
  if (errorCount > 0) {
    console.log(`   ❌ Errors: ${errorCount} URLs`);
  }
  console.log('✨ IndexNow submission complete!');
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
