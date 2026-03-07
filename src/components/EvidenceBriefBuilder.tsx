import { useState, useMemo } from 'preact/hooks';
import type { EvidenceEntry } from '../data/evidence.schema';
import { policyDomainLabels, studyDesignLabels, evidenceStrengthLabels } from '../data/taxonomy';

interface TopicData {
  slug: string;
  title: { en: string; ne: string };
  description: { en: string; ne: string };
  overview: { en: string; ne: string };
  keyQuestions: { en: string[]; ne: string[] };
  policyDomains: string[];
  icon: string;
}

interface Props {
  papers: EvidenceEntry[];
  topics: TopicData[];
  lang: 'en' | 'ne';
  basePath: string;
}

const labels = {
  en: {
    step1: 'Select a Topic',
    step2: 'Select Countries',
    step3: 'Your Evidence Brief',
    selectTopic: 'Choose the policy area you want evidence for',
    selectCountries: 'Choose which countries to include evidence from',
    allCountries: 'All Countries',
    generate: 'Generate Brief',
    back: 'Back',
    reset: 'Start Over',
    savePdf: 'Save as PDF',
    papers: 'papers',
    paper: 'paper',
    noResults: 'No papers found for this combination. Try selecting more countries.',
    whatWasStudied: 'What Was Studied',
    whatTheyFound: 'What They Found',
    whatItMeansForNepal: 'What This Means for Nepal',
    evidenceSummary: 'Evidence Summary',
    nepalRelevance: 'Nepal Relevance',
    studyDesign: 'Study Design',
    evidenceStrength: 'Evidence Strength',
    source: 'Source',
    countriesLabel: 'Countries',
    topicOverview: 'Topic Overview',
    briefFor: 'Evidence Brief:',
    selectedCountries: 'Selected Countries',
    step: 'Step',
  },
  ne: {
    step1: 'विषय छान्नुहोस्',
    step2: 'देशहरू छान्नुहोस्',
    step3: 'तपाईंको प्रमाण संक्षेप',
    selectTopic: 'तपाईंलाई प्रमाण चाहिने नीति क्षेत्र छान्नुहोस्',
    selectCountries: 'कुन देशहरूबाट प्रमाण समावेश गर्ने छान्नुहोस्',
    allCountries: 'सबै देशहरू',
    generate: 'संक्षेप बनाउनुहोस्',
    back: 'पछाडि',
    reset: 'पुन: सुरु',
    savePdf: 'PDF बचत गर्नुहोस्',
    papers: 'पत्रहरू',
    paper: 'पत्र',
    noResults: 'यो संयोजनको लागि कुनै पत्र भेटिएन। थप देशहरू छान्नुहोस्।',
    whatWasStudied: 'के अध्ययन गरियो',
    whatTheyFound: 'के पत्ता लाग्यो',
    whatItMeansForNepal: 'नेपालको लागि यसको अर्थ',
    evidenceSummary: 'प्रमाण सारांश',
    nepalRelevance: 'नेपाल सान्दर्भिकता',
    studyDesign: 'अध्ययन डिजाइन',
    evidenceStrength: 'प्रमाण बल',
    source: 'स्रोत',
    countriesLabel: 'देशहरू',
    topicOverview: 'विषय अवलोकन',
    briefFor: 'प्रमाण संक्षेप:',
    selectedCountries: 'छानिएका देशहरू',
    step: 'चरण',
  },
};

const strengthVariant: Record<string, string> = {
  high: 'bg-green-100 text-green-800',
  moderate: 'bg-amber-100 text-amber-800',
  low: 'bg-red-100 text-red-800',
};

export default function EvidenceBriefBuilder({ papers, topics, lang, basePath }: Props) {
  const [step, setStep] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(true);

  const t = labels[lang];

  // Papers for the selected topic
  const topicPapers = useMemo(() => {
    if (!selectedTopic) return [];
    const domains = selectedTopic.policyDomains;
    return papers.filter((p) =>
      p.policyDomain.some((d) => domains.includes(d))
    );
  }, [selectedTopic, papers]);

  // Available countries from topic papers
  const availableCountries = useMemo(() => {
    const countries = new Set<string>();
    topicPapers.forEach((p) => p.countries.forEach((c) => countries.add(c)));
    return Array.from(countries).sort();
  }, [topicPapers]);

  // Final filtered papers
  const briefPapers = useMemo(() => {
    if (allSelected) return topicPapers;
    if (selectedCountries.length === 0) return topicPapers;
    return topicPapers.filter((p) =>
      p.countries.some((c) => selectedCountries.includes(c))
    );
  }, [topicPapers, selectedCountries, allSelected]);

  const handleSelectTopic = (topic: TopicData) => {
    setSelectedTopic(topic);
    setSelectedCountries([]);
    setAllSelected(true);
    setStep(2);
  };

  const toggleCountry = (country: string) => {
    setAllSelected(false);
    setSelectedCountries((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  };

  const handleSelectAll = () => {
    setAllSelected(true);
    setSelectedCountries([]);
  };

  const handleGenerate = () => {
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedTopic(null);
    setSelectedCountries([]);
    setAllSelected(true);
  };

  // Step 1: Topic Selection
  if (step === 1) {
    return (
      <div>
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-teal bg-teal-light px-2 py-0.5 rounded-full">
              {t.step} 1/3
            </span>
            <h2 class="text-lg font-bold text-gray-800">{t.step1}</h2>
          </div>
          <p class="text-sm text-gray-500">{t.selectTopic}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-3">
          {topics.map((topic) => {
            const count = papers.filter((p) =>
              p.policyDomain.some((d) => topic.policyDomains.includes(d))
            ).length;
            return (
              <button
                onClick={() => handleSelectTopic(topic)}
                class="text-left border border-gray-200 rounded-lg p-4 hover:border-teal transition-colors group"
              >
                <div class="flex items-start gap-3">
                  <span class="text-2xl">{topic.icon}</span>
                  <div>
                    <h3 class="font-bold text-gray-800 group-hover:text-teal transition-colors">
                      {topic.title[lang]}
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">{topic.description[lang]}</p>
                    <p class="text-xs text-teal mt-2 font-medium">
                      {count} {count === 1 ? t.paper : t.papers}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Step 2: Country Selection
  if (step === 2 && selectedTopic) {
    return (
      <div>
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold text-teal bg-teal-light px-2 py-0.5 rounded-full">
              {t.step} 2/3
            </span>
            <h2 class="text-lg font-bold text-gray-800">{t.step2}</h2>
          </div>
          <p class="text-sm text-gray-500">{t.selectCountries}</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-2xl">{selectedTopic.icon}</span>
            <span class="font-medium text-teal">{selectedTopic.title[lang]}</span>
            <span class="text-xs text-gray-400">({topicPapers.length} {t.papers})</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-6">
          <button
            onClick={handleSelectAll}
            class={`text-sm px-4 py-2 rounded-lg border transition-colors ${
              allSelected
                ? 'bg-teal text-white border-teal'
                : 'border-gray-300 text-gray-600 hover:border-teal'
            }`}
          >
            {t.allCountries} ({topicPapers.length})
          </button>
          {availableCountries.map((country) => {
            const countryCount = topicPapers.filter((p) => p.countries.includes(country)).length;
            const isSelected = !allSelected && selectedCountries.includes(country);
            return (
              <button
                onClick={() => toggleCountry(country)}
                class={`text-sm px-4 py-2 rounded-lg border transition-colors ${
                  isSelected
                    ? 'bg-teal text-white border-teal'
                    : 'border-gray-300 text-gray-600 hover:border-teal'
                }`}
              >
                {country} ({countryCount})
              </button>
            );
          })}
        </div>

        {/* Preview count */}
        <div class="bg-gray-50 rounded-lg p-4 mb-6">
          <p class="text-sm text-gray-600">
            {briefPapers.length} {briefPapers.length === 1 ? t.paper : t.papers}{' '}
            {lang === 'en' ? 'will be included in your brief' : 'तपाईंको संक्षेपमा समावेश हुनेछ'}
          </p>
        </div>

        <div class="flex gap-3">
          <button
            onClick={() => setStep(1)}
            class="text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:border-teal transition-colors"
          >
            {t.back}
          </button>
          <button
            onClick={handleGenerate}
            disabled={briefPapers.length === 0}
            class="text-sm px-6 py-2 bg-teal text-white rounded-lg font-medium hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.generate} ({briefPapers.length})
          </button>
        </div>
      </div>
    );
  }

  // Step 3: Generated Brief
  if (step === 3 && selectedTopic) {
    const countryLabel = allSelected
      ? t.allCountries
      : selectedCountries.join(', ');

    return (
      <div>
        {/* Controls (hidden in print) */}
        <div class="flex items-center justify-between mb-6 no-print" data-no-print>
          <button
            onClick={handleReset}
            class="text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:border-teal transition-colors"
          >
            {t.reset}
          </button>
          <button
            onClick={() => window.print()}
            class="text-sm px-6 py-2 bg-teal text-white rounded-lg font-medium hover:bg-teal-dark transition-colors"
          >
            {t.savePdf}
          </button>
        </div>

        {/* Brief Content */}
        <div class="evidence-brief">
          {/* Print-only header */}
          <div class="print-header hidden">
            <h1>Nepal Health Policy Lab</h1>
            <p>nepalhealthpolicylab.org &middot; Evidence Brief</p>
          </div>

          {/* Brief Header */}
          <div class="mb-8 border-b border-gray-200 pb-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">{selectedTopic.icon}</span>
              <div>
                <p class="text-xs text-teal font-medium uppercase tracking-wide">{t.briefFor}</p>
                <h1 class="text-2xl font-bold text-gray-800">{selectedTopic.title[lang]}</h1>
              </div>
            </div>
            <p class="text-sm text-gray-500">
              {t.selectedCountries}: <span class="font-medium text-gray-700">{countryLabel}</span>
              {' '}&middot;{' '}
              {briefPapers.length} {briefPapers.length === 1 ? t.paper : t.papers}
            </p>
          </div>

          {/* Topic Overview */}
          <section class="mb-8">
            <h2 class="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
              {t.topicOverview}
            </h2>
            <p class="text-sm text-gray-600 leading-relaxed">{selectedTopic.overview[lang]}</p>
          </section>

          {/* Papers */}
          {briefPapers.length === 0 ? (
            <p class="text-center text-gray-500 py-8">{t.noResults}</p>
          ) : (
            briefPapers
              .sort((a, b) => b.nepalRelevanceScore - a.nepalRelevanceScore)
              .map((paper, index) => (
                <section class="mb-8 border border-gray-200 rounded-lg p-5 brief-paper-section">
                  {/* Paper Header */}
                  <div class="mb-4 pb-3 border-b border-gray-100">
                    <div class="flex items-start justify-between gap-3">
                      <h3 class="font-bold text-gray-800 text-sm leading-snug flex-1">
                        {index + 1}. {paper.title}
                      </h3>
                      <div class="flex items-center gap-1 shrink-0" title={`${t.nepalRelevance}: ${paper.nepalRelevanceScore}/5`}>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span
                            class={`w-2 h-2 rounded-full relevance-dot-${i <= paper.nepalRelevanceScore ? 'filled' : 'empty'} ${
                              i <= paper.nepalRelevanceScore ? 'bg-teal' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">
                      {paper.authors.length > 3
                        ? `${paper.authors.slice(0, 3).join(', ')} et al.`
                        : paper.authors.join(', ')}
                      {' '}&middot;{' '}{paper.journal} &middot; {paper.year}
                    </p>
                    <div class="flex flex-wrap gap-1.5 mt-2">
                      {paper.policyDomain.map((d) => (
                        <span class="text-xs px-2 py-0.5 rounded-full bg-teal/10 text-teal font-medium print-badge print-badge-default">
                          {policyDomainLabels[d][lang]}
                        </span>
                      ))}
                      <span class={`text-xs px-2 py-0.5 rounded-full font-medium print-badge print-badge-${
                        paper.evidenceStrength === 'high' ? 'green' : paper.evidenceStrength === 'moderate' ? 'amber' : 'red'
                      } ${strengthVariant[paper.evidenceStrength]}`}>
                        {evidenceStrengthLabels[paper.evidenceStrength][lang]}
                      </span>
                      <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 print-badge">
                        {studyDesignLabels[paper.studyDesign][lang]}
                      </span>
                    </div>
                  </div>

                  {/* What Was Studied */}
                  <div class="mb-3">
                    <h4 class="text-xs font-bold text-gray-600 uppercase mb-1">{t.whatWasStudied}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">{paper.onePager.whatWasStudied[lang]}</p>
                  </div>

                  {/* What They Found */}
                  <div class="mb-3">
                    <h4 class="text-xs font-bold text-gray-600 uppercase mb-1">{t.whatTheyFound}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">{paper.onePager.whatTheyFound[lang]}</p>
                  </div>

                  {/* What It Means for Nepal */}
                  <div class="nepal-section bg-teal-light/50 rounded-lg p-3">
                    <h4 class="text-xs font-bold text-teal uppercase mb-1">{t.whatItMeansForNepal}</h4>
                    <p class="text-sm text-teal-dark leading-relaxed">{paper.onePager.whatItMeansForNepal[lang]}</p>
                  </div>

                  {/* Countries */}
                  <p class="text-xs text-gray-400 mt-3">
                    {t.countriesLabel}: {paper.countries.join(', ')}
                  </p>
                </section>
              ))
          )}

          {/* Print-only footer */}
          <div class="print-footer hidden">
            Nepal Health Policy Lab &middot; nepalhealthpolicylab.org &middot; Evidence Brief
          </div>
        </div>
      </div>
    );
  }

  return null;
}
