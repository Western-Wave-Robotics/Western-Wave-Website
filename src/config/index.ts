import type { SiteConfig } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Western Wave Robotics",
  authors: "Nicholas Balsom",
  company: "Western Wave Robotics",
  description: "Competitive student team competing in the MATE ROV competition",
  siteLogo: "/westernwave_logo.png", // UPDATE
  // Header Navbar links
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" }, // Change to scroll to about section
    { text: "Sponsors", href: "/sponsors" },
    { text: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/westernwaverobotics/", logo: "/insta_logo.svg" },
    { text: "Youtube", href: "https://www.youtube.com/@westernwaverobotics", logo: "/yt_logo.svg" },
  ],
  socialImage: "/westernwave_logo.png", // UPDATE
  canonicalURL: "/", // UPDATE
};
