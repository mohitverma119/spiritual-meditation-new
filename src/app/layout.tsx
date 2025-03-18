import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wild World Wanderers | Transformative Nature Journeys",
  description: "Experience transformative journeys in the wild beauty of Kashmir, guided by ancient wisdom and spiritual practices. Reconnect with nature and yourself.",
  keywords: [
    "wild world wanderers",
    "kashmir spiritual journeys",
    "transformative travel",
    "spiritual awakening",
    "nature journeys",
    "andrew harvey",
    "wisdom teachings",
    "sacred landscapes",
    "spiritual retreats",
    "inner healing"
  ],
  authors: [{ name: "Wild World Wanderers" }],
  metadataBase: new URL('https://wild-world-wanderers.vercel.app'),
  openGraph: {
    title: "Wild World Wanderers | Transformative Nature Journeys",
    description: "Experience transformative journeys in the wild beauty of Kashmir, guided by ancient wisdom and spiritual practices. Reconnect with nature and yourself.",
    url: "https://wild-world-wanderers.vercel.app",
    siteName: "Wild World Wanderers",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wild World Wanderers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild World Wanderers | Transformative Nature Journeys",
    description: "Experience transformative journeys in the wild beauty of Kashmir, guided by ancient wisdom and spiritual practices. Reconnect with nature and yourself.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg" }
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black-950 scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
