import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Neel Shah - Full-Stack Software Developer Portfolio',
    short_name: 'Neel Shah',
    description: 'Full-Stack Software Developer specializing in React, Java Spring Boot, and Azure',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0A66C2',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

