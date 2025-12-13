import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow, submitSitemapToIndexNow } from '@/lib/indexnow';

/**
 * API route for IndexNow submission
 * 
 * POST /api/indexnow
 * Body: { urls?: string[], submitAll?: boolean }
 * 
 * - If submitAll is true, submits all URLs from sitemap
 * - If urls is provided, submits those specific URLs
 * - If neither, returns error
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { urls, submitAll } = body;

    // Check for authentication/authorization if needed
    // For now, we'll allow it, but you might want to add API key protection
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.INDEXNOW_API_KEY;
    
    if (apiKey && authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (submitAll) {
      // Submit all URLs from sitemap
      const result = await submitSitemapToIndexNow();
      return NextResponse.json(result, {
        status: result.success ? 200 : 500,
      });
    }

    if (urls && Array.isArray(urls) && urls.length > 0) {
      // Submit specific URLs
      const result = await submitToIndexNow(urls);
      return NextResponse.json(result, {
        status: result.success ? 200 : 500,
      });
    }

    return NextResponse.json(
      { error: 'Please provide either "urls" array or "submitAll: true"' },
      { status: 400 }
    );
  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for health check
 */
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    status: 'active',
    endpoints: {
      POST: 'Submit URLs to IndexNow',
    },
  });
}

