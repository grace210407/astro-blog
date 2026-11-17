import socialLinks from './social-links.json';

function publicLink(value?: string | null) {
  const url = value?.trim() ?? '';
  return /^https?:\/\//i.test(url) ? url : '';
}

export const brand = {
  email: 'info@blucalmtech.com',
  corporate: 'https://www.blucalmtech.com/',
  discord: publicLink(socialLinks.discord),
  social: Object.entries({
    LinkedIn: socialLinks.linkedin,
    Instagram: socialLinks.instagram,
    Facebook: socialLinks.facebook,
    YouTube: socialLinks.youtube,
    TikTok: socialLinks.tiktok,
    X: socialLinks.x,
  }).map(([label, value]) => ({ label, url: publicLink(value) })).filter(({ url }) => url),
};

export const headsets = [
  { model: 'BL03', image: '/media/bl03.webp', feature: 'Hi-Fi-inspired design', summary: 'A proprietary housing with a metal and ABS finish.', size: 'main' },
  { model: 'BL02', image: '/media/bl02.webp', feature: 'Tuned for gaming', summary: '40 mm drivers and a wide padded headband.', size: 'small' },
  { model: 'BL01', image: '/media/bl01.webp', feature: 'Suspension fit', summary: '50 mm drivers and a self-adjusting headband.', size: 'small' },
];
