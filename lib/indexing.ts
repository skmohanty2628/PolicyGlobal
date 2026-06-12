// lib/indexing.ts
// IndexNow integration — instantly notify search engines about new content

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITE_URL = 'https://policyrix.com';

if (!INDEXNOW_KEY) {
  console.warn('⚠️  INDEXNOW_KEY not set — search engine indexing disabled');
}

/**
 * Notify search engines (Google, Bing, Yandex, etc.) about a single URL
 * @param url The full URL to index (e.g., https://policyrix.com/news/2026-06-11/article-slug)
 */
export async function notifyGoogle(url: string): Promise<{ success: boolean; error?: string }> {
  if (!INDEXNOW_KEY) {
    return { success: false, error: 'INDEXNOW_KEY not configured' };
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'policyrix.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: [url],
      }),
    });

    if (res.ok) {
      console.log(`✅ [IndexNow] Indexed: ${url}`);
      return { success: true };
    } else {
      const error = `HTTP ${res.status}`;
      console.error(`❌ [IndexNow] Failed: ${url} - ${error}`);
      return { success: false, error };
    }
  } catch (err) {
    const error = String(err);
    console.error(`❌ [IndexNow] Error: ${error}`);
    return { success: false, error };
  }
}

/**
 * Notify search engines about multiple URLs
 * Batches requests with a small delay to avoid rate limiting
 * @param urls Array of full URLs to index
 */
export async function notifyGoogleBatch(
  urls: string[]
): Promise<{ url: string; success: boolean; error?: string }[]> {
  if (!INDEXNOW_KEY) {
    return urls.map((url) => ({
      url,
      success: false,
      error: 'INDEXNOW_KEY not configured',
    }));
  }

  const results: { url: string; success: boolean; error?: string }[] = [];

  // IndexNow has a limit of 10,000 URLs per request
  // If we have more, split into batches
  const batchSize = 10000;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);

    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: 'policyrix.com',
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: batch,
        }),
      });

      if (res.ok) {
        console.log(`✅ [IndexNow] Batch indexed: ${batch.length} URLs`);
        batch.forEach((url) => {
          results.push({ url, success: true });
        });
      } else {
        const error = `HTTP ${res.status}`;
        console.error(`❌ [IndexNow] Batch failed: ${error}`);
        batch.forEach((url) => {
          results.push({ url, success: false, error });
        });
      }
    } catch (err) {
      const error = String(err);
      console.error(`❌ [IndexNow] Batch error: ${error}`);
      batch.forEach((url) => {
        results.push({ url, success: false, error });
      });
    }

    // Small delay between batches to avoid rate limiting (100ms)
    if (i + batchSize < urls.length) {
      await new Promise((r) => setTimeout(r, 100));
    }
  }

  return results;
}

/**
 * Verify that the IndexNow key file is accessible
 * Run this once to make sure your setup is correct
 */
export async function verifyKeyFile(): Promise<boolean> {
  if (!INDEXNOW_KEY) {
    console.warn('⚠️  INDEXNOW_KEY not set');
    return false;
  }

  try {
    const res = await fetch(`${SITE_URL}/${INDEXNOW_KEY}.txt`);
    const content = await res.text();

    if (content.trim() === INDEXNOW_KEY.trim()) {
      console.log('✅ [IndexNow] Key file verified!');
      return true;
    } else {
      console.error('❌ [IndexNow] Key file content mismatch');
      return false;
    }
  } catch (err) {
    console.error(`❌ [IndexNow] Failed to verify key file: ${err}`);
    return false;
  }
}