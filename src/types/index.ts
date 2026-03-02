export interface SiteConfig {
  title: string;
  description: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  authors: string;
  company: string;
  socialLinks: { text: string; href: string; logo: string; }[];
  socialImage: string;
  canonicalURL?: string;
}