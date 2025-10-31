'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type TechStack = {
  name: string;
  type: 'svg' | 'component';
  icon?: string;
  component?: React.ReactNode;
};

// Tech Stack with actual brand icons and colors
const techStack: TechStack[] = [
  {
    name: 'React',
    type: 'component',
    component: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-zinc-900 dark:text-white group-hover:text-[#61DAFB] transition-colors">
        <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    type: 'svg',
    icon: '/next.svg',
  },
  {
    name: 'TypeScript',
    type: 'component',
    component: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-zinc-900 dark:text-white group-hover:text-[#3178C6] transition-colors">
        <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
  {
    name: 'Spring Boot',
    type: 'component',
    component: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-zinc-900 dark:text-white group-hover:text-[#6DB33F] transition-colors">
        <path fill="currentColor" d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596"/>
      </svg>
    ),
  },
  {
    name: 'Azure',
    type: 'component',
    component: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-zinc-900 dark:text-white group-hover:text-[#0078D4] transition-colors">
        <path fill="currentColor" d="M13.05 16.953L8.667 16l4.39-5.293 3.716 9.735a1.8 1.8 0 0 1-1.676 1.558H6.14a1.8 1.8 0 0 1-1.678-2.435zm.892-14.024L17.598 15.8H22l-8.058-12.871z"/>
      </svg>
    ),
  },
  {
    name: 'Java',
    type: 'component',
    component: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-zinc-900 dark:text-white group-hover:text-[#ED8B00] transition-colors">
        <path fill="currentColor" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    type: 'component',
    component: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-zinc-900 dark:text-white group-hover:text-[#339933] transition-colors">
        <path fill="currentColor" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642 1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    type: 'component',
    component: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-zinc-900 dark:text-white group-hover:text-[#47A248] transition-colors">
        <path fill="currentColor" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.354-3.196 4.291-11.375zm-5.336 7.53l-.312.279c0 .007-.677-2.168-.677-2.168h-.003c-.134.654-.383 1.293-.749 1.884l-.15-.283c-1.31-2.45-.993-4.717.133-6.845.13-.245.27-.486.42-.723l.13.007c.046.192.092.378.138.557.192 1.006.36 1.873.36 1.873l-.001.012.002.003.001.007.008.016.002.011c-.014.079-.054.287-.139.517-.205.549-.529 1.05-.923 1.474-.123.132-.249.257-.377.381z"/>
      </svg>
    ),
  }
];

type CredibilityBarProps = {
  label?: string;
  className?: string;
};

export default function CredibilityBar({
  label = 'Building with modern technologies',
  className = '',
}: CredibilityBarProps) {
  return (
    <section
      className={`relative px-4 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden ${className}`}
      aria-label="Technology stack showcase"
    >
      <div className="max-w-6xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
            {label}
          </p>
        </motion.div>

               {/* Tech Stack Grid */}
               <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
                 {techStack.map((tech, index) => (
                   <motion.div
                     key={tech.name}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.05, duration: 0.3 }}
                     whileHover={{ scale: 1.1, y: -4 }}
                     className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all group relative overflow-hidden"
                   >
                     {/* Subtle glow effect on hover */}
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-100 dark:via-zinc-900 to-transparent" />
                     </div>
                     
                     <div className="text-zinc-900 dark:text-white group-hover:scale-110 transition-transform relative z-10">
                       {tech.type === 'svg' && tech.icon ? (
                         <Image
                           src={tech.icon}
                           alt={tech.name}
                           width={32}
                           height={32}
                           className="w-8 h-8 dark:invert"
                         />
                       ) : (
                         tech.component
                       )}
                     </div>
                     <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors relative z-10">
                       {tech.name}
                     </span>
                   </motion.div>
                 ))}
               </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>3+ Years Experience</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>1M+ Users Served</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span>99.9% Uptime</span>
        </div>
        </motion.div>
      </div>
    </section>
  );
}


