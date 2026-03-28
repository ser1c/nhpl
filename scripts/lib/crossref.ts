// CrossRef API client
// Free, no API key needed. Uses polite pool via mailto parameter.

const BASE_URL = 'https://api.crossref.org/works';
const MAILTO = 'team@nepalhealthpolicylab.org';

export interface CrossRefResult {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  url: string;
  doi: string;
  type: string;
}

export async function fetchCrossRef(doi: string): Promise<CrossRefResult | null> {
  try {
    const url = `${BASE_URL}/${encodeURIComponent(doi)}?mailto=${MAILTO}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`CrossRef: HTTP ${response.status} for DOI ${doi}`);
      return null;
    }

    const data = await response.json();
    const item = data.message;

    const title = item.title?.[0] ?? 'Unknown title';

    const authors: string[] = (item.author ?? []).map(
      (a: { given?: string; family?: string }) =>
        [a.given, a.family].filter(Boolean).join(' ')
    );

    const journal =
      item['container-title']?.[0] ?? item['short-container-title']?.[0] ?? 'Unknown journal';

    // Year from published-print, published-online, or issued
    const dateParts =
      item['published-print']?.['date-parts']?.[0] ??
      item['published-online']?.['date-parts']?.[0] ??
      item['issued']?.['date-parts']?.[0] ??
      [];
    const year = dateParts[0] ?? 0;

    const paperUrl = item.URL ?? `https://doi.org/${doi}`;

    return {
      title,
      authors,
      journal,
      year,
      url: paperUrl,
      doi: item.DOI ?? doi,
      type: item.type ?? 'unknown',
    };
  } catch (error) {
    console.error(`CrossRef: Failed to fetch DOI ${doi}:`, error instanceof Error ? error.message : error);
    return null;
  }
}
