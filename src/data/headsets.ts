import bl01 from './products/bl01.json';
import bl02 from './products/bl02.json';
import bl03 from './products/bl03.json';
import type { Action } from './site';

interface Headset {
  slug: string;
  size: 'main' | 'small';
  model: string;
  image: string;
  imageAlt: string;
  feature: string;
  summary: string;
  category: string;
  headline: string;
  description: string;
  features: { title: string; text: string }[];
  specs: { label: string; value: string }[];
  variants: { name: string; description: string; specs: { label: string; value: string }[]; action?: Action }[];
  specsLabel: string;
  inquiryLabel: string;
  inquirySubject: string;
  partnerHeading: string;
  partnerText: string;
  partnerLabel: string;
}

export const headsets: Headset[] = [
  { ...bl03, slug: 'bl03', size: 'main' },
  { ...bl02, slug: 'bl02', size: 'small' },
  { ...bl01, slug: 'bl01', size: 'small' },
];
