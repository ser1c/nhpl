import { useState, useMemo } from 'preact/hooks';
import Fuse from 'fuse.js';
import type { EvidenceEntry, PolicyDomain, StudyDesign, EvidenceStrength } from '../data/evidence.schema';
import { policyDomainLabels, studyDesignLabels, evidenceStrengthLabels } from '../data/taxonomy';

interface Props {
  papers: EvidenceEntry[];
  lang: 'en' | 'ne';
  basePath: string;
  topicSlug?: string;
}

type SortKey = 'relevance' | 'year' | 'dateAdded';

const sortLabels: Record<SortKey, { en: string; ne: string }> = {
  relevance: { en: 'Nepal Relevance', ne: 'नेपाल सान्दर्भिकता' },
  year: { en: 'Year', ne: 'वर्ष' },
  dateAdded: { en: 'Date Added', ne: 'थपिएको मिति' },
};

export default function EvidenceSearch({ papers, lang, basePath, topicSlug }: Props) {
  const [query, setQuery] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<PolicyDomain[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<StudyDesign | ''>('');
  const [selectedStrength, setSelectedStrength] = useState<EvidenceStrength | ''>('');
  const [sortBy, setSortBy] = useState<SortKey>('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const fuse = useMemo(
    () =>
      new Fuse(papers, {
        keys: [
          { name: 'title', weight: 0.3 },
          { name: 'authors', weight: 0.15 },
          { name: `onePager.whatWasStudied.${lang}`, weight: 0.15 },
          { name: `onePager.whatTheyFound.${lang}`, weight: 0.15 },
          { name: `onePager.whatItMeansForNepal.${lang}`, weight: 0.15 },
          { name: `contextualisation.${lang}`, weight: 0.1 },
        ],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [papers, lang]
  );

  const filtered = useMemo(() => {
    let results = query ? fuse.search(query).map((r) => r.item) : [...papers];

    if (selectedDomains.length > 0) {
      results = results.filter((p) =>
        p.policyDomain.some((d) => selectedDomains.includes(d))
      );
    }
    if (selectedDesign) {
      results = results.filter((p) => p.studyDesign === selectedDesign);
    }
    if (selectedStrength) {
      results = results.filter((p) => p.evidenceStrength === selectedStrength);
    }

    if (!query) {
      results.sort((a, b) => {
        if (sortBy === 'relevance') return b.nepalRelevanceScore - a.nepalRelevanceScore;
        if (sortBy === 'year') return b.year - a.year;
        return b.dateAdded.localeCompare(a.dateAdded);
      });
    }

    return results;
  }, [query, selectedDomains, selectedDesign, selectedStrength, sortBy, papers, fuse]);

  const availableDomains = useMemo(() => {
    const domains = new Set<PolicyDomain>();
    papers.forEach((p) => p.policyDomain.forEach((d) => domains.add(d)));
    return Array.from(domains).sort();
  }, [papers]);

  const toggleDomain = (d: PolicyDomain) => {
    setSelectedDomains((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  const strengthVariant: Record<string, string> = {
    high: 'bg-green-50 text-green-800',
    moderate: 'bg-amber-50 text-amber-800',
    low: 'bg-red-50 text-red-800',
  };

  return (
    <div>
      {/* Search Bar */}
      <div class="mb-4">
        <input
          type="text"
          placeholder={lang === 'ne' ? 'पत्रहरू खोज्नुहोस्...' : 'Search papers...'}
          value={query}
          onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
          class="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal"
        />
      </div>

      {/* Filter Toggle + Sort */}
      <div class="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          class="text-sm text-teal hover:text-teal-dark font-medium"
        >
          {lang === 'ne' ? 'फिल्टरहरू' : 'Filters'} {showFilters ? '▲' : '▼'}
        </button>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-tertiary">{lang === 'ne' ? 'क्रमबद्ध' : 'Sort'}:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy((e.target as HTMLSelectElement).value as SortKey)}
            class="text-sm border border-border rounded px-2 py-1 focus:outline-none focus:border-teal"
          >
            {(Object.keys(sortLabels) as SortKey[]).map((key) => (
              <option value={key}>{sortLabels[key][lang]}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div class="border border-border rounded-xl p-4 mb-4 space-y-4">
          {/* Policy Domain */}
          <div>
            <h4 class="text-xs font-bold text-gray-mid uppercase mb-2">
              {lang === 'ne' ? 'नीति क्षेत्र' : 'Policy Domain'}
            </h4>
            <div class="flex flex-wrap gap-1.5">
              {availableDomains.map((d) => (
                <button
                  onClick={() => toggleDomain(d)}
                  aria-pressed={selectedDomains.includes(d)}
                  class={`text-xs px-2 py-1 rounded-full border transition-colors ${
                    selectedDomains.includes(d)
                      ? 'bg-teal text-white border-teal'
                      : 'border-border text-gray-mid hover:border-teal'
                  }`}
                >
                  {policyDomainLabels[d][lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Study Design */}
          <div>
            <h4 class="text-xs font-bold text-gray-mid uppercase mb-2">
              {lang === 'ne' ? 'अध्ययन डिजाइन' : 'Study Design'}
            </h4>
            <select
              value={selectedDesign}
              onChange={(e) => setSelectedDesign((e.target as HTMLSelectElement).value as StudyDesign | '')}
              class="text-sm border border-border rounded px-2 py-1 w-full focus:outline-none focus:border-teal"
            >
              <option value="">{lang === 'ne' ? 'सबै' : 'All'}</option>
              {Object.entries(studyDesignLabels).map(([key, label]) => (
                <option value={key}>{label[lang]}</option>
              ))}
            </select>
          </div>

          {/* Evidence Strength */}
          <div>
            <h4 class="text-xs font-bold text-gray-mid uppercase mb-2">
              {lang === 'ne' ? 'प्रमाण बल' : 'Evidence Strength'}
            </h4>
            <div class="flex gap-2">
              {(Object.entries(evidenceStrengthLabels) as [EvidenceStrength, { en: string; ne: string }][]).map(
                ([key, label]) => (
                  <button
                    onClick={() => setSelectedStrength(selectedStrength === key ? '' : key)}
                    aria-pressed={selectedStrength === key}
                    class={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      selectedStrength === key
                        ? strengthVariant[key]
                        : 'border-border text-gray-mid hover:border-teal'
                    }`}
                  >
                    {label[lang]}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Clear */}
          {(selectedDomains.length > 0 || selectedDesign || selectedStrength) && (
            <button
              onClick={() => {
                setSelectedDomains([]);
                setSelectedDesign('');
                setSelectedStrength('');
              }}
              class="text-xs text-red-800 hover:text-red-800/80"
            >
              {lang === 'ne' ? 'फिल्टरहरू हटाउनुहोस्' : 'Clear filters'}
            </button>
          )}
        </div>
      )}

      {/* Results Count */}
      <p class="text-sm text-gray-tertiary mb-4">
        {filtered.length} {lang === 'ne' ? 'पत्रहरू' : 'papers'}
        {query && (
          <span>
            {' '}
            {lang === 'ne' ? 'को लागि' : 'for'} "{query}"
          </span>
        )}
      </p>

      {/* Results */}
      <div class="space-y-4">
        {filtered.map((paper) => {
          const href = topicSlug
            ? `${basePath}/${topicSlug}/${paper.slug}`
            : `${basePath}/browse/${paper.slug}`;
          const authorDisplay =
            paper.authors.length > 3
              ? `${paper.authors.slice(0, 3).join(', ')} et al.`
              : paper.authors.join(', ');

          return (
            <a
              href={href}
              class="block bg-white border border-border border-l-4 border-l-teal rounded-xl p-4 md:p-6 hover:shadow-md transition-all group"
            >
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold text-gray-dark group-hover:text-teal transition-colors text-base leading-snug flex-1">
                  {paper.title}
                </h3>
                <div class="flex items-center gap-1 shrink-0">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      class={`w-2 h-2 rounded-full ${
                        i <= paper.nepalRelevanceScore ? 'bg-teal' : 'bg-gray-light'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p class="text-xs text-gray-tertiary mt-2">
                {authorDisplay} &middot; {paper.year} &middot; {paper.journal}
              </p>

              <div class="flex flex-wrap gap-1.5 mt-3">
                {paper.policyDomain.map((d) => (
                  <span class="text-xs px-2 py-0.5 rounded-full bg-teal/10 text-teal font-medium">
                    {policyDomainLabels[d][lang]}
                  </span>
                ))}
                <span class={`text-xs px-2 py-0.5 rounded-full font-medium ${strengthVariant[paper.evidenceStrength]}`}>
                  {evidenceStrengthLabels[paper.evidenceStrength][lang]}
                </span>
              </div>

              <p class="text-xs text-gray-tertiary mt-3 line-clamp-2">
                {paper.contextualisation[lang]}
              </p>
            </a>
          );
        })}

        {filtered.length === 0 && (
          <p class="text-center text-gray-tertiary py-8">
            {lang === 'ne'
              ? 'तपाईंको मापदण्ड अनुरूप कुनै पत्र भेटिएन।'
              : 'No papers found matching your criteria.'}
          </p>
        )}
      </div>
    </div>
  );
}
