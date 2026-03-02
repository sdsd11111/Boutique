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
  title: "Naluz | Ilumina con Estilo",
  description: "Transformamos espacios con diseño sofisticado y tecnología LED de vanguardia. La elegancia de Loja ahora tiene nombre propio.",
  manifest: '/manifest.json',
  metadataBase: new URL('https://naluzloja.com'),
  openGraph: {
    title: "Naluz | Ilumina con Estilo",
    description: "Transformamos espacios con diseño sofisticado y tecnología LED de vanguardia. La elegancia de Loja ahora tiene nombre propio.",
    url: "https://naluzloja.com",
    siteName: "Naluz",
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
    canonical: 'https://naluzloja.com',
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
    "name": "Naluz",
    "url": "https://naluzloja.com",
    "logo": "https://naluzloja.com/icon-512.png",
    "sameAs": [
      "https://www.instagram.com/naluz.loja",
      "https://www.facebook.com/profile.php?id=61561081694294"
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
