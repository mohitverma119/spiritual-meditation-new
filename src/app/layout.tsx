import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kashmir's Spiritual Meditation Journeys | Wild World Wanderers",
  description:
    "Discover transformative spiritual meditation journeys in the mystical beauty of Kashmir. Guided retreats and experiences for inner healing and awakening.",
  keywords:
    "Kashmir meditation, spiritual retreats, meditation journeys, sacred travel, Kashmir spiritual experience, Andrew Harvey, meditation retreat",
  authors: [{ name: "Wild World Wanderers" }],
  openGraph: {
    title: "Kashmir's Spiritual Meditation Journeys | Wild World Wanderers",
    description:
      "Discover transformative spiritual meditation journeys in the mystical beauty of Kashmir. Guided retreats and experiences for inner healing and awakening.",
    url: "https://www.wildworldwanderers.com",
    siteName: "Wild World Wanderers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashmir's Spiritual Meditation Journeys | Wild World Wanderers",
    description:
      "Discover transformative spiritual meditation journeys in the mystical beauty of Kashmir. Guided retreats and experiences for inner healing and awakening.",
    creator: "@wildworldwanderers",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.wildworldwanderers.com",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black-950 scroll-smooth">
      <body className={cn(inter.className, "overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
