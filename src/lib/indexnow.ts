/**
 * IndexNow utility for submitting URLs to search engines
 * IndexNow is an open protocol that allows websites to instantly inform search engines
 * about URL changes on their website.
 */

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow';
const INDEXNOW_KEY = '69c9c1b879bf4d9eb64c378372a36a08';
const BASE_URL = 'https://waterraptor.com';

export interface IndexNowResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Submit a single URL or multiple URLs to IndexNow
 * @param urls - Single URL string or array of URL strings
 * @returns Promise with submission result
 */
export async function submitToIndexNow(
  urls: string | string[]
): Promise<IndexNowResponse> {
  try {
    // Normalize URLs to array
    const urlList = Array.isArray(urls) ? urls : [urls];
    
    // Ensure all URLs are absolute
    const normalizedUrls = urlList.map((url) => {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
      }
      // Remove leading slash if present, then add it back
      const path = url.startsWith('/') ? url : `/${url}`;
      return `${BASE_URL}${path}`;
    });

    // IndexNow API payload
    const payload = {
      host: new URL(BASE_URL).hostname,
      key: INDEXNOW_KEY,
      urlList: normalizedUrls,
    };

    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // IndexNow returns 200 for success, 202 for accepted
    if (response.ok || response.status === 202) {
      return {
        success: true,
        message: `Successfully submitted ${normalizedUrls.length} URL(s) to IndexNow`,
      };
    }

    // Handle errors
    const errorText = await response.text();
    return {
      success: false,
      error: `IndexNow API error: ${response.status} - ${errorText}`,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      error: `Failed to submit to IndexNow: ${errorMessage}`,
    };
  }
}

/**
 * Submit all URLs from the sitemap to IndexNow
 * This function reads the sitemap and submits all URLs in batches
 */
export async function submitSitemapToIndexNow(): Promise<IndexNowResponse> {
  try {
    // Import sitemap dynamically to avoid circular dependencies
    const { default: sitemap } = await import('../app/sitemap');
    const sitemapData = sitemap();
    
    // Extract all URLs from sitemap
    const urls = sitemapData.map((entry) => entry.url);
    
    // IndexNow recommends submitting in batches of up to 10,000 URLs
    // We'll submit in batches of 100 to be safe
    const batchSize = 100;
    const results: IndexNowResponse[] = [];
    
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const result = await submitToIndexNow(batch);
      results.push(result);
      
      // Small delay between batches to avoid rate limiting
      if (i + batchSize < urls.length) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    
    // Check if all batches succeeded
    const allSuccess = results.every((r) => r.success);
    const totalSubmitted = urls.length;
    
    return {
      success: allSuccess,
      message: allSuccess
        ? `Successfully submitted all ${totalSubmitted} URLs from sitemap to IndexNow`
        : `Submitted ${totalSubmitted} URLs with some errors`,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      error: `Failed to submit sitemap to IndexNow: ${errorMessage}`,
    };
  }
}

