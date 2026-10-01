import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Neel Shah - Backend & Distributed Systems Engineer Portfolio',
    short_name: 'Neel Shah',
    description: 'Backend & Distributed Systems Engineer specializing in Java 21, Spring Boot 3, Microservices, IAM, SCIM 2.0, AWS, Azure, and AI-enabled workflows.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070709',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
