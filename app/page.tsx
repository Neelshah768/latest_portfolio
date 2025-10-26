'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Database,
  Terminal,
  Briefcase,
  Clock,
  DollarSign,
  Send,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Zap,
  Server,
  Cloud,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import CursorSpotlight from '@/components/CursorSpotlight';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import MagneticButton from '@/components/MagneticButton';
import FloatingParticles from '@/components/FloatingParticles';
import Preloader from '@/components/Preloader';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const experiences = [
    {
      title: 'Full-Stack Software Developer',
      company: 'PrometheanTech',
      location: 'Gandhinagar(India)',
      period: 'July 2022 - Present',
      achievements: [
        'Promoted from Frontend Developer to Senior Full-Stack role within 3 years, leading to a 40% improvement in project delivery timelines',
        'Architected and implemented Fund and Assets Management systems using Java Spring Boot and React',
        'Built cross-platform mobile app (React Native) with 1,000+ downloads, 4.8/5 rating',
        'Led migration of monolithic backend to microservices architecture, improving scalability by 50%',
        'Slashed bug reports by 70% by establishing robust CI/CD pipeline using Jenkins',
      ],
    },
  ];

  const projects = [
    {
      title: '73Strings - Fund and Assets Management System',
      description:
        'Enterprise-grade fund management platform with secure RESTful APIs, Azure AD B2C SSO integration, and SCIM 2.0 API for automated user lifecycle management. Technical Lead coordinating a 14-member team.',
      tags: ['Java Spring Boot', 'React', 'Azure AD B2C', 'Elasticsearch', 'Spring Security'],
      highlights: [
        'Reduced login failures by 20% through robust error handling',
        'Improved search performance by 80% with Elasticsearch integration',
        'Implemented enterprise-wide SSO for seamless access',
      ],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'LivCast - Live Streaming Application',
      description:
        'High-performance streaming platform supporting 100+ monthly active users with 99.9% uptime. Optimised initial load time by 65% using lazy loading and engineered 25+ reusable components.',
      tags: ['React Native', 'Node.js', 'WebRTC', 'AWS'],
      highlights: [
        '99.9% streaming uptime through strategic AWS infrastructure',
        '65% faster load times with advanced optimization',
        'Accelerated feature development by 40% with reusable components',
      ],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      icon: Code2,
      items: ['React', 'React Native', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'WebRTC'],
    },
    {
      category: 'Backend',
      icon: Server,
      items: ['Java Spring Boot', 'Node.js', 'RESTful APIs', 'Microservices'],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: ['Azure', 'Azure AD B2C', 'Jenkins', 'CI/CD', 'AWS'],
    },
    {
      category: 'Databases & Tools',
      icon: Database,
      items: ['MySQL', 'MongoDB', 'Elasticsearch', 'Git', 'VS Code'],
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '60%', label: 'Load Time Reduction' },
    { icon: Award, value: '99.9%', label: 'System Uptime' },
    { icon: Users, value: '14+', label: 'Team Members Led' },
    { icon: Zap, value: '50%', label: 'Scalability Improvement' },
  ];

  const hireOptions = [
    {
      title: 'Full-Time',
      icon: Briefcase,
      description: 'Dedicated team member for long-term growth',
      features: [
        'Full-time commitment & dedication',
        'Deep integration with your team',
        'Long-term strategic planning',
        'Consistent availability',
      ],
    },
    {
      title: 'Part-Time',
      icon: Clock,
      description: 'Flexible engagement for ongoing projects',
      features: [
        'Flexible scheduling options',
        '20+ hours per week availability',
        'Perfect for continuous development',
        'Cost-effective resource allocation',
      ],
    },
    {
      title: 'Freelance',
      icon: DollarSign,
      description: 'Project-based collaboration',
      features: [
        'Project-specific engagement',
        'Clear deliverables & timelines',
        'No long-term commitment needed',
        'Rapid deployment capability',
      ],
    },
  ];

  return (
    <>
      <Preloader />
      <CustomCursor />
      <CursorSpotlight />
      <ScrollProgress />
      <FloatingParticles />
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-white dark:bg-black"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm font-medium mb-8">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            >
              Neel Shah
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-zinc-600 dark:text-zinc-400 min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem]"
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  3000,
                  'React & React Native Expert',
                  3000,
                  'Java Spring Boot Specialist',
                  3000,
                  'Azure Cloud Architect',
                  3000,
                  'Microservices Expert',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-4"
            >
              Building scalable applications with modern technologies.
              <br />
              Turning complex problems into elegant solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400 mb-8"
            >
              <MapPin size={18} />
              <span>Ahmedabad, India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <MagneticButton
                href="#contact"
                  className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Let's Work Together</span>
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all w-full sm:w-auto text-center"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                href="/resume.pdf"
                className="px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download size={20} />
                Resume
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-6 justify-center"
            >
              <MagneticButton
                href="https://github.com/Neelshah768"
                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github size={28} />
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/neel-shah-215099192/"
                className="text-zinc-600 dark:text-zinc-400 hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin size={28} />
              </MagneticButton>
              <MagneticButton
                href="mailto:shahneel20135@gmail.com"
                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail size={28} />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black" aria-label="About Neel Shah">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              I'm a <strong>Software Engineer</strong> with <strong>3+ years of experience</strong> specializing in building and deploying scalable applications using <strong>React, Java Spring Boot, and Azure</strong>.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              My expertise lies in driving significant performance improvements. I've <strong>reduced load times by 60%</strong> and architected systems with <strong>99.9% uptime</strong>. I have deep knowledge in enterprise identity management, including SSO and SCIM implementation with <strong>Azure AD B2C</strong>.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              At <strong>PrometheanTech</strong>, I was promoted from Frontend Developer to Senior Full-Stack role within 3 years. I led a team of 4 developers in migrating a monolithic backend to <strong>microservices architecture</strong>, improving scalability by <strong>50%</strong> and reducing service coupling.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              My technical achievements include building cross-platform mobile apps with <strong>1,000+ downloads</strong> and <strong>4.8/5 ratings</strong>, slashing bug reports by <strong>70%</strong> through robust CI/CD pipelines, and implementing enterprise-wide SSO solutions.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I hold a <strong>B.Tech in Computer Science</strong> from Silver Oak University (2022) and am passionate about writing clean, maintainable code while staying current with the latest technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950" aria-label="Work experience">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto" />
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.title}</h3>
                  <div className="text-xl font-semibold text-zinc-600 dark:text-zinc-400 mb-4">
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2.5 flex-shrink-0" />
                    <span className="text-lg leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black" aria-label="Featured projects">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Real-world applications that demonstrate technical expertise and business impact
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-12 transition-all duration-300 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 group-hover:shadow-xl dark:group-hover:shadow-2xl dark:group-hover:shadow-blue-500/5">
                  {/* Project Number */}
                  <div className="absolute top-6 right-6 text-6xl md:text-7xl font-bold text-zinc-100 dark:text-zinc-900 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-3 flex items-center gap-2">
                        <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 text-sm font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950" aria-label="Technical skills">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <skillGroup.icon size={24} className="text-white dark:text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section id="hire" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work With Me</h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Available for full-time, part-time, and freelance opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {hireOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-black dark:hover:border-white transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center mb-6">
                  <option.icon size={24} className="text-white dark:text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{option.description}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href="#contact"
                  className="block w-full py-4 text-center bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold"
                >
                  Get Started
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Let's discuss how I can contribute to your team's success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can I help?"
                  className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
                />
              </div>

              <MagneticButton className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </MagneticButton>
            </form>

            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-600 dark:text-zinc-400">
                <a
                  href="mailto:shahneel20135@gmail.com"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Mail size={20} />
                  <span>shahneel20135@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/neel-shah-215099192/"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
          </a>
          <a
                  href="https://github.com/Neelshah768"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
          >
                  <Github size={20} />
                  <span>GitHub</span>
          </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Neel Shah. All rights reserved.</p>
    </div>
      </footer>
    </>
  );
}
