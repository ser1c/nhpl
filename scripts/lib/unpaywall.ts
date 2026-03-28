// Unpaywall API client
// Free, no API key needed. Requires email parameter.

const BASE_URL = 'https://api.unpaywall.org/v2';
const EMAIL = 'team@nepalhealthpolicylab.org';

export interface UnpaywallResult {
  isOA: boolean;
  oaUrl: string | null;
  license: string | null;
}

export async function fetchUnpaywall(doi: string): Promise<UnpaywallResult | null> {
  try {
    const url = `${BASE_URL}/${encodeURIComponent(doi)}?email=${EMAIL}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Unpaywall: HTTP ${response.status} for DOI ${doi}`);
      return null;
    }

    const data = await response.json();

    const bestOaLocation = data.best_oa_location;

    return {
      isOA: data.is_oa ?? false,
      oaUrl: bestOaLocation?.url_for_pdf ?? bestOaLocation?.url ?? null,
      license: bestOaLocation?.license ?? null,
    };
  } catch (error) {
    console.error(`Unpaywall: Failed to fetch DOI ${doi}:`, error instanceof Error ? error.message : error);
    return null;
  }
}
