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
  title: "Neel Shah | Full-Stack Software Developer | React, Java Spring Boot, Azure Expert",
  description: "Neel Shah - Full-Stack Software Developer with 3+ years experience. Specializing in React, Java Spring Boot, Azure AD B2C, and microservices. 99.9% uptime, 60% performance improvement. Available for hire in Ahmedabad, India.",
  keywords: [
    "Neel Shah",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Java Spring Boot Developer",
    "Azure Developer",
    "React Native",
    "Microservices Architect",
    "Frontend Developer",
    "Backend Developer",
    "Ahmedabad Developer",
    "India Software Engineer",
    "hire full stack developer",
    "freelance developer",
    "Azure AD B2C expert",
    "SCIM implementation",
    "CI/CD Jenkins",
    "Elasticsearch developer",
  ],
  authors: [{ name: "Neel Shah" }],
  creator: "Neel Shah",
  publisher: "Neel Shah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neelshah.dev'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Neel Shah | Full-Stack Software Developer | React & Java Spring Boot Expert",
    description: "Full-Stack Developer with 3+ years experience. Expert in React, Java Spring Boot, Azure. 99.9% uptime systems. Available for full-time, part-time & freelance work.",
    url: 'https://neelshah.dev', // Update with your actual domain
    siteName: 'Neel Shah Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Neel Shah - Full-Stack Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neel Shah | Full-Stack Software Developer',
    description: 'Full-Stack Developer specializing in React, Java Spring Boot, and Azure. 3+ years experience.',
    creator: '@neelshah', // Update with your Twitter handle
    images: ['/og-image.jpg'], // Add your Twitter card image
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
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://neelshah.dev" />
        <meta name="author" content="Neel Shah" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Neel Shah',
              jobTitle: 'Full-Stack Software Developer',
              url: 'https://neelshah.dev',
              email: 'shahneel20135@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                addressCountry: 'IN',
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Silver Oak University',
              },
              knowsAbout: [
                'React',
                'Java Spring Boot',
                'Azure',
                'React Native',
                'Node.js',
                'TypeScript',
                'Microservices',
                'Azure AD B2C',
                'Elasticsearch',
              ],
              sameAs: [
                'https://www.linkedin.com/in/neel-shah-215099192/',
                'https://github.com/Neelshah768',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Neel Shah Portfolio',
              url: 'https://neelshah.dev',
              description: 'Full-Stack Software Developer Portfolio',
              author: {
                '@type': 'Person',
                name: 'Neel Shah',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Neel Shah - Software Development Services',
              description: 'Full-Stack Software Development Services',
              provider: {
                '@type': 'Person',
                name: 'Neel Shah',
              },
              areaServed: 'Worldwide',
              availableLanguage: ['English', 'Hindi'],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
