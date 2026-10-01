import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Neel Shah | Backend & Distributed Systems Engineer',
  description:
    'Neel Shah is a software engineer specializing in Java, Spring Boot, microservices, distributed systems, enterprise identity, cloud infrastructure and AI-enabled workflows.',
  keywords: [
    'Neel Shah',
    'Backend Engineer',
    'Distributed Systems Engineer',
    'Java 21',
    'Spring Boot 3',
    'Microservices',
    'Distributed Systems',
    'IAM',
    'SCIM 2.0',
    'SSO',
    'SAML',
    'Azure AD B2C',
    'Microsoft Entra ID',
    'Okta',
    'AWS',
    'Azure',
    'Redis',
    'Elasticsearch',
    'AI-enabled workflows',
    'Google Gemini API',
    'Ahmedabad Software Engineer',
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name }],
  creator: PORTFOLIO_DATA.personal.name,
  publisher: PORTFOLIO_DATA.personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neelshah.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Neel Shah | Backend & Distributed Systems Engineer',
    description:
      'Building scalable backend systems, enterprise identity platforms, and high-throughput applications with Java 21, Spring Boot, and cloud infrastructure.',
    url: 'https://neelshah.dev',
    siteName: 'Neel Shah Engineering Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neel Shah | Backend & Distributed Systems Engineer',
    description:
      'Building scalable backend systems, enterprise identity platforms, and high-throughput applications with Java 21, Spring Boot, and cloud infrastructure.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="canonical" href="https://neelshah.dev" />
        <meta name="author" content="Neel Shah" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="theme-color" content="#070709" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: PORTFOLIO_DATA.personal.name,
              jobTitle: PORTFOLIO_DATA.personal.role,
              url: 'https://neelshah.dev',
              email: PORTFOLIO_DATA.socials.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                addressCountry: 'IN',
              },
              worksFor: {
                '@type': 'Organization',
                name: 'Promethean Tech',
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Silver Oak University',
              },
              knowsAbout: [
                'Java 21',
                'Spring Boot 3',
                'Distributed Systems',
                'Microservices',
                'SCIM 2.0',
                'IAM & SSO',
                'Azure AD B2C',
                'AWS',
                'Redis',
                'Elasticsearch',
                'MySQL',
                'React Native',
              ],
              sameAs: [
                PORTFOLIO_DATA.socials.linkedin,
                PORTFOLIO_DATA.socials.github,
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#070709] text-[#f4f4f5] antialiased selection:bg-blue-600/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
