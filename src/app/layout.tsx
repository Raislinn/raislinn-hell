import type { Metadata } from "next";
import { Cinzel, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

const mono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raislinnhell.com"),
  title: {
    default: "Raislinn Hell — Practical nightmares for camera.",
    template: "%s // Raislinn Hell",
  },
  description:
    "Horror FX studio. Prosthetics, creature appliances, blood and gore systems, aging, on-set support.",
  applicationName: "Raislinn Hell",
  keywords: [
    "horror FX",
    "prosthetics",
    "creature effects",
    "practical effects",
    "Raislinn Hell",
  ],
  openGraph: {
    title: "Raislinn Hell",
    description: "Practical nightmares for camera.",
    url: "https://raislinnhell.com",
    siteName: "Raislinn Hell",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className={`${mono.className} antialiased`}>{children}</body>
    </html>
  );
}
