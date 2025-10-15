import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiger BioSciences - Pioneering Regenerative Medicine | The First of Its Kind",
  description: "Tiger BioSciences is a pioneering leader in regenerative medicine, specializing in cellular, acellular, and matrix-like products (CAMPs). Established in 2023, we advance wound care, soft tissue reconstruction, and aesthetics through our comprehensive portfolio of 13+ companies.",
  keywords: [
    "regenerative medicine",
    "tissue processing",
    "CAMP products",
    "wound care solutions",
    "aesthetic procedures",
    "FDA approved medical devices",
    "tissue engineering",
    "medical technology",
    "biomedical products",
    "clinical research"
  ],
  authors: [{ name: "Tiger BioSciences" }],
  creator: "Tiger BioSciences",
  publisher: "Tiger BioSciences",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tigerbiosciences.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tiger BioSciences - Pioneering Regenerative Medicine",
    description: "The first of its kind in comprehensive tissue processing and medical device innovation. Leading regenerative medicine with 13+ portfolio companies and 25+ FDA approvals.",
    url: 'https://tigerbiosciences.com',
    siteName: 'Tiger BioSciences',
    images: [
      {
        url: '/assets/images/01/TigerBackground.png',
        width: 1200,
        height: 630,
        alt: 'Tiger BioSciences - Pioneering Regenerative Medicine',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tiger BioSciences - Pioneering Regenerative Medicine",
    description: "The first of its kind in comprehensive tissue processing and medical device innovation.",
    images: ['/assets/images/01/TigerBackground.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
