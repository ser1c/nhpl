import { evidenceEntrySchema, topicSchema } from './evidence.schema';
import type { EvidenceEntry, Topic } from './evidence.schema';
import evidenceData from './evidence.json';
import topicsData from './topics.json';

let _evidence: EvidenceEntry[] | null = null;
let _topics: Topic[] | null = null;

export function getEvidence(): EvidenceEntry[] {
  if (!_evidence) {
    const parsed = evidenceData.map((entry: unknown) => evidenceEntrySchema.parse(entry));
    // Only show verified and auto-processed (not rejected)
    _evidence = parsed.filter((e) => e.status !== 'rejected');
  }
  return _evidence;
}

export function getTopics(): Topic[] {
  if (!_topics) {
    _topics = (topicsData as unknown[]).map((t: unknown) => topicSchema.parse(t));
  }
  return _topics;
}

export function getEvidenceByTopic(topicSlug: string): EvidenceEntry[] {
  const topic = getTopics().find((t) => t.slug === topicSlug);
  if (!topic) return [];
  const domains = topic.policyDomains;
  return getEvidence().filter((e) =>
    e.policyDomain.some((d) => domains.includes(d))
  );
}

export function getEvidenceBySlug(slug: string): EvidenceEntry | undefined {
  return getEvidence().find((e) => e.slug === slug);
}

export function getTopicForPaper(paper: EvidenceEntry): Topic | undefined {
  return getTopics().find((t) =>
    t.policyDomains.some((d) => paper.policyDomain.includes(d))
  );
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return getTopics().find((t) => t.slug === slug);
}
