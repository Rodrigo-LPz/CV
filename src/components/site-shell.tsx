'use client';

import { motion } from 'framer-motion';
import {
  Cog,
  ContactRound,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { siteContent, type Locale } from '@/data/site-content';
import { LanguageToggle } from './language-toggle';
import { SectionCard } from './section-card';

const navLinks = ['about', 'journey', 'techStack', 'skills', 'contact'] as const;

function HardSkillsIcon() {
  return (
    <span className="relative inline-flex h-6 w-6 items-center justify-center">
      <Wrench size={18} />
      <Cog size={11} className="absolute -bottom-1 -right-2" />
    </span>
  );
}

export function SiteShell() {
  const [locale, setLocale] = useState<Locale>('es');
  const content = useMemo(() => siteContent[locale], [locale]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-14 pt-8 md:px-10">
      <header className="mb-12 flex flex-col gap-6 rounded-3xl border border-white/10 bg-[var(--surface)]/60 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-[var(--muted)]">
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} className="transition hover:text-[var(--accent)]">
              {content.nav[link]}
            </a>
          ))}
        </nav>
        <LanguageToggle
          locale={locale}
          label={content.localeLabel}
          onToggle={() => setLocale((prev) => (prev === 'es' ? 'en' : 'es'))}
        />
      </header>

      <main className="space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-[var(--surface)]/55 p-8"
        >
          <span className="mb-5 inline-flex rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            {content.hero.badge}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {content.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#techStack"
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[var(--accent-dark)]"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </motion.section>

        <section className="grid gap-6 md:grid-cols-2">
          <SectionCard
            id="about"
            title={content.sections.about.title}
            description={content.sections.about.description}
            icon={<UserRound size={22} />}
          />
          <SectionCard
            id="journey"
            title={content.sections.journey.title}
            description={content.sections.journey.description}
            icon={<GraduationCap size={22} />}
          />
        </section>

        <SectionCard
          id="techStack"
          title={content.sections.techStack.title}
          description={content.sections.techStack.description}
          icon={<Monitor size={22} />}
        />

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-[var(--surface)]/55 p-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <SectionCard
              id="hard-skills"
              title={content.sections.hardSkills.title}
              description={content.sections.hardSkills.description}
              icon={<HardSkillsIcon />}
            />
            <SectionCard
              id="soft-skills"
              title={content.sections.softSkills.title}
              description={content.sections.softSkills.description}
              icon={<UsersRound size={22} />}
            />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-[var(--surface)]/60 p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-xl bg-[var(--accent)]/15 p-2 text-[var(--accent)]">
              <ContactRound size={22} />
            </span>
            <h2 className="text-2xl font-bold text-white">{content.sections.contact.title}</h2>
          </div>
          <p className="mb-6 text-sm text-[var(--muted)]">{content.sections.contact.description}</p>

          <ul className="space-y-3 text-base font-medium text-[var(--foreground)]">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-[var(--accent)]" />
              <span>{content.contact.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--accent)]" />
              <a href={`mailto:${content.contact.email}`} className="transition hover:text-[var(--accent)]">
                {content.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--accent)]" />
              <a href="tel:+34645950225" className="transition hover:text-[var(--accent)]">
                {content.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github size={18} className="text-[var(--accent)]" />
              <a
                href="https://github.com/Rodrigo-LPz"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--accent)]"
              >
                {content.contact.github}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-[var(--accent)]" />
              <a
                href="https://www.linkedin.com/in/rodrigo-lopez-perez"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--accent)]"
              >
                {content.contact.linkedin}
              </a>
            </li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
}
