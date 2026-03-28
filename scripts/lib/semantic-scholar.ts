// Semantic Scholar API client
// Free, no API key needed.

const BASE_URL = 'https://api.semanticscholar.org/graph/v1/paper';
const FIELDS = 'title,abstract,citationCount,fieldsOfStudy,isOpenAccess,externalIds,tldr,isRetracted';

export interface SemanticScholarResult {
  abstract: string | null;
  citationCount: number;
  fieldsOfStudy: string[];
  isOpenAccess: boolean;
  externalIds: Record<string, string>;
  tldr: { model: string; text: string } | null;
  isRetracted: boolean;
}

export async function fetchSemanticScholar(doi: string): Promise<SemanticScholarResult | null> {
  try {
    const url = `${BASE_URL}/DOI:${encodeURIComponent(doi)}?fields=${FIELDS}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Semantic Scholar: HTTP ${response.status} for DOI ${doi}`);
      return null;
    }

    const data = await response.json();

    return {
      abstract: data.abstract ?? null,
      citationCount: data.citationCount ?? 0,
      fieldsOfStudy: data.fieldsOfStudy ?? [],
      isOpenAccess: data.isOpenAccess ?? false,
      externalIds: data.externalIds ?? {},
      tldr: data.tldr ?? null,
      isRetracted: data.isRetracted ?? false,
    };
  } catch (error) {
    console.error(`Semantic Scholar: Failed to fetch DOI ${doi}:`, error instanceof Error ? error.message : error);
    return null;
  }
}
