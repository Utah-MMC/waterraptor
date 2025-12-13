import { NextRequest, NextResponse } from 'next/server';
import { submitSitemapToIndexNow } from '@/lib/indexnow';

/**
 * Webhook endpoint for automatic IndexNow submission after deployment
 * 
 * This can be called by:
 * - Vercel deployment webhook
 * - GitHub Actions
 * - Any CI/CD pipeline
 * 
 * POST /api/indexnow/webhook
 * Headers: Authorization: Bearer <INDEXNOW_WEBHOOK_SECRET>
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add webhook secret for security
    const webhookSecret = process.env.INDEXNOW_WEBHOOK_SECRET;
    if (webhookSecret) {
      const authHeader = request.headers.get('authorization');
      if (authHeader !== `Bearer ${webhookSecret}`) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }
    }

    // Submit all URLs from sitemap
    const result = await submitSitemapToIndexNow();
    
    return NextResponse.json({
      ...result,
      timestamp: new Date().toISOString(),
    }, {
      status: result.success ? 200 : 500,
    });
  } catch (error) {
    console.error('IndexNow webhook error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
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
    service: 'IndexNow Webhook',
    status: 'active',
    description: 'Webhook endpoint for automatic IndexNow submission after deployment',
  });
}

