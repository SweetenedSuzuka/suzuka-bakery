import { load } from 'js-yaml';
import siteYml from './site.yml?raw';

export interface SiteLink {
  label: string;
  href: string;
  icon: 'x' | 'pixiv' | 'instagram' | 'mail';
}

export interface SiteConfig {
  title: string;
  heroTitleLines: string[];
  artist: string;
  handle: string;
  bio: string;
  aboutIntro: string;
  email: string;
  supportUrl: string;
  heroCount: number;
  nav: { label: string; href: string }[];
  links: SiteLink[];
}

// 站点设置集中在 src/data/site.yml，也可以在 /admin/ 后台的「站点设置」中修改
export const site = load(siteYml) as SiteConfig;

export type LinkIcon = SiteLink['icon'];
