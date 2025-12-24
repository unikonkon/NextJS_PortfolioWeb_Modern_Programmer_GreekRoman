'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Cpu,
  ChevronDown,
  Send,
  MapPin,
  Calendar
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const SKILLS = {
  languages: [
    { name: 'TypeScript', level: 95, roman: 'XCV' },
    { name: 'JavaScript', level: 95, roman: 'XCV' },
    { name: 'HTML/CSS', level: 90, roman: 'XC' },
    { name: 'Dart', level: 75, roman: 'LXXV' },
    { name: 'SQL', level: 80, roman: 'LXXX' },
    { name: 'Python', level: 70, roman: 'LXX' },
  ],
  frameworks: [
    { name: 'React', level: 95, roman: 'XCV' },
    { name: 'Next.js', level: 95, roman: 'XCV' },
    { name: 'NestJS', level: 85, roman: 'LXXXV' },
    { name: 'Express.js', level: 85, roman: 'LXXXV' },
    { name: 'Flutter', level: 75, roman: 'LXXV' },
    { name: 'Tailwind CSS', level: 95, roman: 'XCV' },
  ],
  devops: [
    { name: 'Git', level: 90, roman: 'XC' },
    { name: 'Docker', level: 80, roman: 'LXXX' },
    { name: 'Jenkins', level: 75, roman: 'LXXV' },
    { name: 'Vercel', level: 90, roman: 'XC' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 85, roman: 'LXXXV' },
    { name: 'Firebase', level: 85, roman: 'LXXXV' },
    { name: 'Supabase', level: 85, roman: 'LXXXV' },
    { name: 'Prisma', level: 80, roman: 'LXXX' },
  ],
};

const EXPERIENCE = [
  {
    period: 'MMXXIII - Present',
    periodShort: 'Feb 2023 - Present',
    company: 'iApp Technology',
    role: 'Full Stack Developer',
    description: 'Building digital empires across multiple domains',
    projects: [
      'NBTC - Drone Data Transmission API',
      'ACT - Data fetching & risk assessment system',
      'iApp Speech Flow - Web & Desktop application',
      'huboftalent - Profile matching platform',
      'Wellness Chatbot - Full stack dashboard',
    ],
  },
  {
    period: 'MMXXII',
    periodShort: 'Mar 2022 - Dec 2022',
    company: 'Vertobase Co., Ltd.',
    role: 'Front-end Developer',
    description: 'Crafting mobile experiences with precision',
    projects: [
      'Zignway App - React & Next.js implementation',
      'Flutter mobile development with PIN authentication',
    ],
  },
];

const PROJECTS = [
  {
    numeral: 'I',
    title: 'Job Matching AI',
    subtitle: 'Opus Magnum Primum',
    description: 'AI-powered job matching using RAG and vector search technology to connect seekers with ideal roles.',
    tech: ['Next.js 16', 'TypeScript', 'Google Gemini', 'RAG', 'IndexedDB'],
    featured: true,
  },
  {
    numeral: 'II',
    title: 'Crypto News Analysis',
    subtitle: 'Opus Secundum',
    description: 'Real-time crypto news aggregator with sentiment analysis powered by Google Gemini API.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Gemini API', 'RSS Parser'],
    featured: true,
  },
  {
    numeral: 'III',
    title: 'Crypto Sentiment Analysis',
    subtitle: 'Opus Tertium',
    description: 'Advanced cryptocurrency sentiment analysis with 3D visualizations using Three.js.',
    tech: ['Next.js', 'Three.js', 'NestJS', 'Supabase', 'Gemini API'],
    featured: true,
  },
  {
    numeral: 'IV',
    title: 'WEB Planning Generator',
    subtitle: 'Opus Quartum',
    description: 'AI-powered website planning tool generating discovery documents and flowcharts.',
    tech: ['Next.js 15', 'TypeScript', 'Mermaid.js', 'Gemini API', 'shadcn/ui'],
    featured: false,
  },
  {
    numeral: 'V',
    title: 'WebRecord Sound App',
    subtitle: 'Opus Quintum',
    description: 'Browser-based audio recording with IndexedDB storage and Firebase authentication.',
    tech: ['React', 'TypeScript', 'IndexedDB', 'Firebase', 'Tailwind CSS'],
    featured: false,
  },
  {
    numeral: 'VI',
    title: 'CryptoTracker',
    subtitle: 'Opus Sextum',
    description: 'Modern cryptocurrency tracking with categorized views and 7-day price charts.',
    tech: ['Next.js', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    featured: false,
  },
];

const NAV_ITEMS = [
  { label: 'I · Domvs', href: '#home' },
  { label: 'II · De Me', href: '#about' },
  { label: 'III · Armamenta', href: '#skills' },
  { label: 'IV · Odyssea', href: '#experience' },
  { label: 'V · Conqvestvs', href: '#projects' },
  { label: 'VI · Scribe', href: '#contact' },
];

// ═══════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════

// Chisel Typing Effect Component
function ChiselText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedChars((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 80);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text.length, delay]);

  return (
    <span ref={ref} className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 1.3, y: -5, filter: 'blur(4px)' }}
          animate={i < displayedChars ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      {displayedChars < text.length && (
        <span className="inline-block w-[3px] h-[1em] bg-[var(--gold)] ml-1 animate-pulse" />
      )}
    </span>
  );
}

// Greek Key Divider
function GreekKeyDivider({ symbol = '⚱️' }: { symbol?: string }) {
  return (
    <div className="divider-temple py-8">
      <span className="text-2xl">{symbol}</span>
    </div>
  );
}

// Section Header
function SectionHeader({ numeral, title, subtitle }: { numeral: string; title: string; subtitle: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span
        className="font-[var(--font-cinzel)] text-[var(--gold)] text-sm tracking-[0.3em] uppercase"
        style={{ fontFamily: 'var(--font-cinzel)' }}
      >
        {numeral}
      </span>
      <h2
        className="text-4xl md:text-5xl font-semibold mt-2 tracking-wide text-[var(--obsidian)]"
        style={{ fontFamily: 'var(--font-cinzel)' }}
      >
        {title}
      </h2>
      <p
        className="text-lg text-[var(--bronze)] mt-2 italic"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}

// Skill Shield Component
function SkillShield({ skill, delay }: { skill: { name: string; level: number; roman: string }; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="relative p-4 rounded-lg bg-[var(--marble-cream)] border-2 border-[var(--border)] hover:border-[var(--gold)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-center justify-between mb-2">
          <span
            className="font-semibold text-[var(--obsidian)]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {skill.name}
          </span>
          <span
            className="text-xs text-[var(--gold)] tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            {skill.roman}
          </span>
        </div>
        <div className="progress-bar-olympian">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card-conquest rounded-lg overflow-hidden ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="text-[var(--gold)] text-sm tracking-widest"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              OPVS {project.numeral}
            </span>
            <h3
              className="text-2xl font-semibold text-[var(--obsidian)] mt-1"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm text-[var(--bronze)] italic"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {project.subtitle}
            </p>
          </div>
          {project.featured && (
            <span className="text-2xl">🏆</span>
          )}
        </div>

        <p
          className="text-[var(--obsidian)] opacity-80 mb-6 leading-relaxed"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-[var(--marble-vein)] text-[var(--obsidian)] border border-[var(--border)]"
              style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Timeline Item Component
function TimelineItem({ experience, index }: { experience: typeof EXPERIENCE[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] odyssey-line" />

      {/* Timeline Node */}
      <div className="odyssey-node absolute left-[-8px] top-0" />

      <div className="ml-4">
        <span
          className="text-[var(--gold)] text-sm tracking-widest block mb-1"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          {experience.period}
        </span>
        <span
          className="text-xs text-[var(--bronze)] flex items-center gap-1 mb-2"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          <Calendar className="w-3 h-3" />
          {experience.periodShort}
        </span>

        <h3
          className="text-2xl font-semibold text-[var(--obsidian)]"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {experience.company}
        </h3>
        <p
          className="text-[var(--patina)] font-medium mb-2"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {experience.role}
        </p>
        <p
          className="text-[var(--obsidian)] opacity-70 italic mb-4"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          &quot;{experience.description}&quot;
        </p>

        <ul className="space-y-2">
          {experience.projects.map((project, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-[var(--obsidian)]"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              <span className="text-[var(--gold)] mt-1">⚔️</span>
              {project}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Console Easter Egg
  useEffect(() => {
    console.log(`
    %c
       🏛️ AVE, DEVELOPER! 🏛️
    ╔════════════════════════════════╗
    ║                                ║
    ║   "Veni, Vidi, Codi"           ║
    ║                                ║
    ║   You found the temple         ║
    ║   of source code.              ║
    ║                                ║
    ║   Welcome to my portfolio.     ║
    ║   - Suthep Jantawee            ║
    ║                                ║
    ╚════════════════════════════════╝
    `, 'color: #d4af37; font-family: monospace; font-size: 12px;');
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* ═══════════════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════════════ */}
      <nav className="nav-temple fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              <span className="text-xl">🏛️</span>
              <span className="text-lg font-semibold text-[var(--obsidian)] tracking-wide hidden sm:block">
                SVTHEP
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-sm ${activeSection === item.href.slice(1) ? 'text-[var(--gold-dark)]' : ''}`}
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 text-[var(--obsidian)]"
            >
              <span className="text-xl">📜</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[var(--marble)] border-t border-[var(--border)] py-4"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsNavOpen(false)}
                className="block px-6 py-3 text-[var(--obsidian)] hover:bg-[var(--marble-cream)]"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 marble-subtle opacity-50" />

        {/* Decorative Columns */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-16 h-[60vh] ionic-column opacity-30" />
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-16 h-[60vh] ionic-column opacity-30" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Greeting */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--gold)] tracking-[0.5em] text-sm md:text-base mb-4"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            AVE, VISITOR
          </motion.p> */}

          {/* Main Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--obsidian)] tracking-wide mb-6 mt-6"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            <ChiselText text="SVTHEP" delay={100} />
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-normal text-[var(--bronze)]">
              <ChiselText text="JANTAWEE" delay={500} />
            </span>
          </h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto my-8"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="terminal-marble rounded-lg overflow-hidden max-w-xl mx-auto mb-8"
          >
            <div className="terminal-header px-4 py-3 flex items-center gap-3">
              <div className="terminal-dot bg-[var(--wine)]" />
              <div className="terminal-dot bg-[var(--gold)]" />
              <div className="terminal-dot bg-[var(--patina)]" />
              <span
                className="ml-auto text-[var(--gold)] text-xs tracking-wider"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                TERMINVS
              </span>
            </div>
            <div
              className="p-6 text-left"
              style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
            >
              <p className="text-[#6b7280] text-sm mb-2"># whoami</p>
              <p className="text-[var(--gold)] mb-4">
                <span className="text-[var(--patina)]">$</span> Full Stack Developer
              </p>
              <p className="text-[#6b7280] text-sm mb-2"># cat motto.txt</p>
              <p className="text-[#fffff0] mb-4">
                <span className="text-[var(--patina)]">&gt;</span> &quot;Veni, Vidi, Codi&quot;
              </p>
              <p className="text-[#6b7280] text-sm mb-2"># experience --years</p>
              <p className="text-[var(--bronze)]">
                <span className="text-[var(--patina)]">&gt;</span> III+ years of service
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="btn-temple px-8 py-3 rounded-lg"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              🏛️ View Conquests
            </a>
            <a
              href="#contact"
              className="btn-scroll px-8 py-3 rounded-lg"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              📜 Send Petition
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-12 text-[var(--obsidian)] opacity-60 italic"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            « Veni · Vidi · Codi »
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-[var(--gold)]"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            numeral="SECTIŌ II"
            title="DE ME"
            subtitle="About the Developer"
          />

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2"
            >
              <div className="relative">
                {/* Marble Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--marble)] via-[var(--marble-cream)] to-[var(--marble-vein)] rounded-lg transform rotate-3" />
                <div className="relative bg-[var(--obsidian)] rounded-lg p-1">
                  <div className="bg-gradient-to-br from-[var(--pantheon)] to-[var(--obsidian)] rounded-lg p-8 text-center">
                    <div className="text-8xl mb-4">🗿</div>
                    <h3
                      className="text-2xl text-[var(--gold)] tracking-wider"
                      style={{ fontFamily: 'var(--font-cinzel)' }}
                    >
                      SVTHEP
                    </h3>
                    <p
                      className="text-[var(--marble)] opacity-80 italic"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      Full Stack Centurion
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <span
                          className="text-2xl text-[var(--gold)]"
                          style={{ fontFamily: 'var(--font-cinzel)' }}
                        >
                          III+
                        </span>
                        <p className="text-xs text-[var(--marble)] opacity-60">Years</p>
                      </div>
                      <div className="text-center">
                        <span
                          className="text-2xl text-[var(--gold)]"
                          style={{ fontFamily: 'var(--font-cinzel)' }}
                        >
                          X+
                        </span>
                        <p className="text-xs text-[var(--marble)] opacity-60">Projects</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nameplate */}
                <div className="mt-4 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)] p-[2px] rounded">
                  <div className="bg-[var(--obsidian)] px-4 py-2 rounded text-center">
                    <span
                      className="text-[var(--gold)] text-sm tracking-widest"
                      style={{ fontFamily: 'var(--font-cinzel)' }}
                    >
                      DEVELOPERIVS MAXIMVS
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-3"
            >
              <div className="papyrus-block rounded-lg p-8">
                <div className="prose-classical">
                  <p className="mb-6">
                    Greetings, noble visitor. I am a Full Stack Developer from the Kingdom of Siam (Bangkok, Thailand),
                    dedicated to building digital temples with the precision of Roman engineering
                    and the wisdom of Greek philosophy.
                  </p>
                  <p className="mb-6">
                    With III+ years of experience in the digital arena, I have mastered the arts of
                    React, Next.js, TypeScript, and the mystical powers of AI integration. I am passionate
                    about crafting intuitive interfaces and exploring modern frameworks to enhance
                    developer workflows.
                  </p>
                  <p>
                    Currently seeking new conquests as a Front-End Developer, Back-End Developer,
                    or Full Stack Developer. Ready to build the next great digital empire.
                  </p>
                </div>

                {/* Quick Info */}
                <div className="mt-8 pt-6 border-t border-[var(--bronze)] border-opacity-30">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--gold)]" />
                      <span style={{ fontFamily: 'var(--font-lora)' }}>Bangkok, Thailand</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--gold)]">⚱️</span>
                      <span style={{ fontFamily: 'var(--font-lora)' }}>Accepting commissions</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GreekKeyDivider symbol="⚔️" />

      {/* ═══════════════════════════════════════════════════════════════
          SKILLS SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section id="skills" className="py-24 px-4 md:px-8 bg-[var(--marble-cream)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            numeral="SECTIŌ III"
            title="ARMAMENTA"
            subtitle="The Armory of Skills"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-[var(--gold)]" />
                <h3
                  className="text-xl text-[var(--obsidian)]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  Languages
                </h3>
              </div>
              <div className="space-y-3">
                {SKILLS.languages.map((skill, i) => (
                  <SkillShield key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 text-[var(--gold)]" />
                <h3
                  className="text-xl text-[var(--obsidian)]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  Frameworks & Libraries
                </h3>
              </div>
              <div className="space-y-3">
                {SKILLS.frameworks.map((skill, i) => (
                  <SkillShield key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-6 h-6 text-[var(--gold)]" />
                <h3
                  className="text-xl text-[var(--obsidian)]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  DevOps & CI/CD
                </h3>
              </div>
              <div className="space-y-3">
                {SKILLS.devops.map((skill, i) => (
                  <SkillShield key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-[var(--gold)]" />
                <h3
                  className="text-xl text-[var(--obsidian)]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  Databases & Tools
                </h3>
              </div>
              <div className="space-y-3">
                {SKILLS.databases.map((skill, i) => (
                  <SkillShield key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>
          </div>

          {/* AI Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3
              className="text-xl text-[var(--obsidian)] mb-6"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              🔮 AI Tools Mastery
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Claude Code', 'Cursor', 'Gemini API', 'ChatGPT', 'v0.dev', 'lovable.dev'].map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] text-[var(--obsidian)] text-sm font-medium"
                  style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <GreekKeyDivider symbol="🏺" />

      {/* ═══════════════════════════════════════════════════════════════
          EXPERIENCE SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section id="experience" className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            numeral="SECTIŌ IV"
            title="ODYSSEA"
            subtitle="The Journey Through Time"
          />

          <div className="relative">
            {EXPERIENCE.map((exp, i) => (
              <TimelineItem key={i} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider symbol="🏆" />

      {/* ═══════════════════════════════════════════════════════════════
          PROJECTS SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section id="projects" className="py-24 px-4 md:px-8 bg-[var(--marble-cream)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            numeral="SECTIŌ V"
            title="CONQVESTVS"
            subtitle="The Conquests & Achievements"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/bananafaraday"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              <Github className="w-5 h-5" />
              View More on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <GreekKeyDivider symbol="📜" />

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT SECTION
          ═══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            numeral="SECTIŌ VI"
            title="PETĪTIO"
            subtitle="Seek Audience with the Developer"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="papyrus-block rounded-lg p-8">
                <h3
                  className="text-xl text-[var(--obsidian)] mb-6"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  📬 Contact Channels
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:bananammm0001@gmail.com"
                    className="flex items-center gap-3 text-[var(--obsidian)] hover:text-[var(--gold)] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[var(--gold)]" />
                    <span style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>bananammm0001@gmail.com</span>
                  </a>

                  <a
                    href="tel:0901834036"
                    className="flex items-center gap-3 text-[var(--obsidian)] hover:text-[var(--gold)] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[var(--gold)]" />
                    <span style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>090-183-4036</span>
                  </a>

                  <div className="flex items-center gap-3 text-[var(--obsidian)]">
                    <MapPin className="w-5 h-5 text-[var(--gold)]" />
                    <span style={{ fontFamily: 'var(--font-lora)' }}>Bangkok, Kingdom of Siam</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-[var(--bronze)] border-opacity-30">
                  <h4
                    className="text-sm text-[var(--bronze)] mb-4 tracking-wider"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    FOLLOW THE JOURNEY
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/bananafaraday"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-[var(--obsidian)] text-[var(--gold)] hover:bg-[var(--pantheon)] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-[var(--obsidian)] text-[var(--gold)] hover:bg-[var(--pantheon)] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-sm text-[var(--obsidian)] mb-2"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Marcus Aurelius"
                    className="input-petition w-full px-4 py-3 rounded-lg"
                    style={{ fontFamily: 'var(--font-lora)' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm text-[var(--obsidian)] mb-2"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="emperor@rome.gov"
                    className="input-petition w-full px-4 py-3 rounded-lg"
                    style={{ fontFamily: 'var(--font-lora)' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm text-[var(--obsidian)] mb-2"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="I seek your expertise in building..."
                    className="input-petition w-full px-4 py-3 rounded-lg resize-none"
                    style={{ fontFamily: 'var(--font-lora)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-temple w-full py-4 rounded-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  <Send className="w-4 h-4" />
                  Send Petition
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════ */}
      <footer className="footer-inscription py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Greek Key Border */}
          <div className="greek-key-simple mb-8 opacity-30" />

          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Logo & Tagline */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="text-2xl">🏛️</span>
                <span
                  className="text-xl text-[var(--gold)]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  SVTHEP
                </span>
              </div>
              <p
                className="text-[var(--marble)] opacity-60 italic"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                &quot;Veni, Vidi, Codi&quot;
                <br />
                I came, I saw, I coded.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-[var(--gold)] mb-4 tracking-wider"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                QUICK LINKS
              </h4>
              <nav className="space-y-2">
                {NAV_ITEMS.slice(0, 4).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-[var(--marble)] opacity-60 hover:opacity-100 hover:text-[var(--gold)] transition-all text-sm"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-[var(--gold)] mb-4 tracking-wider"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                CONTACT
              </h4>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:bananammm0001@gmail.com"
                  className="block text-[var(--marble)] opacity-60 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                >
                  bananammm0001@gmail.com
                </a>
                <p
                  className="text-[var(--marble)] opacity-60"
                  style={{ fontFamily: 'var(--font-lora)' }}
                >
                  Bangkok, Thailand
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[var(--gold)] border-opacity-20 text-center">
            <p
              className="text-[var(--marble)] opacity-40 text-sm"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              MMXXIV · Crafted with ⚱️ in Bangkok
            </p>
            <p
              className="text-[var(--gold)] opacity-60 text-xs mt-2 italic"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              « Carpe Codem » — Seize the Code
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
