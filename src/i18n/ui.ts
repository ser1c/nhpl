export const languages = {
  en: 'English',
  ne: 'नेपाली',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'site.name': 'Nepal Health Policy Lab',
    'site.tagline': 'Building the Evidence Infrastructure for Health Policy in Nepal',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.digest': 'Digest',
    'nav.evidence': 'Evidence Portal',
    'nav.subscribe': 'Subscribe',
    'blog.readMore': 'Read more',
    'blog.by': 'By',
    'blog.noPosts': 'No posts yet. Check back soon.',
    'digest.noIssues': 'No digest issues yet. Check back soon.',
    'subscribe.heading': 'Stay Informed',
    'subscribe.description': 'Get the Nepal Health Policy Digest delivered to your inbox -- curated global health research, contextualised for Nepal.',
    'footer.copyright': 'Nepal Health Policy Lab',
    'footer.tagline': 'Making global health evidence accessible and actionable for Nepal.',
  },
  ne: {
    'site.name': 'नेपाल स्वास्थ्य नीति प्रयोगशाला',
    'site.tagline': 'नेपालको स्वास्थ्य नीतिको लागि प्रमाण पूर्वाधार निर्माण',
    'nav.home': 'गृहपृष्ठ',
    'nav.about': 'हाम्रोबारे',
    'nav.blog': 'ब्लग',
    'nav.digest': 'डाइजेस्ट',
    'nav.evidence': 'प्रमाण पोर्टल',
    'nav.subscribe': 'सदस्यता',
    'blog.readMore': 'थप पढ्नुहोस्',
    'blog.by': 'लेखक',
    'blog.noPosts': 'अहिलेसम्म कुनै लेख छैन। छिट्टै आउँदैछ।',
    'digest.noIssues': 'अहिलेसम्म कुनै अंक छैन। छिट्टै आउँदैछ।',
    'subscribe.heading': 'जानकारी पाउनुहोस्',
    'subscribe.description': 'नेपाल स्वास्थ्य नीति डाइजेस्ट तपाईंको इमेलमा प्राप्त गर्नुहोस् -- नेपालको लागि सान्दर्भिक विश्वव्यापी स्वास्थ्य अनुसन्धान।',
    'footer.copyright': 'नेपाल स्वास्थ्य नीति प्रयोगशाला',
    'footer.tagline': 'विश्वव्यापी स्वास्थ्य प्रमाणलाई नेपालको लागि पहुँचयोग्य र कार्ययोग्य बनाउँदै।',
  },
} as const;
