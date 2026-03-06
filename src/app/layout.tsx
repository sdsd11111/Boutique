import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina | Beauty & Wellness",
  description: "Experiencia premium de cuidado personal y bienestar en Loja. Tratamientos faciales, estilismo y armonía estética.",
  manifest: '/manifest.json',
  metadataBase: new URL('https://luminaloja.com'),
  openGraph: {
    title: "Lumina | Beauty & Wellness",
    description: "Experiencia premium de cuidado personal y bienestar en Loja. Tratamientos faciales, estilismo y armonía estética.",
    url: "https://luminaloja.com",
    siteName: "Lumina",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'wNaCK0e-4LoUu-KpC-n5ubGyMFpZOADMkIU--6Po-IY',
  },
  alternates: {
    canonical: 'https://luminaloja.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lumina",
    "url": "https://luminaloja.com",
    "logo": "https://luminaloja.com/icon-512.png",
    "sameAs": [
      "https://www.instagram.com/lumina.loja"
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
