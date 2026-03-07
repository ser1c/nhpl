import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: keyof (typeof ui)[typeof defaultLang]): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ne' : 'en';
}
