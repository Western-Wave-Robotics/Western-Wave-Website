export interface SiteConfig {
  title: string;
  description: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  authors: string;
  copyright: string;
  socialLinks: { text: string; href: string; logo: string; }[];
  socialImage: string;
  canonicalURL?: string;
}