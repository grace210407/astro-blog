import socialLinks from './social-links.json';
import settings from './site-settings.json';

export interface Action { label: string; url: string }

export function siteHref(value?: string) {
  const href = value?.trim() ?? '';
  if (/^(?:\/(?![\/\\])|#)[^\\]*$/.test(href)) return href;
  return publicLink(href);
}

export function emailHref(subject?: string) {
  const email = 'mailto:' + settings.email;
  return subject ? email + '?subject=' + encodeURIComponent(subject) : email;
}

export function publicLink(value?: string | null) {
  const url = value?.trim() ?? '';
  if (!/^https?:\/\//i.test(url)) return '';
  try {
    const parsed = new URL(url);
    return parsed.username || parsed.password ? '' : parsed.href;
  } catch {
    return '';
  }
}

function discordLink(value?: string | null) {
  const invite = value?.trim() ?? '';
  const match = invite.match(/^(?:https?:\/\/)?(?:www\.)?(?:discord\.gg\/|discord(?:app)?\.com\/invite\/)([a-z\d-]+)\/?(?:[?#].*)?$/i);
  return match ? 'https://discord.gg/' + match[1] : '';
}

const discord = discordLink(socialLinks.discord);

export const brand = {
  email: settings.email,
  corporate: publicLink(settings.corporate),
  discord,
  social: Object.entries(settings.icons).map(([name, { label, image }]) => ({
    label,
    image,
    url: name === 'discord' ? discord : publicLink(socialLinks[name as keyof typeof socialLinks]),
  })).filter(({ url }) => url),
};

